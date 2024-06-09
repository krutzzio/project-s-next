import Image from "next/image";


export function LogoVindelScouts() {
    return (
        <header className="flex justify-center items-center h-full px-2 md:px-4">
            <Image src={"/logo.png"} alt="Logo" width={500} height={500} className="md:w-40"/>
        </header>
    )
}