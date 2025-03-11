"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    })
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen w-full">
      <p className="text-2xl font-bold">{error.message}</p>
      <button
        onClick={() => reload()}
        className="bg-white py-2 px-4 text-black font-bold rounded-[5px] cursor-pointer"
      >
        Try again
      </button>
    </div>
  );
}