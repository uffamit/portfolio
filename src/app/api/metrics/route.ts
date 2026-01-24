/**
 * Performance Metrics API Endpoint
 * Tracks and logs Core Web Vitals metrics
 */

import { NextRequest, NextResponse } from 'next/server';

interface PerformanceMetric {
  name: string;
  value: number;
  rating?: string;
  id: string;
  delta: number;
  navigationType: string;
  timestamp?: string;
  url?: string;
  userAgent?: string;
}

/**
 * Log metrics to console and potentially send to monitoring service
 */
function logMetric(metric: PerformanceMetric) {
  const { name, value, rating } = metric;
  
  // Color code based on rating
  let color = '🟢'; // Good
  if (rating === 'needs-improvement') {
    color = '🟡'; // Needs improvement
  } else if (rating === 'poor') {
    color = '🔴'; // Poor
  }

  console.log(`${color} [${name}] ${value.toFixed(2)}ms (${rating})`);

  // Send to external monitoring service if needed
  if (process.env.EXTERNAL_METRICS_ENDPOINT) {
    fetch(process.env.EXTERNAL_METRICS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...metric,
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV,
      }),
    }).catch(err => console.error('Failed to send metrics:', err));
  }
}

/**
 * POST handler for performance metrics
 */
export async function POST(request: NextRequest) {
  try {
    const metric = (await request.json()) as PerformanceMetric;

    // Validate metric
    if (!metric.name || metric.value === undefined) {
      return NextResponse.json(
        { error: 'Invalid metric format' },
        { status: 400 }
      );
    }

    // Add request metadata
    const enrichedMetric: PerformanceMetric = {
      ...metric,
      timestamp: new Date().toISOString(),
      url: request.headers.get('referer') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Log the metric
    logMetric(enrichedMetric);

    // Store metrics (optional - integrate with your metrics backend)
    // await storeMetric(enrichedMetric);

    return NextResponse.json(
      { success: true, metric: enrichedMetric },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing metrics:', error);
    return NextResponse.json(
      { error: 'Failed to process metrics' },
      { status: 500 }
    );
  }
}

/**
 * GET handler to retrieve metrics summary (optional)
 */
export async function GET(_request: NextRequest) {
  // This could retrieve aggregated metrics from your storage
  return NextResponse.json({
    message: 'Performance metrics endpoint',
    methods: ['POST'],
    format: {
      name: 'string',
      value: 'number',
      rating: 'string (good|needs-improvement|poor)',
      id: 'string (unique metric id)',
      delta: 'number',
      navigationType: 'string',
    },
  });
}
