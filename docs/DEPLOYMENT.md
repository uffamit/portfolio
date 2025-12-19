# Deployment Guide

## 🚀 Deploying to Vercel (Recommended)

Vercel is the recommended platform for Next.js applications and offers the best performance and developer experience.

### Quick Deploy

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Import on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Environment Variables** (if using AI features)
   - In your Vercel project dashboard
   - Go to Settings → Environment Variables
   - Add: `GOOGLE_GENAI_API_KEY` with your API key

### Custom Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add your domain (e.g., `amitdevx.tech`)
3. Follow DNS configuration instructions
4. Vercel automatically provisions SSL certificates

## 🌐 Alternative Platforms

### Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Railway

1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login and deploy:
   ```bash
   railway login
   railway init
   railway up
   ```

### AWS Amplify

1. Install Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Initialize and deploy:
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

### Self-Hosted (VPS/Docker)

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Run with PM2** (recommended for production):
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

3. **Or use Docker**:
   ```dockerfile
   FROM node:20-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

   ```bash
   docker build -t portfolio .
   docker run -p 3000:3000 portfolio
   ```

## 📊 Performance Optimization

### Vercel Analytics (Optional)

Add to `package.json`:
```json
{
  "dependencies": {
    "@vercel/analytics": "^1.1.1"
  }
}
```

Add to `src/app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔒 Security Best Practices

1. **Environment Variables**: Never commit `.env` files
2. **API Keys**: Use environment variables in Vercel/Netlify
3. **CORS**: Configure in `vercel.json` if needed
4. **CSP Headers**: Already configured in `vercel.json`

## 🧪 Testing Before Deploy

```bash
# Build locally
npm run build

# Test production build
npm start

# Open http://localhost:3000
```

## 📝 CI/CD

Vercel automatically deploys on every push to `main`. For other platforms:

### GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - run: npm run deploy # Configure based on your platform
```

## 🆘 Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`

### Environment Variables Not Working
- Restart Vercel deployment after adding variables
- Prefix client-side variables with `NEXT_PUBLIC_`

### Custom Domain Not Working
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records in your domain registrar
- Check Vercel dashboard for SSL certificate status
