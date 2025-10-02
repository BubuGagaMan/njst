type Props = {
    params: Promise<{ productId: string }>;
};

export default async function Product({ params }: Props) {
    const { productId } = await params;
    // as this component awaits params - which would be custom - it gets rendered dynamically
    // meaning that the server is recreating/sending the html on every request, instead of caching it
    // the new date().toLoca... below will be updated every time in production, as opposed to in the parent, products
    // see https://www.youtube.com/watch?v=k7o9R6eaSes at 4:08 for more info
        // See rendering/generate-static-params/static-products/[staticProductId] for ssg comparison
    return (
        <div>
            <h2>THE DATE WILL UPDATE ON REFRESH - DYNAMICALLY RENDERED</h2>
            <h3>{new Date().toLocaleTimeString()}</h3>
            <h1>Product {productId}</h1>
        </div>
    );
}
