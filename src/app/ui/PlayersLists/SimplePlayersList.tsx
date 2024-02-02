import { PlayerInfoPrevSimple } from "@/app/ui/PlayersLists/PlayerInfoPrevSimple";
import styles from "@/app/ui/grids-layout.module.css"
import PLAYERS from "@/test/playersFetch.json"

export default function DetailedPlayersList() {

    const len = 16;
    const playersArray = Array(len).fill(0)
    return (
        <table className="bg-stone-800 rounded-lg w-full mb-4 overflow-hidden">
            <thead>
                <tr>
                    <th className="p-4">Jugador</th>
                    <th>Equipo</th>
                    <th>Generación</th>
                    <th>T2S</th>
                    <th>T2A</th>
                    <th>T2%</th>
                    <th>T3S</th>
                    <th>T3A</th>
                    <th>T3%</th>
                    <th>FTS</th>
                    <th>FTA</th>
                    <th>FT%</th>
                    <th>PPG</th>
                    <th>GP</th>
                </tr>
            </thead>
            <tbody>
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
                <PlayerInfoPrevSimple infoPlayer={PLAYERS} />
            </tbody>
        </table>
    )
}
