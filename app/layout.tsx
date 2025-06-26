// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Architects_Daughter } from "next/font/google";
import "./globals.css";

const Architects_Daughter_Sans = Architects_Daughter({
    weight: "400",
    variable: "--font-Architects-Daughter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "GSAP_101",
    description: "GSAP_101 is an open-source web app for web developers to discover, copy, and use high-quality GSAP animated UI components, enhancing user interfaces with modern, interactive animations. Perfect for building visually engaging web projects quickly and efficiently.",
    keywords: [
        "GSAP",
        "GSAP components",
        "animated components",
        "web animations",
        "UI components",
        "open source",
        "web development",
        "frontend",
        "user interface",
        "copy GSAP code",
        "GSAP_101"
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en"
            suppressHydrationWarning
            suppressContentEditableWarning
        >
            <body
                suppressHydrationWarning
                suppressContentEditableWarning
                className={`${Architects_Daughter_Sans.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class" // This tells next-themes to add class to <html>
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
