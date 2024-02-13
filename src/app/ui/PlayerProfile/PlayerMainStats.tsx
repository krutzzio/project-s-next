

export function PlayerMainStats({ info }: { info: any }) {

    const ppg = ((Number(info.T2S) * 2 + Number(info.T3S) * 3 + Number(info.FTS)) / Number(info.GP)).toFixed(2)
    const t2 = `${info.T2S}/${info.T2A}`
    const t3 = `${info.T3S}/${info.T3A}`
    const ft = `${info.FTS}/${info.FTA}`

    return (
        <section className="flex justify-evenly justify-items-center bg-white dark:bg-stone-800 rounded-lg">
            <div className="w-44 h-44 rounded-xl bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                <h3>PPG</h3>
                <h2 className="text-4xl">{ppg}</h2>
                <h2 className="text-2xl">(%)</h2>
            </div>
            <div className="dark:bg-background w-1"></div>
            <div className="w-44 h-44 rounded-xl bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                <h3>GP</h3>
                <h2 className="text-4xl">{info.GP}</h2>
                <h2 className="text-2xl">(%)</h2>
            </div>
            <div className="dark:bg-background w-1"></div>
            <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                <h3>T2</h3>
                <h2 className="text-4xl">{t2}</h2>
                <h2 className="text-2xl">(%)</h2>
            </div>
            <div className="dark:bg-background w-1"></div>

            <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                <h3>T3</h3>
                <h2 className="text-4xl">{t3}</h2>
                <h2 className="text-2xl">(%)</h2>
            </div>
            <div className="dark:bg-background w-1"></div>

            <div className="w-44 h-44 rounded-full bg-white dark:bg-stone-800 flex flex-col justify-center items-center">
                <h3>FT</h3>
                <h2 className="text-4xl">{ft}</h2>
                <h2 className="text-2xl">(%)</h2>
            </div>
        </section>
    )
}