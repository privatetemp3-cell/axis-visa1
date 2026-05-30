import { useState, useRef } from 'react'
import { Reveal, Stagger } from './reveal'
import { Eyebrow, Btn, Icon, WRAP } from './primitives'
import { scrollToId } from './chrome'
import { SECTION_PAD } from './sections-a'

export function Process() {
  const steps = [
    ['01', 'list-checks', 'Document checklist', 'We give you a precise, destination-specific checklist so you know exactly what your application needs — nothing missing, nothing wasted.'],
    ['02', 'file-search', 'Document review', 'Every document is read the way a consulate reads it: checked for consistency, clarity and anything that invites a question.'],
    ['03', 'shield-alert', 'Risk review', 'A structured read of your real refusal risk — history, ties, funds and intent — so you know where you actually stand.'],
    ['04', 'search-x', 'Evidence gap review', 'We identify the weak areas and missing proof, then tell you precisely what to add to close each gap.'],
    ['05', 'file-check-2', 'Final preparation guidance', 'A final pass and clear guidance, so you submit a cleaner, more consistent application with confidence.'],
  ]
  return (
    <section id="process" style={{ background: 'var(--paper)', padding: SECTION_PAD }}>
      <div style={WRAP}>
        <Reveal><Eyebrow style={{ marginBottom: 18 }}>How it works</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="h2" style={{ maxWidth: 660, margin: '0 0 14px' }}>Five passes, one cleaner application.</h2></Reveal>
        <Reveal delay={140}><p className="lead" style={{ maxWidth: 560, margin: '0 0 52px' }}>A calm, structured process that prepares your file properly before you submit.</p></Reveal>
        <div style={{ borderTop: '2px solid var(--ink)' }}>
          <Stagger step={100}>
            {steps.map(([n, ic, t, d]) => (
              <ProcessRow key={n} n={n} ic={ic} t={t} d={d} />
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}

function ProcessRow({ n, ic, t, d }) {
  const [h, setH] = useState(false)
  return (
    <div className="proc-row" style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: 28, alignItems: 'start', padding: '28px 8px 28px 0', borderBottom: '1px solid var(--line)', background: h ? 'var(--paper-2)' : 'transparent', transition: 'background var(--dur) var(--ease)' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 30, letterSpacing: '-.03em', color: 'var(--stamp-deep)', lineHeight: 1 }}>{n}</div>
      <div style={{ maxWidth: 620 }}>
        <div className="h3" style={{ fontSize: 22, marginBottom: 8 }}>{t}</div>
        <p style={{ margin: 0, fontSize: 15.5, color: 'var(--fg-2)', lineHeight: 1.6 }}>{d}</p>
      </div>
      <div className="proc-ic" style={{ width: 46, height: 46, borderRadius: 'var(--r-sm)', border: `1px solid ${h ? 'var(--stamp)' : 'var(--line-strong)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'border-color var(--dur) var(--ease)' }}>
        <Icon name={ic} size={21} color={h ? 'var(--stamp-deep)' : 'var(--fg-2)'} />
      </div>
    </div>
  )
}

export function Refusals() {
  const cards = [
    ['banknote', 'Insufficient or unclear funds', 'Bank statements that look thin, irregular, or show money that appeared from nowhere.'],
    ['home', 'Weak ties to home', 'Nothing in the file that convincingly shows a reason — and an intention — to return.'],
    ['file-x', 'Inconsistent documents', 'Dates, names and details that do not line up across the application and its evidence.'],
    ['map-pin-off', 'Unclear travel purpose', 'A trip that reads as vague, implausible, or poorly costed against the stated reason.'],
    ['rotate-ccw', 'Previous refusals unaddressed', 'An earlier refusal carried into a new application without context or correction.'],
    ['package-x', 'Incomplete supporting evidence', 'Missing employment, business or study proof that leaves obvious questions open.'],
  ]
  return (
    <section id="refusals" style={{ background: 'var(--ink)', padding: SECTION_PAD, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(0deg,transparent 0 47px,rgba(244,246,251,.022) 47px 48px)', pointerEvents: 'none' }} />
      <div style={{ ...WRAP, position: 'relative' }}>
        <Reveal><Eyebrow onInk style={{ marginBottom: 18 }}>Why applications fail</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="h2" style={{ color: 'var(--paper)', maxWidth: 680, margin: '0 0 14px' }}>Common reasons tourist visas are refused.</h2></Reveal>
        <Reveal delay={140}><p className="lead" style={{ color: 'var(--fg-on-ink-2)', maxWidth: 560, margin: '0 0 52px' }}>Most refusals come from avoidable issues. These are the ones we look for first.</p></Reveal>
        <Stagger step={90} style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }} className="refusal-grid">
          {cards.map(([ic, t, d]) => (
            <RefusalCard key={t} ic={ic} t={t} d={d} />
          ))}
        </Stagger>
      </div>
    </section>
  )
}

function RefusalCard({ ic, t, d }) {
  const [h, setH] = useState(false)
  return (
    <div style={{ background: 'var(--ink-2)', border: `1px solid ${h ? 'rgba(244,246,251,.28)' : 'var(--line-ink)'}`, borderRadius: 'var(--r-md)', padding: '28px 26px', transition: 'transform var(--dur) var(--ease), border-color var(--dur) var(--ease)', transform: h ? 'translateY(-3px)' : 'none' }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <Icon name={ic} size={22} color="var(--stamp)" style={{ marginBottom: 18 }} />
      <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 17, color: 'var(--paper)', marginBottom: 9, letterSpacing: '-.01em', lineHeight: 1.25 }}>{t}</div>
      <p style={{ margin: 0, fontSize: 14.5, color: 'var(--fg-on-ink-2)', lineHeight: 1.58 }}>{d}</p>
    </div>
  )
}

export function WhyAxis() {
  const points = [
    ['search-check', 'We review before you risk the application fee', 'A full pre-submission check means you find the weak points first — not the embassy.'],
    ['target', 'Built for higher-risk travellers', 'Our entire process is designed around exactly the cases that get over-scrutinised.'],
    ['layers', 'Cleaner documents, stronger evidence', 'We help you turn a thin file into a consistent, well-evidenced application pack.'],
    ['receipt', 'One fixed, transparent fee', '£109 for the full support — no outcome-based charges, no surprise add-ons.'],
    ['user-round-check', 'Direct, honest guidance', 'Plain advice on where you stand and what to do next, with no false promises.'],
    ['globe', 'Non-UK destinations, done properly', 'Focused support for non-UK tourist visas, from Schengen to Thailand and beyond.'],
  ]
  return (
    <section id="why" style={{ background: 'var(--paper)', padding: SECTION_PAD }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 64, alignItems: 'start' }} className="why-grid">
        <div>
          <Reveal><Eyebrow style={{ marginBottom: 18 }}>Why Axis Visa</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="h2" style={{ margin: '0 0 18px' }}>Preparation you can stand behind.</h2></Reveal>
          <Reveal delay={140}>
            <p className="lead" style={{ fontSize: 19, margin: 0 }}>
              We cannot make the decision for an embassy. What we can do is make sure nothing in your
              file gives anyone a reason to doubt it.
            </p>
          </Reveal>
        </div>
        <Stagger step={80} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }} className="why-cells">
          {points.map(([ic, t, d]) => (
            <div key={t} style={{ background: 'var(--card)', padding: '26px 24px', height: '100%', boxSizing: 'border-box' }}>
              <Icon name={ic} size={21} color="var(--stamp-deep)" style={{ marginBottom: 14 }} />
              <div style={{ fontFamily: 'var(--font-text)', fontWeight: 600, fontSize: 16, color: 'var(--fg-1)', marginBottom: 8, lineHeight: 1.3 }}>{t}</div>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.56 }}>{d}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}

export function FounderNote() {
  return (
    <section style={{ background: 'var(--paper-2)', padding: SECTION_PAD, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: 56, alignItems: 'center' }} className="founder-grid">
        <Reveal y={22}>
          <div style={{ position: 'relative', width: '100%', maxWidth: 300, aspectRatio: '4 / 5', borderRadius: 'var(--r-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', background: 'linear-gradient(145deg, var(--paper-2), var(--line-strong))' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-3)' }}>
              <Icon name="user" size={64} color="var(--line-strong)" />
            </div>
            <div style={{ position: 'absolute', left: 16, bottom: 14, fontFamily: 'var(--font-label)', fontSize: 10.5, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--fg-3)', pointerEvents: 'none' }}>Founder · Axis Visa</div>
          </div>
        </Reveal>
        <div>
          <Reveal><Eyebrow style={{ marginBottom: 22 }}>A note from the founder</Eyebrow></Reveal>
          <Reveal delay={90}>
            <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(22px,2.4vw,30px)', lineHeight: 1.3, letterSpacing: '-.02em', color: 'var(--ink)', textWrap: 'balance' }}>
              "I started Axis Visa because I know what it feels like to move through the world under extra scrutiny. As someone with a complex lawful immigration journey, I learned that a strong application is not just about having documents, it is about making your story clear, consistent and properly evidenced. Axis Visa exists to help travellers prepare before they risk the application fee, the refusal stamp, and the opportunity they were hoping for."
            </blockquote>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ fontFamily: 'var(--font-wordmark)', fontSize: 24, color: 'var(--ink)', letterSpacing: '-.01em' }}>— Rocky Dube</div>
              <span style={{ width: 1, height: 22, background: 'var(--line-strong)' }}></span>
              <div style={{ fontFamily: 'var(--font-label)', fontSize: 12, fontWeight: 600, letterSpacing: '.06em', color: 'var(--fg-3)' }}>Operations Manager, Axis Visa</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, a, open, onToggle }) {
  const ref = useRef(null)
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button onClick={onToggle} style={{
        width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
        padding: '26px 0', display: 'flex', justifyContent: 'space-between', gap: 24, alignItems: 'center',
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, letterSpacing: '-.015em', color: 'var(--ink)',
      }}>
        <span style={{ textWrap: 'pretty' }}>{q}</span>
        <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: '50%', border: `1px solid ${open ? 'var(--stamp)' : 'var(--line-strong)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform var(--dur) var(--ease), border-color var(--dur) var(--ease), background var(--dur) var(--ease)', transform: open ? 'rotate(180deg)' : 'none', background: open ? 'var(--stamp-tint)' : 'transparent' }}>
          <Icon name="chevron-down" size={17} color={open ? 'var(--stamp-deep)' : 'var(--fg-2)'} />
        </span>
      </button>
      <div style={{ overflow: 'hidden', height: open ? (ref.current ? ref.current.scrollHeight : 'auto') : 0, transition: 'height 360ms cubic-bezier(0.2,0,0,1)' }}>
        <div ref={ref} style={{ paddingBottom: 28, maxWidth: 720 }}>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.62, color: 'var(--fg-2)' }}>{a}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const faqs = [
    ['Do you guarantee my visa will be approved?', 'No. Axis Visa does not make visa decisions and cannot guarantee approval — those decisions rest entirely with the relevant embassy, consulate or immigration authority. What we do is help you reduce avoidable mistakes and prepare stronger supporting evidence before you submit.'],
    ['What exactly do I get for £109?', 'A complete pre-submission review of your tourist visa application: a document checklist, a document review, a risk review, an evidence gap review, and final application preparation guidance. It does not include embassy fees, travel bookings, legal representation or any guarantee of approval.'],
    ['Which destinations do you support?', 'We support non-UK tourist visas, including the Schengen Area, South Africa, Thailand, Colombia, Mexico, the UAE and other non-UK destinations. We do not advise on UK visitor visas or provide UK immigration advice.'],
    ['Is this legal or immigration advice?', 'No. Axis Visa provides preparation and evidence support, not legal representation or immigration advice. We help you organise a cleaner, more consistent application; we do not act as your legal representative.'],
    ['I have been refused before. Can you still help?', 'Yes — these are exactly the cases we are built for. A previous refusal is not the end of the road, but it does need to be addressed properly. We help you understand what likely went wrong and prepare a stronger, more consistent application next time.'],
    ['How does the pre-check work?', 'Start the pre-check and answer a short set of questions about your situation, documents and destination. There is no charge to complete it. If it makes sense to proceed, we will explain the next steps and the £109 support fee.'],
  ]
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" style={{ background: 'var(--paper)', padding: SECTION_PAD }}>
      <div style={{ ...WRAP, maxWidth: 980 }}>
        <Reveal><Eyebrow style={{ marginBottom: 18 }}>Questions</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="h2" style={{ margin: '0 0 40px' }}>Clear answers, before you ask.</h2></Reveal>
        <Reveal delay={120}>
          <div style={{ borderTop: '2px solid var(--ink)' }}>
            {faqs.map(([q, a], i) => (
              <FAQItem key={i} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function FinalCTA({ onStart }) {
  return (
    <section style={{ background: 'var(--stamp)', padding: '92px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', borderTop: '1px solid rgba(255,255,255,.22)', pointerEvents: 'none' }} />
      <Reveal as="div" style={{ ...WRAP, textAlign: 'center', position: 'relative' }}>
        <div style={{ fontFamily: 'var(--font-label)', fontSize: 12, fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.82)', marginBottom: 22 }}>Prepare properly before you submit</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(30px,3.8vw,50px)', letterSpacing: '-.03em', lineHeight: 1.08, color: '#fff', margin: '0 auto', maxWidth: 760, textWrap: 'balance' }}>
          Start your pre-check and find the weak points first.
        </h2>
        <p style={{ margin: '20px auto 0', maxWidth: 520, fontSize: 17.5, lineHeight: 1.55, color: 'rgba(255,255,255,.9)' }}>
          It takes a few minutes, it is free, and it tells you exactly where you stand.
        </p>
        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <Btn variant="secondary" paper size="lg" onClick={onStart} style={{ background: 'var(--paper)', color: 'var(--ink)', borderColor: 'var(--paper)' }}>Start pre-check <Icon name="arrow-right" size={18} /></Btn>
          <Btn variant="ghost" paper size="lg" onClick={() => scrollToId('process')}>See how it works</Btn>
        </div>
      </Reveal>
    </section>
  )
}
