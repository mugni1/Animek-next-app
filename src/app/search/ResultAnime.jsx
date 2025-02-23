"use client";
import CardAnime from "@/components/ui/CardAnime";

export default function ResultAnime({ data }) {
  if (data.length <= 0) {
    return (
      <section className="w-full flex justify-center items-center mt-20">
        <h1 className="font-semibold text-2xl text-red-600">Anime Not found</h1>
      </section>
    );
  }
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
      {data.map((anime, index) => (
        <CardAnime
          detail={anime.link.split("/").filter(Boolean).pop()}
          title={anime.title}
          status={anime?.status}
          imgSrc={anime.imageUrl}
          episode={anime?.episodeNumber}
          type={anime?.type}
          key={index}
        />
      ))}
    </section>
  );
}
