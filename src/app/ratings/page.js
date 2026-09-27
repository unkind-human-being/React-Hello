"use client";

import { useEffect, useState } from "react";

export default function Ratings() {
  const [rating, setRating] = useState(null);

  useEffect(() => {
    const savedRating = localStorage.getItem("portfolio-rating");

    if (savedRating) {
      setRating(Number(savedRating));
    }
  }, []);

  function ratePortfolio(number) {
    setRating(number);
    localStorage.setItem("portfolio-rating", number);
  }

  return (
    <main className="flex min-h-[calc(100vh-65px)] items-center justify-center bg-white text-black">
      <div className="w-full max-w-xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em]">
          Portfolio Rating
        </p>

        <h1 className="mt-5 text-5xl font-bold">
          What do you think?
        </h1>

        <p className="mt-5">
          Rate this portfolio from 1 to 5.
        </p>

        <div className="mt-10 flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((number) => (
            <button
              key={number}
              onClick={() => ratePortfolio(number)}
              className={`flex h-14 w-14 items-center justify-center border border-black text-lg font-bold transition ${
                rating === number
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        {rating && (
          <div className="mt-10 border-t border-black pt-6">
            <p className="text-sm">Your rating</p>

            <p className="mt-2 text-4xl font-bold">
              {rating} / 5
            </p>

            <button
              onClick={() => {
                setRating(null);
                localStorage.removeItem("portfolio-rating");
              }}
              className="mt-5 text-sm underline"
            >
              Change rating
            </button>
          </div>
        )}
      </div>
    </main>
  );
}