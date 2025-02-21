"use client";
import Btn from "@/components/ui/Button";
import CardAnime from "@/components/ui/CardAnime";
import Container from "@/components/ui/Container";
import { useState } from "react";

export default function HomeContentPage() {
  const [navigate, setNavigate] = useState("recomendation");

  return (
    <Container>
      <nav className=" w-full overflow-x-auto flex gap-5 scrollbar-hide">
        <Btn
          className={`${
            navigate == "recomendation" && "bg-emerald-600 text-white "
          }`}
          onClick={() => setNavigate("recomendation")}
        >
          Recomendation
        </Btn>
        <Btn
          className={`${navigate == "trending" && "bg-emerald-600 text-white"}`}
          onClick={() => setNavigate("trending")}
        >
          Trending
        </Btn>
      </nav>

      {navigate == "recomendation" && (
        <h1 className="w-full text-center text-3xl font-semibold my-20">
          🗓️ Recomendation
        </h1>
      )}
      {navigate == "trending" && (
        <h1 className="w-full text-center text-3xl font-semibold my-20">
          🔥 Trending
        </h1>
      )}
      {navigate == "schedutiles" && (
        <h1 className="w-full text-center text-3xl font-semibold my-20">
          schedutiles
        </h1>
      )}

      <section className="w-full grid grid-cols-2 gap-5">
        <CardAnime />
        <CardAnime />
        <CardAnime />
        <CardAnime />
        <CardAnime />
        <CardAnime />
        <CardAnime />
      </section>
    </Container>
  );
}
