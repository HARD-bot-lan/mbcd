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
          (() => {
            const gridDim = Math.ceil(Math.sqrt(edition.speakers.length));
            const basis = 100 / gridDim;

            const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const width = rect.width;
              const height = rect.height;
              const mouseX = e.clientX - rect.left;
              const mouseY = e.clientY - rect.top;
              const xPct = mouseX / width - 0.5;
              const yPct = mouseY / height - 0.5;
              setRotate({
                x: yPct * -15, // Max rotation
                y: xPct * 15,
              });
            };

            const handleMouseLeave = () => {
              setRotate({ x: 0, y: 0 });
            };

            return (
              <div className="flex justify-center items-center">
                <motion.div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: "transform 0.3s ease-out",
                  }}
                  className="flex flex-wrap justify-center max-w-3xl"
                >
                  {edition.speakers.map((speaker, i) => (
                    <motion.div
                      key={speaker.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.15, z: 50 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="group relative aspect-square overflow-hidden hover:z-10 hover:shadow-[0_0_20px_#c9a13b80]"
                      style={{ flexBasis: `${basis}%` }}
                    >
                      <img
                        src={speaker.image}
                        alt={`Photo of ${speaker.name}`}
                        className="h-full w-full object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ease-in-out"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                        <div className="transform-gpu transition-all duration-300 ease-in-out group-hover:-translate-y-2">
                          <h3 className="text-sm md:text-lg font-bold text-white">
                            {speaker.name}
                          </h3>
                          <div className="h-0 transform-gpu overflow-hidden transition-all duration-300 ease-in-out group-hover:h-auto group-hover:pt-1">
                            <p className="text-xs text-gray-200">
                              {speaker.title}
                            </p>
                            <p className="text-xs text-gray-300">
                              {speaker.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })()
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