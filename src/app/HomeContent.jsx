"use client";
import Btn from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useState } from "react";
import HomeHeader from "./HomeHeader";
import AnimeRecommend from "./AnimeRecommend";
import AnimeNewRelease from "./AnimeNewRelease";
import AnimeOngoing from "./AnimeOngoing";
import AnimeCompleted from "./AnimeCompleted";

export default function HomeContentPage() {
  const [navigate, setNavigate] = useState("recommend");

  return (
    <Container>
      {/* Header  */}
      <HomeHeader />
      {/* End Header  */}
      <nav className=" w-full overflow-x-auto flex gap-5 scrollbar-hide mb-5">
        <Btn
          className={`${
            navigate == "recommend" &&
            "bg-gradient-to-br from-green-400 to-sky-600  "
          }`}
          onClick={() => setNavigate("recommend")}
        >
          Recomendation
        </Btn>
        <Btn
          className={`${
            navigate == "new" && "bg-gradient-to-br from-green-400 to-sky-600  "
          }`}
          onClick={() => setNavigate("new")}
        >
          New Release
        </Btn>
        <Btn
          className={`${
            navigate == "ongoing" &&
            "bg-gradient-to-br from-green-400 to-sky-600 "
          }`}
          onClick={() => setNavigate("ongoing")}
        >
          Ongoing
        </Btn>
        <Btn
          className={`${
            navigate == "completed" &&
            "bg-gradient-to-br from-green-400 to-sky-600  "
          }`}
          onClick={() => setNavigate("completed")}
        >
          Completed
        </Btn>
      </nav>

      {/* NAVIGASI  */}
      {navigate === "recommend" && <AnimeRecommend />}
      {navigate === "new" && <AnimeNewRelease />}
      {navigate === "ongoing" && <AnimeOngoing />}
      {navigate === "completed" && <AnimeCompleted />}
      {/* END NAVIGASI  */}
    </Container>
  );
}
