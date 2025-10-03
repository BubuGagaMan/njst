// using the client-only function will throw errors, as its "client only" package inclusion forces it to be client-only used
// import { clientSideFunction } from "./client-utils"

export default function ClientOnlyCode () {
    // const illegalServerFunction = clientSideFunction()
    return <h1>Client route</h1>
}