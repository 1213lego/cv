# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Minimalist CV/Resume web application** built with Next.js 14, React, TypeScript, and Tailwind CSS. The app renders a clean, print-friendly CV layout with data configured in a single file.

**Prerequisites:**
- Node.js 18+
- pnpm 8+

## Commands

### Development
```bash
pnpm dev          # Start development server on http://localhost:3000
pnpm build        # Create production build
pnpm start        # Start production server
pnpm lint         # Run Biome linting checks
pnpm lint:fix     # Run Biome linting with auto-fix
pnpm format       # Check code formatting with Biome
pnpm format:fix   # Format code with Biome
pnpm check        # Run both linting and formatting checks
pnpm check:fix    # Run both linting and formatting with auto-fix
```

### Docker Deployment
```bash
docker compose build     # Build the container
docker compose up -d     # Run the container
docker compose down      # Stop the container
```

**Note**: The project uses **Biome.js** for linting and formatting instead of ESLint and Prettier. Always run `pnpm check:fix` before committing to ensure code quality.

## Architecture

### Project Structure
- **`/src/app/`** - Next.js App Router pages and layouts
- **`/src/components/`** - Reusable UI components (using shadcn/ui)
- **`/src/data/resume-data.tsx`** - Single configuration file for all CV content
- **`/src/lib/`** - Shared utilities, TypeScript types, and structured data generators
- **`/src/apollo/`** - GraphQL server setup with resolvers and type definitions
- **`/src/images/`** - Static assets and logo components

### Key Technologies
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript with decorators enabled
- **Styling**: Tailwind CSS with custom theme extensions
- **UI Components**: shadcn/ui (Radix UI based)
- **GraphQL**: Apollo Server with type-graphql at `/graphql` endpoint
- **Command Palette**: cmdk library for keyboard navigation
- **Print Optimization**: Custom print styles in global CSS

### Important Files
- **`src/data/resume-data.tsx`** - Main configuration file containing all CV data (personal info, work experience, education, skills, languages, hobbies, projects)
- **`src/lib/types.ts`** - TypeScript type definitions for ResumeData and GraphQL types, plus conversion functions
- **`src/lib/structured-data.ts`** - Generates JSON-LD structured data for SEO
- **`src/app/page.tsx`** - Main resume page component that renders the CV
- **`src/app/components/`** - Section components (Header, Summary, WorkExperience, Education, Skills, Languages, Hobbies, Projects)
- **`src/app/layout.tsx`** - Root layout with metadata and analytics
- **`src/components/command-menu.tsx`** - Keyboard shortcuts (Cmd+K) for navigation
- **`src/components/section-error-boundary.tsx`** - Error boundary for graceful section failure handling
- **`src/apollo/type-defs.ts`** - GraphQL ObjectType definitions using type-graphql decorators
- **`src/apollo/resolvers.ts`** - GraphQL query resolvers
- **`biome.json`** - Biome configuration for linting and formatting rules
- **`tsconfig.json`** - TypeScript config with decorators enabled (required for GraphQL)

## Development Notes

### TypeScript Configuration
The project uses TypeScript with decorators enabled (`experimentalDecorators: true` and `emitDecoratorMetadata: true`), which is **required** for the type-graphql setup. Path aliases are configured: `@/*` maps to `./src/*`.

### Adding New Sections to the CV

To add a new section to the CV, follow these steps:

1. **Update TypeScript types** (`src/lib/types.ts`):
   - Add new field to `ResumeData` interface
   - Add corresponding GraphQL-compatible interface (if needed)
   - Update `resumeDataToGraphQL` conversion function

2. **Add data** (`src/data/resume-data.tsx`):
   - Add your new data field to the `RESUME_DATA` object

3. **Create component** (`src/app/components/YourSection.tsx`):
   - Create a new component following existing patterns (e.g., `Skills.tsx`, `Languages.tsx`)
   - Wrap content in `<Section>` component for consistent spacing
   - Add proper accessibility attributes

4. **Update page layout** (`src/app/page.tsx`):
   - Import your new component
   - Add it wrapped in `<SectionErrorBoundary>` and `<Suspense>` tags
   - Place it in the desired order within the CV

5. **Update GraphQL schema** (`src/apollo/type-defs.ts`):
   - Create ObjectType class for your new data structure using `@ObjectType()` decorator
   - Add field to the `Me` class with `@Field()` decorator

The layout automatically adjusts based on the data provided, and all sections are wrapped in error boundaries for graceful failure handling.

### GraphQL API
The app exposes a GraphQL endpoint at `/graphql` that serves the resume data using Apollo Server with type-graphql decorators. This can be used to integrate the CV data with other applications or query it programmatically.

**Architecture**:
- **Type definitions** (`src/apollo/type-defs.ts`): ObjectType classes decorated with `@ObjectType()` and `@Field()`
- **Resolvers** (`src/apollo/resolvers.ts`): Query resolver that converts React components to strings
- **Type conversion** (`src/lib/types.ts`): `resumeDataToGraphQL()` function converts ResumeData (with React nodes) to GraphQL-compatible format (strings only)
- **Route handler** (`src/app/graphql/route.ts`): Next.js Edge Runtime API route

### Error Handling
The app includes error boundaries (`error-boundary.tsx` and `section-error-boundary.tsx`) to gracefully handle component failures without breaking the entire page.

### Print Optimization
The app includes special print styles in `globals.css` to ensure the CV looks good when printed. Test print functionality (Cmd/Ctrl+P) when making layout changes.

### Deployment
The app is optimized for Vercel deployment (current production: `luis.granadalabs.co` with Cloudflare DNS) but can be deployed anywhere that supports Next.js applications. Docker support is included for containerized deployments.