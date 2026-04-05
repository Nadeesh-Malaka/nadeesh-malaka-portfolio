# Nadeesh Malaka Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

<img width="1366" height="726" alt="image" src="https://github.com/user-attachments/assets/b8f1b5ee-8609-4db6-af6f-cd6471e25ca1" />


## Overview

This project showcases Nadeesh Malaka as a Full Stack Developer with a modern, dark-themed UI and smooth interactions. It includes sections for hero, about, skills, projects, experience, education, and contact.

## Features

- Responsive design for desktop, tablet, and mobile
- Animated hero section with social links and CTA buttons
- Interactive skills marquee with hover pause
- Projects section with Show More and GitHub links
- Experience and education timeline-style cards
- Contact form integration with Web3Forms
- Back-to-top floating action button
- SEO-ready metadata in app layout

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons
- Lucide React

## Project Structure

- app: Next.js App Router pages, layout, and global styles
- components: Reusable UI sections and shared components
- public: Static assets (profile images, logos, CV, favicon)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm run start
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production bundle
- `npm run start`: Start production server

## Contact Form Setup

The contact form uses Web3Forms endpoint:

- API URL: https://api.web3forms.com/submit
- Access key is configured in the Contact component

If you want to use your own form key, update the access key value in `components/Contact.tsx`.

## Customization Notes

- Update personal data and section content in component files under `components`.
- Replace favicon with your own logo in `public/favicon.ico`.
- Update CV file in `public/Nadeesh Malaka CV.pdf` if needed.
- Replace profile and institution images in `public` to match your branding.

## Deployment

deploy on Vercel :https://nadeesh-malaka-portfolio.vercel.app/

## License

This project is for personal portfolio use.
