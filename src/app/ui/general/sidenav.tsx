import Link from "next/link";
import Logo from "../logo";
import NavLinks from "./nav_links";
import Image from 'next/image';


export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 rounded-lg bg-green-500 dark:bg-green-300">
            <Link
                className="mb-2 flex h-10 items-end justify-start  p-4 md:h-20"
                href="/"
            >
                <div className="w-32 text-white dark:text-black md:w-40">
                    <Logo />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow relative  md:block">
                    <Image className="opacity-50 mix-blend-soft-light" priority={true} src="/patterns/sideNavDetail.svg" alt={"Pattern Ilustration"} width={470} height={639} ></Image>
                </div>
            </div>
        </div>
    )
}