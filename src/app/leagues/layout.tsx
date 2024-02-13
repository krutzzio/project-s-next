import { LogoVindelScouts } from "../ui/LayoutsElements/LogoVindelScouts";
import { SearchBar } from "../ui/LayoutsElements/SearchBar";
import { SideNav } from "../ui/LayoutsElements/SideNav"
import styles from "@/app/ui/LayoutsElements/grids-layout.module.css"


export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
                {children}           
        </div>
    )
}
