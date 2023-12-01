
import Link from "next/link";
import { Button } from "../general/button";
import { createPartner } from "@/app/lib/actions";


export default function Form() {

    return (
        <form className="" action={createPartner}>
            <div className="w-full flex flex-col p-4 md:p-6  gap-7 ">
                <div className="w-full justify-start items-startflex-col ">
                    <div className="w-full  flex-col justify-center items-start gap-1.5 inline-flex">
                        <label htmlFor="name" className="text-black text-base font-normal ">Partner Name</label>
                        <div className="relative w-full">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Write the Partner Name"
                                aria-describedby="name-error"
                                required
                                className="w-full h-9  bg-gray-200 rounded-lg border border-neutral-200" />
                        </div>
                    </div>
                </div>
                <div className="w-full  flex flex-col justify-center items-start gap-1.5 inline-flex">
                        <label htmlFor="status" className="text-black text-base font-normal ">Type</label>
                        <div className="relative  w-full">
                            <select
                                id="type"
                                name="type"
                                defaultValue=""
                                aria-describedby="name-error"
                                required
                                className="w-full h-9  bg-gray-200 rounded-lg border border-neutral-200" >
                                <option value="" disabled>Select a Type of Partner</option>
                                <option value="NATURAL">NATURAL</option>
                                <option value="JURIDICA">JURIDICA</option>
                            </select>
                        </div>
                    </div>
                <div className="w-full flex flex-col justify-center items-start gap-1.5 inline-flex ">
                    <label htmlFor="description" className="text-black text-base font-normal">Description</label>
                    <div className="relative w-full ">
                        <input
                            id="description"
                            name="description"
                            type=""
                            placeholder="Write a Description"
                            aria-describedby="name-error"
                            required
                            className="w-full h-32  bg-gray-200 rounded-lg border border-neutral-200 p-2" />
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/partners"
                        className="flex h-10 items-center rounded-lg bg-gray-100 dark:bg-gray-600 px-4 text-sm font-medium text-gray-600 dark:text-gray-100 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Create Partner</Button>
                </div>
            </div>

        </form>
    );
}