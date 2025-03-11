import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-2xl">Page you&apos;re looking for doesn&apos;t exists!!</h1>

      <Image
        src={"/PageNotFound.jpg"}
        alt="Page Not Found Image"
        width={800}
        height={1200}
        className="rounded-2xl"
      />
    </div>
  );
}
