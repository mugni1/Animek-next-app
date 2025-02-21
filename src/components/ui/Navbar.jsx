"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <header className="shadow-md fixed bottom-5 right-5 left-5 border z-50 bg-white p-5">
      <nav className="container mx-auto flex items-center h-full">
        <ul className="flex gap-5">
          <li>
            <Link
              className={` py-2 px-2 rounded-lg transition-all ${
                pathName == "/" && "bg-slate-800 text-white"
              }`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={` py-2 px-2 rounded-lg transition-all ${
                pathName == "/products" && "bg-slate-800 text-white"
              }`}
              href="/products"
            >
              Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
