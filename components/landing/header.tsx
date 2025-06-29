"use client";
import Logo from "@/components/global/logo";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeSwitch from "../global/theme-switch/theme-switch";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

// Theme Switcher
function ThemeSwitcher() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <ThemeSwitch />
        );
    }

    return (
        <ThemeSwitch onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
    );
}

// Responsive Navbar
const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/docs/components/animated-text-reveal", label: "Components" },
    { href: "/docs/getting-started", label: "Documentation" },
    { href: "/contact", label: "Contact" },
];

const HELPER_LINKS = [
    { href: "https://github.com/Raven412s/gsap_101", label: "Contribute", icon: <FaGithub className="size-5 text-accent-foreground dark:text-accent stroke-1" /> },
    { href: "https://www.linkedin.com/in/ashutosh-sharan-1a9523319/", label: "Know Me", icon: <FaLinkedin className="size-5 text-accent-foreground dark:text-accent stroke-1" /> }
]

const Header = () => {
    return (
        <>
            {/* Mobile PRO Banner */}
            {/* <div className="sm:hidden w-full p-2.5 bg-background/90 dark:bg-background/5 ">
                <Link href={"#"} target={"_blank"} className="flex items-center justify-center gap-2 ">
                    <span className="flex items-center gap-2 font-sans font-semibold">
                        <PartyPopper className="size-5 "/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                            Explore New Components
                        </span>
                    </span>
                    <div className="group relative inline-flex items-center gap-2 px-3 py-1 text-sm rounded-lg bg-background/90 dark:bg-background/5 transition-colors">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-fuchsia-400 via-purple-500 to-pink-400 group-hover:opacity-80 blur-sm transition-opacity duration-500 "/>
                        <div className="relative z-10 flex items-center gap-2 text-background">
                            <span className="font-semibold">
                                GSapien Pro
                            </span>
                            <ArrowUpRight className="size-4"/>
                        </div>
                    </div>
                </Link>
            </div> */}

            {/* Dynamic & Responsive Navbar */}
            <header className="sticky top-0 left-0 right-0 z-50">
                <div className="bg-background/90 dark:bg-background/5 w-full ">
                    <div className="flex items-center justify-center w-full flex-col">
                        <div className={cn(
                            // Position
                            "relative",
                            // Base styles
                            "w-full sm:min-w-[760px] sm:max-w-[1200px] px-4 py-2.5",
                            // Visual styles
                            "bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90",
                            "dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90",
                            "border border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]",
                            "shadow-lg shadow-black/5",
                            "rounded-b-[28px]",
                            // Animation
                            "transition-all duration-300 ease-in-out"
                        )}>
                            <div className="relative z-10 flex items-center justify-between w-full gap-2">
                                {/* Brand and Primary Navigation */}
                                <div className="flex items-center gap-6">
                                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                        <Logo />
                                        <span className="font-bold text-2xl">GSapien</span>
                                    </Link>

                                    <Separator orientation="vertical" className="hidden sm:block  !h-8 bg-foreground/20" />

                                    {/* Desktop Navigation Links */}
                                    <nav className="hidden sm:flex items-center  gap-4">
                                        {NAV_LINKS.map((route) => (
                                            <ViewTransitionsLink
                                                key={route.href}
                                                href={route.href}
                                                className={cn(
                                                    " font-light text-foreground/80 hover:text-foreground",
                                                    "transition-colors duration-200"
                                                )}
                                            >
                                                <span className="flex items-center gap-2">
                                                    {route.label}
                                                    {route.label === "Documentation" && (
                                                        <Badge variant="brand" >New</Badge>
                                                    )}
                                                </span>
                                            </ViewTransitionsLink>
                                        ))}
                                    </nav>
                                </div>

                                {/* Helper Links */}
                                <div className="flex items-center gap-3">
                                    <Separator orientation="vertical" className="!h-8 bg-foreground/20" />

                                    <nav className="flex items-center gap-4">
                                        {HELPER_LINKS.map((route) => (
                                            <Link
                                                target="_blank"
                                                key={route.href}
                                                href={route.href}
                                                title={route.label}
                                                className={cn(
                                                    "",
                                                    "transition-colors duration-200"
                                                )}
                                            >
                                                {route.icon}
                                            </Link>
                                        ))}
                                    </nav>

                                    <Separator orientation="vertical" className="!h-8 bg-foreground/20" />

                                    {/* Theme Switcher */}
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
