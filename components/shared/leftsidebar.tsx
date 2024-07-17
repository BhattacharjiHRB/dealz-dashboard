"use client"

import { sidebarLinks } from '@/constans'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

function LeftSidebar() {

    const path = usePathname()


  return (
    <section className='sticky left-0 top-0 z-20 flex h-screen w-fit flex-col justify-between overflow-hidden bg-[#F7F7F7] pb-5 pt-10'>
    <Link href={'/'} className="flex flex-row justify-center items-center mb-16 gap-3">
      <Image 
        width={50}
        height={20}
        src={'assets/image/dealz-logo.svg'}
        alt='logo'
        className='object-cover'
      />
      <p className='text-center font-bold text-2xl'>Dealz</p>

    </Link>

      <input 
        type='text'
        onChange={()=> console.log("search")}
        placeholder='Search'
        className='px-8 py-3 m-auto rounded-xl w-56 bg-gray-200 border-gray-300 '
      />
      
      <div className='flex w-full flex-1 flex-col gap-2 px-8 mt-12'>
        {sidebarLinks.map((link)=>{
            const active = (path.includes(link.route)&& link.route.length > 1 || path === link.route );

            return(
            <Link 
            href={link.route}
            key={link.label}
            className={`relative flex justify-start gap-2 rounded-lg p-2 ${active && "bg-[#00BFBA] rounded-full text-white"}`}
            >
                <img 
                src={link.imgUrl} 
                alt={link.label} 
                className='w-[20px] h-[20px]'
                />
                <p className='text-center'>{link.label}</p>
            </Link>
            )} )}
      </div>
      <div className='mt-10 px-6'>
            <Button 
            className='relative w-full bg-transparent flex gap-2 text-red-600 hover:bg-inherit '>
                <img 
                src="assets/icons/logout.svg" 
                alt="logout"
                className='w-[20px] h-[20px] ' 
                />
                <p>Logout</p>
            </Button>
      </div>
    </section>
  )
}

export default LeftSidebar
