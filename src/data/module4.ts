import { Module } from '../types';

const module4: Module = {
  id: 'mod4',
  number: 4,
  title: 'Treatments',
  subtitle: 'mRNA vaccines, CAR-T therapy, checkpoint inhibitors & monoclonal antibodies',
  emoji: '💉',
  color: '#7C3AED',
  lessons: [
    {
      id: 'mod4-l1',
      title: 'mRNA Vaccines',
      emoji: '🧬',
      duration: '8 min',
      sections: [
        {
          type: 'text',
          heading: 'Teaching Cells to Make Their Own Vaccine',
          body: 'Traditional vaccines inject a weakened pathogen, a killed pathogen, or a protein antigen. mRNA vaccines take a radically different approach: they deliver genetic instructions (mRNA) for your own cells to manufacture the antigen. Your ribosomes read the instructions, produce the antigen, your immune system responds, and the mRNA is degraded. No pathogen, no DNA alteration.',
        },
        {
          type: 'timeline',
          heading: 'How an mRNA Vaccine Works',
          steps: [
            { label: '1. Sequence Design', detail: 'Scientists identify the antigen target (e.g., the SARS-CoV-2 spike protein). They engineer the mRNA sequence for stability and optimal protein production — including modifications like N1-methylpseudouridine to prevent innate immune activation of the mRNA itself.' },
            { label: '2. Lipid Nanoparticle (LNP) Encapsulation', detail: 'Bare mRNA would be rapidly degraded by RNases in the body. It is packaged inside lipid nanoparticles — tiny fat bubbles that protect the mRNA and fuse with cell membranes to deliver the cargo into the cytoplasm.' },
            { label: '3. Injection & Cell Entry', detail: 'The vaccine is injected into muscle. Muscle cells and nearby APCs (especially dendritic cells) take up the LNPs. The mRNA is released into the cytoplasm.' },
            { label: '4. Protein Production', detail: 'Host ribosomes translate the mRNA into the spike protein (or other antigen). The mRNA is transient — degraded within days. It NEVER enters the nucleus and cannot alter DNA.' },
            { label: '5. Immune Response', detail: 'The spike protein is processed and presented on both MHC I (for CD8 T cell activation) and MHC II (for CD4 T cell and B cell help). A full adaptive response is mounted — T cells, B cells, germinal centers, and memory cells.' },
            { label: '6. Memory Formation', detail: 'Long-lived memory B cells and T cells persist. On future exposure to the actual virus, the immune system mounts a rapid secondary response — neutralizing the pathogen before disease develops.' },
          ],
        },
        {
          type: 'comparison',
          heading: 'mRNA Vaccines vs. Traditional Vaccines',
          leftHeader: 'mRNA Vaccines',
          rightHeader: 'Traditional Vaccines',
          rows: [
            { left: 'Deliver mRNA instructions for antigen production', right: 'Deliver protein, killed/weakened pathogen, or toxoid directly' },
            { left: 'Can be designed and manufactured in weeks (know the sequence → done)', right: 'Live-attenuated/inactivated: months to years of development' },
            { left: 'Cannot cause infection from the vaccine itself', right: 'Live-attenuated: rare risk in immunocompromised individuals' },
            { left: 'Requires cold chain (-70°C for some formulations)', right: 'Many are stable at 2–8°C' },
            { left: 'Activates both cellular (CD8) and humoral (antibody) immunity', right: 'Varies by vaccine type' },
            { left: 'mRNA rapidly degraded — no long-term expression', right: 'Protein antigen cleared over days-weeks' },
          ],
        },
        {
          type: 'highlight',
          label: '❓ Common Misconception',
          text: 'mRNA vaccines do NOT alter your DNA. DNA is in the nucleus; mRNA stays in the cytoplasm. There are no reverse transcriptases in normal human cells to convert mRNA back to DNA, and no mechanism for cytoplasmic mRNA to enter the nucleus. The mRNA is degraded by normal cellular processes within days.',
          color: '#7C3AED',
        },
      ],
    },
    {
      id: 'mod4-l2',
      title: 'CAR-T Cell Therapy',
      emoji: '🔧',
      duration: '9 min',
      sections: [
        {
          type: 'text',
          heading: 'Engineering T Cells Into Precision Cancer Killers',
          body: 'CAR-T cell therapy (Chimeric Antigen Receptor T cell therapy) is a revolutionary cancer treatment that genetically engineers a patient\'s own T cells to recognize and kill cancer cells. Instead of relying on natural TCR recognition (which requires antigen presentation on MHC), CARs bind directly to tumor surface proteins — bypassing MHC entirely.',
        },
        {
          type: 'timeline',
          heading: 'The CAR-T Manufacturing Process',
          steps: [
            { label: '1. Leukapheresis', detail: 'Blood is drawn from the patient. A machine separates T cells from the blood while returning other blood components. This process takes several hours.' },
            { label: '2. T Cell Activation', detail: 'Collected T cells are activated ex vivo (outside the body) using anti-CD3 and anti-CD28 antibodies to stimulate proliferation.' },
            { label: '3. CAR Gene Delivery', detail: 'A viral vector (usually a lentivirus or retrovirus) delivers the CAR gene into the activated T cells. The CAR gene is integrated into the T cell genome, giving each T cell a new chimeric receptor.' },
            { label: '4. Expansion', detail: 'The engineered CAR-T cells are expanded to hundreds of millions of cells over 1–2 weeks in a manufacturing facility.' },
            { label: '5. Lymphodepletion', detail: 'Before infusion, the patient receives chemotherapy to deplete their existing immune cells. This "makes room" for the CAR-T cells and reduces competition for survival signals (IL-7, IL-15).' },
            { label: '6. Infusion & Response', detail: 'CAR-T cells are infused back into the patient. They home to tumor sites, recognize tumor antigen, proliferate, and kill cancer cells.' },
          ],
        },
        {
          type: 'comparison',
          heading: 'CAR Receptor Architecture',
          leftHeader: 'Component',
          rightHeader: 'Function',
          rows: [
            { left: 'ScFv (single-chain variable fragment)', right: 'Derived from a monoclonal antibody; binds tumor antigen directly without MHC presentation' },
            { left: 'Hinge + Transmembrane domain', right: 'Anchors the CAR to the T cell membrane' },
            { left: 'CD28 or 4-1BB costimulatory domain', right: 'Provides Signal 2 for T cell survival, proliferation, and persistence' },
            { left: 'CD3ζ (zeta) chain', right: 'Provides Signal 1 — the activating signal equivalent to TCR engagement' },
          ],
        },
        {
          type: 'highlight',
          label: '⚠️ Cytokine Release Syndrome (CRS)',
          text: 'When billions of CAR-T cells simultaneously attack cancer cells, they release massive amounts of cytokines (IL-6, IFN-γ, TNF-α). This "cytokine storm" — called CRS — causes fever, low blood pressure, and organ damage. Tocilizumab (anti-IL-6 receptor) is the standard treatment for severe CRS.',
          color: '#DC2626',
        },
        {
          type: 'flipcard',
          heading: 'Current CAR-T Targets — Tap to Explore',
          instruction: 'Tap each target to learn why it was chosen.',
          cards: [
            {
              front: 'CD19 (B cell malignancies)',
              back: 'CD19 is expressed on most B cell leukemias and lymphomas (ALL, DLBCL, CLL). From your notes: CD19 is expressed on the surface of most leukemias and lymphomas, making it an ideal target. Approved CAR-T therapies (axicabtagene, tisagenlecleucel) target CD19 and have achieved complete remissions in patients with no other options.',
            },
            {
              front: 'BCMA (Multiple Myeloma)',
              back: 'BCMA (B cell maturation antigen) is expressed on plasma cells and multiple myeloma cells. CAR-T cells targeting BCMA (idecabtagene, ciltacabtagene) are approved for relapsed/refractory myeloma.',
            },
            {
              front: 'GD2 (Solid Tumors)',
              back: 'GD2 is a ganglioside expressed on neuroblastoma, osteosarcoma, and some breast cancers. Emerging CAR-T target for solid tumors — historically more challenging because solid tumors have an immunosuppressive microenvironment that exhausts T cells.',
            },
          ],
        },
      ],
    },
    {
      id: 'mod4-l3',
      title: 'Checkpoint Inhibitors & Monoclonal Antibodies',
      emoji: '🎯',
      duration: '9 min',
      sections: [
        {
          type: 'text',
          heading: 'Releasing the Brakes on Anti-Tumor Immunity',
          body: 'T cells that infiltrate tumors often become "exhausted" — expressing inhibitory receptors (PD-1, CTLA-4, TIM-3, LAG-3) that suppress their killing activity. Checkpoint inhibitors are antibodies that block these inhibitory signals, reinvigorating exhausted T cells and allowing them to attack the tumor. This approach has transformed oncology.',
        },
        {
          type: 'comparison',
          heading: 'The Two Major Checkpoint Inhibitor Targets',
          leftHeader: 'Anti-PD-1 / Anti-PD-L1',
          rightHeader: 'Anti-CTLA-4',
          rows: [
            { left: 'PD-1 expressed on exhausted T cells in tumors', right: 'CTLA-4 expressed on activated T cells in lymph nodes' },
            { left: 'PD-L1 upregulated on tumor cells and APCs', right: 'Competes with CD28 for B7 on APCs' },
            { left: 'Blocks PD-1/PD-L1 → reinvigorates tumor-infiltrating T cells', right: 'Blocks CTLA-4/B7 → amplifies initial T cell activation' },
            { left: 'Pembrolizumab, nivolumab (anti-PD-1)', right: 'Ipilimumab (anti-CTLA-4)' },
            { left: 'Atezolizumab (anti-PD-L1)', right: 'Often combined with anti-PD-1 for synergy' },
            { left: 'Side effects: autoimmune inflammation (colitis, pneumonitis, etc.)', right: 'Higher rates of autoimmune side effects than anti-PD-1 alone' },
          ],
        },
        {
          type: 'flipcard',
          heading: 'Types of Monoclonal Antibodies — Tap to Learn',
          instruction: 'Monoclonal antibodies are engineered proteins with precise targets. Tap to explore their mechanisms.',
          cards: [
            {
              front: 'Neutralizing Antibodies',
              back: 'Block pathogen or toxin from binding host receptors. Example: Palivizumab neutralizes RSV. Therapeutic antibodies like bevacizumab neutralize VEGF, cutting off tumor blood supply by blocking angiogenesis.',
            },
            {
              front: 'Antibody-Drug Conjugates (ADCs)',
              back: 'An antibody targeting a tumor antigen is chemically linked to a potent toxin. The antibody delivers the toxin directly to the tumor cell, minimizing systemic toxicity. Example: ado-trastuzumab emtansine (T-DM1) for HER2+ breast cancer.',
            },
            {
              front: 'Bispecific Antibodies',
              back: 'Designed to bind two different antigens simultaneously. Blinatumomab binds CD19 on cancer cells AND CD3 on T cells — physically forcing a T cell to contact and kill the cancer cell. No prior sensitization needed.',
            },
            {
              front: 'Fc-Optimized Antibodies',
              back: 'Modified Fc regions enhance binding to Fc receptors on NK cells and macrophages, improving ADCC (antibody-dependent cellular cytotoxicity). The antibody coats the target, then immune cells bind the Fc and kill.',
            },
          ],
        },
        {
          type: 'timeline',
          heading: 'Why Combination Immunotherapy Works Better',
          steps: [
            { label: 'Problem', detail: 'Anti-PD-1 alone fails if T cells were never properly activated in the lymph node. Anti-CTLA-4 alone may not fully reinvigorate deeply exhausted tumor-infiltrating T cells.' },
            { label: 'Combination Logic', detail: 'Anti-CTLA-4 acts in lymph nodes to enhance initial T cell activation and priming. Anti-PD-1 acts within the tumor to reinvigorate already-primed but exhausted effector T cells.' },
            { label: 'Clinical Evidence', detail: 'Combination ipilimumab + nivolumab achieves higher response rates in melanoma (nearly 60% in some trials) than either alone, albeit with higher autoimmune side effects.' },
            { label: 'Emerging Combinations', detail: 'Adding anti-LAG-3, anti-TIM-3, and anti-TIGIT to anti-PD-1 is in clinical trials — targeting multiple exhaustion pathways simultaneously.' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'm4q1',
      question: 'Why do mRNA vaccines require lipid nanoparticles (LNPs)?',
      options: [
        'LNPs act as adjuvants to activate TLRs',
        'LNPs deliver the mRNA into the nucleus to alter DNA',
        'Bare mRNA is rapidly degraded by RNases; LNPs protect and deliver the mRNA into cells',
        'LNPs are required to present mRNA on MHC II molecules',
      ],
      correctIndex: 2,
      explanation: 'mRNA is highly susceptible to degradation by ubiquitous RNase enzymes in tissues and blood. Lipid nanoparticles encapsulate and protect the mRNA, and fuse with cell membranes to deliver the intact mRNA cargo into the cytoplasm of target cells.',
    },
    {
      id: 'm4q2',
      question: 'What makes CAR-T cell recognition fundamentally different from normal T cell receptor (TCR) recognition?',
      options: [
        'CARs only recognize peptides presented on MHC I, while TCRs recognize MHC II',
        'CARs bind tumor surface antigens directly without needing MHC presentation; TCRs require peptide-MHC',
        'CARs are expressed on B cells, while TCRs are on T cells',
        'CARs recognize PAMPs; TCRs recognize self-antigens',
      ],
      correctIndex: 1,
      explanation: 'A key limitation of natural T cell immunity is that TCRs require antigens to be processed and displayed on MHC molecules. Tumors often evade this by downregulating MHC I. CARs contain an antibody-derived binding domain (scFv) that recognizes tumor surface proteins directly — bypassing MHC entirely.',
    },
    {
      id: 'm4q3',
      question: 'Cytokine Release Syndrome (CRS) in CAR-T therapy is best managed with which drug, and what is its target?',
      options: [
        'Pembrolizumab — targets PD-1',
        'Methotrexate — inhibits folate metabolism',
        'Tocilizumab — blocks the IL-6 receptor',
        'Ipilimumab — blocks CTLA-4',
      ],
      correctIndex: 2,
      explanation: 'CRS is driven largely by massive IL-6 release from activated CAR-T cells and macrophages. Tocilizumab (an anti-IL-6 receptor antibody) blocks IL-6 signaling, rapidly controlling the cytokine storm without eliminating the CAR-T cells. It is the FDA-approved treatment for CRS.',
    },
    {
      id: 'm4q4',
      question: 'Anti-CTLA-4 and anti-PD-1 checkpoint inhibitors act at different anatomical locations. Which best describes this?',
      options: [
        'Both act within the tumor microenvironment',
        'Anti-CTLA-4 enhances T cell priming in lymph nodes; anti-PD-1 reinvigorates exhausted T cells within the tumor',
        'Anti-PD-1 works in the bone marrow; anti-CTLA-4 works in the thymus',
        'They act identically — the distinction is only in the antibody structure',
      ],
      correctIndex: 1,
      explanation: 'CTLA-4 is primarily active during initial T cell activation in lymph nodes (blocking B7→CD28 costimulation). PD-1 is upregulated on T cells at the tumor site, where chronic antigen exposure causes exhaustion. Combining both addresses different phases of anti-tumor immune failure.',
    },
  ],
};

export default module4;
