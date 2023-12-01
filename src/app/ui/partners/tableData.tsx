import { Partner } from "@/app/lib/definitions";
import { DeletePartner, UpdatePartner } from "./buttons";

export default function TableBodyPartner({partners}: {partners: Partner[]}) {

    return (
        <>
            {
                partners.map((partner, index) => (
                    <tr key={index}>
                        <td scope="col" className="whitespace-nowrap px-3 py-3 flex flex-col">
                            <p className="">{partner.name}</p>
                            
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3">
                            {partner.type}
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3">
                            <UpdatePartner id={partner.id}/>
                            <DeletePartner id={partner.id}/>
                        </td>

                    </tr>
                ))
            }
        </>

    )
}