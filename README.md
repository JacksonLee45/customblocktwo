# Frontify App Two

A custom Frontify application that provides interactive color palette blocks for design systems.

## Overview

This application extends Frontify's platform with custom blocks that display and interact with color palettes from your design system. Built with React and TypeScript, it seamlessly integrates with Frontify's design system management capabilities.

## Features

- **ColorSwatch Component**: Interactive visual swatches displaying color palettes
- **Hover Tooltips**: Color names and hex values on hover
- **Accessible UI**: Semantic HTML with proper ARIA labels
- **Frontify Integration**: Built using the Frontify app-bridge for seamless platform integration

## Tech Stack

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS (with `tw-` prefix configuration)
- **Build Tool**: Frontify CLI
- **Code Quality**: ESLint, Prettier
- **Integration**: Frontify app-bridge

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- Frontify account with app development access

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

### Running Locally

```bash
npm run dev
```

### Building

```bash
npm run build
```

### Deployment

Deploy to Frontify using the CLI:

```bash
npx @frontify/frontify-cli@latest deploy
```

## Project Structure

```
frontifyapptwo/
├── src/
│   ├── blocks/           # Custom Frontify blocks
│   ├── components/       # Reusable React components
│   └── ...
├── tsconfig.json         # TypeScript configuration
├── .eslintrc.js          # ESLint configuration
├── .prettierrc           # Prettier configuration
└── package.json
```

## Key Technical Notes

### Tailwind CSS Configuration

This project uses Frontify's specific Tailwind configuration that requires the `tw-` prefix for all utility classes:

```tsx
// Correct
<div className="tw-flex tw-gap-2">

// Incorrect
<div className="flex gap-2">
```

### TypeScript Configuration

The project uses ES2021 as the target library to support modern JavaScript features like `replaceAll()`. This is configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "lib": ["ES2021", "DOM"]
  }
}
```

### Accessibility

All interactive elements use semantic HTML (buttons instead of divs) and include proper ARIA labels for screen reader support.

## Code Quality

The project enforces code quality through:

- **ESLint**: Linting with React and accessibility rules
- **Prettier**: Code formatting
- **TypeScript**: Type checking

Run checks before deploying:

```bash
npm run lint
npm run type-check
```

## Troubleshooting

### TypeScript Errors

If you encounter errors about missing methods like `replaceAll()`, ensure your `tsconfig.json` includes ES2021 in the `lib` array.

### Styling Not Applying

Remember to use the `tw-` prefix for all Tailwind classes in this Frontify-specific configuration.

### Deployment Issues

Make sure you're authenticated with the Frontify CLI before deploying.

## Contributing

When contributing to this project:

1. Follow the existing code style (enforced by ESLint and Prettier)
2. Ensure all TypeScript types are properly defined
3. Test changes locally before deploying
4. Use semantic HTML for accessibility

## License

[Your License Here]

## Support

For issues specific to Frontify integration, refer to the [Frontify Developer Documentation](https://developer.frontify.com/).