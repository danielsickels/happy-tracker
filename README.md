# Happy Tracker - The Mood Tracking App  
  
## Please visit https://happytracker.dannysickels.com/ for the live demo!

## Overview

**Happy Tracker** is a full-stack mood tracking web application built using **Next.js 14**, **Firebase**, and **TailwindCSS**.

## Features

- User authentication via Firebase
- Secure database storage for mood entries
- Dynamic, responsive UI with TailwindCSS
- Real-time updates and analytics

---

## **Prerequisites**

Ensure you have the following installed:

- **Node.js** (for local development)
- **npm** (for package management)
- **Docker** (to run the app in a container)
- **Kubernetes (kubectl)** (to deploy on Kubernetes)
- **A Firebase account** (for authentication & database)

---

## **Local Development**

1. **Install dependencies:**

   ```sh
   npm install

   ```

2. **Set up Firebase:**

   - Create a Firebase project
   - Enable Firestore, Authentication (Google, Email/Password, etc.)
   - Get Firebase config details and add them to a `.env.local` file:
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

   The app should now be running on `http://localhost:3000`.

4. **If you want to run with Docker:**

   Containerize the app:

   ```
   docker build -t happy-tracker .
   ```

   Run the container:

   ```
   docker run -p 3000:3000 happy-tracker
   ```

   Now visit `http://localhost:3000`

5. **To Deploy to Kubernetes:**

   1. Enable Kubernetes, and check to make sure it is runing in Docker Desktop:
      `kubectl get nodes`
   2. Create Kubernetes Deployment & Service:
      `kubectl apply -f k8s/deployment.yaml`
      `kubectl apply -f k8s/service.yaml`
   3. Access via Port Forward:
      `kubectl port-forward svc/happy-tracker-service 3000:3000`

   Now please visit: `http://localhost:3000`
