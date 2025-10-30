import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Twitter, Linkedin, Globe, Users } from 'lucide-react'
import { EventEdition } from '../types/event'

interface SpeakersProps {
  edition: EventEdition
}

const Speakers: React.FC<SpeakersProps> = ({ edition }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'twitter':
        return <Twitter className="w-5 h-5" />
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />
      case 'website':
        return <Globe className="w-5 h-5" />
      default:
        return <ExternalLink className="w-5 h-5" />
    }
  }

  return (
    <section id="speakers" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders, innovators, and visionaries who are shaping the future of technology
          </p>
        </div>

        {edition.speakers.length > 0 ? (
          <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {edition.speakers.map((speaker) => (
            <motion.div
              key={speaker.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-xs"
            >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{speaker.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{speaker.company}</p>
                  
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {speaker.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-3 justify-center">
                    {Object.entries(speaker.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 hover:bg-primary-100 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {getSocialIcon(platform)}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Speakers Coming Soon</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We're finalizing our amazing lineup of speakers. Check back soon for updates!
            </p>
          </div>
        )}

        {/* Call to Action */}
        {(edition.speakers.length > 0 || edition.status === 'current') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-primary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Want to Speak at Our Event?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                We're always looking for passionate speakers to share their expertise. 
                Submit your proposal and join our community of thought leaders.
              </p>
              <button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Submit Speaking Proposal
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Speakers