import { unstable_noStore as noStore } from 'next/cache';

const ITEMS_PER_PAGE = 10;

export async function fetchProjectsFilter({currentPage}:{currentPage: number,}) {
    noStore();

    try {
        const data = await fetch(`http://localhost:8080/project/getAllFilter?currentPage=${currentPage}`);
        return data.json();
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all projects.');
    }

}

