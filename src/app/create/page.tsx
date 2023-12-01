import { Metadata } from "next";
import { poppins } from "../ui/fonts";
import Form from "../ui/projects/create_form";
import { fetchBeans, fetchPartners } from "../lib/data";

export const metadata: Metadata = {
    title: 'Created Project',
};

export default async function Page() {
    const beans = await fetchBeans();
    const partners = await fetchPartners();

    return (
        <main className=" w-full h-fit px-9 py-5 bg-white rounded-3xl shadow flex-col justify-start items-start gap-5 ">
            <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl text-black text-xl font-semibold`}>Create New Project</h1>
            <Form beans={beans} partners={partners}/>
        </main>
    )
}