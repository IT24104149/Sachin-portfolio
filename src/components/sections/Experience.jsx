import { motion } from 'framer-motion'
import { FaBriefcase, FaSearch } from 'react-icons/fa'
import { experienceText } from '../../data/portfolioData'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="Professional journey" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500" />

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shrink-0">
                <FaBriefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <FaSearch className="w-4 h-4 text-indigo-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    Currently Seeking Internship Opportunities
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {experienceText}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {['Data Science', 'Machine Learning', 'AI', 'Data Analytics'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
