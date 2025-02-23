import Container from "@/components/ui/Container";
import Title from "@/components/ui/Title";

export default function SearchContent() {
  return (
    <Container>
      <Title>Search Animes</Title>
      <form className="w-full flex flex-col gap-2 my-2 min-h-screen">
        <input
          type="text"
          className="w-full py-2 px-5 rounded-full bg-slate-400 placeholder:text-slate-700 outline-none focus:ring-2 focus:bg-white text-slate-900 focus:placeholder:text-slate-400 transition-all ease-in-out ring-offset-1 ring-emerald-500 font-semibold"
          placeholder="example : One Piece"
        />
        <button
          className="font-semibold py-2 px-5 w-fit rounded-full bg-gradient-to-br from-green-400 to-sky-600"
          type="submit"
        >
          Search
        </button>
      </form>
    </Container>
  );
}
