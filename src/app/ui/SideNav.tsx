"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBasketball } from "react-icons/fa6";


export function SideNav() {

    const [ligaSelected, setLigaSelected] = useState<number | null>(null)

    return (
        <nav className="flex h-full flex-col px-8 py-4 md:px-4 md:mx-4 ">
            <main className="h-full px-4 bg-stone-800 rounded">
                <h1 className="flex items-baseline justify-center gap-4 text-3xl pt-8">Ligas <FaBasketball className="text-2xl text-orange-600" /></h1>
                <ul className="my-8 mx-auto flex flex-col items-baseline justify-center gap-4 text-lg w-fit hover:text-neutral-300">
                    <li><Link href={"/leagues"} className={`hover:text-orange-600 transition-colors ${ligaSelected === 1 ? `text-orange-500` : ``}`} onClick={() => setLigaSelected(1)} >Liga 1</Link></li>
                    <li><Link href={"/leagues"} className={`hover:text-orange-600 transition-colors ${ligaSelected === 2 ? `text-orange-500` : ``}`} onClick={() => setLigaSelected(2)} >Liga 2</Link></li>
                    <li><Link href={"/leagues"} className={`hover:text-orange-600 transition-colors ${ligaSelected === 3 ? `text-orange-500` : ``}`} onClick={() => setLigaSelected(3)} >Liga 3</Link></li>
                    <li><Link href={"/leagues"} className={`hover:text-orange-600 transition-colors ${ligaSelected === 4 ? `text-orange-500` : ``}`} onClick={() => setLigaSelected(4)} >Liga 4</Link></li>
                    <li><Link href={"/leagues"} className={`hover:text-orange-600 transition-colors ${ligaSelected === 5 ? `text-orange-500` : ``}`} onClick={() => setLigaSelected(5)} >Liga 5</Link></li>
                    <li><Link href={"/leagues"} className={`hover:text-orange-600 transition-colors ${ligaSelected === 6 ? `text-orange-500` : ``}`} onClick={() => setLigaSelected(6)} >Liga 6</Link></li>
                    <li><Link href={"/leagues"} className={`hover:text-orange-600 transition-colors ${ligaSelected === 7 ? `text-orange-500` : ``}`} onClick={() => setLigaSelected(7)} >Liga 7</Link></li>
                </ul>
            </main>
        </nav>
    )
}