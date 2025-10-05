"use client";
import { useEffect, useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default function ClientComponentFetching() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Failed to fetch users");
                const data = await response.json();
                setUsers(data);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error ocurred");
                }
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <>
            <div className="grid gap-2">
                {users.map((user) => (
                    <div key={user.id} className="border border-white grid">
                        <h3 className="border border-white">{user.name}</h3>
                        <h3 className="border border-white">{user.email}</h3>
                        <h3 className="border border-white">{user.phone}</h3>
                    </div>
                ))}
            </div>
        </>
    );
}
