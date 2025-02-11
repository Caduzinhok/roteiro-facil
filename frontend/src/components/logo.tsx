import Image from "next/image"
export default function Logo(){
    return (
       <Image  src="/logo-small.svg" alt="Logo" width={50} height={80} />
    )
}