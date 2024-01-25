import { PlayerInfoPrev } from "../ui/PlayerInfoPrev";
import styles from "@/app/ui/players-list.module.css"

export default function Home() {

  const len = 16;
  const playersArray = Array(len).fill(0)

  return (
    <main className="flex min-h-screen flex-col gap-12 py-6">
      <header className="flex items-center justify-center">
        <input className="bg-stone-800 w-fit h-fit text-4xl p-5 rounded focus:outline-none focus:outline-orange-600" placeholder="Buscar jugador..." type="text" />
      </header>
      <main className="w-11/12 m-auto">
        <h1>Liga seleccionada</h1>
        <section className={styles.gridListPlayers}>
          {
            playersArray.map((player, i) => <PlayerInfoPrev key={i} />)
          }
        </section>
      </main>
    </main>
  )
}
