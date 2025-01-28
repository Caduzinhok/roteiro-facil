import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  display: "auto",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roteiro Fácil",
  description: "Crie roteiros de viagem completos e profissionais em PDF, personalizados para seus clientes em poucos cliques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.style} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
