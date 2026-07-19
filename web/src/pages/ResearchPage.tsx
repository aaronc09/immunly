import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import type { RSMGeography } from 'react-simple-maps';
import { useTheme } from '../context/ThemeContext';
import { ONLINE_PROGRAMS, INPERSON_PROGRAMS } from '../data/researchPrograms';
import type { OnlineProgram, InPersonProgram } from '../data/researchPrograms';
import './ResearchPage.css';

const TABS = ['How to Find Research', 'Online Opportunities', 'In-Person Opportunities'] as const;

export default function ResearchPage() {
  const [tab, setTab] = useState(0);

  return (
    <div className="page-content research-page">
      <div className="container">
        <header className="research-header">
          <h1>🔬 Research Opportunities</h1>
          <p>Your roadmap to real biomedical research — from your bedroom to a university lab.</p>
        </header>

        <div className="research-tabs" role="tablist">
          {TABS.map((t, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={tab === i}
              className={`research-tab-btn ${tab === i ? 'active' : ''}`}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="research-tab-content">
        <div className="container">
          {tab === 0 && <HowToFindTab />}
          {tab === 1 && <OnlineTab />}
          {tab === 2 && <InPersonTab />}
        </div>
      </div>
    </div>
  );
}

// ─── TAB 1: HOW TO FIND RESEARCH ─────────────────────────────────────────────

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

function HowToFindTab() {
  return (
    <div className="how-to-find">
      <div className="roadmap">

        {/* Stage 1 */}
        <div className="roadmap-stage">
          <div className="roadmap-stage__badge" style={{ background: 'var(--accent)' }}>
            <span className="stage-number">1</span>
            <span className="stage-icon">💻</span>
          </div>
          <div className="roadmap-stage__body">
            <h2 className="roadmap-stage__title">Start Here: Dry Lab</h2>
            <p className="roadmap-stage__sub">No equipment needed. Just curiosity and a computer.</p>
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
          </div>
        </div>

        <div className="roadmap-connector" aria-hidden>
          <span>→</span>
        </div>

        {/* Stage 2 */}
        <div className="roadmap-stage">
          <div className="roadmap-stage__badge" style={{ background: 'var(--success)' }}>
            <span className="stage-number">2</span>
            <span className="stage-icon">🎓</span>
          </div>
          <div className="roadmap-stage__body">
            <h2 className="roadmap-stage__title">Level Up: Programs &amp; Mentorship</h2>
            <p className="roadmap-stage__sub">Build credentials and get structured guidance.</p>
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
          </div>
        </div>

        <div className="roadmap-connector" aria-hidden>
          <span>→</span>
        </div>

        {/* Stage 3 */}
        <div className="roadmap-stage">
          <div className="roadmap-stage__badge" style={{ background: 'var(--warning)' }}>
            <span className="stage-number">3</span>
            <span className="stage-icon">🧪</span>
          </div>
          <div className="roadmap-stage__body">
            <h2 className="roadmap-stage__title">Wet Lab: The Hard Truth</h2>
            <p className="roadmap-stage__sub">Rare but possible — here's exactly how.</p>

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
                  {COLD_EMAIL_DOS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="cold-email-column cold-email-column--dont">
                <div className="cold-email-column__header">❌ DON'T</div>
                <ul>
                  {COLD_EMAIL_DONTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="email-template">
              <div className="email-template__label">📧 Template Structure</div>
              <div className="email-template__field email-template__subject">
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
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── TAB 2: ONLINE OPPORTUNITIES ─────────────────────────────────────────────

function OnlineTab() {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggle(id: string) {
    setExpanded((prev) => (prev === id ? null : id));
  }

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
            onToggle={() => toggle(prog.id)}
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
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setSelected(null);
    }
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
          <ComposableMap
            projection="geoAlbersUsa"
            width={960}
            height={600}
          >
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
                <Marker
                  key={prog.id}
                  coordinates={[prog.lon, prog.lat]}
                  onClick={() => setSelected(isActive ? null : prog.id)}
                >
                  <circle
                    r={isActive ? 11 : 8}
                    fill={isActive ? '#FF2020' : '#EF4444'}
                    stroke="white"
                    strokeWidth={isActive ? 2.5 : 2}
                    style={{ cursor: 'pointer', transition: 'r 0.15s ease, fill 0.15s ease' }}
                  />
                  {isActive && (
                    <circle r={18} fill="#EF4444" fillOpacity={0.2} />
                  )}
                  <title>{prog.name} — {prog.city}, {prog.state}</title>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        <div className={`program-panel ${selectedProg ? 'program-panel--visible' : ''}`}>
          {selectedProg ? (
            <ProgramDetail prog={selectedProg} onClose={() => setSelected(null)} />
          ) : (
            <div className="program-panel__empty">
              <span className="panel-empty-icon">📍</span>
              <p>Click a red pin on the map to see program details.</p>
            </div>
          )}
        </div>
      </div>

      <div className="inperson-list">
        <h3>All Programs</h3>
        <div className="inperson-list__grid">
          {INPERSON_PROGRAMS.map((prog) => (
            <button
              key={prog.id}
              className={`inperson-list-item ${selected === prog.id ? 'inperson-list-item--active' : ''}`}
              onClick={() => setSelected(selected === prog.id ? null : prog.id)}
            >
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
