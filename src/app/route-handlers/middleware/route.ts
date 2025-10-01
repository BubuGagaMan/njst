export async function GET() {
    return new Response("This get will be redirected due to the middleware @src/middleware.ts")
}