export default function Btn({ className, children, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-5 font-semibold transition-all ease-in-out rounded-xl border text-nowrap flex items-center gap-1 ${className}`}
    >
      {children}
    </button>
  );
}
