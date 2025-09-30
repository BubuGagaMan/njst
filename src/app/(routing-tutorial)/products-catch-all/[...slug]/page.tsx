// catch all segments route - all subroutes will be transferred to this page
// we can extract all of the params within the slug and logically work out the returned jsx

// essentially, if we want to structure everything in one file - we can use this instead of nesting dynamic routes

import { notFound } from "next/navigation";

export default async function ProductsCatchAll({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;


    switch (slug?.length) {
        case 1:
            return <h1>Viewing product: {slug[0]}</h1>;
        case 2:
            return (
                <h1>
                    Viewing product: {slug[0]} | Review: {slug[1]}
                </h1>
            );
        default:
            // route to 404 - in this case, within the closest not-found page in products-catch-all
            notFound();
    }

    //look into making the slugs optional by using and extra pair of []s around the slug folder
}
