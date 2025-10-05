import { Suspense } from "react";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

type Album = {
    userId: number;
    id: number;
    title: string;
};

type User = {
    id: number;
    name: string;
};

async function getUserPosts(userId: string) {
    // filter for posts where the userId is the given parameter
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
    const userPosts = await res.json();
    // simulate a longer delay...
    await new Promise((resolve) => setTimeout(resolve, 500));
    return userPosts;
}
async function getUserAlbums(userId: string) {
    // filter for posts where the userId is the given parameter
    const res = await fetch("https://jsonplaceholder.typicode.com/albums?userId=" + userId);
    const userAlbums = await res.json();
    // simulate a longer delay...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return userAlbums;
}

async function getUserData(userId: string) {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);

    const userData: User = await res.json();
    // simulate a longer delay...
    await new Promise((resolve) => setTimeout(resolve, 400));
    return userData;
}

export default async function UserProfile({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;

    const userPosts = getUserPosts(userId);
    const userAlbums = getUserAlbums(userId);
    const userData = getUserData(userId);
    // research the sequence of this - but it seems as if it is the same (as 2 awaits above), but just looks more swag? or maybe, it is all starting at same time
    const [posts, albums, user] = await Promise.all([userPosts, userAlbums, userData]);

    return (
        <div>
            {/* suspense does not create sequential loading here - it is all within the same component and none of the component will load until all fetch*/}
            <Suspense fallback={<h3>Loading user...</h3>}>
                <h1>{user.name}</h1>
            </Suspense>
            <div>
                <Suspense fallback={<h3>Loading posts...</h3>}>
                    <div className="border border-white">
                        {posts.map((post: Post) => (
                            <h3 key={post.id}>Post Title: {post.title}</h3>
                        ))}
                    </div>
                </Suspense>
                <Suspense fallback={<h3>Loading albums...</h3>}>
                    <div className="border border-white">
                        {albums.map((album: Album) => (
                            <h3 key={album.id}>Album Title: {album.title}</h3>
                        ))}
                    </div>
                </Suspense>
            </div>
        </div>
    );
}
