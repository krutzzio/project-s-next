

export function PlayerMatchRow({ info }: { info: any }) {

    const ppgTotal = (Number(info.T2S) * 2 + Number(info.T3S) * 3 + Number(info.FTS))


    return (
        <tr className="odd:bg-neutral-300 dark:odd:bg-neutral-900 dark:even:bg-neutral-800">
            <th className="p-4">VS TEAM</th>
            <th className="p-4">{info.GP}</th>
            <th className="p-4">{ppgTotal}</th>
            <th className="p-4">{info.T2S}</th>
            <th className="p-4">{info.T2A}</th>
            <th className="p-4">%</th>
            <th className="p-4">{info.T3S}</th>
            <th className="p-4">{info.T3A}</th>
            <th className="p-4">%</th>
            <th className="p-4">{info.FTS}</th>
            <th className="p-4">{info.FTA}</th>
            <th className="p-4">%</th>
        </tr>
    )
}