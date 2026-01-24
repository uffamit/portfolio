/**
 * Performance Monitoring Hook
 * Tracks Core Web Vitals and other key performance metrics
 */

'use client';

import { useEffect } from 'react';

// Type definitions for performance entries
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEventTiming extends PerformanceEntry {
  duration: number;
}

interface LargestContentfulPaint extends PerformanceEntry {
  renderTime: number;
  loadTime: number;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay (deprecated, use INP)
  inp?: number; // Interaction to Next Paint
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

/**
 * Send metrics to analytics service
 */
const sendMetricsToAnalytics = (metrics: PerformanceMetrics) => {
  // Send to your analytics service (Google Analytics, Mixpanel, etc.)
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      metrics,
    });
  }

  // Or send to your custom endpoint
  if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
    navigator.sendBeacon(
      process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT,
      JSON.stringify(metrics)
    );
  }
};

/**
 * Hook to monitor Core Web Vitals
 */
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {};

    // Monitor First Contentful Paint
    const paintEntries = performance.getEntriesByType('paint');
    paintEntries.forEach((entry) => {
      if (entry.name === 'first-contentful-paint') {
        metrics.fcp = entry.startTime;
      }
    });

    // Monitor navigation timing
    const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navTiming) {
      metrics.ttfb = navTiming.responseStart - navTiming.fetchStart;
    }

    // Monitor Largest Contentful Paint using PerformanceObserver
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as LargestContentfulPaint;
          metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;

          // Log when LCP is finalized (typically ~5 seconds after page load)
          if (metrics.fcp && metrics.lcp) {
            console.log('[Performance] LCP:', metrics.lcp, 'ms');
          }
        });

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Cleanup
        return () => lcpObserver.disconnect();
      } catch (e) {
        console.warn('LCP observer not supported');
      }
    }

    // Monitor Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as LayoutShift;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          metrics.cls = clsValue;
        });

        clsObserver.observe({ entryTypes: ['layout-shift'] });

        return () => clsObserver.disconnect();
      } catch (e) {
        console.warn('CLS observer not supported');
      }
    }

    // Monitor Interaction to Next Paint (INP)
    if ('PerformanceObserver' in window) {
      try {
        let worstINP = 0;
        const inpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const eventEntry = entry as PerformanceEventTiming;
            const inp = eventEntry.duration;
            if (inp > worstINP) {
              worstINP = inp;
              metrics.inp = worstINP;
            }
          }
        });

        inpObserver.observe({ entryTypes: ['event'] });

        return () => inpObserver.disconnect();
      } catch (e) {
        console.warn('INP observer not supported');
      }
    }

    // Send metrics after page load
    const sendMetricsTimer = setTimeout(() => {
      if (Object.keys(metrics).length > 0) {
        sendMetricsToAnalytics(metrics);
        console.log('[Performance Metrics]', metrics);
      }
    }, 5000);

    return () => clearTimeout(sendMetricsTimer);
  }, []);
};

/**
 * Hook to measure component render time
 */
export const useRenderTime = (componentName: string) => {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;

      if (process.env.NODE_ENV === 'development') {
        console.log(`[${componentName}] Render time: ${renderTime.toFixed(2)}ms`);
      }
    };
  }, [componentName]);
};

/**
 * Measure memory usage (for debugging)
 */
export const logMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    if (!memory) return;
    console.log(`Memory - Used: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB / Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`);
  }
};

/**
 * Report metrics to Web Vitals endpoint
 */
export const reportWebVitals = async (metric: {
  name: string;
  value: number;
  rating?: string;
  id: string;
  delta: number;
  navigationType: string;
}) => {
  // Only report in production
  if (process.env.NODE_ENV !== 'production') return;

  const body = JSON.stringify(metric);

  if (navigator.sendBeacon) {
    navigator.sendBeacon('/api/metrics', body);
  } else {
    fetch('/api/metrics', {
      body,
      method: 'POST',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
