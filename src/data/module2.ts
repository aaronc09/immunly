import { Module } from '../types';

const module2: Module = {
  id: 'mod2',
  number: 2,
  title: 'The Immune System',
  subtitle: 'Cells, signals, and how a full immune response unfolds',
  emoji: '🛡️',
  color: '#059669',
  lessons: [
    {
      id: 'mod2-l1',
      title: 'Innate vs. Adaptive Immunity',
      emoji: '⚡',
      duration: '7 min',
      sections: [
        {
          type: 'text',
          heading: 'Two Systems, One Defense',
          body: 'The immune system has two major arms that work together. The innate immune system is ancient — some of its weapons are over 500 million years old — while the adaptive immune system evolved only in vertebrates (~500 million years ago). Together they mount responses from the first minutes after infection through the creation of long-term immunological memory.',
        },
        {
          type: 'comparison',
          heading: 'Innate vs. Adaptive Immunity',
          leftHeader: '⚡ Innate (Fast & Broad)',
          rightHeader: '🎯 Adaptive (Slow & Specific)',
          rows: [
            { left: 'Responds in minutes–hours', right: 'Takes days–weeks to fully activate' },
            { left: 'Non-specific — same response to all bacteria', right: 'Specific — each lymphocyte has a unique receptor' },
            { left: 'Recognizes PAMPs and DAMPs via PRRs', right: 'Recognizes specific antigens via TCR and BCR' },
            { left: 'No immunological memory', right: 'Generates long-lived memory cells' },
            { left: 'Neutrophils, macrophages, NK cells, DCs', right: 'T cells and B cells (lymphocytes)' },
            { left: 'Physical barriers: skin, mucus (400 m² surface)', right: 'Antibodies, cytotoxic killing, help for B cells' },
            { left: 'Complement system (20–30 plasma proteins)', right: 'Germinal centers, affinity maturation, class switching' },
          ],
        },
        {
          type: 'highlight',
          label: '🔗 How they connect',
          text: 'Dendritic cells are the critical bridge between innate and adaptive immunity. They detect pathogens in tissues using innate pattern recognition receptors, then travel to lymph nodes to activate T cells — handing off the baton from fast innate defenses to the precision strike of adaptive immunity.',
          color: '#059669',
        },
        {
          type: 'terms',
          heading: 'Pattern Recognition: Key Concepts',
          terms: [
            { term: 'PAMP', definition: 'Pathogen-Associated Molecular Pattern — conserved microbial structures like LPS (bacteria), flagellin, viral dsRNA, or fungal β-glucan. Not found on healthy human cells.' },
            { term: 'DAMP', definition: 'Damage-Associated Molecular Pattern — signals of cellular stress or injury released by dying cells (e.g., ATP, HMGB1, uric acid). Triggers sterile inflammation.' },
            { term: 'PRR', definition: 'Pattern Recognition Receptor — innate receptors that detect PAMPs and DAMPs. Includes TLRs (cell surface/endosomal), NLRs (cytoplasmic), RLRs (cytoplasmic, viral RNA), and CLRs (fungal detection).' },
            { term: 'Complement', definition: 'A cascade of ~20–30 plasma proteins (produced by the liver) that can directly kill pathogens, tag them for phagocytosis (opsonization), and recruit immune cells. C3 is the central component.' },
          ],
        },
      ],
    },
    {
      id: 'mod2-l2',
      title: 'Innate Immune Cells',
      emoji: '🪖',
      duration: '11 min',
      sections: [
        {
          type: 'flipcard',
          heading: 'The Innate Soldiers — Tap to Learn',
          instruction: 'Each card describes a key innate immune cell. Tap to see what it does.',
          cards: [
            {
              front: '🔵 Neutrophils\n(~38–80% of WBCs)',
              back: 'First responders — arrive in 30 min. Kill by: (1) phagocytosis + oxidative burst (NADPH → ROS), (2) degranulation (release of defensins, lysozyme, lactoferrin), (3) NETs — sticky DNA+histone webs that trap and kill bacteria. Short-lived (5 days). Pus = dead neutrophils.',
            },
            {
              front: '🟤 Macrophages\n(long-lived tissue residents)',
              back: 'Phagocytic "garbage collectors" and sentinels. When activated: secrete TNF-α, IL-1, IL-6, IL-12; present antigen on MHC II to helper T cells; generate reactive oxygen species. Brain = microglia. Liver = Kupffer cells. Lung = alveolar macrophages. Lifespan: months to years.',
            },
            {
              front: '⭐ Dendritic Cells\n(professional APCs)',
              back: 'Star-shaped sentinel cells. Constantly sample their environment. After activation, travel via lymphatics to lymph nodes (~6 hrs to start moving, ~1 day to arrive). cDC1: drives Th1 + antiviral (produces IL-12, IL-27). cDC2: drives Th17 + extracellular pathogens (produces IL-1β, IL-6, IL-23). After activation, live only 1–3 more days — snapshot of current antigen exposure.',
            },
            {
              front: '🔷 NK Cells\n("missing-self" killers)',
              back: 'Circulating cytotoxic ILCs. Kill virus-infected, tumor, and stressed cells. Mechanism: (1) Missing self — read MHC I; low/absent → kill via KIR/NKG2A receptors. (2) Stress ligands (MICA, MICB) detected by NKG2D. (3) ADCC — Fc receptor (CD16) binds IgG on target cells. Kill using perforin + granzymes and Fas–FasL. Produce IFN-γ and TNF-α.',
            },
            {
              front: '🟣 pDCs\n(plasmacytoid DCs)',
              back: 'Specialized anti-viral sentinels. Detect viral ssRNA (TLR7) and viral DNA (TLR9) in endosomes. Produce massive amounts of Type I interferons (IFN-α, IFN-β) — up to 1,000× more than other cells. Overactivation by self-nucleic acids implicated in SLE and psoriasis.',
            },
            {
              front: '🟡 ILC1, ILC2, ILC3\n(tissue-resident lymphoids)',
              back: 'Innate Lymphoid Cells live at barrier tissues (gut, lung, skin). ILC1: makes IFN-γ → type 1 immunity. ILC2: makes IL-5 + IL-13 → type 2 immunity, allergy, parasite defense. ILC3: makes IL-17 + IL-22 → gut barrier integrity, anti-fungal/bacterial defense.',
            },
          ],
        },
        {
          type: 'timeline',
          heading: 'A Neutrophil\'s Killing Arsenal',
          steps: [
            { label: 'Recognition', detail: 'Binds IgG-coated bacteria via Fc receptors and C3b-coated bacteria via complement receptors.' },
            { label: 'Phagocytosis', detail: 'Engulfs the pathogen into a phagosome.' },
            { label: 'Oxidative Burst', detail: 'NADPH oxidase generates reactive oxygen species (ROS) — superoxide, hydrogen peroxide — which are toxic to bacteria.' },
            { label: 'Phagolysosome Fusion', detail: 'Phagosome fuses with lysosomes. Enzymatic killing: proteases, defensins, lysozyme (breaks peptidoglycan), lactoferrin (iron deprivation).' },
            { label: 'NET Formation', detail: 'Dying neutrophils may release NETs (Neutrophil Extracellular Traps) — DNA + histones + antimicrobial proteins that physically trap and kill bacteria.' },
          ],
        },
      ],
    },
    {
      id: 'mod2-l3',
      title: 'Cytokines & MHC Molecules',
      emoji: '📡',
      duration: '10 min',
      sections: [
        {
          type: 'text',
          heading: 'Cytokines: The Immune System\'s Language',
          body: 'Cytokines are small secreted proteins that carry messages between immune cells — they determine whether an infection triggers inflammation or tolerance, whether a T cell becomes a killer or a helper, and how long the response lasts. Different cytokine environments during T cell activation determine which helper subset forms.',
        },
        {
          type: 'flipcard',
          heading: 'Key Cytokines — Tap to Reveal Function',
          instruction: 'These are the most important cytokines for understanding immune responses.',
          cards: [
            {
              front: 'IL-2',
              back: 'T-cell growth factor. Produced by activated CD4 T cells. Drives clonal expansion by autocrine and paracrine signaling. High-affinity receptor (CD25) is highly expressed on Tregs — allowing them to act as an IL-2 sink, competing with effector T cells.',
            },
            {
              front: 'IL-4',
              back: 'Th2 master cytokine. Drives Th2 differentiation, IgE class switching, and alternative macrophage activation. Secreted by Th2 cells, mast cells, basophils, and ILC2. Promotes allergy and anti-parasite responses.',
            },
            {
              front: 'IL-12',
              back: 'Th1 master cytokine. Produced by dendritic cells and macrophages. Drives Th1 differentiation, IFN-γ production, and NK cell activation. cDC1 cells are a major source. Key for defense against intracellular pathogens.',
            },
            {
              front: 'IFN-γ',
              back: 'The macrophage activator. Produced by NK cells, Th1 cells, and CD8 T cells. Increases MHC I and MHC II expression. Activates macrophages for more potent killing. The NK–macrophage crosstalk: LPS → macrophage IL-12 → NK IFN-γ → more macrophage activation (positive feedback loop).',
            },
            {
              front: 'TNF-α',
              back: 'Major pro-inflammatory cytokine. Activates endothelium, promotes fever, recruits leukocytes. Produced by macrophages, DCs, NK cells, T cells, and mast cells. Excessive TNF causes septic shock. Target of biologic drugs (anti-TNF) used in autoimmune diseases.',
            },
            {
              front: 'IL-10',
              back: 'Anti-inflammatory master regulator. Suppresses APC activation and limits inflammation. Produced by Tregs, Tr1 cells, macrophages, and DCs. Maintains tolerance and prevents immunopathology.',
            },
            {
              front: 'IL-6',
              back: 'Pleiotropic cytokine. Promotes acute-phase response, fever, early Th17 differentiation (with TGF-β), and plasma cell differentiation. The combination IL-6 + IL-21 is key for sustained Th17 and germinal center responses.',
            },
            {
              front: 'Type I Interferons (IFN-α/β)',
              back: 'Antiviral state. Induced by viral infection in almost any cell; pDCs make massive amounts. Increase MHC I expression, activate NK cells, and block viral replication. The first line against viruses — often acting before adaptive immunity kicks in.',
            },
          ],
        },
        {
          type: 'comparison',
          heading: 'MHC Class I vs. Class II',
          leftHeader: 'MHC Class I',
          rightHeader: 'MHC Class II',
          rows: [
            { left: 'All nucleated cells (HLA-A, -B, -C)', right: 'Only professional APCs (DCs, macrophages, B cells)' },
            { left: 'Presents INTRACELLULAR peptides (~8–9 aa)', right: 'Presents EXTRACELLULAR (endocytosed) peptides' },
            { left: 'Loaded in the ER', right: 'Loaded in lysosomes / MIIC compartments' },
            { left: 'Recognized by CD8+ cytotoxic T cells', right: 'Recognized by CD4+ helper T cells' },
            { left: '"What\'s inside this cell right now?"', right: '"What has this cell eaten recently?"' },
          ],
        },
      ],
    },
    {
      id: 'mod2-l4',
      title: 'T & B Cell Activation',
      emoji: '🎯',
      duration: '13 min',
      sections: [
        {
          type: 'timeline',
          heading: 'The 3 Signals of T Cell Activation',
          steps: [
            {
              label: 'Signal 1 — Antigen Recognition (TCR + MHC)',
              detail: 'The TCR on a naive T cell binds its matching peptide-MHC on a dendritic cell. CD4 binds MHC II (for helper T cells); CD8 binds MHC I (for cytotoxic T cells). Alone, this causes anergy (unresponsiveness), not activation. Activates NFAT via calcium/calcineurin signaling.',
            },
            {
              label: 'Signal 2 — Costimulation (B7 → CD28)',
              detail: 'B7 molecules (CD80/CD86) on activated APCs bind CD28 on the T cell. Only activated APCs upregulate B7 — this prevents T cells from responding to self-antigens on resting cells. Activates AP-1 and NF-κB pathways. Signal 1 + Signal 2 = full activation → IL-2 production.',
            },
            {
              label: 'Signal 3 — Polarizing Cytokines',
              detail: 'The cytokine environment during activation determines which helper T cell subset forms. IL-12 → Th1. IL-4 → Th2. IL-6/IL-23/TGF-β → Th17. IL-6/IL-21/ICOS/BCL6 → Tfh. TGF-β/IL-2 → Treg.',
            },
            {
              label: 'Clonal Expansion',
              detail: 'IL-2 produced by the activated T cell drives autocrine proliferation (high-affinity IL-2R is upregulated). A single T cell can expand into thousands of identical daughter cells targeting the same antigen.',
            },
            {
              label: 'CD4 "Licensing" of APCs',
              detail: 'Activated helper T cells express CD40L, which binds CD40 on APCs. This "licenses" the APC: upregulates B7, increases cytokine production, and enables the APC to fully activate killer T cells. Killer T cells without CD40L-licensed APCs only produce short-lived effector cells.',
            },
          ],
        },
        {
          type: 'comparison',
          heading: 'Helper T Cell Subsets (from your notes)',
          leftHeader: 'Subset (Inducing cytokine)',
          rightHeader: 'Key products & function',
          rows: [
            { left: 'Th1 (IL-12)', right: 'IFN-γ, TNF, IL-2 → Intracellular pathogens, cell-mediated immunity, TB' },
            { left: 'Th2 (IL-4)', right: 'IL-4, IL-5, IL-13 → Parasites, eosinophil activation, IgE switching, allergy/asthma' },
            { left: 'Th17 (IL-6 + IL-23 + TGF-β)', right: 'IL-17A, IL-17F, IL-21 → Extracellular bacteria/fungi, neutrophil recruitment, mucosal immunity' },
            { left: 'Tfh (IL-6, IL-21, ICOS, BCL6)', right: 'IL-21 → B cell help, germinal centers, class switching, affinity maturation' },
            { left: 'Treg (TGF-β + IL-2)', right: 'IL-10, TGF-β → Suppression, self-tolerance. FOXP3+ transcription factor. CD25hi.' },
          ],
        },
        {
          type: 'timeline',
          heading: 'B Cell Activation: T-Dependent Pathway',
          steps: [
            { label: 'Antigen Capture', detail: 'Naive B cells in follicles use their BCR (surface IgM + IgD) to bind intact/native antigen. Unlike T cells, B cells recognize antigen directly — not peptide-MHC.' },
            { label: 'B Cell Processes Antigen', detail: 'B cell internalizes bound antigen, digests it into peptides, and presents them on MHC II. Upregulates B7 and MHC II expression. Migrates to the T–B border.' },
            { label: 'Tfh Help (CD40L → CD40)', detail: 'Pre-Tfh cells (guided by CXCR5/CXCL13) meet B cells at the T–B border. CD40L on Tfh binds CD40 on B cell. This signal is essential for germinal center entry, class switching, and memory formation.' },
            { label: 'Germinal Center Entry', detail: 'B cells enter germinal centers in follicles. Dark zone: centroblasts proliferate and undergo somatic hypermutation (AID enzyme mutates variable regions). Light zone: centrocytes compete for antigen on FDCs; higher-affinity cells get Tfh help and survive.' },
            { label: 'Outcomes', detail: 'Class switching (IgM → IgG, IgA, or IgE). Memory B cells (long-lived, rapid re-activation). Long-lived plasma cells (migrate to bone marrow, secrete antibody for years). Higher-affinity antibodies with each cycle.' },
          ],
        },
        {
          type: 'flipcard',
          heading: 'Antibody Isotypes — Tap to Reveal',
          instruction: 'Tap each antibody class to learn when and why it\'s produced.',
          cards: [
            {
              front: 'IgM',
              back: 'First antibody produced (primary response). Pentameric structure — very effective at activating complement. Short half-life (~5 days). Made before class switching occurs.',
            },
            {
              front: 'IgG',
              back: 'Most abundant in blood (75%). Long half-life (~21 days). Crosses the placenta to protect newborns. Opsonizes pathogens (IgG1 best for phagocytosis). IgG3 activates complement and supports NK cell ADCC.',
            },
            {
              front: 'IgA',
              back: 'Mucosal immunity champion. Found in GI tract, respiratory tract, saliva, tears, and breast milk. Resistant to stomach acid. Dimer form in secretions. Protects barrier surfaces.',
            },
            {
              front: 'IgE',
              back: 'Anti-parasite and allergy antibody. Binds to Fc-epsilon-RI on mast cells and basophils. When antigen cross-links IgE → immediate degranulation (histamine, prostaglandins). Involved in anaphylaxis.',
            },
            {
              front: 'IgD',
              back: 'Primarily a B cell surface receptor on naive B cells (co-expressed with IgM). Minimal circulating levels. Regulates B cell activation; exact function still being studied.',
            },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'm2q1',
      question: 'A naive CD4+ T cell receives Signal 1 (TCR binding to peptide-MHC II) but NOT Signal 2. What is the most likely outcome?',
      options: ['Full T cell activation and IL-2 production', 'T cell anergy (functional unresponsiveness)', 'T cell differentiation into a Th1 cell', 'T cell apoptosis via Fas–FasL pathway'],
      correctIndex: 1,
      explanation: 'Signal 1 alone (TCR engagement without costimulation from B7→CD28) leads to anergy — the T cell becomes functionally unresponsive. This prevents T cells from being activated by self-antigens on resting cells that do not express B7.',
    },
    {
      id: 'm2q2',
      question: 'Which cytokine is the primary driver of Th1 differentiation and is mainly produced by cDC1 dendritic cells?',
      options: ['IL-4', 'IL-6', 'IL-12', 'TGF-β'],
      correctIndex: 2,
      explanation: 'IL-12, produced mainly by dendritic cells (especially cDC1) and macrophages, drives naive CD4+ T cells to differentiate into Th1 cells that produce IFN-γ, TNF, and IL-2.',
    },
    {
      id: 'm2q3',
      question: 'NK cells kill targets with "missing self." What does this mean?',
      options: [
        'NK cells only kill cells that express foreign MHC molecules',
        'NK cells kill cells that display normal levels of MHC I',
        'NK cells kill cells with low or absent MHC I, since normal MHC I inhibits NK killing via KIR/NKG2A',
        'NK cells ignore cells with no MHC I and only respond to stress ligands',
      ],
      correctIndex: 2,
      explanation: 'NK cells have inhibitory receptors (KIR, NKG2A) that read MHC I on target cells. Normal MHC I = inhibitory signal = no killing. Virus-infected or cancer cells often downregulate MHC I, removing the inhibitory signal → NK cell kills. This is "missing self" recognition.',
    },
    {
      id: 'm2q4',
      question: 'In the germinal center dark zone, what enzyme introduces mutations into antibody variable region genes?',
      options: ['RAG recombinase', 'Activation-Induced Cytidine Deaminase (AID)', 'Terminal deoxynucleotidyl transferase (TdT)', 'DNA polymerase III'],
      correctIndex: 1,
      explanation: 'AID (Activation-Induced Cytidine Deaminase) is the key enzyme in germinal centers. It drives both somatic hypermutation (random mutations in variable regions) and class switch recombination (changing antibody isotype). B cells with mutations that improve antigen binding are selected to survive.',
    },
    {
      id: 'm2q5',
      question: 'Which antibody isotype crosses the placenta to provide passive immunity to newborns?',
      options: ['IgM', 'IgA', 'IgE', 'IgG'],
      correctIndex: 3,
      explanation: 'IgG is the only antibody class that crosses the placenta, transferred from mother to fetus via the neonatal Fc receptor (FcRn). This provides the newborn with maternal antibody protection during the first months of life before their own adaptive immunity matures.',
    },
  ],
};

export default module2;
