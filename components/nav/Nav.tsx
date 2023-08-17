import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full">
      <ul className="flex gap-x-5 p-6 font-bold">
        <li className="hover:text-neutral-600">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-neutral-600">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
