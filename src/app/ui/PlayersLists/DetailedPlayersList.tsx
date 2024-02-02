import { PlayerInfoPrevDetailed } from "@/app/ui/PlayerCard/PlayerInfoPrevDetailed";
import { PlayerInfoCardDetailed } from "@/app/ui/PlayerCard/PlayerInfoCardDetailed";

import styles from "@/app/ui/grids-layout.module.css"
import PLAYERS from "@/test/playersFetch.json"

export default function DetailedPlayersList() {

    const len = 16;
    const playersArray = Array(len).fill(0)
    return (
        <section className={styles.gridListPlayers}>
            {/*
                playersArray.map((player, i) => <PlayerInfoPrevDetailed key={i} infoPlayer={PLAYERS} />)*/
            }
            <PlayerInfoPrevDetailed infoPlayer={PLAYERS} />
            <PlayerInfoPrevDetailed infoPlayer={PLAYERS} />
            <PlayerInfoPrevDetailed infoPlayer={PLAYERS} />
            <PlayerInfoPrevDetailed infoPlayer={PLAYERS} />
            <PlayerInfoCardDetailed infoPlayer={PLAYERS} />
            <PlayerInfoCardDetailed infoPlayer={PLAYERS} />
            <PlayerInfoCardDetailed infoPlayer={PLAYERS} />
            <PlayerInfoCardDetailed infoPlayer={PLAYERS} />
        </section>
    )
}
