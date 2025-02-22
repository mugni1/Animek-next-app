export default function LayoutRelesePage({ children }) {
  return (
    <>
      <header className="text-3xl font-semibold w-full text-center my-5 flex flex-col gap-5">
        <span className="bg-gradient-to-br  from-green-400 to-emerald-600 text-transparent bg-clip-text">
          Jadwal Anime Terbaru dan Terupdate, Nikmati Semua Episode Favoritmu!
        </span>
      </header>
      {children}
    </>
  );
}
