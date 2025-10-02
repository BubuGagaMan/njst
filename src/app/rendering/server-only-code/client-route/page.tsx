"use client"
// import { serverSideFunction } from "../utils/serverUtils"

export default function ClientRoute () {
    // using the server-only marked function below, in the client component will cause the entire app to error
    // const result = serverSideFunction()
    return <h1>Client route</h1>
}