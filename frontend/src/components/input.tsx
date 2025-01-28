interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  minWidth: string;
  id: string;
}

export default function Input({ label, id, minWidth, ...props }: InputProps) {
  return (
    <div className="flex flex-col w-full sm:w-auto lg:w-auto">
      {label && (
        <label htmlFor={id} className="w-full text-slate-800 text-lg">
          {label}
        </label>
      )}
      <input
        id={id}
        className="bg-yellow-100 w-full h-8 px-2 rounded-md flex-grow"
        style={{ minWidth }} // Aplicando minWidth via estilo
        {...props} // Passa todas as outras propriedades para o input
      />
    </div>
  );
}
