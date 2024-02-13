import { PlayerMatchRow } from "./PlayerMatchRow"


export function PlayerTableLastMatches({ info }: { info: any }) {

    const Matches = Array(10).fill(0)

    return (
        <section>
            <h1 className="text-center text-4xl mb-8">Last 10 Matches</h1>
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
                    {
                        Matches.map((match, ind) => <PlayerMatchRow key={ind} info={info} />)
                    }                    
                </tbody>
            </table>
        </section>

    )
}