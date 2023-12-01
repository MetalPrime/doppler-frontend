import Image from 'next/image';
import { UpdateProject, DeleteProject } from '../projects/buttons';
import { ReactElement } from 'react';
import clsx from 'clsx';
import { ITable, ITableHeader } from '@/app/lib/interfaces';
import Pagination from './pagination';
import Search from './search';
import { projects } from '@/app/lib/placeholder_data';

export default async function Table({
    query,
    currentPage,
    headers,
    totalPages,
    children
}: ITable) {


    return (
        <div className="mt-6 flex">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-200 dark:bg-gray-500 p-2 md:pt-5">
                    <Search placeholder={'Search by name'} />
                    <div className="md:hidden">
                        {projects?.map((project) => (
                            <div
                                key={project.id}
                                className="mb-2 w-full rounded-md bg-white dark:bg-black p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{project.name}</p>
                                        </div>
                                        <p className="text-sm text-gray-500 dark:text-gray-50">{project.status}</p>
                                    </div>
                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div>
                                        <p className="text-xl font-medium">
                                            {project.bean_id}
                                        </p>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                    <UpdateProject id={project.id}/>
                                    <DeleteProject id={project.id}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 dark:text-gray-200 md:flex md:flex-col ">
                        <thead className="rounded-lg text-left text-sm font-normal w-full">
                            <tr className='w-full flex flex-row justify-between'>
                                {headers.map(header =>
                                    <TableHeader key={header.name} name={header.name} isSrOnly={header.isSrOnly} />)}
                            </tr>
                        </thead>
                        <tbody className="w-full bg-white dark:bg-black">
                            {children}
                        </tbody>
                    </table>
                </div>
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}

export function TableHeader({ name, isSrOnly }: ITableHeader) {
    return (<th scope="col" className={clsx("px-4 py-5 font-medium sm:pl-6", { 'relative pl-6': isSrOnly })}>
        {isSrOnly ? <span className="sr-only">{name}</span> : name}
    </th>);
}