import Image from 'next/image'
import headerImg from '../assets/fabHeader.png'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 flex justify-between gap-6 bg-white px-10 py-4 rounded-b-4xl text-black'>
        <div className='flex gap-4'>
            <Image src={headerImg} alt='' className='w-40' suppressHydrationWarning/> 
            <div className='flex gap-10 text-xl justify-center items-end p-4'>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Services</Link>
                <Link href={"/"}>About Us</Link>
                <Link href={"/"}>Connect with Us</Link>
            </div>
        </div>
        <div className='flex items-end'>
            <div className='bg-[#027FFE] text-white rounded-3xl py-3 px-4 flex gap-6 text-xl '>
                <p className=''>Traveler Support</p>
                <div className='border'/>
                <p className=''>Request a demo</p>
            </div>
        </div>
    </div>
  )
}

export default Header