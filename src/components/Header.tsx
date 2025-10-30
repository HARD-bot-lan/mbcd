import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { EventEdition } from '../types/event'
import { eventData } from '../data/eventData'

interface HeaderProps {
  currentEdition: EventEdition
}

const Header: React.FC<HeaderProps> = ({ currentEdition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEditionsOpen, setIsEditionsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleEditionChange = (year: number) => {
    navigate(`/${year}`)
    setIsEditionsOpen(false)
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Registration', id: 'registration' },
    { label: 'Agenda', id: 'agenda' },
    { label: 'Speakers', id: 'speakers' },
    { label: 'Committee', id: 'committee' },
    { label: 'Partners', id: 'partners' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-gray-900/80'
      }`}
    >
      <div className="w-full max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to={`/${currentEdition.year}`} className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Event Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-white">
                {currentEdition.title}
              </h1>
              <p className="text-sm text-gray-300">
                {currentEdition.year}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
            
            {/* Editions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsEditionsOpen(!isEditionsOpen)}
                className="flex items-center space-x-1 font-medium text-gray-300 transition-colors hover:text-white"
              >
                <span>Editions</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isEditionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2"
                  >
                    {eventData.map((edition) => (
                      <button
                        key={edition.year}
                        onClick={() => handleEditionChange(edition.year)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors ${
                          edition.year === currentEdition.year ? 'bg-primary-900/50 text-primary-400' : 'text-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{edition.year}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            edition.status === 'current' ? 'bg-green-900/50 text-green-400' :
                            edition.status === 'upcoming' ? 'bg-blue-900/50 text-blue-400' :
                            'bg-gray-700 text-gray-400'
                          }`}>
                            {edition.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{edition.subtitle}</p>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 transition-colors hover:bg-gray-800"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900 border-t border-gray-800"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                
                <div className="border-t border-gray-800 pt-2 mt-2">
                  <p className="px-4 py-2 text-sm font-medium text-gray-400">Editions</p>
                  {eventData.map((edition) => (
                    <button
                      key={edition.year}
                      onClick={() => handleEditionChange(edition.year)}
                      className={`block w-full text-left px-4 py-2 transition-colors ${
                        edition.year === currentEdition.year ? 'bg-primary-900/50 text-primary-400' : 'text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{edition.year}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          edition.status === 'current' ? 'bg-green-900/50 text-green-400' :
                          edition.status === 'upcoming' ? 'bg-blue-900/50 text-blue-400' :
                          'bg-gray-700 text-gray-400'
                        }`}>
                          {edition.status}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header