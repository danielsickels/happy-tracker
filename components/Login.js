"use client";
import { Fugaz_One } from "next/font/google";
import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 

  const { signup, login } = useAuth();

  async function handleSubmit() {
    setErrorMessage(""); 

    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return;
    }

    if (isRegister && password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setAuthenticating(true);
    try {
      if (isRegister) {
        console.log("Signing up a new user");
        await signup(email, password);
      } else {
        console.log("Logging in existing user");
        await login(email, password);
      }
    } catch (err) {
      console.log(err.message);
      if (!isRegister) {
        setErrorMessage("Are you registered? Please check your credentials.");
      } else {
        setErrorMessage("Registration failed. Try again.");
      }
    } finally {
      setAuthenticating(false);
    }
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + fugaz.className}>
        {isRegister ? "Register" : "Log In"}
      </h3>
      <p>You&#39;re one step away!</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mx-auto w-full max-w-[400px] rounded-full border border-solid border-green-400 px-3 py-2 outline-none duration-200 hover:border-green-600 focus:border-green-600 sm:py-3"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mx-auto w-full max-w-[400px] rounded-full border border-solid border-green-400 px-3 py-2 outline-none duration-200 hover:border-green-600 focus:border-green-600 sm:py-3"
        placeholder="Password"
        type="password"
      />

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <div className="mx-auto w-full max-w-[400px]">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          full
        />
      </div>
      <p className="text-center">
        {isRegister ? "Already have an account? " : "Don't have an account? "}
        <button
          onClick={() => {
            setIsRegister(!isRegister);
            setErrorMessage(""); 
          }}
          className="text-green-600"
        >
          {isRegister ? "Sign in" : "Sign up"}
        </button>
      </p>
    </div>
  );
}
