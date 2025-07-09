import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react'
import { MediaContent } from '../types/event'

interface SlideshowProps {
  media: MediaContent[]
  driveGalleryUrl: string
  autoPlayInterval?: number // in milliseconds
  className?: string
  variant?: 'default' | 'card'
}

const Slideshow: React.FC<SlideshowProps> = ({ 
  media, 
  driveGalleryUrl, 
  autoPlayInterval = 5000,
  className = '',
  variant = 'default'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    let interval: number

    if (isPlaying && media.length > 1) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length)
      }, autoPlayInterval)
    }

    return () => {
      if (interval) {
        window.clearInterval(interval)
      }
    }
  }, [isPlaying, media.length, autoPlayInterval])

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length)
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!media || media.length === 0) {
    return null
  }

  const isCard = variant === 'card'

  return (
    <div className={`relative w-full ${isCard ? '' : 'max-w-4xl mx-auto'} ${className}`}>
      {/* Main Slideshow Container */}
      <div className={`relative ${isCard ? 'h-full' : 'aspect-video'} bg-black ${isCard ? '' : 'rounded-xl'} overflow-hidden`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {media[currentIndex].type === 'video' ? (
              <video
                src={media[currentIndex].url}
                poster={media[currentIndex].thumbnail}
                controls
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media[currentIndex].url}
                alt={media[currentIndex].title}
                className="w-full h-full object-cover"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {media.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors ${
                isCard ? 'transform hover:scale-110' : ''
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className={`absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors ${
                isCard ? 'transform hover:scale-110' : ''
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Play/Pause Button */}
        {media.length > 1 && !isCard && (
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>
        )}

        {/* Caption */}
        {!isCard && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
            <p className="text-sm font-medium">{media[currentIndex].title}</p>
            {media[currentIndex].description && (
              <p className="text-xs text-gray-300 mt-1 line-clamp-2">{media[currentIndex].description}</p>
            )}
          </div>
        )}

        {/* Slide Counter for Card Variant */}
        {isCard && media.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {media.length}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation - Only for default variant */}
      {!isCard && media.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {media.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                index === currentIndex ? 'ring-2 ring-[#DAA520]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={item.type === 'video' ? item.thumbnail || item.url : item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <Play className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Drive Gallery Link - Only for default variant */}
      {!isCard && driveGalleryUrl && (
        <div className="mt-4 text-center">
          <a
            href={driveGalleryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Full Gallery on Google Drive</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default Slideshow 