# Hola Espanol Website

A modern, bilingual (EN/SK) personal website for **Hola Espanol** — online Spanish lessons by **Katarína Pillárová**.

## Features

### Site Sections

- **Hero** - Clear value proposition for Spanish learners
- **Services** - Beginner/intermediate online lessons (individual or couple)
- **About** - Teacher profile and teaching approach
- **Contact** - Lesson inquiry form (Mailtrap email integration)
- **Privacy** - Cookie/analytics consent and privacy policy

## Tech Stack

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[next-intl](https://next-intl.dev/)** - Internationalization (English and Slovak)
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Perfect dark mode support
- **[Mailtrap](https://mailtrap.io/)** - Professional email delivery service
- **[React 19](https://react.dev/)** - Latest React features
- **Modern Tooling** - ESLint, PostCSS, Turbopack

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   └── privacy/page.tsx
│   └── api/contact/route.ts
├── components/            # Reusable UI components
├── sections/              # Homepage sections (hero/services/about/contact)
├── i18n/                  # next-intl routing helpers
├── lib/                   # Config + utilities
└── providers/             # Theme provider
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd kp-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your Mailtrap API token:

   ```bash
   MAILTRAP_API_TOKEN=your_mailtrap_api_token_here
   ```

   Optional (recommended) variables:

   ```bash
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   CONTACT_SENDER_EMAIL=noreply@holaespanol.local
   ```

   To get your Mailtrap API token:
   - Sign up at [mailtrap.io](https://mailtrap.io)
   - Go to **API Tokens** in your dashboard
   - Create a new token with **Send Email** permission
   - Copy the token to your `.env.local` file

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Design Philosophy

The website follows a **clean, minimalist, and professional** design approach:

- **Modern Sophistication** - Contemporary design with enterprise appeal
- **Dark Mode Excellence** - Seamless theme switching with system preference support
- **Excellent Contrast** - High readability and business credibility in both themes
- **Responsive Typography** - Clear headings and professional font choices
- **Brand Voice** - Confident, expert, and solution-focused messaging

## Teaching Values

Hola Espanol focuses on:

- **Individual approach** - Lessons tailored to your goals
- **Comfort of home** - Online lessons from anywhere
- **Practical topics** - Spanish for real life and travel

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

## Contact

- **Email**: katka.plackova3@gmail.com

## 🤝 Contributing

This project demonstrates AI-assisted development practices. When contributing:

1. Follow the established prompt engineering patterns
2. Maintain TypeScript strict mode compliance
3. Use Tailwind CSS for styling consistency
4. Ensure accessibility standards (WCAG 2.1)
5. Write semantic HTML with proper heading hierarchy

## License

This project is proprietary. All rights reserved.
