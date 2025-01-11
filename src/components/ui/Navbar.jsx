"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <header className="w-full h-20 shadow-md fixed z-50  bg-white">
      <nav className="container mx-auto flex justify-between items-center h-full">
        <Link className="font-bold " href="/">
          Brand
        </Link>
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
