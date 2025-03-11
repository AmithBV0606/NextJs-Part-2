import React from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2 className="text-white text-4xl font-bold text-center">Featured products!!</h2>
    </>
  );
}
