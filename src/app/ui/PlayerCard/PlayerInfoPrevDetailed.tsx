import Image from "next/image"
import Link from "next/link"
import styles from "@/app/ui/players-info.module.css"
import AddIcon from '@mui/icons-material/Add';


export function PlayerInfoPrevDetailed({ infoPlayer }: { infoPlayer: any }) {

    return (
        <div tabIndex={0} className="grid gird-cols-2 gap-y-4 p-3 max-h-[19rem] focus-within:max-h-[64rem] 
         bg-stone-800 border-solid border-4 rounded-lg focus-within:border-orange-600 overflow-hidden transition-all duration-150">
            <section className="text-xl flex flex-col justify-between">
                <Link href={`/player/${infoPlayer.playerId}`} className={styles.linkToInfo}>{infoPlayer.name}</Link>
                <h3>{infoPlayer.team}</h3>
                <h3>{infoPlayer.generation}</h3>
            </section>
            <section className="flex justify-end">
                <Image src={infoPlayer.img} width={128} height={128} alt="Imagen jugador" />
            </section>
            <section className="text-md">
                <h3>T2: {infoPlayer.T2S}/{infoPlayer.T2A} (%)</h3>
                <h3>T3: {infoPlayer.T3S}/{infoPlayer.T3A} (%)</h3>
                <h3>FT: {infoPlayer.FTS}/{infoPlayer.FTA} (%)</h3>
            </section>
            <section className="w-full flex justify-end">
                <section className="w-32 flex flex-col justify-between text-md">
                    <h3>PPG: {((Number(infoPlayer.T2S) * 2 + Number(infoPlayer.T3S) * 3 + Number(infoPlayer.FTS)) / Number(infoPlayer.GP)).toFixed(2)}</h3>
                    <h3>GP: {infoPlayer.GP}</h3>
                </section>
            </section>
            <Link href={"/player/playerId"} className="col-span-2 h-10 bg-white rounded-md flex justify-center items-center gap-2 hover:bg-orange-600 font-bold text-stone-950 transition-colors"> <AddIcon /> Info.</Link>
            <article className={`col-span-2`}>
                <h3 className="text-xl mb-2">Description:</h3>
                <p className="text-lg">{infoPlayer.description}</p>
            </article>
        </div>
    )
}