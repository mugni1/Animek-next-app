import Container from "@/components/ui/Container";
import ListEpisode from "./ListEpisode";
import { metadata } from "../page";

export const metadata = {
  title: "Animeki - Release Schedule",
};

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
      {animes.map((item, index) => (
        <ListEpisode key={index} day={item.day} animes={item.animeList} />
      ))}
    </Container>
  );
}
