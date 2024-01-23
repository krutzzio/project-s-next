import { PlayerInfoPrev } from "../ui/PlayerInfoPrev";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 py-6">
      <header className="flex items-center justify-center">
        <input className="bg-stone-800 w-fit h-fit text-4xl p-5 rounded focus:outline-none focus:outline-orange-600" placeholder="Buscar jugador..." type="text" />
      </header>
      <main>
        <h1>Liga seleccionada</h1>
        <section className="grid grid-cols-4">
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
          <PlayerInfoPrev />
        </section>
      </main>
    </main>
  )
}
