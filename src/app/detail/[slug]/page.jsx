import Container from "@/components/ui/Container";
import Link from "next/link";

export const metadata = {
  title: "Animeki - Detail",
};

async function getAnime(slug) {
  try {
    const result = await fetch(
      "https://nimeku-api.vercel.app/api/anime-details/" + slug,
      { cache: "force-cache", next: { revalidate: 60 * 60 } }
    );
    return result.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default async function animeDetailPage({ params }) {
  const { slug } = await params;
  const anime = await getAnime(slug);
  return (
    <Container>
      <section className="w-full flex flex-col gap-4">
        {/* img  */}
        <img
          src={anime.image}
          alt=""
          className="w-1/2 mx-auto rounded-xl border"
        />
        {/* end img  */}

        {/* ratting  */}
        <h2 className="w-full text-center font-semibold text-xl text-slate-300">
          <div className="flex justify-center line-clamp-1 gap-1">
            <span className="text-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>{anime.rating}</span>
          </div>
        </h2>
        {/* end ratting  */}

        {/* title  */}
        <h2 className="w-full text-center line-clamp-1 font-semibold text-2xl">
          {anime.title}
        </h2>
        {/* end title  */}

        {/* status dan tipe */}
        <div className="w-full grid grid-cols-2 gap-5 justify-center">
          <button className="columns-1 py-2 px-3 rounded-full bg-emerald-600 font-semibold text-white">
            Status : {anime.details.Status}
          </button>
          <button className="columns-1 py-2 px-3 rounded-full bg-sky-600 font-semibold text-white">
            Type : {anime.details.Type}
          </button>
        </div>
        {/* end status dan type  */}

        {/* synops  */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>
            Synopsis
          </h1>
          <p className="text-slate-200 text-justify">{anime.description}</p>
        </div>
        {/* end synopsis  */}

        {/* studio  */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
              <path
                fillRule="evenodd"
                d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
                clipRule="evenodd"
              />
            </svg>
            Studio
          </h1>
          <p className="text-slate-200 text-justify">{anime.details.Studio}</p>
        </div>
        {/* end studio  */}

        {/* season  */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z"
                clipRule="evenodd"
              />
            </svg>
            Season
          </h1>
          <p className="text-slate-200 text-justify">{anime.details.Season}</p>
        </div>
        {/* end season  */}

        {/* duration  */}
        <div className="flex flex-col ">
          <h1 className="font-semibold text-lg flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                clipRule="evenodd"
              />
            </svg>
            Duration
          </h1>
          <p className="text-slate-200 text-justify">
            {anime.details?.Durasi || "Unknown"}
          </p>
        </div>
        {/* end duration  */}

        {/* Episode  */}
        <div className="flex flex-col">
          <h1 className="font-semibold text-lg flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z"
                clipRule="evenodd"
              />
            </svg>
            Episode
          </h1>
          <p className="text-slate-200 text-justify">
            Total {anime.details.Episode}
          </p>
        </div>
        {/* end episode  */}

        {/* list chapter  */}
        <section className="w-full rounded-xl shadow-md p-3 border flex flex-col bg-slate-600 bg-opacity-30">
          <h1 className="font-semibold text-lg">List Episode</h1>
          <hr className="mt-2 mb-4" />
          <div className=" max-h-80 w-full overflow-y-scroll gap-3 grid grid-cols-1 scrollbar-hide">
            {anime.episodes.map((episode, index) => (
              <Link
                key={index}
                className="columns-1 border rounded-lg p-2 h-fit flex items-center gap-2"
                href={`/play-episode/${episode.url
                  .split("/")
                  .filter(Boolean)
                  .pop()}`}
              >
                <div className="text-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-semibold line-clamp-1">
                    {episode.title}
                  </span>
                  <span className="text-xs line-clamp-1 text-slate-200">
                    {episode.date}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        {/* end list chapter  */}
      </section>
    </Container>
  );
}
