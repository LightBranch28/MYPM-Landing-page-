import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Stats from './sections/Stats/Stats.jsx'
import Challenge from './sections/Challenge/Challenge.jsx'
import Solution from './sections/Solution/Solution.jsx'
import Workflow from './sections/Workflow/Workflow.jsx'
import ProductPreview from './sections/ProductPreview/ProductPreview.jsx'
import FAQ from './sections/FAQ/FAQ.jsx'
import CTA from './sections/CTA/CTA.jsx'
import Reveal from './components/Reveal/Reveal.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Reveal><Hero /></Reveal>
        <Reveal delay={60}><Stats /></Reveal>
        <Reveal delay={80}><Challenge /></Reveal>
        <Reveal delay={80}><Solution /></Reveal>
        <Reveal delay={80}><Workflow /></Reveal>
        <Reveal delay={80}><ProductPreview /></Reveal>
        <Reveal delay={80}><FAQ /></Reveal>
        <Reveal delay={80}><CTA /></Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App