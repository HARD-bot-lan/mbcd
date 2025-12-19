import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin, User, Calendar, Mic, Briefcase, Wrench, Coffee, Users2 } from 'lucide-react'
import { EventEdition } from '../types/event'

interface AgendaProps {
  edition: EventEdition
}

const Agenda: React.FC<AgendaProps> = ({ edition }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date)
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'session':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'workshop':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'break':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      case 'networking':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'keynote':
        return <Mic className="w-5 h-5 text-purple-600" />;
      case 'session':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'workshop':
        return <Wrench className="w-5 h-5 text-green-600" />;
      case 'break':
        return <Coffee className="w-5 h-5 text-gray-600" />;
      case 'networking':
        return <Users2 className="w-5 h-5 text-orange-600" />;
      default:
        return <Calendar className="w-5 h-5 text-gray-600" />;
    }
  }

  return (
    <motion.section 
      id="agenda" 
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-max">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">Event Agenda</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                      Explore our comprehensive schedule of keynotes, sessions, workshops, and networking opportunities.
                      Each event is carefully curated to provide valuable insights and foster collaboration.
                    </p>
                  </motion.div>
          
                  {/* Timeline View */}
                  <div className="max-w-4xl mx-auto relative pt-8">
                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
          
                    <AnimatePresence mode="wait">
                      <motion.div
                        className="space-y-12" // Increased space between items
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {edition.agenda.map((item, index) => {
                          const isCardOnLeft = index % 2 !== 0;

                          const TimeBlock = (
                            <div>
                              <div className="text-xl font-bold text-gray-900">{formatDate(item.time)}</div> {/* Only date now */}
                            </div>
                          );

                          const ContentCard = (
                            <motion.div
                              className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative z-0 w-full"
                              whileHover={{ scale: 1.01 }}
                            >
                              <div className="flex items-start mb-3 sm:mb-4">
                                <div className="flex-1">
                                  {/* Mobile date display */}
                                  <div className="sm:hidden flex items-center text-xs text-gray-500 mb-2">
                                    <Clock className="w-4 h-4 mr-2" />
                                    <span>{formatDate(item.time)}</span> {/* Only date now */}
                                  </div>
                                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                                    <span>{getTypeIcon(item.type)}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}>
                                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                    </span>
                                    {item.track && (
                                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                                        {item.track}
                                      </span>
                                    )}
                                  </div>
                                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{item.description}</p>
                                </div>
                              </div>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                {item.room && (
                                  <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{item.room}</span>
                                  </div>
                                )}
                                {item.speaker && (
                                  <div className="flex items-center space-x-2">
                                    <User className="w-4 h-4" />
                                    <span>{item.speaker}</span>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          );

                          return (
                            <motion.div
                              key={item.id}
                              initial={{ opacity: 0, y: 50 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ delay: index * 0.1, duration: 0.6 }}
                              className="relative"
                            >
                              {/* Mobile View */}
                              <div className="sm:hidden">
                                <div className="text-center mb-4">{TimeBlock}</div>
                                {ContentCard}
                              </div>

                              {/* Desktop View */}
                              <div className="hidden sm:flex items-start">
                                {/* Left Side */}
                                <div className="w-1/2 pr-8 flex justify-end text-right">
                                  {isCardOnLeft ? ContentCard : TimeBlock}
                                </div>
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-10">
                                  <div className="w-4 h-4 bg-primary-500 rounded-full ring-4 ring-primary-100"></div>
                                </div>
                                {/* Right Side */}
                                <div className="w-1/2 pl-8 flex justify-start">
                                  {isCardOnLeft ? TimeBlock : ContentCard}
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </AnimatePresence>
                  </div>
        {/* Download Button */}
        {edition.agendaPdfUrl && (
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href={edition.agendaPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Detailed Agenda
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default Agenda