# Simandou Career Navigator

A modern web application for exploring career opportunities in the mining industry, specifically tailored for the Simandou project.

## Project Overview

This is a React-based web application that helps users navigate career opportunities, explore job listings, view locations on an interactive map, and manage their career preferences.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd simandou-career-navigator

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Modern React component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Features

- 🏠 **Home Page** - Project overview and navigation
- 💼 **Jobs** - Browse available career opportunities
- 📍 **Map** - Interactive location explorer
- ❤️ **Favorites** - Save and manage preferred opportunities
- 👤 **Profile** - User preferences and settings

## Deployment

### Netlify Deployment (Recommended)

This project is optimized for Netlify deployment with automatic builds and deployments.

#### Option 1: Deploy via Git (Recommended)

1. **Push your code to GitHub/GitLab**
   ```bash
   git add .
   git commit -m "Prepare for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com) and sign in
   - Click "New site from Git" 
   - Connect your repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. **Deploy**
   - Netlify will automatically build and deploy your site
   - Your site will be available at `https://your-site-name.netlify.app`

#### Option 2: Manual Deploy

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Drag and drop the `dist` folder to the deploy area

#### Environment Variables

The project automatically detects Netlify environment and configures the correct base path. No additional environment variables are needed for basic deployment.

### GitHub Pages Deployment (Alternative)

If you prefer GitHub Pages, the project includes GitHub Actions workflow:

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source

2. **Deploy**
   - Push to main branch triggers automatic deployment
   - Site will be available at `https://username.github.io/simandou-career-navigator/`

### Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18
- **Single Page Application**: ✅ Configured with redirects

### Performance Optimizations

- Code splitting for vendor libraries
- Asset caching headers
- Minified and optimized builds
- Modern JavaScript targeting

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components
├── data/             # Static data and configurations
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── assets/           # Images and static assets
```

## Development

```sh
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

### GitHub Pages (Automatic)

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

**Live Demo**: `https://nicolasbamamou.github.io/simandou-career-navigator/`

### Manual Deployment

To deploy manually to other hosting services:

1. Build the project for production:
   ```sh
   npm run build
   ```

2. Deploy the `dist` folder to your preferred hosting service (Netlify, Vercel, etc.)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request
