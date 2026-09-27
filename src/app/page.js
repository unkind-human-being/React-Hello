"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <main
      className={`flex min-h-[calc(100vh-65px)] items-center justify-center transition-all duration-300 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em]">
          Web Developer
        </p>

        <h1 className="text-5xl font-bold md:text-7xl">
          Lhutz Nazirin
        </h1>

        <p className="mt-5 text-sm">
          Building simple things for the web.
        </p>

        <button
          onClick={() => setDark(!dark)}
          className={`mt-8 border px-5 py-2 text-sm ${
            dark
              ? "border-white hover:bg-white hover:text-black"
              : "border-black hover:bg-black hover:text-white"
          }`}
        >
          Switch Theme
        </button>
      </div>
    </main>
  );
}