import { PlayerMainStats } from "@/app/ui/PlayerProfile/PlayerMainStats"
import { PlayerTableActualSeason } from "@/app/ui/PlayerProfile/PlayerTableActualSeason"
import { PlayerTableLastMatches } from "@/app/ui/PlayerProfile/PlayerTableLastMatches"
import PLAYERS from "@/test/playersFetch.json"
import Image from "next/image"

export default function PlayerPage({ params }: { params: any }) {

    return (
        <main className="flex flex-col gap-16 p-4">
            <section className="grid grid-cols-5">
                <Image src={PLAYERS.img} width={150} height={50} alt="PLAYER IMG" className="col-span-2 m-auto" />
                <article className="col-span-3">
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
