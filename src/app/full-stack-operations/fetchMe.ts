type Method = "POST" | "GET" | "PUT" | "DELETE"

export const fetchMe = async (url: string, method: Method, options: any = {}) => {
    const res = await fetch(url, {
        ...options,
        body: JSON.stringify(options.body),
        headers: {
            ...options.headers,
            "Content-type": "application/json"
        },
        method
    })

    return res
}