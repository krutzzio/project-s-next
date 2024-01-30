"use client"

import DetailedPlayersList from "@/app/ui/PlayersLists/DetailedPlayersList";
import SimplePlayersList from "@/app/ui/PlayersLists/SimplePlayersList";
import { useState } from "react";

export default function Liga({ params }: { params: any }) {

    const [detailedList, setDetailedList] = useState(true)

    return (
        <main className="mx-4">
            <h1 className="text-xl mb-4">{params.ligaId}</h1>
            {
                detailedList
                    ? <DetailedPlayersList />
                    : <SimplePlayersList />
            }
            
        </main>
    )
}
