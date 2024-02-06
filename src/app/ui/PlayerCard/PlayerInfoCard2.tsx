import Image from "next/image"
import Link from "next/link"
import styles from "@/app/ui/players-info.module.css"
import AddIcon from '@mui/icons-material/Add';


export function PlayerInfoCard2({ infoPlayer }: { infoPlayer: any }) {

    return (
        <div tabIndex={0} className="grid grid-cols-2 gap-y-8 gap-x-4 p-3 max-h-[20rem] focus-within:max-h-[64rem] 
         bg-stone-800 border-solid border-4 rounded-lg focus-within:border-orange-600 overflow-hidden transition-all duration-150">
            <section className="flex flex-col items-start justify-between text-2xl">
                <Image src={infoPlayer.img} width={50} height={128} alt="Imagen jugador" />
                <Link href={`/player/${infoPlayer.playerId}`} className={`${styles.linkToInfo} w-fit`}>{infoPlayer.name}</Link>
                <h3>{infoPlayer.team}</h3>
                <h3>{infoPlayer.generation}</h3>
            </section>

            <section className="grid grid-cols-2 items-end justify-between text-xl">
                <h3>PPG</h3>
                <h3 className="text-xl">{((Number(infoPlayer.T2S) * 2 + Number(infoPlayer.T3S) * 3 + Number(infoPlayer.FTS)) / Number(infoPlayer.GP)).toFixed(2)}</h3>
                <h3>GP</h3>
                <h3 className="text-xl">{infoPlayer.GP}</h3>
                <h3>T2</h3>
                <h3 className="text-xl">(%)</h3>
                <h3>T3</h3>
                <h3 className="text-xl">(%)</h3>
                <h3>FT</h3>
                <h3 className="text-xl">(%)</h3>
            </section>

            <section className="col-span-2">
                <Link href={"/player/playerId"} className="h-10 mb-4 bg-white rounded-md flex justify-center items-center gap-2 hover:bg-orange-600 font-bold text-stone-950 transition-colors"> <AddIcon /> Info.</Link>
            </section>

            <article className="col-span-2">
                <h3 className="text-xl mb-2">Description:</h3>
                <p className="text-lg">{infoPlayer.description}</p>
            </article>
        </div >
    )
}