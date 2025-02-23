"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <QueryClientProvider client={queryClient}>
          {children}
          <Navbar />
          <footer className="w-full py-5 text-center flex flex-col items-center justify-center bg-slate-800">
            <b>Made with ❤️ by {"AAM"}</b>
            <i>Enjoy watching the anime</i>
          </footer>
        </QueryClientProvider>
      </body>
    </html>
  );
}
