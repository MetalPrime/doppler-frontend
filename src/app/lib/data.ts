import { unstable_noStore as noStore } from 'next/cache';


export async function fetchProjects() {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/project/getAll`);
        return data.json();
    } catch (error) {

    }
}

export async function fetchProjectsFilter({ currentPage, query }: { currentPage: number, query: string }) {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/project/getAllilter?currentPage=${currentPage}&query=${query}`);
        return data.json();
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all projects.');
    }

}

export async function fetchProjectById(id: string) {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/project/getById?id=${id}`);
        return data.json();
    } catch (error) {

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

export async function fetchBeans() {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/bean/getAll`);
        return data.json();
    } catch (error) {

    }
}

export async function fetchPartners() {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/partner/getAll`);
        return data.json();
    } catch (error) {

    }
}

export async function fetchPartnersFilter({ currentPage, query }: { currentPage: number, query: string }) {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/partner/getAllFilter?currentPage=${currentPage}&query=${query}`);
        return data.json();
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all partners.');
    }

}

export async function fetchPartnerById(id: string) {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/partner/getById?id=${id}`);
        return data.json();
    } catch (error) {

    }
}

export async function fetchPartnerPages(query: string) {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/partner/totalPages?query=${query}`);
        return data.json();
    } catch (error) {

    }
}