"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import "@/lib/i18n"
import { useTranslation } from "react-i18next"
import { Globe, ChevronDown, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Menü Verisi
const getMenuData = (t) => [
    {
        title: t('nav.health_checkgers'),
        href: "/health-check",
        items: [
            { title: t('nav.symptoms'), href: "/health-check/check-symptoms" },
            { title: t('nav.conditions'), href: "/health-check/vitamin-d-checker" },
            { title: "Check Health Index", href: "/health-check/check-health-index" },
            { title: "BMI Calculator", href: "/health-check/bmi-calculator" }
        ]
    },
    {
        title: t('nav.self_tests'),
        href: "/self-tests",
        items: [
            { title: t('nav.iron'), href: "/self-tests/iron-deficiency" },
            { title: t('nav.thyroid'), href: "/self-tests/under-active-thyroid" },
            { title: "Bowel Health (FOB)", href: "/self-tests/bowel-health" },
        ]
    },
    {
        title: t('nav.our_story'),
        href: "/our-story",
    },
    {
        title: t('nav.health_hub'),
        href: "/health-hub",
    },
    {
        title: t('nav.login'),
        href: "/",
    },
    {
        title: t('nav.contact'),
        href: "/contact-us",
    }
]

export function Header() {
    const { t, i18n } = useTranslation();
    const [mounted, setMounted] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false); // Mobil menü state

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const menuData = getMenuData(t);

    if (!mounted) return null;

    return (
        // GÜNCELLEME BURADA: fixed, top-0, z-50 eklendi.
        // shadow-sm: Hafif bir gölge ekler, sayfa ile header'ı ayırır.
        <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between py-3 border-b px-4 md:px-6 bg-white shadow-sm transition-all duration-300">

            {/* 1. LOGO (SOL TARAFTA SABİT) */}
            <Link href="/" className="flex-shrink-0 z-50">
                <Image
                    src="/sliex-logo.png"
                    width={170}
                    height={40}
                    alt="Logo"
                    priority
                    className="w-[140px] md:w-[170px] h-auto object-contain"
                />
            </Link>

            {/* 2. MASAÜSTÜ MENÜ (SAĞ TARAFTA - SADECE >1300PX) */}
            <div className="hidden min-[1300px]:flex items-center gap-8">
                {/* Desktop Navigation */}
                <NavigationMenu>
                    <NavigationMenuList>
                        {menuData.map((menu, index) => (
                            <NavigationMenuItem key={index}>
                                {menu.items ? (
                                    <>
                                        <Link href={menu.href} className="no-underline">
                                            <NavigationMenuTrigger className="h-9 px-3 cursor-pointer text-sm font-semibold uppercase hover:bg-transparent">
                                                {menu.title}
                                            </NavigationMenuTrigger>
                                        </Link>
                                        <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                                                {menu.items.map((subItem, subIndex) => (
                                                    <ListItem
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        title={subItem.title}
                                                    >
                                                        {subItem.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={menu.href}
                                            className={cn(
                                                navigationMenuTriggerStyle(),
                                                "h-9 px-3 font-semibold text-sm uppercase cursor-pointer"
                                            )}
                                        >
                                            {menu.title}
                                        </Link>
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Desktop Dil Seçimi */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="gap-2 font-semibold text-xs h-8">
                            <Globe className="h-3.5 w-3.5" />
                            {i18n.language === 'tr' ? 'TR' : 'EN'}
                            <ChevronDown className="h-3 w-3 opacity-50" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => changeLanguage('tr')}>TR Türkçe</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => changeLanguage('en')}>EN English</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* 3. MOBİL MENÜ TRIGGER (SAĞ TARAFTA - SADECE <1300PX) */}
            <div className="min-[1300px]:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="-mr-2">
                            <Menu className="h-7 w-7" />
                            <span className="sr-only">Menüyü Aç</span>
                        </Button>
                    </SheetTrigger>
                    
                    {/* Side Menu İçeriği - flex-col ve h-full ile yapıyı dikeyde yayıyoruz */}
                    {/* z-[100]: Side menu header'ın da üstünde görünsün diye z-index artırıldı */}
                    <SheetContent side="left" className="flex flex-col h-full w-[320px] sm:w-[380px] p-0 z-[100]">
                        
                        {/* A. Mobil Header (Logo) */}
                        <SheetHeader className="p-6 border-b">
                            <SheetTitle className="text-left">
                                <Image
                                    src="/sliex-logo.png"
                                    width={130}
                                    height={35}
                                    alt="Logo Mobile"
                                    className="w-[130px] h-auto object-contain"
                                />
                            </SheetTitle>
                        </SheetHeader>
                        
                        {/* B. Mobil Linkler (Scroll edilebilir orta alan) */}
                        <div className="flex-1 overflow-y-auto py-2">
                            <Accordion type="single" collapsible className="w-full">
                                {menuData.map((menu, index) => (
                                    // Alt çizgili (border-b) ve geniş paddingli (py-4) yapı
                                    <div key={index} className="border-b border-gray-100 last:border-0 px-6">
                                        {menu.items ? (
                                            <AccordionItem value={`item-${index}`} className="border-b-0">
                                                <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline text-gray-800">
                                                    {menu.title}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <div className="flex flex-col gap-4 pb-4 pl-2">
                                                        {menu.items.map((subItem, subIndex) => (
                                                            <Link 
                                                                key={subIndex} 
                                                                href={subItem.href}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-sm font-medium text-gray-600 hover:text-primary flex items-center gap-2"
                                                            >
                                                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                                                                {subItem.title}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ) : (
                                            <Link 
                                                href={menu.href} 
                                                onClick={() => setIsOpen(false)}
                                                className="block py-4 text-base font-semibold text-gray-800 hover:text-primary"
                                            >
                                                {menu.title}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </Accordion>
                        </div>

                        {/* C. Mobil Footer (Dil Seçimi - En Altta) */}
                        <div className="border-t p-6 bg-gray-50 mt-auto">
                            <div className="flex flex-col gap-3">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {t('language') || "Language / Dil"}
                                </span>
                                <div className="grid grid-cols-2 gap-3">
                                    <Button 
                                        variant={i18n.language === 'tr' ? "default" : "outline"}
                                        onClick={() => changeLanguage('tr')}
                                        className="w-full justify-center"
                                    >
                                        Türkçe
                                    </Button>
                                    <Button 
                                        variant={i18n.language === 'en' ? "default" : "outline"}
                                        onClick={() => changeLanguage('en')}
                                        className="w-full justify-center"
                                    >
                                        English
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </SheetContent>
                </Sheet>
            </div>

        </div>
    )
}

const ListItem = React.forwardRef(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href || "#"}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default Header;