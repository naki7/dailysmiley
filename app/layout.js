import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/AuthContext";
import Head from "./head";
import Logout from "@/components/Logout";

const opensans = Open_Sans({
  variable: "--open-sans",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Daily Smiley",
  description: "Keep track of your daily feelings through out the year",
};

export default function RootLayout({ children }) {
  const header =(
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={'/'}>
        <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Daily Smiley</h1>
      </Link>
      <Logout />
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={'text-yellow-600 ' + fugaz.className}>Created by <a className="text-yellow-500 hover:text-yellow-400" href="https://www.nakineves.com" tabIndex="1" target="_blank" rel="noreferrer">Naki Neves</a> 💛</p>
    </footer>
  )

  return (
    <html lang="en">
      <Head/>
      <AuthProvider>
        <body
          className={ 'w-full bg-red-500 max-width-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-yellow-950 ' + opensans.className}
          >
          {header}
          {children}
          {footer}
        </body>
      </AuthProvider>
    </html>
  );
}
