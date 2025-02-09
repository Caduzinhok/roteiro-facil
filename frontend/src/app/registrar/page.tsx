import FormsSignup from "@/components/login/formsSignup";
import Image from "next/image";

export default function Page(){
    return (
            <div className="grid grid-cols-2 w-screen h-screen justify-center items-center">
              <div className="w-full flex items-center justify-center">
              <div className="flex flex-col items-center justify-center w-full max-w-md space-y-8">
                <div className="flex justify-center items-center gap-5">
                  <h1 className="text-3xl text-primary font-medium font-robotoSerif">
                    Crie sua conta
                  </h1>
                  <Image src="/logo-small.svg" alt="Logo" width={50} height={80}/>
                </div>
        
            <FormsSignup />
              </div>

              </div>
        
              <div className="bg-login w-full h-full bg-cover bg-no-repeat bg-center rounded-s-3xl" />
            </div>
          );
}