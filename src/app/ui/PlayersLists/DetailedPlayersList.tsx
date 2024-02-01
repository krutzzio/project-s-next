import { PlayerInfoPrevDetailed } from "@/app/ui/PlayersLists/PlayerInfoPrevDetailed";
import styles from "@/app/ui/grids-layout.module.css"
import PLAYERS from "@/test/playersFetch.json"

export default function DetailedPlayersList() {

    const len = 16;
    const playersArray = Array(len).fill(0)
    return (
        <section className={styles.gridListPlayers}>
            {
                playersArray.map((player, i) => <PlayerInfoPrevDetailed key={i} infoPlayer={PLAYERS} />)
            }
        </section>
    )
}
