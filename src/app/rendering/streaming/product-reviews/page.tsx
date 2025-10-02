import { Product } from "../components/product";
import { Reviews } from "../components/reviews";

// use suspense to stream html from server to client = progressive html rendering
import { Suspense } from "react";

export default function ProductReviews() {
    return (
        <div>
            <h1>Product reviews</h1>
            {
                // the fallback will appear while the component is loading
            }
            <Suspense fallback={<p>Loading product...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading reviews...</p>}>
                <Reviews />
            </Suspense>
        </div>
    );
}
