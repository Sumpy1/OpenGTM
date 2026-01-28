# OpenGTM

**GTM SUPERINTELLIGENCE IS HERE**

OpenGTM is the World's Best AI + GTM Research Lab. We build products and open source research for the best minds in AI-native GTM.

## 🚀 Overview

OpenGTM is a Next.js-based platform that serves as a comprehensive resource for AI-native Go-to-Market (GTM) research, products, and job opportunities. The platform combines cutting-edge AI research with practical GTM tools and resources.

## ✨ Features

### Core Features

- **Research Lab**: Open-source GTM innovation, evals, standards, benchmarks, and AI-native analyst research
- **GTM Jobs Index**: Comprehensive job board featuring positions for both AI agents and humans
- **Product Showcase**: Highlighting key products like PRISMA GTM Ontology
- **AI GTM Transformation**: Resources and information about transforming GTM operations with AI
- **Company Showcase**: Featuring leading AI companies transforming GTM (Claude AI, Vercel, and more)

### Key Pages

- **Home** (`/`): Main landing page with hero section, company showcase, product features, and testimonials
- **Research Lab** (`/research-lab`): GTM research resources, evals, and open-source innovation
- **Jobs** (`/jobs`): Job listings for agents and humans with application modals
- **Transformer** (`/ai-gtm-transformation`): AI GTM transformation resources
- **Buy** (`/buy`): Purchase and subscription information
- **PRISMA** (`/product-prisma-gtm-ontology`): PRISMA GTM Ontology product page

### Application Forms

- **Apply as Human**: Modal form for human job applications
- **Apply as Agent**: Modal form for AI agent job applications

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5.8.2** - Type safety

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
  - Dialog, Dropdown Menu, Accordion, Tooltip, and more
- **Motion (Framer Motion)** - Animation library
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

### Database & ORM
- **Prisma 7.2.0** - Next-generation ORM
- **PostgreSQL** - Database (via @prisma/adapter-pg)

### AI & SDKs
- **@ai-sdk/anthropic** - Anthropic AI SDK
- **@ai-sdk/react** - React AI SDK
- **ai** - Vercel AI SDK

### Additional Libraries
- **Shiki** - Syntax highlighting
- **React Markdown** - Markdown rendering
- **Zod** - Schema validation
- **Three.js** - 3D graphics (for visualizations)

## 📁 Project Structure

```
OpenGTM/
├── public/                 # Static assets
│   ├── Claude Ai.svg
│   ├── Vercel.svg
│   └── video/
├── prisma/                # Database schema and migrations
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── jobs/
│   │   ├── research-lab/
│   │   ├── ai-gtm-transformation/
│   │   ├── buy/
│   │   └── product-prisma-gtm-ontology/
│   ├── components/        # React components
│   │   ├── sections/      # Page sections
│   │   ├── ui/            # Reusable UI components
│   │   ├── apply-as-human-modal.tsx
│   │   └── apply-as-agent-modal.tsx
│   ├── lib/               # Utilities and config
│   │   ├── config.tsx     # Site configuration
│   │   ├── prisma.ts      # Prisma client
│   │   └── utils.ts       # Helper functions
│   ├── hooks/             # Custom React hooks
│   ├── agents/            # AI agent implementations
│   └── tools/             # Tool implementations
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js 20+ 
- npm, yarn, or pnpm
- PostgreSQL database (for Prisma)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OpenGTM
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/opengtm"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Generate Prisma client and build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Remove node_modules and .next directories

## 🎨 Key Components

### Sections
- `HeroSection` - Main hero section with CTA
- `CompanyShowcase` - Company logos showcase
- `BentoSection` - Product feature grid
- `FeatureSection` - Research features
- `GrowthSection` - Growth and transformation content
- `TestimonialSection` - Customer testimonials
- `FAQSection` - Frequently asked questions
- `CTASection` - Call-to-action section
- `FooterSection` - Site footer

### UI Components
- `Dialog` - Modal dialogs (used for application forms)
- `Button` - Styled button component
- `Input`, `Textarea`, `Select` - Form inputs
- `Checkbox` - Checkbox input
- `Label` - Form labels

### Modals
- `ApplyAsHumanModal` - Human job application form
- `ApplyAsAgentModal` - Agent job application form

## 🔧 Configuration

Site configuration is managed in `src/lib/config.tsx`, including:
- Site metadata and SEO
- Navigation links
- Hero section content
- Company showcase logos
- Feature sections
- FAQ items
- Testimonials

## 🌐 Environment Variables

Required environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXT_PUBLIC_APP_URL` - Public URL of the application

Optional environment variables:
- Additional API keys for AI services
- Third-party service configurations

## 🎯 Key Features Explained

### GTM Jobs Index
- Interactive Airtable embed for job listings
- Separate sections for Agent jobs and Human jobs
- Application modals with form validation
- Job categories include:
  - Agent Relations Manager
  - GTM Architect
  - Marketing Manager
  - Product Engineer
  - And more...

### Research Lab
- GTM Evals for GTM Teams
- Research-as-a-Service offerings
- Company analysis and benchmarking
- Open-source research resources

### Application Forms
Both human and agent application forms include:
- Job selection dropdown
- Contact information fields
- Required text areas for qualifications
- Email validation
- Newsletter signup option

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. Push your code to a Git repository
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

The build process automatically:
- Generates Prisma client
- Builds the Next.js application
- Optimizes assets

## 📝 Code Quality

- **Biome** - Fast formatter and linter
- **ESLint** - JavaScript/TypeScript linting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting
- **Commitlint** - Commit message linting

## 🤝 Contributing

This is a private project. For inquiries, contact:
- LinkedIn: [OpenGTM Company](https://www.linkedin.com/company/opengotomarket/)

## 📄 License

Private project - All rights reserved

## 🔗 Links

- Research Lab: `/research-lab`
- Jobs: `/jobs`
- Transformer: `/ai-gtm-transformation`
- Buy: `/buy`
- PRISMA: `/product-prisma-gtm-ontology`

---

**Built with ❤️ by the OpenGTM team**
