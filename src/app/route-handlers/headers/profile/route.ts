import { NextRequest, NextResponse } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    // read headers - V1

    // const headers2 = request.headers
    // const headers = new Headers(request.headers)
    // console.log(headers.get("Authorization"))

    // read headers - V2 - using next
    const headerList = await headers()
    console.log(headerList.get("Authorization"))

    // read the cookies
    const theme = request.cookies.get("theme")
    console.log(theme)

    // set cookies - V2 (see V1 below)- using next 
    const cookieStore = await cookies();
    cookieStore.set("theme2", "based")
    
    // showcasing different headers, e.g. for html (esle will be plain text by default)
    return new NextResponse("<h1>Profile API data<h1>", {
        headers: {
            "Content-Type": "text/html",
            // set cookie - V1
            "Set-Cookie": "theme=dark"
        }
    })
}