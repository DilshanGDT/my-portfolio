# DilshanGDT — ePortfolio

A responsive, dark/light mode ePortfolio built with **React + TypeScript + Tailwind CSS**.

---

## 🚀 Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Steps

```bash
# 1. Navigate into the project folder
cd eportfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open your browser at **http://localhost:5173**

---

## 🗂 Project Structure

```
eportfolio/
├── public/
│   ├── favicon.svg
│   ├── profile.png          ← Add your profile photo here
│   ├── resume.pdf           ← Add your CV here
│   ├── projects/
│   │   ├── chert-nodes.png  ← Project screenshots
│   │   ├── protect-x.png
│   │   └── kahoot-answers.png
│   └── certificates/
│       ├── react-cert-1.png ← Certificate images
│       └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── EducationExperience.tsx
│   │   ├── SkillsTechnologies.tsx
│   │   ├── Projects.tsx
│   │   ├── ContactMe.tsx
│   │   └── Footer.tsx
│   ├── context/
│   │   └── ThemeContext.tsx
│   ├── data/
│   │   └── portfolioData.ts  ← All your content lives here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## ✏️ How to Personalise

### 1. Update your content
Edit **`src/data/portfolioData.ts`** — this single file controls:
- Your name, tagline, quote
- Social links
- Education & experience entries (with descriptions for the popup)
- Skills + certificate images & descriptions
- Projects (title, description, tags, links, image)
- Footer info

### 2. Add your images
Place files in the `/public` folder (they are served from the root `/`):

| File | Purpose |
|------|---------|
| `public/profile.png` | Hero section photo |
| `public/resume.pdf` | Downloaded when "My Resume" is clicked |
| `public/projects/chert-nodes.png` | Project card images |
| `public/certificates/react-cert-1.png` | Certificate images in skill popups |

### 3. Connect Web3Forms (Contact Form)
1. Sign up at [web3forms.com](https://web3forms.com/) — it's free
2. Create an access key for your email address
3. Open `src/components/ContactMe.tsx`
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your real key

### 4. Build for production
```bash
npm run build
```
The output will be in the `dist/` folder — deploy it to Vercel, Netlify, or any static host.

---

## 🎨 Colors & Theme

| Variable | Dark Mode | Light Mode |
|---------|-----------|------------|
| Background | `#282C33` | `#FFFFFF` |
| Primary text | `#FFFFFF` | `#000000` |
| Secondary text | `#ABB2BF` | `#ABB2BF` |
| Accent (purple) | `#C778DD` | `#C778DD` |

Font: **Fira Code** (loaded from Google Fonts)

---

## 🌐 Deployment (Vercel — recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.
