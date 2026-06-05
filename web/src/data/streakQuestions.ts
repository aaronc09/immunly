export interface StreakQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// 21-question rotating bank. Day index = dayOfYear % BANK.length
export const STREAK_QUESTION_BANK: StreakQuestion[] = [
  {
    question: 'Which molecule carries genetic instructions from the nucleus to the ribosome?',
    options: ['DNA', 'mRNA', 'tRNA', 'rRNA'],
    correctIndex: 1,
    explanation: 'mRNA (messenger RNA) is transcribed from DNA in the nucleus, then exits to the cytoplasm where ribosomes translate it into protein.',
  },
  {
    question: 'What do we call the first line of immune defense that responds within minutes, without needing prior exposure to a pathogen?',
    options: ['Adaptive immunity', 'Innate immunity', 'Humoral immunity', 'Memory response'],
    correctIndex: 1,
    explanation: 'Innate immunity is the rapid, non-specific first line of defense using physical barriers, phagocytes, and pattern recognition receptors.',
  },
  {
    question: 'Which cell type is the first to arrive at an infection site and is the most abundant immune cell in blood?',
    options: ['Macrophage', 'NK cell', 'Neutrophil', 'Dendritic cell'],
    correctIndex: 2,
    explanation: 'Neutrophils are the most abundant white blood cells and first responders to bacterial infection, killing pathogens by phagocytosis and releasing antimicrobial molecules.',
  },
  {
    question: 'MHC Class I molecules present peptides to which T cell type?',
    options: ['CD4⁺ Helper T cells', 'CD8⁺ Cytotoxic T cells', 'Regulatory T cells', 'Natural Killer cells'],
    correctIndex: 1,
    explanation: 'MHC Class I is on all nucleated cells and presents intracellular peptides (e.g., from viruses) to CD8⁺ cytotoxic T cells, which then kill the infected cell.',
  },
  {
    question: 'Which antibody isotype is primarily responsible for immediate allergic reactions?',
    options: ['IgG', 'IgA', 'IgM', 'IgE'],
    correctIndex: 3,
    explanation: 'IgE binds to mast cells and basophils; when an allergen cross-links IgE on the cell surface, it triggers degranulation and the release of histamine — causing allergic symptoms.',
  },
  {
    question: 'HIV targets which type of immune cell, leading to AIDS when cell numbers drop critically?',
    options: ['CD8⁺ T cells', 'B cells', 'CD4⁺ T cells', 'Neutrophils'],
    correctIndex: 2,
    explanation: 'HIV infects CD4⁺ T cells (and macrophages) using the CD4 receptor as an entry point. When CD4⁺ counts fall below 200 cells/µL, the patient is diagnosed with AIDS.',
  },
  {
    question: 'What is the term for the process by which hematopoietic stem cells give rise to all blood and immune cells?',
    options: ['Lymphopoiesis', 'Haemopoiesis', 'Hematopoiesis', 'Myelopoiesis'],
    correctIndex: 2,
    explanation: 'Hematopoiesis is the formation of blood cellular components from multipotent hematopoietic stem cells in the bone marrow.',
  },
  {
    question: 'Checkpoint inhibitor drugs like pembrolizumab work by blocking which receptor on T cells?',
    options: ['TCR', 'PD-1', 'CD28', 'CTLA-4 on B cells'],
    correctIndex: 1,
    explanation: 'Pembrolizumab blocks PD-1 on T cells, preventing tumor cells from sending the "don\'t attack me" signal via PD-L1, and reinvigorating exhausted T cells against cancer.',
  },
  {
    question: 'The Central Dogma of molecular biology describes information flowing in which direction?',
    options: ['Protein → RNA → DNA', 'RNA → DNA → Protein', 'DNA → RNA → Protein', 'Protein → DNA → RNA'],
    correctIndex: 2,
    explanation: 'Francis Crick\'s Central Dogma: DNA is transcribed to RNA, which is translated to protein. Information flows in this one direction (with some exceptions like reverse transcriptase).',
  },
  {
    question: 'Which organ is responsible for T cell maturation and the elimination of self-reactive T cells?',
    options: ['Bone marrow', 'Spleen', 'Lymph node', 'Thymus'],
    correctIndex: 3,
    explanation: 'T cells migrate from the bone marrow to the thymus, where they undergo positive selection (must recognize MHC) and negative selection (must not react to self-antigens).',
  },
  {
    question: 'What does an mRNA vaccine deliver into your cells?',
    options: ['A weakened virus', 'Antibodies', 'mRNA encoding a viral antigen', 'Viral DNA'],
    correctIndex: 2,
    explanation: 'mRNA vaccines deliver lipid nanoparticle-encapsulated mRNA that your ribosomes translate into a viral protein (antigen). This triggers an immune response without any live virus.',
  },
  {
    question: 'Regulatory T cells (Tregs) primarily function to:',
    options: ['Kill virus-infected cells', 'Suppress excessive immune responses and maintain tolerance', 'Produce antibodies', 'Present antigens to B cells'],
    correctIndex: 1,
    explanation: 'Tregs express FoxP3 and suppress other immune cells via IL-10, TGF-β, and direct contact. They prevent autoimmunity and limit inflammation after an infection is cleared.',
  },
  {
    question: 'Which lab technique uses antibodies conjugated to fluorescent dyes to identify and count specific cell populations?',
    options: ['Western blot', 'ELISA', 'Flow cytometry', 'PCR'],
    correctIndex: 2,
    explanation: 'Flow cytometry passes individual cells through a laser beam; fluorescent antibodies attached to specific cell surface markers emit light that identifies and quantifies cell populations.',
  },
  {
    question: 'Somatic hypermutation occurs in germinal centers to produce:',
    options: ['More T cell clones', 'Antibodies with higher antigen affinity (affinity maturation)', 'Cytokines like IL-2', 'MHC Class II molecules'],
    correctIndex: 1,
    explanation: 'In germinal centers, B cells mutate their antibody variable regions rapidly; B cells with higher-affinity antibodies are selected to survive — this is affinity maturation.',
  },
  {
    question: 'What does PD-L1 expression on tumor cells allow them to do?',
    options: ['Divide faster', 'Recruit more macrophages', 'Bind PD-1 on T cells and inhibit the anti-tumor immune response', 'Increase MHC I expression'],
    correctIndex: 2,
    explanation: 'PD-L1 on tumor cells binds PD-1 on T cells, sending an inhibitory "exhaustion" signal. This is a major mechanism of tumor immune evasion — and the target of checkpoint inhibitors.',
  },
  {
    question: 'RNA sequencing (RNA-seq) measures:',
    options: ['DNA mutations', 'The genome of a cell', 'Gene expression levels across the whole transcriptome', 'Protein quantities only'],
    correctIndex: 2,
    explanation: 'RNA-seq sequences all mRNA molecules in a sample, allowing researchers to measure which genes are being expressed and at what levels — giving a snapshot of cell activity.',
  },
  {
    question: 'Which of the following is the correct sequence of events in an allergic reaction?',
    options: [
      'Antigen → IgG binding → mast cell activation → histamine',
      'First exposure: IgE production → second exposure: IgE cross-linking on mast cells → histamine release',
      'Antigen → T cell activation → cytokine storm',
      'IgM binding → complement activation → inflammation',
    ],
    correctIndex: 1,
    explanation: 'Sensitization: allergen triggers IgE production. On re-exposure, the allergen cross-links IgE on mast cell surfaces, triggering degranulation and histamine release — causing allergy symptoms.',
  },
  {
    question: 'What is a PAMP?',
    options: [
      'A receptor on T cells',
      'A type of lymphocyte',
      'A conserved microbial molecule recognized by innate immune receptors',
      'A cytokine secreted by NK cells',
    ],
    correctIndex: 2,
    explanation: 'PAMPs (Pathogen-Associated Molecular Patterns) are conserved microbial structures like LPS and flagellin. They are recognized by PRRs (e.g., Toll-like receptors) on innate immune cells.',
  },
  {
    question: 'CAR-T therapy involves:',
    options: [
      'Injecting a cancer patient with a chemotherapy drug',
      'Engineering a patient\'s own T cells to express a receptor targeting their cancer, then infusing them back',
      'Using monoclonal antibodies to block PD-1',
      'Delivering mRNA encoding tumor antigens as a vaccine',
    ],
    correctIndex: 1,
    explanation: 'CAR-T: a patient\'s T cells are extracted, engineered to express a chimeric antigen receptor (CAR) targeting a tumour antigen (e.g., CD19), then expanded and infused back to kill cancer cells.',
  },
  {
    question: 'In a scientific paper, where would you find a brief summary of the study\'s background, methods, results, and conclusions?',
    options: ['Introduction', 'Abstract', 'Discussion', 'Methods'],
    correctIndex: 1,
    explanation: 'The abstract is a concise (150–300 word) summary of the entire paper. It\'s the first thing you read and helps you decide whether the full paper is relevant.',
  },
  {
    question: 'Which process gives B cells the ability to switch from making IgM to making IgG or IgA while keeping the same antigen specificity?',
    options: ['VDJ recombination', 'Somatic hypermutation', 'Class-switch recombination (isotype switching)', 'Clonal deletion'],
    correctIndex: 2,
    explanation: 'Class-switch recombination changes the antibody constant region (determining class/isotype) while keeping the variable region (antigen specificity) the same. Driven by cytokines in the germinal center.',
  },
];

export function getTodaysQuestion(): StreakQuestion {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return STREAK_QUESTION_BANK[dayOfYear % STREAK_QUESTION_BANK.length];
}

export function getTodayKey(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}
