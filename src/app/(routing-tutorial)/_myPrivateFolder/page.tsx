// private folder - via the _ at the beginning of the name - even with the conventional page.tsx - this route will not exist
// note - if you actually want an underscore in url - must use %5F instead - the URL-encoded version of an underscore

export default async function MyPrivateFolder() {
    return <h1>Private folder html</h1>

}
