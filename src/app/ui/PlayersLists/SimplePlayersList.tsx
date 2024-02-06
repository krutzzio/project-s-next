import { PlayerInfoPrevSimple } from "@/app/ui/PlayerCard/PlayerInfoPrevSimple";
import styles from "@/app/ui/grids-layout.module.css"
import PLAYERS from "@/test/playersFetch.json"

export default function DetailedPlayersList() {

    const len = 16;
    const playersArray = Array(len).fill(0)
    return (
        <table className="bg-stone-800 rounded-lg w-full mb-4">
            <thead>
                <tr className="">
                    <th className="p-4 bg-stone-800 sticky rounded-lg left-0">Jugador</th>
                    <th className="p-4">Equipo</th>
                    <th className="p-4">Generación</th>
                    <th className="p-4">T2S</th>
                    <th className="p-4">T2A</th>
                    <th className="p-4">T2%</th>
                    <th className="p-4">T3S</th>
                    <th className="p-4">T3A</th>
                    <th className="p-4">T3%</th>
                    <th className="p-4">FTS</th>
                    <th className="p-4">FTA</th>
                    <th className="p-4">FT%</th>
                    <th className="p-4">PPG</th>
                    <th className="p-4">GP </th>
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
