import Link from "next/link";

export default function F1() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold">F1 page</h1>

      <div className="flex flex-col">
        <Link href={"/f1/f2"} className="underline">F2</Link>

        <Link href={"/f3"} className="underline">F3</Link>
      </div>
    </div>
  );
}