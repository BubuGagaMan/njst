import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

type Context = {
    params: Promise<{ someId: string }>;
};
export async function GET(request: NextRequest, { params }: Context) {
    const { someId } = await params
    if (someId && Number(someId) === 1) {
        redirect("/route-handlers/redirects/route2");
    } else {
        return new Response("id param != 1 --> not redirecting");
    }
}
