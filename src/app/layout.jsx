import { SideBarProvider } from "@/context/SideBarContext";
import "./globals.css";
import { Archivo } from "next/font/google";
import { Analytics } from '@vercel/analytics/react'

const archivo = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Bienvenido | Jxse",
  description:
    "Website personal de proyectos y datos de interes sobre desarrollo web",
};

export default function RootLayout({ children }) {
  return (
  <SideBarProvider>
    <html lang="en">
      <body className={archivo.className}>
        {children}
        <Analytics/>
      </body>
    </html>
</SideBarProvider>
  );
}
