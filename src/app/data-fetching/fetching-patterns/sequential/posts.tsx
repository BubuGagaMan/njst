import { Suspense } from "react";
import Author from "./author";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

// here, we first fetch the post, then we can have the data necessary to fetch the author - hence, fetching sequentially
export default async function PostsSequential() {
    const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postsData: Post[] = await postsResponse.json();

    // only get every 10 posts - as the authors are different every 10 posts
    const filteredPosts = postsData.filter((post) => post.id % 10 === 0);

    return (
        <>
            {filteredPosts.map((post) => (
                <div key={post.id}>
                    <h2>Post title: {post.title}</h2>
                    {/* 
                        to avoid blocking the post data - can wrap the author with a suspense, 
                        allowing the post data to be displayed even as the author hasn't completed its fetch 
                    */}
                    <Suspense fallback={<h1>Loading author...</h1>}>
                        <Author userId={post.userId} />
                    </Suspense>
                </div>
            ))}
        </>
    );
}
