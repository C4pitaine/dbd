import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./globals.scss";
import NavBar from "../../components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dead By Daylight",
  description: "Rappel NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
        
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
            <NavBar />
        </header>
        {children}
      </body>
    </html>
  );
}
