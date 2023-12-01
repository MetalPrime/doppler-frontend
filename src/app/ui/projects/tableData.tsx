import { Project } from "@/app/lib/definitions";
import { DeleteProject, UpdateProject } from "./buttons";

export default function TableBodyProject({projects}: {projects: Project[]}) {

    return (
        <>
            {
                projects.map((project, index) => (
                    <tr key={index} className="w-full flex flex-row flex-wrap">
                        <td scope="col" className="whitespace-normal px-3 py-3 w-2/6  flex flex-col break-all">
                            <p className="text-black text-lg">{project.name}</p>
                            <p className="text-grey-10 text-sm">{project.description}</p>
                            
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3 w-1/6 ">
                            {project.status}
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3 w-1/6 ">
                            <ul>
                            {project.partners_id.map((id,index) => (<li key={index}>{id}</li>))}
                            </ul>
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3 w-1/6 ">
                            {project.bean_id}
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