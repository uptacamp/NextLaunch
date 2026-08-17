# NextLaunch

A modern web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **ESLint**.

## Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/uptacamp/NextLaunch.git
   cd NextLaunch
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

### Linting

Check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
  app/
    layout.tsx      - Root layout wrapper
    page.tsx        - Home page
    globals.css     - Global Tailwind styles
```

## Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## Next Steps

1. **Customize the homepage** - Edit `src/app/page.tsx`
2. **Add new pages** - Create files in `src/app/`
3. **Create components** - Add reusable React components in `src/components/`
4. **Set up API routes** - Create API endpoints in `src/app/api/`
5. **Configure environment variables** - Create `.env.local` file

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## License

MIT
