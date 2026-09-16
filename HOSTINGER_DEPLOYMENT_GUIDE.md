# How to Deploy IFox Media to Hostinger (Step-by-Step)

This project is pre-configured for **Hostinger Web Hosting**, **Cloud Hosting**, and **hPanel (LiteSpeed / Apache)**.

---

## 🚀 Quick 3-Step Upload (Easiest Method via File Manager)

### Step 1: Download the Project
1. In Google AI Studio, click on the top right menu (`...` or Settings).
2. Click **Export to ZIP** (or download the project folder).
3. Extract the ZIP file on your computer.

---

### Step 2: Build the Production Files (if not already built)
If the `dist` folder is already generated in your downloaded project, you can use it directly!
If you ever want to rebuild it from source on your computer:
```bash
npm install
npm run build
```
This produces the `/dist` folder with:
- `index.html` (with relative `./assets/` paths for Hostinger)
- `.htaccess` (pre-configured for SPA routing, GZIP compression, and 1-year browser caching)
- `assets/` (bundled JS & CSS)
- `ifox-media-logo.svg` & `ifox-media-logo-white.svg`

---

### Step 3: Upload to Hostinger File Manager
1. Log in to your **Hostinger hPanel** (https://hpanel.hostinger.com).
2. Under **Websites**, click **Manage** next to your domain (`ifoxmedia.co.in` or your chosen domain).
3. In the left sidebar, click **Files** → **File Manager** (or **File Manager for your domain**).
4. Double-click the **`public_html`** folder to open it.
   - *Tip:* If you see a default `default.php` or placeholder file in `public_html`, delete or rename it.
5. Upload the **contents** of your `dist` folder into `public_html`:
   - Either select all files inside `dist` (`index.html`, `.htaccess`, `assets/`, `ifox-media-logo.svg`, etc.) and drag & drop them into `public_html`.
   - OR zip the contents of `dist` into `upload.zip`, upload it into `public_html`, right-click on it, and select **Extract**.

That's it! Visit your domain in your browser and your responsive agency website will be live.

---

## ⚡ What is Already Pre-Configured for Hostinger

1. **Relative Asset Paths (`base: './'`)**:
   - Built assets load seamlessly whether in the root `public_html` or any subfolder, avoiding 404 errors.

2. **Hostinger Apache / LiteSpeed `.htaccess` Included**:
   - **SPA Routing**: Prevents 404 errors when visitors refresh the page or use direct section links.
   - **GZIP & Deflate Compression**: Minimizes file size for fast load times.
   - **1-Year Browser Caching**: Gives maximum scores (95+) on Google PageSpeed Insights.
   - **Security Headers**: Includes `X-Frame-Options`, `X-Content-Type-Options: nosniff`, and cross-origin protection.

3. **100% Responsive Design**:
   - Optimized for mobile smartphones (iPhone SE, Galaxy, Pixel), tablets, laptops, and 4K desktop screens.
   - Fluid navigation dock and right-side interactive contact tools that adapt gracefully to all screen sizes without horizontal clipping.

---

## 🔒 Free SSL Certificate Setup on Hostinger
1. In **hPanel**, go to **Security** → **SSL**.
2. Click **Install SSL** (Hostinger provides free unlimited Let's Encrypt SSL).
3. Once active, toggle **Force HTTPS** on.
