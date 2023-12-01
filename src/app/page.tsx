import Image from 'next/image'
import Table from './ui/general/table'
import TableBodyProject from './ui/projects/tableData'
import { fetchProjectsFilter } from './lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const tableHeader = [
    {
      name: "Project name",
      isSrOnly: false,
    },
    {
      name: "Status",
      isSrOnly: false,
    },
    {
      name: "Partners",
      isSrOnly: false,
    },
    {
      name: "Bean",
      isSrOnly: false,
    },
    {
      name: "Options",
      isSrOnly: true,
    },
  ]
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const projects = await fetchProjectsFilter({currentPage});

  return (
    <main className='w-full'>
      <div className="">
      <Table query={query} currentPage={currentPage} headers={tableHeader} >
        <TableBodyProject projects={projects}/>
      </Table>
      </div>
    </main>
  )
}

