import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ChevronsDown } from 'lucide-react'
import { EventEdition } from '../types/event'
import CountdownTimer from './CountdownTimer'

interface HeroProps {
  edition: EventEdition
}

const Hero: React.FC<HeroProps> = ({ edition }) => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DAA520] via-[#2F4F4F] to-[#008080]">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background Logo - Single Instance */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img 
            src="/logo1.png" 
            alt="" 
            className="w-full max-w-[800px] object-contain animate-float"
          />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Edition Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4"
          >
            <span className="text-sm font-medium">{edition.year} Edition</span>
            <span className={`text-xs px-2 py-1 rounded-full ${
              edition.status === 'current' ? 'bg-green-500/20 text-green-300' :
              edition.status === 'upcoming' ? 'bg-blue-500/20 text-blue-300' :
              'bg-gray-500/20 text-gray-300'
            }`}>
              {edition.status}
            </span>
          </motion.div>

          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-6 relative"
          >
            <img 
              src="/logo1.png" 
              alt="Morocco Blockchain & Cryptocurrency Days" 
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{
                transform: 'scale(3)',
                transformOrigin: 'center',
              }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl font-light mb-8 text-gray-200"
          >
            Shaping the Future of a Decentralized World
          </motion.p>

          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-8 text-sm md:text-base"
          >
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              <span>{formatDate(edition.dates.start)} - {formatDate(edition.dates.end)}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              <span>{edition.location.city}, {edition.location.country}</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Users className="w-4 h-4 md:w-5 md:h-5" />
              <span>{edition.speakers.length}+ Speakers</span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          {edition.countdownEnabled && edition.status !== 'past' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-8"
            >
              <CountdownTimer eventDate={edition.dates.start} />
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            {edition.status !== 'past' && (
              edition.registrationOpen ? (
                <button
                  onClick={scrollToRegistration}
                  className="btn-primary text-base md:text-lg px-6 py-3 md:px-8 md:py-4 animate-bounce-slow"
                >
                  Register Now
                </button>
              ) : (
                <button
                  disabled
                  className="btn-secondary text-base md:text-lg px-6 py-3 md:px-8 md:py-4 opacity-50 cursor-not-allowed"
                >
                  Registration Coming Soon
                </button>
              )
            )}
            
            <button
              onClick={() => {
                const element = document.getElementById('about')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-outline text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
            >
              Learn More
            </button>
          </motion.div>

          {/* Theme Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3">
              <span className="text-sm font-medium">Theme:</span>
              <span className="text-sm text-blue-300">{edition.theme}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator as Arrow */}
      <motion.button
  type="button"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.2 }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer focus:outline-none"
  aria-label="Scroll to next section"
  onClick={() => {
    const target = document.getElementById('about')          // 🔄 change ID if needed
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }}
>
  <motion.span
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  >
    <ChevronsDown className="w-6 h-6 text-white/60" />
  </motion.span>
</motion.button>
    </section>
  )
}

export default Hero
