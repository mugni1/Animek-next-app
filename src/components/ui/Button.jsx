export default function Btn({ className, children, onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-5 font-semibold transition-all duration-500 ease-in-out rounded-xl border border-emerald-600 ${className}`}
    >
      {children}
    </button>
  );
}
