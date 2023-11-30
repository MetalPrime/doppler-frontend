import { Project } from "@/app/lib/definitions";
import { DeleteProject, UpdateProject } from "./buttons";

export default function TableBodyProject({projects}: {projects: Project[]}) {

    return (
        <>
            {
                projects.map((project, index) => (
                    <tr key={index}>
                        <td scope="col" className="whitespace-nowrap px-3 py-3 flex flex-col">
                            <p className="">{project.name}</p>
                            <p className="">{project.description}</p>
                            
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3">
                            {project.status}
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3">
                            <ul>
                            {project.partners_id.map((id,index) => (<li key={index}>{id}</li>))}
                            </ul>
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3">
                            {project.bean_id}
                        </td>
                        <td scope="col" className="whitespace-nowrap px-3 py-3">
                            <UpdateProject id={project.id}/>
                            <DeleteProject id={project.id}/>
                        </td>

                    </tr>
                ))
            }
        </>

    )
}