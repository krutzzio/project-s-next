


export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="grid grid-cols-2">
            <div></div>
            {children}
        </div>
    )
}