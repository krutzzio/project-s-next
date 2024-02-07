"use client"

import DetailedPlayersList from "@/app/ui/PlayersLists/DetailedPlayersList";
import SimplePlayersList from "@/app/ui/PlayersLists/SimplePlayersList";
import { useState } from "react";
import { Switch } from "@/components/ui/switch"

export default function Liga({ params }: { params: any }) {

    const [listType, setListType] = useState(true)

    return (
        <main className="mx-4">
            <section className="flex gap-24 my-4">
                <h1 className="text-xl flex items-center">{params.ligaId}</h1>
                <div className="flex justify-center items-center gap-4">
                    <h1 className={`${listType ? `text-white` : `text-stone-500`}`}>Detallado</h1>
                    <Switch id="airplane-mode" onClick={() => setListType(!listType)} />
                    <h1 className={`${!listType ? `text-white` : `text-stone-500`}`}>Lista</h1>
                </div>
            </section>
            {
                listType
                    ? <DetailedPlayersList />
                    : <SimplePlayersList />
            }

        </main>
    )
}
