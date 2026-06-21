import { personalInfo } from '../../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          &copy; {year}{' '}
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            {personalInfo.name}
          </span>
          . All rights reserved.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  )
}
