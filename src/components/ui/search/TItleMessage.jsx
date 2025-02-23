export default function TItleMessage({ message }) {
  return (
    <section className="w-full flex justify-center items-center mt-20">
      <h1 className="font-semibold text-2xl text-red-600">{message}</h1>
    </section>
  );
}
