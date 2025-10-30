import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, MapPin, User, Calendar } from 'lucide-react'
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
        return '🎤'
      case 'session':
        return '💼'
      case 'workshop':
        return '🛠️'
      case 'break':
        return '☕'
      case 'networking':
        return '🤝'
      default:
        return '📅'
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Event Agenda</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Explore our comprehensive schedule of keynotes, sessions, workshops, and networking opportunities
          </p>
        </motion.div>

        {/* Timeline View */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {edition.agenda.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="relative"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Time */}
                    <motion.div 
                      className="hidden sm:block flex-shrink-0 w-32 text-right"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div 
                        className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-2 ml-auto"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: '#E1F5FE'
                        }}
                      >
                        <Calendar className="w-5 h-5 text-primary-600" />
                      </motion.div>
                      <div className="text-sm font-medium text-gray-900">{formatDate(item.time)}</div>
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      className="flex-1 bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    >
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex-1">
                          {/* Mobile date display */}
                          <div className="sm:hidden flex items-center text-xs text-gray-500 mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{formatDate(item.time)}</span>
                          </div>
                          <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                            <span className="text-2xl">{getTypeIcon(item.type)}</span>
                            <motion.span 
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(item.type)}`}
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </motion.span>
                            <motion.span 
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                              whileHover={{ scale: 1.05 }}
                            >
                              {item.track}
                            </motion.span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{item.description}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        {item.room && (
                          <motion.div 
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="w-4 h-4" />
                            <span>{item.room}</span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
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