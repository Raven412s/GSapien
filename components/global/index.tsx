"use client";

import React from "react";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Menu as MenuIcon, Sun, Moon } from "lucide-react";

// Theme Switcher
function ThemeSwitcher() {
    const { theme, setTheme, resolvedTheme } = useTheme();
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
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const isMobile = useIsMobile();

    return (
        <nav className="w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="font-bold text-lg">GSAP Animations</div>
                {isMobile ? (
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <MenuIcon className="size-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="p-0 w-64">
                            <div className="flex flex-col gap-4 p-6">
                                {NAV_LINKS.map((link) => (
                                    <a key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                                        {link.label}
                                    </a>
                                ))}
                                <div className="mt-4">
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <div className="flex items-center gap-6">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {NAV_LINKS.map((link) => (
                                    <NavigationMenuItem key={link.href}>
                                        <NavigationMenuLink href={link.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
                                            {link.label}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                        <ThemeSwitcher />
                    </div>
                )}
            </div>
        </nav>
    );
}
