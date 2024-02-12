import styles from "@/app/ui/LayoutsElements/grids-layout.module.css"
import PLAYERS from "@/test/playersFetch.json"
import Image from "next/image"

export default function PlayerPage({ params }: { params: any }) {

    const ppg = ((Number(PLAYERS.T2S) * 2 + Number(PLAYERS.T3S) * 3 + Number(PLAYERS.FTS)) / Number(PLAYERS.GP)).toFixed(2)
    const ppgTotal = (Number(PLAYERS.T2S) * 2 + Number(PLAYERS.T3S) * 3 + Number(PLAYERS.FTS))
    const t2 = `${PLAYERS.T2S}/${PLAYERS.T2A}`
    const t3 = `${PLAYERS.T3S}/${PLAYERS.T3A}`
    const ft = `${PLAYERS.FTS}/${PLAYERS.FTA}`
    const t2sPG = Number(PLAYERS.T2S) / Number(PLAYERS.GP)
    const t2aPG = Number(PLAYERS.T2A) / Number(PLAYERS.GP)
    const t3sPG = Number(PLAYERS.T3S) / Number(PLAYERS.GP)
    const t3aPG = Number(PLAYERS.T3A) / Number(PLAYERS.GP)
    const ftsPG = Number(PLAYERS.FTS) / Number(PLAYERS.GP)
    const ftaPG = Number(PLAYERS.FTA) / Number(PLAYERS.GP)


    return (
        <main className="flex flex-col gap-16">
            <section className="grid grid-cols-5">
                <Image src={PLAYERS.img} width={150} height={50} alt="PLAYER IMG" className="col-span-2 m-auto" />
                <article className="col-span-3">
                    <h1 className="text-9xl">Nom Jugador</h1>
                    <h1 className="text-5xl">Equip</h1>
                    <h1 className="text-5xl">Generació</h1>
                </article>
            </section>

            <section className="grid grid-cols-5 justify-items-center">
                <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>PPG</h3>
                    <h2 className="text-4xl">{ppg}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
                <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>GP</h3>
                    <h2 className="text-4xl">{PLAYERS.GP}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
                <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>T2</h3>
                    <h2 className="text-4xl">{t2}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
                <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>T3</h3>
                    <h2 className="text-4xl">{t3}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
                <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                    <h3>FT</h3>
                    <h2 className="text-4xl">{ft}</h2>
                    <h2 className="text-2xl">(%)</h2>
                </div>
            </section>

            <section>
                <h1 className="text-center text-4xl mb-8">Actual Season</h1>
                <table className="bg-white dark:bg-stone-800 rounded-lg w-11/12 m-auto mb-4">
                    <thead>
                        <tr className="">
                            <th className="p-4"></th>
                            <th className="p-4">GP </th>
                            <th className="p-4">PPG</th>
                            <th className="p-4">T2S</th>
                            <th className="p-4">T2A</th>
                            <th className="p-4">T2%</th>
                            <th className="p-4">T3S</th>
                            <th className="p-4">T3A</th>
                            <th className="p-4">T3%</th>
                            <th className="p-4">FTS</th>
                            <th className="p-4">FTA</th>
                            <th className="p-4">FT%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="p-4">Total</th>
                            <th className="p-4">{PLAYERS.GP}</th>
                            <th className="p-4">{ppgTotal}</th>
                            <th className="p-4">{PLAYERS.T2S}</th>
                            <th className="p-4">{PLAYERS.T2A}</th>
                            <th className="p-4">%</th>
                            <th className="p-4">{PLAYERS.T3S}</th>
                            <th className="p-4">{PLAYERS.T3A}</th>
                            <th className="p-4">%</th>
                            <th className="p-4">{PLAYERS.FTS}</th>
                            <th className="p-4">{PLAYERS.FTA}</th>
                            <th className="p-4">%</th>
                        </tr>
                        <tr>
                            <th className="p-4">Average</th>
                            <th className="p-4"></th>
                            <th className="p-4">{ppg}</th>
                            <th className="p-4">{t2sPG}</th>
                            <th className="p-4">{t2aPG}</th>
                            <th className="p-4">%</th>
                            <th className="p-4">{t3sPG}</th>
                            <th className="p-4">{t3aPG}</th>
                            <th className="p-4">%</th>
                            <th className="p-4">{ftsPG}</th>
                            <th className="p-4">{ftaPG}</th>
                            <th className="p-4">%</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    )
}
