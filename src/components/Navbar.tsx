"use client"
import React, { Children } from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"]
})


//Navbar items put down at one place for easy access


interface NavbarItemProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}


export const NavbarItem = ({
    href,
    children,
    isActive
}: NavbarItemProps) => {
    const path=usePathname();
    if(path==href){
        isActive=true;
    }

    if(isActive==true){
        return(

        <Button asChild variant="outline" className='rounded-full bg-black text-amber-50' >

            <Link href={href}>
                {children}
            </Link>
        </Button>
            

        )
    }
    return (
        <Button asChild variant="outline" className='rounded-full border-transparent hover:border-black' >

            <Link href={href}>
                {children}
            </Link>
        </Button>
    )
} 

const NavbarItems = [
    {
        href: "/",
        children: "Home"
    },
    {
        href: "/about",
        children: "About"
    },
    {
        href: "/features",
        children: "Features"
    },
    {
        href: "/pricing",
        children: "Pricing"
    },
    {
        href: "/contact",
        children: "Contact"
    }
]



export const Navbar = () => {
    const pathName = usePathname()
    
    return (
        <nav className='h-20 flex border-b justify-between items-center font-medium bg-white px-6'>
            <Link href="./" className='flex items-center'>
                <span className={cn("text-3xl font-semibold", poppins.className)}>
                    KartFlip

                </span>
            </Link>

            <div className='flex items-center gap-4 hidden lg:flex'>
                {
                    NavbarItems.map((item) => (
                        <NavbarItem key={item.href} href={item.href}>

                            {item.children}
                        </NavbarItem>
                    ))
                }
            </div>

            <div className='flex gap-5'>
                <div>

                    <Button variant="ghost" asChild >
                        <Link href="/login">
                            Login
                        </Link>
                    </Button>
                </div>

            
                <div>

                    <Button variant="ghost" asChild >
                        <Link href="#">
                            Start Selling 
                        </Link>
                    </Button>
                </div>
            </div>


            
        </nav>
    )
}

export default Navbar