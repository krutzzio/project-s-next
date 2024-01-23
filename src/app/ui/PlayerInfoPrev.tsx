"use client"
import { useState } from "react"


export function PlayerInfoPrev() {

    const [showDescription, setShowDescription] = useState(false)

    return (
        <div className="bg-stone-800 mt-8 w-11/12 max-w-96 p-4 rounded-lg grid grid-cols-2 gap-y-4 auto-cols-fr transition-all"
            onMouseEnter={() => setShowDescription(true)}
            onMouseLeave={() => setShowDescription(false)}>
            <section className="text-2xl flex flex-col justify-between">
                <h3>Enrique Gomez</h3>
                <h3>TEAM</h3>
                <h3>GENERATION</h3>
            </section>
            <section className="flex justify-end">
                <div className="bg-slate-200 w-32 h-32 flex justify-center items-center text-blue-900">FOTO</div>
            </section>
            <section className="text-xl">
                <h3>T2: 107/200 (%)</h3>
                <h3>T3: 16/40 (%)</h3>
                <h3>FT: 20/30 (%)</h3>
            </section>
            <section className="w-full flex justify-end">
                <section className="w-32 flex flex-col justify-between text-xl">
                    <h3>PPG: 20</h3>
                    <h3>GP: 30</h3>
                </section>
            </section>
            {showDescription &&
                <article className="z-10 col-span-2">
                    <h3 className="text-xl mb-2">Description:</h3>
                    <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti adipisci doloremque, nihil tempore possimus at placeat, eum repellat nesciunt mollitia facere, nam aliquam nemo.</p>
                </article>
            }

        </div>
    )
}