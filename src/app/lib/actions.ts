'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { Partner, Project } from './definitions';
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

export async function deleteProject(id: string) {
    try {
        await fetch(`http://localhost:8080/project/delete?id=${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },

        }).then(() => {
            console.log("Update Succesful")


        })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Delete Project.',
          };
    }
    revalidatePath('/');
    redirect('/');
  }

  const PartnerSchema = z.object({
    name: z.string(),
    type: z.enum(['NATURAL','JURIDICA']),
    description: z.string(),
});

export async function createPartner(formData: FormData) {
    console.log(formData);
    const { name, type, description } = PartnerSchema.parse({
        name: formData.get('name'),
        type: formData.get('type'),
        description: formData.get('description'),
    })

    type OmitPartner = Omit<Partner, 'id'>;


    const partner: OmitPartner = {
        type: type,
        description: description,
        name: name,
    }

    try {
        await fetch(`http://localhost:8080/partner/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(partner)

        }).then(() => {
            console.log("Submit Partner Succesful")


        })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Partner.',
          };
    }

    revalidatePath('/partners');
    redirect('/partners');
}

export async function updatePartner(id:string,formData: FormData) {
    console.log(formData);
    const { name, type, description } = PartnerSchema.parse({
        name: formData.get('name'),
        type: formData.get('type'),
        description: formData.get('description'),
    })

    type OmitPartner = Omit<Partner, 'id'>;


    const partner: OmitPartner = {
        type: type,
        description: description,
        name: name,
    }

    try {
        await fetch(`http://localhost:8080/partner/edit?id=${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(partner)

        }).then(() => {
            console.log("Update Succesful")


        })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Update Partner.',
          };
    }

    revalidatePath('/partners');
    redirect('/partners');
}

export async function deletePartner(id: string) {
    try {
        await fetch(`http://localhost:8080/partner/delete?id=${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },

        }).then(() => {
            console.log("Delete Succesful")


        })
    } catch (error) {
        return {
            message: 'Database Error: Failed to Delete Partner.',
          };
    }
    revalidatePath('/partners');
    redirect('/partners');
  }