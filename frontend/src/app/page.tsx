import Card from "@/components/card";
import Navbar from "@/components/navbar";

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

export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar />
      <div className="flex flex-col w-full h-full items-center justify-center gap-4">
        <h1 className="text-5xl font-bold text-slate-900">
          Simplicidade para uma <span className="text-primary">viagem inesquecível.</span>
        </h1>
        <p className="text-md font-medium text-primary text-center">
          Planejamos cada detalhe para que você viva o melhor da sua jornada. <br /> Roteiros personalizados que unem destinos incríveis e praticidade, feitos sob medida para você.
        </p>

        <div className="flex gap-10 py-8">
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
  );
}
