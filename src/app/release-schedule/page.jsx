import Container from "@/components/ui/Container";
import ListEpisode from "./ListEpisode";
import axios from "axios";

async function getAnimesSchedule() {
  try {
    const results = await fetch("https://nimeku-api.vercel.app/api/jadwal", {
      cache: "force-cache",
      next: { revalidate: 60 * 30 },
    });
    return results.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ReleasePage() {
  const animes = await getAnimesSchedule();
  return (
    <Container>
      <header className="text-3xl font-semibold w-full text-center my-5 flex flex-col gap-5">
        <span className="bg-gradient-to-br  from-green-400 to-emerald-600 text-transparent bg-clip-text">
          SCHEDULE ANIMEK
        </span>
        <hr />
      </header>
      {animes.map((item, index) => (
        <ListEpisode key={index} day={item.day} animes={item.animeList} />
      ))}
    </Container>
  );
}
