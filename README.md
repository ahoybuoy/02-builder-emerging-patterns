# SaaS Dashboard

A SaaS dashboard application with emerging design patterns.

## What This Test Repo Tests

This repo represents a **project where patterns ARE emerging but not yet systematized** - the typical state of a growing startup codebase.

### Characteristics:
- **Repeated colors** - The same blue (`#3B82F6`) appears 10+ times across different files
- **Consistent spacing** - 16px, 24px, 32px used repeatedly
- **Mixed styling approaches** - Some Tailwind, some inline styles
- **No formal tokens** - But patterns are clearly emerging
- **Growing complexity** - 30+ components across multiple features

### Expected Buoy Behavior:
- Should detect **maturity score 30-50** (emerging patterns)
- Should trigger **BUILDER MODE with pattern detection**
- Should surface patterns like:
  - "The color #3B82F6 is used 12 times - consider creating a `primary` token"
  - "Spacing 24px appears 20+ times - consider creating a `spacing-6` token"
  - "Border radius 8px is used consistently - consider creating a `radius-md` token"

### Detectable Patterns:
| Pattern | Usage Count | Suggested Token |
|---------|-------------|-----------------|
| `#3B82F6` | 12+ | `color.primary` |
| `#10B981` | 8+ | `color.success` |
| `#EF4444` | 6+ | `color.error` |
| `16px` | 15+ | `spacing.4` |
| `24px` | 20+ | `spacing.6` |
| `32px` | 10+ | `spacing.8` |
| `8px` border-radius | 15+ | `radius.md` |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/           # Next.js app router
├── components/    # Shared components
└── features/      # Feature modules
    ├── auth/
    ├── dashboard/
    └── settings/
```
