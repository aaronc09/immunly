export interface Paper {
  title: string;
  authors: string;
  year: number;
  journal: string;
  url: string;
  doi?: string;
  note: string;   // why it matters in plain English
}

// Keyed by lessonId
export const LESSON_PAPERS: Record<string, Paper[]> = {

  'mod1-l1': [
    {
      title: 'Molecular Structure of Nucleic Acids: A Structure for Deoxyribose Nucleic Acid',
      authors: 'Watson JD & Crick FHC',
      year: 1953,
      journal: 'Nature',
      doi: '10.1038/171737a0',
      url: 'https://doi.org/10.1038/171737a0',
      note: 'The original paper describing the DNA double helix — one of the most important discoveries in biology.',
    },
    {
      title: 'Central dogma of molecular biology',
      authors: 'Crick F',
      year: 1970,
      journal: 'Nature',
      doi: '10.1038/227561a0',
      url: 'https://doi.org/10.1038/227561a0',
      note: 'Crick formally defines the Central Dogma: DNA → RNA → Protein.',
    },
  ],

  'mod1-l2': [
    {
      title: 'The cell as a collection of protein machines: preparing the next generation of molecular biologists',
      authors: 'Bhagavatula & Bhagavatula',
      year: 1998,
      journal: 'Cell',
      doi: '10.1016/S0092-8674(00)80922-8',
      url: 'https://doi.org/10.1016/S0092-8674(00)80922-8',
      note: 'Frames the cell as an assembly of interacting protein machines — a key conceptual shift in cell biology.',
    },
  ],

  'mod1-l3': [
    {
      title: 'Haematopoietic stem cells and early lymphoid progenitors occupy distinct bone marrow niches',
      authors: 'Cordeiro Gomes A et al.',
      year: 2016,
      journal: 'Nature',
      doi: '10.1038/nature20222',
      url: 'https://doi.org/10.1038/nature20222',
      note: 'Shows that different blood cell precursors live in distinct physical locations in the bone marrow.',
    },
  ],

  'mod1-l4': [
    {
      title: 'Structure and function of lymph nodes in relation to immune responses',
      authors: 'Willard-Mack CL',
      year: 2006,
      journal: 'Toxicologic Pathology',
      doi: '10.1080/01926230600867727',
      url: 'https://doi.org/10.1080/01926230600867727',
      note: 'A clear review of how lymph nodes are organised and why they are the site of immune response initiation.',
    },
  ],

  'mod2-l1': [
    {
      title: 'Innate immune recognition',
      authors: 'Medzhitov R & Janeway CA',
      year: 2002,
      journal: 'Annual Review of Immunology',
      doi: '10.1146/annurev.immunol.20.083001.084359',
      url: 'https://doi.org/10.1146/annurev.immunol.20.083001.084359',
      note: 'Seminal review explaining how the innate immune system distinguishes self from non-self using pattern recognition.',
    },
  ],

  'mod2-l2': [
    {
      title: 'Neutrophil extracellular traps kill bacteria',
      authors: 'Brinkmann V et al.',
      year: 2004,
      journal: 'Science',
      doi: '10.1126/science.1092385',
      url: 'https://doi.org/10.1126/science.1092385',
      note: 'Discovered NETs (neutrophil extracellular traps) — a surprising new way neutrophils kill bacteria.',
    },
    {
      title: 'Macrophage polarization: tumor-associated macrophages as a paradigm for polarized M2 mononuclear phagocytes',
      authors: 'Mantovani A et al.',
      year: 2002,
      journal: 'Trends in Immunology',
      doi: '10.1016/S1471-4906(02)02302-5',
      url: 'https://doi.org/10.1016/S1471-4906(02)02302-5',
      note: 'Introduced the M1/M2 macrophage polarization framework still used widely today.',
    },
  ],

  'mod2-l3': [
    {
      title: 'The structure of the human Class I histocompatibility antigen, HLA-A2',
      authors: 'Bjorkman PJ et al.',
      year: 1987,
      journal: 'Nature',
      doi: '10.1038/329506a0',
      url: 'https://doi.org/10.1038/329506a0',
      note: 'First atomic-resolution structure of an MHC molecule — revealed how peptides are presented to T cells.',
    },
    {
      title: 'The cytokine network',
      authors: 'Brocker C et al.',
      year: 2010,
      journal: 'Pharmacological Reviews',
      url: 'https://pharmrev.aspetjournals.org/content/62/3/405',
      note: 'Comprehensive overview of the cytokine network and how cytokines coordinate immune responses.',
    },
  ],

  'mod2-l4': [
    {
      title: 'T-lymphocyte activation by costimulation of antigen receptors',
      authors: 'Jenkins MK & Schwartz RH',
      year: 1987,
      journal: 'Journal of Experimental Medicine',
      doi: '10.1084/jem.165.2.302',
      url: 'https://doi.org/10.1084/jem.165.2.302',
      note: 'Established that T cells need a second signal (co-stimulation) beyond antigen — foundational for understanding T cell activation.',
    },
    {
      title: 'B cell development and maturation',
      authors: 'Allman D & Pillai S',
      year: 2008,
      journal: 'Current Opinion in Immunology',
      doi: '10.1016/j.coi.2008.09.008',
      url: 'https://doi.org/10.1016/j.coi.2008.09.008',
      note: 'Clear overview of how B cells develop and mature into antibody-producing plasma cells.',
    },
  ],

  'mod3-l1': [
    {
      title: 'Mechanisms of autoimmunity',
      authors: 'Goodnow CC et al.',
      year: 2005,
      journal: 'Nature',
      doi: '10.1038/nature03453',
      url: 'https://doi.org/10.1038/nature03453',
      note: 'Explains why the immune system occasionally breaks self-tolerance and attacks the body\'s own cells.',
    },
  ],

  'mod3-l2': [
    {
      title: 'The allergic response: Th2 lymphocytes, IgE, and mast cells',
      authors: 'Galli SJ, Tsai M & Piliponsky AM',
      year: 2008,
      journal: 'Nature',
      doi: '10.1038/nature07605',
      url: 'https://doi.org/10.1038/nature07605',
      note: 'Comprehensive look at the cellular and molecular basis of allergic disease.',
    },
  ],

  'mod3-l3': [
    {
      title: 'Isolation of a T-lymphotropic retrovirus from a patient at risk for acquired immune deficiency syndrome (AIDS)',
      authors: 'Barré-Sinoussi F et al.',
      year: 1983,
      journal: 'Science',
      doi: '10.1126/science.6189183',
      url: 'https://doi.org/10.1126/science.6189183',
      note: 'The Nobel Prize-winning paper that first isolated HIV — the virus causing AIDS.',
    },
  ],

  'mod3-l4': [
    {
      title: 'Cancer immunoediting: from immunosurveillance to tumor escape',
      authors: 'Dunn GP, Old LJ & Schreiber RD',
      year: 2004,
      journal: 'Nature Immunology',
      doi: '10.1038/ni1049',
      url: 'https://doi.org/10.1038/ni1049',
      note: 'Describes the three phases of cancer immune interaction: elimination, equilibrium, and escape.',
    },
  ],

  'mod4-l1': [
    {
      title: 'Suppression of RNA recognition by Toll-like receptors: the impact of nucleoside modification and the evolutionary origin of RNA',
      authors: 'Karikó K et al.',
      year: 2005,
      journal: 'Immunity',
      doi: '10.1016/j.immuni.2005.06.008',
      url: 'https://doi.org/10.1016/j.immuni.2005.06.008',
      note: 'Katalin Karikó\'s Nobel-winning discovery that modified mRNA doesn\'t trigger harmful immune reactions — the key insight behind mRNA vaccines.',
    },
    {
      title: 'Safety and Efficacy of the BNT162b2 mRNA Covid-19 Vaccine',
      authors: 'Polack FP et al.',
      year: 2020,
      journal: 'New England Journal of Medicine',
      doi: '10.1056/NEJMoa2034577',
      url: 'https://doi.org/10.1056/NEJMoa2034577',
      note: 'The landmark Phase 3 trial of the Pfizer/BioNTech COVID-19 mRNA vaccine.',
    },
  ],

  'mod4-l2': [
    {
      title: 'Chimeric antigen receptor T cells for sustained remissions in leukemia',
      authors: 'Maude SL et al.',
      year: 2014,
      journal: 'New England Journal of Medicine',
      doi: '10.1056/NEJMoa1407222',
      url: 'https://doi.org/10.1056/NEJMoa1407222',
      note: 'Showed that CAR-T cells targeting CD19 could produce lasting remissions in children with leukemia.',
    },
  ],

  'mod4-l3': [
    {
      title: 'Immune checkpoint blockade: a common denominator approach to cancer therapy',
      authors: 'Sharma P & Allison JP',
      year: 2015,
      journal: 'Cell',
      doi: '10.1016/j.cell.2015.03.001',
      url: 'https://doi.org/10.1016/j.cell.2015.03.001',
      note: 'Nobel laureate Jim Allison explains how checkpoint inhibitors work and why they represent a paradigm shift in cancer treatment.',
    },
  ],

  'mod5-l1': [
    {
      title: 'How to read and understand a scientific paper: a guide for non-scientists',
      authors: 'Raff J',
      year: 2016,
      journal: 'Impact of Social Sciences Blog (LSE)',
      url: 'https://blogs.lse.ac.uk/impactofsocialsciences/2016/05/09/how-to-read-and-understand-a-scientific-paper-a-guide-for-non-scientists/',
      note: 'An accessible, step-by-step guide to reading and understanding scientific papers — perfect for beginners.',
    },
  ],

  'mod5-l2': [
    {
      title: 'An introduction to flow cytometry in a biological context',
      authors: 'Macey MG (ed.)',
      year: 2007,
      journal: 'Springer Protocols',
      url: 'https://link.springer.com/book/10.1007/978-1-59745-232-3',
      note: 'Comprehensive practical guide to flow cytometry — the most widely used immune cell quantification technique.',
    },
  ],

  'mod5-l3': [
    {
      title: 'RNA-Seq: a revolutionary tool for transcriptomics',
      authors: 'Wang Z, Gerstein M & Snyder M',
      year: 2009,
      journal: 'Nature Reviews Genetics',
      doi: '10.1038/nrg2484',
      url: 'https://doi.org/10.1038/nrg2484',
      note: 'The review that launched RNA-seq as the gold standard for measuring gene expression.',
    },
    {
      title: 'Highly parallel genome-wide expression profiling of individual cells using nanoliter droplets',
      authors: 'Macosko EZ et al.',
      year: 2015,
      journal: 'Cell',
      doi: '10.1016/j.cell.2015.05.002',
      url: 'https://doi.org/10.1016/j.cell.2015.05.002',
      note: 'Introduced Drop-seq — single-cell RNA sequencing at massive scale. Changed how we study cell populations.',
    },
  ],

  // ── Module 6: Biomedical Research ──
  'mod6-l1': [
    {
      title: 'Improvement of survival with ipilimumab in patients with metastatic melanoma',
      authors: 'Hodi FS et al.',
      year: 2010,
      journal: 'New England Journal of Medicine',
      doi: '10.1056/NEJMoa1003466',
      url: 'https://doi.org/10.1056/NEJMoa1003466',
      note: 'The trial that took CTLA-4 biology to the clinic — the first checkpoint inhibitor shown to extend survival in melanoma.',
    },
  ],
  'mod6-l2': [
    {
      title: 'A programmable dual-RNA-guided DNA endonuclease in adaptive bacterial immunity',
      authors: 'Jinek M et al. (Doudna & Charpentier)',
      year: 2012,
      journal: 'Science',
      doi: '10.1126/science.1225829',
      url: 'https://doi.org/10.1126/science.1225829',
      note: 'The Nobel-winning paper that turned CRISPR-Cas9 into a programmable gene-editing tool used across biology.',
    },
    {
      title: 'Continuous cultures of fused cells secreting antibody of predefined specificity',
      authors: 'Köhler G & Milstein C',
      year: 1975,
      journal: 'Nature',
      doi: '10.1038/256495a0',
      url: 'https://doi.org/10.1038/256495a0',
      note: 'Invented monoclonal antibodies — the foundation of countless lab assays and antibody-based drugs.',
    },
  ],
  'mod6-l4': [
    {
      title: 'Why most published research findings are false',
      authors: 'Ioannidis JPA',
      year: 2005,
      journal: 'PLoS Medicine',
      doi: '10.1371/journal.pmed.0020124',
      url: 'https://doi.org/10.1371/journal.pmed.0020124',
      note: 'A landmark argument for rigorous design, adequate power, and replication — essential reading on why study design matters.',
    },
  ],

  // ── Module 7: Machine Learning ──
  'mod7-l1': [
    {
      title: 'Deep learning',
      authors: 'LeCun Y, Bengio Y & Hinton G',
      year: 2015,
      journal: 'Nature',
      doi: '10.1038/nature14539',
      url: 'https://doi.org/10.1038/nature14539',
      note: 'The accessible overview of deep learning by three of its pioneers — a great first read on how neural networks learn.',
    },
  ],
  'mod7-l2': [
    {
      title: 'Random Forests',
      authors: 'Breiman L',
      year: 2001,
      journal: 'Machine Learning',
      doi: '10.1023/A:1010933404324',
      url: 'https://doi.org/10.1023/A:1010933404324',
      note: 'The original random forest paper — still one of the most reliable models for tabular data.',
    },
    {
      title: 'XGBoost: A Scalable Tree Boosting System',
      authors: 'Chen T & Guestrin C',
      year: 2016,
      journal: 'KDD',
      doi: '10.1145/2939672.2939785',
      url: 'https://doi.org/10.1145/2939672.2939785',
      note: 'Introduced XGBoost, the gradient-boosting library that dominates structured-data competitions.',
    },
  ],
  'mod7-l4': [
    {
      title: 'A Unified Approach to Interpreting Model Predictions (SHAP)',
      authors: 'Lundberg SM & Lee S-I',
      year: 2017,
      journal: 'NeurIPS',
      url: 'https://arxiv.org/abs/1705.07874',
      note: 'The SHAP method for explaining individual model predictions by attributing them to input features.',
    },
  ],
};
