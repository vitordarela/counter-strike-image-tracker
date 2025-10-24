# Counter-Strike Image Tracker

This project hosts and displays Counter-Strike 2 images extracted from game files.

## 🚀 Deploy to Vercel

### Prerequisites
- [Vercel](https://vercel.com) account
- [Vercel CLI](https://vercel.com/cli) installed (optional)

### Deployment Steps

#### Option 1: Deploy via Vercel Web Interface

1. Commit all changes:
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push
```

2. Go to [vercel.com](https://vercel.com) and log in

3. Click "Add New Project"

4. Import your GitHub repository

5. Click "Deploy"

#### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

## 🌐 Project Structure

```
counter-strike-image-tracker/
├── public/
│   ├── index.html             # Web interface (100% static)
│   └── static/
│       ├── images_inventory.json  # Inventory image mappings
│       ├── images_market.json     # Market image mappings
│       └── panorama/
│           └── images/
│               └── econ/          # CS2 images (served statically)
├── vercel.json                    # Vercel configuration
└── package.json
```

## 📦 Features

- ✅ Image visualization organized by type (Inventory/Market)
- ✅ Modern and responsive interface
- ✅ Real-time search
- ✅ Modal to view images in larger size
- ✅ Optimized cache for performance
- ✅ 100% static - no serverless functions
- ✅ Lazy loading of images
- ✅ CORS enabled for external use
- ✅ Fallback for unavailable images

## 🎮 Data Sources

### Inventory (`images_inventory.json`)
Maps technical item names to Steam CDN URLs:
```json
{
  "econ/characters/customplayer_ctm_diver_varianta": "https://community.akamai.steamstatic.com/economy/image/..."
}
```

### Market (`images_market.json`)
Maps market item names to CDN URLs:
```json
{
  "AK-47 | Aquamarine Revenge (Factory New)": "https://community.akamai.steamstatic.com/economy/image/..."
}
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run locally with Vercel Dev
npm run dev
```

Access: http://localhost:3000

## 📝 Notes

- **No serverless API**: Everything is served statically to avoid size limits
- Images from `public/static/panorama/` folder are served directly by Vercel CDN
- JSONs (`images_inventory.json` and `images_market.json`) point to Steam CDN
- Images are cached for 1 year for better performance
- The interface is fully responsive
- CORS enabled, allowing access from any origin
- **Important**: The `static/` folder must be inside `public/` for Vercel to serve it automatically

## 🔗 Accessing Resources

### Local Images
```
https://your-domain.vercel.app/static/panorama/images/econ/weapon_cases/crate_esl14_promo_de_overpass_png.png
```

### Mapping JSONs
```
https://your-domain.vercel.app/static/images_inventory.json
https://your-domain.vercel.app/static/images_market.json
```

## 🔧 Original Scripts

The original scripts to download images from Steam are still available:

- `index.js` - Steam image download
- `images.js` - Image processing
- `extract-thumbnails.js` - Thumbnail extraction
- `cleanup-images.js` - Image cleanup

## 📄 License

See the LICENSE file for more details.
