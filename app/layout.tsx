import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";
import NavBar from "@/Modules/@common/layout/NavBar";
import FooterWrapper from "@/Modules/@common/layout/FooterWrapper";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"], // choose needed weights
});

export const metadata: Metadata = {
  title: "BRAXX",
  description:
    "All-electricc. Road-ready. Adventure-proven. Choose betweeen the O3 and the O3 pro to match your speed",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${darkerGrotesque.className} antialiased`}>
        <NavBar />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
