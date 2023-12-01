import Link from "next/link";
import { UilEdit, UilTrash, UilFilePlusAlt  } from '@iconscout/react-unicons'

export function CreateProject() {
  return (
    <Link
      href="/create"
      className="flex h-10 items-center rounded-lg rounded-md border p-2 border-green-200 hover:bg-gray-100 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"
    >
      <span className="hidden md:block">Create Project</span>
      <UilFilePlusAlt className="h-5 md:ml-4" />
    </Link>
  )
}

export function UpdateProject({ id }: { id: string }) {
  return (
    <Link
      href={`/${id}/edit`}
      className="rounded-md border p-2 border-green-200 hover:bg-gray-100"
    >
      <UilEdit className="w-5" />
    </Link>
  );
}

export function DeleteProject({ id }: { id: string }) {
  return (
    <>
      <form >
        <button className="rounded-md border border-red-100 p-2 hover:bg-gray-100">
          <UilTrash className="w-5" />
        </button>
      </form>
    </>
  );
}