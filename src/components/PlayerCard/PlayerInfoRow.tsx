import Link from "next/link"


export function PlayerInfoRow({ infoPlayer }: { infoPlayer: any }) {

    return (
        <tr className="relative odd:bg-neutral-300 even:bg-primary dark:odd:bg-neutral-900  hover:bg-orange-600 dark:hover:bg-orange-600 transition-colors text-center">
            <th className="sticky -left-1 bg-inherit"><Link className="w-full block p-4" href={`/player/${infoPlayer.playerId}`}>{infoPlayer.name}</Link></th>
            <td>{infoPlayer.team}</td>
            <td>{infoPlayer.generation}</td>
            <td>{((Number(infoPlayer.T2S) * 2 + Number(infoPlayer.T3S) * 3 + Number(infoPlayer.FTS)) / Number(infoPlayer.GP)).toFixed(2)}</td>
            <td>{infoPlayer.GP}</td>
            <td>{infoPlayer.T2S}</td>
            <td>{infoPlayer.T2A}</td>
            <td>(%)</td>
            <td>{infoPlayer.T3S}</td>
            <td>{infoPlayer.T3A}</td>
            <td>(%)</td>
            <td>{infoPlayer.FTS}</td>
            <td>{infoPlayer.FTA}</td>
            <td>(%)</td>
        </tr>
    )
}