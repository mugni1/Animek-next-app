import Container from "@/components/ui/Container";

export default function LoadingDetailPage() {
  return (
    <Container>
      <section className="w-full h-screen flex justify-center items-center">
        <h1 className="font-semibold w-full text-center text-2xl">
          Please Wait...
        </h1>
      </section>
    </Container>
  );
}
