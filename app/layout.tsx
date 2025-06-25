// app/layout.tsx
import type { Metadata } from "next";
import { Architects_Daughter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/global";
import { ThemeProvider } from "next-themes";

const Architects_Daughter_Sans = Architects_Daughter({
  weight: "400",
  variable: "--font-Architects-Daughter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GSAP-101",
  description: "Open source library for gsap components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${Architects_Daughter_Sans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class" // This tells next-themes to add class to <html>
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
