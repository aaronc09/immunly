/**
 * Extra lesson data: takeaways (3 bullets), quickCheck (mid-lesson modal),
 * and flashcards (dedicated Anki-style mode).
 * Keyed by lessonId.
 */

import { QuickCheck } from '../types';

interface LessonExtra {
  takeaways: string[];
  quickCheck: QuickCheck;
  flashcards: { front: string; back: string }[];
}

export const LESSON_EXTRAS: Record<string, LessonExtra> = {
  // ── Module 1: Foundations ─────────────────────────────────────────────────

  'mod1-l1': {
    takeaways: [
      'DNA → mRNA (transcription) → protein (translation) — this "central dogma" underlies all immune cell function.',
      'Genes are regulated by transcription factors; cytokines activate TFs like STAT proteins to switch immune programs on.',
      'mRNA vaccines exploit the central dogma: deliver mRNA instructions, your ribosomes make the antigen.',
    ],
    quickCheck: {
      question: 'An mRNA vaccine works because…',
      options: [
        'It inserts new DNA into your genome to create immunity',
        'It delivers mRNA instructions that ribosomes translate into a viral protein, triggering immunity',
        'It injects a weakened virus that your immune system defeats',
        'It activates TLRs on macrophages directly without any antigen',
      ],
      correctIndex: 1,
      explanation: 'mRNA vaccines provide temporary mRNA instructions. Your ribosomes (in the cytoplasm, not the nucleus) produce the viral antigen, which your adaptive immune system responds to. The mRNA is rapidly degraded — no DNA alteration.',
    },
    flashcards: [
      { front: 'Transcription', back: 'The process of copying a gene from DNA into mRNA using RNA polymerase in the nucleus.' },
      { front: 'Translation', back: 'The process of decoding mRNA into a chain of amino acids (protein) at the ribosome.' },
      { front: 'Promoter', back: 'DNA sequence upstream of a gene where transcription begins. Transcription factors bind here.' },
      { front: 'Transcription factor', back: 'Protein that binds DNA to regulate gene expression. NF-κB and NFAT are key immune TFs activated by T cell stimulation.' },
      { front: 'Polymorphism', back: 'Natural DNA sequence variation in a population. MHC genes are extremely polymorphic — critical for diverse immune recognition.' },
    ],
  },

  'mod1-l2': {
    takeaways: [
      'The ER is where MHC I molecules are loaded with viral peptides — essential for displaying intracellular infections to CD8 T cells.',
      'Lysosomes digest phagocytosed pathogens AND process antigens for MHC II presentation.',
      'Apoptosis (clean, programmed death) is how killer T cells eliminate infected cells without causing collateral inflammation.',
    ],
    quickCheck: {
      question: 'Which organelle processes engulfed pathogens and loads peptides onto MHC II for CD4 T cell presentation?',
      options: ['Nucleus', 'Mitochondria', 'Lysosome / MIIC compartment', 'Golgi apparatus'],
      correctIndex: 2,
      explanation: 'Lysosomes (and MHC II-containing compartments, MIIC) are the site where antigen-presenting cells digest extracellular pathogens into peptides and load them onto MHC II molecules for display to CD4+ helper T cells.',
    },
    flashcards: [
      { front: 'Apoptosis', back: 'Programmed, clean cell death — no inflammation. Used by cytotoxic T cells and NK cells to eliminate infected/cancerous cells.' },
      { front: 'Necrosis', back: 'Disordered, chaotic cell death that releases DAMPs and triggers inflammation. Opposite of apoptosis.' },
      { front: 'Endoplasmic Reticulum (ER)', back: 'Site of protein synthesis for secreted/surface proteins. Viral peptides are loaded onto MHC I in the ER.' },
      { front: 'Lysosome', back: 'Acidic organelle packed with digestive enzymes. Destroys phagocytosed pathogens and processes antigens for MHC II.' },
      { front: 'Mitochondria', back: 'Energy producers. Release cytochrome c to trigger the intrinsic apoptotic pathway — used by T cells killing infected cells.' },
    ],
  },

  'mod1-l3': {
    takeaways: [
      'All immune cells originate from Hematopoietic Stem Cells (HSCs) in the bone marrow — split into lymphoid (T, B, NK) and myeloid (neutrophils, macrophages, DCs) lineages.',
      'Macrophages have two sources: embryonic-derived tissue residents (microglia, Kupffer cells) and monocyte-derived macrophages that enter tissues during infection.',
      'Neutrophils are the most abundant WBC (~38–80%) and the fastest responders; lymphocytes come second (~15–49%).',
    ],
    quickCheck: {
      question: 'Which progenitor gives rise to T cells, B cells, and NK cells?',
      options: ['Common Myeloid Progenitor (CMP)', 'Granulocyte-Monocyte Progenitor (GMP)', 'Common Lymphoid Progenitor (CLP)', 'Megakaryocyte-Erythroid Progenitor (MEP)'],
      correctIndex: 2,
      explanation: 'The CLP is committed to the lymphoid lineage, producing T cells (which mature in the thymus), B cells (which mature in bone marrow), NK cells, and innate lymphoid cells (ILCs).',
    },
    flashcards: [
      { front: 'Hematopoietic Stem Cell (HSC)', back: 'Self-renewing stem cell in bone marrow that gives rise to ALL blood and immune cells.' },
      { front: 'Common Lymphoid Progenitor (CLP)', back: 'Produces T cells, B cells, NK cells, and ILCs. The lymphoid branch of hematopoiesis.' },
      { front: 'Common Myeloid Progenitor (CMP)', back: 'Produces neutrophils, eosinophils, basophils, monocytes, and dendritic cell precursors.' },
      { front: 'Microglia', back: 'Embryonic-derived tissue-resident macrophages of the brain. Self-renew locally and are NOT monocyte-derived under steady state.' },
      { front: 'Kupffer cells', back: 'Embryonic-derived tissue-resident macrophages of the liver. Filter blood-borne pathogens.' },
    ],
  },

  'mod1-l4': {
    takeaways: [
      'Lymph nodes have distinct zones: the T-cell zone (paracortex) where naive T cells meet DCs, and B-cell follicles where germinal centers form.',
      'Naive lymphocytes enter lymph nodes through high endothelial venules (HEVs) via L-selectin (CD62L) binding PNAd, guided by CCR7.',
      'Dendritic cells activated at infection sites travel via lymphatics to lymph nodes within ~6 hrs, arriving after ~1 day.',
    ],
    quickCheck: {
      question: 'What guides both naive T cells and activated DCs to the T-cell zone of lymph nodes?',
      options: ['CXCR5 / CXCL13', 'CCR7 / CCL19–CCL21', 'CXCR4 / CXCL12', 'CCR3 / CCL11'],
      correctIndex: 1,
      explanation: 'CCR7 expressed on naive T cells and activated dendritic cells binds CCL19 and CCL21 produced by stromal cells in the T-cell zone (paracortex) of lymph nodes. This guides both cell types to the site of T-cell activation.',
    },
    flashcards: [
      { front: 'Primary lymphoid organs', back: 'Where immune cells develop and mature: bone marrow (B cells, HSCs) and thymus (T cells).' },
      { front: 'Secondary lymphoid organs', back: 'Where immune responses are initiated: lymph nodes, spleen, tonsils, Peyer\'s patches, MALT.' },
      { front: 'High Endothelial Venules (HEVs)', back: 'Specialized blood vessels in lymph nodes where naive lymphocytes enter. Express PNAd; bind L-selectin (CD62L) on naive lymphocytes.' },
      { front: 'Follicular Dendritic Cells (FDCs)', back: 'Stromal support cells in B-cell follicles that display intact antigen for B cells. Not the same as classical antigen-presenting DCs.' },
      { front: 'Germinal center', back: 'Specialized microenvironment within B-cell follicles where B cells undergo somatic hypermutation, class switching, and affinity maturation.' },
    ],
  },

  // ── Module 2: The Immune System ───────────────────────────────────────────

  'mod2-l1': {
    takeaways: [
      'Innate immunity (ancient, non-specific, fast: minutes–hours) uses PRRs to detect PAMPs on pathogens. Adaptive immunity (vertebrate-only, specific, slow: days–weeks) uses clonally selected TCRs and BCRs.',
      'Dendritic cells bridge innate and adaptive: they detect pathogens via PRRs, then travel to lymph nodes to activate T cells.',
      'The complement system (~20–30 plasma proteins, C3 is central) can kill pathogens directly (MAC pores), opsonize them for phagocytosis (C3b), and recruit immune cells (C3a, C5a).',
    ],
    quickCheck: {
      question: 'A bacterium enters a wound. Which cell type is FIRST to detect it via pattern recognition receptors AND can also travel to activate naive T cells?',
      options: ['Neutrophil', 'NK cell', 'Dendritic cell', 'B cell'],
      correctIndex: 2,
      explanation: 'Dendritic cells (cDCs) are the professional antigen-presenting cells that detect pathogens via PRRs, process antigens, and then migrate to lymph nodes to activate naive T cells — bridging innate detection with adaptive activation.',
    },
    flashcards: [
      { front: 'PAMP', back: 'Pathogen-Associated Molecular Pattern — conserved microbial structures (LPS, flagellin, viral dsRNA) not found on healthy human cells.' },
      { front: 'DAMP', back: 'Damage-Associated Molecular Pattern — signals of cellular stress/injury (ATP, HMGB1, uric acid) released by dying cells. Triggers sterile inflammation.' },
      { front: 'TLR4', back: 'Toll-like receptor 4. Cell-surface PRR that detects LPS from gram-negative bacteria. Key trigger of innate immune activation.' },
      { front: 'C3b', back: 'Highly reactive complement fragment that coats pathogens for opsonization. Tags microbes for phagocytosis by macrophages and neutrophils.' },
      { front: 'Membrane Attack Complex (MAC)', back: 'C5b–C9 complex that forms pores in bacterial membranes, causing osmotic lysis. Especially effective against gram-negative bacteria.' },
    ],
  },

  'mod2-l2': {
    takeaways: [
      'Neutrophils kill via three mechanisms: phagocytosis + oxidative burst, degranulation of enzymes, and NET formation (DNA webs that trap bacteria).',
      'NK cells use "missing self" surveillance — normal MHC I = no kill; absent MHC I (virus-infected / tumor) = kill via perforin/granzymes and Fas-FasL.',
      'pDCs are the body\'s IFN-α/β factories — producing up to 1000× more Type I interferons than other cells, critical for early antiviral defense.',
    ],
    quickCheck: {
      question: 'A virus-infected cell downregulates MHC I. Which immune cell is now MORE likely to kill it, and why?',
      options: [
        'Neutrophil — via phagocytosis',
        'NK cell — because absent MHC I removes the inhibitory KIR/NKG2A signal ("missing self")',
        'B cell — because it can no longer bind antigen',
        'Mast cell — via IgE-mediated degranulation',
      ],
      correctIndex: 1,
      explanation: 'NK cells have inhibitory receptors (KIR, NKG2A) that detect MHC I on target cells. Normal MHC I = inhibitory signal = no kill. When viruses downregulate MHC I to hide from CD8 T cells, NK cells lose the inhibitory signal — "missing self" — and kill the target via perforin + granzymes.',
    },
    flashcards: [
      { front: 'Neutrophil extracellular traps (NETs)', back: 'DNA + histones + antimicrobial proteins released by activated/dying neutrophils. Trap and kill bacteria but can cause tissue damage if excessive.' },
      { front: 'Oxidative burst', back: 'NADPH oxidase generates reactive oxygen species (ROS) inside phagosomes — toxic to engulfed bacteria. Key killing mechanism of neutrophils and macrophages.' },
      { front: '"Missing self"', back: 'NK cell mechanism: normal MHC I = inhibitory signal via KIR/NKG2A = no kill. Absent/low MHC I (infected or tumor cells) = killing activated.' },
      { front: 'cDC1 vs cDC2', back: 'cDC1: produces IL-12, drives Th1 + CD8 responses, antiviral/intracellular. cDC2: produces IL-1β, IL-6, IL-23, drives Th17 + extracellular/mucosal responses.' },
      { front: 'ADCC', back: 'Antibody-Dependent Cellular Cytotoxicity. NK cells with Fc receptor (CD16) bind IgG-coated target cells and kill them.' },
    ],
  },

  'mod2-l3': {
    takeaways: [
      'IL-12 (from DCs) → Th1 differentiation → IFN-γ; IL-4 (from mast cells/Th2) → Th2 → IgE; IL-6/IL-23/TGF-β → Th17 → IL-17 neutrophil recruitment.',
      'MHC I (on ALL nucleated cells) presents intracellular peptides to CD8+ T cells. MHC II (on APCs only) presents extracellular peptides to CD4+ T cells.',
      'Type I interferons (IFN-α/β) establish an antiviral state, increase MHC I expression, and activate NK cells — the first antiviral wave before adaptive immunity.',
    ],
    quickCheck: {
      question: 'A cell infected intracellularly with a bacterium (like Listeria) needs to alert CD8 T cells. Which pathway does it use?',
      options: [
        'Process antigen in lysosomes → load onto MHC II → display to CD4 T cells',
        'Process antigen in the ER → load onto MHC I → display to CD8 T cells',
        'Secrete the antigen extracellularly → B cells produce antibodies',
        'Activate complement via the lectin pathway',
      ],
      correctIndex: 1,
      explanation: 'Intracellular antigens (including bacteria that escape into the cytoplasm) are processed by the proteasome, transported into the ER via TAP, loaded onto MHC I, and displayed on the cell surface for CD8+ cytotoxic T cell recognition.',
    },
    flashcards: [
      { front: 'IL-2', back: 'T-cell growth factor produced by activated CD4 T cells. Drives clonal expansion. Tregs act as an IL-2 sink (CD25hi) to compete with effector T cells.' },
      { front: 'IL-12', back: 'Th1 master cytokine. Produced by DCs (especially cDC1) and macrophages. Drives IFN-γ production and NK cell activation.' },
      { front: 'IFN-γ', back: 'Type II interferon. Produced by NK cells, Th1, and CD8 T cells. Activates macrophages, increases MHC I and II, key for intracellular pathogen defense.' },
      { front: 'TNF-α', back: 'Major pro-inflammatory cytokine from macrophages, DCs, NK cells, T cells. Activates endothelium, fever, leukocyte recruitment. Excess → septic shock.' },
      { front: 'IL-10', back: 'Anti-inflammatory master regulator. From Tregs, macrophages, DCs. Suppresses APC activation, limits immunopathology.' },
    ],
  },

  'mod2-l4': {
    takeaways: [
      'T cell full activation requires 3 signals: (1) TCR + peptide-MHC, (2) B7→CD28 costimulation, (3) polarizing cytokines. Signal 1 alone causes anergy.',
      'CD40L (on activated helper T cells) "licenses" APCs by upregulating B7 — this is how helper T cells enable full CD8 killer T cell activation.',
      'Germinal center B cells undergo somatic hypermutation (AID enzyme) and compete for antigen on FDCs; higher-affinity survivors switch isotype and become memory B cells or long-lived plasma cells.',
    ],
    quickCheck: {
      question: 'What determines whether an activated CD4 T cell becomes Th1, Th2, or Th17?',
      options: [
        'The strength of TCR binding to MHC II',
        'The cytokine environment present during activation (Signal 3)',
        'Whether costimulation via CD28 occurs or not',
        'The number of antigen-presenting cells in the lymph node',
      ],
      correctIndex: 1,
      explanation: 'After full T cell activation (Signals 1 + 2), the cytokine milieu (Signal 3) determines T helper subset fate: IL-12 → Th1 (IFN-γ, cell-mediated), IL-4 → Th2 (IgE, parasite), IL-6/IL-23/TGF-β → Th17 (IL-17, neutrophil recruitment), TGF-β/IL-2 → Treg (suppression).',
    },
    flashcards: [
      { front: 'Anergy', back: 'Functional unresponsiveness of a T or B cell. Occurs when Signal 1 (antigen recognition) is received without Signal 2 (costimulation). Prevents autoimmunity.' },
      { front: 'CD40L (CD154)', back: 'Expressed on activated CD4 T cells (esp. Tfh). Binds CD40 on B cells and APCs. Essential for germinal center formation, class switching, memory B cells.' },
      { front: 'Somatic hypermutation (SHM)', back: 'AID enzyme introduces mutations in antibody variable regions in germinal center dark zone. Generates diversity; higher-affinity variants are selected.' },
      { front: 'Class switch recombination (CSR)', back: 'AID enzyme changes antibody isotype (e.g., IgM → IgG, IgA, IgE) while preserving antigen specificity. Requires CD40L-CD40 and cytokine signals.' },
      { front: 'Affinity maturation', back: 'Iterative process in germinal centers where SHM + selection for antigen-binding produces progressively higher-affinity antibodies.' },
    ],
  },

  // ── Module 3: When It Goes Wrong ──────────────────────────────────────────

  'mod3-l1': {
    takeaways: [
      'Autoimmunity = failure of self-tolerance. Central tolerance (thymic negative selection, bone marrow deletion) and peripheral tolerance (Tregs, CTLA-4, PD-1, AICD) both guard against self-reactive lymphocytes.',
      'Molecular mimicry: pathogen epitopes resemble self-antigens → cross-reactive immune responses attack host tissue (e.g., Strep throat → rheumatic heart disease).',
      'HLA (MHC) gene variants are the strongest genetic risk factor for autoimmune disease — specific alleles determine which self-peptides are presented to T cells.',
    ],
    quickCheck: {
      question: 'Tregs highly express CTLA-4. How does this suppress potentially self-reactive T cells?',
      options: [
        'CTLA-4 on Tregs directly kills self-reactive T cells by releasing perforin',
        'CTLA-4 binds B7 (CD80/CD86) on APCs with high affinity, physically stripping it away, reducing costimulation available to other T cells',
        'Tregs secrete CTLA-4 as a soluble cytokine that inhibits NF-κB signaling',
        'CTLA-4 blocks MHC II on APCs so self-antigen cannot be presented',
      ],
      correctIndex: 1,
      explanation: 'Tregs express very high levels of CTLA-4, which has higher B7 affinity than CD28. Tregs physically strip B7 molecules from APC surfaces (trans-endocytosis), reducing costimulatory signal available to potentially self-reactive effector T cells nearby.',
    },
    flashcards: [
      { front: 'Central tolerance', back: 'Deletion or editing of self-reactive lymphocytes in primary lymphoid organs. Thymic negative selection for T cells; bone marrow checkpoints for B cells.' },
      { front: 'Peripheral tolerance', back: 'Mechanisms that control self-reactive lymphocytes that escape central tolerance: CTLA-4, PD-1, Tregs, anergy, AICD.' },
      { front: 'AIRE protein', back: 'Autoimmune Regulator — expressed in thymic epithelial cells. Drives expression of peripheral tissue antigens in the thymus to delete self-reactive T cells. AIRE mutations → APS-1 (severe multi-organ autoimmunity).' },
      { front: 'Molecular mimicry', back: 'Pathogen epitopes structurally resemble self-antigens. Anti-pathogen immune responses cross-react with host tissue. Example: Strep pharyngitis → rheumatic fever.' },
      { front: 'Activation-induced cell death (AICD)', back: 'Apoptosis of T cells that are repeatedly stimulated over long periods. Mechanism of peripheral tolerance — eliminates chronically activated self-reactive T cells.' },
    ],
  },

  'mod3-l2': {
    takeaways: [
      'Allergy occurs when type 2 immunity (evolved for parasites) misfires against harmless allergens. IgE arms mast cells; re-exposure cross-links IgE → immediate degranulation (histamine, leukotrienes).',
      'IL-4 drives IgE class switching; IL-5 activates eosinophils; IL-13 causes mucus production and airway hyperreactivity. IL-33 and IL-25 from epithelial cells amplify type 2 responses via ILC2s.',
      'Modern biologics target specific nodes: dupilumab (anti-IL-4Rα), mepolizumab (anti-IL-5), omalizumab (anti-IgE).',
    ],
    quickCheck: {
      question: 'A patient takes their first dose of penicillin and has no reaction. Years later, a second dose causes anaphylaxis within minutes. What happened?',
      options: [
        'The second dose directly activated complement, causing anaphylatoxin release',
        'First exposure sensitized mast cells with penicillin-specific IgE; second dose cross-linked that IgE → immediate mast cell degranulation',
        'The second dose triggered Th1 responses causing cytokine storm',
        'Neutrophils phagocytosed penicillin and released toxic granules',
      ],
      correctIndex: 1,
      explanation: 'First exposure = sensitization: Th2 cells form, IL-4 drives B cells to produce IgE, IgE coats mast cells via Fc-epsilon-RI. No symptoms. Second exposure: penicillin cross-links surface IgE on mast cells → immediate degranulation → histamine, prostaglandins, leukotrienes → anaphylaxis.',
    },
    flashcards: [
      { front: 'Sensitization', back: 'First allergen exposure: Th2 cells form, IgE is produced, and mast cells are coated with allergen-specific IgE. No symptoms yet.' },
      { front: 'Mast cell degranulation', back: 'Release of preformed granules (histamine, tryptase) and newly synthesized mediators (prostaglandins, leukotrienes) upon IgE cross-linking.' },
      { front: 'IL-5', back: 'Eosinophil growth factor. Produced by Th2 cells and ILC2. Promotes eosinophil production, survival, and recruitment to sites of type 2 inflammation.' },
      { front: 'IL-33', back: 'Epithelial alarmin released by tissue damage. Activates ILC2, mast cells, basophils, and eosinophils — a powerful amplifier of type 2 responses.' },
      { front: 'Fc-epsilon-RI', back: 'High-affinity IgE receptor on mast cells and basophils. IgE binds constitutively; allergen cross-links it to trigger immediate degranulation.' },
    ],
  },

  'mod3-l3': {
    takeaways: [
      'HIV targets CD4+ helper T cells (the master coordinators of adaptive immunity) via gp120 + CD4 + CCR5/CXCR4 co-receptor. Progressive CD4 depletion dismantles both humoral and cell-mediated immunity.',
      'AIDS is defined by CD4 count < 200 cells/µL (normal: 500–1500) or AIDS-defining opportunistic infections.',
      'HIV integrates into the host genome as a provirus and can remain latent — invisible to immune surveillance — which is why current antiretrovirals suppress but cannot cure HIV.',
    ],
    quickCheck: {
      question: 'Which HIV co-receptor is the primary route of sexual transmission and is also the therapeutic target of drug maraviroc?',
      options: ['CD4', 'CXCR4 (X4)', 'CCR5 (R5)', 'CCR7'],
      correctIndex: 2,
      explanation: 'R5-tropic HIV uses CCR5 as a co-receptor and is responsible for most sexually transmitted infections. People with a CCR5-Δ32 deletion (naturally absent CCR5) are highly resistant to HIV infection. Maraviroc is a CCR5 antagonist that blocks viral entry.',
    },
    flashcards: [
      { front: 'HIV gp120', back: 'Viral envelope glycoprotein that binds CD4 on helper T cells. Then engages a co-receptor (CCR5 or CXCR4) to fuse with the cell membrane.' },
      { front: 'Reverse transcriptase', back: 'HIV enzyme that converts viral RNA into DNA. Error-prone — creates many mutations, driving drug resistance and immune escape. Target of NRTIs/NNRTIs.' },
      { front: 'Provirus', back: 'Integrated HIV DNA in the host genome. Can remain latent for years, invisible to the immune system. The reason HIV cannot be cured by current antiretrovirals.' },
      { front: 'AIDS-defining illness', back: 'Opportunistic infections or cancers that occur only with profound immunosuppression (CD4 < 200). Examples: PCP, toxoplasmosis, CMV retinitis, Kaposi sarcoma.' },
      { front: 'Antiretroviral therapy (ART)', back: 'Combination of drugs targeting different HIV enzymes (reverse transcriptase, protease, integrase, entry). Suppresses viral load to undetectable but does not eliminate the latent reservoir.' },
    ],
  },

  'mod3-l4': {
    takeaways: [
      'Tumors evade immunity via two main molecular strategies: upregulating PD-L1 (exhausts T cells via PD-1) and downregulating MHC I (hides from CD8 T cells, but makes them NK cell targets).',
      'The tumor microenvironment is actively immunosuppressive: Tregs, MDSCs, M2-like macrophages, IL-10, TGF-β all dampen anti-tumor immunity.',
      'Cancer immunoediting follows 3 Es: Elimination (immune system destroys most tumor cells) → Equilibrium (balance) → Escape (tumor evades and grows).',
    ],
    quickCheck: {
      question: 'Checkpoint inhibitors like pembrolizumab (anti-PD-1) work by:',
      options: [
        'Killing tumor cells directly by binding their PD-L1 receptor',
        'Blocking the PD-1/PD-L1 interaction that exhausts tumor-infiltrating T cells, reinvigorating their killing activity',
        'Activating NK cells to produce more IFN-γ',
        'Delivering a cytotoxic drug directly to tumor cells',
      ],
      correctIndex: 1,
      explanation: 'Tumor-infiltrating T cells upregulate PD-1 from chronic antigen stimulation; tumor cells upregulate PD-L1 to exploit this. Anti-PD-1 (pembrolizumab) or anti-PD-L1 antibodies block this interaction, removing the "brake" and reinvigorating exhausted cytotoxic T cells to kill tumor cells.',
    },
    flashcards: [
      { front: 'PD-1', back: 'Programmed cell death protein 1. Inhibitory receptor upregulated on chronically stimulated T cells. Binding PD-L1 induces T cell exhaustion — exploited by tumors.' },
      { front: 'PD-L1', back: 'Programmed death-ligand 1. Upregulated on tumor cells and APCs. Binds PD-1 on T cells to suppress them. Key immune evasion mechanism; target of checkpoint inhibitors.' },
      { front: 'T cell exhaustion', back: 'Dysfunctional state in T cells after chronic antigen exposure. Characterized by co-expression of inhibitory receptors (PD-1, TIM-3, LAG-3, TIGIT), impaired cytokine production, and reduced killing.' },
      { front: 'Tumor microenvironment (TME)', back: 'The complex ecosystem around a tumor: cancer cells, immune cells (Tregs, MDSCs, macrophages), stromal cells, blood vessels. Often immunosuppressive.' },
      { front: 'Neoantigen', back: 'Tumor-specific mutant peptides presented on MHC that can be recognized by T cells as foreign. The basis of cancer vaccine and immunotherapy strategies.' },
    ],
  },

  // ── Module 4: Treatments ──────────────────────────────────────────────────

  'mod4-l1': {
    takeaways: [
      'mRNA vaccines deliver lipid nanoparticle-encapsulated mRNA → ribosomes translate the antigen → adaptive immune response. mRNA stays in the cytoplasm, is rapidly degraded, and NEVER alters DNA.',
      'Modified nucleosides (e.g., N1-methyl pseudouridine) in mRNA vaccines prevent innate immune activation of the mRNA itself, increasing protein production.',
      'mRNA vaccine platforms can be designed in days (once the antigen sequence is known) — vastly faster than traditional vaccine development.',
    ],
    quickCheck: {
      question: 'Why must mRNA vaccines be packaged in lipid nanoparticles (LNPs)?',
      options: [
        'LNPs activate TLRs to serve as built-in adjuvants',
        'Bare mRNA is rapidly degraded by ubiquitous RNases; LNPs protect the mRNA and facilitate cellular uptake',
        'LNPs carry the mRNA into the nucleus for stable integration',
        'LNPs prevent the immune system from responding to the mRNA itself',
      ],
      correctIndex: 1,
      explanation: 'RNA is extremely susceptible to degradation by RNase enzymes found everywhere in tissues and blood. LNPs encapsulate and protect the mRNA, fuse with cell membranes, and deliver the intact mRNA cargo into the cytoplasm where ribosomes can translate it into antigen.',
    },
    flashcards: [
      { front: 'Lipid nanoparticle (LNP)', back: 'Tiny fat bubble that encapsulates and protects mRNA from RNase degradation. Fuses with cell membranes to deliver mRNA into the cytoplasm.' },
      { front: 'N1-methyl pseudouridine', back: 'Modified nucleoside used in mRNA vaccines (Pfizer, Moderna). Prevents innate immune recognition of the mRNA and increases translation efficiency.' },
      { front: 'Spike protein (S protein)', back: 'SARS-CoV-2 surface protein used as antigen in COVID-19 mRNA vaccines. The proline-stabilized "2P" form maintains the prefusion conformation for optimal antibody response.' },
      { front: 'Primary vs secondary immune response', back: 'Primary: slow (1–2 weeks), mostly IgM, first exposure. Secondary: fast (days), high-affinity IgG, memory cells activated. Vaccines prime the primary response to make secondary rapid.' },
      { front: 'Adjuvant', back: 'Substance added to vaccines to enhance immune response by activating innate immunity (PRRs). LNPs in mRNA vaccines have intrinsic adjuvant activity.' },
    ],
  },

  'mod4-l2': {
    takeaways: [
      'CAR-T cells bypass MHC by using an antibody-derived scFv domain to bind tumor antigens directly — this overcomes the tumor\'s MHC I downregulation strategy.',
      'The CAR contains CD3ζ for activation (Signal 1) and CD28 or 4-1BB for costimulation (Signal 2) — designed to function without APC-provided costimulation.',
      'Cytokine release syndrome (CRS) from massive T cell activation is managed with tocilizumab (anti-IL-6R).',
    ],
    quickCheck: {
      question: 'CD19 is used as a CAR-T target for B cell leukemia. What is the critical risk of targeting CD19?',
      options: [
        'CD19 is also expressed on neurons, causing neurological damage',
        'Since CD19 is on all B cells (not just cancerous ones), CAR-T therapy causes prolonged B cell aplasia, leaving patients with hypogammaglobulinemia',
        'CD19 CAR-T cells cause severe liver toxicity because CD19 is expressed on hepatocytes',
        'Anti-CD19 antibodies block the BCR, preventing all future immune responses',
      ],
      correctIndex: 1,
      explanation: 'CD19 is expressed on all B cells — healthy and malignant. CD19 CAR-T therapy effectively treats leukemia but also destroys all B cells, causing B cell aplasia and hypogammaglobulinemia (lack of antibodies). Patients require ongoing IgG replacement therapy.',
    },
    flashcards: [
      { front: 'Chimeric Antigen Receptor (CAR)', back: 'Engineered receptor on T cells. Contains: scFv (antibody fragment for antigen binding) + hinge + transmembrane + costimulatory domain (CD28 or 4-1BB) + CD3ζ signaling chain.' },
      { front: 'scFv (single-chain variable fragment)', back: 'Antibody-derived binding domain in a CAR. Binds tumor antigen directly without needing MHC presentation — key advantage over natural TCR.' },
      { front: 'Lymphodepletion', back: 'Chemotherapy given before CAR-T infusion to make room for CAR-T cells and reduce competition for homeostatic cytokines (IL-7, IL-15).' },
      { front: 'Cytokine release syndrome (CRS)', back: 'Systemic inflammatory response when millions of CAR-T cells simultaneously activate and release IL-6, IFN-γ, TNF. Treated with tocilizumab (anti-IL-6R) ± corticosteroids.' },
      { front: 'Lentiviral vector', back: 'Modified lentivirus used to stably integrate the CAR gene into T cells ex vivo. Safer than earlier retroviral vectors due to reduced insertional mutagenesis risk.' },
    ],
  },

  'mod4-l3': {
    takeaways: [
      'Anti-CTLA-4 (ipilimumab) amplifies T cell priming in lymph nodes; anti-PD-1 (pembrolizumab, nivolumab) reinvigorates exhausted T cells in the tumor. Combining both is synergistic.',
      'Monoclonal antibodies can work as: neutralizing agents, opsonins (for ADCC/phagocytosis), ADCs (toxin delivery), bispecific (force T cell–tumor contact), or Fc-optimized (enhanced NK killing).',
      'Checkpoint inhibitors cause immune-related adverse events (irAEs) — colitis, hepatitis, pneumonitis, endocrinopathies — because they release the brakes on normal self-reactive T cells too.',
    ],
    quickCheck: {
      question: 'Blinatumomab is a bispecific antibody that binds CD19 (on B cell tumors) AND CD3 (on T cells). What does this accomplish?',
      options: [
        'It blocks both PD-1 and CTLA-4 simultaneously for enhanced checkpoint inhibition',
        'It physically brings a T cell into direct contact with a cancer cell, activating the T cell to kill without needing prior sensitization or MHC presentation',
        'It delivers a cytotoxic drug specifically to CD19+ cells via the CD3 arm',
        'It activates NK cells by bridging Fc receptors to tumor antigens',
      ],
      correctIndex: 1,
      explanation: 'Bispecific T cell engagers (BiTEs) like blinatumomab physically bridge a T cell (via CD3) to a cancer cell (via CD19). This forces immunological synapse formation and activates the T cell to kill — regardless of TCR specificity, prior sensitization, or MHC expression on the tumor.',
    },
    flashcards: [
      { front: 'Checkpoint inhibitor', back: 'Antibody that blocks inhibitory receptors (PD-1, CTLA-4, LAG-3, TIM-3) on T cells, restoring their anti-tumor activity.' },
      { front: 'Pembrolizumab', back: 'Humanized anti-PD-1 monoclonal antibody (Keytruda). Blocks PD-1/PD-L1 interaction. First-line therapy for many cancers including melanoma, NSCLC, TNBC.' },
      { front: 'Ipilimumab', back: 'Anti-CTLA-4 monoclonal antibody (Yervoy). Blocks CTLA-4/B7 interaction in lymph nodes. Used in combination with anti-PD-1 for enhanced response in melanoma.' },
      { front: 'Antibody-drug conjugate (ADC)', back: 'Monoclonal antibody chemically linked to a cytotoxic drug. Delivers toxin precisely to antigen-expressing tumor cells. Example: T-DM1 for HER2+ breast cancer.' },
      { front: 'Immune-related adverse events (irAEs)', back: 'Autoimmune side effects from checkpoint inhibitors — colitis, hepatitis, pneumonitis, hypophysitis. Result from releasing brakes on normal self-reactive T cells.' },
    ],
  },

  // ── Module 5: Research Skills ─────────────────────────────────────────────

  'mod5-l1': {
    takeaways: [
      'Read figures BEFORE reading the Discussion — interpret the data yourself, then compare to the authors\' interpretation to catch overstatements.',
      'Key critical questions: Is n large enough? Are there proper negative AND positive controls? Is causation established or just correlation? Do mouse results have human validation?',
      'The Methods section reveals if the right technique was used — e.g., ELISA for secreted cytokines, NOT Western blot of lysates.',
    ],
    quickCheck: {
      question: 'A paper claims "Virus X increases IL-6 production in macrophages" and shows a Western blot of macrophage lysates. What is the critical flaw?',
      options: [
        'Western blot cannot detect proteins under 50 kDa',
        'IL-6 is a secreted cytokine — Western blot of lysates measures intracellular protein, not secretion. ELISA of culture supernatants is the appropriate assay.',
        'The paper should have used PCR instead of protein detection',
        'Macrophages don\'t produce IL-6, so the premise is wrong',
      ],
      correctIndex: 1,
      explanation: 'IL-6 is a secreted cytokine whose functional measurement is the amount released into the culture medium or serum — measured by ELISA or cytometric bead array. Western blot of lysates measures intracellular protein stores, which don\'t reflect secretion levels. This is a common methodological error in papers.',
    },
    flashcards: [
      { front: 'Abstract', back: 'One-paragraph summary of the entire paper. Read first to determine relevance, but never trust it alone — abstracts can overstate conclusions.' },
      { front: 'Negative control', back: 'Experimental condition with no treatment (vehicle only). Essential baseline to verify that any observed effect is from the treatment, not the procedure.' },
      { front: 'Positive control', back: 'Experimental condition known to give the expected result. Confirms the assay is working correctly.' },
      { front: 'p-value', back: 'Probability of observing results this extreme by chance if the null hypothesis is true. p < 0.05 is convention. Doesn\'t prove effect size or clinical relevance.' },
      { front: 'FDR (False Discovery Rate)', back: 'Adjusted p-value used in high-throughput experiments (RNA-seq). Controls the expected proportion of false positives among significant results. FDR < 0.05 is standard.' },
    ],
  },

  'mod5-l2': {
    takeaways: [
      'Flow cytometry identifies and counts individual cells using fluorescently labeled antibodies against surface markers — can measure 30+ parameters simultaneously per cell.',
      'ELISA quantifies a specific protein (e.g., a cytokine) using a "sandwich" of capture + detection antibody + enzyme substrate color reaction. Gold standard for secreted proteins.',
      'CyTOF (mass cytometry) uses metal isotope tags instead of fluorescent dyes, eliminating spectral overlap — enables 40+ parameters per cell for deep immune profiling.',
    ],
    quickCheck: {
      question: 'A researcher wants to measure how many IFN-γ-secreting T cells respond to a specific peptide antigen. Which assay is most appropriate?',
      options: [
        'Western blot of T cell lysates',
        'ELISPOT — counts individual IFN-γ-secreting T cells as discrete spots on a capture antibody-coated plate',
        'PCR to measure IFN-γ mRNA levels',
        'Flow cytometry for surface IFN-γ expression',
      ],
      correctIndex: 1,
      explanation: 'ELISPOT is the gold standard for measuring antigen-specific T cell responses — it detects individual cells secreting IFN-γ in response to a specific peptide. The number of spots = number of antigen-specific T cells. It is used to measure vaccine-induced T cell responses in clinical trials.',
    },
    flashcards: [
      { front: 'Flow cytometry', back: 'Identifies and counts thousands of individual cells/second using laser-excited fluorescent antibodies against surface or intracellular markers. FACS sorts live cells for downstream analysis.' },
      { front: 'ELISA', back: 'Enzyme-Linked Immunosorbent Assay. Quantifies specific proteins (cytokines, antibodies) using capture antibody + detection antibody + enzyme → color reaction proportional to concentration.' },
      { front: 'Western blot', back: 'Detects a specific protein by size: SDS-PAGE separation → membrane transfer → antibody detection. Good for: protein expression levels, post-translational modifications (phosphorylation). NOT for secreted proteins.' },
      { front: 'qPCR', back: 'Quantitative PCR. Measures mRNA expression levels in real time. For secreted proteins, measures how much mRNA is made — not how much protein is secreted.' },
      { front: 'ELISPOT', back: 'Enzyme-Linked ImmunoSpot. Detects individual cells secreting a cytokine. Each secreting cell leaves one spot. Gold standard for measuring antigen-specific T cell responses in vaccine trials.' },
    ],
  },

  'mod5-l3': {
    takeaways: [
      'RNA-seq reads millions of short mRNA fragments per sample and counts how many map to each gene — revealing the complete transcriptional state of a cell or tissue.',
      'Bulk RNA-seq averages signal across all cells; scRNA-seq profiles each cell individually, revealing hidden subpopulations (e.g., exhausted vs. effector T cells within a tumor).',
      'Downstream tools: DESeq2 for differential expression, GO/KEGG for pathway analysis, UMAP for visualizing scRNA-seq clusters, TCR-seq for clonotype analysis.',
    ],
    quickCheck: {
      question: 'In a tumor scRNA-seq dataset, you identify a cluster of CD8+ T cells with high PD-1, TIM-3, and LAG-3 expression but low IFN-γ and granzyme B. What is this cell state?',
      options: [
        'Activated effector CTLs at peak anti-tumor activity',
        'Naive CD8 T cells that have not encountered antigen',
        'Exhausted CD8 T cells — hallmark of chronic antigen stimulation with multiple co-inhibitory receptors and impaired effector function',
        'Memory CD8 T cells with rapid recall potential',
      ],
      correctIndex: 2,
      explanation: 'Co-expression of multiple inhibitory receptors (PD-1, TIM-3, LAG-3) alongside low effector cytokine (IFN-γ) and cytotoxic molecule (granzyme B) expression is the transcriptional signature of T cell exhaustion — a dysfunctional state induced by chronic tumor antigen exposure.',
    },
    flashcards: [
      { front: 'RNA-seq', back: 'Sequencing of cDNA made from cellular mRNA. Reveals which genes are expressed and at what level. Library: mRNA → cDNA → short fragments → sequencing → count reads per gene.' },
      { front: 'Differential expression', back: 'Genes significantly more or less expressed between conditions. Quantified as log2 fold-change. Statistical significance: adjusted p-value (FDR) < 0.05 is standard cutoff.' },
      { front: 'UMAP', back: 'Uniform Manifold Approximation and Projection. Dimensionality reduction algorithm that compresses high-dimensional gene expression data into a 2D plot. Clusters of cells with similar transcriptomes appear close together.' },
      { front: 'scRNA-seq', back: 'Single-cell RNA sequencing. Profiles gene expression of individual cells. Reveals heterogeneity, identifies rare cell types, and traces differentiation trajectories.' },
      { front: 'TCR-seq', back: 'Sequencing of T cell receptor gene rearrangements. Reveals clonal expansion (one clone expanded massively = antigen-specific response), repertoire diversity, and shared clonotypes across tissues.' },
    ],
  },
};
