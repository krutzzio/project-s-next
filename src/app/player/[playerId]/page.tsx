import { PlayerMainStats } from "@/components/PlayerProfile/PlayerMainStats"
import { PlayerTableActualSeason } from "@/components/PlayerProfile/PlayerTableActualSeason"
import { PlayerTableLastMatches } from "@/components/PlayerProfile/PlayerTableLastMatches"
import PLAYERS from "@/test/playersFetch.json"
import Image from "next/image"

export default function PlayerPage({ params }: { params: any }) {

    return (
        <main className="flex flex-col gap-16 p-4">
            <section className="grid grid-cols-5">
                <Image src={PLAYERS.img} width={150} height={50} alt="PLAYER IMG" className="col-span-2 m-auto" />
                <article className="col-span-3 flex flex-col items-start">
                    <h1 className="text-8xl">Nom Jugador</h1>
                    <h1 className="text-5xl">Equip</h1>
                    <h1 className="text-5xl">Generació</h1>
                </article>
            </section>

            <PlayerMainStats info={PLAYERS} />
            <PlayerTableActualSeason info={PLAYERS} />
            <PlayerTableLastMatches info={PLAYERS} />
        </main>
    )
}
