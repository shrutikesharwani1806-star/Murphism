# 🚀 How to Deploy Murphism Academy on Vercel

This guide details how to build and deploy the Murphism Academy platform (both Frontend and Backend API routes) to production using Vercel.

---

## 📋 Pre-deployment Checklist

Ensure you have gathered the following configuration values before deploying:

1. **MongoDB Connection String** (`MONGODB_URI`):
   - A MongoDB Atlas database connection URI.
   - Example: `mongodb+srv://admin:<password>@cluster0.abcde.mongodb.net/murphism-db?retryWrites=true&w=majority`
2. **JWT Secret Key** (`JWT_SECRET`):
   - A highly secure random secret string used to sign sessions.
   - Example: `8f3e29ac3d7f90f23bcfd1264c8d20e7`
3. **Site URL** (`NEXT_PUBLIC_SITE_URL`):
   - Your production domain URL.
   - Example: `https://murphism-academy.vercel.app`
4. **Gemini API Key** (`GEMINI_API_KEY`):
   - Your Gemini API Key from Google AI Studio to power the live AI Chatbot.
   - Example: `AIzaSyB3_exampleKey12345`

---

## ☁️ Vercel Deployment Steps

Since Murphism Academy is built using **Next.js**, Vercel is the recommended and optimized hosting option for both the serverless backend functions and the frontend.

### Steps to Deploy:

1. **Push Code to Repository**:
   - Push your workspace files to GitHub, GitLab, or BitBucket.
2. **Import Project to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **Add New** → **Project**.
   - Import your Murphism repository.
   - **Crucial**: During the import configuration, set the **Root Directory** to `murphism-academy` (this ensures Vercel compiles the Next.js project in the subfolder correctly).
3. **Configure Environment Variables**:
   - Under the project configuration settings, expand the **Environment Variables** section and add the following keys and values:
     - `MONGODB_URI`
     - `JWT_SECRET`
     - `NEXT_PUBLIC_SITE_URL`
     - `GEMINI_API_KEY`
4. **Deploy**:
   - Click **Deploy**. Vercel will automatically build the Next.js production bundle, configure the API routes as serverless functions, and host the client pages.

---

## 🗄️ Setting Up Admin User in Production

By default, newly registered users on the website are set to `isAdmin: false`. To promote a user to Admin in production:

1. Register the admin account on the website (e.g., `admin@murphism.com`).
2. Log in to your MongoDB Atlas cluster.
3. Open the **Collections** view and select the `murphism-db` database and `users` collection.
4. Locate the document corresponding to your registered email.
5. Edit the document and set `"isAdmin": true`.
6. Refresh the Murphism Academy page. The user will instantly see the **Admin Dashboard** button in the Navbar.

---

## 🛠️ Diagnostics & Troubleshooting

- **500 Database Connections**:
  Ensure MongoDB Atlas Network Access (IP Access List) allows connections from "Anywhere" (`0.0.0.0/0`) since serverless Vercel function instances rotate dynamic IPs.
- **Admin Redirect Loops**:
  Verify `JWT_SECRET` is exactly the same on your local environment and Vercel settings.
- **Chatbot Not Responding**:
  Verify that your `GEMINI_API_KEY` is correctly pasted into Vercel and is active.
