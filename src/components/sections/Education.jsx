import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaBook } from 'react-icons/fa'
import { education } from '../../data/portfolioData'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="My academic journey" />

        <GlassCard>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shrink-0">
              <FaGraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {education.institution}
              </h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                {education.degree}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {education.specialization}
              </p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-500">
                <FaCalendarAlt className="w-3.5 h-3.5" />
                {education.duration}
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200 mb-4">
              <FaBook className="w-4 h-4 text-indigo-500" />
              Relevant Coursework
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {education.coursework.map((course, i) => (
                <motion.div
                  key={course}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shrink-0" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{course}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
