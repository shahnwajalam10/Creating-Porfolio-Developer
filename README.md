# Portfolio

Modern portfolio website with modular architecture.

## Stack

- React.js 14
- React 18
- TypeScript
- Tailwind CSS

## Structure

```
app/
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── layout.tsx
└── page.tsx
```

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Customization

Each component is self-contained. Update content directly in component files.

**Colors**: Black background, orange accents (`#ff6b35`)

**Typography**: Roboto Mono loaded via Google Fonts and applied globally in layout.tsx

## Build

```bash
npm run build
npm start
```

## Deploy

Vercel:
```bash
vercel
```

Or connect repository to Vercel/Netlify for automatic deployments.

## License

MIT
