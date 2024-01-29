import { PlayerInfoPrev } from "../../ui/PlayerInfoPrev";
import styles from "@/app/ui/grids-layout.module.css"
import PLAYERS from "@/test/playersFetch.json"

export default function Home() {

    const len = 16;
    const playersArray = Array(len).fill(0)
    return (
        <main className="mx-4">
            <h1 className="text-xl mb-4">Lliga</h1>
            <section className={styles.gridListPlayers}>
                {
                    playersArray.map((player, i) => <PlayerInfoPrev key={i} infoPlayer={PLAYERS} />)
                }
            </section>
        </main>
    )
}
