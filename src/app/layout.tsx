import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/page";
import ClientLayout from "./Components/ClientLayout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Drshamyclinic",
  description:
    "الأستاذ الدكتور عبد السلام الشامي أستاذ وأستشاري الأمراض الباطنية وأمراض الجهاز التنفسي وحساسية الصدر كلية طب الأزهر زميل كلية أطباء الصدر الأمريكية M.D,FCCP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="ltr">
      <link rel="icon" href="./faviconw.ico" sizes="32x32" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />

        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
}
