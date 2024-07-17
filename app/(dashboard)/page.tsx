

import DataChart from "@/components/shared/dataChart";
import { columns } from "@/components/table/column";
import { DataTable } from "@/components/table/dataTable";
import Image from "next/image";
import Link from "next/link";

export const data = []

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center w-full gap-6 ">
        <Link href={'/activity'} className="flex flex-1 justify-center items-center bg-[#C8C8C8] w-[200px] h-2 gap-2 p-5 ">
            <Image 
              src={'assets/icons/diagram.svg'}
              alt=""
              height={20}
              width={20}
            />
            <span className="text-sm">Activities Management</span>
        </Link>
        <Link href={'/booking'} className="flex flex-1 justify-center items-center bg-[#C8C8C8] w-[200px] h-2 gap-2 p-5 ">
            <Image 
              src={'assets/icons/menu-board.svg'}
              alt=""
              height={20}
              width={20}
            />
            <span className="text-sm">Booking Management</span>
        </Link>
        <Link href={'/profile'} className="flex flex-1 justify-center items-center bg-[#C8C8C8] w-[200px] h-2 gap-2 p-5 ">
            <Image 
              src={'assets/icons/user-2.svg'}
              alt=""
              height={20}
              width={20}
            />
            <span className="text-sm">Profile Settings</span>
        </Link>
      </div>
    </main>
  );
}
