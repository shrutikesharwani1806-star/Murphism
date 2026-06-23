# 🎓 MURPHISM Academy

> **"We Morph You to Become Industry Ready Creators/Innovators"**

A premium futuristic creative & tech academy website built with **Next.js 15**, **Tailwind CSS**, **MongoDB**, and **Mongoose** — featuring cinematic animations, a dark gold-purple theme, a fully secured admin control panel, and a seamless enrollment experience.

---

## ✨ Features

- 🎬 **Cinematic Hero Section** — Animated floating course stickers, GSAP scroll effects, Framer Motion transitions
- 🔒 **Secured Admin Control Panel (`/admin`)** — Secured by server-side Edge middleware and database-driven real-time authentication to track user inquiries, registrations, and edit application status
- 🎨 **Morphing Loader** — A custom, premium gold morphing geometric shape loader representing the "Murphism" (morphing creators) theme
- ⏱️ **Conversion Booster Popup** — Site-wide timed popup appearing after 1 minute of engagement to drive registrations ("Secure your seats now and unlock your brighten future with murphism")
- 📜 **3-Year Animations & Modelling Diploma** — Fully updated curriculum across all dynamic and static course components
- 📚 **Course Showcase** — Hover-reveal cards for Graphic Design, Website Development, Video Editing & VFX, 3D Modelling, AI Courses, and BSc in Animations & Modelling
- 📖 **Sticky Scroll Storytelling** — Why Choose Murphism section with scroll-driven animations
- 🔄 **Before vs After Slider** — Interactive student transformation display
- 🎥 **Infinite Video Showcase** — Hover-to-play video carousel of studio projects
- 🏆 **Certificate & Diploma Section**
- 💬 **Success Stories & Placements**
- 📞 **Contact Page** — Modern contact form with MongoDB submission
- 🌍 **Foreign Work Exposure** section
- 🤖 **AI Courses** spotlight
- 🎓 **3-Year BSc Animations & Modelling** degree program
- 📱 **Fully Responsive** — Mobile-first design across all devices
- ⚡ **SEO Optimized** — Metadata, Open Graph, Twitter Cards

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, JavaScript) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion + GSAP |
| Database | MongoDB + Mongoose |
| Security | Jose (Edge JWT verification) |
| Icons | Lucide React |
| Fonts | Outfit, Space Grotesk, Playfair Display |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB URI (local or Atlas)

### Installation

```bash
# Clone / navigate to project
cd murphism-academy

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your MongoDB URI and JWT Secret

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/murphism
JWT_SECRET=your_jwt_signing_secret_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 📁 Project Structure

```
murphism-academy/
├── app/
│   ├── layout.js              # Root layout with SEO metadata & fonts
│   ├── page.js                # Home page (all sections assembled)
│   ├── globals.css            # Global styles, animations, variables
│   ├── admin/
│   │   └── page.js            # Secure Admin Dashboard panel
│   ├── courses/
│   │   └── [slug]/
│   │       └── page.js        # Dynamic course detail + enrollment
│   ├── contact/
│   │   └── page.js            # Contact page
│   └── api/
│       ├── admin/
│       │   ├── enquiries/     # Enquiries database operations (Admin check)
│       │   └── users/         # Users records fetch (Admin check)
│       ├── auth/
│       │   ├── login/         # Auth login endpoint
│       │   ├── me/            # Fresh session database fetch
│       │   └── register/      # Registration with default non-admin flag
│       └── enroll/
│           └── route.js       # Enrollment form submission API
├── components/
│   ├── Navbar.js              # Navigation header (Conditional Admin Button)
│   ├── BookLoader.js          # Custom gold morphing shape loader
│   ├── WelcomePopup.js        # 1-minute secure seats popup modal
│   ├── HeroSection.js         # Cinematic hero with floating stickers
│   ├── CoursesSection.js      # Course grid cards
│   ├── WhyMurphism.js         # Sticky scroll storytelling
│   ├── StatsSection.js        # Animated counter stats
│   ├── TransformationSection.js # Before vs After
│   ├── VideoShowcase.js       # Infinite hover-play video showcase
│   ├── CertificateSection.js  # Certificates & Diplomas
│   ├── DegreeSection.js       # BSc Animations & Modelling Program
│   ├── AICoursesSection.js    # AI Courses spotlight
│   ├── ForeignExposure.js     # Foreign work exposure section
│   ├── SuccessStories.js      # Student success stories
│   └── Footer.js              # Footer including quick links
├── lib/
│   ├── auth.js                # JWT creation, verification, and cookie options
│   └── mongodb.js             # MongoDB connection utility
├── models/
│   ├── User.js                # Mongoose user schema with isAdmin property
│   ├── Enrollment.js          # Mongoose enrollment schema
│   └── Contact.js             # Mongoose contact schema
├── proxy.js                   # Server-side Edge Proxy/Middleware route security
└── public/                    # Static assets
```

---

## 📦 Available Scripts

```bash
npm run dev        # Start development server (http://localhost:3000)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Gold | `#f5c518` |
| Gold Dark | `#c9a227` |
| Purple | `#7c3aed` |
| Purple Light | `#a855f7` |
| Background | `#050508` |
| Card Background | `#0d0d18` |
| Text Primary | `#f8f8ff` |
| Text Muted | `#9999bb` |

---

## 🎓 Courses Offered

1. **Graphic Design** — Visual identity, branding, print & digital media (6 Months)
2. **Website Development** — HTML, CSS, JS, React, Next.js, full-stack (6 Months)
3. **Video Editing & VFX** — Premiere Pro, After Effects, motion graphics, VFX (6 Months)
4. **3D Modelling** — Blender, Maya, texturing, rendering (6 Months)
5. **AI Courses** — Generative AI, prompt engineering, AI tools (2 Months)
6. **Diploma in Animations & Modelling** — Specialised curriculum (3 Years)
7. **BSc Animations & Modelling** — Full degree program (3 Years)

---

## 📝 License

© 2026 MURPHISM Academy. All rights reserved.

---

*"They came, we shaped, they got placed."*
