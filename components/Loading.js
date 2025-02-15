import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <i className="fa-solid fa-spinner animate-spin text-4xl text-slate-800 sm:text-5xl"></i>
    </div>
  );
}
