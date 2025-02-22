import Link from "next/link";

export default function CardAnime({
  imgSrc = "/vercel.svg",
  title = "No title",
  status,
  episode,
  type = null,
  detail = "",
}) {
  return (
    <Link
      href={"/detail/" + detail}
      className="columns-1 rounded-xl overflow-hidden"
    >
      {/* card header  */}
      <div className="h-60 w-full overflow-hidden relative">
        <img src={imgSrc} className="object-cover object-center" alt="image" />
        {type != null && (
          <span
            className={`absolute bottom-2 right-2 px-1 py-1 text-xs rounded-md ${
              type == "TV" ? "bg-red-500 text-white" : "bg-sky-600 text-white"
            }`}
          >
            {type}
          </span>
        )}
      </div>
      {/* edn card header  */}
      {/* card body  */}
      <div className=" py-2 flex flex-col gap-1">
        <h2 className="line-clamp-1 font-semibold">{title}</h2>
        {status != null && status != "" && (
          <span className="flex justify-between items-center">
            <span className="text-slate-500">{status}</span>
            <span
              className={`w-2 h-2 rounded-full ${
                status == "Ongoing" ? "bg-green-500" : "bg-red-500"
              } `}
            ></span>
          </span>
        )}
        {episode != null && episode != "" && (
          <span className="flex justify-between items-center">
            <span className="text-slate-500">{episode}</span>
            <span className={`w-2 h-2 rounded-full bg-red-500`}></span>
          </span>
        )}
      </div>
      {/* end card body  */}
    </Link>
  );
}
