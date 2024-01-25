import { PlayerInfoPrev } from "../ui/PlayerInfoPrev";
import styles from "@/app/ui/players-list.module.css"
import PLAYERS from "@/test/playersFetch.json"

export default function Home() {

  const len = 16;
  const playersArray = Array(len).fill(0)
  return (
    <main className="flex min-h-screen flex-col gap-12 py-6">
      <header className="flex items-center justify-center">
        <input className="w-11/12 h-fit bg-stone-800 text-4xl p-5 rounded  focus:outline-none focus:outline-orange-600 focus:outline-4
            lg:w-fit
            xl:w-fit"
          placeholder="Buscar jugador..." type="text" />
      </header>
      <main className="w-11/12 m-auto">
        <h1 className="text-xl mb-4">Lliga</h1>
        <section className={styles.gridListPlayers}>
          {
            playersArray.map((player, i) => <PlayerInfoPrev key={i} infoPlayer={PLAYERS} />)
          }
        </section>
      </main>
    </main>
  )
}
