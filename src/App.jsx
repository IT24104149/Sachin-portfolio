import AnimatedBackground from './components/layout/AnimatedBackground'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Achievements from './components/sections/Achievements'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
