# NextLaunch

A modern web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **ESLint** that displays upcoming space launches in Florida.

## Features

✅ **Real-time Launch Data** - Fetches upcoming launches from Launch Library 2 API  
✅ **Florida Filter** - Shows only launches from Florida spaceports  
✅ **Auto-Refresh** - Automatically updates every 5 minutes  
✅ **Modern UI** - Clean and responsive design with Tailwind CSS  
✅ **Launch Details** - Displays name, NET time, rocket, provider, pad, status, and location  
✅ **Manual Refresh** - One-click refresh button for immediate updates

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
    api/
      launches/
        route.ts        - API endpoint for fetching Florida launches
    layout.tsx          - Root layout wrapper
    page.tsx            - Home page with launch list
    globals.css         - Global Tailwind styles
  components/
    LaunchCard.tsx      - Individual launch card component
    LaunchList.tsx      - Launch list container with auto-refresh
  lib/
    launchApi.ts        - Launch Library 2 API integration
    dateUtils.ts        - Date and time formatting utilities
  types/
    launch.ts           - TypeScript interfaces for launch data
```

## Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **API**: Launch Library 2 (https://ll.thespacedevs.com/)

## How It Works

1. **Server-side Data Fetching**: The homepage fetches upcoming launches from the Launch Library 2 API
2. **Florida Filtering**: Results are filtered to show only launches from Florida spaceports (Cape Canaveral, Kennedy Space Center)
3. **Sorting**: Launches are sorted by NET (Nominal Event Time)
4. **Auto-Refresh**: Client-side component automatically refreshes data every 5 minutes
5. **Manual Refresh**: Users can manually refresh with the "Refresh Now" button

## Launch Details Displayed

- **Launch Name** - Mission name
- **Status** - Launch status (Go, Hold, TBD, etc.)
- **NET (Nominal Event Time)** - Scheduled launch date and time
- **Rocket** - Rocket configuration name
- **Provider** - Launch service provider (SpaceX, ULA, etc.)
- **Pad** - Launch pad name
- **Location** - Launch facility location

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Launch Library 2 API](https://ll.thespacedevs.com/)
- [React Documentation](https://react.dev)

## License

MIT
