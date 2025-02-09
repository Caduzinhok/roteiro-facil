import Link from "next/link";

export default function FormsSignin() {
    return (
        <form className="w-full space-y-5">
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
                Ainda não tem conta? <Link href="/registrar" className="text-primary hover:opacity-90 hover:cursor-pointer">Crie Agora!</Link>

            </p>
            <button className="w-full h-10 bg-primary text-white rounded-2xl text-lg font-bold hover:opacity-90">
                Login
            </button>
        </form>
    )
}