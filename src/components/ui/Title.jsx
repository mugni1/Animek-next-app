export default function Title({ children }) {
  return (
    <h1 className="font-semibold text-3xl w-full text-center bg-gradient-to-br from-green-400 to-sky-600 text-transparent bg-clip-text">
      {children}
    </h1>
  );
}
