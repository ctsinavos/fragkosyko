# Fragkosiko - Garden Brunch & Cocktails in Naxos

A beautiful, fast, and modern website for Fragkosiko restaurant in Naxos, Greece. Built with Astro and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
cd fragkosuko
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:4321`

## 📦 Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🎨 Design System

### Colors

- **Garden Green**: `#4B7251` - Primary color for buttons and key accents
- **Sea Teal**: `#3F7F87` - Links, hover states, subtle lines
- **Prickly Pear**: `#C8575A` - Highlight accents
- **Cycladic White**: `#F8F5F0` - Background
- **Warm Sand**: `#E0C9A6` - Section backgrounds
- **Charcoal**: `#2D2A28` - Text

### Typography

- **Headings**: Tinos (serif) - Elegant and traditional
- **Body**: Open Sans (sans-serif) - Clean and readable
- **Accents**: Aka-Acid-Around - Special decorative elements

## 📄 Pages

- **Home** (`/`) - Hero, day-to-night experience, highlights, gallery preview
- **Menu** (`/menu`) - Brunch and cocktails menus with categories
- **About** (`/about`) - Restaurant story, philosophy, team
- **Gallery** (`/gallery`) - Photo gallery with filters
- **Reservations** (`/reservations`) - Booking form with Netlify Forms
- **Contact** (`/contact`) - Contact information, map, message form

## 🛠 Tech Stack

- **Framework**: Astro 4.0
- **Styling**: Tailwind CSS
- **Forms**: Netlify Forms (ready to deploy)
- **Fonts**: Google Fonts (Tinos, Open Sans)
- **Icons**: Inline SVG

## 📱 Features

- Fully responsive design
- Fast page loads with static site generation
- Accessible navigation with mobile menu
- Interactive gallery with filters
- Form handling ready for Netlify deployment
- SEO optimized with meta tags and Open Graph
- Smooth scrolling and transitions

## 🚢 Deployment

This site is optimized for deployment with **automatic HTTPS** on:

- **Netlify** (recommended) - Forms work out of the box + free SSL
- **Vercel** - Automatic SSL and great performance
- **Cloudflare Pages** - Fast global CDN with SSL
- Any static hosting service

### Quick Deploy with HTTPS

**📖 See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete step-by-step guide!**

**Fastest method (5 minutes):**

1. Push code to GitHub
2. Connect repository to [Netlify](https://netlify.com)
3. Deploy (auto-detected settings)
4. **HTTPS automatically enabled!**

Configuration files included:
- ✅ `netlify.toml` - Netlify configuration
- ✅ `vercel.json` - Vercel configuration  
- ✅ Security headers configured
- ✅ Cache optimization enabled

## 📝 Customization

### Update Contact Information

Edit the contact details in:
- `src/components/Footer.astro`
- `src/pages/contact.astro`
- `src/pages/reservations.astro`

### Add Real Images

Replace placeholder gradients with actual photos:
1. Add images to `public/` folder
2. Update image sources in page files
3. Optimize images for web (WebP recommended)

### Google Maps Integration

Uncomment and add your Google Maps embed code in:
- `src/pages/contact.astro`

### Social Media Links

Update social media URLs in:
- `src/components/Footer.astro`
- `src/pages/gallery.astro`

## 📄 License

Copyright © 2025 Fragkosiko. All rights reserved.

## 💬 Support

For questions or support, contact: info@fragkosiko.com
