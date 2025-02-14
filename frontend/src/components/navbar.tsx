import Logo from "@/components/logo";
import { Bell, Menu, Search, Settings } from "lucide-react";

export default function Navbar() {
    const user = 'C';
    return (

        <div className="flex justify-between items-center h-24 px-8">
            <Logo />
            <div className="flex items-center w-1/3 border-2 border-slate-100 rounded-md">
                <input className="w-full px-4 py-2 outline-none text-sm" placeholder="Pesquisar Roteiros..." />
                <button className="px-4 py-2 text-slate-300 hover:text-slate-400">
                    <Search className="size-5" />
                </button>
            </div>
            <div className="flex items-center h-full gap-4">
                <Bell className="size-6 text-primary" />
                <div className="h-8 w-px bg-slate-300" />
                <Menu className="size-6 text-primary" />

                <div className="flex items-center font-bold justify-center h-12 w-12 bg-primary rounded-full text-white">
                    {user}
                </div>
            </div>
        </div>
    )
}