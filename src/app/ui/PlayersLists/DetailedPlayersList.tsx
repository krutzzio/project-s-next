import { PlayerInfoPrevDetailed } from "@/app/ui/PlayerCard/PlayerInfoPrevDetailed";
import { PlayerInfoCardDetailed } from "@/app/ui/PlayerCard/PlayerInfoCardDetailed";

import styles from "@/app/ui/PlayersLists/grid-players-list.module.css"
import PLAYERS from "@/test/playersFetch.json"
import { PlayerInfoCard2 } from "../PlayerCard/PlayerInfoCard2";

export default function DetailedPlayersList() {

    const len = 16;
    const playersArray = Array(len).fill(0)
    return (
        <section className={styles.gridListPlayers}>
            {
                playersArray.map((player, i) => <PlayerInfoCard2 key={i} infoPlayer={PLAYERS} />)
            }
        </section>
    )
}
