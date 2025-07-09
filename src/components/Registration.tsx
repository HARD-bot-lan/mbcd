import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import { EventEdition } from '../types/event'

interface RegistrationProps {
  edition: EventEdition
}

const Registration: React.FC<RegistrationProps> = ({ edition }) => {
  if (!edition.registrationOpen) {
    return (
      <section id="registration" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Registration</h2>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {edition.status === 'current' ? 'Registration Opening Soon' : 'Registration Closed'}
              </h3>
              <p className="text-gray-600">
                {edition.status === 'current' ? (
                  <>
                    Registration for {edition.title} {edition.year} is not open yet. 
                    Stay tuned for updates!
                  </>
                ) : edition.status === 'past' ? (
                  `Registration for ${edition.title} ${edition.year} is closed. This event has already concluded.`
                ) : (
                  `Registration for ${edition.title} ${edition.year} will open soon.`
                )}
              </p>
              {edition.status === 'current' && (
                <div className="mt-6">
                  <button 
                    className="btn-primary"
                  >
                    Stay Updated
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="registration" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Registration</h2>
          
          
                <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <p className="text-gray-700 mb-8">
              Join us for an exciting event featuring keynotes, workshops, and networking opportunities.
              {edition.registrationFormUrl ? (
                " Click below to register through our registration form."
              ) : (
                " Registration link will be available soon."
              )}
            </p>
            
            {edition.registrationFormUrl ? (
              <a
                href={edition.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg"
              >
                Register Now
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ) : (
              <button
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors text-lg"
              >
                Stay Updated
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                </button>
              )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Registration