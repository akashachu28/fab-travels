import React from 'react'

const AboutUs = () => {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-center mb-16 text-[#00175A]">About Us</h2>
        <div className="space-y-12 text-center">
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl text-[#00175A]/70">
              <span className="text-[#00175A] font-semibold">FAB Travels</span> is a travel agency based in{" "}
              <span className="text-[#00175A] font-semibold">Kochi, Kerala</span>
            </p>
            <p className="text-xl md:text-2xl text-[#00175A]/60">
              Founded by young entrepreneur{" "}
              <span className="text-[#00175A] font-semibold">Muhammed Faris T</span>
            </p>
          </div>

          {/* Kerala Image */}
          <div className="py-12">
            <div className="relative w-full max-w-3xl mx-auto h-[400px] rounded-4xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1694783079572-eaeff4bee78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwYm9hdHxlbnwxfHx8fDE3NzI0MjQ0MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kerala Backwaters"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00175A]/60 to-transparent" />
            </div>
          </div>

          {/* Mission & Goals */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="p-8 bg-blue-50 rounded-2xl  py-10 border border-[#027FFE]/20">
              <h3 className="text-2xl mb-4 text-[#00175A] font-semibold">Our Mission</h3>
              <p className="text-[#00175A]/70">
                To make travel accessible and affordable for everyone, connecting people with experiences that enrich their lives.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl border border-[#027FFE]/20">
              <h3 className="text-2xl mb-4 text-[#00175A] font-semibold">Our Vision</h3>
              <p className="text-[#00175A]/70">
                To become India's most trusted travel partner, revolutionizing how people explore the world through innovation and care.
              </p>
            </div>
            <div className="p-8 bg-blue-50 rounded-2xl border border-[#027FFE]/20">
              <h3 className="text-2xl mb-4 text-[#00175A] font-semibold">Our Promise</h3>
              <p className="text-[#00175A]/70">
                Best prices, seamless booking experience, and 24/7 support to ensure your journey is nothing short of extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs