"use server";

import { fetchMe } from "../../fetchMe";

export type FormState = {
    success: boolean;
    message: string;
};

export async function login(
    prevState: FormState, // This is required by the useFormState hook
    formData: FormData
): Promise<FormState> {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
        const res = await fetchMe("http://localhost:8080/login", "POST", {
            body: {
                username,
                password,
            },
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`msg: ${errorData.message} | err: ${errorData.error}`);
        }
        const data = await res.json();
        console.log(data);
        return { success: true, message: "User login success" };
    } catch (err: unknown) {
        console.log(err);
        if (err instanceof Error) {
            return { success: false, message: err.message };
        }
        throw err;
    }
}
