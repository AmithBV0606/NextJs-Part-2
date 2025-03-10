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

      <div className="flex flex-col mt-10">
        {/* Here "breaking-news-123" is the dynamic route parameter(params) and "lang=en" in the query parameter(searchParams) */}
        <Link
          href={"/articles/breaking-news-123?lang=en"}
          className="underline"
        >
          Read in English
        </Link>

        <Link
          href={"/articles/breaking-news-123?lang=fr"}
          className="underline"
        >
          Read in French
        </Link>
      </div>
    </div>
  );
}
