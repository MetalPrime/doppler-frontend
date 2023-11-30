import { poppins } from "./fonts";
import Image from 'next/image';


export default function Logo() {
    return (    <div
        className={`${poppins.className} flex items-center leading-none text-white flex-col justify-left items-start gap-2 inline-flex`}
      >
        <Image src="/Logo.svg" alt={"Doppler Logo"} width={250} height={25}  />
        <p className="text-zinc-500 text-xs font-medium">V.01</p>
      </div>);
}