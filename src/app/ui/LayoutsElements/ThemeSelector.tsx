"use client"

import * as React from "react"
import { useTheme } from "next-themes"


export function ThemeSelector() {
    const { setTheme } = useTheme()

    return (
        <>
            <button className="w-16 h-16 bg-slate-600 rounded scale-0 dark:scale-100" onClick={() => setTheme("light")}>Dark</button>
            <button className="w-16 h-16 bg-slate-600 rounded scale-100 dark:scale-0" onClick={() => setTheme("dark")}>Light</button>
        </>
    )
}
