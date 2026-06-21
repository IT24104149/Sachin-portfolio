import { motion } from 'framer-motion'
import { FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/portfolioData'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Projects" subtitle="Showcasing my work and innovations" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <FaExternalLinkAlt className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors shrink-0 mt-1" />
                </div>

                <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 mb-4">
                  <FaCalendarAlt className="w-3.5 h-3.5" />
                  <span>{project.duration}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
