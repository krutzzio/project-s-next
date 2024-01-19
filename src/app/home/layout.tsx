import { SideNav } from "../ui/SideNav"



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-72">
                <SideNav />
            </div>
            <div className="w-full md:overflow-y-auto">{children}</div>
        </div>
    )
}
