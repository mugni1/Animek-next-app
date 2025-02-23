import PlayEpisodeContent from "./PlayEpisodeContent";

export const metadata = {
  title: "Animeki - Play Episdoe",
};

export default async function playEpisodePage({ params }) {
  const { slug } = await params;
  return <PlayEpisodeContent slug={slug} />;
}
