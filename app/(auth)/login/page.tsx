import LoginForm from '@/components/forms/loginForm'
import React from 'react'
import Image from 'next/image'

export default function LoginPage() {
  return (
   <section className='flex min-h-screen flex-col items-center justify-center '>
        <div className='flex flex-col w-[650px] h-[480px] border items-center justify-center p-16'>
        <div className="flex flex-row justify-center items-center mb-16 gap-3">
          <Image 
            width={100}
            height={75}
            src={'assets/image/dealz-logo.svg'}
            alt='logo'
            className='object-cover'
          />
            <p className='text-center font-bold text-4xl'>Dealz</p>
          </div>
          <LoginForm />
        </div>
   </section>
  )
}
