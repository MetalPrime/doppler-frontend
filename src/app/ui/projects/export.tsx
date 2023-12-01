'use client'

import { UilFileDownload  } from '@iconscout/react-unicons'
import { exportToExcel } from "@/app/lib/utils";
import { Project } from "@/app/lib/definitions";

export function ExportToExcel({data}: {data: Project[]}) {
    const handleExport = () => {
      const filename = 'ProjectsData';
      const sheetName = 'Projects';
      exportToExcel(data, filename, sheetName);
    };
  
    return (<button onClick={handleExport} className="flex h-10 items-center rounded-lg rounded-md border p-2 border-green-300 hover:bg-gray-100 px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600">
      <span className="hidden md:block text-green-300">Export Projects to Excel</span>
      <UilFileDownload className="h-5 md:ml-4 text-green-300" />
    </button>)
  }