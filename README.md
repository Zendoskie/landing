# Open2E Landing Page

A modern, responsive landing page for the Open2E research project - an AI-powered open-ended question evaluation tool using GPT-4o and NLP.

## About Open2E

Open2E is a research project that addresses the challenges of manual grading for open-ended questions. Our intelligent evaluation tool uses GPT-4o and Natural Language Processing to automatically analyze and score student responses, providing clear, consistent, and constructive feedback in seconds.

## Research Team

- **Jr Nino Garingarao** - Lead Researcher
- **John Paul Marquez** - AI Developer  
- **Alyssa Jane Marquez** - UI/UX Designer

## Key Features

- 🤖 **GPT-4o Integration** - Advanced AI analysis using OpenAI's latest model
- 🧠 **NLP Analysis** - Natural Language Processing for accurate response understanding
- ⚡ **Instant Feedback** - Get detailed feedback in seconds, not hours
- 📊 **Consistent Scoring** - Eliminate grading inconsistencies with standardized AI evaluation

## Target Audience

- **Educators** - Teachers looking for efficient grading solutions
- **Students** - Learners seeking immediate feedback on their responses  
- **Self-studying Individuals** - Anyone wanting to practice and improve their answers

## Website Sections

1. **Hero Section** - Introduction and main call-to-action
2. **Research Objective** - Problem statement and solution overview
3. **Key Features** - Feature showcase with screenshot placeholders
4. **About the Researchers** - Team information and contact details
5. **FAQ** - Common questions about the AI evaluation system
6. **Download Section** - Download links for Linux and Windows

## Technology Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Modern typography

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
├── src/app/
│   ├── globals.css     # Global styles and gradient backgrounds
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Main landing page component
├── tailwind.config.js  # Tailwind configuration
├── next.config.js      # Next.js configuration
└── package.json       # Dependencies and scripts
```

## Design Features

- **Glassmorphism Design** - Modern glass-like UI elements with backdrop blur
- **Gradient Backgrounds** - Multi-color radial gradients with golden accents
- **Interactive Components** - FAQ accordion, hover effects, and smooth transitions
- **Responsive Layout** - Mobile-first design that works on all devices
- **Light/Dark Theme Support** - Automatic theme detection and adaptation

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

### Content

Update the landing page content in `src/app/page.tsx` to match your specific research details, contact information, and download links.

### Logo

Replace the placeholder logo in the navigation and footer with your actual Open2E logo by updating the logo sections in `src/app/page.tsx`.

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

## Research Focus

Open2E addresses critical challenges in educational assessment:

- **Manual Grading Issues** - Slow, inconsistent, and stressful for educators
- **Student Feedback** - Lack of immediate, constructive response analysis
- **Scalability** - Difficulty handling large volumes of open-ended responses
- **Consistency** - Human bias and fatigue affecting grading standards

## License

This is a research project. All rights reserved 2025.

## Contact

For inquiries about the Open2E research project:

- **GitHub**: [Your Repository Link]
- **Facebook**: [Your Facebook Page]
- **Instagram**: [Your Instagram Account]

## Contributing

This is a research project by Jr Nino Garingarao, John Paul Marquez, and Alyssa Jane Marquez. For collaboration inquiries, please contact the research team directly.