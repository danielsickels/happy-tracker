"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

export default function CallToAction() {
  const { currentUser } = useAuth();

  if (currentUser) {
    return (
      <div className="mx-auto w-full max-w-[600px]">
        <Link href={"/dashboard"}>
          <Button dark full text="Go to dashboard" />
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-fit grid-cols-2 gap-4">
      <Link href={"/dashboard"}>
        <Button text="Sign Up" />
      </Link>
      <Link href={"/dashboard"}>
        <Button text="Login" dark />
      </Link>
    </div>
  );
}
