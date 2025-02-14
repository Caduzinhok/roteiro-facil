import Card from "@/components/card";
import Navbar from "@/components/root/navbar";
import Link from "next/link";

const cards = [
  {
    "destination": "Explore o Mundo Sem Complicações",
    "image": "/disney.jpg",
    "description": "Roteiros planejados para você aproveitar o melhor de cada destino, sem se preocupar com os detalhes."
  },
  {
    "destination": "Descubra Novos Destinos",
    "image": "/trilha.jpg",
    "description": "Planejamos experiências únicas, feitas sob medida para você desbravar o mundo de forma personalizada."
  },
  {
    "destination": "Viaje com Praticidade e Estilo",
    "image": "/praia.jpg",
    "description": "Roteiros completos, criados para quem busca praticidade, conforto e aventura em cada viagem."
  },
]

export default function Page() {
  return (
    <div className="flex flex-col w-full max-w-screen">
      <Navbar />
      <div className="flex flex-col w-full h-full items-center justify-center gap-10 mt-8">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-5xl font-bold text-slate-900">
            Simplicidade para uma <span className="text-primary">viagem inesquecível.</span>
          </h1>
          <p className="text-md font-medium text-primary text-center">
            Planejamos cada detalhe para que você viva o melhor da sua jornada. <br /> Roteiros personalizados que unem destinos incríveis e praticidade, feitos sob medida para você.
          </p>
          <div>
            <button className="px-4 py-4 border-2 border-slate-600 rounded-lg font-semibold text-xl text-primary transition-transform duration-75 hover:bg-primary hover:text-white">
              <Link href="/login">
                Crie um Roteiro agora!
              </Link>
            </button>
          </div>
        </div>

        <div className="bg-primary w-full py-10 space-y-8">
          <h2 className="text-3xl font-semibold text-white text-center">
            Planejando Viagens Inesquecíveis
          </h2>
          <div className="flex gap-10 justify-center">
            {cards.map((card) => {
              return (
                <Card
                  key={card.destination}
                  destination={card.destination}
                  image={card.image}
                  description={card.description}
                />
              )
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
