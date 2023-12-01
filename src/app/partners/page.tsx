import { fetchPartnerPages, fetchPartnersFilter } from "../lib/data";
import Table from "../ui/general/table";
import { CreatePartner } from "../ui/partners/buttons";
import TableBodyPartner from "../ui/partners/tableData";

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
            name: "Partners name",
            isSrOnly: false,
        },
        {
            name: "Type",
            isSrOnly: false,
        },
        {
            name: "Options",
            isSrOnly: true,
        },
    ]
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const partners = await fetchPartnersFilter({ currentPage, query });
    const totalPages = await fetchPartnerPages(query);


    return (
        <main className='w-full'>
            <div className="">
                <CreatePartner/>
                <Table query={query} currentPage={currentPage} headers={tableHeader} totalPages={totalPages}>
                    <TableBodyPartner partners={partners} />
                </Table>
            </div>
        </main>
    )
}