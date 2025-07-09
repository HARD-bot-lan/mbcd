import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Twitter, Linkedin, Instagram, Facebook, Send } from 'lucide-react'
import { EventEdition } from '../types/event'

interface NewsletterProps {
  edition: EventEdition
  className?: string
}

const Newsletter: React.FC<NewsletterProps> = ({ edition, className = '' }) => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  if (!edition.newsletterSignup) {
    return null
  }

  return (
    <section className={`py-16 bg-gradient-to-r from-blue-600 to-purple-600 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Connected
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest updates about {edition.title} and never miss important announcements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-white mr-3" />
                <h3 className="text-2xl font-semibold text-white">Newsletter</h3>
              </div>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Subscribe
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="text-green-400 text-6xl mb-4">✓</div>
                  <p className="text-white text-lg">Successfully subscribed!</p>
                  <p className="text-white/80 text-sm mt-2">
                    You'll receive updates about {edition.title}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {edition.socialMedia?.twitter && (
                  <a
                    href={edition.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Twitter className="w-6 h-6 text-white mr-3" />
                    <span className="text-white font-medium">Twitter</span>
                  </a>
                )}
                {edition.socialMedia?.linkedin && (
                  <a
                    href={edition.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-white mr-3" />
                    <span className="text-white font-medium">LinkedIn</span>
                  </a>
                )}
                {edition.socialMedia?.instagram && (
                  <a
                    href={edition.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-white mr-3" />
                    <span className="text-white font-medium">Instagram</span>
                  </a>
                )}
                {edition.socialMedia?.facebook && (
                  <a
                    href={edition.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-white mr-3" />
                    <span className="text-white font-medium">Facebook</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          {edition.contactEmail && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-white/80">
                Questions? Contact us at{' '}
                <a
                  href={`mailto:${edition.contactEmail}`}
                  className="text-white hover:underline font-medium"
                >
                  {edition.contactEmail}
                </a>
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter 