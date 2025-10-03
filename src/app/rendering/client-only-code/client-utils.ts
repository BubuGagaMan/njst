// some utils meant to be ran only on the client side
// need to include the import client only package - this will make the contents of this file
// to throw errors if used in a server component
import "client-only"

export const clientSideFunction = () => {
    console.log(
        `use window object,
        use localStorage`
    )
    return "client result"
}