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
        </QueryClientProvider>
      </body>
    </html>
  );
}
