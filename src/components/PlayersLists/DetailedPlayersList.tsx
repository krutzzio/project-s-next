
import styles from "@/components/PlayersLists/grid-players-list.module.css"
import PLAYERS from "@/test/playersFetch.json"
import { PlayerInfoCard } from "../PlayerCard/PlayerInfoCard";

export default function DetailedPlayersList() {

    const len = 16;
    const playersArray = Array(len).fill(0)
    return (
        <section className={styles.gridListPlayers}>
            {
                playersArray.map((player, i) => <PlayerInfoCard key={i} infoPlayer={PLAYERS} />)
            }
        </section>
    )
}
