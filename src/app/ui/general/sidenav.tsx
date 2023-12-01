import Link from "next/link";
import Logo from "../logo";
import NavLinks from "./nav_links";
import Image from 'next/image';


export default function SideNav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 rounded-lg bg-green-500 dark:bg-green-300">
            <Link
                className="mb-2 flex items-end justify-start  p-4 md:h-20 sm:h-auto sm:justify-center sm:items-baseline "
                href="/"
            >
                <div className=" text-white dark:text-black w-full ">
                    <Logo />
                </div>
            </Link>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <NavLinks />
                <div className="hidden h-auto w-full grow relative  md:block">
                    <Image className="opacity-50 mix-blend-soft-light" priority={true} src="/patterns/sideNavDetail.svg" alt={"Pattern Ilustration"} width={470} height={639} ></Image>
                </div>
                <div className="hidden md:block absolute bottom-5 w-60">
                    <p className="text-xs whitespace-normal	text-white">“DOPPLER” es un administrador proyectos de investigación, enfocados en el mejoramiento de cultivos de frijol donde se aborden temas como plagas y evaluaciones de comportamiento de las plantas en determinados ambientes.</p>
                    <p className="text-xs whitespace-normal	text-slate-300	">@2023</p>
                </div>
            </div>
        </div>
    )
}