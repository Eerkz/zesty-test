import React from "react";
import Nav from "../nav/Nav";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Nav />
      <main className="w-full p-8">{children}</main>
    </div>
  );
}
