"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { useIsMobile } from "@/hooks/use-mobile";
import { Github, Linkedin, Menu as MenuIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import Logo from "@/components/global/logo";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

// Theme Switcher
function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="flex items-center gap-2 opacity-0 pointer-events-none">
                <Sun className="size-4 text-yellow-500" />
                <Switch checked={false} aria-label="Toggle theme" />
                <Moon className="size-4 text-blue-500" />
            </div>
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <div className="flex items-center gap-2">
            <Sun className="size-4 text-yellow-500" />
            <Switch
                checked={isDark}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                aria-label="Toggle theme"
            />
            <Moon className="size-4 text-blue-500" />
        </div>
    );
}

// Responsive Navbar
const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/components", label: "Components" },
    { href: "/docs", label: "Documentation" },
    { href: "/contact", label: "Contact" },
];

const HELPER_LINKS = [
    { href: "https://github.com/Raven412s/gsap_101", label: "Contribute", icon: <Github className="size-5 text-accent-foreground dark:text-accent stroke-1" /> },
    { href: "https://www.linkedin.com/in/ashutosh-sharan-1a9523319/", label: "Know Me", icon: <Linkedin className="size-5 text-accent-foreground dark:text-accent stroke-1" /> }
]

const Header = () => {
    return (
        <header className="sticky top-0 left-0 right-0 z-50">
            <div className="bg-background/95 dark:bg-background/5 w-full backdrop-blur-md">
                <div className="flex items-center justify-center w-full">
                    <nav className={cn(
                        // Base styles
                        "w-full sm:min-w-[800px] sm:max-w-[1200px] px-4 py-2.5",
                        // Visual styles
                        "bg-gradient-to-b from-white/90 via-gray-50/90 to-white/90",
                        "dark:from-zinc-900/90 dark:via-zinc-800/90 dark:to-zinc-900/90",
                        "border border-[rgba(230,230,230,0.7)] dark:border-[rgba(70,70,70,0.7)]",
                        "shadow-lg shadow-black/5",
                        "rounded-b-[28px]",
                        // Animation
                        "transition-all duration-300 ease-in-out"
                    )}>
                        <div className="relative z-10 flex items-center justify-between w-full">
                            {/* Brand and Primary Navigation */}
                            <div className="flex items-center gap-6">
                                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                    <Logo />
                                </Link>

                                <Separator orientation="vertical" className="!h-8 bg-foreground/20" />

                                {/* Desktop Navigation Links */}
                                <nav className="flex items-center justify-center w-[800px]  gap-6">
                                    {NAV_LINKS.map((route) => (
                                        <Link
                                            key={route.href}
                                            href={route.href}
                                            className={cn(
                                                "text-sm font-light text-foreground/80 hover:text-foreground",
                                                "transition-colors duration-200"
                                            )}
                                        >
                                            {route.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Helper Links */}
                            <div className="flex items-center gap-6">
                                <Separator orientation="vertical" className="!h-8 bg-foreground/20" />

                                <nav className="flex items-center gap-4">
                                    {HELPER_LINKS.map((route) => (
                                        <Link
                                            target="_blank"
                                            key={route.href}
                                            href={route.href}
                                            title={route.label}
                                            className={cn(
                                                "text-accent hover:text-foreground",
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
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
