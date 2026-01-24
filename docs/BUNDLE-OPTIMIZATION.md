/**
 * Bundle Size Optimization Guide
 * 
 * Actions taken for better performance:
 * 1. Enabled SWC minification (faster than Terser)
 * 2. Configured experimental.optimizePackageImports for tree-shaking
 * 3. Used dynamic imports for heavy components
 * 4. Implemented lazy loading for below-the-fold content
 */

// Scripts to analyze bundle:
// npx next build --analyze
// npx next build && npx analyze-bundle .next/server/*.js

/**
 * Bundle size optimization recommendations:
 * 
 * 1. For Radix UI components: Only import used components
 *    - Avoid import * from '@radix-ui/react-*'
 *    - Use tree-shakeable imports
 * 
 * 2. For Three.js: Consider using three-stdlib alternatives
 *    - The full Three.js library is ~600KB
 *    - Consider using Babel plugin to tree-shake unused exports
 * 
 * 3. For React Markdown: Code splitting works well
 *    - Current implementation uses dynamic imports
 * 
 * 4. For Recharts: Import only needed chart types
 *    - Don't import the entire library
 */

// Recommended package.json scripts additions:
/*
{
  "scripts": {
    "analyze:bundle": "ANALYZE=true next build",
    "analyze:dependencies": "npm ls --depth=0",
    "check:bundle-size": "bundlesize"
  }
}
*/

export const bundleOptimizationTips = `
# Bundle Size Optimization Checklist

## Current Optimizations:
✓ Dynamic imports for below-the-fold sections
✓ SWC minification enabled
✓ Tree-shaking configured for @radix-ui and lucide-react
✓ Optimized font loading with next/font
✓ Production browser source maps disabled
✓ Unused CSS removed via Tailwind
✓ Image optimization with responsive formats

## Monitor:
- Main bundle size
- JavaScript size
- CSS size
- Image sizes
- Third-party scripts

## Tools to use:
- Bundle analyzer: npx next build --analyze
- Chrome DevTools Lighthouse
- WebPageTest
- GTmetrix
`;
