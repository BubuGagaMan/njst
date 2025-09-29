// custom 404 - specific to products-catch-all
"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
    // usePath name can only be used in a client component!
    const pathname = usePathname();

    return (
        <div className="grid h-screen  content-center text-center">
            <h1>
                Custom 404 - product page not found - CUSTOM FOR PRODUCTS ONLY, NOT FOUND IS IN THE PRODUCTS CATCH ALL
            </h1>
            <h2>
                Here is the path: | {pathname} | - this can be split in order to extract a specific parameter, e.g.
                pathname.split("/")[index x]
            </h2>
        </div>
    );
}
