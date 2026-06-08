# Computer Programmer Resume Template

A modern, interactive React resume template designed for computer programmers with dedicated sections for portfolio sites and projects.

## Features

✨ **Modern Design** - Clean, professional UI with gradient styling
🔗 **Portfolio Sites** - Quick access links to GitHub, CodePen, LinkedIn, and your portfolio
💼 **Professional Sections** - Includes summary, skills, experience, projects, and education
🖨️ **Print Ready** - Optimized for printing to PDF
📱 **Responsive** - Works great on desktop and mobile devices

## Project Sections

The resume includes dedicated spots for:
- **Portfolio Sites** - Links to GitHub, CodePen, Portfolio, and LinkedIn
- **Featured Projects** - Display your best work with links
- **Technical Skills** - Showcase your programming skills
- **Professional Experience** - Your work history
- **Education** - Degrees and certifications

## Setup & Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown (usually `http://localhost:5173`)

## Customization

To customize your resume, edit the `src/App.jsx` file and update the `resumeData` object with your information:

```javascript
const [resumeData, setResumeData] = useState({
  fullName: 'Your Name',
  title: 'Computer Programmer',
  email: 'your.email@example.com',
  phone: '(123) 456-7890',
  location: 'City, State',
  // ... add more details
})
```

### Update Portfolio Sites

Add or modify portfolio links in the `portfolioSites` array:

```javascript
portfolioSites: [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
  { name: 'CodePen', url: 'https://codepen.io/yourusername', icon: '✏️' },
  { name: 'Portfolio', url: 'https://yourportfolio.com', icon: '🌐' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼' }
]
```

### Update Projects

Modify the `projects` array to showcase your work:

```javascript
projects: [
  {
    name: 'Project Name',
    description: 'Brief project description',
    link: 'https://github.com/yourusername/project'
  },
  // ... add more projects
]
```

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` folder and ready to deploy.

## Printing to PDF

Click the "🖨️ Print Resume" button to open your browser's print dialog. Select "Save as PDF" to download your resume.

## Deployment Options

- **Vercel** - Zero-config deployment for React projects
- **Netlify** - Drop-in static hosting
- **GitHub Pages** - Free hosting directly from your GitHub repo
- **Self-hosted** - Deploy the `dist/` folder anywhere

## Technologies Used

- React 18
- Vite
- CSS3
- Responsive Grid Layout

## License

Feel free to use this template for your personal resume!
