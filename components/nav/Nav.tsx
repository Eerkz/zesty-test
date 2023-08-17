import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export function MenuItem({ text, href }: { text: string; href: string }) {
  const router = useRouter();
  return (
    <li>
      <Link
        href={href}
        className={`${
          router.pathname === href ? "text-blue-500" : "hover:text-neutral-600"
        }`}
      >
        {text}
      </Link>
    </li>
  );
}

export default function Nav() {
  return (
    <nav className="w-full">
      <ul className="flex gap-x-5 p-6 font-bold">
        <MenuItem href="/" text="Home" />
        <MenuItem href="/about" text="About" />
      </ul>
    </nav>
  );
}
