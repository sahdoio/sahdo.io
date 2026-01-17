# sahdo.io

> Personal website and tech blog of Lucas Sahdo - Software Engineer and Architect

A modern, minimalist website built with Nuxt.js featuring articles on backend development, system architecture, and tech education content.

## 🚀 Features

- **Personal Portfolio**: Showcase of experience as a Software Engineer and Architect
- **Tech Blog**: Articles on PHP, Node.js, JavaScript, Vue, Nuxt, and system architecture
- **YouTube Integration**: Latest videos from the Sahdo.io YouTube channel
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Theme**: Clean, modern dark UI
- **SEO Optimized**: Built with Nuxt.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: [Nuxt.js 4.0.1](https://nuxt.com/) (Vue.js 3.5.18)
- **Styling**: [Tailwind CSS 6.14.0](https://tailwindcss.com/) via @nuxtjs/tailwindcss
- **Syntax Highlighting**: [Prism.js 1.30.0](https://prismjs.com/)
- **Router**: Vue Router 4.5.1
- **Utilities**: Clipboard 2.0.11
- **TypeScript**: Full TypeScript support
- **Deployment**: Static site generation (SSG) ready

## 📦 Dependencies

### Core Dependencies
- `nuxt`: ^4.0.1 - The Intuitive Vue Framework
- `vue`: ^3.5.18 - The Progressive JavaScript Framework
- `vue-router`: ^4.5.1 - Official router for Vue.js

### UI & Styling
- `@nuxtjs/tailwindcss`: ^6.14.0 - Tailwind CSS module for Nuxt
- `prismjs`: ^1.30.0 - Lightweight syntax highlighter

### Utilities
- `clipboard`: ^2.0.11 - Modern copy to clipboard helper

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── index.vue           # Homepage with articles and videos
│   │   └── articles/
│   │       ├── index.vue       # Articles listing
│   │       └── [slug].vue      # Individual article pages
│   ├── composables/
│   │   ├── useArticles.ts      # Articles data management
│   │   └── useYoutubeVideos.ts # YouTube API integration
│   ├── layouts/
│   │   └── default.vue         # Default layout
│   ├── plugins/
│   │   └── prism.ts           # Prism.js setup for code highlighting
│   └── app.vue                # Main app component
├── public/                    # Static assets
├── nuxt.config.ts            # Nuxt configuration
└── package.json              # Dependencies and scripts
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sahdoio/sahdo.io.git
cd sahdo.io
```

2. Navigate to the source directory:
```bash
cd src
```

3. Install dependencies:
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

### Static Generation

Generate a static version of the site:

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

## 📝 Content Management

### Adding Articles

Articles are managed in `src/app/composables/useArticles.ts`. To add a new article:

1. Add a new object to the articles array with:
   - `title`: Article title
   - `date`: Publication date
   - `slug`: URL-friendly identifier
   - `cover`: Cover image path (optional)
   - `content`: HTML content with Prism.js code highlighting support

### YouTube Integration

The site automatically fetches the latest videos from the Sahdo.io YouTube channel via `useYoutubeVideos.ts` composable.

## 🌐 Deployment

This project is configured for static site generation and can be deployed to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## 🔗 Links

- **Website**: [sahdo.io](https://sahdo.io)
- **GitHub**: [@sahdoio](https://github.com/sahdoio)
- **YouTube**: [@sahdoio](https://www.youtube.com/@sahdoio)
- **LinkedIn**: [lucassahdo](https://www.linkedin.com/in/lucassahdo/)
- **Twitter/X**: [@lucassahdo](https://x.com/lucassahdo)

## 🤝 Contributing

This is a personal website, but suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
