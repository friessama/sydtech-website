# Sydtech Digital Industries Website

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS for Sydtech Digital Industries.

## Features

- **Modern UI/UX Design**: Clean, professional design following the brand guidelines
- **Parallax Animations**: Smooth scrolling effects inspired by we-bridge.com
- **Interactive Carousels**: Service cards and partnership logos with auto-scroll
- **Stacking Card Effects**: Engaging scroll-based animations for the About section
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Complete meta tags, Open Graph, and semantic HTML
- **Performance**: Fast loading with optimized images and lazy loading
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel React
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment on Vercel

### Easy Deployment (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [Vercel](https://vercel.com) and sign up or log in

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

### Manual Deployment via CLI

1. Install Vercel CLI:

```bash
npm install -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy from the project directory:

```bash
vercel
```

4. Follow the prompts to complete deployment

### Build Commands

- **Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Start Production Server**: `npm start`
- **Lint**: `npm run lint`

## Project Structure

```
sydtech-website/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── components/
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── Footer.tsx          # Footer with back-to-top
│   └── sections/
│       ├── HeroSection.tsx        # Hero with parallax
│       ├── ServicesSection.tsx    # Services carousel
│       ├── AboutSection.tsx       # About with stacking cards
│       ├── ProcessSection.tsx     # Process steps
│       └── PartnershipsSection.tsx # Partner logos carousel
├── public/                  # Static assets
└── vercel.json             # Vercel configuration
```

## Design System

### Color Palette

- **Primary Blue**: #0077B6 - Headlines, CTAs, Primary buttons
- **Secondary Teal**: #00A896 - Accents, Secondary elements
- **Accent Green**: #6BBF59 - Logo accent, Success states
- **Dark Navy**: #003049 - Footer background, Text
- **Light Gray**: #F5F5F5 - Section backgrounds
- **Orange**: #F26419 - Partner branding

## Sections

1. **Navigation Bar**: Sticky navigation with smooth scroll
2. **Hero Section**: Parallax animations and call-to-action
3. **Services Section**: Interactive carousel showcasing services
4. **About Section**: Stacking card animations on scroll
5. **Process Section**: Step-by-step process cards
6. **Partnerships**: Auto-scrolling partner logos
7. **Footer**: Complete contact info and social links

## Customization

### Updating Content

- Edit section components in `components/sections/`
- Update colors in `app/globals.css`
- Modify metadata in `app/layout.tsx`

### Adding Images

Place images in the `public/images/` directory and reference them using:

```tsx
<Image src="/images/your-image.jpg" alt="Description" width={800} height={600} />
```

## Performance Optimization

- Images are lazy-loaded by default
- Framer Motion animations are optimized for 60fps
- Code splitting via Next.js App Router
- Tailwind CSS purges unused styles in production

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

Copyright © 2025 Sydtech Digital Industries Sdn Bhd. All rights reserved.

## Support

For support, email ask@sydtechindustries.io or call +603 2779 1114

---

**Prepared by**: Avant Garde Media Group Sdn Bhd
