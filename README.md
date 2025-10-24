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

## 🤖 Automated Updates via GitHub Actions

This project includes automated workflows that:

### 1. Download CS Images (`workflow.yml`)
- **Schedule**: Runs every hour
- **What it does**:
  - Downloads latest game files from Steam
  - Decompiles VPK files
  - Extracts images to `public/static/panorama/images/econ/`
  - Generates `default_generated.json`
  - Auto-commits changes

**Required Secrets:**
- `USERNAME`: Steam account username
- `PASSWORD`: Steam account password

### 2. Update CDN Images (`images.yml`)
- **Trigger**: Manual dispatch
- **What it does**:
  - Fetches item data from Steam Market
  - Generates `images_inventory.json` and `images_market.json`
  - Maps item names to Steam CDN URLs
  - Auto-commits changes

**Required Secrets:**
- `USERNAME`: Steam account username
- `PASSWORD`: Steam account password

## 🌐 Project Structure

```
counter-strike-image-tracker/
├── .github/
│   └── workflows/
│       ├── workflow.yml       # Auto-download CS images
│       └── images.yml         # Update CDN mappings
├── public/
│   ├── index.html             # Web interface (100% static)
│   └── static/
│       ├── images_inventory.json  # Inventory image mappings
│       ├── images_market.json     # Market image mappings
│       ├── default_generated.json # Default generated items
│       └── panorama/
│           └── images/
│               └── econ/          # CS2 images (served statically)
├── source2viewer/
│   └── Source2Viewer-CLI      # VPK decompiler
├── index.js                   # Steam file downloader
├── images.js                  # CDN image mapper
├── list.js                    # JSON list generator
├── vercel.json                # Vercel configuration
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
- ✅ Automated updates via GitHub Actions

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

### Default Generated (`default_generated.json`)
Lists all default generated item files extracted from game files.

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
- Large JSON files are loaded from GitHub Raw if not available locally (fallback mechanism)
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

### GitHub Raw Fallback
```
https://raw.githubusercontent.com/yourusername/counter-strike-image-tracker/main/public/static/images_inventory.json
```

## 🔧 Scripts

- `index.js` - Steam image download
- `images.js` - Image processing and CDN mapping
- `list.js` - Generate default_generated.json
- `extract-thumbnails.js` - Thumbnail extraction
- `cleanup-images.js` - Image cleanup

## 📄 License

See the LICENSE file for more details.

