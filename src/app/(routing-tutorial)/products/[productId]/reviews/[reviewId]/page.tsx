// dynamic route page nesting - all the params among the chain are retained - i.e. in [reiewId] nested under [productId] - we can also access the productId

import Breadcrumbs from "@/components/Breadcrumbs";

export default async function Review({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
    const { productId, reviewId } = await params;
    return (
        <>
            <Breadcrumbs />
            <h1>
                Product: {productId} | Review: {reviewId}
            </h1>
        </>
    );
}
