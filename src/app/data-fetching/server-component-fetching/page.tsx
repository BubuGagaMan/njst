import { Suspense } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function ServerComponentFetching() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData: User[] = await response.json();

    const usersMap = usersData.map((user: User) => (
        <div key={user.id} className="border border-white grid">
            <h3 className="border border-white">{user.name}</h3>
            <h3 className="border border-white">{user.email}</h3>
            <h3 className="border border-white">{user.phone}</h3>
        </div>
    ));

    return (
        <>
            <h1>Server component fetching</h1>
            <div className="grid gap-2">
                {usersMap}
            </div>
        </>
    );
}
