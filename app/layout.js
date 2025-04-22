import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daily Smiley",
  description: "Keep track of your daily feelings through out the year",
};

export default function RootLayout({ children }) {
  const header =(
    <header>
      head
    </header>
  )

  const footer = (
    <footer>
      foot
    </footer>
  )

  return (
    <html lang="en">
      <body
        className={ 'w-full max-width-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ' + `${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
