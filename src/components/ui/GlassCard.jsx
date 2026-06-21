import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  const { isDark } = useTheme()

  return (
    <motion.div
      className={`rounded-2xl p-6 md:p-8 ${
        isDark ? 'glass' : 'glass-light shadow-lg shadow-indigo-500/10'
      } ${className}`}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
