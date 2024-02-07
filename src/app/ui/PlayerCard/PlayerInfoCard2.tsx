import Image from "next/image"
import Link from "next/link"
import styles from "@/app/ui/players-info.module.css"
import AddIcon from '@mui/icons-material/Add';


export function PlayerInfoCard2({ infoPlayer }: { infoPlayer: any }) {

    const ppg = ((Number(infoPlayer.T2S) * 2 + Number(infoPlayer.T3S) * 3 + Number(infoPlayer.FTS)) / Number(infoPlayer.GP)).toFixed(2)


    return (
        <div tabIndex={0} className="grid grid-cols-5 gap-y-6 gap-x-4 p-6 max-h-[17.5rem] bg-stone-800 border-solid border-4 rounded-lg overflow-hidden
         transition-all duration-150 focus-within:max-h-[64rem]  focus-within:border-orange-600 hover:cursor-pointer focus:cursor-default">
            <section className="col-span-2 flex flex-col items-start justify-between text-xl w-fit">
                <Image src={infoPlayer.img} width={75} height={128} alt="Imagen jugador" />
                <Link href={`/player/${infoPlayer.playerId}`} className={`${styles.linkToInfo} w-fit`}>{infoPlayer.name}</Link>
                <h3>{infoPlayer.team}</h3>
                <h3>{infoPlayer.generation}</h3>
            </section>
            <section className="col-span-3 grid grid-cols-2 justify-items-stretch text-lg bg-stone-700 rounded-lg">
                <article className="col-span-2 flex justify-around ">
                    <h3 className="pt-4 pb-2 h-fit">PPG <span className="text-xl ml-4">{ppg}</span> </h3>
                    <div className="h-full w-1 bg-stone-800"></div>
                    <h3 className="pt-4 h-fit">GP <span className="text-xl ml-4">{infoPlayer.GP}</span></h3>
                </article>
                <div className="col-span-2 h-1  w-full bg-stone-800"></div>
                <article className="col-span-2 grid grid-cols-3 justify-items-center">
                    <h3>T2</h3>
                    <h3 className="text-xl w-fit">{infoPlayer.T2S}/{infoPlayer.T2A}</h3>
                    <h3 className="text-xl">(%)</h3>
                    <div className="col-span-3 h-0.5 w-full bg-stone-800"></div>
                    <h3>T3</h3>
                    <h3 className="text-xl">{infoPlayer.T3S}/{infoPlayer.T3A}</h3>
                    <h3 className="text-xl">(%)</h3>
                    <div className="col-span-3 h-0.5  w-full bg-stone-800"></div>
                    <h3>FT</h3>
                    <h3 className="text-xl">{infoPlayer.FTS}/{infoPlayer.FTA}</h3>
                    <h3 className="text-xl">(%)</h3>
                </article>
            </section>
            <section className="col-span-5">
                <Link href={"/player/playerId"} className="h-10 bg-white rounded-md flex justify-center items-center gap-2 hover:bg-orange-600 font-bold text-stone-950 transition-colors"> <AddIcon /> Info.</Link>
            </section>
            <article className="col-span-5">
                <h3 className="text-xl mb-2">Description:</h3>
                <p className="text-lg">{infoPlayer.description}</p>
            </article>
        </div >
    )
}