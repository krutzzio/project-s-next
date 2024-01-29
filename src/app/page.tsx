import Link from 'next/link'
import styles from "@/app/ui/players-info.module.css"

export default function Home() {

  return (
    <main className="flex flex-col items-center p-24">
      <Link href={"/leagues/liga1"} className={styles.linkToInfo}>Start Scouting</Link>
    </main >
  )
}
