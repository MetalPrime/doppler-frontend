'use client';

import { UilBooks, UilUsersAlt, UilFlower, UilBug, UilArrowRight } from '@iconscout/react-unicons'
import clsx from 'clsx';
import Link from 'next/link';

import { usePathname } from "next/navigation";

const links = [
    { name: 'Projects', href: '/', icon: UilBooks },
    { name: 'Partners', href: '/partners', icon: UilUsersAlt },
    { name: 'Beans', href: '/beans', icon: UilFlower },
    { name: 'Plagues', href: '/plagues', icon: UilBug },
];

export default function NavLinks() {
    const pathname = usePathname();
    console.log(pathname);
    return (<>
        {
            links.map(link => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        href={link.href}
                        key={link.name}
                        className={clsx("w-full h-11 p-5 bg-green-300 rounded-lg justify-left gap-4 items-center flex text-green-600 hover:bg-green-400 hover:text-white", 
                        { 'bg-green-400 text-white': pathname == link.href },)}
                    >

                        <LinkIcon className="w-6 " />
                        <p className="hidden md:block ">{link.name}</p>
                        <div className=" hidden md:flex grow justify-end">
                            <UilArrowRight />
                        </div>

                    </Link>);
            })
        }
    </>);
}