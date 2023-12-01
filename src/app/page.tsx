import Table from './ui/general/table'
import TableBodyProject from './ui/projects/tableData'
import { fetchProjectsFilter, fetchProjectsPages } from './lib/data';
import { CreateProject } from './ui/projects/buttons';
import { ExportToExcel } from './ui/projects/export';

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
  const projects = await fetchProjectsFilter({currentPage,query});
  const totalPages = await fetchProjectsPages(query);

  return (
    <main className='w-full'>
      <div className="">
      <CreateProject/>
      <ExportToExcel data={projects}/>
      <Table query={query} currentPage={currentPage} headers={tableHeader}  totalPages={totalPages}>
        <TableBodyProject projects={projects}/>
      </Table>
      </div>
    </main>
  )
}

