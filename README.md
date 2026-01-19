# Unisex Salon Website

A modern, production-ready Next.js website for a unisex salon featuring booking capabilities, service showcases, blog, and contact forms. Built with TypeScript, Tailwind CSS, and best practices for accessibility and SEO.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first approach with dark mode support
- **Booking System**: Interactive booking modal with form validation
- **Service Showcase**: Categorized services with detailed pages
- **Blog Platform**: Blog listing and detail pages with structured content
- **Contact Forms**: Validated contact forms with user feedback
- **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt
- **Accessibility**: WCAG AA compliant with semantic HTML
- **CI/CD**: GitHub Actions workflow for automated builds and checks
- **Code Quality**: ESLint, Prettier, Husky pre-commit hooks

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
unisex_saloon/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blogs/             # Blog listing & detail
│   │   ├── contact/           # Contact page
│   │   ├── privacy/           # Privacy policy
│   │   ├── services/          # Services listing & detail
│   │   ├── terms/             # Terms of service
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── robots.ts          # Robots.txt
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── modules/           # Feature components (Hero, ServiceCard, etc.)
│   │   └── ui/                # Base UI components (Button, Input, Card)
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and data
│   │   ├── data.ts           # Mock data (services, blogs, team)
│   │   └── utils.ts          # Helper functions
│   └── types/                 # TypeScript type definitions

├── .github/workflows/         # CI/CD workflows
└── public/                    # Static assets
```

## 🎨 Customization

### Branding

Update the following to customize for your salon:

1. **Colors**: Edit `src/app/globals.css` - modify CSS variables for primary, secondary colors
2. **Logo**: Replace the Scissors icon in `src/components/layout/header.tsx`
3. **Business Info**: Update contact details in `src/components/layout/footer.tsx`
4. **Site Name**: Search and replace "Unisex Salon" throughout the project

### Content

Replace mock data in `src/lib/data.ts`:

- **Services**: Add/edit service offerings with pricing and descriptions
- **Blog Posts**: Add your blog content
- **Team Members**: Update team information

### Images

Replace placeholder image references with actual images:

1. Add images to `/public/images/`
2. Uncomment and update `next/image` components in:
   - Service cards
   - Blog cards
   - Team member profiles
   - Hero section

## 🔌 Integrating a CMS

To connect a headless CMS (Sanity, Contentful, Strapi):

1. Install the CMS SDK: `npm install @sanity/client` (or equivalent)
2. Create a data fetching layer in `src/lib/cms.ts`
3. Replace static imports from `data.ts` with CMS fetch calls
4. Update `generateStaticParams` in dynamic routes for ISR/SSG

Example for Sanity:

```typescript
// src/lib/cms.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true,
});

export async function getServices() {
  return await client.fetch('*[_type == "service"]');
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## 🔒 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Example: Google Maps API Key (if adding map integration)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here

# Example: reCAPTCHA (if adding spam protection)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
```

## 📊 SEO

The site includes:

- Dynamic meta tags per page
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for LocalBusiness
- Auto-generated sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`

Update the base URL in `src/app/sitemap.ts` and `src/app/robots.ts` with your domain.

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast ratios meet WCAG AA standards

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a client project. For modifications, please contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
