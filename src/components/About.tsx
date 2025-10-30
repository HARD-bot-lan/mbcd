import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Target, Eye, Lightbulb, Calendar, Users, Clock, BookOpen } from 'lucide-react'
import { EventEdition } from '../types/event'

interface AboutProps {
  edition: EventEdition
}

const About: React.FC<AboutProps> = ({ edition }) => {
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

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-20 px-2"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-4 py-2 mb-6"
          >
            <span className="text-primary-600 font-semibold">About The Event</span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            {edition.title} {edition.year}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-gray-600 leading-relaxed"
          >
            {edition.description}
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20"
        >
          {[
            { icon: Users, number: edition.speakers.length + '+', label: 'Expert Speakers' },
            { icon: Calendar, number: edition.Learning + '+', label: 'Days of Learning' },
            { icon: Clock, number: edition.Workshops + '+', label: 'Workshops & Sessions' },
            { icon: BookOpen, number: edition.Expected_Attendees + '+', label: 'Expected Attendees' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  {React.createElement(stat.icon, { className: "w-6 h-6 text-primary-600" })}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Theme & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To bring together the brightest minds in blockchain and cryptocurrency to share knowledge, 
                foster innovation, and shape the future of decentralized technologies through 
                meaningful connections and groundbreaking insights.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be Morocco's premier platform where blockchain leaders, innovators, and 
                visionaries converge to explore emerging trends, discuss challenges, 
                and collaborate on solutions that will define tomorrow's decentralized landscape.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{edition.year} Theme</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-primary-600">{edition.theme}</span>
                <br />
                <span className="mt-2 block">
                  {edition.description}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Key Highlights</h3>
            </div>
            <div className="space-y-6">
              {edition.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4 bg-gray-50 rounded-xl p-3 sm:p-4 hover:bg-gray-100 transition-colors duration-300"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 leading-relaxed">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About