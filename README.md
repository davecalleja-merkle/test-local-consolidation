# test-local-consolidation

A design system project

[![Next.js 15](https://img.shields.io/badge/Next.js%2015-black)](https://nextjs.org/)
[![pnpm 10.18](https://img.shields.io/badge/pnpm%2010.18-FF6C37)](https://pnpm.io/)
[![Tailwind CSS 4.1](https://img.shields.io/badge/Tailwind%20CSS%204.1-06B6D4)](https://tailwindcss.com/)
[![Storybook 9.0](https://img.shields.io/badge/Storybook%209.0-FF4785)](https://storybook.js.org/)

## 🚀 Quick Start

```bash
# Get the code on your local machine
git clone https://github.com/davecalleja-merkle/test-local-consolidation.git

# Install all required packages
cd test-local-consolidation && pnpm install

# Install all 45+ ShadCN components
pnpm run setup  # This automatically runs: npx shadcn@latest add --all --yes

# Launch the dev server at http://localhost:3000
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your design system.

## ✨ What's Included

### Core Framework
- **Next.js 15** - App Router with React 18
- **TypeScript** - Full type safety

### Design System
- **Tailwind CSS** - Utility-first CSS framework
- **Complete ShadCN UI Library** - 45+ ShadCN UI components


#### Component Library: Complete ShadCN UI Library


This project includes the **complete ShadCN UI library** with 45+ production-ready components.

- **Installation**: Automatically installed via `pnpm run setup`
- **Command**: `npx shadcn@latest add --all --yes`
- **Location**: All components will be available in `components/ui/`
- **Features**:
  - Fully typed with TypeScript
  - Accessible (WCAG compliant)
  - Customizable source code
  - Production-ready


### Development Tools
- **PNPM** - Fast package management
- **Storybook** - Component documentation and testing
- **ESLint** - Code quality and consistency

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run setup` | Automatically installs all 45+ ShadCN UI components |
| `pnpm run dev` | Start development server on port 3000 |
| `pnpm run build` | Build for production |
| `pnpm run start` | Start production server |
| `pnpm run lint` | Run ESLint |
| `pnpm run storybook` | Start Storybook dev server on port 6006 |
| `pnpm run build-storybook` | Build Storybook for production |

## 📁 Project Structure

```
test-local-consolidation/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   └── ui/                # ShadCN UI components
├── lib/                   # Utility functions
│   └── utils.ts           # Utility functions
├── .storybook/            # Storybook configuration
├── stories/               # Component stories
├── scripts/               # Build and setup scripts
├── components.json        # ShadCN UI configuration
└── package.json           # Dependencies and scripts
```

## 🔧 Setup Details

### Component Installation

Automatically installs all 45+ ShadCN UI components


**What gets installed:**
- All 45+ ShadCN UI components
- Complete TypeScript definitions
- Radix UI primitives for accessibility
- Full source code in `components/ui/`

**How it works:**
The setup script runs `npx shadcn@latest add --all --yes` automatically, installing every component in the ShadCN registry. This gives you the complete toolkit immediately.





### Storybook

Storybook is configured with the following addons:
- shadcn-stories

Start Storybook with `pnpm run storybook`.


## 🔄 Development Workflow

### First Time Setup
1. **Clone the repository:** `git clone https://github.com/davecalleja-merkle/test-local-consolidation.git`
2. **Install dependencies:** `cd test-local-consolidation && pnpm install`
3. **Setup project:** `pnpm run setup`

### Daily Development
1. **Start dev server:** `pnpm run dev`
2. **Make changes** to components in `components/`
3. **View changes** at [http://localhost:3000](http://localhost:3000)
4. **View stories** at [http://localhost:6006](http://localhost:6006)

### Before Committing
1. **Run linting:** `pnpm run lint`
2. **Build project:** `pnpm run build`

## 🆘 Troubleshooting

### Common Issues

**Components not showing correctly?**
```bash
# Re-run setup to ensure components are properly installed
pnpm run setup
```

**TypeScript errors?**
```bash
# Ensure all dependencies are installed
pnpm install
# Check TypeScript configuration
pnpm run lint
```

**Port already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
pnpm run dev -- -p 3001
```

### Getting Help
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review [Tailwind CSS docs](https://tailwindcss.com/docs)
- Browse [Storybook documentation](https://storybook.js.org/docs)

