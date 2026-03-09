# Personal Portfolio Website

A clean, modern personal portfolio website built with Next.js 14, React, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Modern, responsive design
- 🌓 Dark/Light mode with system preference support
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-friendly
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
personal_website/
├── app/                   # Next.js App Router
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   ├── ProjectCard.tsx   # Project card component
│   └── ThemeToggle.tsx   # Dark/light mode toggle
├── lib/                   # Utility functions
└── public/               # Static assets
```

## Customization

### Update Your Information

1. **Home Page**: Edit `app/page.tsx`
2. **About Page**: Edit `app/about/page.tsx`
3. **Experience**: Edit `app/experience/page.tsx`
4. **Projects**: Edit `app/projects/page.tsx`
5. **Contact**: Edit `app/contact/page.tsx`

### Add Your Projects

Edit the projects array in `app/projects/page.tsx`:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "/project-image.jpg",
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo.com"
  },
  // Add more projects...
]
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure the build settings.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme**: next-themes

## License

MIT
