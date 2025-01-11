import Navbar from "@/components/ui/Navbar";

export default function RootLayoutProducts({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
