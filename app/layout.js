import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

const opensans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Happy Tracker",
  description: "See how you feel throughout the year, track your mood daily!",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="flex items-center justify-between gap-4 p-4 sm:p-8">
      <Link href={"/"}>
        <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>
          Happy Tracker
        </h1>
      </Link>
      <Logout />
    </header>
  );

  const footer = (
    <footer className="grid place-items-center p-4 sm:p-8">
      <Link
        href={"https://github.com/danielsickels/happy-tracker"}
        target="_blank"
        className=""
      >
        <p
          className={
            "text-green-500 duration-200 hover:text-white hover:bg-green-500  " +
            fugaz.className
          }
        >
          Built with 💛
        </p>
      </Link>
    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <AuthProvider>
        <body
          className={
            "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800  " +
            opensans.className
          }
        >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
