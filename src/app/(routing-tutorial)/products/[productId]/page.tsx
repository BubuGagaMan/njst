// dynamic route page

export default async function Review({ params }: { params: Promise<{ productId: string }> }) {
    const productId = (await params).productId;
    return (
        <>
            <h1>Product: {productId}</h1>
        </>
    );
}
