## Purpose

This document provides instructions and guidelines for GitHub Copilot to assist in developing a **modern personal website for Hola Espanol**, offering **online Spanish lessons** by **Katarína Pillárová**.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (for internationalization - English and Slovak)

## Project Structure Guidelines

/app # App Router entry point
/components # Reusable UI components
/sections # Page sections (Intro, Services, About, Contact)
/lib # Utilities (SEO config, email utils, etc.)
/public # Static assets (images, icons, etc.)
/messages # i18n translation files (en.json, sk.json)
/i18n # Internationalization configuration (routing, middleware)

## Internationalization (i18n)

- **Supported Languages**: English (default) and Slovak
- **URL Structure**: `/<locale>/...` where locale is `en` or `sk`
- **Translation Files**:
  - `messages/en.json` - English translations
  - `messages/sk.json` - Slovak translations
- **Components**: All user-facing text uses `useTranslations()` hook from next-intl
- **Language Switcher**: Available in navigation for seamless language switching
- **Routing Helpers**: Locale routing is configured in `src/i18n/`

## Pages / Routes

- `/<locale>` → Homepage (hero + services overview + about teaser + contact CTA)
- `/<locale>/services` → Lesson offerings (beginner/intermediate, individual/couple)
- `/<locale>/about` → About the teacher (approach, materials, goals)
- `/<locale>/contact` → Lesson inquiry form
- `/<locale>/privacy` → Privacy policy and cookie consent

## Style Guide

- **Design**: Clean, minimalist, professional with warm, human feel
- **Color Palette**: Calm, modern tones with excellent contrast and accessibility
- **Typography**: Clear headings, professional font choices, responsive and accessible
  -- **Brand Voice**: Friendly, clear, encouraging, and practical

## Teaching Values & Details

-- **Core Values**: Individual approach, comfort of home (online), practical topics
-- **Location**: Košice, Slovakia (teaching online)
-- **Contact Email**: katka.plackova3@gmail.com
-- **Approach**: Confidence-building speaking practice, useful vocabulary, travel preparation, and worksheets/materials

### Teacher Profile

- **Teacher**: Katarína Pillárová
- **Offer**: Online Spanish lessons for beginners and intermediate learners
- **Formats**: 1:1 lessons or couple lessons

### Content Guidelines

- Keep copy concise and learner-focused.
- Prefer concrete outcomes ("order at a restaurant", "ask for directions", "travel prep").
- Avoid corporate/agency language ("projects", "case studies", "clients").

## Accessibility (a11y)

- Use **semantic HTML** wherever possible (`<main>`, `<section>`, `<article>`)
- Ensure **keyboard navigation** is smooth
- Add **aria-labels** or `alt` text for all non-decorative images
- Use `:focus-visible` for focus states on interactive elements

## SEO Guidelines

- Title and meta description per page
- Open Graph / Twitter Card meta tags for link previews
- Headings (`<h1>` → `<h6>`) structured hierarchically
- Use `next/image` for optimized images

## Features to Implement

### Intro Section

- Personal hero with clear value proposition (learn Spanish online)
- Teaching values (individual approach, practical topics)
- Call to Action (book a lesson / contact)

### Services Section

- Core lesson offerings:
  - **Beginner Spanish** - Foundations, pronunciation, key phrases, confidence building
  - **Intermediate Spanish** - Speaking practice, real-life dialogues, expanding vocabulary
  - **Individual / Couple Lessons** - Flexible formats with tailored pacing
  - **Travel Preparation** - Practical situations and ready-to-use phrases
- Materials and worksheets provided

### About Section

- Teacher story and teaching approach
- What students can expect in lessons
- Why choose Hola Espanol

### Contact Section

- Lesson inquiry form (name, email, level/goals, message)
- Form validation and professional handling
- Alternative contact method: email `katka.plackova3@gmail.com`

### Footer

- Professional contact information
- Privacy policy link
- Language switcher for easy locale switching

## i18n Implementation Guidelines

### Translation Structure

- All user-facing text is stored in JSON files under `/messages/`
- Hierarchical structure: `navigation.home`, `services.title`, `contact.form.email`
- Use descriptive keys that reflect content purpose, not just location

### Component Implementation

- Use `"use client"` directive for components using `useTranslations()`
- Import: `import { useTranslations } from "next-intl"`
- Usage: `const t = useTranslations("sectionName"); t("keyName")`
- Nest translation keys logically by component/section

### Adding New Content

- Add translations to both `en.json` and `sk.json` files
- Maintain consistent key structure across both languages
- Use professional, business-appropriate tone for both languages
- Slovak translations should sound natural, not machine-translated

## Optional Enhancements

- **Dark Mode** with Tailwind theming
- **Framer Motion** for transitions
- **Sitemap.xml** and **robots.txt** for SEO completeness
- **RSS feed** if a blog is added later

## Example Copilot Prompts

// Create a warm, professional hero section for Hola Espanol (EN/SK)

// Build a services section for online Spanish lessons (beginner/intermediate, individual/couple)

// Improve contact form UX copy for lesson inquiries (EN/SK)

---

**Goal**: Assist in building a **modern, accessible, SEO-optimized personal website** for Hola Espanol using Next.js, TypeScript, Tailwind, and next-intl.
