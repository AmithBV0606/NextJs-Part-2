import Link from "next/link";

export default function Products() {
  const productId = 100;

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Link href={"/"} className="underline">
        Home
      </Link>
      <p className="text-4xl font-bold">Products List</p>
      <p className="text-lg font-semibold">
        <Link href={"/products/1"} className="underline">
          Product 1
        </Link>
      </p>
      <p className="text-lg font-semibold">
        <Link href={"/products/2"} className="underline">
          Product 2
        </Link>
      </p>
      <p className="text-lg font-semibold">
        <Link href={"/products/3"} className="underline" replace>
          Product 3
        </Link>
      </p>
      <p className="text-lg font-semibold">
        <Link href={`/products/${productId}`} className="underline">
          Product {productId}
        </Link>
      </p>
    </div>
  );
}
