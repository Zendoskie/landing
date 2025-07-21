# OpenE Landing Page

A modern, responsive landing page for the OpenE desktop application - a powerful computer literacy evaluation platform.

## About OpenE

OpenE is a Tauri-based desktop application designed for comprehensive evaluation and analysis of computer science concepts. It features AI-powered evaluation, enumeration checking, advanced analytics, and an interactive AI chat assistant.

## Features

- 🤖 **AI-Powered Evaluation** - Advanced AI analysis for comprehensive answer evaluation and feedback
- 📋 **Enumeration Checker** - Precise enumeration verification with expected answer matching
- 📊 **Advanced Analytics** - Detailed performance insights and learning progress tracking
- 💬 **AI Chat Assistant** - Interactive AI support for learning and problem-solving guidance

## Technology Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Geist Font** - Modern typography

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd landing
```

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   └── app/
│       ├── globals.css     # Global styles and gradient backgrounds
│       ├── layout.tsx      # Root layout with metadata
│       └── page.tsx        # Main landing page component
├── tailwind.config.js      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── package.json           # Dependencies and scripts
```

## Design Features

- **Glassmorphism Design** - Modern glass-like UI elements with backdrop blur
- **Gradient Backgrounds** - Multi-color radial gradients similar to the desktop app
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Responsive Layout** - Mobile-first design that works on all devices
- **Dark Theme** - Consistent with the desktop application's aesthetic

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with each push

### Manual Build

```bash
npm run build
npm start
```

## Customization

### Colors

The color scheme uses CSS custom properties and can be customized in `src/app/globals.css`:

```css
:root {
  --primary: #e6a91d;     // Golden yellow (light mode)
  --background: #fafcfd;  // Light gray background
  --uBlack: #2c2413;      // Dark text
  --uGray: #434343;       // Medium gray
  /* ... other colors */
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary: #ffc131;     // Brighter yellow (dark mode)
    --background: #202020;  // Dark background
    /* ... other dark mode colors */
  }
}
```

Colors are also defined in `tailwind.config.js` for easy use with Tailwind classes.

### Content

Update the landing page content in `src/app/page.tsx` to match your specific needs.

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support with the OpenE desktop application or this landing page, please open an issue in the repository.