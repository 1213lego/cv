# Luis Granada - CV

[![Live Site](https://img.shields.io/badge/Live-luis.granadalabs.co-blue)](https://luis.granadalabs.co)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

Professional CV website for **Luis Granada**, Software Engineer specializing in AI-powered platforms, event-driven architectures, and scalable backend systems.

🌐 **Live Site**: [luis.granadalabs.co](https://luis.granadalabs.co)

## About

Software Engineer with 5+ years of experience building scalable backend systems, event-driven architectures, and AI-powered platforms. Hands-on with AI pipelines and LLM integrations across the full stack using TypeScript, Python, and Java in cloud environments (GCP, AWS).

Based in Brisbane, Australia 🇦🇺

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI)
- **Deployment**: Vercel + Cloudflare DNS
- **GraphQL**: Apollo Server + TypeGraphQL

## Features

- 📝 Single config file for all CV data
- 🎨 Clean, minimalist design
- 📱 Fully responsive
- 🖨️ Print-optimized for PDF export
- ⌨️ Keyboard navigation (Cmd/Ctrl + K)
- 🚀 Fast performance with Core Web Vitals optimization
- 📊 GraphQL API at `/graphql`

## Local Development

### Prerequisites

- Node.js 18+
- pnpm 8+

### Setup

```bash
# Clone the repository
git clone https://github.com/1213lego/cv.git
cd cv

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the CV locally.

### Available Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run Biome linting
pnpm lint:fix     # Run Biome linting with auto-fix
pnpm format       # Check code formatting
pnpm format:fix   # Format code with Biome
pnpm check        # Run both linting and formatting
pnpm check:fix    # Run both with auto-fix
```

**Note**: This project uses [Biome.js](https://biomejs.dev/) for linting and formatting.

## Customization

All CV content is managed in a single file:

```
src/data/resume-data.tsx
```

Update this file to modify:
- Personal information and contact details
- Work experience and achievements
- Education and certifications
- Skills and technologies
- Projects

Changes automatically deploy to production when pushed to the `main` branch.

## Deployment

This CV is deployed on **Vercel** with automatic deployments from GitHub:

- **Production**: [luis.granadalabs.co](https://luis.granadalabs.co)
- **Platform**: Vercel
- **DNS**: Cloudflare
- **SSL**: Automatic (provided by Vercel)

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F1213lego%2Fcv)

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with metadata
│   └── page.tsx      # Main resume page
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── icons/       # Icon components
├── data/            # Resume data configuration
│   └── resume-data.tsx  ← All CV content here
├── images/          # Static assets
└── apollo/          # GraphQL server setup
```

## License

This project is licensed under the MIT License.

## Credits

Built using the [Minimalist CV template](https://github.com/BartoszJarocki/cv) by [Bartosz Jarocki](https://github.com/BartoszJarocki).

---

<p align="center">
  <a href="https://luis.granadalabs.co">luis.granadalabs.co</a> •
  <a href="https://github.com/1213lego">GitHub</a> •
  <a href="https://linkedin.com/in/lego">LinkedIn</a>
</p>
