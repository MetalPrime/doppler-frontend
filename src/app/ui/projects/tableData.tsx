import { Project } from "@/app/lib/definitions";
import { DeleteProject, UpdateProject } from "./buttons";
import { getBeanName, getPartnersNames } from "@/app/lib/utils";

export default async function TableBodyProject({projects}: {projects: Project[]}) {

    return (
        <>
            {
                projects.map(async (project, index) => (
                    <tr key={index} className="w-full flex flex-row flex-wrap">
                        <td scope="col" className="whitespace-normal px-3 py-3 w-2/6  flex flex-col break-all">
                            <p className="text-black text-lg">{project.name}</p>
                            <p className="text-grey-10 text-sm">{project.description}</p>
                            
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3 w-1/6 ">
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{project.status}</span> 
                        </td>
                        <td scope="col" className="whitespace-normal px-3 py-3 w-1/6 ">
                            <ul>
                             { (await getPartnersNames(project.partners_id)).map((id,index) => (<li className="text-sm" key={index}>{id}</li>))}
                            </ul>
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3 w-1/6 ">
                            {(await getBeanName(project.bean_id))}
                        </td>
                        <td scope="col" className=" px-3 py-3 w-1/6 flex flex-row justify-between">
                            <UpdateProject id={project.id}/>
                            <DeleteProject id={project.id}/>
                        </td>

                    </tr>
                ))
            }
        </>

    )
}