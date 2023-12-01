
import Link from "next/link";
import { Button } from "../general/button";
import { Bean, Partner, Project } from "@/app/lib/definitions";
import MultiSelect from "./multiple_Select";
import { updateInvoice } from "@/app/lib/actions";


export default function Form({ beans, partners, project }: { beans: Bean[], partners: Partner[], project: Project }) {

    const updateProjectWithId = updateInvoice.bind(null, project.id);

    return (
        <form className="" action={updateProjectWithId}>
            <div className="w-full flex flex-col p-4 md:p-6  gap-7 ">
                <div className="w-full justify-start items-startflex-col ">
                    <div className="w-6/12  flex-col justify-center items-start gap-1.5 inline-flex">
                        <label htmlFor="name" className="text-black text-base font-normal ">Project Name</label>
                        <div className="relative w-full">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Write the Project Name"
                                aria-describedby="name-error"
                                required
                                defaultValue={project.name}
                                className="w-full h-9  bg-gray-200 rounded-lg border border-neutral-200" />
                        </div>
                    </div>
                    <div className="w-6/12  flex flex-col justify-center items-start gap-1.5 inline-flex">
                        <label htmlFor="status" className="text-black text-base font-normal ">Status</label>
                        <div className="relative  w-full">
                            <select
                                id="status"
                                name="status"
                                defaultValue={project.status}
                                aria-describedby="name-error"
                                required
                                className="w-full h-9  bg-gray-200 rounded-lg border border-neutral-200" >
                                <option value="" disabled>Select a Status</option>
                                <option value="Propuesta">Propuesta</option>
                                <option value="Aprobación">Aprobación</option>
                                <option value="Planificación">Planificación</option>
                                <option value="Financiamiento">Financiamiento</option>
                                <option value="Ejecución">Ejecución</option>
                                <option value="Monitoreo">Monitoreo</option>
                                <option value="Informe Intermedio">Informe Intermedio</option>
                                <option value="Finalización">Finalización</option>
                                <option value="Evaluación">Evaluación</option>
                                <option value="Publicación">Publicación</option>
                                <option value="Archivado">Archivado</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start gap-1.5 inline-flex ">
                    <label htmlFor="description" className="text-black text-base font-normal">Description</label>
                    <div className="relative w-full ">
                        <input
                            id="description"
                            name="description"
                            type=""
                            placeholder="Write a Description"
                            aria-describedby="name-error"
                            defaultValue={project.description}
                            required
                            className="w-full h-32  bg-gray-200 rounded-lg border border-neutral-200 p-2" />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1.5 inline-flex">
                    <label htmlFor="bean" className="text-black text-base font-normal">Bean Type</label>
                    <div className="relative w-full h-fit">
                        <select
                            id="bean"
                            name="bean"
                            aria-describedby="name-error"
                            required
                            defaultValue={project.bean_id}
                            className="w-full h-9  bg-gray-200 rounded-lg border border-neutral-200 p-2" >
                            <option value="" disabled>Select a Bean</option>
                            {beans && beans.map((bean) => (
                                <option key={bean.id} value={bean.id}>
                                    {bean.name}
                                </option>
                            ))}

                        </select>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-1.5 inline-flex">
                    <label htmlFor="partner" className="text-black text-base font-normal">Partners</label>
                    <div className="relative w-full h-fit">
                        <MultiSelect partners={partners} />
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/"
                        className="flex h-10 items-center rounded-lg bg-gray-100 dark:bg-gray-600 px-4 text-sm font-medium text-gray-600 dark:text-gray-100 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Edit Project</Button>
                </div>
            </div>

        </form>
    );
}