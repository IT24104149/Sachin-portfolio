import { motion } from 'framer-motion'
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiSpringboot,
  SiGit,
  SiGithub,
  SiJupyter,
  SiMysql,
  SiTensorflow,
  SiPandas,
  SiNumpy,
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { FaDatabase, FaChartBar, FaBrain, FaJava, FaCss3, FaChartPie } from 'react-icons/fa'
import { skills } from '../../data/portfolioData'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const iconMap = {
  Python: SiPython,
  Java: FaJava,
  SQL: FaDatabase,
  JavaScript: SiJavascript,
  'Scikit-learn': FaBrain,
  TensorFlow: SiTensorflow,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  'Data Visualization': FaChartBar,
  'Power BI': FaChartPie,
  React: SiReact,
  HTML: SiHtml5,
  CSS: FaCss3,
  'Tailwind CSS': SiTailwindcss,
  'Spring Boot': SiSpringboot,
  Git: SiGit,
  GitHub: SiGithub,
  'Jupyter Notebook': SiJupyter,
  'VS Code': VscCode,
  MySQL: SiMysql,
}

const categoryIcons = {
  'Programming Languages': '🖥️',
  'Machine Learning & Data Science': '🤖',
  'Web Development': '🌐',
  'Tools & Platforms': '🛠️',
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <GlassCard hover={false}>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                  <span>{categoryIcons[category]}</span>
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {items.map((skill, i) => {
                    const Icon = iconMap[skill]
                    return (
                      <motion.div
                        key={skill}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 dark:bg-white/5 hover:bg-white/10 transition-colors group cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {Icon ? (
                          <Icon className="w-7 h-7 text-indigo-500 dark:text-indigo-400 group-hover:text-purple-500 transition-colors" />
                        ) : (
                          <FaBrain className="w-7 h-7 text-indigo-500 dark:text-indigo-400" />
                        )}
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                          {skill}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
