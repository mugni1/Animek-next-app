import Link from "next/link";

export default function CardImage({
  title = "Title animex xxxx",
  imgSrc,
  link = "/",
}) {
  return (
    <div className="h-60 w-full rounded-xl overflow-hidden relative">
      <div className="absolute bottom-0 left-0 right-0 top-0 backdrop-blur-sm backdrop-brightness-75 bg-gradient-to-b from-transparent to-slate-900/60">
        <h1 className="bg-gradient-to-br from-green-300 to-sky-600 bg-clip-text text-transparent absolute bottom-20 w-full px-5 font-bold text-2xl line-clamp-1">
          {title}
        </h1>
        <Link
          href={link}
          className="py-2 absolute px-4 bg-white bg-opacity-40 bottom-5 left-5 rounded-full font-semibold flex items-center gap-1 border border-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
              clipRule="evenodd"
            />
          </svg>
          Show Detail
        </Link>
      </div>
      <img
        className="object-cover object-center w-full h-full"
        src={imgSrc}
        alt="Slide 1"
      />
    </div>
  );
}
