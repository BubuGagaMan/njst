import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    // example 1 - use a conditional statement to trigger a middleware
    if (request.nextUrl.pathname === "/route-handlers/middleware") {
        return NextResponse.redirect(new URL("/", request.url));
    }
    //return NextResponse.redirect(new URL("/", request.url))

    // work with cookies in middleware
    const response = NextResponse.next()

    const themePreferene = request.cookies.get("theme");
    if(!themePreferene) {
        response.cookies.set("theme", "dark")
    }

    //work with headers in middleware
    response.headers.set("custom-header", "custom-value")

    return response
}

// example 2 - using a config to match the routes to which the middleware will apply
export const config = {
    matcher: ["/route-handlers/middleware", "/"]
};
