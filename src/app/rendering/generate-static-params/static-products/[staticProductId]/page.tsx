type Props = {
    params: Promise<{ staticProductId: string }>;
};

//SSG:
// this function allows to select some route params, which will be statically rendered
// so - for the routes where staticProductId = 1/2/3 - the page will be statically rendered
// otherwise - the route will be dynamically rendered as usual

// MOREOVER - for any of the other params - they will ONLY BE FETCHED ONCE, WHEN ROUTED TO NOT ANYMORE ON REFRESH
export async function generateStaticParams() {
    // return an array with the statically desired route params
    return [
        { staticProductId: "1" }, 
        { staticProductId: "2" }, 
        { staticProductId: "3" }, 
    ]
}

/**
 *  !!! HOWEVER !!! - if there are dynamic subroutes, such as staticReviewId, both the parent and the children, will need to include all the
 *  param info
 */

export default async function Product({ params }: Props) {
    const { staticProductId } = await params;
    // See rendering/generate-static-params/products/[productId] for a non-ssg comparison
    return (
        <div>
            <h2>THE DATE WILL NOT UPDATE ON REFRESH ONLY IF THE PRODUCT ID == 1/2/3 = SSG, ELSE - DYNAMICALLY RENDERED AND WILL UPDATE ON REFRESH</h2>
            <h2> NOTE - ANY OTHER THAN 1/2/3 WILL UPDATE BUT ONLY WHEN ROUTED TO, NOT AFTER THAT</h2>
            <h3>{new Date().toLocaleTimeString()}</h3>
            <h1>Product {staticProductId}</h1>
        </div>
    );
}
