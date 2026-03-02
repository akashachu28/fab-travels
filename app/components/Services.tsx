'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Plane, Bus, MapPin } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: "Cheapest Flight Tickets",
    description: "Discover unbeatable prices on domestic and international flights. We compare hundreds of airlines to bring you the best deals, ensuring your journey starts with savings.",
    image: "https://images.unsplash.com/photo-1750548546278-6d54b82b7d36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGZseWluZyUyMHNreXxlbnwxfHx8fDE3NzIzNzc4MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Bus,
    title: "Book Your Bus Tickets Through Us",
    description: "Travel comfortably across cities with our seamless bus booking service. Choose from premium coaches to budget-friendly options, all with guaranteed seats and instant confirmation.",
    image: "https://images.unsplash.com/photo-1760386128700-d752f805c116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidXMlMjB0cmF2ZWx8ZW58MXx8fHwxNzcyNDI0NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: MapPin,
    title: "Best Tour Packages Across India",
    description: "Experience the diverse beauty of India with our expertly curated tour packages. From the backwaters of Kerala to the majestic Himalayas, create memories that last a lifetime.",
    image: "https://images.unsplash.com/photo-1671375159307-960b2e7fabc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRhaiUyMG1haGFsJTIwdG91cmlzbXxlbnwxfHx8fDE3NzI0MjQ0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
]

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

  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const easedProgress = easeInOutCubic(scrollProgress)
  const ovalScale = 1 + easedProgress * 20
  // const imageOpacity = Math.max(0, 1 - easedProgress * 1.5)

  return (
    <>
      <div ref={sectionRef} className='relative h-full bg-blue-50'>
        <div className='sticky z-5 top-0 h-screen flex items-center justify-center overflow-hidden'>
          <motion.div 
            className='relative w-full h-screen'
            style={{ 
              scale: ovalScale,
            }}
            transition={{ ease: "easeInOut" }}
          >
            <img
              src="/assets/windowWith hole.PNG"
              alt="Window"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        {/* Services content positioned below with margin */}
        <div className="relative -mt-[150vh] pt-[110vh] md:pt-[120vh]">
          <section className="py-16 md:py-32 px-6 bg-blue-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-16 md:mb-24 text-[#00175A]">Our Services</h2>
              <div className="space-y-32 md:space-y-48">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
                  >
                    {/* Image - Oval Shape */}
                    <div className="w-full md:w-1/2 flex justify-center">
                      <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
                        <div className={`absolute h-100 w-85 lg:h-130 lg:w-110 ${index === 1 ? '-ml-30 md:ml-0' : 'ml-40 md:ml-0'} inset-0 rounded-[50%] overflow-hidden shadow-2xl`}>
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover scale-110"
                          />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-[50%] bg-gradient-to-br from-[#027FFE]/20 to-[#00175A]/20 blur-3xl -z-10" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6 px-4 md:px-0">
                      <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/50 rounded-full backdrop-blur-sm">
                        <service.icon className="w-5 h-5 text-[#027FFE]" />
                        <span className="text-sm text-[#00175A]">Service</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[#00175A]">{service.title}</h3>
                      <p className="text-lg md:text-xl text-[#00175A]/70 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Services