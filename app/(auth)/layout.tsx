import React, { ReactNode } from 'react'
import Image from 'next/image'
import logo from '../../public/icons/logo.svg'
import ilustrations from '../../public/images/auth-illustration.png'

const layout = ( { children } : { children: React.ReactNode }) => {
  return (
    <main className='auth-container'>
        <section className='auth-form'>
            <div className='auth-box'>
                <div className='flex flex-row gap-2'>
                <Image src={logo} alt="logo" width={40} height={40} />
                <h1 className='text-2xl font-semibold text-white'>Book Hub</h1>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </section>
        <section className='auth-illustration'>
        <Image src={ilustrations} alt="ilustrations" width={1000} height={1000} className='size-full object-cover' />
        </section>
    </main>
  )
}

export default layout