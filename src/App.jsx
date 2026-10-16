import useTheme from './hooks/useTheme'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import BeyondCode from './sections/BeyondCode'
import Contact from './sections/Contact'

export default function App() {
  const { theme, toggle } = useTheme()
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BeyondCode />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
