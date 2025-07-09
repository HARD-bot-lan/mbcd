import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, ExternalLink, ChevronRight } from 'lucide-react'
import { PastEdition } from '../types/event'
import Slideshow from './Slideshow'

interface PastEditionsProps {
  pastEditions: PastEdition[]
  className?: string
}

const PastEditions: React.FC<PastEditionsProps> = ({ pastEditions, className = '' }) => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)

  const closeMediaModal = () => {
    setSelectedMedia(null)
  }

  if (!pastEditions || pastEditions.length === 0) {
    return null
  }

  return (
    <section className={`py-16 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Editions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the incredible moments from our previous Morocco Blockchain & Cryptocurrency Days
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastEditions.map((edition, index) => (
            <motion.div
              key={edition.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Edition Header with Slideshow */}
              <div className="relative h-64">
                {edition.media && edition.media.length > 0 ? (
                  <div className="h-full">
                    <Slideshow 
                      media={edition.media}
                      driveGalleryUrl={edition.driveGalleryUrl}
                      autoPlayInterval={4000}
                      className="!max-w-none h-full !rounded-none"
                      variant="card"
                    />
                  </div>
                ) : (
                  <div className="h-full bg-gradient-to-br from-[#DAA520] to-[#008080] group-hover:from-[#B8860B] group-hover:to-[#006666] transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-3xl font-bold mb-2">{edition.year}</h3>
                      <p className="text-lg font-medium opacity-90">{edition.theme}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <h4 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {edition.title}
                </h4>
                
                <div className="space-y-3">
                  <div className="flex items-start text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    <Calendar className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{new Date(edition.dates.start).toLocaleDateString()} - {new Date(edition.dates.end).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-start text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    <MapPin className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span>{edition.location.venue}, {edition.location.city}</span>
                  </div>
                  {edition.attendeeCount && (
                    <div className="flex items-start text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      <Users className="w-5 h-5 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{edition.attendeeCount.toLocaleString()} attendees</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {edition.highlights.slice(0, 3).map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {edition.driveGalleryUrl && (
                  <a
                    href={edition.driveGalleryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium group/link"
                  >
                    View Full Gallery
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Gallery Link */}
        {pastEditions[0]?.driveGalleryUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href={pastEditions[0].driveGalleryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Complete Photo & Video Gallery</span>
            </a>
            <p className="text-gray-600 mt-3 text-sm">
              Access our complete collection of photos and videos from all past editions
            </p>
          </motion.div>
        )}

        {/* Media Modal */}
        {selectedMedia && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={closeMediaModal}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeMediaModal}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors duration-300"
              >
                ×
              </button>
              {selectedMedia.includes('.mp4') || selectedMedia.includes('video') ? (
                <video
                  controls
                  className="w-full h-auto rounded-xl shadow-2xl"
                  src={selectedMedia}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={selectedMedia}
                  alt="Event media"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default PastEditions 