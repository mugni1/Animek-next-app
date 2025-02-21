export default function CardAnime({
  imgSrc = "/vercel.svg",
  title = "No title",
  status = "undefined",
  detail = "",
}) {
  return (
    <div className="columns-1 rounded-xl">
      {/* card header  */}
      <div className="h-40 w-full">
        <img src={imgSrc} className=" object-cover object-center" alt="" />
      </div>
      {/* edn card header  */}
      {/* card body  */}
      <div className=" py-2 flex flex-col gap-1">
        <h2 className="line-clamp-1">{title}</h2>
        <span className="opacity-50">{status}</span>
      </div>
      {/* end card body  */}
    </div>
  );
}
