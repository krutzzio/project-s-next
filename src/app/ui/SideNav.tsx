import { FaBasketball } from "react-icons/fa6";


export function SideNav() {

    return (
        <nav className="flex h-full flex-col gap-4 px-8 py-4 md:px-4 md:mx-4 ">
            <header className="h-40">
                <img src="https://scoutbasketball.com/images/sb100@2x.png" alt="" />
            </header>
            <main className="h-full px-4 bg-stone-800 rounded-sm">
                <h1 className="flex items-baseline gap-4 text-3xl pt-8">Ligas <FaBasketball className="text-2xl text-orange-600" /></h1>
                <ul className="my-8 flex flex-col items-start gap-4 text-lg w-fit hover:text-neutral-300">
                    <li><a className="hover:text-orange-600 transition-colors" href="">Liga 1</a></li>
                    <li><a className="hover:text-orange-600 transition-colors" href="">Liga 2</a></li>
                    <li><a className="hover:text-orange-600 transition-colors" href="">Liga 3</a></li>
                    <li><a className="hover:text-orange-600 transition-colors" href="">Liga 4</a></li>
                    <li><a className="hover:text-orange-600 transition-colors" href="">Liga 5</a></li>
                </ul>
            </main>
        </nav>
    )
}