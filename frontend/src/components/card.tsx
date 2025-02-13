import Image from "next/image"

interface CardProps {
    destination: string
    image: string
    description: string
}
export default function Card({ image, destination, description }: CardProps) {
    return (
        <div className="flex flex-col bg-white w-full max-w-80 border shadow-sm rounded-md transition-transform hover:-translate-y-4 duration-500 ease-in-out">
            <div className="w-full h-[250px]">
                <Image
                    src={image}
                    alt={destination}
                    width={400}
                    height={250}
                    className="object-cover w-full h-full rounded-t-md" />
            </div>
            <div className="px-2 py-2 py">
                <h2 className="text-xl text-slate-900">
                    {destination}
                </h2>
                <p className="text-slate-600 text-sm">
                    {description}
                </p>
            </div>
        </div>
    )
}