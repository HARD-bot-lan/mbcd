import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Users } from 'lucide-react'
import { EventEdition } from '../types/event'

interface CommitteeProps {
  edition: EventEdition
}

const Committee: React.FC<CommitteeProps> = ({ edition }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="committee" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Organizing Committee</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team behind {edition.title} {edition.year} who work tirelessly to create an exceptional experience
          </p>
        </div>

        {edition.committee.length > 0 ? (
          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mx-auto text-center"
        >
          {edition.committee.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                {/*<p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {member.role}
                </p>*/}
              </div>
            </motion.div>
          ))}
        </motion.div>        
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Committee Information Coming Soon</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We're finalizing our organizing committee details. Check back soon for updates!
            </p>
          </div>
        )}

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary-50 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Have questions about the event? Need assistance with registration? 
              Our organizing committee is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@techconnect.com"
                className="btn-primary"
              >
                Contact Us
              </a>
              <button
                onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                Register Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Committee