import { Fugaz_One } from "next/font/google";
import Button from "./Button";

import React from "react";
import Calendar from "./Calendar";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="textGradient">Happy Tracker</span> helps you track your{" "}
        <span className="textGradient">daily</span> mood!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Record your mood to track how you feel
        <span className="font-semibold"> every day of the year.</span>
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Button text="Sign Up" />
        <Button text="Login" dark />
      </div>
      <Calendar />
    </div>
  );
}
