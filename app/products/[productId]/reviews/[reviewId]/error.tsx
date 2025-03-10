"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <p className="text-2xl font-bold">{error.message}</p>
    </div>
  );
}
