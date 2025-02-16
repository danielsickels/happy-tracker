/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
      NEXT_PUBLIC_AUTH_DOMAIN: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
      NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
      NEXT_PUBLIC_STORAGE_BUCKET: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
      NEXT_PUBLIC_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
      NEXT_PUBLIC_APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    },
    // webpack: (config) => {
    //   console.log('🔥 BUILD-TIME FIREBASE CONFIG:');
    //   console.log(`API_KEY: ${process.env.NEXT_PUBLIC_API_KEY}`);
    //   console.log(`AUTH_DOMAIN: ${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`);
    //   console.log(`PROJECT_ID: ${process.env.NEXT_PUBLIC_PROJECT_ID}`);
    //   console.log(`STORAGE_BUCKET: ${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`);
    //   console.log(`MESSAGING_SENDER_ID: ${process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID}`);
    //   console.log(`APP_ID: ${process.env.NEXT_PUBLIC_APP_ID}`);
    //   return config;
    // },
  };
  
  export default nextConfig;
  