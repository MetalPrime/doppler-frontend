import Link from "next/link";
import { UilEdit,UilTrash  } from '@iconscout/react-unicons'

export function UpdateProject({ id }: { id: string }) {
    return (
      <Link
        href={`/projects/${id}/edit`}
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