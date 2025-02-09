# Happy Tracker - The Mood Tracking App

## Overview

**Happy Tracker** is a full-stack mood tracking web application built using **Next.js 14**, **Firebase**, and **TailwindCSS**

## Features

- User authentication via Firebase
- Secure database storage for mood entries
- Dynamic, responsive UI with TailwindCSS
- Real-time updates and analytics

Ensure you have the following installed:

- Node.js
- npm
- Firebase account

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Set up Firebase:**

   - Create a Firebase project
   - Enable Firestore, Authentication (Google, Email/Password, etc.)
   - Get your Firebase config details and add them to an `.env.local` file:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     ```

3. **Run development server:**
   ```sh
   npm run dev
   ```
   The app should now be running for you to view on `http://localhost:3000`.
