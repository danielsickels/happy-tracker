import { Fugaz_One } from "next/font/google";
import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";
import Link from "next/link";
import CallToAction from "./CallToAction";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 py-4 sm:gap-10 md:py-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="textGradient">Happy Tracker</span> helps you track your{" "}
        <span className="textGradient">daily</span> mood!
      </h1>
      <p className="mx-auto w-full max-w-[600px] text-center text-lg sm:text-xl md:text-2xl">
        See how you feel throughout the year,
        <br />
        <span className="font-semibold">
          let&#39;s track your mood every day!
        </span>
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
}
