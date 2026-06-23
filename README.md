# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🚀 Gaytri Kolhe — Developer Portfolio

A modern, responsive personal portfolio website built with **React** and **Tailwind CSS**, featuring a dark navy theme, smooth animations, and an AI-powered chatbot assistant.

---

## ✨ Features

- **Hero Section** — Typing animation, profile photo, social links, resume download
- **About Section** — Personal intro and background
- **Skills Section** — Tabbed skill categories with animated cards
- **Projects Section** — Project showcase with tech stack badges
- **Experience Section** — Work/internship timeline
- **Certifications Section** — Certificates and courses
- **Contact Section** — EmailJS-powered contact form
- **AI Chatbot** — Portfolio assistant with keyword-based smart replies
- **Scroll Progress Bar** — Reading progress indicator
- **Responsive Design** — Mobile-first, works on all screen sizes

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Frontend Framework | React 18 |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Email Service | EmailJS (`@emailjs/browser`) |
| Build Tool | Vite |
| Language | JavaScript (JSX) |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf              # Resume file for download
├── src/
│   ├── assets/
│   │   └── profile2.png        # Profile photo
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ScrollProgress.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── certifications.jsx
│   │   ├── Contact.jsx
│   │   └── ChatBot.jsx
│   ├── styles/
│   │   └── custom.css
│   └── App.jsx
├── .env                        # Environment variables (EmailJS keys)
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Gaytrik/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)

# 4. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### How to get EmailJS keys

1. Go to [https://www.emailjs.com](https://www.emailjs.com) and create a free account
2. **Service ID** — Add an email service (Gmail recommended) → copy the Service ID
3. **Template ID** — Create an email template → copy the Template ID
4. **Public Key** — Go to Account → API Keys → copy your Public Key

### EmailJS Template Variables

Your EmailJS template should use these variables:

```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}
Message: {{message}}
```

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## 🚀 Deployment

### Build for production

```bash
npm run build
```

The `dist/` folder contains the production-ready files.

### Deploy on Vercel (recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) for automatic deployments.

### Deploy on Netlify

Drag and drop the `dist/` folder at [app.netlify.com](https://app.netlify.com), or connect via GitHub.

> **Note:** Add your `.env` variables in the platform's environment settings — never push `.env` to GitHub.

---

## 🤖 Chatbot

The portfolio includes a built-in AI assistant (`ChatBot.jsx`) that answers questions about Gaytri — experience, skills, projects, relocation, and contact info. It uses local keyword matching (no external API needed) with a natural typing delay for a realistic feel.

**Sample questions it handles:**
- "How much experience do you have?"
- "What are your skills?"
- "Are you open to relocation?"
- "Tell me about your projects"
- "How can I contact you?"

---

## 📬 Contact

**Gaytri Kolhe**
- 📧 [gaytrikolhe2001@gmail.com](mailto:gaytrikolhe2001@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/gaytrikolhe-4467921b9)
- 🐙 [GitHub](https://github.com/Gaytrik)
- 📍 Pune, Maharashtra, India

---

## 📄 License

This project is personal portfolio work. Feel free to use it as inspiration for your own portfolio!
