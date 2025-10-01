// dynamic route handlers
import { comments } from "../data";

type Context = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Context) {
    const { id } = await params;

    const comment = comments.find((comment) => comment.id === Number(id));

    if (!comment) {
        return new Response("Could not find comment", {
            status: 404,
        });
    }

    return Response.json(comment);
}

export async function PATCH(request: Request, { params }: Context) {
    const { id } = await params;
    const body = await request.json()

    const { text } = body;

    const index = comments.findIndex((comment) => comment.id === Number(id))

    comments[index].text = text

    return Response.json(comments[index])
}

export async function DELETE(request: Request, { params }: Context) {
    const {id } = await params;
    const index = comments.findIndex(comment => comment.id === Number(id))
    comments.splice(index, 1)

    return new Response(null, {
        status: 204
    })
}
