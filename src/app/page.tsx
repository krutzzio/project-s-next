import Link from 'next/link'
import styles from "@/components/players-info.module.css"

export default function Home() {

  return (
    <main className="flex flex-col items-center p-24">
      <Link href={"/login"} className={styles.linkToInfo}>Login</Link>
    </main >
  )
}
