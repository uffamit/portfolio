# Analytics Setup Guide

This document explains how to set up Google Analytics 4 (GA4) for the portfolio website.

## Overview

Google Analytics 4 has been integrated into the portfolio website. It provides insights into:
- Website traffic and user behavior
- Page performance metrics
- User demographics and interests
- Conversion tracking and goals
- Real-time user activity

## Setup Instructions

### 1. Create a Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Create"** or **"Admin"** → **"Create Property"**
4. Fill in:
   - **Property name**: "amitdevx.tech" or similar
   - **Reporting timezone**: Select your timezone
   - **Currency**: USD or your preferred currency
5. Click **"Create"**

### 2. Create a Web Data Stream

1. In the property, go to **"Data streams"**
2. Click **"Add stream"** → **"Web"**
3. Enter:
   - **Website URL**: `https://amitdevx.tech`
   - **Stream name**: "Portfolio Website"
4. Click **"Create stream"**
5. You'll see your **Measurement ID** (starts with `G-`)

### 3. Add Environment Variable

1. Copy your **Measurement ID**: `G-CT3XHXK4SG`
2. Add to your `.env.local` file:
   ```
   NEXT_PUBLIC_GA_ID=G-CT3XHXK4SG
   ```

3. Restart the development server:
   ```bash
   npm run dev
   ```

### Implementation Details

The portfolio uses **Next.js Script component** for optimal GA4 integration:

```tsx
import Script from 'next/script';

// In layout.tsx
{process.env.NEXT_PUBLIC_GA_ID && (
  <>
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
    />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
            page_path: window.location.pathname,
          });
        `,
      }}
    />
  </>
)}
```

**Benefits of this approach**:
- ✅ Uses `afterInteractive` strategy (non-blocking)
- ✅ Only loads if `NEXT_PUBLIC_GA_ID` is set
- ✅ Automatic page tracking
- ✅ Next.js optimized

### 4. Verify Installation

1. Go to your website: https://amitdevx.tech
2. In Google Analytics, go to **"Real-time"** → **"Overview"**
3. You should see yourself as an active user
4. Check that page views are being tracked

## Important Notes

### Production Deployment (Vercel)

If using Vercel for deployment:

1. Go to Vercel project settings
2. Navigate to **"Environment Variables"**
3. Add a new variable:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-CT3XHXK4SG`
   - **Environments**: Select "Production"
4. Redeploy your site

**Note**: The variable is already configured in `.env.local` for development. Vercel will use the production value automatically.

### Privacy & GDPR

Since the portfolio is tracking users:
- Add a privacy policy mentioning analytics (see Privacy Policy section below)
- Consider adding a cookie consent banner for GDPR compliance
- Only use necessary analytics features

## Accessing Analytics Dashboard

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property: **"amitdevx.tech"**
3. Explore key metrics:
   - **Home**: Overview of site performance
   - **Real-time**: Live user activity
   - **Reports** → **User** → **Demographics**: Visitor information
   - **Acquisition**: How users find your site
   - **Engagement**: Which pages are most visited

## Key Metrics to Monitor

### User Engagement
- **Sessions**: Number of user visits
- **Users**: Unique visitors
- **Bounce rate**: Percentage of single-page sessions
- **Average session duration**: How long users stay

### Page Performance
- **Top pages**: Most visited pages
- **Page load time**: Performance metrics
- **Exit pages**: Where users leave

### Traffic Sources
- **Organic search**: Google search traffic
- **Direct**: Users typing URL directly
- **Referral**: Links from other websites
- **Social**: Traffic from social media

## Custom Events (Optional)

You can track custom events like button clicks, form submissions, etc.

Example:
```typescript
// Track a custom event
gtag('event', 'download_cv', {
  'file_name': 'Amit_Divekar_CV.pdf'
});
```

## Troubleshooting

### Analytics Not Showing Data

1. **Check environment variable**:
   ```bash
   echo $NEXT_PUBLIC_GA_ID
   ```
   Should output your GA ID

2. **Clear cache**:
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Check Real-time in GA**:
   Visit site and check if you appear in Google Analytics Real-time dashboard

4. **Browser console**:
   Open DevTools (F12) and check for errors related to gtag

### Wrong Measurement ID

- Double-check your Measurement ID in Google Analytics
- It should start with `G-`
- Ensure it's copied exactly without spaces

## Resources

- [Google Analytics 4 Documentation](https://support.google.com/analytics/answer/10089681)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Next.js Script Component](https://nextjs.org/docs/app/api-reference/components/script)

## Privacy Policy

Add to your privacy policy:

> We use Google Analytics to understand how visitors use our site. This helps us improve the website experience. Google Analytics uses cookies to track anonymous usage data. For more information, visit [Google Analytics Privacy Policy](https://support.google.com/analytics/answer/6004245).

---

**Last Updated**: January 10, 2026  
**Status**: Setup Ready ✅
