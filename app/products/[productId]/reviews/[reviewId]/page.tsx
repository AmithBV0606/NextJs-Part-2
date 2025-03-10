import { notFound, redirect } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

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
