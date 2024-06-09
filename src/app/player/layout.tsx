
import { LogoVindelScouts } from "../../components/LayoutsElements/LogoVindelScouts";
import { SearchBar } from "../../components/LayoutsElements/SearchBar";
import styles from "@/components/PlayerProfile/grid-player-profile.module.css"
import { SideNav } from "../../components/LayoutsElements/SideNav";


export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`${styles.gridLayoutPlayerInfo}`}>
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
