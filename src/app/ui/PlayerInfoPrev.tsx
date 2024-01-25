
export function PlayerInfoPrev() {

    return (
        <div className="grid gird-cols-2 gap-y-4 p-3 max-h-64 hover:max-h-[32rem] rounded-lg
         bg-stone-800 border-solid border-4 border-transparent hover:border-orange-600  overflow-hidden transition-all duration-150">
            <section className="text-2xl flex flex-col justify-between">
                <h3>Enrique Gomez</h3>
                <h3>TEAM</h3>
                <h3>GENERATION</h3>
            </section>
            <section className="flex justify-end">
                <div className="bg-slate-200 w-32 h-32 flex justify-center items-center text-blue-900">FOTO</div>
            </section>
            <section className="text-xl">
                <h3>T2: 107/200 (%)</h3>
                <h3>T3: 16/40 (%)</h3>
                <h3>FT: 20/30 (%)</h3>
            </section>
            <section className="w-full flex justify-end">
                <section className="w-32 flex flex-col justify-between text-xl">
                    <h3>PPG: 20</h3>
                    <h3>GP: 30</h3>
                </section>
            </section>
            <article className={`col-span-2`}>
                <h3 className="text-xl mb-2">Description:</h3>
                <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti adipisci doloremque, nihil tempore possimus at placeat, eum repellat nesciunt mollitia facere, nam aliquam nemo.</p>
            </article>

        </div>
    )
}