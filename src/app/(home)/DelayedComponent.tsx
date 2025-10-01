export default async function DelayedComponent() {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("intentional delay")
        }, 2000)
    })

    return <p>some data that will load later (to showcase loading.tsx)</p>
}