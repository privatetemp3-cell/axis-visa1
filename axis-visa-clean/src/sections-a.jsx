import { useRef } from 'react'
import { Reveal, Stagger, useParallax } from './reveal'
import { Mark, Eyebrow, Btn, Icon, WRAP } from './primitives'
import { scrollToId } from './chrome'

const SECTION_PAD = '104px 0'
export { SECTION_PAD }

// Tall cinematic hero image plate
function HeroPlate() {
  const ref = useRef(null)
  useParallax(ref, 0.06)
  return (
    <div style={{ position: 'relative', height: 540, borderRadius: 'var(--r-md)', overflow: 'hidden', background: 'linear-gradient(150deg,#1b2730,#33414b)', boxShadow: 'var(--shadow-lg)' }}>
      <div ref={ref} style={{ position: 'absolute', inset: '-8% 0', height: '116%' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#1b2730 0%,#2d3f4e 40%,#1e3040 70%,#0f1c28 100%)' }} />
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, top: '62%', borderTop: '1px solid rgba(244,246,251,.45)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '62%', left: '78%', width: 11, height: 11, borderRadius: '50%', background: 'var(--stamp)', transform: 'translate(-50%,-50%)', boxShadow: '0 0 0 5px color-mix(in srgb, var(--stamp) 28%, transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,20,26,.55), transparent 42%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', left: 18, bottom: 16, fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(244,246,251,.82)', pointerEvents: 'none' }}>
        CASE No. AX-PRE · ISTANBUL <span style={{ color: 'var(--stamp)' }}>→</span> SCHENGEN
      </div>
    </div>
  )
}

export function Hero({ onStart }) {
  return (
    <section id="top" style={{ background: 'var(--paper)', borderBottom: '1px solid var(--line)', overflow: 'hidden' }}>
      <div style={{ ...WRAP, padding: '80px 40px 84px', display: 'grid', gridTemplateColumns: '1.04fr .96fr', gap: 60, alignItems: 'center' }} className="hero-grid">
        <div>
          <Reveal delay={0}><Eyebrow style={{ marginBottom: 22 }}>Tourist visa support · Non-UK</Eyebrow></Reveal>
          <Reveal delay={90}>
            <h1 className="display" style={{ fontSize: 'clamp(38px, 4.6vw, 62px)', margin: 0, lineHeight: 1.03 }}>
              Tourist visa support for travellers who cannot afford a weak application.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="lead" style={{ marginTop: 26, maxWidth: 520 }}>
              Axis Visa helps you review your documents, identify weak areas, and prepare a cleaner,
              more consistent tourist visa application before submission.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div style={{ display: 'flex', gap: 14, marginTop: 34, alignItems: 'center', flexWrap: 'wrap' }}>
              <Btn variant="primary" size="lg" onClick={onStart}>Start pre-check <Icon name="arrow-right" size={18} /></Btn>
              <Btn variant="ghost" size="lg" onClick={() => scrollToId('process')}>See how it works <Icon name="arrow-down" size={17} /></Btn>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div style={{ display: 'flex', gap: 26, marginTop: 42, paddingTop: 26, borderTop: '1px solid var(--line)', flexWrap: 'wrap' }}>
              {[['£109', 'Fixed support fee'], ['1', 'Application, fully reviewed'], ['5', 'Review passes per file']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-.03em', color: 'var(--ink)', lineHeight: 1 }}>{n}</div>
                  <div className="caption" style={{ marginTop: 6, maxWidth: 130 }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={160} y={24}><HeroPlate /></Reveal>
      </div>
    </section>
  )
}

export function TrustStatement() {
  return (
    <section style={{ background: 'var(--ink)', padding: '108px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,transparent 0 47px,rgba(244,246,251,.025) 47px 48px)', pointerEvents: 'none' }} />
      <Reveal as="div" style={{ ...WRAP, maxWidth: 1000, textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 30 }}><Mark size={42} paper /></div>
        <Eyebrow onInk style={{ marginBottom: 26, justifyContent: 'center' }}>The Axis approach</Eyebrow>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.16, letterSpacing: '-.03em', color: 'var(--paper)', margin: 0, textWrap: 'balance' }}>
          A refusal is rarely one big problem. It is a series of small, avoidable ones.
          We find them and fix them <span style={{ color: 'var(--stamp)' }}>before you risk the application fee.</span>
        </h2>
        <p style={{ margin: '30px auto 0', maxWidth: 620, fontSize: 17.5, lineHeight: 1.6, color: 'var(--fg-on-ink-2)' }}>
          We are not a cheap visa shop and we do not make decisions for embassies. We help you prepare
          properly — cleaner documents, stronger evidence, a clearer application pack.
        </p>
      </Reveal>
    </section>
  )
}

export function WhoFor() {
  const items = [
    ['book-marked', 'Weaker passports', 'Travelling on a passport that draws extra scrutiny at the visa window.'],
    ['rotate-ccw', 'Previous refusals', 'One or more past refusals that now need to be addressed head-on, not hidden.'],
    ['route', 'Complicated travel histories', 'Gaps, mixed records or unusual routes that raise questions you should answer first.'],
    ['compass', 'Limited travel experience', 'Few or no prior stamps, so the file has to do the reassuring on its own.'],
    ['shield-alert', 'Higher refusal risk', 'Any situation where an avoidable mistake could cost you the application fee.'],
    ['user-round', 'First-time applicants', 'Applying alone for the first time and unsure what a consulate actually looks for.'],
  ]
  return (
    <section id="who" style={{ background: 'var(--paper)', padding: SECTION_PAD }}>
      <div style={WRAP}>
        <Reveal><Eyebrow style={{ marginBottom: 18 }}>Who this is for</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="h2" style={{ maxWidth: 680, margin: '0 0 14px' }}>Built for travellers who carry more risk than most.</h2></Reveal>
        <Reveal delay={140}><p className="lead" style={{ maxWidth: 560, margin: '0 0 52px' }}>If any of these describe you, a standard application probably is not enough.</p></Reveal>
        <Stagger step={80} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }} className="who-grid">
          {items.map(([ic, t, d]) => (
            <div key={t} className="who-cell" style={{ background: 'var(--card)', padding: '30px 28px', height: '100%', boxSizing: 'border-box', transition: 'background var(--dur) var(--ease)' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--paper-2)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--card)'}>
              <div style={{ width: 42, height: 42, borderRadius: 'var(--r-sm)', border: '1px solid var(--line-strong)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <Icon name={ic} size={20} color="var(--stamp-deep)" />
              </div>
              <div className="h4" style={{ marginBottom: 8, fontSize: 17 }}>{t}</div>
              <p style={{ margin: 0, fontSize: 14.5, color: 'var(--fg-2)', lineHeight: 1.58 }}>{d}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function Offer({ onStart }) {
  const included = ['Document checklist', 'Document review', 'Risk review', 'Evidence gap review', 'Final application preparation guidance']
  const excluded = ['Embassy fees', 'Travel bookings', 'Legal representation', 'Guaranteed approval', 'UK immigration advice']
  return (
    <section id="offer" style={{ background: 'var(--paper-2)', padding: SECTION_PAD, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={WRAP}>
        <Reveal><Eyebrow style={{ marginBottom: 18 }}>The offer</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="h2" style={{ maxWidth: 640, margin: '0 0 14px' }}>One clear service. One fixed fee.</h2></Reveal>
        <Reveal delay={140}><p className="lead" style={{ maxWidth: 560, margin: '0 0 48px' }}>No outcome-based charges and no upsell maze — just a properly reviewed application pack.</p></Reveal>
        <Reveal delay={100} y={20}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, background: 'var(--stamp-tint)', border: '1px solid var(--stamp)', borderRadius: 'var(--r-md)', padding: '22px 28px', marginBottom: 18, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: '1 1 360px' }}>
              <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: '50%', background: 'var(--stamp)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="badge-check" size={24} color="#fff" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21, letterSpacing: '-.02em', color: 'var(--stamp-deep)' }}>The pre-check is free</span>
                  <span style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--stamp-deep)', background: 'color-mix(in srgb, var(--stamp) 22%, transparent)', padding: '3px 9px', borderRadius: 'var(--r-pill)' }}>£0 to start</span>
                </div>
                <p style={{ margin: '5px 0 0', fontSize: 14.5, lineHeight: 1.5, color: 'var(--fg-2)' }}>
                  Submit your details and get an honest read on where you stand — at no cost. You only pay the £109 if you choose to proceed.
                </p>
              </div>
            </div>
            <Btn variant="primary" onClick={onStart} style={{ flexShrink: 0 }}>Start free pre-check <Icon name="arrow-right" size={16} /></Btn>
          </div>
        </Reveal>
        <Reveal delay={120} y={26}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--line-strong)', borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '.92fr 1.08fr' }} className="offer-grid">
              <div style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '44px 40px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--stamp)', marginBottom: 18 }}>Tourist visa application support</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, whiteSpace: 'nowrap' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 68, letterSpacing: '-.035em', lineHeight: .9, color: 'var(--paper)' }}>£109</span>
                  <span style={{ fontSize: 14.5, color: 'var(--fg-on-ink-2)', paddingBottom: 8, whiteSpace: 'nowrap' }}>one-off</span>
                </div>
                <p style={{ margin: '22px 0 0', fontSize: 15.5, lineHeight: 1.6, color: 'var(--fg-on-ink-2)', maxWidth: 320 }}>
                  A complete pre-submission review of your tourist visa file, with clear guidance on what to strengthen before you apply.
                </p>
                <div style={{ marginTop: 'auto', paddingTop: 30 }}>
                  <Btn variant="primary" size="lg" onClick={onStart} style={{ width: '100%', justifyContent: 'center' }}>Start pre-check <Icon name="arrow-right" size={18} /></Btn>
                  <div style={{ marginTop: 14, fontSize: 12.5, color: 'var(--fg-on-ink-3)', textAlign: 'center', lineHeight: 1.5 }}>
                    Pre-check is free. The £109 fee applies only if you choose to proceed.
                  </div>
                </div>
              </div>
              <div style={{ padding: '44px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36 }} className="offer-lists">
                <div>
                  <div style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--stamp-deep)', marginBottom: 18 }}>What's included</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {included.map((f) => (
                      <div key={f} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 15, color: 'var(--fg-1)', lineHeight: 1.4 }}>
                        <Icon name="check" size={17} color="var(--stamp-deep)" style={{ marginTop: 1 }} />{f}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-label)', fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--fg-3)', marginBottom: 18 }}>Not included</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {excluded.map((f) => (
                      <div key={f} style={{ display: 'flex', gap: 11, alignItems: 'flex-start', fontSize: 15, color: 'var(--fg-3)', lineHeight: 1.4 }}>
                        <Icon name="minus" size={17} color="var(--fg-3)" style={{ marginTop: 1 }} />{f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
