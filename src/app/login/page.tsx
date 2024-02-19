import Link from "next/link";

export default function Login() {


    return (
        <main className="grid grid-cols-2">
            <section className="">
            </section>
            <section className="relative bg-stone-800 h-screen flex justify-center items-center">
                <article className="flex flex-col gap-4">
                    <section className="flex flex-col gap-1">
                        <label htmlFor="email">Email:</label>
                        <input className="p-2 rounded " type="text" name="email" placeholder="name@example.com" />
                    </section>
                    <section className="flex flex-col gap-1">
                        <label htmlFor="password">Password:</label>
                        <input className="p-2 rounded text-sm" type="password" name="password" placeholder="Must have at least 6 characters" />
                    </section>
                    <section className="flex justify-center">
                        <Link href={"/leagues"}>Iniciar Session</Link>
                    </section>
                </article>
                <button className="absolute top-4 right-4 ">Crear usuario</button>
            </section>

        </main>
    )
}
