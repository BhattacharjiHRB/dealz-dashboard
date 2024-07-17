import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'


const Topbar = () => {
  return (
    <section className='fixed top-0 z-10 flex w-full justify-between border-b border-b-gray-200 py-4'>
        <div className=' w-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <div className='w-[1500px] h-full flex flex-row items-center justify-center'/>
        <div className='flex gap-8 p-2'>
              <Link href={'/'} className=' w-[40px] h-[40px] rounded flex  justify-center items-center  ' >
                <img src="assets/icons/settings.svg" alt="settings" className='w-[30px] h-[30px] ' />
              </Link>
              <Link href={'/'} className=' w-[40px] h-[40px] rounded flex  justify-center items-center  ' >
                <img src="assets/icons/bell.svg" alt="notifications" className='w-[30px] h-[30px] ' />
              </Link>
              <Link href={'/'} className=' w-[40px] h-[40px] rounded flex  justify-center items-center  ' >
                <Avatar >
                    <AvatarImage src="assets/icons/user.svg" alt="user" className='w-[30px] h-[30px] '  />
                    <AvatarFallback>US</AvatarFallback>
                </Avatar>
              </Link>
        </div>           
        </div>
    </section>
  )
}

export default Topbar
