import Link from "next/link";

export default function F2() {
  return (
    <div>
      <h1 className="text-4xl font-bold">F2 Page!!!</h1>

      <Link className="underline" href={"/f4"}>
        F4
      </Link>
    </div>
  );
}