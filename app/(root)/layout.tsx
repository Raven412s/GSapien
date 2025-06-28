
import { Footer } from "@/components/global";
import Header from "@/components/landing/header";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadat: Metadata = {
    title: {
        template: "GSapien: For “humans who animate”",
        default: "GSapien"
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
