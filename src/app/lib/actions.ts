'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { Project } from './definitions';
import { redirect } from 'next/navigation';


const FormSchema = z.object({
    name: z.string(),
    status: z.enum(['Propuesta', 'Aprobación', 'Planificación', 'Financiamiento', 'Ejecución', 'Monitoreo', 'Informe Intermedio', 'Finalización', 'Evaluación', 'Publicación', 'Archivado']),
    description: z.string(),
    bean: z.string(),
    partners_id: z.string().array(),
});

const CreatePartner = FormSchema.omit({ partners_id: true });

export async function createProject(formData: FormData) {
    console.log(formData);
    const { name, status, description, bean } = CreatePartner.parse({
        name: formData.get('name'),
        status: formData.get('status'),
        description: formData.get('description'),
        bean: formData.get('bean'),
    })

    type OmitProject = Omit<Project, 'id'>;


    const project: OmitProject = {
        status: status,
        partners_id: [],
        description: description,
        name: name,
        bean_id: bean,
    }

    try {
        await fetch(`http://localhost:8080/project/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project)

        }).then(() => {
            console.log("Submit Succesful")


        })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Project.',
          };
    }

    revalidatePath('/');
    redirect('/');
}



export async function updateInvoice(id:string,formData: FormData) {
    console.log(formData);
    const { name, status, description, bean } = CreatePartner.parse({
        name: formData.get('name'),
        status: formData.get('status'),
        description: formData.get('description'),
        bean: formData.get('bean'),
    })

    type OmitProject = Omit<Project, 'id'>;


    const project: OmitProject = {
        status: status,
        partners_id: [],
        description: description,
        name: name,
        bean_id: bean,
    }

    try {
        await fetch(`http://localhost:8080/project/edit?id=${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project)

        }).then(() => {
            console.log("Update Succesful")


        })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Update Project.',
          };
    }

    revalidatePath('/');
    redirect('/');
}
