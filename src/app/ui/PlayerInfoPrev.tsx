

export function PlayerInfoPrev() {

    return (
        <div className="bg-stone-800 mt-8 w-11/12 max-w-96 h-64 rounded flex flex-col justify-around">
            <section className="flex justify-around">
                <section className="text-2xl flex flex-col justify-between">
                    <h3>Enrique Gomez</h3>
                    <h3>TEAM</h3>
                    <h3>GENERATION</h3>
                </section>
                <div className="bg-slate-200 w-32 h-32"></div>
            </section>
            <section className="flex justify-around text-xl">
                <section >
                    <h3>T2: 107/200 (%)</h3>
                    <h3>T3: 16/40 (%)</h3>
                    <h3>FT: 20/30 (%)</h3>
                </section>
                <section className="w-32 flex flex-col justify-evenly">
                    <h3>PPG: 20</h3>
                    <h3>GP: 30</h3>
                </section>
            </section>
        </div>
    )
}