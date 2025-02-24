export default function LoadingCardAnimek() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="columns-1 rounded-xl overflow-hidden">
          {/* card header  */}
          <div className="h-60 w-full overflow-hidden relative bg-slate-600 animate-pulse"></div>
          {/* edn card header  */}
          {/* card body  */}
          <div className=" py-2 flex flex-col gap-1 w-full">
            <h2 className="w-full h-6 bg-slate-600 animate-pulse rounded-full"></h2>
            <span className="w-full h-6 bg-slate-600 animate-pulse rounded-full"></span>
          </div>
          {/* end card body  */}
        </div>
      ))}
    </>
  );
}
