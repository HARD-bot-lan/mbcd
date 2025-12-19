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
          (() => {
            const gridDim = Math.ceil(Math.sqrt(edition.committee.length));
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
                  {edition.committee.map((member) => (
                    <motion.div
                      key={member.id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.15, z: 50 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="group relative aspect-square overflow-hidden hover:z-10 hover:shadow-[0_0_20px_#c9a13b80]"
                      style={{ flexBasis: `${basis}%` }}
                    >
                      <img
                        src={member.image}
                        alt={`Photo of ${member.name}`}
                        className="h-full w-full object-cover transition-all duration-300 ease-in-out grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ease-in-out"></div>
                      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                        <div className="transform-gpu transition-all duration-300 ease-in-out group-hover:-translate-y-2">
                          <h3 className="text-sm md:text-lg font-bold text-white">
                            {member.name}
                          </h3>
                          <div className="h-0 transform-gpu overflow-hidden transition-all duration-300 ease-in-out group-hover:h-auto group-hover:pt-1">
                            <p className="text-xs text-gray-200">
                              {member.role}
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
                href="mailto:blockchaincryptodays@gmail.com"
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