// This file contains type definitions for your data.

export type Partner = {
    id: string;
    type: "NATURAL" | "JURIDICA";
    name: string;
    description: string;
}

export type Bean = {
    id: string;
    name: string;
    scientificName: string;
    originRegion: string;
}

export type Status = 'Propuesta' | 'Aprobación'  | 'Planificación'  | 'Financiamiento'  | 'Ejecución' | 'Monitoreo' | 'Informe Intermedio' | 'Finalización' | 'Evaluación' | 'Publicación' | 'Archivado';

export type Project = {
    id: string;
    status : Status;
    partners_id : string[];
    description: string;
    name: string;
    bean_id: string;
}