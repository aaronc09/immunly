import { useState, useEffect, useRef, Fragment } from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import type { RSMGeography } from 'react-simple-maps';
import { useTheme } from '../context/ThemeContext';
import { ONLINE_PROGRAMS, INPERSON_PROGRAMS, COMPETITIONS } from '../data/researchPrograms';
import type { OnlineProgram, InPersonProgram, Competition } from '../data/researchPrograms';
import './ResearchPage.css';

const TABS = [
  { label: 'How to Find Research',    icon: '🔬' },
  { label: 'Online Research Programs', icon: '💻' },
  { label: 'In-Person Opportunities', icon: '📍' },
  { label: 'Competitions',            icon: '🏆' },
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

      {/* ── Tab content ── */}
      <div className="research-tab-content">
        <div className="container">
          {tab === 1 && <OnlineTab />}
          {tab === 2 && <InPersonTab />}
          {tab === 3 && <CompetitionsTab />}
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

// ─── TAB 2: COMPETITIONS ─────────────────────────────────────────────────────

const COMPETITION_FILTERS = ['All', 'Free', 'Biology', 'National', 'International', 'Prestigious'] as const;

function CompetitionsTab() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const visible = filter === 'All'
    ? COMPETITIONS
    : COMPETITIONS.filter((c) => c.tags.includes(filter));

  return (
    <div className="competitions-tab">
      <p className="tab-intro">
        These competitions recognize original research and outstanding STEM achievement.
        Listed by prestige — most selective first.
      </p>

      <div className="comp-filter-bar">
        {COMPETITION_FILTERS.map((f) => (
          <button
            key={f}
            className={`comp-filter-btn ${filter === f ? 'comp-filter-btn--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="comp-list">
        {visible.map((comp) => (
          <CompetitionCard
            key={comp.id}
            comp={comp}
            isOpen={expanded === comp.id}
            onToggle={() => setExpanded((p) => (p === comp.id ? null : comp.id))}
          />
        ))}
      </div>
    </div>
  );
}

function CompetitionCard({ comp, isOpen, onToggle }: { comp: Competition; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`comp-card ${isOpen ? 'comp-card--open' : ''}`}>
      <button className="comp-card__header" onClick={onToggle} aria-expanded={isOpen}>
        <div className="comp-card__left">
          <span className="comp-card__trophy">🏆</span>
          <div className="comp-card__meta">
            <span className="comp-card__name">{comp.name}</span>
            <span className="comp-card__org">{comp.org}</span>
          </div>
        </div>
        <div className="comp-card__right">
          <span className="comp-card__prize">{comp.prize}</span>
          <span className="comp-card__chevron">{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>
      <div className="comp-card__short">{comp.description.split('.')[0]}.</div>

      {isOpen && (
        <div className="comp-card__details">
          <p className="comp-card__full-desc">{comp.description}</p>
          <div className="comp-card__info-grid">
            <div className="info-row"><span className="info-key">Eligibility</span><span>{comp.eligibility}</span></div>
            <div className="info-row"><span className="info-key">Deadline</span><span>{comp.deadline}</span></div>
            <div className="info-row"><span className="info-key">Cost</span><span>{comp.cost}</span></div>
            <div className="info-row"><span className="info-key">Prize</span><span>{comp.prize}</span></div>
          </div>
          <div className="comp-card__tags">
            {comp.tags.map((tag) => (
              <span key={tag} className="comp-tag">{tag}</span>
            ))}
          </div>
          <a href={comp.url} target="_blank" rel="noopener noreferrer" className="btn comp-apply-btn">
            Learn More →
          </a>
        </div>
      )}
    </div>
  );
}

// ─── TAB 1: ONLINE OPPORTUNITIES ─────────────────────────────────────────────

const ONLINE_FILTERS = [
  'All', 'Free', 'Paid', 'Biology', 'AI', 'Selective',
  'Beginner', '1-on-1', 'Small Group', 'International',
  'Publication Support', 'College Credit', 'Year-Long',
  'In-Person', 'Competition', 'Scholarship',
] as const;

function getFormatLabel(format: string): string {
  const lower = format.toLowerCase();
  if (lower.includes('competition') || lower.includes('judged') ||
      lower.includes('symposia') || lower.includes('state-level')) return 'Competition';
  if (lower.includes('residential')) return 'Residential';
  if (lower.includes('in-person')) return 'In-Person';
  if (lower.includes('project submission')) return 'Award';
  const stripped = format.replace(/^Online,\s*/i, '');
  const stripLower = stripped.toLowerCase();
  if (stripLower.includes('year')) return 'Year-Long';
  if (stripLower.includes('group') && stripLower.includes('1-on-1')) return 'Online 1-on-1 / Group';
  if (stripLower.includes('1-on-1')) return 'Online 1-on-1';
  if (stripLower.includes('small group')) return 'Online Small Group';
  if (stripLower.includes('project program') || stripLower.includes('group-based')) return 'Online Group';
  if (stripLower.includes('self-paced') || stripLower.includes('course')) return 'Online Course';
  return lower.startsWith('online') ? 'Online' : stripped.split(',')[0].trim();
}

function OnlineTab() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const visible = filter === 'All'
    ? ONLINE_PROGRAMS
    : ONLINE_PROGRAMS.filter((p) => p.tags.includes(filter) || p.type === filter);

  return (
    <div className="online-tab">
      <div className="online-disclaimer">
        Program details including costs, deadlines, and formats change frequently. Always verify current information on each program's official website before applying. Immunly does not endorse or have affiliations with any listed program.
      </div>

      <p className="tab-intro">
        Online research mentorship, academic research, and structured project programs for high school students. Programs vary in selectivity, mentor involvement, and final outcomes — read descriptions carefully.
      </p>

      <div className="online-filter-bar">
        {ONLINE_FILTERS.map((f) => (
          <button
            key={f}
            className={`online-filter-btn ${filter === f ? 'online-filter-btn--active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="program-list">
        {visible.map((prog) => (
          <OnlineProgramCard
            key={prog.id}
            prog={prog}
            isOpen={expanded === prog.id}
            onToggle={() => setExpanded((p) => (p === prog.id ? null : prog.id))}
          />
        ))}
        {visible.length === 0 && (
          <p className="no-results">No programs match this filter.</p>
        )}
      </div>
    </div>
  );
}

function getCostBadge(prog: OnlineProgram): { cls: string; label: string } {
  if (prog.type === 'Free' && prog.cost.toLowerCase().includes('enter')) {
    return { cls: 'online-badge online-badge--free-enter', label: 'Free to Enter' };
  }
  if (prog.type === 'Free') return { cls: 'online-badge online-badge--free', label: 'Free' };
  if (prog.type === 'Selective') return { cls: 'online-badge online-badge--selective', label: 'Selective' };
  return { cls: 'online-badge online-badge--paid', label: 'Paid' };
}

function OnlineProgramCard({ prog, isOpen, onToggle }: { prog: OnlineProgram; isOpen: boolean; onToggle: () => void }) {
  const costBadge = getCostBadge(prog);

  return (
    <div className={`online-card ${isOpen ? 'online-card--open' : ''}`}>
      <button className="online-card__header" onClick={onToggle} aria-expanded={isOpen}>
        <div className="online-card__meta">
          <div className="online-card__name-row">
            <span className={costBadge.cls}>{costBadge.label}</span>
            <span className="online-badge online-badge--format">{getFormatLabel(prog.format)}</span>
            <span className="online-card__name">{prog.name}</span>
          </div>
          <span className="online-card__org">{prog.organization}</span>
        </div>
        <div className="online-card__right">
          <span className="online-card__chevron">{isOpen ? '▲' : '▼'}</span>
        </div>
      </button>
      <div className="online-card__short">{prog.description.split('.')[0]}.</div>
      {isOpen && (
        <div className="online-card__details">
          <p className="online-card__full-desc">{prog.description}</p>
          <div className="online-card__info-grid">
            <div className="info-row"><span className="info-key">Eligibility</span><span>{prog.eligibility}</span></div>
            <div className="info-row"><span className="info-key">Format</span><span>{prog.format}</span></div>
            <div className="info-row"><span className="info-key">Cost</span><span>{prog.cost}</span></div>
            <div className="info-row"><span className="info-key">Deadline</span><span>{prog.deadline}</span></div>
          </div>
          <div className="online-card__tags">
            {prog.tags.map((tag) => <span key={tag} className="online-tag">{tag}</span>)}
          </div>
          <a href={prog.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary apply-btn">
            Apply / Learn More →
          </a>
        </div>
      )}
    </div>
  );
}

// ─── TAB 3: IN-PERSON OPPORTUNITIES ──────────────────────────────────────────

interface ClusterItem {
  ids: string[];
  lat: number;
  lon: number;
}

type MapSelection =
  | { type: 'single'; id: string }
  | { type: 'cluster'; ids: string[] }
  | null;

// Group programs within (0.3 / zoom) degrees of each other
function buildClusters(programs: InPersonProgram[], zoom: number): ClusterItem[] {
  const threshold = 0.3 / Math.max(zoom, 1);
  const remaining = [...programs];
  const clusters: ClusterItem[] = [];

  while (remaining.length > 0) {
    const anchor = remaining.shift()!;
    const group: InPersonProgram[] = [anchor];

    for (let i = remaining.length - 1; i >= 0; i--) {
      const other = remaining[i];
      if (
        Math.abs(anchor.lat - other.lat) < threshold &&
        Math.abs(anchor.lon - other.lon) < threshold
      ) {
        group.push(other);
        remaining.splice(i, 1);
      }
    }

    clusters.push({
      ids: group.map((p) => p.id),
      lat: group.reduce((s, p) => s + p.lat, 0) / group.length,
      lon: group.reduce((s, p) => s + p.lon, 0) / group.length,
    });
  }

  return clusters;
}

const DEFAULT_CENTER: [number, number] = [-97, 38];
const DEFAULT_ZOOM = 1;

function InPersonTab() {
  const { theme } = useTheme();
  const [selection, setSelection] = useState<MapSelection>(null);
  const [mapZoom, setMapZoom] = useState(DEFAULT_ZOOM);
  const [mapCenter, setMapCenter] = useState<[number, number]>(DEFAULT_CENTER);
  const [liveZoom, setLiveZoom] = useState(DEFAULT_ZOOM);

  const mapFill   = theme === 'dark' ? '#1C2A45' : '#DDE8F5';
  const mapStroke = theme === 'dark' ? '#253654' : '#B8CCE4';
  const mapHover  = theme === 'dark' ? '#253654' : '#C8D9EF';

  const clusters = buildClusters(INPERSON_PROGRAMS, liveZoom);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelection(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function handleClusterClick(cluster: ClusterItem) {
    if (cluster.ids.length === 1) {
      const id = cluster.ids[0];
      setSelection((sel) =>
        sel?.type === 'single' && sel.id === id ? null : { type: 'single', id }
      );
    } else if (liveZoom < 6) {
      setMapCenter([cluster.lon, cluster.lat]);
      const newZoom = Math.min(8, liveZoom * 2.5);
      setMapZoom(newZoom);
      setLiveZoom(newZoom);
    } else {
      setSelection({ type: 'cluster', ids: cluster.ids });
    }
  }

  function handleZoomIn() {
    const newZoom = Math.min(8, mapZoom * 1.6);
    setMapZoom(newZoom);
  }

  function handleZoomOut() {
    const newZoom = Math.max(1, mapZoom / 1.6);
    setMapZoom(newZoom);
  }

  function handleReset() {
    setMapZoom(DEFAULT_ZOOM);
    setMapCenter(DEFAULT_CENTER);
    setLiveZoom(DEFAULT_ZOOM);
    setSelection(null);
  }

  const selectedProg =
    selection?.type === 'single'
      ? INPERSON_PROGRAMS.find((p) => p.id === selection.id) ?? null
      : null;

  return (
    <div className="inperson-tab">
      <p className="tab-intro">
        Click a pin to see program details. Scroll or pinch to zoom; drag to pan.
        Numbered clusters contain multiple programs — click to zoom in.
      </p>
      <div className="inperson-layout">
        <div className="map-container">
          <div className="map-zoom-controls">
            <button className="map-zoom-btn" onClick={handleZoomIn} aria-label="Zoom in">+</button>
            <button className="map-zoom-btn" onClick={handleZoomOut} aria-label="Zoom out">−</button>
            <button className="map-zoom-btn map-zoom-btn--reset" onClick={handleReset} aria-label="Reset view">⌂</button>
          </div>
          <div className="map-wrapper">
            <ComposableMap projection="geoAlbersUsa" width={960} height={600}>
              <ZoomableGroup
                zoom={mapZoom}
                center={mapCenter}
                minZoom={1}
                maxZoom={8}
                onMove={({ zoom: k }: { zoom: number }) => setLiveZoom(k)}
                onMoveEnd={({ coordinates, zoom: k }: { coordinates: [number, number]; zoom: number }) => {
                  setMapCenter(coordinates);
                  setMapZoom(k);
                  setLiveZoom(k);
                }}
              >
                <Geographies geography="/us-states.json">
                  {({ geographies }: { geographies: RSMGeography[] }) =>
                    geographies.map((geo: RSMGeography) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: { fill: mapFill, stroke: mapStroke, strokeWidth: 0.5, outline: 'none' },
                          hover:   { fill: mapHover, stroke: mapStroke, strokeWidth: 0.5, outline: 'none' },
                          pressed: { fill: mapHover, stroke: mapStroke, strokeWidth: 0.5, outline: 'none' },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {clusters.map((cluster) => {
                  const isCluster = cluster.ids.length > 1;
                  const singleId = cluster.ids[0];
                  const isSingleActive =
                    !isCluster &&
                    selection?.type === 'single' &&
                    selection.id === singleId;
                  const isClusterActive =
                    isCluster &&
                    selection?.type === 'cluster' &&
                    cluster.ids.length === selection.ids.length &&
                    cluster.ids.every((id) => selection.ids.includes(id));

                  const fill = isCluster
                    ? isClusterActive ? '#1D4ED8' : '#3B82F6'
                    : isSingleActive ? '#FF2020' : '#EF4444';

                  const prog = !isCluster
                    ? INPERSON_PROGRAMS.find((p) => p.id === singleId)
                    : null;

                  return (
                    <Marker
                      key={cluster.ids.join('|')}
                      coordinates={[cluster.lon, cluster.lat]}
                      onClick={() => handleClusterClick(cluster)}
                    >
                      {isSingleActive && (
                        <circle
                          r={18}
                          fill="#EF4444"
                          fillOpacity={0.18}
                          style={{ pointerEvents: 'none' }}
                        />
                      )}
                      <circle
                        r={isCluster ? 11 : isSingleActive ? 11 : 8}
                        fill={fill}
                        stroke="white"
                        strokeWidth={2}
                        style={{ cursor: 'pointer' }}
                      />
                      {isCluster && (
                        <text
                          textAnchor="middle"
                          dominantBaseline="central"
                          fill="white"
                          fontSize={9}
                          fontWeight="bold"
                          style={{ pointerEvents: 'none', userSelect: 'none' }}
                        >
                          {cluster.ids.length}
                        </text>
                      )}
                      <title>
                        {isCluster
                          ? `${cluster.ids.length} programs — click to zoom in`
                          : `${prog?.name ?? ''} — ${prog?.city}, ${prog?.state}`}
                      </title>
                    </Marker>
                  );
                })}
              </ZoomableGroup>
            </ComposableMap>
          </div>
        </div>

        <div className={`program-panel ${selection ? 'program-panel--visible' : ''}`}>
          {selection?.type === 'single' && selectedProg ? (
            <ProgramDetail prog={selectedProg} onClose={() => setSelection(null)} />
          ) : selection?.type === 'cluster' ? (
            <ClusterList
              ids={selection.ids}
              onSelect={(id) => setSelection({ type: 'single', id })}
              onClose={() => setSelection(null)}
            />
          ) : (
            <div className="program-panel__empty">
              <span className="panel-empty-icon">📍</span>
              <p>Click a pin on the map to see program details.</p>
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
              className={`inperson-list-item ${
                selection?.type === 'single' && selection.id === prog.id
                  ? 'inperson-list-item--active'
                  : ''
              }`}
              onClick={() =>
                setSelection((sel) =>
                  sel?.type === 'single' && sel.id === prog.id
                    ? null
                    : { type: 'single', id: prog.id }
                )
              }
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

function ClusterList({
  ids,
  onSelect,
  onClose,
}: {
  ids: string[];
  onSelect: (id: string) => void;
  onClose: () => void;
}) {
  const progs = ids
    .map((id) => INPERSON_PROGRAMS.find((p) => p.id === id))
    .filter((p): p is InPersonProgram => p !== undefined);

  return (
    <div className="program-detail">
      <button className="program-detail__close" onClick={onClose} aria-label="Close">✕</button>
      <div className="program-detail__location">
        📍 {progs[0]?.city}, {progs[0]?.state}
      </div>
      <h3 className="program-detail__name">{progs.length} Programs at this Location</h3>
      <p className="program-detail__institution">Select a program to see details</p>
      <div className="cluster-list">
        {progs.map((prog) => (
          <button key={prog.id} className="cluster-list-item" onClick={() => onSelect(prog.id)}>
            <span className="cluster-list-item__name">{prog.name}</span>
            <span className="cluster-list-item__inst">{prog.institution}</span>
          </button>
        ))}
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
        {prog.cost && <div className="detail-meta-row"><span>💰</span><span>{prog.cost}</span></div>}
        {prog.eligibility && <div className="detail-meta-row"><span>🎓</span><span>{prog.eligibility}</span></div>}
      </div>
      <a href={prog.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary apply-btn">
        Apply Now →
      </a>
    </div>
  );
}
