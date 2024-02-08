import Image from "next/image";


export function LogoVindelScouts() {
    return (
        <header className="flex justify-center items-center h-full px-2 md:px-8">
            <Image src={"/logo.png"} alt="Logo" width={500} height={500} className="md:min-w-40"/>
        </header>
    )
}