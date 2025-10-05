"use client";
import { FormState, register } from "./actions/register";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { login } from "./actions/login";

function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-400">
            {pending ? `${label}...` : label}
        </button>
    );
}

export default function ServerActions() {
    // const [error, setError] = useState("");
    // const registerUser = async (formData: FormData) => {
    //     const { success, message } = await register(formData);
    // };
    const initialRegisterState: FormState = { success: false, message: "" };
    const [registerState, registerAction] = useActionState(register, initialRegisterState);

    const initialLoginState: FormState = { success: false, message: "" };
    const [loginState, loginAction] = useActionState(login, initialLoginState);

    return (
        <>
            <form action={registerAction} className="grid gap-2 border border-white justify-center">
                <h2>Register</h2>
                <label className="grid">
                    email: <input required type="email" name="email" />
                </label>
                <label className="grid">
                    username: <input required type="text" name="username" />
                </label>
                <label className="grid">
                    password: <input required type="text" name="password" />
                </label>
                <label className="grid">
                    confirm-password: <input required type="text" name="confirm-password" />
                </label>
                <SubmitButton label="Register" />
                {!registerState.success && registerState.message && (
                    <p className="text-red-500">{registerState.message}</p>
                )}
                {registerState.success && registerState.message && (
                    <p className="text-green-500">{registerState.message}</p>
                )}
            </form>

            <form action={loginAction} className="grid gap-2 border border-white justify-center">
                <h2>Login</h2>
                <label className="grid">
                    username: <input required type="text" name="username" />
                </label>
                <label className="grid">
                    password: <input required type="text" name="password" />
                </label>
                <SubmitButton label="Login" />
                {!loginState.success && loginState.message && <p className="text-red-500">{loginState.message}</p>}
                {loginState.success && loginState.message && <p className="text-green-500">{loginState.message}</p>}
            </form>
        </>
    );
}
