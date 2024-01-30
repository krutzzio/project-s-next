

export function SearchBar() {

    return (
        <header className="mx-4 h-full flex items-center justify-start">
            <input className="w-full h-16 bg-stone-800 text-3xl p-5 rounded focus:outline-none focus:outline-orange-600 focus:outline-4
            md:w-9/12"
                placeholder="Buscar jugador..." type="text" />
        </header>
    )
}