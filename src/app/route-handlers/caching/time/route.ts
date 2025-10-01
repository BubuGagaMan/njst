// static declaration - only works with get methods...
// also - if using dynamic functions such as headers, cookies or working with the request object in the get method - catching won't be applied
export const dynamic = "force-static"
// incremental static regeneration - revalidate data every x seconds (10 below)
export const revalidate = 10

// the time will now not change when refreshing the page (need to be in prod - so npm run build the app and npm run start)
export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString()});
}