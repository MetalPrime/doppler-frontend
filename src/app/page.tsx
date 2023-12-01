import Table from './ui/general/table'
import TableBodyProject from './ui/projects/tableData'
import { fetchProjects, fetchProjectsFilter, fetchProjectsPages } from './lib/data';
import { CreateProject } from './ui/projects/buttons';
import { ExportToExcel } from './ui/projects/export';
import { poppins } from './ui/fonts';

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
  const projects = await fetchProjectsFilter({ currentPage, query });
  const totalProjects = await fetchProjects();
  const totalPages = await fetchProjectsPages(query);

  return (
    <main className='w-full'>
      <div className="rounded-md bg-gray-50 dark:bg-gray-500 p-5  md:pt-10">
        <div className='flex flex-row	justify-between'>
          <h1 className={`${poppins.className} mb-4 text-xl md:text-2xl text-black text-xl font-semibold`}>Projects</h1>
          <div className='w-fit flex flex-row'>
            <CreateProject />
            <ExportToExcel data={totalProjects} />
          </div>
        </div>

        <Table  projects={projects}  query={query} currentPage={currentPage} headers={tableHeader} totalPages={totalPages}>
          <TableBodyProject projects={projects} />
        </Table>
      </div>
    </main>
  )
}

