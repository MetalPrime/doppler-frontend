import { Partner } from "@/app/lib/definitions";
import { DeletePartner, UpdatePartner } from "./buttons";

export default function TableBodyPartner({partners}: {partners: Partner[]}) {

    return (
        <>
            {
                partners.map((partner, index) => (
                    <tr key={index} className="w-full flex flex-row flex-wrap">
                        <td scope="col" className="whitespace-normal px-3 py-3 w-2/6  flex flex-col break-all">
                            <p className="">{partner.name}</p>
                            
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3 w-1/6">
                            {partner.type}
                        </td>
                        <td scope="col" className="px-3 py-3 w-1/6 flex flex-row justify-between">
                            <UpdatePartner id={partner.id}/>
                            <DeletePartner id={partner.id}/>
                        </td>

                    </tr>
                ))
            }
        </>

    )
}