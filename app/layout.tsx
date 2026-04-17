import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Albert_Sans } from "next/font/google";
import printForgeLogo from "@/public/printforgeLogo.svg";
import printForgeLogoMobile from "@/public/printforgeLogoMobile.svg";

const albert_Sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albert_Sans.className}>
        <div className="min-h-full flex flex-col scrollbar-hidden">
          <header className="w-full">
            <nav className="flex justify-between px-6 py-4">
              <div>
                <Link href="/">
                  <Image
                    src={printForgeLogo}
                    alt="PrintForge Logo"
                    className=" hidden md:block h-16"
                  />
                  <Image
                    src={printForgeLogoMobile}
                    alt="PrintForge Logo Mobile"
                    className=" md:hidden h-16"
                  />
                </Link>
              </div>
              <ul className="flex items-center gap-2.5">
                <li className="text-sm uppercase cursor-pointer">
                  <Link>3D Models</Link>
                </li>
                <li className="text-sm uppercase cursor-pointer">
                  <Link>About</Link>
                </li>
              </ul>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
