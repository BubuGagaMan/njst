import Link from "next/link";

export default function Products() {
    const productIds = [1, 2, 3];

    const productMap = (
        <ul>
            {productIds.map((productId) => (
                <li key={productId} className="hover:underline">
                    <Link href={`/rendering/generate-static-params/products/${productId}`}>Product {productId}</Link>
                </li>
            ))}
        </ul>
    );
    return (
        <>
            {
                // as does not await params or perform any custom/dynamic logic, which would require a "personalised" html, such as
                // looking at cookies, accessing searchParams, etc
                // therefore, on build, the server will cache this page and send it to the client, which will download it and store it
                // the new date().toLoca... below will NOT be updated every time in production, as opposed to in the child, [productId]
                // see https://www.youtube.com/watch?v=k7o9R6eaSes at 4:08 for more info
            }
            <h2>THE DATE WILL NOT UPDATE ON REFRESH - STATICALLY RENDERED</h2>
            <h3>{new Date().toLocaleTimeString()}</h3>
            <h1>Products</h1>
            {productMap}
        </>
    );
}
