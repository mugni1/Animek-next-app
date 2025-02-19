"use client";
import { useState } from "react";

export default function ContentPage() {
  const [navigate, setNavigate] = useState("recomendation");

  return (
    <main className=" w-full container mx-auto pt-20 gap-5 flex flex-col">
      <h1>INi Home</h1>
      <nav className=" w-full overflow-x-auto flex gap-5">
        <button
          onClick={() => setNavigate("recomendation")}
          className={`border py-2 px-5 font-semibold ${
            navigate == "recomendation" &&
            "bg-emerald-600 text-white transition-all ease-in-out"
          }`}
        >
          Recomendation
        </button>
        <button
          onClick={() => setNavigate("trending")}
          className={`border py-2 px-5 font-semibold ${
            navigate == "trending" &&
            "bg-emerald-600 text-white transition-all ease-in-out"
          }`}
        >
          trending
        </button>
        <button
          onClick={() => setNavigate("schedutiles")}
          className={`border py-2 px-5 font-semibold ${
            navigate == "schedutiles" &&
            "bg-emerald-600 text-white transition-all ease-in-out"
          }`}
        >
          schedutiles
        </button>
      </nav>

      {navigate == "recomendation" && (
        <h1 className="w-full text-center text-3xl font-semibold my-20">
          Recomendation
        </h1>
      )}
      {navigate == "trending" && (
        <h1 className="w-full text-center text-3xl font-semibold my-20">
          trending
        </h1>
      )}
      {navigate == "schedutiles" && (
        <h1 className="w-full text-center text-3xl font-semibold my-20">
          schedutiles
        </h1>
      )}
    </main>
  );
}
