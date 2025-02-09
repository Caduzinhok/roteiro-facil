import Link from "next/link";

export default function FormsSignup() {
    return (
        <form className="w-full space-y-5">
            <div>
                <label htmlFor="nome" className="font-medium">Nome</label>
                <input type="text" id="nome" className="w-full border-input border rounded-xl p-2 placeholder:text-sm" placeholder="Seu nome completo" />
            </div>
            <div>
                <label htmlFor="email" className="font-medium">E-mail</label>
                <input type="email" id="email" className="w-full border-input border rounded-xl p-2 placeholder:text-sm" placeholder="Seu melhor E-mail" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="font-medium">Senha</label>
                <input type="password" id="password" className="w-full border-input border rounded-xl p-2 placeholder:text-sm" placeholder="Sua senha" />
            </div>
            <p className="font-medium">
                Já Possui uma conta? <Link href="/" className="text-primary hover:opacity-90 hover:cursor-pointer">Crie Agora!</Link>
            </p>
            <button className="w-full h-10 bg-primary text-white rounded-2xl text-lg font-bold hover:opacity-90">
                Registrar-se
            </button>
        </form>
    )
}