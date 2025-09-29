// dynamic route page nesting - all the params among the chain are retained - i.e. in [reiewId] nested under [productId] - we can also access the productId

import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

const someReviewListFromAPI = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
];

export default async function Reviews({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;

    const reviewsMap = someReviewListFromAPI.map((review) => (
        <li key={review.id}>
            <Link href={`/routing-tutorial/products/${productId}/reviews/${review.id}`}>review {review.id}</Link>
        </li>
    ));
    return (
        <>
            <Breadcrumbs />
            <h1>
                Product: {productId} 
            </h1>
            <ul>{reviewsMap}</ul>
        </>
    );
}
