import { motion } from 'framer-motion'
import { FaTrophy, FaCertificate, FaStar } from 'react-icons/fa'
import { achievement } from '../../data/portfolioData'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Achievements & Certifications"
          subtitle="Recognition and accomplishments"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-bl-full" />
            <div className="absolute -top-4 -right-4">
              <FaStar className="w-8 h-8 text-yellow-400/30" />
            </div>

            <div className="flex items-start gap-4 mb-6 relative">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/20 shrink-0">
                <FaTrophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/20 mb-2">
                  Award
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
              </div>
            </div>

            <ul className="space-y-4 relative">
              {achievement.points.map((point, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <FaCertificate className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base leading-relaxed">
                    {point.includes('AI-Based Visa Recommendation System') ? (
                      <>
                        Presented an AI research project titled:{' '}
                        <strong className="text-gray-900 dark:text-white">
                          AI-Based Visa Recommendation System
                        </strong>
                      </>
                    ) : (
                      point
                    )}
                  </span>
                </motion.li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
