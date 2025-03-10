"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order...");
    // router.push("/");
    router.replace("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-4xl fort-bold">Order product</h1>
      <button
        onClick={handleClick}
        className="p-2 bg-green-700 rounded-lg mt-2 cursor-pointer"
      >
        Place order
      </button>
    </div>
  );
}
