type Props = {
    params: Promise<{ staticProductId: string; staticReviewId: string }>;
};

// !!! Dynamic params variable - setting it to false - will cause any routes which are
// not included in the generateStatic Params arr to reroute to 404
export const dynamicParams = true;

//SSG:
// if there are dynamic subroutes, such as staticReviewId, both the parent and the children, will need to include all the
//  param info
export async function generateStaticParams() {
    // return an array with the statically desired route params
    return [
        { staticProductId: "1", staticReviewId: "1" },
        { staticProductId: "1", staticReviewId: "2" },
        { staticProductId: "1", staticReviewId: "3" },
        { staticProductId: "2", staticReviewId: "1" },
        { staticProductId: "2", staticReviewId: "2" },
        // !!! NOTE !!! - IF ANY OF THE ROUTES HERE LACK BOTH, 
        // NONE OF THE ROUTES WILL COUNT ALTOGETHER - IF ANY PART IS MISSING, NEXTJS CAN'T BUILD THE ENTIRE LIST!
        { staticProductId: "3", staticReviewId: "1"},
    ];
}

export default async function Product({ params }: Props) {
    const { staticProductId, staticReviewId } = await params;

    // See rendering/generate-static-params/products/[productId] for a non-ssg comparison
    return (
        <div>
            <h3>{new Date().toLocaleTimeString()}</h3>
            <h1>
                Product {staticProductId} | Review: {staticReviewId}
            </h1>
        </div>
    );
}
