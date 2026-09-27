import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Lhutz Nazirin",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <header className="border-b border-black">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
            <Link href="/" className="font-bold">
              Lhutz Nazirin
            </Link>

            <div className="flex gap-5 text-sm">
              <Link href="/about" className="hover:underline">
                About
              </Link>

              <Link href="/education" className="hover:underline">
                Education
              </Link>

              <Link href="/contact" className="hover:underline">
                Contact
              </Link>

              <Link href="/ratings" className="hover:underline">
                Ratings
              </Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}