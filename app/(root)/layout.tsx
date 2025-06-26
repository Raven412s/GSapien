
import { Footer } from "@/components/global";
import Header from "@/components/landing/header";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadat: Metadata = {
    title: {
        template: "GSAP_101 = Open Source Components",
        default: "GSAP_101"
    }
}

export default function HomeLayout({children}:PropsWithChildren) {
  return (
    <>
        <Header/>
        <main className="relative pt-0">
        {children}
        </main>
        <Footer/>
    </>
  )
}
