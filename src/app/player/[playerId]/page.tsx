import styles from "@/app/ui/LayoutsElements/grids-layout.module.css"
import { PlayerTableActualSeason } from "@/app/ui/PlayerProfile/PlayerTableActualSeason"
import PLAYERS from "@/test/playersFetch.json"
import Image from "next/image"

export default function PlayerPage({ params }: { params: any }) {

    const ppg = ((Number(PLAYERS.T2S) * 2 + Number(PLAYERS.T3S) * 3 + Number(PLAYERS.FTS)) / Number(PLAYERS.GP)).toFixed(2)
    const t2 = `${PLAYERS.T2S}/${PLAYERS.T2A}`
    const t3 = `${PLAYERS.T3S}/${PLAYERS.T3A}`
    const ft = `${PLAYERS.FTS}/${PLAYERS.FTA}`



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

            <section className="flex justify-evenly justify-items-center bg-white dark:bg-stone-800 rounded-lg">
                <div className="w-44 h-44 rounded-xl bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>PPG</h3>
                    <h2 className="text-4xl">{ppg}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
                <div className="dark:bg-background w-1"></div>
                <div className="w-44 h-44 rounded-xl bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>GP</h3>
                    <h2 className="text-4xl">{PLAYERS.GP}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
                <div className="dark:bg-background w-1"></div>
                <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>T2</h3>
                    <h2 className="text-4xl">{t2}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
                <div className="dark:bg-background w-1"></div>

                <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>T3</h3>
                    <h2 className="text-4xl">{t3}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
                <div className="dark:bg-background w-1"></div>

                <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>FT</h3>
                    <h2 className="text-4xl">{ft}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
            </section>

            <PlayerTableActualSeason info={PLAYERS} />
        </main>
    )
}
