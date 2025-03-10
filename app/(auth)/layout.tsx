"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Regster", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  // console.log(pathname)
  const [input, setInput] = useState("");

  return (
    <div className="space-y-7 mt-10">
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="border-2 border-gray-300 p-2 rounded-xl text-white outline-none"
        />
      </div>

      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");

        return (
          <Link
            href={link.href}
            key={link.name}
            className={`text-lg mx-4 cursor-pointer p-2 rounded-lg ${
              isActive ? "bg-blue-700" : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
