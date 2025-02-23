"use client";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";
import axios from "axios";
import ResultAnime from "./ResultAnime";

export default function SearchContent() {
  const [keyword, setKeyword] = useState("");
  const [animes, setAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit() {
    event.preventDefault();
    setLoading(true);
    axios({
      method: "GET",
      url: `https://nimeku-api.vercel.app/api/search/${keyword}`,
    })
      .then((res) => {
        setAnime(res.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <section className="w-full flex flex-col min-h-screen">
        <Title>Search Animes</Title>
        <form
          onSubmit={() => handleSubmit()}
          className="w-full flex flex-col gap-2 my-2 mb-5"
        >
          <input
            type="text"
            className="w-full py-2 px-5 rounded-full bg-slate-400 placeholder:text-slate-700 outline-none focus:ring-2 focus:bg-white text-slate-900 focus:placeholder:text-slate-400 transition-all ease-in-out ring-offset-1 ring-emerald-500 font-semibold"
            placeholder="example : One Piece"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button
            className="font-semibold py-2 px-5 w-fit rounded-full bg-gradient-to-br from-green-400 to-sky-600"
            type="submit"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </form>
        {/* result  */}
        {error ? (
          <section className="w-full flex justify-center items-center mt-20">
            <h1 className="font-semibold text-2xl text-red-600">
              Something went wrong
            </h1>
          </section>
        ) : (
          animes != null && <ResultAnime data={animes} />
        )}
        {/* end result  */}
      </section>
    </Container>
  );
}
