"use client";
import Btn from "@/components/ui/Button";
import CardAnime from "@/components/ui/CardAnime";
import Container from "@/components/ui/Container";
import axios from "axios";
import { useState, useEffect } from "react";

export default function HomeContentPage() {
  const [navigate, setNavigate] = useState("recommend");
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://nimeku-api.vercel.app/api/" + navigate,
    })
      .then((res) => {
        console.log(res.data);
        setAnimes(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://nimeku-api.vercel.app/api/recommend",
    })
      .then((res) => {
        console.log(res.data);
        setAnimes(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <nav className=" w-full overflow-x-auto flex gap-5 scrollbar-hide mb-5">
        <Btn
          className={`${
            navigate == "recommend" &&
            "bg-gradient-to-br  from-green-400 to-emerald-600  "
          }`}
          onClick={() => setNavigate("recommend")}
        >
          Recomendation
        </Btn>
        <Btn
          className={`${
            navigate == "new" &&
            "bg-gradient-to-br  from-green-400 to-emerald-600  "
          }`}
          onClick={() => setNavigate("new")}
        >
          New Release
        </Btn>
        <Btn
          className={`${
            navigate == "ongoing" &&
            "bg-gradient-to-br  from-green-400 to-emerald-600 "
          }`}
          onClick={() => setNavigate("ongoing")}
        >
          Ongoing
        </Btn>
        <Btn
          className={`${
            navigate == "completed" &&
            "bg-gradient-to-br  from-green-400 to-emerald-600  "
          }`}
          onClick={() => setNavigate("completed")}
        >
          Completed
        </Btn>
      </nav>

      <section className="w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-5">
        {loading ? (
          <h1 className="font-semibold text-2xl w-full text-center">
            Please wait...
          </h1>
        ) : animes.length < 1 ? (
          "No data"
        ) : (
          animes.map((anime, index) => (
            <CardAnime
              title={anime.title}
              status={anime?.status}
              imgSrc={
                navigate == "recommend" || navigate == "ongoing"
                  ? anime.image
                  : anime.imageUrl
              }
              episode={anime?.episodeNumber}
              type={anime?.type}
              key={index}
            />
          ))
        )}
      </section>
    </Container>
  );
}
