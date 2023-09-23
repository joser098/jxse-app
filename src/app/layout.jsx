import "./globals.css";
import { Archivo } from "next/font/google";

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Bienvenido | Jxse",
  description:
    "Website personal de proyectos y datos de interes sobre desarrollo web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
