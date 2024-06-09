import { ExpandedNav } from "@/components/LayoutsElements/ExpandedNav";
import { LogoVindelScouts } from "../../../components/LayoutsElements/LogoVindelScouts";
import { SearchBar } from "../../../components/LayoutsElements/SearchBar";
import { SideNav } from "../../../components/LayoutsElements/SideNav"
import styles from "@/components/LayoutsElements/grids-layout.module.css"


export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`${styles.gridLayoutLeagues}`}>
            
            <div className={`${styles.header}`}>
                <SearchBar />
            </div>
            <div className={`${styles.aside}`}>
                <SideNav />
            </div>
            <div className={`${styles.expandedMenu}`}>
                <ExpandedNav />
            </div>
            <div className={`${styles.main}`}>
                {children}
            </div>
        </div>
    )
}
