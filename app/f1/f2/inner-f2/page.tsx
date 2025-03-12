import Link from "next/link";

export default function InnerF2() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Inner F2 page!!</h1>

      <Link className="underline" href={"/f5"}>F5</Link>
    </div>
  );
}
