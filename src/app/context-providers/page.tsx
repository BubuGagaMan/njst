// a client page - just to test the useTheme hook (so whether if the theme provider in the server component layout works)
"use client";

import { useTheme } from "./ThemeProvider";

export default function ContextProviders() {
    const theme = useTheme();
    return (
        <>
            <h1>ContextProviders</h1>
            <h3>
                {/* the theme should display the correct defaultTheme values - red & orange */}
                Theme: {theme.colors.primary} | {theme.colors.secondary}
            </h3>
        </>
    );
}
