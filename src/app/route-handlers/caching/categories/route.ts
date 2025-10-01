
export const dynamic = "force-static"
export async function GET() {
    const categories = [
        { id: 1, name: "Dildos" },
        { id: 2, name: "Fleshlights" },
        { id: 3, name: "Cartoons" },
    ];

    return Response.json(categories)
}
