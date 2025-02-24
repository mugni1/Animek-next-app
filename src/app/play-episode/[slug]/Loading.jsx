export default function LoadingEpisode() {
  return (
    <section className=" w-full flex flex-col gap-1  scrollbar-hide">
      {/* playyer  */}
      <div className="w-full h-52 rounded-xl  scrollbar-hide bg-slate-600 animate-pulse"></div>
      {/* edn playyer  */}

      {/* title  */}
      <h1 className="w-full bg-slate-600 animate-pulse h-8 rounded-xl line-clamp-1 mb-4"></h1>
      {/* end title  */}

      {/* list server  */}
      <div className="w-full flex flex-col gap-2 mb-4">
        <h2 className="w-1/2 rounded-xl h-6 bg-slate-600 animate-pulse"></h2>
        <section className="grid grid-cols-3 w-full gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <button
              key={index}
              className="columns-1 py-1 px-3 h-6 rounded-full bg-slate-600 animate-pulse"
            ></button>
          ))}
        </section>
      </div>
      {/* edn list server */}

      {/* information  */}
      <h2 className="font-semibold flex gap-1 h-6 rounded-xl bg-slate-600 animate-pulse w-1/2 mb-1"></h2>
      <section className="flex w-full gap-5 items-start mb-4">
        <div className="w-4/12 h-40 bg-slate-600 animate-pulse rounded-xl"></div>
        <div className="w-8/12 h-40 bg-slate-600 animate-pulse rounded-xl"></div>
      </section>
      {/* end information  */}

      <h2 className="font-semibold flex w-1/2 h-6 bg-slate-600 animate-pulse rounded-xl mb-1"></h2>
      {Array.from({ length: 10 }).map((_, index) => (
        <span
          key={index}
          className="text-justify h-6 w-full bg-slate-600 animate-pulse rounded-full"
        ></span>
      ))}
    </section>
  );
}
