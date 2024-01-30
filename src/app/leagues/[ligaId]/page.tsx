import { PlayerInfoPrev } from "../../ui/PlayersInfo/PlayerInfoPrev";
import { PlayerInfoPrev2 } from "../../ui/PlayersInfo/PlayerInfoPrev2";
import { PlayerInfoPrev3 } from "../../ui/PlayersInfo/PlayerInfoPrev3";
import { PlayerInfoPrev4 } from "../../ui/PlayersInfo/PlayerInfoPrev4";
import styles from "@/app/ui/grids-layout.module.css"
import PLAYERS from "@/test/playersFetch.json"

export default function Liga({params} : {params: any}) {

    const len = 16;
    const playersArray = Array(len).fill(0)
    return (
        <main className="mx-4">
            <h1 className="text-xl mb-4">{params.ligaId}</h1>
            <section className={styles.gridListPlayers}>
                {/*
                    playersArray.map((player, i) => <PlayerInfoPrev key={i} infoPlayer={PLAYERS} />)
    */}
                <PlayerInfoPrev infoPlayer={PLAYERS} />
                <PlayerInfoPrev2 infoPlayer={PLAYERS} />
                <PlayerInfoPrev3 infoPlayer={PLAYERS} />
                <PlayerInfoPrev4 infoPlayer={PLAYERS} />
            </section>
        </main>
    )
}
