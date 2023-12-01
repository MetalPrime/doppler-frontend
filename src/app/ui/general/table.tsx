import Image from 'next/image';
import { UpdateProject, DeleteProject } from '../projects/buttons';
import { ReactElement } from 'react';
import clsx from 'clsx';
import { ITable, ITableHeader } from '@/app/lib/interfaces';
import Pagination from './pagination';
import Search from './search';

export default async function Table({
    query,
    currentPage,
    headers,
    totalPages,
    children
}: ITable) {


    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 dark:bg-gray-500 p-2 md:pt-0">
                    <Search placeholder={'Search by name'} />
                    <div className="md:hidden">
                    </div>
                    <table className="hidden min-w-full text-gray-900 dark:text-gray-200 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                {headers.map(header =>
                                    <TableHeader key={header.name} name={header.name} isSrOnly={header.isSrOnly} />)}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-black">
                            {children}
                        </tbody>
                    </table>
                </div>
                <Pagination totalPages={totalPages}/>
            </div>
        </div>
    );
}

export function TableHeader({ name, isSrOnly }: ITableHeader) {
    return (<th scope="col" className={clsx("px-4 py-5 font-medium sm:pl-6", { 'relative pl-6': isSrOnly })}>
        {isSrOnly ? <span className="sr-only">{name}</span> : name}
    </th>);
}