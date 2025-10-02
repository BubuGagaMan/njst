// hence - can use this import - whereby if the code is used anywhere on the client side - an error will occur
// if used anywhere on the client - the entire app won't build and give errors even in dev mode
import "server-only"
// some code which should ONLY execute on the server side
// do not want to missuse it on the client and expose sensitive information
export const serverSideFunction = () => {
    console.log(
        `env vars and secrets
        db interactions
        confidential info`
    )

    return "server result"
} 