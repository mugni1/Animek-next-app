"use client";
import CardAnime from "@/components/ui/CardAnime";
import { useQuery } from "@tanstack/react-query";

const getAnimeOngoing = async () => {
  const result = await fetch("https://nimeku-api.vercel.app/api/ongoing");
  return result.json();
};

export default function AnimeOngoing() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dataAnimeOngoing"],
    queryFn: getAnimeOngoing,
    staleTime: 1000 * 60 * 60, // 30 menit data di fetch ulang
  });
  console.log(data);
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
      {isLoading ? (
        <h1 className="font-semibold text-2xl w-full text-center">
          Please wait...
        </h1>
      ) : (
        data.map((anime, index) => (
          <CardAnime
            detail={anime.href.split("/").filter(Boolean).pop()}
            title={anime.title}
            status={anime?.status}
            imgSrc={anime.image}
            episode={anime?.episodeNumber}
            type={anime?.type}
            key={index}
          />
        ))
      )}
    </section>
  );
}
