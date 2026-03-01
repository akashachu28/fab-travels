import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen bg-neutral-100 relative'>
        <video autoPlay loop muted className='absolute w-full h-full object-cover' suppressHydrationWarning>
          <source src="assets/amexClouds.mp4" type="video/mp4" />
        </video>

        <div className='text-[#00175A] pt-30 absolute top-0 w-full h-full flex flex-col justify-center items-center gap-6 z-3'>
             <h1 className=' text-6xl px-34 font-semibold  text-center'>
                Your story begins where the map ends.
                 Start your journey with <span className='italic text-[#027FFE] tracking-[-8px]'>FAB</span> today.
             </h1>
             <p className='text-center px-34 text-[1.1rem]'>
                A single destination for flights, curated tour packages, and seamless bookings. Powered by elite global providers,
                 our technology is built to turn your vision into a journey.
             </p>

             <div className='flex justify-center gap-4'>
                <button className='text-white border-[#00175A] px-4 py-2 rounded-3xl bg-[#027FFE]'>Explore Our Services</button>
                <button className='border-2 border-[#00175A] px-4 py-2 rounded-3xl'>Explore Our Services</button>
             </div>
        </div>

        <div className='absolute w-full bottom-0 bg-linear-to-b from-white/0 via-white/20 to-white h-full z-2'/>
    </div>
  )
}

export default Hero