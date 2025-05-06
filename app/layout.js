import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

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
      <h1 className={'text-base sm:text-lg textGradient ' + fugaz.className}>Daily Smiley</h1>
      <div className="flex items-center justify-between">
        PLACEHOLDER CTA || STATS
      </div>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <p className={'text-indigo-500 ' + fugaz.className}>Created with 💙</p>
    </footer>
  )

  return (
    <html lang="en">
      <body
        className={ 'w-full max-width-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
