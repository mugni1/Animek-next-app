export default function TitleAndText({ title, children, text }) {
  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-lg flex gap-1 items-center">
        {children}
        {title}
      </h1>
      <p className="text-slate-200 text-justify">{text}</p>
    </div>
  );
}
