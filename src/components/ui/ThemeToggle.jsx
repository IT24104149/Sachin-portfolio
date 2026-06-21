import { motion } from 'framer-motion'
import { HiMoon, HiSun } from 'react-icons/hi'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl glass hover:bg-white/10 transition-colors cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <HiSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <HiMoon className="w-5 h-5 text-indigo-600" />
      )}
    </motion.button>
  )
}
