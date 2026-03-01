'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const Services = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const scrolled = window.scrollY - sectionTop
      const maxScroll = window.innerHeight * 1.5
      
      if (scrolled > 0) {
        const progress = Math.min(scrolled / maxScroll, 1)
        setScrollProgress(progress)
      } else {
        setScrollProgress(0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ovalScale = 1 + scrollProgress * 20
  const borderRadius = Math.max(0, 50 - scrollProgress * 50)

  return (
    <div ref={sectionRef} className='relative h-[250vh] bg-white'>
      <div className='sticky top-0 h-screen flex items-center justify-center overflow-hidden'>
        <motion.div 
          className='bg-blue-50 h-100 w-70'
          style={{ 
            scale: ovalScale,
            borderRadius: `${borderRadius}%`
          }}
        />
      </div>
    </div>
  )
}

export default Services