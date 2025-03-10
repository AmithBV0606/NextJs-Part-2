import { notFound, redirect } from "next/navigation";

// Example for error handling
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Error loading review!!!");
  }

  if (parseInt(reviewId) > 1000) {
    notFound();
    // redirect("/products");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h2 className="text-2xl">Details about the product</h2>
      <p>Product {productId}</p>
      <p>Review {reviewId}</p>
    </div>
  );
}
