# Portfolio Website

A modern, bold portfolio website built with Next.js 14, featuring a striking black-and-orange color scheme and smooth animations.

## 🎨 Features

- **Modern Design**: Bold black-and-orange aesthetic with smooth hover effects and transitions
- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Modular Architecture**: Clean, maintainable codebase with reusable components
- **Smooth Animations**: Enhanced user experience with Framer Motion animations
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Header navigation component
│   │   ├── Hero.tsx            # Landing section with introduction
│   │   ├── About.tsx           # About me section
│   │   ├── Experience.tsx      # Work experience timeline
│   │   ├── Projects.tsx        # Featured projects showcase
│   │   ├── Education.tsx       # Educational background
│   │   └── Contact.tsx         # Contact form and information
│   ├── layout.tsx              # Root layout with global styles
│   └── page.tsx                # Main page composition
├── public/                     # Static assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd portfolio
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📦 Component Overview

### Navigation
Sticky navigation bar with smooth scroll-to-section functionality and responsive mobile menu.

### Hero
Eye-catching landing section with animated introduction and call-to-action buttons.

### About
Personal introduction section highlighting skills and expertise with animated skill tags.

### Experience
Timeline-based display of professional work experience with company details and achievements.

### Projects
Grid layout showcasing featured projects with links to live demos and GitHub repositories.

### Education
Academic background with degree information and relevant coursework.

### Contact
Contact form and social media links for easy communication.

## 🎨 Customization

### Colors
The primary color scheme uses:
- **Primary**: Orange (`#ff6b35`, `#ff8c42`)
- **Background**: Black (`#000000`)
- **Text**: White (`#ffffff`)
- **Accent**: Gray shades

To customize colors, update the Tailwind classes throughout the components or modify the global CSS.

### Content
Each component contains placeholder content. Update the following:
- Personal information in `Hero.tsx`
- Skills and bio in `About.tsx`
- Work history in `Experience.tsx`
- Project details in `Projects.tsx`
- Educational background in `Education.tsx`
- Contact information in `Contact.tsx`

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [React 18](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📝 Development

### Code Structure
- **Modular Components**: Each section is a self-contained component
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Clean Code**: Consistent formatting and naming conventions

### Best Practices
- Keep components focused and single-responsibility
- Use semantic HTML elements
- Maintain consistent spacing and styling
- Optimize images and assets
- Write accessible markup

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms
- **Netlify**: Connect your repository or drag-and-drop the build folder
- **AWS Amplify**: Use the Amplify CLI or connect your repository
- **Digital Ocean**: Deploy using App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👤 Author

**Your Name**
- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js and Tailwind CSS
