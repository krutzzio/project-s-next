import Image from 'next/image'
import Link from 'next/link'
import { PlayerInfoPrev } from './ui/PlayerInfoPrev'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">

      <Link href={"/home"}>Start Scouting</Link>
      <PlayerInfoPrev />

      <div className="grid grid-cols-3 gap-4">

        <div className='m-h-64 overflow-hidden hover:m-h-96'>
          <div className=" bg-stone-800 mt-8 w-11/12 max-w-96 p-4 rounded flex flex-col justify-around transition-all">
            <section className="flex justify-between">
              <section className="text-2xl flex flex-col justify-between">
                <h3>Enrique Gomez</h3>
                <h3>TEAM</h3>
                <h3>GENERATION</h3>
              </section>
              <div className="bg-slate-200 w-32 h-32 flex justify-center items-center text-blue-900">FOTO</div>
            </section>
            <section className="flex justify-between text-xl my-4">
              <section >
                <h3>T2: 107/200 (%)</h3>
                <h3>T3: 16/40 (%)</h3>
                <h3>FT: 20/30 (%)</h3>
              </section>
              <section className="w-32 flex flex-col justify-between">
                <h3>PPG: 20</h3>
                <h3>GP: 30</h3>
              </section>
            </section>
            <article className="">
              <h3 className="text-xl">Description:</h3>
              <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti adipisci doloremque, nihil tempore possimus at placeat, eum repellat nesciunt mollitia facere, nam aliquam nemo.</p>
            </article>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 group">
          <div className="h-72 transition-all group-hover:h-96">
            Elemento 1
          </div>
        </div>
        <div className="bg-gray-200 p-4 group">
          <div className="h-72 transition-all group-hover:h-96">
            Elemento 2
          </div>
        </div>
        <div className="bg-gray-200 p-4 group">
          <div className="h-72 transition-all group-hover:h-96">
            Elemento 3
          </div>
        </div>
      </div>
    </main >
  )
}
