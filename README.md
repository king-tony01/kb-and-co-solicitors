# KB & Co Solicitors

Professional legal services website built with modern web technologies. Clear, practical legal advice delivered with care and professionalism.

## About

KB & Co Solicitors provides expert legal counsel and representation with a strong focus on personal attention and high professional standards. We are regulated by the Solicitors Regulation Authority (SRA).

**Website:** https://kbsolicitors.com

## Features

- **Modern Design**: Professional and clean user interface with responsive design
- **Consultation Requests**: Easy-to-use consultation form with email notifications
- **Professional Branding**: Elegant design reflecting legal services expertise
- **Mobile Optimized**: Fully responsive design for all devices
- **Accessibility**: Built with accessibility best practices

## Tech Stack

- **Framework**: [Next.js 16.1.0](https://nextjs.org) - React framework for production
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **React**: [React 19.2.3](https://react.dev) - UI library
- **Styling**: CSS Modules with SCSS support
- **Compiler**: Babel React Compiler for optimal performance
- **Linting**: ESLint with Next.js configuration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/kb-and-co-solicitors.git
cd kb-and-co-solicitors
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page auto-updates as you edit files. TypeScript errors will appear in the console.

### Building

Build the project for production:

```bash
npm run build
```

### Production

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
kb-and-co-solicitors/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   └── consultation/       # Consultation page
│   ├── components/
│   │   ├── buttons/            # Button components
│   │   ├── icons/              # SVG icon components
│   │   └── inputs/             # Form input components
│   └── layouts/
│       ├── Form.tsx            # Consultation form
│       ├── Footer.tsx          # Footer component
│       ├── NavBar.tsx          # Navigation bar
│       └── Services.tsx        # Services section
├── public/
│   ├── site.webmanifest        # PWA manifest
│   └── [images & assets]
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── eslint.config.mjs           # ESLint configuration
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_API_ENDPOINT=your_email_api_endpoint
NEXT_PUBLIC_EMAIL_TO=your_email@kbandco.com
```

## Features in Detail

### Consultation Form

- Client information collection (name, email, phone)
- Case summary input
- Modern modal-based success/error notifications
- Professional HTML email templates
- Form validation and error handling

### Responsive Design

- Mobile-first approach
- Desktop-optimized layouts
- Touch-friendly interface elements

### Professional Branding

- Premium color scheme (Dark Navy & Gold)
- Clean typography with Inter font family
- Consistent styling across all pages

## Performance

- React Compiler enabled for optimal performance
- CSS Modules for scoped styling
- Next.js image optimization
- Modern JavaScript with TypeScript

## Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- Color contrast compliance

## SEO

- Comprehensive metadata
- Open Graph tags for social sharing
- XML sitemap ready
- Mobile-friendly design
- Fast page load times

## SRA Compliance

- Regulated by the Solicitors Regulation Authority
- Professional standards and ethics
- Client information protection
- Secure communication channels

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and unlicensed. All rights reserved by KB & Co Solicitors.

## Contact

For inquiries about our legal services, please visit [kbsolicitors.com](https://kbsolicitors.com) or use the consultation form.

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be live after the deployment completes

[Deploy with Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

### Other Platforms

The application can also be deployed on:

- [Netlify](https://www.netlify.com)
- [AWS Amplify](https://aws.amazon.com/amplify)
- [Docker](https://www.docker.com)
- Traditional servers with Node.js support

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [CSS Modules Documentation](https://nextjs.org/docs/app/building-your-application/styling/css-modules)

## Support

For technical support or issues, please open an issue on the [GitHub repository](https://github.com/yourusername/kb-and-co-solicitors/issues).

---

**© 2026 KB & Co Solicitors. All rights reserved.**

Regulated by the Solicitors Regulation Authority (SRA)
