import Image from "next/image"

interface CardProps {
    destination: string
    image: string
    description: string
}
export default function Card({ image, destination, description }: CardProps) {
    return (
        <div className="flex flex-col w-full max-w-80 border shadow-sm rounded-md">
            <Image
                src={image}
                alt={destination}
                width={100}
                height={100}
                layout="responsive"
                className="object-cover rounded-t-md" />
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