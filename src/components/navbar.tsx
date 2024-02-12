'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="left-0 top-0">
      <ul className="flex flex-wrap">
        <li className="mr-3">
          <Link
            className={`text-white-100 ${
              pathname === "/" ? "" : "hover:text-gray-300"
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="text-white pr-3">|</li>
        <li className="mr-3">
        <Link
            className={`text-white-100 ${
              pathname === "/about" ? "" : "hover:text-gray-300"
            }`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="text-white pr-3">|</li>
        <li className="mr-3">
        <Link
            className={`text-white-100 ${
              pathname === "/work" ? "" : "hover:text-gray-300"
            }`}
            href="/work"
          >
            Work
          </Link>
        </li>
        <li className="text-white pr-3">|</li>
        <li className="mr-3">
          <Link className="text-white-100 line-through decoration-red-400 decoration-4" href=" ">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
