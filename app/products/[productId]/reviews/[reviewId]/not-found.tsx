"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log(pathname);

  const productId = pathname.split("/")[2];
  //   console.log(productId);
  const reviwId = pathname.split("/")[4];
  console.log(reviwId);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1 className="text-6xl font-bold">
        Review {reviwId} not found for product {productId}!!!
      </h1>
    </div>
  );
}