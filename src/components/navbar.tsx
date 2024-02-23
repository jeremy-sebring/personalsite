'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Commander from "./Command";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="left-0 top-0 sticky flex justify-between">
      <ul className="basis 1/4 flex flex-wrap list-none ">
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
        <li className="pr-3">|</li>
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
        <li className="pr-3">|</li>
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
        <li className="pr-3">|</li>
        <li className="mr-3">
        <Link
            className={`text-white-100 ${
              pathname === "/blog" ? "" : "hover:text-gray-300"
            }`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
      <div className="basis-1/4 pt-4">
        <Commander/>
      </div>
      
    </nav>
  );
}
