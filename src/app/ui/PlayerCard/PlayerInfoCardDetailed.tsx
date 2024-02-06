import Image from "next/image"
import Link from "next/link"
import styles from "@/app/ui/players-info.module.css"
import AddIcon from '@mui/icons-material/Add';


export function PlayerInfoCardDetailed({ infoPlayer }: { infoPlayer: any }) {

    return (
        <div tabIndex={0} className="flex flex-col p-3 max-h-[30rem] focus-within:max-h-[64rem] 
         bg-stone-800 border-solid border-4 rounded-lg focus-within:border-orange-600 overflow-hidden transition-all duration-150">

            <section className="flex justify-center items-center">
                <Image src={infoPlayer.img} width={75} height={75} alt="Imagen jugador" />
            </section>

            <section className="text-2xl text-center flex flex-col justify-center items-center w-fit m-auto">
                <Link href={`/player/${infoPlayer.playerId}`} className={`${styles.linkToInfo} w-fit`}>{infoPlayer.name}</Link>
                <h3>{infoPlayer.team}</h3>
                <h3>{infoPlayer.generation}</h3>
            </section>

            <section className="text-lg flex justify-around my-4">
                <div className="flex flex-col items-center w-16 h-16 bg-orange-600 text-black font-bold rounded-full p-2">
                    <h4 className="text-sm">PPG</h4>
                    <h3>{((Number(infoPlayer.T2S) * 2 + Number(infoPlayer.T3S) * 3 + Number(infoPlayer.FTS)) / Number(infoPlayer.GP)).toFixed(2)}</h3>
                </div>
                <div className="flex flex-col items-center w-16 h-16 bg-orange-600 text-black font-bold rounded-full p-2">
                    <h4 className="text-sm">GP</h4>
                    <h3>{infoPlayer.GP}</h3>
                </div>
            </section>

            <section className="text-lg flex justify-around my-4">
                <div className="flex flex-col items-center w-16 h-16 bg-orange-600 text-black font-bold rounded-full p-2">
                    <h4 className="text-sm">T2</h4>
                    <h3>{infoPlayer.T2S}/{infoPlayer.T2A}</h3>
                </div>
                <div className="flex flex-col items-center w-16 h-16 bg-orange-600 text-black font-bold rounded-full p-2">
                    <h4 className="text-sm">T3</h4>
                    <h3>{infoPlayer.T3S}/{infoPlayer.T3A}</h3>
                </div>
                <div className="flex flex-col items-center w-16 h-16 bg-orange-600 text-black font-bold rounded-full p-2">
                    <h4 className="text-sm">FT</h4>
                    <h3>{infoPlayer.FTS}/{infoPlayer.FTA}</h3>
                </div>
            </section>


            <section>
                <Link href={"/player/playerId"} className="h-10 mb-4 bg-white rounded-md flex justify-center items-center gap-2 hover:bg-orange-600 font-bold text-stone-950 transition-colors"> <AddIcon /> Info.</Link>
            </section>

            <article className={``}>
                <h3 className="text-xl mb-2">Description:</h3>
                <p className="text-lg">{infoPlayer.description}</p>
            </article>
        </div >
    )
}