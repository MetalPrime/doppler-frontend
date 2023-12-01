import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProjectsFilter({currentPage,query}:{currentPage: number,query:string}) {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/project/getAllFilter?currentPage=${currentPage}&query=${query}`);
        return data.json();
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all projects.');
    }

}

export async function fetchProjectsPages(query: string) {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/project/totalPages?query=${query}`);
        return data.json();
    } catch (error) {
        
    }
}

export async function fetchBeans(){
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/bean/getAll`);
        return data.json();
    } catch (error) {
        
    }
}

export async function fetchPartners(){
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/partner/getAll`);
        return data.json();
    } catch (error) {
        
    }
}

