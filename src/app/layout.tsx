import { Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: "REVIVE | music - writing - humanities",
  description: "A collection of collections",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fraunces.variable}>
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
