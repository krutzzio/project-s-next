

export function PlayerTable({ info }: { info: any }) {

    const ppg = ((Number(info.T2S) * 2 + Number(info.T3S) * 3 + Number(info.FTS)) / Number(info.GP)).toFixed(2)

    const ppgTotal = (Number(info.T2S) * 2 + Number(info.T3S) * 3 + Number(info.FTS))
    const t2sPG = Number(info.T2S) / Number(info.GP)
    const t2aPG = Number(info.T2A) / Number(info.GP)
    const t3sPG = Number(info.T3S) / Number(info.GP)
    const t3aPG = Number(info.T3A) / Number(info.GP)
    const ftsPG = Number(info.FTS) / Number(info.GP)
    const ftaPG = Number(info.FTA) / Number(info.GP)


    return (
        <section>
            <h1 className="text-center text-4xl mb-8">Actual Season</h1>
            <table className="bg-white dark:bg-stone-800 rounded-lg w-full m-auto mb-4">
                <thead>
                    <tr className="">
                        <th className="p-4"></th>
                        <th className="p-4">GP </th>
                        <th className="p-4">PPG</th>
                        <th className="p-4">T2S</th>
                        <th className="p-4">T2A</th>
                        <th className="p-4">T2%</th>
                        <th className="p-4">T3S</th>
                        <th className="p-4">T3A</th>
                        <th className="p-4">T3%</th>
                        <th className="p-4">FTS</th>
                        <th className="p-4">FTA</th>
                        <th className="p-4">FT%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="p-4">Total</th>
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
                    <tr>
                        <th className="p-4">Average</th>
                        <th className="p-4"></th>
                        <th className="p-4">{ppg}</th>
                        <th className="p-4">{t2sPG}</th>
                        <th className="p-4">{t2aPG}</th>
                        <th className="p-4">%</th>
                        <th className="p-4">{t3sPG}</th>
                        <th className="p-4">{t3aPG}</th>
                        <th className="p-4">%</th>
                        <th className="p-4">{ftsPG}</th>
                        <th className="p-4">{ftaPG}</th>
                        <th className="p-4">%</th>
                    </tr>
                </tbody>
            </table>
        </section>

    )
}