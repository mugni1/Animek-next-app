export default function LoadingAnimek() {
  const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {counts.map((item, index) => (
        <div key={index} className="columns-1 rounded-xl overflow-hidden">
          {/* card header  */}
          <div className="h-60 w-full overflow-hidden relative bg-slate-600"></div>
          {/* edn card header  */}
          {/* card body  */}
          <div className=" py-2 flex flex-col gap-1 w-full">
            <h2 className="w-full h-6 bg-slate-600 rounded-full"></h2>
            <span className="w-full h-4 bg-slate-600 rounded-full"></span>
          </div>
          {/* end card body  */}
        </div>
      ))}
    </>
  );
}
