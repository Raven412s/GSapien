// app/page.js
'use client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    return (
        <div className="container p-5">Hello UI Devs</div>
    )
}
