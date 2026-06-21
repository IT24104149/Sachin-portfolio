import { motion } from 'framer-motion'
import { aboutText } from '../../data/portfolioData'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />
        <GlassCard>
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {aboutText}
          </motion.p>
        </GlassCard>
      </div>
    </section>
  )
}
