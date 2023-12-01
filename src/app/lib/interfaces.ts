import { ReactElement } from "react";
import { Project } from "./definitions";

export interface ITableHeader {
    name: string;
    isSrOnly: boolean;
}



export interface ITable {
    query: string;
    currentPage: number;
    projects: Project[];
    headers: ITableHeader[];
    children: React.ReactNode;
    totalPages: number;
}