import { Metadata } from "next";

export const metadata: Metadata = {
  // title: "Blog",
  title: {
    absolute: "Blogging"
  },
}

export default function Blog() {
  return <div>My Blog</div>;
}