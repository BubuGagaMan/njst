type Author = {
    id: number;
    name: string;
};

// we fetch the author, given the props from the posts - see posts component
export default async function Author({ userId }: { userId: number }) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
    const authorData: Author = await response.json();

    // simulate a longer delay...
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return <h3>Author: {authorData.name}</h3>;
}
