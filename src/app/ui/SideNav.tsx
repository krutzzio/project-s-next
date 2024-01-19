import { FaBasketball  } from "react-icons/fa6";


export function SideNav() {

    return(
        <nav className="flex h-full flex-col gap-4 px-4 py-4 md:px-2 bg-stone-800">
            <header className="bg-slate-400 h-40">
                Logo
            </header>
            <main className="">
                <h1 className="flex items-baseline gap-4 text-4xl">LLIGUES <FaBasketball className="text-3xl text-orange-600"/></h1>
                <ul className="my-8 mx-8 flex flex-col items-start gap-8 text-xl">
                    <li>LLIGA 1</li>
                    <li>LLIGA 2</li>
                    <li>LLIGA 2333</li>
                </ul>
            </main>
        </nav>
    )
}