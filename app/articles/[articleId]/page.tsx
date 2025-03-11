// "use client"

import Link from "next/link";
// import { use } from "react";

type NewsArticleProps = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
};

export default async function NewsArticle({
  params,
  searchParams,
}: NewsArticleProps) {
  const { articleId } = await params; // params
  const { lang = "en" } = await searchParams; // searchParams

  //   If this was client component
  //   const { articleId } = use(params);
  //   const { lang = "en" } = use(searchParams);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-extrabold">News article {articleId}</h1>
      <p className="text-gray-400">Reading in {lang}</p>

      <div className="flex flex-col mt-6">
        <Link href={`/articles/${articleId}?lang=en`} className="underline">
          English
        </Link>
        <Link href={`/articles/${articleId}?lang=es`} className="underline">
          Spanish
        </Link>
        <Link href={`/articles/${articleId}?lang=fr`} className="underline">
          French
        </Link>
      </div>
    </div>
  );
}
