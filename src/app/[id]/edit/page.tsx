import { fetchBeans, fetchPartners, fetchProjectById } from "@/app/lib/data";
import { poppins } from "@/app/ui/fonts";
import Form from "@/app/ui/projects/edit_form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Edit Project',
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    const beans = await fetchBeans();
    const partners = await fetchPartners();
    const specificProject = await fetchProjectById(id);

    return (
        <main className=" w-full h-fit px-9 py-5 bg-white rounded-3xl shadow flex-col justify-start items-start gap-5 ">
            <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl text-black text-xl font-semibold`}>Create New Project</h1>
            <Form beans={beans} project={specificProject} partners={partners}/>
        </main>
    )
}
