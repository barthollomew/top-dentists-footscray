# Top Dentists Footscray - Astro Website

A modern, performant website for Top Dentists Footscray built with Astro 5, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Astro 5 with TypeScript for type safety
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Schema.org markup, Open Graph tags, sitemap
- **Accessible**: WCAG compliant with screen reader support
- **Performance**: Lighthouse scores optimized for speed and best practices
- **Image Optimization**: Responsive images with WebP support and lazy loading
- **Google Maps**: Lazy-loaded interactive map in footer

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens
- **Language**: TypeScript
- **Code Quality**: ESLint + Prettier
- **Build Tools**: Vite (via Astro)
- **Deployment**: Static site generation (SSG)

## 🏗️ Project Structure

```
├── public/
│   ├── images/              # Optimized images from original site
│   ├── robots.txt          # Search engine directives
│   └── favicon files...    
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── SEO.astro      # SEO meta tags and schema
│   │   ├── Header.astro   # Navigation header
│   │   └── Footer.astro   # Footer with maps
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro   # Main layout wrapper
│   └── pages/             # File-based routing
│       ├── index.astro    # Homepage
│       ├── services.astro # Services overview
│       ├── about-us.astro # About page
│       └── 404.astro      # 404 error page
├── tailwind.config.mjs    # Tailwind configuration
└── astro.config.mjs       # Astro configuration
```

## 🎨 Design System

### Colors
- **Primary Green**: `#729177` - Brand color extracted from original design
- **Secondary Blue**: `#3898ec` - Accent color for CTAs
- **Neutral Grays**: Various shades for text and backgrounds
- **Background**: `#f5f3ef` - Warm off-white from original

### Typography
- **Headings**: Montserrat (weights 400-900)
- **Body**: DM Sans (weights 400, 500, 700)
- **Decorative**: El Messiri (for special elements)

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `1024px+`

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd astro-refactor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Visit [http://localhost:4321](http://localhost:4321)

## 🔨 Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Fix ESLint errors automatically |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | Check TypeScript types |

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built site in `./dist/` can be deployed to any static hosting service:

- **Netlify**: Connect your Git repo for automatic deployments
- **Vercel**: Import project and deploy
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload dist folder
- **Traditional Web Hosting**: Upload via FTP/SFTP

## 🔧 Configuration

### Astro Config
The `astro.config.mjs` includes:
- Tailwind CSS integration
- Sitemap generation
- Image optimization settings

### Tailwind Config
Custom design tokens in `tailwind.config.mjs`:
- Brand colors matching original design
- Typography scales
- Custom animations
- Responsive utilities

## 📱 Image Optimization

Images are optimized for performance:
- **Responsive**: Multiple sizes via `<picture>` elements
- **Modern formats**: WebP with fallbacks
- **Lazy loading**: Images load as they enter viewport
- **Proper sizing**: Width/height attributes prevent layout shift

## 🎯 SEO Features

- **Meta tags**: Title, description, Open Graph, Twitter Cards
- **Schema.org**: LocalBusiness structured data
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt text**: Descriptive alternative text for images

## ♿ Accessibility

- **WCAG 2.1 AA compliant**
- **Keyboard navigation**: All interactive elements accessible
- **Screen reader support**: Proper ARIA labels and landmarks  
- **Color contrast**: Meets minimum contrast ratios
- **Focus indicators**: Visible focus states
- **Skip links**: Skip to main content option

## 📊 Performance

Optimized for excellent Lighthouse scores:
- **Performance**: Fast loading with code splitting
- **Best Practices**: Modern web standards
- **SEO**: Comprehensive optimization
- **Accessibility**: Full WCAG compliance

## 🎨 Content Management

To update content:

1. **Text content**: Edit the respective `.astro` files in `src/pages/`
2. **Images**: Replace files in `public/images/` (maintain filenames)
3. **Navigation**: Update links in `src/components/Header.astro`
4. **Contact info**: Update in `src/components/Footer.astro`
5. **SEO**: Update meta descriptions in each page frontmatter

## 🐛 Troubleshooting

### Common Issues

**Build fails**
- Check TypeScript errors: `npm run type-check`
- Verify all imports and file paths
- Ensure all required dependencies are installed

**Images not loading**
- Verify image paths in `public/images/`
- Check image file extensions match code
- Ensure images are not corrupted

**Styles not applying**
- Verify Tailwind classes are correct
- Check for CSS conflicts
- Restart dev server after config changes

### Getting Help
- **Email**: admin@topdentistsfootscray.com.au
- **Phone**: (03) 9687 5050

## 📄 License

This project is proprietary to Top Dentists Footscray.

---

**Built with ❤️ using Astro, TypeScript, and Tailwind CSS**

*For technical support or questions about this implementation, please contact the development team.*
