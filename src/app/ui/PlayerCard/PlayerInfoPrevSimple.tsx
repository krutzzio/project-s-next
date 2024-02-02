import Image from "next/image"
import Link from "next/link"
import styles from "@/app/ui/players-info.module.css"
import AddIcon from '@mui/icons-material/Add';


export function PlayerInfoPrevSimple({ infoPlayer }: { infoPlayer: any }) {

    return (
        <tr className="relative odd:bg-neutral-900 hover:bg-orange-600 transition-colors text-center">
            <th><Link className="w-full block p-4" href={`/player/${infoPlayer.playerId}`}>{infoPlayer.name}</Link></th>
            <td>{infoPlayer.team}</td>
            <td>{infoPlayer.generation}</td>
            <td>{infoPlayer.T2S}</td>
            <td>{infoPlayer.T2A}</td>
            <td>{ }</td>
            <td>{infoPlayer.T3S}</td>
            <td>{infoPlayer.T3A}</td>
            <td>{ }</td>
            <td>{infoPlayer.FTS}</td>
            <td>{infoPlayer.FTA}</td>
            <td>{ }</td>
            <td>{((Number(infoPlayer.T2S) * 2 + Number(infoPlayer.T3S) * 3 + Number(infoPlayer.FTS)) / Number(infoPlayer.GP)).toFixed(2)}</td>
            <td>{infoPlayer.GP}</td>
        </tr>
    )
}