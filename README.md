# 🎨 CameronPAD Theme Marketplace

A collection of **100 beautiful themes** for CameronPAD and any web application!

## 🌈 Theme Categories

- 🌑 **Dark Themes** - Perfect for late-night coding
- ☀️ **Light Themes** - Beautiful daytime themes
- 🌌 **Midnight Themes** - Ultra-dark minimal themes
- 🎨 **Pastel Themes** - Soft, gentle colors

## 📥 Installation

### For CameronPAD Users

1. Visit your CameronPAD instance
2. Go to **Themes** → **Marketplace**
3. Browse and install themes with one click!

### For Developers

Use these themes in **any web application**:

```javascript
// Fetch and apply a theme
fetch('https://raw.githubusercontent.com/camayuki/theme_marketplace/main/cobalt-0.json')
    .then(response => response.json())
    .then(theme => {
        // Apply CSS variables
        Object.entries(theme.css_variables).forEach(([key, value]) => {
            document.documentElement.style.setProperty(key, value);
        });
    });
```

### CDN Access (Faster!)

Use jsDelivr CDN for faster loading:

```javascript
// Using jsDelivr CDN
fetch('https://cdn.jsdelivr.net/gh/camayuki/theme_marketplace@main/index.json')
    .then(response => response.json())
    .then(data => {
        console.log('Available themes:', data.themes);
    });
```

## 🎨 Integration Guides

- ✅ **React** - [See guide](https://github.com/camayuki/cameronPAD/blob/main/THEME_INTEGRATION_GUIDE.md#react)
- ✅ **Vue.js** - [See guide](https://github.com/camayuki/cameronPAD/blob/main/THEME_INTEGRATION_GUIDE.md#vuejs)
- ✅ **WordPress** - [See guide](https://github.com/camayuki/cameronPAD/blob/main/THEME_INTEGRATION_GUIDE.md#wordpress)
- ✅ **Django/Flask** - [See guide](https://github.com/camayuki/cameronPAD/blob/main/THEME_INTEGRATION_GUIDE.md#django--flask)
- ✅ **Vanilla JS** - [See guide](https://github.com/camayuki/cameronPAD/blob/main/THEME_INTEGRATION_GUIDE.md#static-sites)

## 🎨 Theme Format

Each theme is a JSON file with this structure:

```json
{
  "id": "cobalt-0",
  "name": "Cobalt",
  "description": "A beautiful dark theme with cool blue tones",
  "author": "CameronPAD Theme Generator",
  "version": "1.0.0",
  "category": "Dark",
  "tags": ["dark", "blue", "professional"],
  "css_variables": {
    "--primary-bg": "#0a0e1a",
    "--secondary-bg": "#141824",
    "--accent-primary": "#4fc3f7",
    "--accent-secondary": "#26c6da",
    "--text-primary": "#e0e6ed",
    "--text-secondary": "#a0aec0",
    "--border-color": "#2d3748",
    "--hover-bg": "#1a202c",
    "--success": "#48bb78",
    "--warning": "#f6ad55",
    "--error": "#fc8181",
    "--info": "#4299e1",
    "--shadow": "rgba(0, 0, 0, 0.3)",
    "--gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  }
}
```

## 📋 Browse Themes

See [index.json](./index.json) for the complete theme catalog with all 100 themes.

## 🚀 Quick Start Examples

### Static HTML/CSS

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            background: var(--primary-bg);
            color: var(--text-primary);
        }
        .card {
            background: var(--secondary-bg);
            border: 1px solid var(--border-color);
        }
        button {
            background: var(--accent-primary);
            color: var(--text-primary);
        }
    </style>
</head>
<body>
    <script src="https://cdn.jsdelivr.net/gh/camayuki/theme_marketplace@main/theme-loader.js"></script>
    <script>
        loadTheme('cobalt-0');
    </script>
</body>
</html>
```

### React

```jsx
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/camayuki/theme_marketplace@main/cobalt-0.json')
            .then(res => res.json())
            .then(theme => {
                Object.entries(theme.css_variables).forEach(([key, value]) => {
                    document.documentElement.style.setProperty(key, value);
                });
            });
    }, []);
    
    return <div className="app">Your app here</div>;
}
```

### Vue

```vue
<template>
    <div id="app">Your app here</div>
</template>

<script>
export default {
    mounted() {
        fetch('https://cdn.jsdelivr.net/gh/camayuki/theme_marketplace@main/cobalt-0.json')
            .then(res => res.json())
            .then(theme => {
                Object.entries(theme.css_variables).forEach(([key, value]) => {
                    document.documentElement.style.setProperty(key, value);
                });
            });
    }
}
</script>
```

## 🤝 Contributing

Want to add your own theme? We'd love that!

1. Fork this repository
2. Create your theme JSON file following the format above
3. Add your theme to `index.json`
4. Submit a Pull Request

### Theme Submission Checklist

- [ ] Theme follows the JSON structure
- [ ] All 14 CSS variables are defined
- [ ] Unique theme ID (no duplicates)
- [ ] Meaningful name and description
- [ ] Appropriate category (Dark/Light/Midnight/Pastel)
- [ ] Relevant tags
- [ ] Colors are accessible (good contrast)

## 📜 License

MIT License - Use these themes anywhere, free forever!

## 🔗 Links

- [CameronPAD Project](https://github.com/camayuki/cameronPAD)
- [Theme Integration Guide](https://github.com/camayuki/cameronPAD/blob/main/THEME_INTEGRATION_GUIDE.md)
- [Theme Marketplace Setup](https://github.com/camayuki/cameronPAD/blob/main/THEME_MARKETPLACE_SETUP.md)

## ⭐ Support

If you like these themes, please:
- ⭐ Star this repository
- 🍴 Fork and contribute
- 📢 Share with others
- 💬 Report issues or suggest themes

## 📊 Statistics

- **Total Themes**: 100
- **Categories**: 4 (Dark, Light, Midnight, Pastel)
- **Color Schemes**: 15+ (Monochrome, Analogous, Complementary, Triadic, etc.)
- **File Size**: ~1KB per theme
- **Load Time**: <100ms via CDN

## 🎯 Popular Themes

- **Cobalt** - Professional dark blue
- **Crimson Night** - Bold red tones
- **Azure Dawn** - Bright blue elegance
- **Emerald Shadow** - Deep green coding
- **Twilight Indigo** - Purple sophistication

## 💡 Use Cases

- 🖥️ Web applications
- 📱 Mobile apps (PWA)
- 💻 Code editors
- 📝 Documentation sites
- 🎮 Gaming interfaces
- 📊 Data dashboards
- ✍️ Blogging platforms

---

**Generated with ❤️ by CameronPAD Theme Generator**

**Powered by**: HSL Color Theory • Algorithmic Design • Community Love
