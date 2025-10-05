"use server";

import { fetchMe } from "../../fetchMe";

export type FormState = {
    success: boolean;
    message: string;
};

export async function register(
    prevState: FormState, // This is required by the useFormState hook
    formData: FormData
): Promise<FormState> {
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");
    const confirmedPassword = formData.get("confirm-password");

    if (password !== confirmedPassword) {
        return { success: false, message: "password confirmation does not match" };
    }
    try {
        const res = await fetchMe("http://localhost:8080/user", "POST", {
            body: {
                email,
                username,
                password,
            },
        });
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(`msg: ${errorData.message} | err: ${errorData.error}`);
        }
        return { success: true, message: "user registered successfully" };
    } catch (err: unknown) {
        if (err instanceof Error) {
            return { success: false, message: err.message };
        } else {
            return { success: false, message: "err.message" };
        }
    }
}
