import Link from "next/link";
import { UilEdit, UilTrash, UilFilePlusAlt  } from '@iconscout/react-unicons'
import { deleteProject } from "@/app/lib/actions";


export function CreateProject() {
  return (
    <Link
      href="/create"
      className="flex h-10 items-center rounded-lg mx-8 rounded-md border p-2 border-green-600 text-green-600 hover:bg-gray-100 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
    >
      <span className="hidden md:block text-green-600">Create Project</span>
      <UilFilePlusAlt className="h-5 md:ml-4 text-green-600" />
    </Link>
  )
}

export function UpdateProject({ id }: { id: string }) {
  return (
    <Link
      href={`/${id}/edit`}
      className="rounded-md border p-2 h-fit border-green-200 hover:bg-gray-100"
    >
      <UilEdit className="w-5" />
    </Link>
  );
}

export function DeleteProject({ id }: { id: string }) {
  const deleteProjectWithId = deleteProject.bind(null, id);

  return (
    <>
      <form action={deleteProjectWithId}>
        <button className="rounded-md border border-red-100 p-2 hover:bg-gray-100">
          <UilTrash className="w-5" />
        </button>
      </form>
    </>
  );
}