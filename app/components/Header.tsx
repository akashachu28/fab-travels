'use client'

import Image from 'next/image'
import headerImg from '../assets/fabHeader.png'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className='sticky top-0 z-50 flex justify-between lg:justify-start lg:gap-8 items-center bg-white px-4 md:px-10 py-4 rounded-b-4xl text-black shadow-lg '>
        {/* Logo */}
        <Image src={headerImg} alt='FAB Travels' className='w-32 md:w-40' suppressHydrationWarning/> 
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex justify-between w-full gap-4'>
          <div className='flex gap-10 text-xl justify-center items-center'>
            <Link href={"/"}>Home</Link>
            <Link href={"/"}>Services</Link>
            <Link href={"/"}>About Us</Link>
            <Link href={"/"}>Connect with Us</Link>
          </div>
          <div className='bg-[#027FFE] text-white rounded-3xl py-3 px-4 flex gap-6 text-xl'>
            <p>Traveler Support</p>
            <div className='border'/>
            <p>Request a demo</p>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className='lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center '
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle menu'
        >
          <span className={`w-full h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`w-full h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}/>
          <span className={`w-full h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/50 z-40 lg:hidden'
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Side Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className='fixed top-30 right-0 h-full w-80 bg-white z-50 shadow-2xl rounded-l-4xl'
            >
              <div className='flex flex-col p-8 gap-6'>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className='self-end text-2xl'
                  aria-label='Close menu'
                >
                  ✕
                </button>
                
                <nav className='flex flex-col gap-6 text-xl text-black'>
                  <Link href={"/"} onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link href={"/"} onClick={() => setIsMenuOpen(false)}>Services</Link>
                  <Link href={"/"} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                  <Link href={"/"} onClick={() => setIsMenuOpen(false)}>Connect with Us</Link>
                </nav>

                <div className='flex flex-col gap-4 mt-6'>
                  <button className='bg-[#027FFE] text-white rounded-3xl py-3 px-4 text-lg'>
                    Traveler Support
                  </button>
                  <button className='bg-[#027FFE] text-white rounded-3xl py-3 px-4 text-lg'>
                    Request a demo
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header