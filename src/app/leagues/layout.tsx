
import { LogoVindelScouts } from "../ui/LayoutsElements/LogoVindelScouts";
import { SearchBar } from "../ui/LayoutsElements/SearchBar";
import { SideNav } from "../ui/LayoutsElements/SideNav"
import styles from "@/app/ui/grids-layout.module.css"


export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`${styles.gridLayoutLeagues}`}>
            <div className={`${styles.logo}`}>
                <LogoVindelScouts />
            </div>
            <div className={`${styles.header}`}>
                <SearchBar />
            </div>
            <div className={`${styles.aside}`}>
                <SideNav />
            </div>
            <div className={`${styles.main}`}>
                {children}
            </div>
        </div>
    )
}
