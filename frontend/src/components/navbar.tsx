import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-12 h-20 border-b border-primary shadow-md">
            <Logo />
            <div className="flex gap-4 items-center">
                <span className="hover:text-primary hover:cursor-pointer">
                    Conheça nosso produto
                </span>
                <span className="hover:text-primary hover:cursor-pointer">
                    Preço
                </span>

                <button className="px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white ">
                    <Link href="/login">
                        Login
                    </Link>
                </button>
            </div>
        </nav>
    )
}