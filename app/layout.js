import { Montserrat, Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable}`}
    >
      <Head>
        <title>W&C Electrical</title>
        <meta
          name="description"
          content="Powering Progress with Precision & Safety"
        />
            <meta name="google-site-verification" content="aMNposdDi4Pp7h8SlRpVHu5FAHHQA_U9P_TaYrlP0VQ" />
      </Head>

      <body className="antialiased w-full sm:w-[86%] sm:ml-[7%] relative font-[family-name:var(--font-open-sans)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
