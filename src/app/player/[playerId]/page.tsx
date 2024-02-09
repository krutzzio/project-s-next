import styles from "@/app/ui/LayoutsElements/grids-layout.module.css"
import PLAYERS from "@/test/playersFetch.json"
import Image from "next/image"

export default function PlayerPage({ params }: { params: any }) {

    return (
        <main className="">
            <Image src={PLAYERS.img} width={50} height={50} alt="PLAYER IMG" />
        </main>
    )
}
