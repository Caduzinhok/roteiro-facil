import Link from "next/link";
import Logo from "@/components/logo";
export default function FormSignin() {
    return (
        <form className="w-full space-y-5 bg-white p-8 rounded-lg border border-black">
            <div className="flex justify-center items-center gap-5">
                <h1 className="text-3xl text-primary font-medium font-robotoSerif">
                    Seja Bem Vindo
                </h1>
                <Logo />
            </div>
            <div>
                <label htmlFor="email" className="font-medium">E-mail</label>
                <input type="email" id="email" className="w-full border-input border rounded-xl p-2 placeholder:text-sm" placeholder="Digite seu E-mail" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="font-medium">Senha</label>
                <input type="password" id="password" className="w-full border-input border rounded-xl p-2 placeholder:text-sm" placeholder="Digite sua senha" />
                <p className="text-primary text-sm font-medium text-end hover:opacity-90 hover:cursor-pointer">Esqueci minha senha</p>
            </div>
            <p className="font-medium">
                Ainda não tem conta? <Link href="/register" className="text-primary hover:opacity-90 hover:cursor-pointer">Crie Agora!</Link>

            </p>
            <button className="w-full h-10 bg-primary text-white rounded-2xl text-lg font-bold hover:opacity-90">
                Login
            </button>
        </form>
    )
}