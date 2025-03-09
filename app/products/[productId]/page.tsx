import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${id}`);
    }, 100);
  });

  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: Props) {
  //   const { productId } = await params;
  const productId = (await params).productId;

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <h2 className="text-2xl">Details about the product</h2>
      <p>Product {productId}</p>
    </div>
  );
}
