"use client";
import CardAnime from "@/components/ui/CardAnime";
import { useQuery } from "@tanstack/react-query";
import LoadingCardAnimek from "@/components/ui/LoadingCardAnime";

const getAnimeCompleted = async () => {
  const result = await fetch("https://nimeku-api.vercel.app/api/completed");
  return result.json();
};

export default function AnimeCompleted() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dataCompleted"],
    queryFn: getAnimeCompleted,
    staleTime: 1000 * 60 * 60, // 30 menit data di fetch ulang
    cacheTime: 1000 * 60 * 60 * 24, // Simpan cache selama 24 jam
  });

  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
      {isLoading ? (
        <LoadingCardAnimek />
      ) : (
        data.map((anime, index) => (
          <CardAnime
            detail={anime.href.split("/").filter(Boolean).pop()}
            title={anime.title}
            status={anime?.status}
            imgSrc={anime.imageUrl}
            episode={anime?.episodeNumber}
            type={anime?.type}
            key={index}
          />
        ))
      )}
    </section>
  );
}
