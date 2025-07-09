import React, { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Registration from '../components/Registration'
import Agenda from '../components/Agenda'
import Speakers from '../components/Speakers'
import Committee from '../components/Committee'
import Partners from '../components/Partners'
import PastEditions from '../components/PastEditions'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'
import { eventData } from '../data/eventData'
import { EventEdition } from '../types/event'

const EditionPage: React.FC<{ edition: EventEdition }> = ({ edition }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Header currentEdition={edition} />
      <Hero edition={edition} />
      <About edition={edition} />

      {/* Gallery Section for Past Editions */}
      {edition.status === 'past' && edition.media && edition.media.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Gallery</h2>
              <div className="max-w-5xl mx-auto">
                <Slideshow 
                  media={edition.media}
                  driveGalleryUrl={edition.driveGalleryUrl || ''}
                  autoPlayInterval={5000}
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Only show Registration for non-past events */}
      {edition.status !== 'past' && <Registration edition={edition} />}
      
      <Agenda edition={edition} />
      <Speakers edition={edition} />
      <Committee edition={edition} />
      <Partners edition={edition} />
      {edition.pastEditions && edition.pastEditions.length > 0 && (
        <PastEditions pastEditions={edition.pastEditions} />
      )}
      <Footer edition={edition} />
    </motion.div>
  )
}

const EventPage: React.FC = () => {
  const { year } = useParams<{ year: string }>()
  const [edition, setEdition] = useState<EventEdition | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (year) {
      const yearNum = parseInt(year)
      // Try to find the edition in the main data
      const foundEdition = eventData.find(e => e.year === yearNum)
      setEdition(foundEdition || null)
      setIsLoading(false)
    }
  }, [year])

  // Only redirect if we're not loading and the year is invalid
  if (!isLoading && (!year || !edition)) {
    // Find the current edition
    const current = eventData.find(e => e.status === 'current') || eventData[0]
    return <Navigate to={`/${current.year}`} replace />
  }

  if (isLoading || !edition) {
    return null // or a loading spinner
  }

  return <EditionPage edition={edition} />
}

export default EventPage