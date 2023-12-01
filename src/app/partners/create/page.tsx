import { poppins } from "@/app/ui/fonts";
import Form from "@/app/ui/partners/create_form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Created Partner',
};

export default async function Page() {


    return (
        <main className=" w-full h-fit px-9 py-5 bg-white rounded-3xl shadow flex-col justify-start items-start gap-5 ">
            <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl text-black text-xl font-semibold`}>Create New Project</h1>
            <Form/>
        </main>
    )
}