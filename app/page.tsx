import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h1 className="text-4xl font-bold">Welcome home!!</h1>

      <Link href={"/blog"} className="underline">
        Blog
      </Link>

      <Link href={"/products"} className="underline">
        Products
      </Link>
    </div>
  );
}
