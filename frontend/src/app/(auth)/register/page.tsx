import FormSignup from "@/app/(auth)/register/formsSignup";

export default function Page() {
  return (
    <div className="grid grid-cols-2 w-screen h-screen justify-center items-center bg-slate-100">
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full max-w-md space-y-8">
          <FormSignup />
        </div>
      </div>
      <div className="bg-login w-full h-full bg-cover bg-no-repeat bg-center rounded-s-3xl" />
    </div>
  );
}