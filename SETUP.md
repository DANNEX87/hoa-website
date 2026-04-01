# HOA Website Setup Guide

## Step 1: Add your environment variables

Create a file called `.env.local` in this folder (copy from `.env.example`).

Fill in the values:
- **Clerk keys**: clerk.com → your app → Configure → API Keys
- **Supabase keys**: supabase.com → your project → Project Settings → API

## Step 2: Set up the database

1. Go to supabase.com → your project → SQL Editor
2. Click "New Query"
3. Paste everything from `supabase-schema.sql`
4. Click "Run"

## Step 3: Configure Clerk SSO

1. Go to clerk.com → your app → Configure → Social Connections
2. Enable **Google** and **Microsoft**
3. For each: follow Clerk's guide to create OAuth credentials (it's free)

## Step 4: Push to GitHub & Deploy to Vercel

1. Create a new GitHub repo (github.com → New repository → name it `hoa-website`)
2. Push this folder to it:
   ```
   git init
   git add .
   git commit -m "Initial HOA website"
   git remote add origin https://github.com/YOUR_USERNAME/hoa-website.git
   git push -u origin main
   ```
3. Go to vercel.com → New Project → Import from GitHub → select `hoa-website`
4. Add your environment variables in Vercel (Settings → Environment Variables)
5. Click Deploy!

## Customizing content

- **Announcements**: Edit `app/page.tsx` → find the `announcements` array at the bottom
- **Board members**: Edit `app/about/page.tsx` → find the `board` array at the bottom
- **FAQ answers**: Edit `app/faq/page.tsx` → find the `faqs` array at the bottom
- **Neighborhood name**: Search for "My Neighborhood HOA" and replace with your actual name

## Managing the resident directory

Go to supabase.com → your project → Table Editor → residents table.
You can add, edit, and remove residents directly from this spreadsheet-like view.
No coding required!
