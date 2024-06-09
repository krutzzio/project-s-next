import Link from "next/link";

export default function Login() {


    return (
        <section className="bg-primary h-screen flex justify-center items-center">
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
                    <Link href={"/leagues/1"}>Iniciar Session</Link>
                </section>
            </article>
        </section>
    )
}
