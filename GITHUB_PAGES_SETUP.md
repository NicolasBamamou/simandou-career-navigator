# GitHub Pages Setup Guide

Follow these steps to enable GitHub Pages for your repository and deploy your Simandou Career Navigator automatically.

## 🚀 Quick Start

### 1. Repository Settings

1. Go to your GitHub repository: `https://github.com/NicolasBamamou/simandou-career-navigator`
2. Click on **Settings** tab (top navigation)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### 2. Enable GitHub Actions

1. Go to the **Actions** tab in your repository
2. If prompted, click **Enable Actions** to allow GitHub Actions workflows
3. The deployment workflow will automatically run when you push to the main branch

### 3. First Deployment

Once you've pushed this code to your repository, the workflow will:
- ✅ Install dependencies
- ✅ Build the React application
- ✅ Deploy to GitHub Pages
- ✅ Handle client-side routing correctly

## 🌐 Access Your Site

Your deployed site will be available at:
**`https://nicolasbamamou.github.io/simandou-career-navigator/`**

## 🔄 Automatic Updates

- **Every push to `main` branch** triggers a new deployment
- **Build time**: ~2-3 minutes
- **No manual intervention required**

## 📊 Monitor Deployments

1. Go to **Actions** tab to see workflow runs
2. Click on any workflow run to see detailed logs
3. Green checkmark ✅ = successful deployment
4. Red X ❌ = build/deployment failed (check logs)

## 🛠️ Technical Details

This setup includes:
- ✅ **Vite build optimization** for production
- ✅ **Client-side routing support** via 404.html redirect
- ✅ **Automatic asset optimization** (images, CSS, JS)
- ✅ **Proper base path configuration** for GitHub Pages
- ✅ **SEO-friendly meta tags**

## 🔧 Local Development

Continue developing locally as usual:
```bash
npm run dev      # Start development server
npm run build    # Test production build
npm run preview  # Preview production build locally
```

## ❗ Troubleshooting

### Deployment Fails
1. Check the **Actions** tab for error logs
2. Ensure repository is **public** (required for free GitHub Pages)
3. Verify **GitHub Actions** are enabled in repository settings

### 404 Errors on Direct URLs
- ✅ Already handled with 404.html redirect setup
- Routes like `/metiers/engineer` will work correctly

### Build Errors
- Run `npm run build` locally to test
- Check for TypeScript errors or missing dependencies
- Review the workflow logs in Actions tab

## 🎉 Success!

Once setup is complete, your Simandou Career Navigator will be:
- 🌍 **Live on the web** at your GitHub Pages URL
- 🔄 **Automatically updated** with every code change
- 📱 **Mobile responsive** and fast-loading
- 🔍 **SEO optimized** for search engines
