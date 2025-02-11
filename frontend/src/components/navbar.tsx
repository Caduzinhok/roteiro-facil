import Logo from "./logo";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-12 h-20 border-b border-primary shadow-md">
            <Logo />
            <div className="flex gap-4 items-center">
                <div>
                    Conheça nosso produto
                </div>
                <div>
                    Preço
                </div>

                <button className="px-5 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white ">
                    Login
                </button>
            </div>
        </nav>
    )
}