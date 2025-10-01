import { Metadata } from "next";

// dynamic route page
type Props = { params: Promise<{ productId: string }> }

// the name needs to be exactly "generateMetadata" for dynamic metadata objects
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {

    const { productId } = await params
    return {
        // use the data from the params to set a dynamic title
        title: `Product ${productId}`,
        description: `A page containing information about a product`
    }
}

export default async function Review({ params }: Props) {
    const productId = (await params).productId;
    return (
        <>
            <h1>Product: {productId}</h1>
        </>
    );
}
