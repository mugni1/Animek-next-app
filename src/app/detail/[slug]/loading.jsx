import Container from "@/components/ui/Container";

export default function LoadingDetailPage() {
  return (
    <Container>
      <section className="w-full flex flex-col gap-4 mb-20">
        {/* img  */}
        <div className="w-1/2 h-60 mx-auto rounded-xl bg-slate-600"></div>
        {/* end img  */}

        {/* ratting  */}
        <h2 className="w-1/2 h-8 mx-auto bg-slate-600 rounded-xl"></h2>
        {/* end ratting  */}

        {/* title  */}
        <h2 className="w-10/12 mx-auto rounded-xl h-8 bg-slate-600"></h2>
        {/* end title  */}

        {/* status dan tipe */}
        <div className="w-full grid grid-cols-2 gap-5 justify-center">
          <button className="columns-1 py-2 px-3 rounded-full bg-slate-600 h-10"></button>
          <button className="columns-1 py-2 px-3 rounded-full bg-slate-600 h-10"></button>
        </div>
        {/* end status dan type  */}

        {/* synops  */}
        <div className="flex flex-col w-full gap-1">
          <h1 className=" w-4/12 h-7 bg-slate-600 rounded-xl mb-2"></h1>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
          <p className="w-full h-5 bg-slate-600 rounded-full"></p>
        </div>
        {/* end synopsis  */}

        {/* studio  */}
        <div className="flex flex-col w-full gap-1">
          <h1 className="rounded-xl h-8 bg-slate-600 mb-2 w-4/12"></h1>
          <p className="h-6 w-full rounded-full bg-slate-600"></p>
        </div>
        {/* end studio  */}

        {/* studio  */}
        <div className="flex flex-col w-full gap-1">
          <h1 className="rounded-xl h-8 bg-slate-600 mb-2 w-4/12"></h1>
          <p className="h-6 w-full rounded-full bg-slate-600"></p>
        </div>
        {/* end studio  */}

        {/* studio  */}
        <div className="flex flex-col w-full gap-1">
          <h1 className="rounded-xl h-8 bg-slate-600 mb-2 w-4/12"></h1>
          <p className="h-6 w-full rounded-full bg-slate-600"></p>
        </div>
        {/* end studio  */}

        {/* studio  */}
        <div className="flex flex-col w-full gap-1">
          <h1 className="rounded-xl h-8 bg-slate-600 mb-2 w-4/12"></h1>
          <p className="h-6 w-full rounded-full bg-slate-600"></p>
        </div>
        {/* end studio  */}

        {/* list chapter  */}
        <section className="w-full rounded-xl bg-slate-600 h-80"></section>
        {/* end list chapter  */}
      </section>
    </Container>
  );
}
