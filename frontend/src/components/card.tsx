import Image from "next/image";

interface CardProps {
    image: string
    name: string
    creationData: string
}

export default function Card({ creationData, image, name }: CardProps) {
    return (
        <div className="flex flex-col bg-white w-full max-w-80 border shadow-sm rounded-md">
            <div className="w-full h-[250px]">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full rounded-t-md" />
            </div>
            <div className="px-2 py-2 space-y-4">
                <div>
                    <p className="text-xl font-medium text-slate-800">
                        {name}
                    </p>
                    <p className="text-slate-900">
                        Criado em {creationData}
                    </p>
                </div>
                <button className="w-full py-2 bg-primary text-white rounded-md">
                    Detalhes
                </button>
            </div>
        </div>
    )
}