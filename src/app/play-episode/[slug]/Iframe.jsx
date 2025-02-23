"use client";
import { useState } from "react";

export default function IframePage({ episode }) {
  const [server, setServer] = useState("");
  return (
    <section className=" w-full flex flex-col gap-1  scrollbar-hide">
      {/* playyer  */}
      <iframe
        className="w-full h-52 rounded-xl  scrollbar-hide"
        src={server == "" ? episode.iframeURL.iframeSrc : server}
        allowFullScreen
      ></iframe>
      {/* edn playyer  */}

      {/* title  */}
      <h1 className="font-semibold text-lg border-s-2 ps-2 border-emerald-600 line-clamp-1 mb-4">
        {episode.iframeURL.title}
      </h1>
      {/* end title  */}

      {/* note  */}
      <i className="text-sm font-light mb-2 text-slate-400">
        Note: Jika video tidak dapat di putar silahkan ganti server dengan yang
        tersedia di bawah ini.
      </i>
      {/* edn note */}
      {/* list server  */}
      <div className="w-full flex flex-col gap-2 mb-4">
        <h2 className="font-semibold flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
            />
          </svg>
          Server List
        </h2>
        <section className="grid grid-cols-3 w-full gap-4">
          {episode.iframeURL.decodedIframes.map((server, index) => (
            <button
              key={index}
              className="columns-1 py-1 px-3 text-xs bg-emerald-600 rounded-xl active:bg-emerald-800 active:scale-95 transition-all ease-in-out"
              onClick={() => setServer(server.iframeSrc)}
            >
              {server.server}
            </button>
          ))}
        </section>
      </div>
      {/* edn list server */}

      {/* information  */}
      <h2 className="font-semibold flex gap-1">Detail Anime</h2>
      <section className="flex w-full gap-5 items-start mb-4">
        <div className="w-4/12">
          <img
            src={episode.iframeURL.imageUrl}
            alt=""
            className="w-full h-full object-contain object-center rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm w-8/12">
          <h3 className="line-clamp-1 font-semibold">
            {episode.iframeURL.alternateTitles}
          </h3>
          <h3 className="line-clamp-1">
            Episode {episode.iframeURL.episodeNumber}
          </h3>
          <h3 className="line-clamp-1">
            Release {episode.iframeURL.releaseDate}
          </h3>
          <h3 className="line-clamp-1">Season {episode.iframeURL.season}</h3>
          <h3 className="line-clamp-1">Status {episode.iframeURL.status}</h3>
          <h3 className="line-clamp-1">Studios {episode.iframeURL.studio}</h3>
        </div>
      </section>
      {/* end information  */}

      <h2 className="font-semibold flex">Description</h2>
      <span className="text-justify mb-20">
        {episode.iframeURL.seriesDescription}
      </span>
    </section>
  );
}
