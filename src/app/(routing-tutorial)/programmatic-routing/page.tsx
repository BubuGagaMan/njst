"use client";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
export default function About() {
    const [redirectChoice, setRedirectChoice] = useState(0);

    const router = useRouter();

    const handleClick = () => {
        alert("You have clicked me! Routing back to home programmatically");
        router.push("/");
    };

    const handleRedirectClick = () => {
        if (redirectChoice) {
            // redirect - can be used when entering a page
            alert("you have selelected to be redirected to home");
            // redirect will replace the current path for the user
            redirect("/");
        } else {
            alert("you have selelected NOT to be redirected to home - staying here...");
        }
    };
    return (
        <>
            <h1>Programmatic routing</h1>
            <button onClick={handleClick}>Route dynamically (click)</button>
            <select name="selectWhetherToRedirect" onChange={(e) => setRedirectChoice(Number(e.target.value))}>
                <option value={0}>DON'T redirect me to home - stay here</option>
                <option value={1}>Redirect me to home</option>
            </select>
            <button onClick={handleRedirectClick}>Redirect button test</button>
        </>
    );
}
