import Input from "@/components/input";

export default function Home() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="w-full p-4">
        <div className="space-y-6 border-2 p-4 border-green-100 w-full">
          <h1 className="text-3xl text-slate-800 font-semibold">Dados do Roteiro</h1>

          <form action="#" className="w-full max-w-full flex flex-wrap gap-5">
            <Input
              label="Título do Roteiro"
              id="titulo-roteiro"
              minWidth="500px"
            />

            <Input
              label="Nome do Cliente"
              id="nome-cliente"
              minWidth="500px"
            />

            <Input
              label="Data de Ida"
              id="data-ida"
              minWidth="500px"
              type="date"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
