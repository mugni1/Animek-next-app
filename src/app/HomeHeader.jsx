"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardImage from "@/components/ui/carosoul/CardImage";
import { useQuery } from "@tanstack/react-query";
import CardImageLoading from "@/components/ui/carosoul/CardImageLoading";

const getAnimeOngoing = async () => {
  const result = await fetch("https://nimeku-api.vercel.app/api/ongoing");
  return result.json();
};

export default function HomeHeader() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dataAnimeOngoing"],
    queryFn: getAnimeOngoing,
    staleTime: 1000 * 60 * 60, // 30 menit data di fetch ulang
    cacheTime: 1000 * 60 * 60 * 24, // Simpan cache selama 24 jam
  });

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    waitForAnimate: false,
    lazyLoad: true,
  };
  return (
    <section className="w-full mb-5 overflow-hidden">
      <Slider {...settings}>
        {isLoading ? (
          <CardImageLoading />
        ) : (
          data.map((item, index) => (
            <CardImage
              key={index}
              imgSrc={item.image}
              title={item.title}
              link={"/detail/" + item.href.split("/").filter(Boolean).pop()}
            />
          ))
        )}
      </Slider>
    </section>
  );
}
