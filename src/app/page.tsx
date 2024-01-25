"use client"
import Link from 'next/link'

export default function Home() {

  return (
    <main className="flex flex-col items-center p-24">
      <Link href={"/leagues"}>Start Scouting</Link>
    </main >
  )
}
