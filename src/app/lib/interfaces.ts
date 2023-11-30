import { ReactElement } from "react";

export interface ITableHeader {
    name: string;
    isSrOnly: boolean;
}



export interface ITable {
    query: string;
    currentPage: number;
    headers: ITableHeader[];
    children: React.ReactNode
}