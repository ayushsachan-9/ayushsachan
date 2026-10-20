# Ayush Sachan - ECE & Embedded Systems Portfolio

A cyber-hardware themed portfolio website for **Ayush Sachan**, an Electronics & Communication Engineering (ECE) undergraduate specializing in Embedded Systems, IoT, and Edge Computing.

Designed with **React, Vite, Tailwind CSS, and Lucide Icons**.

---

## 🚀 Quick Start Guide

### 1. Run Locally in Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

### 2. Build for Production
```bash
npm run build
```
This generates the optimized, production-ready static files in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ How to Customize Your Portfolio

All your data is completely centralized in one single configuration file:  
👉 **`src/data/portfolioData.js`**

You do **not** need to touch any UI or React code to update your details!

### 1. Updating Personal Information & Links
In `src/data/portfolioData.js`, update:
- `email`: Your email address (e.g. `yourname@gmail.com`)
- `github`: Your GitHub profile link
- `linkedin`: Your LinkedIn profile link
- `resumeUrl`: Link to your resume PDF (or place `resume.pdf` in the `public/` folder and set `resumeUrl: "/resume.pdf"`)
- `institution`: Your college or university name
- `period`: Your batch / graduation years (e.g. `2023 - 2027`)

### 2. Adding Details for Project #2 & Project #3
In `src/data/portfolioData.js`, scroll to `projectsData`:
- **Project #2 (`library-management`)**: Add your specific tech stack, description, or hardware components (e.g., RFID scanner, database, web portal).
- **Project #3 (`upcoming-project-3`)**: When you are ready to reveal your 3rd project, change `isPlaceholder: false`, set your title, upload an image to `public/images/`, and list its hardware components and features!

---

## 🚢 Deployment Options

### Deploy to Vercel (Recommended & 1-Click)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import your GitHub repo.
3. Vercel automatically detects Vite and deploys your site with free HTTPS and global CDN.

### Deploy to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add `"base": "/<repository-name>/"` in `vite.config.js`.
3. Add deploy script to `package.json`:
   ```json
   "deploy": "vite build && gh-pages -d dist"
   ```
4. Run `npm run deploy`.
