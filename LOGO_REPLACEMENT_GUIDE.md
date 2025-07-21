# 🎨 Logo Replacement Guide for Open2E Landing Page

## Quick Overview
Your Open2E landing page currently has placeholder logos that you can easily replace with your actual logo image.

## 📁 Step 1: Prepare Your Logo File

1. **Save your logo** in one of these formats:
   - `.png` (recommended for transparency)
   - `.jpg` or `.jpeg`
   - `.svg` (for vector graphics)

2. **Optimize your logo**:
   - Recommended size: 128x128 pixels or larger
   - Square aspect ratio works best
   - Transparent background (PNG) recommended

3. **Name your file**: 
   - Example: `open2e-logo.png`, `logo.png`, or `open2e.svg`

## 📂 Step 2: Add Logo to Project

1. **Navigate to the `/public` folder** in your project
2. **Copy your logo file** into the `/public` folder
3. Your file structure should look like:
   ```
   /public
     ├── logo.png          # ← Your logo here
     └── (other files...)
   ```

## 🔧 Step 3: Replace Logo in Code

### Navigation Logo (Top of page)

**Find this section** in `src/app/page.tsx` around line 125:

```jsx
{/* Logo Container - Replace this section with your logo */}
<div className="logo-container animate-pulse-glow">
  {/* 
    TO REPLACE WITH YOUR LOGO:
    1. Add your logo image file to the /public folder (e.g., /public/logo.png)
    2. Replace the span below with: <img src="/logo.png" alt="Open2E Logo" />
    3. Remove the span entirely
    
    Example:
    <img src="/logo.png" alt="Open2E Logo" />
  */}
  <span className="text-black font-bold text-sm">2E</span>
</div>
```

**Replace it with:**

```jsx
{/* Logo Container */}
<div className="logo-container animate-pulse-glow">
  <img src="/logo.png" alt="Open2E Logo" />
</div>
```

### Footer Logo (Bottom of page)

**Find this section** in `src/app/page.tsx` around line 320:

```jsx
{/* Footer Logo - Replace this section with your logo */}
<div className="logo-container footer-logo">
  {/* 
    TO REPLACE WITH YOUR LOGO:
    1. Add your logo image file to the /public folder (e.g., /public/logo.png)
    2. Replace the span below with: <img src="/logo.png" alt="Open2E Logo" />
    3. Remove the span entirely
    
    Example:
    <img src="/logo.png" alt="Open2E Logo" />
  */}
  <span className="text-black font-bold text-xs">2E</span>
</div>
```

**Replace it with:**

```jsx
{/* Footer Logo */}
<div className="logo-container footer-logo">
  <img src="/logo.png" alt="Open2E Logo" />
</div>
```

## 🎨 Step 4: Customize Logo Styling (Optional)

If you need to adjust the logo appearance, you can modify the CSS in `src/app/globals.css`:

```css
/* Logo container styles */
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;           /* Adjust width */
  height: 32px;          /* Adjust height */
  border-radius: 8px;
  background: linear-gradient(135deg, #f59e0b 0%, #6366f1 100%);
  position: relative;
  overflow: hidden;
}

.logo-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;   /* Change to 'cover' to fill container */
  border-radius: 6px;
}

.logo-container.footer-logo {
  width: 28px;           /* Footer logo size */
  height: 28px;
}
```

## 🔄 Complete Example

**Before (Placeholder):**
```jsx
<div className="logo-container animate-pulse-glow">
  <span className="text-black font-bold text-sm">2E</span>
</div>
```

**After (With Your Logo):**
```jsx
<div className="logo-container animate-pulse-glow">
  <img src="/open2e-logo.png" alt="Open2E Logo" />
</div>
```

## 🎯 Quick Tips

- **File Path**: Always use `/filename.png` (starting with `/`)
- **Alt Text**: Include descriptive alt text for accessibility
- **Background**: The logo container has a gradient background that shows around transparent areas
- **Size**: The container automatically sizes your logo - no need to worry about exact dimensions
- **Testing**: Save the file and refresh your browser to see changes

## 🚨 Troubleshooting

**Logo not showing?**
- ✅ Check file path: `/public/logo.png` → use `/logo.png` in code
- ✅ Refresh browser (Ctrl+F5 or Cmd+Shift+R)
- ✅ Check file name spelling matches exactly
- ✅ Make sure file is in `/public` folder, not `/src`

**Logo too big/small?**
- ✅ Adjust `.logo-container` width/height in CSS
- ✅ Use `object-fit: contain` to maintain aspect ratio

**Logo looks blurry?**
- ✅ Use higher resolution image (256x256 or higher)
- ✅ Use PNG format for crisp edges

## 🎉 You're Done!

After following these steps, your Open2E logo will appear in both the navigation and footer with the beautiful animated effects intact!