"use client"
import Error from "next/error";
import { useEffect } from "react";

export default function ErrorPage ({error}: {error: Error}) {

    useEffect(() => {
        console.error(`${error}`)
    }, [error])
    return <h1>Error</h1>
}