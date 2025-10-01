// file must be called "route" by convention

// must be "GET" by convention
export async function GET() {
    return new Response("Hello")
}