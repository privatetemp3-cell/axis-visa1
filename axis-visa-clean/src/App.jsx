import { useState, useEffect } from 'react'
import './colors_and_type.css'
import './app.css'
import { UtilityBar, SiteNav, DisclaimerBand, Footer } from './chrome'
import { Hero, TrustStatement, WhoFor, Offer } from './sections-a'
import { Process, Refusals, WhyAxis, FounderNote, FAQ, FinalCTA } from './sections-b'
import { VisaChecker } from './sections-visa'
import { PreCheckModal } from './precheck'

// Design tokens: Ocean accent + Bright white ground (selected defaults)
const TOKENS = {
  '--stamp':       '#2F6FED',
  '--stamp-deep':  '#2057C9',
  '--stamp-tint':  '#DEE8FD',
  '--atlas':       '#2057C9',
  '--atlas-tint':  '#DEE8FD',
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [modal, setModal] = useState(false)

  // Apply design tokens once on mount
  useEffect(() => {
    const r = document.documentElement.style
    Object.entries(TOKENS).forEach(([k, v]) => r.setProperty(k, v))
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const start = () => setModal(true)

  return (
    <div style={{ overflowX: 'hidden', background: 'var(--paper)' }}>
      <UtilityBar />
      <SiteNav scrolled={scrolled} onStart={start} />
      <Hero onStart={start} />
      <VisaChecker />
      <TrustStatement />
      <WhoFor />
      <Offer onStart={start} />
      <Process />
      <Refusals />
      <WhyAxis />
      <FounderNote />
      <FAQ />
      <DisclaimerBand />
      <FinalCTA onStart={start} />
      <Footer onStart={start} />
      <PreCheckModal open={modal} onClose={() => setModal(false)} />
    </div>
  )
}
