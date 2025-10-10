import { Montserrat, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "W&C Electrical",
  description: "Powering Progress with Precision & Safety",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <body className="antialiased w-full sm:w-[86%] sm:ml-[7%] relative font-[family-name:var(--font-open-sans)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}