import { useState, useEffect, useRef, Fragment } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import type { RSMGeography } from 'react-simple-maps';
import { useTheme } from '../context/ThemeContext';
import { ONLINE_PROGRAMS, INPERSON_PROGRAMS } from '../data/researchPrograms';
import type { OnlineProgram, InPersonProgram } from '../data/researchPrograms';
import './ResearchPage.css';

const TABS = [
  { label: 'How to Find Research',    icon: '🔬' },
  { label: 'Online Opportunities',    icon: '💻' },
  { label: 'In-Person Opportunities', icon: '📍' },
] as const;

const STAGES = [
  { number: 1, icon: '💻', title: 'Start Here: Dry Lab',            color: 'var(--accent)',  sub: 'No equipment needed. Just curiosity and a computer.' },
  { number: 2, icon: '🎓', title: 'Level Up: Programs & Mentorship', color: 'var(--success)', sub: 'Build credentials and get structured guidance.' },
  { number: 3, icon: '🧪', title: 'Wet Lab: The Hard Truth',         color: 'var(--warning)', sub: 'Rare but possible — here\'s exactly how.' },
];

export default function ResearchPage() {
  const { theme } = useTheme();
  const [tab, setTab] = useState(0);
  const [activeStage, setActiveStage] = useState(0);
  const stageCardsRef = useRef<HTMLDivElement>(null);

  function scrollToStages() {
    stageCardsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="page-content research-page">

      {/* ── Hero — always visible ── */}
      <section className="research-hero">
        <div className="container research-hero__inner">
          <div className="hero-left">
            <span className="hero-label">RESEARCH PATH</span>
            <h1 className="hero-headline">
              From Curiosity<br />
              to <span className="hero-teal">Discovery.</span>
            </h1>
            <p className="hero-sub">
              Three paths. Countless opportunities.<br />
              Find the research journey that fits you.
            </p>
            <button className="hero-cta" onClick={scrollToStages}>
              Explore the Path →
            </button>
          </div>
          <div className="hero-right" aria-hidden="true">
            <img
              src={theme === 'dark' ? '/Computerdark.png' : '/computerlight.png'}
              alt=""
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <div className="container">

        {/* ── Tab navigation — above stage cards ── */}
        <div className="research-tabs" role="tablist">
          {TABS.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={tab === i}
              className={`research-tab-btn ${tab === i ? 'active' : ''}`}
              onClick={() => setTab(i)}
            >
              <span className="research-tab-btn__icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Expanding stage cards — only on Tab 0 ── */}
        {tab === 0 && (
          <div className="stage-card-row" ref={stageCardsRef}>
            {STAGES.map((s, i) => {
              const isActive = activeStage === i;
              return (
                <Fragment key={i}>
                  <div
                    className={`ssc ${isActive ? 'ssc--active' : 'ssc--inactive'}`}
                    style={{ '--ssc-color': s.color } as React.CSSProperties}
                    onClick={() => { if (!isActive) setActiveStage(i); }}
                  >
                    <div className="ssc__header">
                      <div className="ssc__top">
                        <div className="ssc__badge">{s.number}</div>
                        <span className="ssc__icon">{s.icon}</span>
                      </div>
                      <span className="ssc__title">{s.title}</span>
                      <span className="ssc__sub">{s.sub}</span>
                    </div>

                    <div className="ssc__content">
                      {i === 0 && <DryLabContent />}
                      {i === 1 && <ProgramContent />}
                      {i === 2 && <WetLabContent />}
                    </div>

                    {!isActive && <span className="ssc__illus" aria-hidden="true">{s.icon}</span>}
                  </div>
                  {i < 2 && <span className="ssc-arrow" aria-hidden="true">→</span>}
                </Fragment>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Tab content — Online and In-Person only ── */}
      <div className="research-tab-content">
        <div className="container">
          {tab === 1 && <OnlineTab />}
          {tab === 2 && <InPersonTab />}
        </div>
      </div>
    </div>
  );
}

// ─── STAGE CARD CONTENT ───────────────────────────────────────────────────────

const DRY_LAB_CARDS = [
  {
    icon: '📄',
    title: 'Literature Reviews',
    body: 'Read papers on PubMed and Google Scholar. Summarize 5–10 papers on a topic you care about. This builds genuine expertise and proves to future mentors that you can engage with primary literature.',
  },
  {
    icon: '🧬',
    title: 'Computational Biology',
    body: 'Analyze public genomic datasets from NCBI, GEO, or UCSC Genome Browser — all free. Learn Python with pandas and BioPython, or R with Bioconductor. No equipment required.',
  },
  {
    icon: '🤖',
    title: 'Machine Learning in Biology',
    body: 'Build disease prediction models, protein structure classifiers, or drug-target interaction predictors using scikit-learn or PyTorch. Kaggle has biology-specific datasets to practice on.',
  },
  {
    icon: '⚡',
    title: 'Why Start Here',
    highlight: true,
    body: 'Free tools, no equipment, no application required. A well-documented GitHub project from dry lab work is the strongest application asset you can have — it proves you can actually do research.',
  },
];

const PROGRAM_CARDS = [
  {
    icon: '🏆',
    title: 'Apply to Structured Programs',
    body: 'Science fairs (ISEF), online mentorship programs (Polygence, Inspirit AI), and competitive university summer programs all provide structure, mentorship, and credentials for your portfolio.',
  },
  {
    icon: '📧',
    title: 'Reach Out to Professors',
    body: 'Cold email computational biologists and bioinformaticians at nearby universities. Data analysis projects are far easier for a professor to assign to a motivated high schooler than wet lab work.',
  },
  {
    icon: '📁',
    title: 'Build a Research Portfolio',
    body: 'Create a GitHub profile with your dry lab projects. Write a brief "research summary" document. This becomes your application to any competitive program — treat it like a mini-CV.',
  },
];

const COLD_EMAIL_DOS = [
  'Keep it under 150 words',
  'Reference their specific research and why it interests you',
  'Mention relevant skills (Python, R, data analysis, coursework)',
  'Ask for a 15-minute call — not a full position right away',
  'Follow up once after 2 weeks if no reply',
  'Email PhD students and postdocs, not just the PI',
];

const COLD_EMAIL_DONTS = [
  'Send a generic copy-paste email',
  'Attach a long resume as your opener',
  'Ask for pay or course credit immediately',
  'Email 50 labs the exact same message',
  'Give up after one rejection',
];

function DryLabContent() {
  return (
    <div className="stage-cards">
      {DRY_LAB_CARDS.map((c) => (
        <div key={c.title} className={`stage-card ${c.highlight ? 'stage-card--highlight' : ''}`}>
          <span className="stage-card__icon">{c.icon}</span>
          <div>
            <strong>{c.title}</strong>
            <p>{c.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgramContent() {
  return (
    <div className="stage-cards">
      {PROGRAM_CARDS.map((c) => (
        <div key={c.title} className="stage-card">
          <span className="stage-card__icon">{c.icon}</span>
          <div>
            <strong>{c.title}</strong>
            <p>{c.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WetLabContent() {
  return (
    <>
      <div className="stage-callout">
        <p>
          Wet lab positions for high schoolers are <strong>rare and competitive</strong>. Most labs
          don't have the bandwidth to train a high schooler on equipment. But it <em>is</em> possible —
          through persistence and targeted cold emailing.
        </p>
      </div>

      <h3 className="cold-email-heading">The Cold Email Guide</h3>

      <div className="cold-email-grid">
        <div className="cold-email-column cold-email-column--do">
          <div className="cold-email-column__header">✅ DO</div>
          <ul>
            {COLD_EMAIL_DOS.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="cold-email-column cold-email-column--dont">
          <div className="cold-email-column__header">❌ DON'T</div>
          <ul>
            {COLD_EMAIL_DONTS.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className="email-template">
        <div className="email-template__label">📧 Template Structure</div>
        <div className="email-template__field">
          <span className="email-field-key">Subject:</span>{' '}
          [Their research topic] — High School Researcher Inquiry
        </div>
        <div className="email-template__body">
          <p><span className="email-field-key">Intro (3 sentences):</span> Who you are, your school, and what you're passionate about in their field.</p>
          <p><span className="email-field-key">Their work (1–2 sentences):</span> Reference a specific paper or project of theirs and what excited you about it.</p>
          <p><span className="email-field-key">Your skills (1 sentence):</span> Python, R, data analysis experience, relevant coursework.</p>
          <p><span className="email-field-key">Ask (1 sentence):</span> "Would you be open to a 15-minute call to discuss potential computational projects?"</p>
        </div>
      </div>
    </>
  );
}

// ─── TAB 2: ONLINE OPPORTUNITIES ─────────────────────────────────────────────

function OnlineTab() {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <div className="online-tab">
      <p className="tab-intro">
        These programs run virtually — apply from anywhere. Listed roughly by selectivity (least to most).
      </p>
      <div className="program-list">
        {ONLINE_PROGRAMS.map((prog) => (
          <OnlineProgramCard
            key={prog.id}
            prog={prog}
            isOpen={expanded === prog.id}
            onToggle={() => setExpanded((p) => (p === prog.id ? null : prog.id))}
          />
        ))}
      </div>
    </div>
  );
}

function OnlineProgramCard({ prog, isOpen, onToggle }: { prog: OnlineProgram; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`online-card ${isOpen ? 'online-card--open' : ''}`}>
      <button className="online-card__header" onClick={onToggle} aria-expanded={isOpen}>
        <div className="online-card__meta">
          <span className="online-card__name">{prog.name}</span>
          <span className="online-card__org">{prog.org}</span>
        </div>
        <div className="online-card__right">
          <span className="online-card__deadline">📅 {prog.deadline}</span>
          <span className="online-card__chevron">{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>
      <div className="online-card__short">{prog.shortDesc}</div>
      {isOpen && (
        <div className="online-card__details">
          <p className="online-card__full-desc">{prog.fullDesc}</p>
          <div className="online-card__info-grid">
            <div className="info-row"><span className="info-key">Eligibility</span><span>{prog.eligibility}</span></div>
            <div className="info-row"><span className="info-key">Duration</span><span>{prog.duration}</span></div>
            <div className="info-row"><span className="info-key">Cost</span><span>{prog.cost}</span></div>
          </div>
          <a href={prog.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary apply-btn">
            Apply Now →
          </a>
        </div>
      )}
    </div>
  );
}

// ─── TAB 3: IN-PERSON OPPORTUNITIES ──────────────────────────────────────────

function InPersonTab() {
  const { theme } = useTheme();
  const [selected, setSelected] = useState<string | null>(null);

  const mapFill   = theme === 'dark' ? '#1C2A45' : '#DDE8F5';
  const mapStroke = theme === 'dark' ? '#253654' : '#B8CCE4';
  const mapHover  = theme === 'dark' ? '#253654' : '#C8D9EF';
  const selectedProg = INPERSON_PROGRAMS.find((p) => p.id === selected) ?? null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="inperson-tab">
      <p className="tab-intro">
        Click a pin to see program details. Pins show continental US programs — more being added.
      </p>
      <div className="inperson-layout">
        <div className="map-wrapper">
          <ComposableMap projection="geoAlbersUsa" width={960} height={600}>
            <Geographies geography="/us-states.json">
              {({ geographies }: { geographies: RSMGeography[] }) =>
                geographies.map((geo: RSMGeography) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: mapFill, stroke: mapStroke, strokeWidth: 0.6, outline: 'none' },
                      hover:   { fill: mapHover, stroke: mapStroke, strokeWidth: 0.6, outline: 'none' },
                      pressed: { fill: mapHover, stroke: mapStroke, strokeWidth: 0.6, outline: 'none' },
                    }}
                  />
                ))
              }
            </Geographies>
            {INPERSON_PROGRAMS.map((prog) => {
              const isActive = selected === prog.id;
              return (
                <Marker key={prog.id} coordinates={[prog.lon, prog.lat]} onClick={() => setSelected(isActive ? null : prog.id)}>
                  <circle r={isActive ? 11 : 8} fill={isActive ? '#FF2020' : '#EF4444'} stroke="white" strokeWidth={isActive ? 2.5 : 2}
                    style={{ cursor: 'pointer', transition: 'r 0.15s ease, fill 0.15s ease' }} />
                  {isActive && <circle r={18} fill="#EF4444" fillOpacity={0.2} />}
                  <title>{prog.name} — {prog.city}, {prog.state}</title>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>
        <div className={`program-panel ${selectedProg ? 'program-panel--visible' : ''}`}>
          {selectedProg
            ? <ProgramDetail prog={selectedProg} onClose={() => setSelected(null)} />
            : <div className="program-panel__empty"><span className="panel-empty-icon">📍</span><p>Click a red pin on the map to see program details.</p></div>
          }
        </div>
      </div>
      <div className="inperson-list">
        <h3>All Programs</h3>
        <div className="inperson-list__grid">
          {INPERSON_PROGRAMS.map((prog) => (
            <button key={prog.id}
              className={`inperson-list-item ${selected === prog.id ? 'inperson-list-item--active' : ''}`}
              onClick={() => setSelected(selected === prog.id ? null : prog.id)}>
              <span className="list-item-pin">📍</span>
              <span className="list-item-name">{prog.name}</span>
              <span className="list-item-loc">{prog.city}, {prog.state}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgramDetail({ prog, onClose }: { prog: InPersonProgram; onClose: () => void }) {
  return (
    <div className="program-detail">
      <button className="program-detail__close" onClick={onClose} aria-label="Close">✕</button>
      <div className="program-detail__location">📍 {prog.city}, {prog.state}</div>
      <h3 className="program-detail__name">{prog.name}</h3>
      <p className="program-detail__institution">{prog.institution}</p>
      <p className="program-detail__desc">{prog.description}</p>
      <div className="program-detail__meta">
        <div className="detail-meta-row"><span>⏱</span><span>{prog.duration}</span></div>
        <div className="detail-meta-row"><span>📅</span><span>Deadline: {prog.deadline}</span></div>
      </div>
      <a href={prog.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary apply-btn">
        Apply Now →
      </a>
    </div>
  );
}
