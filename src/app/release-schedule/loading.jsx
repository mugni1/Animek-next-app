import Container from "@/components/ui/Container";

export default function loadingPage() {
  return (
    <Container>
      {Array.from({ length: 7 }).map((_, index) => (
        <main key={index} className="mb-5 w-full">
          <h1 className=" rounded-xl mb-3 w-6/12 h-8 bg-slate-600 animate-pulse"></h1>
          <div className="flex flex-col w-full gap-5">
            <section className="rounded-xl flex flex-col gap-5 py-3 pe-3 bg-slate-600 animate-pulse h-28 backdrop-blur-sm overflow-hidden"></section>
          </div>
        </main>
      ))}
    </Container>
  );
}
