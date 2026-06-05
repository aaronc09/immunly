import { Module } from '../types';

const module1: Module = {
  id: 'mod1',
  number: 1,
  title: 'Foundations',
  subtitle: 'Genetics, cell biology & the origin of immune cells',
  emoji: '🧬',
  color: '#2563EB',
  lessons: [
    {
      id: 'mod1-l1',
      title: 'DNA, Genes & Proteins',
      emoji: '🔬',
      duration: '7 min',
      sections: [
        {
          type: 'text',
          heading: 'The Blueprint of Life',
          body: 'Every one of your ~37 trillion cells contains the same DNA — roughly 3 billion base pairs coiled into 23 pairs of chromosomes. DNA is written in a 4-letter alphabet (A, T, G, C), and specific stretches called genes encode the instructions to build proteins — the molecular machines that do almost everything in biology, including running your immune system.',
        },
        {
          type: 'timeline',
          heading: 'The Central Dogma: DNA → RNA → Protein',
          steps: [
            { label: 'Transcription', detail: 'RNA polymerase reads a gene in the nucleus and synthesizes a complementary messenger RNA (mRNA) strand.' },
            { label: 'RNA Processing', detail: 'The pre-mRNA is spliced (introns removed, exons joined), capped, and poly-A tailed to become mature mRNA.' },
            { label: 'Export', detail: 'The mature mRNA is exported from the nucleus through nuclear pores into the cytoplasm.' },
            { label: 'Translation', detail: 'Ribosomes read the mRNA in triplets (codons), assembling a chain of amino acids to form a polypeptide.' },
            { label: 'Protein Folding', detail: 'Chaperone proteins help the polypeptide fold into its 3D shape, determining its function.' },
          ],
        },
        {
          type: 'highlight',
          label: '💡 Why this matters for immunity',
          text: 'Immune cells use this exact process to produce antibodies, cytokines, and surface receptors. mRNA vaccines work by delivering mRNA instructions directly to your cells, skipping the nucleus entirely and having ribosomes build the antigen.',
          color: '#2563EB',
        },
        {
          type: 'terms',
          heading: 'Key Terms',
          terms: [
            { term: 'Gene', definition: 'A segment of DNA that encodes a functional product (usually a protein or RNA).' },
            { term: 'Allele', definition: 'A variant form of a gene. You inherit one allele from each parent.' },
            { term: 'Polymorphism', definition: 'Natural variation in a gene sequence within a population. MHC genes are extremely polymorphic — critical for diverse immune recognition.' },
            { term: 'Promoter', definition: 'DNA sequence upstream of a gene where transcription factors and RNA polymerase bind to initiate transcription.' },
            { term: 'Transcription factor', definition: 'A protein that binds DNA to regulate gene expression. Cytokines activate transcription factors (e.g., STAT proteins) to switch immune programs on or off.' },
          ],
        },
      ],
    },
    {
      id: 'mod1-l2',
      title: 'Cell Biology Essentials',
      emoji: '🦠',
      duration: '8 min',
      sections: [
        {
          type: 'text',
          heading: 'The Cell as an Immune Battleground',
          body: 'Understanding what happens inside cells is essential for immunology. Pathogens hijack cellular machinery; immune cells use organelles as weapons; and cellular signals cascade through pathways that determine life or death.',
        },
        {
          type: 'comparison',
          heading: 'Prokaryotes vs. Eukaryotes',
          leftHeader: 'Prokaryotes (bacteria)',
          rightHeader: 'Eukaryotes (your cells)',
          rows: [
            { left: 'No nucleus — DNA floats free', right: 'Nucleus — DNA enclosed in membrane' },
            { left: 'No membrane-bound organelles', right: 'Rich organelles: ER, Golgi, mitochondria' },
            { left: 'Cell wall (peptidoglycan in gram+)', right: 'No cell wall (animal cells)' },
            { left: 'Flagellin, LPS, lipoteichoic acid', right: 'Recognized as foreign by TLRs' },
            { left: '70S ribosomes', right: '80S ribosomes' },
          ],
        },
        {
          type: 'flipcard',
          heading: 'Organelle Functions — Tap to Reveal',
          instruction: 'Tap each card to see how it connects to immunity.',
          cards: [
            {
              front: 'Endoplasmic Reticulum (ER)',
              back: 'Proteins destined for the cell surface (including MHC I molecules) are synthesized and folded in the ER. Viral peptides are loaded onto MHC I in the ER before display.',
            },
            {
              front: 'Lysosome',
              back: 'Acidic organelle packed with digestive enzymes. Phagosomes fuse with lysosomes to destroy engulfed pathogens. APCs use lysosomes to digest proteins into peptides for MHC II loading.',
            },
            {
              front: 'Golgi Apparatus',
              back: 'The "post office" of the cell — processes and packages proteins. Antibodies are packaged and secreted by plasma cells via the Golgi.',
            },
            {
              front: 'Mitochondria',
              back: 'Energy-producing powerhouses. Also central to apoptosis — cytochrome c released from mitochondria triggers the intrinsic apoptotic pathway, used by killer T cells to eliminate infected cells.',
            },
            {
              front: 'Nucleus',
              back: 'Contains the genome. Transcription factors like NF-κB and NFAT (activated during T cell activation) enter the nucleus to switch on inflammatory genes.',
            },
          ],
        },
        {
          type: 'highlight',
          label: '⚠️ Key Concept: Apoptosis vs. Necrosis',
          text: 'Apoptosis is "programmed cell death" — clean, contained, no inflammation. Killer T cells induce apoptosis in infected cells via perforin/granzymes and Fas–FasL. Necrosis is messy, chaotic death that releases DAMPs and triggers inflammation.',
          color: '#DC2626',
        },
      ],
    },
    {
      id: 'mod1-l3',
      title: 'Hematopoiesis',
      emoji: '🌳',
      duration: '10 min',
      sections: [
        {
          type: 'text',
          heading: 'All Blood Cells Come From One Source',
          body: 'Every immune cell in your body was born from a single type of stem cell: the Hematopoietic Stem Cell (HSC), located in your bone marrow. HSCs are "multipotent" — they can give rise to any blood cell type. Each day, your bone marrow produces billions of new blood cells to replace those that die.',
        },
        {
          type: 'timeline',
          heading: 'The Hematopoietic Tree (from your notes)',
          steps: [
            { label: 'HSC → MPP', detail: 'Hematopoietic Stem Cell gives rise to Multipotent Progenitor (MPP), which begins to lose some self-renewal capacity.' },
            { label: 'MPP → CLP', detail: 'Common Lymphoid Progenitor (CLP): committed to producing T cells, B cells, NK cells, and innate lymphoid cells (ILC1, ILC2, ILC3).' },
            { label: 'MPP → CMP', detail: 'Common Myeloid Progenitor (CMP): committed to producing granulocytes (neutrophils, eosinophils, basophils), monocytes, and dendritic cells.' },
            { label: 'CLP → Thymus', detail: 'T cell precursors leave the bone marrow and migrate to the thymus, where they undergo positive and negative selection to become mature T cells.' },
            { label: 'CLP → Bone Marrow', detail: 'B cells complete their entire maturation in the bone marrow, where tolerance checkpoints eliminate self-reactive cells.' },
            { label: 'CMP → Granulocytes', detail: 'Neutrophils (most abundant WBC), eosinophils, basophils, and mast cells (mature in tissues) — the "myeloid granulocytes."' },
            { label: 'CMP → Monocytes', detail: 'Monocytes circulate in blood for 1–5 days, then enter tissues where they differentiate into macrophages or monocyte-derived dendritic cells (moDCs).' },
          ],
        },
        {
          type: 'comparison',
          heading: 'Two Origins of Macrophages',
          leftHeader: 'Embryonic-Derived Tissue-Resident',
          rightHeader: 'Monocyte-Derived',
          rows: [
            { left: 'Established before birth', right: 'From blood monocytes entering tissues' },
            { left: 'Self-renew in tissues', right: 'Replaced from bone marrow during inflammation' },
            { left: 'Microglia (brain)', right: 'Especially important during infection/injury' },
            { left: 'Kupffer cells (liver)', right: 'Also contribute to steady-state turnover in some tissues (e.g., intestine)' },
            { left: 'Alveolar macrophages (lung)', right: '' },
            { left: 'Langerhans cells (skin)', right: '' },
          ],
        },
        {
          type: 'terms',
          heading: 'Blood Cell Percentages (Normal Adult)',
          terms: [
            { term: 'Neutrophils', definition: '~38–80% of total WBCs — the most abundant, first responders to infection.' },
            { term: 'Lymphocytes', definition: '~15–49% of WBCs. Within lymphocytes: T cells 60–85%, B cells 5–20%, NK cells 5–20%.' },
            { term: 'Monocytes', definition: '~0–13% of WBCs. Precursors to macrophages and dendritic cells.' },
            { term: 'Eosinophils', definition: '~0–8% of WBCs. Important in parasite defense and allergy.' },
            { term: 'Basophils', definition: '~0–2% of WBCs. Involved in allergic responses via IgE-mediated activation.' },
          ],
        },
        {
          type: 'highlight',
          label: '📌 Note from your notes',
          text: 'Many immune cells — dendritic cells, macrophages, mast cells, and most ILCs — are uncommon in blood and primarily live in tissues or lymphoid organs. A standard blood count only tells part of the immune story.',
          color: '#2563EB',
        },
      ],
    },
    {
      id: 'mod1-l4',
      title: 'The Lymphatic System',
      emoji: '🗺️',
      duration: '6 min',
      sections: [
        {
          type: 'text',
          heading: 'The Highway Network of Immunity',
          body: 'The lymphatic system is a network of vessels, nodes, and organs that drains fluid from tissues, transports immune cells, and filters antigens. It is where adaptive immune responses are initiated — when a dendritic cell in your finger captures a pathogen, it travels through lymphatic vessels to the nearest lymph node to activate T cells.',
        },
        {
          type: 'comparison',
          heading: 'Primary vs. Secondary Lymphoid Organs',
          leftHeader: 'Primary (where cells develop)',
          rightHeader: 'Secondary (where responses start)',
          rows: [
            { left: 'Bone marrow — B cells, all HSCs', right: 'Lymph nodes — filter lymph, activate T & B cells' },
            { left: 'Thymus — T cells mature here', right: 'Spleen — filters blood, responds to blood-borne antigens' },
            { left: '', right: 'Tonsils / MALT — mucosal immunity' },
            { left: '', right: 'Peyer\'s patches — gut immunity' },
          ],
        },
        {
          type: 'flipcard',
          heading: 'Lymph Node Anatomy — Tap to Explore',
          instruction: 'Each zone has a specific job. Tap to learn what happens there.',
          cards: [
            {
              front: 'T-Cell Zone (Paracortex)',
              back: 'Rich in conventional dendritic cells (cDCs) and naive T cells. Main site where naive T cells encounter antigen-loaded DCs and become activated. CCR7 guides both naive T cells and DCs here via CCL19/CCL21.',
            },
            {
              front: 'B-Cell Follicles',
              back: 'Contain naive B cells, follicular dendritic cells (FDCs), and — during active responses — germinal centers. Tfh cells live here. FDCs display intact antigen for B cells to sample.',
            },
            {
              front: 'Germinal Centers',
              back: 'Specialized microenvironments within follicles where B cells undergo somatic hypermutation, class switching, and selection. The dark zone = proliferation; the light zone = antigen competition and selection.',
            },
            {
              front: 'Medullary Cords',
              back: 'Dense regions containing plasma cells (antibody factories) and macrophages that clear debris and pathogens.',
            },
            {
              front: 'High Endothelial Venules (HEVs)',
              back: 'Specialized blood vessels where naive lymphocytes enter lymph nodes. Express PNAd addressin, which binds L-selectin (CD62L) on naive lymphocytes. Chemokines CCL19/CCL21 guide entry.',
            },
          ],
        },
        {
          type: 'highlight',
          label: '🧠 Big Picture',
          text: 'Think of lymph nodes as military checkpoints. Pathogens that breach your physical barriers are captured by sentinels (DCs, macrophages) and brought to lymph nodes where specialized soldiers (T and B cells) are recruited, trained, and deployed.',
          color: '#059669',
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'm1q1',
      question: 'A cell in your skin is infected with a virus. Which organelle is responsible for loading viral peptides onto MHC class I molecules?',
      options: ['Lysosome', 'Golgi apparatus', 'Endoplasmic reticulum', 'Nucleus'],
      correctIndex: 2,
      explanation: 'Viral peptides produced in the cytoplasm are transported into the ER by the TAP transporter, where they are loaded onto newly synthesized MHC I molecules before being displayed on the cell surface.',
    },
    {
      id: 'm1q2',
      question: 'Which progenitor cell gives rise to T cells, B cells, and NK cells?',
      options: ['Common Myeloid Progenitor (CMP)', 'Common Lymphoid Progenitor (CLP)', 'Multipotent Progenitor (MPP)', 'Granulocyte-Monocyte Progenitor (GMP)'],
      correctIndex: 1,
      explanation: 'The Common Lymphoid Progenitor (CLP) is committed to the lymphoid lineage and produces T cells, B cells, NK cells, and innate lymphoid cells (ILCs).',
    },
    {
      id: 'm1q3',
      question: 'Microglia, Kupffer cells, and alveolar macrophages are best described as:',
      options: ['Monocyte-derived macrophages recruited during infection', 'Tissue-resident macrophages established before birth from embryonic progenitors', 'Dendritic cells that have differentiated in peripheral tissues', 'Granulocytes that migrate into tissues under inflammation'],
      correctIndex: 1,
      explanation: 'These are embryonic-derived tissue-resident macrophages that self-renew locally and are established before birth — distinct from monocyte-derived macrophages that infiltrate during inflammation.',
    },
    {
      id: 'm1q4',
      question: 'Naive T cells and dendritic cells are both guided to the T-cell zone of lymph nodes by which chemokine receptor–ligand pair?',
      options: ['CXCR5 / CXCL13', 'CCR7 / CCL19–CCL21', 'CXCR4 / CXCL12', 'CCR3 / CCL11'],
      correctIndex: 1,
      explanation: 'CCR7 expressed on naive T cells and activated DCs binds CCL19 and CCL21 produced by stromal cells in the T-cell zone (paracortex), directing both cell types to the site of T-cell activation.',
    },
    {
      id: 'm1q5',
      question: 'Which statement correctly describes apoptosis in the context of immunity?',
      options: [
        'Apoptosis releases DAMPs and causes inflammation',
        'Apoptosis is disordered necrotic death triggered by pathogens',
        'Apoptosis is programmed cell death used by killer T cells to cleanly eliminate infected cells',
        'Apoptosis only occurs during embryonic development, not during immune responses',
      ],
      correctIndex: 2,
      explanation: 'Apoptosis is controlled, non-inflammatory cell death. Cytotoxic T cells and NK cells trigger apoptosis in target cells via the perforin/granzyme pathway and the Fas–FasL pathway — eliminating infected or cancerous cells without causing collateral inflammation.',
    },
  ],
};

export default module1;
