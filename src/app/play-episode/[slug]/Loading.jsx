export default function LoadingEpisode() {
  return (
    <section className=" w-full flex flex-col gap-1  scrollbar-hide">
      {/* playyer  */}
      <div className="w-full h-52 rounded-xl  scrollbar-hide bg-slate-600"></div>
      {/* edn playyer  */}

      {/* title  */}
      <h1 className="w-full bg-slate-600 h-8 rounded-xl line-clamp-1 mb-4"></h1>
      {/* end title  */}

      {/* list server  */}
      <div className="w-full flex flex-col gap-2 mb-4">
        <h2 className="w-1/2 rounded-xl h-6 bg-slate-600"></h2>
        <section className="grid grid-cols-3 w-full gap-4">
          <button className="columns-1 py-1 px-3 h-6 rounded-full bg-slate-600"></button>
          <button className="columns-1 py-1 px-3 h-6 rounded-full bg-slate-600"></button>
          <button className="columns-1 py-1 px-3 h-6 rounded-full bg-slate-600"></button>
          <button className="columns-1 py-1 px-3 h-6 rounded-full bg-slate-600"></button>
          <button className="columns-1 py-1 px-3 h-6 rounded-full bg-slate-600"></button>
          <button className="columns-1 py-1 px-3 h-6 rounded-full bg-slate-600"></button>
        </section>
      </div>
      {/* edn list server */}

      {/* information  */}
      <h2 className="font-semibold flex gap-1 h-6 rounded-xl bg-slate-600 w-1/2 mb-1"></h2>
      <section className="flex w-full gap-5 items-start mb-4">
        <div className="w-4/12 h-40 bg-slate-600 rounded-xl"></div>
        <div className="w-8/12 h-40 bg-slate-600 rounded-xl"></div>
      </section>
      {/* end information  */}

      <h2 className="font-semibold flex w-1/2 h-6 bg-slate-600 rounded-xl mb-1"></h2>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify h-5 w-full bg-slate-600 rounded-full"></span>
      <span className="text-justify mb-20 h-5 w-full bg-slate-600 rounded-full"></span>
    </section>
  );
}
