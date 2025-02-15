import Card from "@/components/card";
import Navbar from "@/components/navbar";
import { Filter } from "lucide-react";

export default function Home() {
    return (
        <div className="w-screen max-w-full">
            <Navbar />
            <main className="w-full px-10 flex flex-1 flex-col">
                <div className="flex items-center justify-between py-4">
                    <button className="px-8 py-4 bg-primary text-white rounded-md transition-transform hover:scale-110">
                        Nova Proposta
                    </button>
                    <h3 className="font-semibold text-2xl">
                        Olá Carlos!
                    </h3>
                </div>
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl text-primary font-semibold">
                        Propostas
                    </h2>
                    <Filter className="text-slate-500 hover:cursor-pointer"/>
                </div>
                <div className="grid grid-cols-5 py-4 gap-4 m-0">
                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                                        <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />

                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                    <Card
                        creationData="02/02/2025"
                        image="/disney.jpg"
                        name="Viagem Disney"
                    />
                </div>
            </main>
        </div>
    )
}