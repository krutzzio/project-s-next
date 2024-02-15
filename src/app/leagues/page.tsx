import { LeagueCard } from "../ui/LeaguesElements/LeagueCard";

export default function Login() {

    const len = 16;
    const playersArray = Array(len).fill(0)

    return (
        <main className="m-16">
            <h1 className="text-9xl mb-16">Elige liga</h1>
            <section className="grid grid-cols-4 gap-8">
                {playersArray.map((leagues, ind) => <LeagueCard key={ind} league={ind} />)}
            </section>
        </main>
    )
}
