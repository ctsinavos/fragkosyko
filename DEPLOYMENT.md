# 🚀 Deployment Guide - Fragkosyko

This guide will help you deploy your Fragkosyko website to production with HTTPS enabled.

## Quick Start - Recommended Option: Netlify

### Option 1: Deploy to Netlify (Easiest - 5 minutes)

Netlify provides free HTTPS, forms, and easy deployment.

#### Step 1: Push to Git Repository

If you haven't already, initialize git and push to GitHub/GitLab/Bitbucket:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GIT_REPOSITORY_URL
git push -u origin main
```

#### Step 2: Deploy on Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up or log in (can use GitHub account)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider (GitHub/GitLab/Bitbucket)
5. Select your repository
6. Netlify will auto-detect settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click "Deploy site"

**Your site will be live with HTTPS in 2-3 minutes!**

#### Step 3: Custom Domain (Optional)

1. In Netlify dashboard → "Domain settings"
2. Click "Add custom domain"
3. Enter your domain (e.g., `fragkosyko.com`)
4. Follow DNS configuration instructions
5. Netlify automatically provides free SSL certificate via Let's Encrypt

**HTTPS is automatic and free - no configuration needed!**

---

## Option 2: Deploy to Vercel (Also Easy)

### Quick Deploy

1. Go to [https://vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "Add New" → "Project"
4. Import your Git repository
5. Vercel auto-detects Astro:
   - **Framework Preset**: Astro
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

**Live with HTTPS in 2 minutes!**

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

---

## Option 3: Cloudflare Pages

### Deploy Steps

1. Go to [https://pages.cloudflare.com](https://pages.cloudflare.com)
2. Click "Create a project"
3. Connect your Git repository
4. Configure build:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click "Save and Deploy"

**HTTPS enabled automatically!**

---

## Option 4: Manual Deployment (VPS/Own Server)

If you want to deploy on your own server:

### Prerequisites
- VPS with Ubuntu/Debian (e.g., DigitalOcean, AWS, etc.)
- Domain name pointed to your server
- SSH access

### Step 1: Build the Site Locally

```bash
npm run build
```

This creates a `dist` folder with all static files.

### Step 2: Set Up Server

SSH into your server and install Nginx:

```bash
sudo apt update
sudo apt install nginx -y
```

### Step 3: Copy Files to Server

From your local machine:

```bash
scp -r dist/* user@your-server-ip:/var/www/fragkosyko
```

### Step 4: Configure Nginx

Create Nginx config file:

```bash
sudo nano /etc/nginx/sites-available/fragkosyko
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name fragkosyko.com www.fragkosyko.com;
    root /var/www/fragkosyko;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|svg|ico|css|js|woff|woff2|ttf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/fragkosyko /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 5: Enable HTTPS with Let's Encrypt

Install Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Get SSL certificate (HTTPS):

```bash
sudo certbot --nginx -d fragkosyko.com -d www.fragkosyko.com
```

Follow the prompts. Certbot will:
- Obtain SSL certificate
- Auto-configure Nginx for HTTPS
- Set up automatic renewal

**Your site is now live with HTTPS!**

Test auto-renewal:
```bash
sudo certbot renew --dry-run
```

---

## Post-Deployment Checklist

After deploying, verify:

- ✅ Site loads with `https://` (not `http://`)
- ✅ All pages are accessible
- ✅ Images load correctly
- ✅ Contact form works (if on Netlify)
- ✅ Reservation form works (if on Netlify)
- ✅ Mobile responsiveness
- ✅ Google Maps displays correctly
- ✅ Social media links work

---

## Performance Optimization

### 1. Test Your Site

- **PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- **GTmetrix**: [https://gtmetrix.com/](https://gtmetrix.com/)

### 2. Add Real Images

Replace SVG placeholders with optimized images:

```bash
# Install image optimization tool (optional)
npm install -g @squoosh/cli

# Optimize images
squoosh-cli --webp auto public/gallery/*.jpg
```

### 3. Enable Analytics (Optional)

Add to `src/layouts/Layout.astro` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Domain Configuration

### If You Don't Have a Domain Yet

Purchase from:
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [Cloudflare Registrar](https://cloudflare.com/products/registrar/)

### DNS Settings

For Netlify/Vercel/Cloudflare Pages:

**A Record:**
- Host: `@`
- Value: (provided by hosting platform)

**CNAME Record:**
- Host: `www`
- Value: (provided by hosting platform)

---

## Troubleshooting

### Forms Not Working
- Ensure you're on Netlify (forms work automatically there)
- Check that `data-netlify="true"` attribute is present
- Verify form `name` attribute is set

### HTTPS Not Working
- Wait 5-10 minutes after domain setup
- Clear browser cache
- Check DNS propagation: [https://dnschecker.org](https://dnschecker.org)

### 404 Errors
- Verify build completed successfully
- Check that `dist` folder is being deployed
- Ensure routing configuration is correct

---

## Continuous Deployment

With Git-based deployments (Netlify/Vercel):

1. Make changes to your code
2. Commit and push to Git:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Site automatically rebuilds and deploys (1-2 minutes)

---

## Support

- **Netlify Docs**: [https://docs.netlify.com](https://docs.netlify.com)
- **Vercel Docs**: [https://vercel.com/docs](https://vercel.com/docs)
- **Astro Docs**: [https://docs.astro.build](https://docs.astro.build)

---

## Summary

**Fastest way to production with HTTPS:**

1. Push code to GitHub
2. Deploy on Netlify (free)
3. Add custom domain
4. **Done!** - HTTPS automatically enabled

Total time: **5-10 minutes** ⚡

