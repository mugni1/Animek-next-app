"use client";

import Container from "@/components/ui/Container";
import { useQuery } from "@tanstack/react-query";
import IframePage from "./Iframe";
import LoadingEpisode from "./Loading";

async function getEpisode(param) {
  const result = await fetch(
    `https://nimeku-api.vercel.app/api/episode-details/${param}`
  );
  return result.json();
}

export default function PlayEpisodeContent({ slug }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["episode", slug],
    queryFn: () => getEpisode(slug),
    staleTime: 1000 * 60 * 60,
  });

  console.log(data);

  if (isLoading)
    return (
      <Container>
        <LoadingEpisode />
      </Container>
    );
  return (
    <Container>
      <IframePage episode={data} />
    </Container>
  );
}
