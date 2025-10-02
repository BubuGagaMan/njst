import { serverSideFunction } from "../utils/serverUtils"

export default function ServerRoute () {

    const result = serverSideFunction()
    
    return <h1>Server Route</h1>
}