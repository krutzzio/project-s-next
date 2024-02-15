import Link from "next/link";

export function LeagueCard({ league }: { league: any }) {


    return (
        <Link href={`/leagues/liga${league}`} className="flex justify-center items-center rounded-lg bg-white shadow-xl dark:bg-stone-800 w-full h-24 m-auto border-4 border-transparent
            hover:border-orange-600 transition-all hover:text-4xl">
            <h1>Liga{league}</h1>
        </Link>
    )
}