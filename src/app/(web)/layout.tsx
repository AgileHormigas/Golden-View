import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golden View",
  description: "Discover the best spa in Ghana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://react-icons.github.io/react-icons/icons/fa/"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>

        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className='font-normal'>

              <Header />
              {children}
              < Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>

      </body>
    </html>
  );
}
