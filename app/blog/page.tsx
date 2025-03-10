import { Metadata } from "next";

export const metadata: Metadata = {
  // title: "Blog",
  title: {
    absolute: "Blogging",
  },
};

export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay!!!");
    }, 3000);
  });
  return (
    <div>
      <h1 className="text-2xl font-black">My Blog</h1>
    </div>
  );
}