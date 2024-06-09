"use client"
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Dropdown } from "./Dropdown";



export function ExpandedNav() {

    const [ligaSelected, setLigaSelected] = useState<number | null>(null)

    return (
        <nav className="flex flex-col items-center justify-center h-full ">
            <main className="h-16 w-16  rounded-lg flex items-center justify-center">
                <Dropdown />
            </main>
        </nav>
    )
}



