// Web curriculum — adapted from RN modules with web-friendly section types

export interface TextSection    { type: 'text';    heading?: string; body: string }
export interface CalloutSection { type: 'callout'; label: string; text: string; color?: string }
export interface TableSection   { type: 'table';   heading: string; leftHeader: string; rightHeader: string; rows: { left: string; right: string }[] }
export interface StepsSection   { type: 'steps';   heading: string; steps: { label: string; detail: string }[] }
export interface TermsSection   { type: 'terms';   heading: string; terms: { term: string; definition: string }[] }

export type Section = TextSection | CalloutSection | TableSection | StepsSection | TermsSection;

export interface Lesson {
  id: string;
  title: string;
  emoji: string;
  duration: string;
  sections: Section[];
  takeaways: string[];
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  lessons: Lesson[];
}

// ── Module 1: Foundations ──────────────────────────────────────────────────────
const mod1: Module = {
  id: 'mod1', number: 1,
  title: 'Foundations',
  subtitle: 'Genetics, cell biology & the origin of immune cells',
  emoji: '🧬', color: '#3B82F6',
  lessons: [
    {
      id: 'mod1-l1', title: 'DNA, Genes & Proteins', emoji: '🔬', duration: '7 min',
      sections: [
        { type: 'text', heading: 'The Blueprint of Life',
          body: 'Every one of your ~37 trillion cells contains the same DNA — roughly 3 billion base pairs coiled into 23 pairs of chromosomes. DNA is written in a 4-letter alphabet (A, T, G, C), and specific stretches called genes encode the instructions to build proteins — the molecular machines that do almost everything in biology, including running your immune system.' },
        { type: 'steps', heading: 'The Central Dogma: DNA → RNA → Protein',
          steps: [
            { label: 'Transcription', detail: 'RNA polymerase unwinds the DNA double helix and reads a template strand, building a complementary mRNA molecule one nucleotide at a time.' },
            { label: 'RNA Processing', detail: 'In eukaryotes, introns are spliced out and a 5′ cap and poly-A tail are added to stabilise the mRNA before it exits the nucleus.' },
            { label: 'Translation', detail: 'Ribosomes read mRNA in triplets called codons. Each codon specifies one amino acid. The ribosome assembles the amino acid chain until it hits a stop codon.' },
            { label: 'Protein Folding', detail: 'The new polypeptide folds into its 3D shape — sometimes with help from chaperone proteins. Shape determines function.' },
          ],
        },
        { type: 'callout', label: 'Why it matters for immunology', color: 'blue',
          text: 'Every immune cell you will learn about expresses specific proteins (receptors, cytokines, enzymes) encoded by genes. Understanding how genes become proteins is the foundation for understanding how immune cells are made and how they function.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Gene', definition: 'A segment of DNA that encodes instructions for making a specific protein or functional RNA molecule.' },
            { term: 'Transcription', definition: 'The process of copying a gene\'s DNA sequence into mRNA, carried out by RNA polymerase in the nucleus.' },
            { term: 'Translation', definition: 'The process of reading mRNA codons at the ribosome to assemble a chain of amino acids into a protein.' },
            { term: 'Codon', definition: 'A three-nucleotide sequence in mRNA that specifies a particular amino acid (or a stop signal).' },
            { term: 'Transcription Factor', definition: 'A protein that binds to specific DNA sequences to turn genes on or off; cytokines often work by activating transcription factors in immune cells.' },
          ],
        },
      ],
      takeaways: [
        'DNA → mRNA (transcription) → protein (translation) — this "Central Dogma" underlies all immune cell function.',
        'Genes are regulated by transcription factors; cytokines activate TFs like STAT proteins to switch immune programs on.',
        'mRNA vaccines exploit the Central Dogma: deliver mRNA instructions, your ribosomes make the antigen.',
      ],
      quiz: [
        { id: 'q1', question: 'Which enzyme reads DNA and makes an mRNA copy?', options: ['DNA polymerase', 'RNA polymerase', 'Reverse transcriptase', 'Helicase'], correctIndex: 1, explanation: 'RNA polymerase unwinds the double helix and synthesises the mRNA strand complementary to the template DNA strand during transcription.' },
        { id: 'q2', question: 'What is a codon?', options: ['An amino acid', 'A three-nucleotide mRNA sequence specifying one amino acid', 'An exon', 'A type of ribosome'], correctIndex: 1, explanation: 'Codons are three-base sequences read by the ribosome. There are 64 possible codons encoding 20 amino acids plus start and stop signals.' },
      ],
    },
    {
      id: 'mod1-l2', title: 'Cell Biology for Immunologists', emoji: '🦠', duration: '6 min',
      sections: [
        { type: 'text', heading: 'Why Cell Biology Matters',
          body: 'Immune cells are just cells — which means they obey the same rules as all eukaryotic cells. Understanding their organelles helps you understand how they work: how they make proteins to fight infection, how they communicate, and how they respond to signals.' },
        { type: 'table', heading: 'Key Organelles & Their Immune Roles',
          leftHeader: 'Organelle', rightHeader: 'Role in Immune Cells',
          rows: [
            { left: 'Nucleus', right: 'Stores DNA; site of transcription. When a T cell is activated, transcription factors like NF-κB enter the nucleus to switch on immune genes.' },
            { left: 'Rough ER', right: 'Ribosomes here translate mRNA for secretory proteins — including antibodies and cytokines.' },
            { left: 'Golgi Apparatus', right: 'Packages and ships proteins. Antibodies are glycosylated and packaged here before secretion.' },
            { left: 'Lysosomes', right: 'Contain digestive enzymes. Macrophages use lysosomes to destroy phagocytosed bacteria.' },
            { left: 'Mitochondria', right: 'Supply ATP for energy-intensive processes like cell migration, proliferation, and cytokine production.' },
            { left: 'Cytoskeleton', right: 'Network of filaments that enables immune cells to migrate to infection sites and form the immunological synapse with T cells.' },
          ],
        },
        { type: 'callout', label: 'Secretory Pathway', color: 'green',
          text: 'Antibodies and cytokines follow the secretory pathway: made on rough ER ribosomes → packaged in Golgi → exported in vesicles → secreted into the extracellular space. Disruption of any step impairs immune function.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Organelle', definition: 'A membrane-bound compartment within a cell specialised for a particular function.' },
            { term: 'Endoplasmic Reticulum (ER)', definition: 'Network of membranes; rough ER (with ribosomes) folds secretory proteins; smooth ER handles lipids.' },
            { term: 'Golgi Apparatus', definition: 'Modifies, packages, and sorts proteins for secretion or delivery to other organelles.' },
            { term: 'Lysosome', definition: 'Acidic organelle containing hydrolytic enzymes that degrade foreign material and cellular debris.' },
          ],
        },
      ],
      takeaways: [
        'The rough ER and Golgi are the assembly line for secretory proteins — antibodies and cytokines are made here.',
        'Lysosomes are the macrophage\'s "stomach" — they digest phagocytosed pathogens.',
        'Cytoskeletal dynamics allow immune cells to migrate, shape-change, and form the immunological synapse.',
      ],
      quiz: [
        { id: 'q1', question: 'Where are antibodies made within a plasma cell?', options: ['Nucleus', 'Smooth ER', 'Rough ER ribosomes → Golgi', 'Mitochondria'], correctIndex: 2, explanation: 'Antibodies are secretory proteins. They are synthesised on rough ER ribosomes, folded and modified in the ER lumen, then packaged in the Golgi for secretion.' },
      ],
    },
    {
      id: 'mod1-l3', title: 'Hematopoiesis: The Origin of Immune Cells', emoji: '🌳', duration: '8 min',
      sections: [
        { type: 'text', heading: 'All Blood Cells Come From One Ancestor',
          body: 'Every immune cell in your body — from neutrophils to T cells — originates from a single cell type: the hematopoietic stem cell (HSC), found in bone marrow. This process of generating all blood cells is called hematopoiesis, and it produces billions of new cells every day.' },
        { type: 'steps', heading: 'The Hematopoietic Hierarchy',
          steps: [
            { label: 'Hematopoietic Stem Cell (HSC)', detail: 'Self-renewing multipotent stem cell in the bone marrow. Gives rise to all blood and immune cell types. A single HSC can reconstitute the entire immune system.' },
            { label: 'Common Myeloid Progenitor (CMP)', detail: 'Gives rise to the "innate" arm: red blood cells, platelets, granulocytes (neutrophils, eosinophils, basophils, mast cells), and monocytes/macrophages.' },
            { label: 'Common Lymphoid Progenitor (CLP)', detail: 'Gives rise to the "adaptive" arm: T cells (mature in thymus), B cells (mature in bone marrow), and NK cells.' },
            { label: 'Maturation & Tissue Residence', detail: 'Mature cells circulate in blood or take up residence in tissues (e.g., Kupffer cells in liver, microglia in brain). Dendritic cells can arise from both myeloid and lymphoid progenitors.' },
          ],
        },
        { type: 'table', heading: 'Myeloid vs Lymphoid Lineages',
          leftHeader: 'Myeloid', rightHeader: 'Lymphoid',
          rows: [
            { left: 'Neutrophils', right: 'T cells (CD4⁺, CD8⁺, Treg)' },
            { left: 'Macrophages / Monocytes', right: 'B cells → Plasma cells' },
            { left: 'Dendritic cells', right: 'NK cells' },
            { left: 'Mast cells, Basophils, Eosinophils', right: 'Innate Lymphoid Cells (ILCs)' },
            { left: 'Red blood cells, Platelets', right: '—' },
          ],
        },
        { type: 'callout', label: 'Clinical relevance', color: 'amber',
          text: 'Bone marrow transplantation works because donated HSCs can repopulate an entire immune system. CAR-T therapy starts by taking T cells (lymphoid lineage) from the patient and engineering them before infusion back.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Hematopoiesis', definition: 'The process by which all blood and immune cells are produced from hematopoietic stem cells in the bone marrow.' },
            { term: 'Hematopoietic Stem Cell (HSC)', definition: 'A multipotent progenitor capable of self-renewal and differentiation into all blood cell lineages.' },
            { term: 'Common Myeloid Progenitor', definition: 'HSC-derived precursor giving rise to granulocytes, monocytes/macrophages, red blood cells, and platelets.' },
            { term: 'Common Lymphoid Progenitor', definition: 'HSC-derived precursor giving rise to T cells, B cells, and NK cells.' },
          ],
        },
      ],
      takeaways: [
        'All blood and immune cells arise from hematopoietic stem cells in the bone marrow.',
        'Two main branches: myeloid (innate cells + red blood cells) and lymphoid (T cells, B cells, NK cells).',
        'Bone marrow transplants work by replacing a patient\'s HSCs with a donor\'s healthy stem cells.',
      ],
      quiz: [
        { id: 'q1', question: 'What is the common ancestor of all blood and immune cells?', options: ['Neutrophil', 'Monocyte', 'Hematopoietic stem cell', 'Dendritic cell'], correctIndex: 2, explanation: 'The HSC is the multipotent stem cell in bone marrow from which all blood cell lineages — myeloid and lymphoid — derive.' },
        { id: 'q2', question: 'T cells and B cells arise from which progenitor?', options: ['Common myeloid progenitor', 'Common lymphoid progenitor', 'Megakaryocyte', 'Monocyte'], correctIndex: 1, explanation: 'T cells, B cells, and NK cells all derive from the Common Lymphoid Progenitor (CLP).' },
      ],
    },
    {
      id: 'mod1-l4', title: 'The Lymphatic System', emoji: '🗺️', duration: '6 min',
      sections: [
        { type: 'text', heading: 'More Than Just Drainage Pipes',
          body: 'The lymphatic system is a network of vessels, nodes, and organs that drains interstitial fluid from tissues and returns it to the bloodstream as lymph. But crucially for immunology, it is also the superhighway that brings antigens and immune cells together — making it the site where most adaptive immune responses are initiated.' },
        { type: 'table', heading: 'Primary vs Secondary Lymphoid Organs',
          leftHeader: 'Primary (where cells mature)', rightHeader: 'Secondary (where responses are launched)',
          rows: [
            { left: 'Bone marrow: B cell maturation, HSC niche', right: 'Lymph nodes: filter lymph; T & B cell meetings' },
            { left: 'Thymus: T cell maturation & selection', right: 'Spleen: filters blood; responds to blood-borne antigens' },
            { left: '', right: 'Tonsils/Peyer\'s patches: mucosal immunity' },
          ],
        },
        { type: 'text', heading: 'Lymph Node Architecture',
          body: 'Lymph nodes are bean-shaped organs scattered along lymphatic vessels. They are organised into zones: the cortex (B cell follicles with germinal centres), the paracortex (T cell zone where dendritic cells present antigens), and the medulla (macrophages and plasma cells). When an infection drains from a tissue into a lymph node, antigen-loaded dendritic cells activate T cells in the paracortex — launching the adaptive response.' },
        { type: 'callout', label: 'Swollen lymph nodes', color: 'blue',
          text: 'During an infection, lymph nodes near the affected tissue swell (lymphadenopathy) because immune cells are rapidly proliferating inside. This is why doctors feel for swollen nodes — it tells them where an infection is occurring.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Lymph', definition: 'Interstitial fluid that has entered lymphatic capillaries; contains immune cells, antigens, and cellular debris.' },
            { term: 'Lymph Node', definition: 'Secondary lymphoid organ where antigens from the periphery are presented to T and B cells to initiate adaptive immunity.' },
            { term: 'Spleen', definition: 'Large secondary lymphoid organ that filters blood and mounts responses to blood-borne antigens.' },
            { term: 'Thymus', definition: 'Primary lymphoid organ where T cell precursors mature and undergo positive and negative selection.' },
            { term: 'Germinal Centre', definition: 'A microstructure within B cell follicles in lymph nodes where B cells undergo affinity maturation and class switching.' },
          ],
        },
      ],
      takeaways: [
        'Lymph nodes are where dendritic cells present antigens to T and B cells — the epicentre of adaptive immune responses.',
        'Primary lymphoid organs (bone marrow, thymus) produce immune cells; secondary organs (lymph nodes, spleen) are where they act.',
        'Swollen lymph nodes signal active local immune responses — a useful clinical sign.',
      ],
      quiz: [
        { id: 'q1', question: 'Where do T cells mature and undergo selection?', options: ['Bone marrow', 'Spleen', 'Thymus', 'Lymph node'], correctIndex: 2, explanation: 'T cell precursors migrate from the bone marrow to the thymus where positive selection (must recognise MHC) and negative selection (must not react to self) occur.' },
      ],
    },
  ],
};

// ── Module 2: The Immune System ────────────────────────────────────────────────
const mod2: Module = {
  id: 'mod2', number: 2,
  title: 'The Immune System',
  subtitle: 'Innate defences, adaptive responses & immune memory',
  emoji: '🛡️', color: '#10B981',
  lessons: [
    {
      id: 'mod2-l1', title: 'Innate vs Adaptive Immunity', emoji: '⚔️', duration: '7 min',
      sections: [
        { type: 'text', heading: 'Two Arms of Defense',
          body: 'Your immune system has two distinct but interconnected arms. The innate immune system is fast (minutes to hours), non-specific, and uses pre-built pattern recognition to detect common microbial features. The adaptive immune system is slow (days to weeks for a first response), highly specific, and generates immunological memory for faster future responses.' },
        { type: 'table', heading: 'Innate vs Adaptive: Side by Side',
          leftHeader: 'Innate Immunity', rightHeader: 'Adaptive Immunity',
          rows: [
            { left: 'Minutes to hours response time', right: 'Days to weeks (first exposure)' },
            { left: 'Non-specific / broad recognition', right: 'Highly specific — one antigen per clone' },
            { left: 'No immunological memory', right: 'Creates memory cells for faster re-response' },
            { left: 'Pattern recognition (PRRs / PAMPs)', right: 'Antigen-specific receptors (TCR, BCR)' },
            { left: 'Neutrophils, macrophages, NK cells', right: 'T cells, B cells, plasma cells' },
            { left: 'Physical barriers, phagocytosis, complement', right: 'Antibodies, cytotoxic killing, help signals' },
          ],
        },
        { type: 'text', heading: 'Bridging the Gap: Dendritic Cells',
          body: 'Dendritic cells (DCs) are the crucial link between innate and adaptive immunity. They patrol tissues, engulf pathogens with their innate receptors, then migrate to lymph nodes and present processed antigen peptides on MHC molecules to T cells — kickstarting the adaptive response.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'PRR (Pattern Recognition Receptor)', definition: 'Innate immune receptors (e.g., Toll-like receptors) that detect conserved microbial structures called PAMPs.' },
            { term: 'PAMP', definition: 'Pathogen-Associated Molecular Pattern — conserved microbial molecules (LPS, flagellin, viral RNA) recognised by PRRs.' },
            { term: 'Antigen', definition: 'Any molecule (usually a protein fragment from a pathogen) that is specifically recognised by lymphocyte receptors (TCR or BCR).' },
            { term: 'Immunological Memory', definition: 'Long-lived memory T and B cells that remain after an infection and respond faster and more strongly upon re-exposure.' },
          ],
        },
      ],
      takeaways: [
        'Innate = fast, broad, no memory. Adaptive = slow initially, specific, generates lifelong memory.',
        'Dendritic cells bridge the two systems by carrying antigens from tissues to lymph nodes.',
        'Vaccines work by priming the adaptive immune system to create memory — without the disease.',
      ],
      quiz: [
        { id: 'q1', question: 'Which feature is unique to adaptive immunity?', options: ['Speed of response', 'Use of phagocytosis', 'Immunological memory', 'Pattern recognition receptors'], correctIndex: 2, explanation: 'Only the adaptive immune system generates memory cells that persist after infection and provide faster, stronger responses on re-exposure — the basis of vaccination.' },
        { id: 'q2', question: 'Which cell type bridges innate and adaptive immunity?', options: ['Neutrophil', 'NK cell', 'Dendritic cell', 'Mast cell'], correctIndex: 2, explanation: 'Dendritic cells sense pathogens with innate receptors, then migrate to lymph nodes and present antigen peptides on MHC molecules to naïve T cells, initiating the adaptive response.' },
      ],
    },
    {
      id: 'mod2-l2', title: 'The Innate Immune Cells', emoji: '🦠', duration: '8 min',
      sections: [
        { type: 'text', heading: 'The First Responders',
          body: 'When a pathogen breaches the body\'s barriers, innate immune cells are the first to act. They don\'t need prior exposure — they are pre-programmed to recognise and destroy common threats using pattern recognition, phagocytosis, and chemical weapons.' },
        { type: 'terms', heading: 'Innate Cell Types',
          terms: [
            { term: 'Neutrophils', definition: 'The most abundant circulating granulocyte (~60% of white blood cells). First to arrive at infection sites; kill bacteria by phagocytosis, degranulation (releasing antimicrobial enzymes), and NETs (neutrophil extracellular traps — sticky webs of DNA that catch bacteria). Short-lived (~24–48 hours).' },
            { term: 'Macrophages', definition: 'Tissue-resident phagocytes derived from monocytes. Engulf and destroy pathogens, present antigens to T cells, secrete cytokines (TNF-α, IL-1β, IL-6) to coordinate inflammation. Long-lived and self-renewing. Can polarise to pro-inflammatory (M1) or anti-inflammatory (M2) states.' },
            { term: 'Dendritic Cells (DCs)', definition: 'Professional antigen-presenting cells that patrol tissues, capture antigens, mature, and migrate to lymph nodes to present to T cells. The key bridge between innate and adaptive immunity.' },
            { term: 'Natural Killer (NK) Cells', definition: 'Innate lymphocytes that kill virus-infected and tumour cells without prior sensitisation. Detect "missing self" — cells that have downregulated MHC I (a tumour/virus evasion strategy). Kill via perforin/granzyme and ADCC.' },
            { term: 'Mast Cells', definition: 'Tissue-resident cells that release histamine and other mediators in response to IgE-allergen cross-linking (allergies) and some pathogens. Important in allergy and antiparasitic responses.' },
            { term: 'Complement System', definition: 'A cascade of ~30 serum proteins activated by pathogens (classical, lectin, or alternative pathways). Leads to opsonisation (C3b coating), inflammation (C3a, C5a), and direct lysis via the membrane attack complex (MAC).' },
          ],
        },
        { type: 'callout', label: 'The Inflammatory Response', color: 'red',
          text: 'When macrophages detect a pathogen, they release IL-1β, IL-6, and TNF-α. These cytokines cause vasodilation (redness), increased vascular permeability (swelling), fever, and the recruitment of more neutrophils and monocytes. This is inflammation — painful, but essential.' },
      ],
      takeaways: [
        'Neutrophils are the immediate first responders; macrophages are the durable tissue sentinels.',
        'NK cells kill cells lacking MHC I — a clever way to detect virally infected and cancer cells.',
        'Complement opsonises pathogens and punches holes in bacterial membranes via the MAC.',
      ],
      quiz: [
        { id: 'q1', question: 'How do NK cells detect tumour cells?', options: ['Via TCR recognition of tumour antigen', 'Via missing MHC I expression ("missing self")', 'Via IgE-mediated degranulation', 'Via complement activation'], correctIndex: 1, explanation: 'NK cells check for MHC I expression. Healthy cells display MHC I, which inhibits NK cells. Virally infected and tumour cells often downregulate MHC I — NK cells detect this "missing self" and kill.' },
      ],
    },
    {
      id: 'mod2-l3', title: 'Cytokines, MHC & Antigen Presentation', emoji: '📡', duration: '9 min',
      sections: [
        { type: 'text', heading: 'The Immune System\'s Communication Network',
          body: 'Cytokines are small secreted proteins that allow immune cells to "talk" to each other. They can activate, inhibit, recruit, or direct the differentiation of target cells. Meanwhile, MHC molecules are the display system that lets T cells inspect what\'s happening inside cells.' },
        { type: 'terms', heading: 'Key Cytokines',
          terms: [
            { term: 'IL-2', definition: 'Produced by activated T cells; the key survival and proliferation signal for T cells. Anti-IL-2R antibodies (like basiliximab) block T cell proliferation in transplant rejection.' },
            { term: 'IL-4 & IL-13', definition: 'Produced by Th2 cells and ILC2s; drive antibody class-switching to IgE and IgG1, and promote allergic responses and anti-parasitic immunity.' },
            { term: 'IL-12', definition: 'Produced by dendritic cells and macrophages in response to bacterial infection; drives T cell differentiation toward Th1 and NK cell activation. Critical for anti-intracellular pathogen responses.' },
            { term: 'IFN-γ (Interferon-gamma)', definition: 'Produced by Th1 cells and NK cells; activates macrophages to kill intracellular pathogens more effectively. The master cytokine of cell-mediated immunity.' },
            { term: 'TNF-α', definition: 'Pro-inflammatory cytokine from macrophages; drives fever, inflammation, and neutrophil recruitment. At very high levels (sepsis) causes dangerous vasodilation and organ failure.' },
            { term: 'IL-10', definition: 'Anti-inflammatory cytokine from Tregs and macrophages; dampens immune responses to prevent excessive damage.' },
          ],
        },
        { type: 'table', heading: 'MHC Class I vs Class II',
          leftHeader: 'MHC Class I', rightHeader: 'MHC Class II',
          rows: [
            { left: 'On all nucleated cells', right: 'Only on professional APCs (DCs, macrophages, B cells)' },
            { left: 'Presents intracellular peptides (viral, self, tumour)', right: 'Presents extracellular antigen peptides (bacterial, engulfed)' },
            { left: 'Recognised by CD8⁺ T cells → killing', right: 'Recognised by CD4⁺ T cells → help signals' },
            { left: 'β2-microglobulin non-covalently associated', right: 'Two non-covalent α and β chains' },
          ],
        },
      ],
      takeaways: [
        'Cytokines are the immune system\'s messaging system — they determine which type of response is mounted.',
        'MHC I: presents what\'s inside a cell (to CD8⁺ killers). MHC II: presents what was engulfed (to CD4⁺ helpers).',
        'IL-12 drives Th1 (cellular immunity); IL-4 drives Th2 (antibody/allergy). The balance determines the type of immune response.',
      ],
      quiz: [
        { id: 'q1', question: 'Which cytokine is primarily responsible for driving Th1 differentiation and macrophage activation?', options: ['IL-4', 'IL-10', 'IFN-γ', 'IL-12'], correctIndex: 3, explanation: 'IL-12 (from DCs and macrophages) drives naive T cells to differentiate into Th1 cells, which then produce IFN-γ to activate macrophages — a positive feedback loop for clearing intracellular pathogens.' },
      ],
    },
    {
      id: 'mod2-l4', title: 'T & B Cell Activation & Memory', emoji: '🎯', duration: '10 min',
      sections: [
        { type: 'text', heading: 'The Adaptive Response',
          body: 'The adaptive immune system can produce an almost unlimited variety of specific receptors — T cell receptors (TCR) and B cell receptors (BCR) — through a process called VDJ recombination. When a cell with the right receptor encounters its antigen, it is selected to proliferate (clonal selection) and differentiate into effector cells.' },
        { type: 'steps', heading: 'T Cell Activation: Three Signals',
          steps: [
            { label: 'Signal 1: Antigen Recognition', detail: 'The TCR binds to a peptide-MHC complex on a dendritic cell. CD4 or CD8 co-receptors stabilise the interaction. This is antigen-specific.' },
            { label: 'Signal 2: Co-stimulation', detail: 'CD28 on the T cell binds B7 (CD80/CD86) on the APC. Without this signal, the T cell becomes anergic (unresponsive) — not activated. This "two-key" system prevents accidental activation.' },
            { label: 'Signal 3: Cytokine Context', detail: 'Cytokines in the environment determine T cell fate: IL-12 → Th1 (cellular immunity); IL-4 → Th2 (antibody); TGF-β + IL-6 → Th17 (mucosal); TGF-β alone → Treg (suppression).' },
          ],
        },
        { type: 'steps', heading: 'B Cell Activation & Antibody Production',
          steps: [
            { label: 'Antigen Binding', detail: 'The BCR (membrane-bound antibody) binds its specific antigen. The B cell internalises and presents the antigen on MHC II.' },
            { label: 'T Cell Help', detail: 'A Tfh (follicular helper T) cell recognises the same antigen on the B cell\'s MHC II and provides co-stimulation (CD40L–CD40) and cytokines (IL-4, IL-21).' },
            { label: 'Germinal Centre Reaction', detail: 'Activated B cells enter germinal centres in lymph nodes. Somatic hypermutation introduces random mutations; B cells with higher-affinity receptors are selected to survive (affinity maturation).' },
            { label: 'Plasma Cells & Memory', detail: 'Selected B cells differentiate into plasma cells (antibody factories) or memory B cells. Class-switch recombination changes the antibody isotype (IgM → IgG/IgA/IgE) guided by cytokines.' },
          ],
        },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Clonal Selection', definition: 'The process by which antigen binding to a lymphocyte\'s receptor triggers that specific clone to proliferate and differentiate.' },
            { term: 'Somatic Hypermutation', definition: 'Rapid mutation of antibody variable regions in germinal centres, enabling affinity maturation.' },
            { term: 'Affinity Maturation', definition: 'The process of selecting B cells with progressively higher-affinity antibodies through iterative cycles of mutation and selection in germinal centres.' },
            { term: 'Class-Switch Recombination', definition: 'B cell mechanism for switching antibody isotype (e.g., IgM to IgG) while maintaining the same antigen specificity.' },
            { term: 'Memory Cell', definition: 'Long-lived lymphocytes generated after infection or vaccination that respond faster and more strongly upon re-exposure.' },
          ],
        },
      ],
      takeaways: [
        'T cells require three signals to activate: antigen, co-stimulation, and cytokine context — all must align.',
        'Germinal centres are where B cells compete to produce the best (highest-affinity) antibodies.',
        'Memory B and T cells are the molecular basis of vaccination — they give you faster, stronger responses to repeat exposures.',
      ],
      quiz: [
        { id: 'q1', question: 'What happens to a T cell that receives signal 1 (antigen) but NOT signal 2 (co-stimulation)?', options: ['It becomes a memory cell', 'It differentiates into Th1', 'It becomes anergic — unresponsive', 'It undergoes apoptosis immediately'], correctIndex: 2, explanation: 'Without CD28–B7 co-stimulation (signal 2), antigen recognition alone leads to anergy — the T cell becomes functionally unresponsive. This is a peripheral tolerance mechanism to prevent autoimmunity.' },
        { id: 'q2', question: 'Somatic hypermutation occurs in which structure?', options: ['Thymus', 'Bone marrow', 'Germinal centres in lymph nodes', 'Spleen red pulp'], correctIndex: 2, explanation: 'Germinal centres are specialised microstructures in lymph node follicles where B cells undergo somatic hypermutation and are selected for higher affinity antibodies — a process called affinity maturation.' },
      ],
    },
  ],
};

// ── Module 3: When It Goes Wrong ───────────────────────────────────────────────
const mod3: Module = {
  id: 'mod3', number: 3,
  title: 'When It Goes Wrong',
  subtitle: 'Autoimmunity, allergies, HIV & cancer immune evasion',
  emoji: '⚠️', color: '#EF4444',
  lessons: [
    {
      id: 'mod3-l1', title: 'Autoimmunity & Self-Tolerance', emoji: '🔄', duration: '8 min',
      sections: [
        { type: 'text', heading: 'When the Immune System Turns on Itself',
          body: 'Self-tolerance is the immune system\'s ability to distinguish "self" from "non-self" and not attack the body\'s own healthy cells. When tolerance breaks down, the immune system mounts a destructive attack against self-antigens — this is autoimmunity. It affects ~5% of the population.' },
        { type: 'steps', heading: 'How Tolerance Is Established (and Broken)',
          steps: [
            { label: 'Central Tolerance', detail: 'In the thymus, T cells that react too strongly to self-antigens are deleted (clonal deletion). Similarly, self-reactive B cells are eliminated in the bone marrow. But this isn\'t perfect — some escape.' },
            { label: 'Peripheral Tolerance', detail: 'Self-reactive cells that escape central deletion are kept in check by: Regulatory T cells (Tregs) that suppress them; anergy (no co-stimulation); and activation-induced cell death.' },
            { label: 'Tolerance Failure', detail: 'Triggers include molecular mimicry (pathogen antigens resembling self-antigens), bystander activation (non-specific immune activation during infection), and genetic susceptibility (certain HLA alleles increase risk dramatically).' },
          ],
        },
        { type: 'terms', heading: 'Common Autoimmune Diseases',
          terms: [
            { term: 'Rheumatoid Arthritis (RA)', definition: 'Autoimmune attack on synovial joint lining by T cells and autoantibodies (anti-CCP, rheumatoid factor); progressive joint destruction. Treated with methotrexate and anti-TNF biologics.' },
            { term: 'Systemic Lupus Erythematosus (SLE)', definition: 'Anti-nuclear antibodies (especially anti-dsDNA) form immune complexes deposited in kidneys, skin, and joints. Causes multi-organ damage. More common in women.' },
            { term: 'Type 1 Diabetes', definition: 'CD8⁺ T cells destroy insulin-producing pancreatic β-cells; autoantibodies against insulin and glutamic acid decarboxylase (GAD) are diagnostic markers.' },
            { term: 'Multiple Sclerosis (MS)', definition: 'Th1 and Th17 cells infiltrate the CNS and attack the myelin sheath around neurons, causing progressive neurological damage.' },
          ],
        },
      ],
      takeaways: [
        'Central tolerance (thymus/bone marrow) deletes self-reactive lymphocytes; peripheral tolerance catches escapees.',
        'Molecular mimicry: pathogen antigens can look like self-antigens, triggering autoimmunity (e.g., rheumatic fever after strep).',
        'Most autoimmune diseases are treated by broadly suppressing inflammation — the goal is targeted tolerance restoration.',
      ],
      quiz: [
        { id: 'q1', question: 'What is molecular mimicry in the context of autoimmunity?', options: ['A pathogen copying host cell DNA', 'A pathogen antigen resembling a self-antigen, leading to cross-reactive immune attack', 'T cells imitating B cells', 'Complement mimicking antibodies'], correctIndex: 1, explanation: 'Molecular mimicry: immune responses raised against a pathogen antigen that resembles a self-antigen can cross-react with self-tissues. Classic example: Streptococcus M protein mimics cardiac myosin → rheumatic fever.' },
      ],
    },
    {
      id: 'mod3-l2', title: 'Allergies & Hypersensitivity', emoji: '🌸', duration: '7 min',
      sections: [
        { type: 'text', heading: 'When the Immune System Overreacts',
          body: 'Allergies are immune responses to harmless substances (allergens) that are inappropriate and damaging. They are classified into four hypersensitivity types (Coombs & Gell); the most common is Type I — IgE-mediated, which includes hay fever, food allergies, and anaphylaxis.' },
        { type: 'steps', heading: 'Type I Hypersensitivity Mechanism',
          steps: [
            { label: 'Sensitisation (first exposure)', detail: 'Dendritic cells present allergen peptides in a Th2 context (IL-4 present). Th2 cells help B cells class-switch to produce IgE specific to the allergen.' },
            { label: 'IgE Binding to Mast Cells', detail: 'IgE antibodies bind to FcεRI receptors on mast cells and basophils throughout the body. The mast cells are now "loaded" and waiting.' },
            { label: 'Re-exposure & Cross-linking', detail: 'On second exposure, allergen cross-links two IgE molecules on the mast cell surface. This triggers mast cell degranulation within seconds.' },
            { label: 'Early Phase (0–30 min)', detail: 'Histamine, prostaglandins, and leukotrienes are released. Cause: vasodilation, itch, mucus, bronchospasm (asthma), and oedema.' },
            { label: 'Late Phase (6–24 hours)', detail: 'Newly synthesised cytokines (IL-4, IL-5, IL-13) recruit eosinophils. Causes persistent inflammation, airway remodelling in chronic asthma.' },
          ],
        },
        { type: 'callout', label: 'Anaphylaxis', color: 'red',
          text: 'Severe systemic anaphylaxis occurs when massive mast cell/basophil degranulation causes vasodilation throughout the body — blood pressure drops, airways narrow, and the reaction can be fatal within minutes. Treatment: intramuscular epinephrine (adrenaline), which reverses vasodilation and bronchospasm.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Allergen', definition: 'An antigen that triggers an inappropriate IgE-mediated immune response in atopic individuals.' },
            { term: 'Atopy', definition: 'The genetic tendency to develop allergic diseases (hay fever, eczema, asthma); associated with high IgE levels and Th2-biased responses.' },
            { term: 'Histamine', definition: 'A preformed mediator stored in mast cell granules; causes vasodilation, increased vascular permeability, itching, and bronchoconstriction when released.' },
            { term: 'Anaphylaxis', definition: 'A severe, potentially fatal systemic allergic reaction involving massive mast cell degranulation. Treated with epinephrine.' },
          ],
        },
      ],
      takeaways: [
        'Allergies are IgE-mediated; first exposure sensitises, second exposure triggers rapid mast cell degranulation.',
        'Histamine causes the immediate symptoms (itch, sneezing, hives); late-phase eosinophils cause chronic inflammation.',
        'Anaphylaxis requires immediate epinephrine — it reverses the vasodilation and bronchoconstriction within minutes.',
      ],
      quiz: [
        { id: 'q1', question: 'What triggers mast cell degranulation in a Type I allergic reaction?', options: ['Complement activation', 'TCR recognition of allergen-MHC', 'Cross-linking of IgE on the mast cell surface by allergen', 'NK cell-mediated contact'], correctIndex: 2, explanation: 'Pre-formed IgE (from prior sensitisation) is bound to FcεRI on mast cells. When allergen cross-links two IgE molecules simultaneously, the FcεRI signals cause immediate degranulation and histamine release.' },
      ],
    },
    {
      id: 'mod3-l3', title: 'HIV & AIDS', emoji: '🔴', duration: '9 min',
      sections: [
        { type: 'text', heading: 'A Virus That Targets the Immune System\'s Hub',
          body: 'Human Immunodeficiency Virus (HIV) is a retrovirus that specifically targets CD4⁺ T cells — the very cells that coordinate the entire adaptive immune response. Over years, HIV gradually depletes CD4⁺ T cells until the immune system can no longer defend against opportunistic infections, defining AIDS.' },
        { type: 'steps', heading: 'HIV Life Cycle',
          steps: [
            { label: '1. Attachment', detail: 'HIV surface glycoprotein gp120 binds CD4 on the T cell (or macrophage). A co-receptor (CCR5 or CXCR4) is also required for fusion.' },
            { label: '2. Fusion & Entry', detail: 'gp41 mediates fusion of the viral envelope with the host cell membrane. The viral core — RNA genome + enzymes — enters the cytoplasm.' },
            { label: '3. Reverse Transcription', detail: 'HIV\'s reverse transcriptase converts the single-stranded RNA genome into double-stranded DNA. This is the step targeted by nucleoside reverse transcriptase inhibitors (NRTIs).' },
            { label: '4. Integration', detail: 'Viral integrase inserts the HIV DNA (now called a provirus) into the host cell\'s chromosome — where it can lie dormant for years. This is why HIV cannot be cured by current drugs.' },
            { label: '5. Transcription & Translation', detail: 'When the host T cell is activated, it inadvertently activates the provirus. HIV proteins are made using the host\'s ribosomes.' },
            { label: '6. Assembly & Budding', detail: 'New viral particles assemble at the cell membrane, bud off, and mature. HIV protease cleaves viral precursor proteins to produce infectious virions.' },
          ],
        },
        { type: 'callout', label: 'AIDS Definition', color: 'red',
          text: 'AIDS is diagnosed when: CD4⁺ T cell count falls below 200 cells/µL (normal ~500–1200) OR an AIDS-defining illness occurs (e.g., Pneumocystis pneumonia, Kaposi\'s sarcoma, CMV retinitis). The depletion of CD4⁺ T cells paralyses both cellular and humoral immunity.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Retrovirus', definition: 'A virus with an RNA genome that uses reverse transcriptase to convert RNA to DNA before integrating into the host genome.' },
            { term: 'Reverse Transcriptase', definition: 'HIV enzyme that converts viral RNA to DNA; inhibited by NRTIs (e.g., tenofovir) and NNRTIs — key antiretroviral drugs.' },
            { term: 'Provirus', definition: 'HIV DNA integrated into the host chromosome; can remain latent for years, making HIV incurable with current antiretrovirals.' },
            { term: 'ART (Antiretroviral Therapy)', definition: 'Combination of drugs targeting multiple HIV enzymes (reverse transcriptase, protease, integrase, entry). Suppresses viral load to undetectable levels — U=U (Undetectable = Untransmittable).' },
          ],
        },
      ],
      takeaways: [
        'HIV uses gp120 to bind CD4 and a co-receptor to enter T cells, then integrates as a provirus.',
        'Reverse transcriptase (RNA → DNA) is HIV\'s Achilles heel — most antiretrovirals target this or related steps.',
        'U=U: with effective ART, viral load becomes undetectable and the virus cannot be sexually transmitted.',
      ],
      quiz: [
        { id: 'q1', question: 'Why does HIV cause AIDS even though it\'s a viral infection?', options: ['HIV directly destroys red blood cells', 'HIV progressively depletes CD4⁺ T cells, crippling the immune system\'s ability to fight all infections', 'HIV produces a toxin that kills all white blood cells', 'HIV causes bone marrow failure'], correctIndex: 1, explanation: 'CD4⁺ T cells orchestrate both cellular and humoral immune responses. As HIV depletes them over years, the immune system loses its commander — leaving the body vulnerable to ordinarily harmless opportunistic infections.' },
      ],
    },
    {
      id: 'mod3-l4', title: 'Cancer & Immune Evasion', emoji: '🦀', duration: '8 min',
      sections: [
        { type: 'text', heading: 'The Immune System Can — and Should — Fight Cancer',
          body: 'Your immune system constantly surveys for abnormal cells and destroys them — a process called immunosurveillance. But cancers that successfully grow have evolved strategies to escape this surveillance. Understanding these escape mechanisms is the foundation for modern immunotherapy.' },
        { type: 'steps', heading: 'The Three Es of Cancer Immunoediting',
          steps: [
            { label: 'Elimination', detail: 'The immune system (CD8⁺ T cells, NK cells, macrophages) detects and destroys early cancer cells. Most potential cancers are eliminated here — we never know about them.' },
            { label: 'Equilibrium', detail: 'A stalemate: the immune system controls but cannot eliminate the tumour. Tumour cells are under immune pressure and evolve; resistant variants emerge over months to years.' },
            { label: 'Escape', detail: 'Immune-resistant tumour clones break free. The tumour grows clinically — this is the cancer we diagnose and treat.' },
          ],
        },
        { type: 'terms', heading: 'Tumour Immune Evasion Mechanisms',
          terms: [
            { term: 'PD-L1 Upregulation', definition: 'Tumours express PD-L1 on their surface. PD-L1 binds PD-1 on T cells, sending an inhibitory "turn off" signal — effectively telling T cells to stop attacking. Blocked by checkpoint inhibitors.' },
            { term: 'MHC I Downregulation', definition: 'Tumour cells reduce MHC I expression so CD8⁺ T cells cannot "see" the tumour antigen. NK cells compensate by detecting "missing self".' },
            { term: 'Immunosuppressive TME', definition: 'The tumour microenvironment (TME) is enriched in Tregs, MDSCs (myeloid-derived suppressor cells), and anti-inflammatory cytokines (TGF-β, IL-10) that paralyse effector T cells.' },
            { term: 'T Cell Exhaustion', definition: 'Chronic antigen stimulation in the TME leads to a dysfunctional T cell state with upregulated inhibitory receptors (PD-1, Tim-3, Lag-3) and reduced cytokine production.' },
          ],
        },
      ],
      takeaways: [
        'The immune system normally eliminates cancer; only cells that evade immunity grow into clinical tumours.',
        'PD-L1 on tumour cells = the "don\'t kill me" signal; PD-1 on T cells receives it. Checkpoint inhibitors block this interaction.',
        'T cell exhaustion is the enemy of anti-tumour immunity — reversal is the goal of immunotherapy.',
      ],
      quiz: [
        { id: 'q1', question: 'How does PD-L1 on tumour cells help them evade immunity?', options: ['It activates the complement cascade', 'It binds PD-1 on T cells, sending an inhibitory signal that suppresses anti-tumour T cell activity', 'It increases MHC I expression to hide tumour antigens', 'It stimulates Treg proliferation via IL-2'], correctIndex: 1, explanation: 'PD-L1 (programmed death-ligand 1) on tumour cells binds PD-1 on T cells, triggering an inhibitory signal that reduces T cell cytokine production and proliferation — effectively exhausting the anti-tumour response.' },
      ],
    },
  ],
};

// ── Module 4: Treatments ──────────────────────────────────────────────────────
const mod4: Module = {
  id: 'mod4', number: 4,
  title: 'Treatments',
  subtitle: 'mRNA vaccines, CAR-T therapy & checkpoint inhibitors',
  emoji: '💉', color: '#8B5CF6',
  lessons: [
    {
      id: 'mod4-l1', title: 'mRNA Vaccines', emoji: '💊', duration: '8 min',
      sections: [
        { type: 'text', heading: 'A New Vaccine Technology',
          body: 'Traditional vaccines use weakened or killed pathogens, or pathogen proteins, to stimulate immunity. mRNA vaccines deliver instructions — a piece of mRNA encoding a pathogen antigen — that your own cells read and use to make the antigen temporarily. This triggers immunity without any live virus and without touching your DNA.' },
        { type: 'steps', heading: 'How mRNA Vaccines Work',
          steps: [
            { label: '1. mRNA Design', detail: 'Scientists identify an immunogenic antigen (e.g., SARS-CoV-2 spike protein). They synthesise mRNA encoding this protein, with chemical modifications (pseudouridine) to prevent the innate immune system from attacking it before it\'s translated — Katalin Karikó\'s Nobel-winning insight.' },
            { label: '2. Lipid Nanoparticle Delivery', detail: 'Bare mRNA is rapidly degraded in the body. It is encapsulated in lipid nanoparticles (LNPs) — tiny fat bubbles that protect the mRNA and help it enter cells by fusing with the cell membrane.' },
            { label: '3. Translation by Host Ribosomes', detail: 'Inside the cell (usually muscle cells and dendritic cells at the injection site), ribosomes translate the mRNA into the spike protein antigen. The mRNA is then degraded within days — it does not persist.' },
            { label: '4. Antigen Presentation', detail: 'Dendritic cells at the injection site take up antigen, present it on MHC I and II, and migrate to lymph nodes. There they activate both CD8⁺ and CD4⁺ T cells.' },
            { label: '5. Adaptive Immune Response', detail: 'CD4⁺ T cells help B cells produce anti-spike antibodies. CD8⁺ T cells learn to kill cells displaying the spike protein. Memory T and B cells form for long-term protection.' },
          ],
        },
        { type: 'callout', label: 'Does the mRNA change your DNA?', color: 'green',
          text: 'No. mRNA vaccine mRNA never enters the nucleus (where DNA is stored) and has no mechanism to integrate into DNA. It stays in the cytoplasm, is translated by ribosomes, and is degraded within a few days. The Central Dogma flows DNA → RNA → Protein, not the reverse.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Lipid Nanoparticle (LNP)', definition: 'The delivery vehicle for mRNA vaccines — tiny lipid vesicles that protect mRNA from degradation and facilitate cellular uptake.' },
            { term: 'Pseudouridine', definition: 'A modified nucleoside used in vaccine mRNA (replacing uridine) that prevents innate immune recognition and improves stability — Karikó & Weissman\'s key invention.' },
            { term: 'Adjuvant', definition: 'A substance that enhances vaccine immunogenicity. In mRNA vaccines, the LNPs themselves act as adjuvants by activating innate immune cells.' },
          ],
        },
      ],
      takeaways: [
        'mRNA vaccines deliver mRNA instructions that ribosomes translate into antigen — no live virus, no DNA alteration.',
        'Lipid nanoparticles protect the fragile mRNA and help it enter cells; they also act as built-in adjuvants.',
        'The mRNA degrades within days; only immune memory persists.',
      ],
      quiz: [
        { id: 'q1', question: 'Why can\'t mRNA vaccines alter your DNA?', options: ['The mRNA is too small to enter the nucleus', 'mRNA stays in the cytoplasm and is degraded within days — it has no mechanism to integrate into chromosomal DNA', 'Vaccines are injected into muscle, not into the bloodstream', 'RNA is chemically identical to DNA so the immune system ignores it'], correctIndex: 1, explanation: 'mRNA cannot be reverse-transcribed into DNA (no reverse transcriptase in most human cells) and cannot enter the nucleus. It is degraded by cellular RNases within a few days after translation.' },
      ],
    },
    {
      id: 'mod4-l2', title: 'CAR-T Cell Therapy', emoji: '⚗️', duration: '9 min',
      sections: [
        { type: 'text', heading: 'Engineering T Cells to Kill Cancer',
          body: 'CAR-T cell therapy is a form of adoptive cell therapy where a patient\'s own T cells are genetically engineered to express a Chimeric Antigen Receptor (CAR) — an artificial receptor that targets a cancer cell antigen. Once infused back, CAR-T cells can seek and destroy cancer cells with extraordinary precision.' },
        { type: 'steps', heading: 'The CAR-T Manufacturing Process',
          steps: [
            { label: '1. Leukapheresis', detail: 'A patient\'s blood is processed through a machine that selects and collects T cells while returning the rest of the blood.' },
            { label: '2. Viral Transduction', detail: 'A modified retrovirus (or lentivirus) carries the CAR gene into the T cells\' genome. The CAR is a fusion protein: an antibody-derived antigen-binding domain (scFv) fused to T cell signaling domains (CD3ζ) and co-stimulatory domains (CD28 or 4-1BB).' },
            { label: '3. Expansion', detail: 'Modified T cells are expanded in culture over 1–2 weeks to produce billions of CAR-T cells.' },
            { label: '4. Lymphodepletion', detail: 'The patient receives chemotherapy to deplete existing T cells. This creates "space" in the immune system for the CAR-T cells to expand.' },
            { label: '5. Infusion & Action', detail: 'CAR-T cells are infused into the patient. They home to tumour sites and kill cancer cells that express the target antigen (e.g., CD19 on B cell leukaemias) — without requiring MHC presentation.' },
          ],
        },
        { type: 'callout', label: 'Cytokine Release Syndrome (CRS)', color: 'amber',
          text: 'As CAR-T cells activate and kill cancer cells, they release massive amounts of cytokines (especially IL-6). This can cause CRS — fever, hypotension, and organ damage. Treatment: IL-6 receptor blockade with tocilizumab. Severe CRS (grade 3–4) can be life-threatening.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'CAR (Chimeric Antigen Receptor)', definition: 'An engineered receptor combining an antibody-derived antigen-binding domain with T cell signaling domains, allowing T cells to recognise tumour antigens without MHC.' },
            { term: 'scFv', definition: 'Single-chain variable fragment — the antigen-binding portion of the CAR, derived from a monoclonal antibody.' },
            { term: 'CD19', definition: 'A surface marker expressed on B cells and most B cell leukaemias/lymphomas; the target of FDA-approved CAR-T therapies (e.g., tisagenlecleucel).' },
            { term: 'CRS', definition: 'Cytokine Release Syndrome — a potentially severe adverse effect of CAR-T therapy caused by massive cytokine release from activated T cells.' },
          ],
        },
      ],
      takeaways: [
        'CARs let T cells recognise tumour antigens without MHC — bypassing one key immune evasion mechanism.',
        'CAR-T therapy can achieve remissions in blood cancers that were previously untreatable.',
        'CRS and neurotoxicity are serious side effects that require intensive monitoring and management.',
      ],
      quiz: [
        { id: 'q1', question: 'Why is CAR-T therapy more versatile than normal T cell immunity for targeting cancer?', options: ['CARs respond faster than TCRs', 'CARs recognise tumour antigens directly without requiring MHC presentation — bypassing MHC I downregulation', 'CAR-T cells produce more antibodies', 'CAR-T cells live for only 24 hours'], correctIndex: 1, explanation: 'Normal TCR-mediated killing requires MHC I to display the tumour antigen — but many tumours downregulate MHC I. CARs use antibody-derived binding and bypass MHC entirely, so tumour MHC I loss doesn\'t protect the cancer.' },
      ],
    },
    {
      id: 'mod4-l3', title: 'Checkpoint Inhibitors', emoji: '🔓', duration: '7 min',
      sections: [
        { type: 'text', heading: 'Releasing the Brakes on Anti-Tumour Immunity',
          body: 'Immune checkpoints are natural "off switches" on T cells that prevent excessive immune activity and autoimmunity. Tumours exploit these checkpoints to silence anti-tumour T cells. Checkpoint inhibitors are monoclonal antibodies that block these off-switches — releasing the brakes and allowing T cells to attack cancer.' },
        { type: 'table', heading: 'Key Checkpoint Pathways',
          leftHeader: 'Checkpoint', rightHeader: 'Mechanism & Drugs',
          rows: [
            { left: 'PD-1/PD-L1 axis', right: 'PD-1 on T cells + PD-L1 on tumour → T cell exhaustion. Blocked by nivolumab/pembrolizumab (anti-PD-1) or atezolizumab (anti-PD-L1).' },
            { left: 'CTLA-4', right: 'Competes with CD28 for B7 binding; dampens T cell activation. Blocked by ipilimumab (anti-CTLA-4). Increases co-stimulation signal.' },
            { left: 'LAG-3', right: 'Inhibitory receptor on exhausted T cells; next-generation checkpoint target. Relatlimab (anti-LAG-3) + nivolumab approved 2022.' },
            { left: 'TIM-3', right: 'Marker of T cell exhaustion in tumour microenvironment. Under clinical investigation.' },
          ],
        },
        { type: 'callout', label: 'Nobel Prize 2018', color: 'purple',
          text: 'James Allison (CTLA-4) and Tasuku Honjo (PD-1) shared the 2018 Nobel Prize in Physiology or Medicine for discovering the checkpoint pathways that led to checkpoint inhibitor immunotherapy — one of the most significant advances in cancer treatment in decades.' },
        { type: 'terms', heading: 'Key Terms',
          terms: [
            { term: 'Immune Checkpoint', definition: 'A regulatory mechanism that limits T cell activity to prevent autoimmunity. Cancer exploits these to evade immunity.' },
            { term: 'PD-1 (Programmed Death-1)', definition: 'Inhibitory receptor on T cells. Blockade with nivolumab or pembrolizumab reinvigorates exhausted anti-tumour T cells.' },
            { term: 'CTLA-4', definition: 'Inhibitory receptor competing with co-stimulatory CD28. Blocked by ipilimumab — the first checkpoint inhibitor approved for melanoma (2011).' },
            { term: 'irAEs (Immune-related Adverse Events)', definition: 'Side effects of checkpoint inhibitors caused by increased self-reactivity — essentially mild autoimmunity. Can affect any organ. Managed with corticosteroids.' },
          ],
        },
      ],
      takeaways: [
        'Checkpoint inhibitors block tumour-induced T cell exhaustion — they reinvigorate existing anti-tumour T cells.',
        'PD-1/PD-L1 blockade works best in tumours with high mutational burden (many neoantigens).',
        'The cost of releasing immune brakes: irAEs (immune-related adverse events) resemble autoimmune diseases.',
      ],
      quiz: [
        { id: 'q1', question: 'Why did CTLA-4 and PD-1 discoveries win the 2018 Nobel Prize?', options: ['They explained the Central Dogma', 'They led to checkpoint inhibitor immunotherapy — a transformative cancer treatment that works by removing immune brakes', 'They discovered CAR-T cell therapy', 'They developed the first mRNA vaccine'], correctIndex: 1, explanation: 'Allison and Honjo discovered that blocking CTLA-4 and PD-1 could unleash T cells against cancer. This led to checkpoint inhibitor drugs that have produced durable responses in melanoma, lung cancer, and many others.' },
      ],
    },
  ],
};

// ── Module 5: Research Skills ─────────────────────────────────────────────────
const mod5: Module = {
  id: 'mod5', number: 5,
  title: 'Research Skills',
  subtitle: 'Reading papers, lab techniques & bioinformatics',
  emoji: '🔬', color: '#F59E0B',
  lessons: [
    {
      id: 'mod5-l1', title: 'How to Read a Scientific Paper', emoji: '📄', duration: '7 min',
      sections: [
        { type: 'text', heading: 'Don\'t Read Papers Like a Textbook',
          body: 'Scientific papers are not written to be read front-to-back on a first pass. They are written for experts. As a student, you need a strategic approach: extract the key claims, assess the evidence, and judge the conclusions — without getting lost in unfamiliar jargon.' },
        { type: 'steps', heading: 'The SPAR Method: Strategic Paper Reading',
          steps: [
            { label: '1. Scan the Abstract', detail: 'Read the abstract (150–300 words) to understand: What question did they ask? What did they find? Is this relevant to me? If no → stop here.' },
            { label: '2. Read the Introduction Last Paragraph & Conclusion', detail: 'The last paragraph of the intro states the specific question/hypothesis. The conclusion summarises what was learned. Together these frame the study.' },
            { label: '3. Study the Figures & Legends', detail: 'Figures are the heart of a paper. Read each figure legend carefully — it should tell you the experiment and what the authors conclude. Do the data actually support the conclusion?' },
            { label: '4. Interrogate the Methods (if needed)', detail: 'If a figure is central to the claim, check the methods section: how was the experiment done? Are there controls? What are the limitations?' },
            { label: '5. Read the Discussion', detail: 'The discussion interprets results and compares to existing literature. Look for: What do the authors claim? What do they admit they can\'t explain? What are the limitations they acknowledge?' },
          ],
        },
        { type: 'table', heading: 'Paper Anatomy Quick Reference',
          leftHeader: 'Section', rightHeader: 'What You Find Here',
          rows: [
            { left: 'Abstract', right: 'Summary of the whole paper: question, approach, key results, conclusion.' },
            { left: 'Introduction', right: 'Background, gap in knowledge, specific hypothesis or question.' },
            { left: 'Methods', right: 'How experiments were done; reproducibility details.' },
            { left: 'Results', right: 'Data and observations — without interpretation (ideally).' },
            { left: 'Discussion', right: 'Interpretation, comparison to prior work, limitations, future directions.' },
            { left: 'References', right: 'Papers that support claims made in the text.' },
          ],
        },
        { type: 'terms', heading: 'Critical Reading Vocabulary',
          terms: [
            { term: 'p-value', definition: 'Probability that results at least as extreme as observed would occur if there were no real effect. p < 0.05 is conventionally "significant" — but this is a threshold, not a truth-guarantee.' },
            { term: 'Confidence Interval', definition: 'A range of values likely to contain the true effect size. A 95% CI that doesn\'t cross zero indicates statistical significance.' },
            { term: 'Control Group', definition: 'A comparison group that receives no treatment (or vehicle only). Without a control, you cannot attribute any change to the experimental intervention.' },
            { term: 'Confounding Variable', definition: 'An unmeasured factor that correlates with both the independent variable and the outcome — can create spurious associations.' },
            { term: 'Peer Review', definition: 'Evaluation by independent expert scientists before publication. Not perfect, but the main quality filter in science.' },
          ],
        },
      ],
      takeaways: [
        'Read Abstract → Figures → Conclusion before committing to a full paper read.',
        'Figures are the core evidence — ask: do the data actually support what the authors claim?',
        'p < 0.05 is a convention, not proof — always ask about effect size, controls, and reproducibility.',
      ],
      quiz: [
        { id: 'q1', question: 'What is the most efficient first step when approaching a new scientific paper?', options: ['Read the methods section in full', 'Read the abstract to judge relevance', 'Email the authors', 'Read the results section and then the introduction'], correctIndex: 1, explanation: 'The abstract gives you the research question, approach, key findings, and conclusion in ~250 words. It\'s the most efficient way to decide whether a paper is worth your time to read fully.' },
      ],
    },
    {
      id: 'mod5-l2', title: 'Lab Techniques in Immunology', emoji: '🧪', duration: '9 min',
      sections: [
        { type: 'text', heading: 'How Immunologists Measure the Immune System',
          body: 'Immunology research relies on a toolkit of laboratory techniques for measuring cells, proteins, and gene expression. Understanding these techniques helps you read papers critically — you need to know what each assay can and cannot tell you.' },
        { type: 'terms', heading: 'Core Techniques',
          terms: [
            { term: 'Flow Cytometry (FACS)', definition: 'Cells are stained with fluorescent antibodies targeting specific surface or intracellular markers, then passed through a laser beam. A detector records fluorescence from each cell simultaneously. Can identify and count dozens of cell populations at once. FACS (Fluorescence-Activated Cell Sorting) also physically sorts live cells into tubes.' },
            { term: 'ELISA (Enzyme-Linked Immunosorbent Assay)', definition: 'A plate-based assay that uses antibodies to capture and detect specific proteins (e.g., cytokines in serum). A capture antibody binds the target → sample is added → detection antibody + enzyme substrate → colour change proportional to protein amount. Very sensitive and quantitative.' },
            { term: 'Western Blot', definition: 'Proteins are separated by size on an SDS-PAGE gel, transferred to a membrane, and detected with specific antibodies. Confirms protein identity (correct size) and allows semi-quantitative comparison between samples.' },
            { term: 'PCR (Polymerase Chain Reaction)', definition: 'Amplifies specific DNA sequences exponentially using a heat-stable polymerase. Used to detect pathogen DNA (diagnostic PCR), genotype samples, or confirm gene editing.' },
            { term: 'qRT-PCR (Quantitative Real-Time PCR)', definition: 'Converts mRNA to cDNA (reverse transcription) then amplifies with real-time fluorescence detection. The most accurate method to measure gene expression levels in a specific sample.' },
            { term: 'ELISPOT', definition: 'Detects cells secreting a specific cytokine or antibody by capturing their secretions on a plate and detecting as "spots". Used to count antigen-specific T cells after vaccination or infection.' },
            { term: 'Histology / Immunohistochemistry (IHC)', definition: 'Tissue sections are stained with antibodies to visualise where specific proteins are located in a tissue. Essential for seeing inflammation, tumour-infiltrating lymphocytes, and tissue pathology in context.' },
          ],
        },
        { type: 'callout', label: 'Choosing the Right Technique', color: 'blue',
          text: 'Which technique to use depends on what you\'re measuring: Cell numbers/phenotype → flow cytometry. Secreted protein levels → ELISA. Intracellular signaling protein → western blot. Gene expression → qRT-PCR. Tissue location → IHC.' },
      ],
      takeaways: [
        'Flow cytometry identifies cell types by surface markers and can sort live cells — the workhorse of immunophenotyping.',
        'ELISA quantifies proteins in solution; western blot identifies proteins by size in cell lysates.',
        'Match the technique to the question: each assay has specific strengths and blind spots.',
      ],
      quiz: [
        { id: 'q1', question: 'A researcher wants to count how many CD4⁺ T cells are in a blood sample and check which are also PD-1⁺. Which technique is best?', options: ['Western blot', 'ELISA', 'Flow cytometry', 'qRT-PCR'], correctIndex: 2, explanation: 'Flow cytometry allows simultaneous detection of multiple surface markers (CD4, PD-1) on individual cells. A researcher can gate on CD4⁺ cells and then see what fraction co-express PD-1 — impossible with bulk techniques like ELISA or western blot.' },
      ],
    },
    {
      id: 'mod5-l3', title: 'Computational Biology & RNA-seq', emoji: '💻', duration: '9 min',
      sections: [
        { type: 'text', heading: 'Big Data in Immunology',
          body: 'Modern immunology generates enormous datasets — RNA sequencing can measure the expression of all ~20,000 human genes simultaneously across thousands of samples or millions of individual cells. Making sense of this data requires bioinformatics: the application of computational methods to biological questions.' },
        { type: 'steps', heading: 'The RNA-seq Pipeline',
          steps: [
            { label: '1. RNA Extraction & Library Prep', detail: 'RNA is extracted from cells and converted to cDNA. Adaptors are added to each fragment — these identify which sample a read comes from and allow sequencing.' },
            { label: '2. Sequencing', detail: 'A next-generation sequencer (e.g., Illumina) reads millions of short fragments (reads) — 50–150 base pairs — from each cDNA library.' },
            { label: '3. Alignment', detail: 'Reads are mapped back to a reference genome (or transcriptome) using alignment tools (STAR, HISAT2). This determines which gene each read came from.' },
            { label: '4. Counting & Normalisation', detail: 'Reads mapped to each gene are counted. Counts are normalised for sequencing depth and gene length (e.g., TPM or DESeq2 normalised counts).' },
            { label: '5. Differential Expression Analysis', detail: 'Statistical tests (DESeq2, edgeR) identify genes significantly up- or down-regulated between conditions (e.g., activated vs resting T cells).' },
            { label: '6. Visualisation & Interpretation', detail: 'Results displayed as volcano plots (fold-change vs significance), heatmaps, and pathway enrichment analyses to understand biological meaning.' },
          ],
        },
        { type: 'table', heading: 'Bulk RNA-seq vs Single-Cell RNA-seq',
          leftHeader: 'Bulk RNA-seq', rightHeader: 'Single-Cell RNA-seq (scRNA-seq)',
          rows: [
            { left: 'Measures average expression across thousands of cells', right: 'Measures expression in each individual cell' },
            { left: 'Cannot identify cell types in a mixed sample', right: 'Identifies cell types by clustering their transcriptome profiles' },
            { left: 'High sensitivity for rare transcripts', right: 'Lower sensitivity per cell (dropout problem)' },
            { left: 'Cheaper and more established', right: 'Expensive but reveals cellular heterogeneity' },
            { left: 'Output: gene counts per sample', right: 'Output: UMAP plots, cell-type clusters, pseudotime trajectories' },
          ],
        },
        { type: 'terms', heading: 'Bioinformatics Vocabulary',
          terms: [
            { term: 'Differential Gene Expression (DGE)', definition: 'Statistically significant differences in RNA levels between experimental conditions. Genes are called "DEGs" (differentially expressed genes).' },
            { term: 'UMAP', definition: 'Uniform Manifold Approximation and Projection — a dimensionality reduction algorithm used to visualise high-dimensional scRNA-seq data as 2D scatter plots, where similar cells cluster together.' },
            { term: 'Volcano Plot', definition: 'A scatter plot with log2(fold-change) on x-axis and −log10(p-value) on y-axis. Significant DEGs appear as dots in the upper-left (down) or upper-right (up) corners.' },
            { term: 'Pathway Enrichment', definition: 'Analysis that identifies biological pathways (e.g., from KEGG or Gene Ontology) statistically over-represented in a list of DEGs.' },
            { term: 'Drop-seq / 10x Genomics', definition: 'High-throughput scRNA-seq platforms that encapsulate individual cells in droplets with barcoded beads, enabling profiling of tens of thousands of cells per run.' },
          ],
        },
      ],
      takeaways: [
        'RNA-seq measures gene expression genome-wide; scRNA-seq does this at single-cell resolution.',
        'The pipeline: extract RNA → sequence → align → count → differential expression → visualise.',
        'UMAP plots cluster cells by transcriptomic similarity — clusters often correspond to distinct cell types.',
      ],
      quiz: [
        { id: 'q1', question: 'What key advantage does single-cell RNA-seq have over bulk RNA-seq?', options: ['It measures protein levels rather than RNA', 'It reveals gene expression at the level of individual cells, uncovering cell-type heterogeneity hidden in bulk averages', 'It is cheaper and requires less computational power', 'It measures genomic DNA rather than mRNA'], correctIndex: 1, explanation: 'Bulk RNA-seq averages gene expression across all cells in a sample, masking the diversity within. scRNA-seq measures each cell individually, allowing identification of rare cell types, subpopulations, and transitional states.' },
      ],
    },
  ],
};

// ── Module 6: From Bench to Bedside — Biomedical Research ───────────────────────
const mod6: Module = {
  id: 'mod6', number: 6,
  title: 'Biomedical Research',
  subtitle: 'Turning immunology into discovery — methods and how students get started',
  emoji: '🔬', color: '#14B8A6',
  lessons: [
    {
      id: 'mod6-l1', title: 'From Lessons to the Lab', emoji: '🧪', duration: '8 min',
      sections: [
        { type: 'text', heading: 'Why translational science exists',
          body: 'Everything you have learned so far — T cells, antibodies, checkpoints, cytokines — started as a discovery in someone\'s lab. Translational research is the work of moving a finding from a test tube ("the bench") to a treatment that helps a patient ("the bedside"). It is slow, collaborative, and where immunology becomes medicine: checkpoint inhibitors, mRNA vaccines, and CAR-T all walked this path.' },
        { type: 'steps', heading: 'The translational pipeline',
          steps: [
            { label: 'Basic science', detail: 'Curiosity-driven work in cells and model organisms reveals how something works — e.g., the discovery that T cells carry an "off switch" (CTLA-4, PD-1).' },
            { label: 'Preclinical', detail: 'A hypothesis is tested in cell cultures and animal models for safety and efficacy. Most candidate ideas fail here — and that is a normal, useful result.' },
            { label: 'Translational ("T1")', detail: 'Promising biology is turned into a candidate drug, vaccine, or diagnostic and prepared for human study.' },
            { label: 'Clinical trials', detail: 'Phase I (safety, small), Phase II (does it work?), Phase III (large, vs. standard of care). Then regulators (e.g., the FDA) review the evidence.' },
            { label: 'Clinical practice & beyond', detail: 'Approved therapies enter clinics; post-marketing studies ("T4") track real-world safety and effectiveness across whole populations.' },
          ],
        },
        { type: 'callout', label: 'A real example', color: '#14B8A6',
          text: 'Jim Allison spent years studying CTLA-4 as basic biology. Blocking it freed T cells to attack tumors in mice (preclinical), which led to ipilimumab — the first checkpoint inhibitor approved for melanoma in 2011. Bench to bedside took roughly two decades. He shared the 2018 Nobel Prize for it.' },
        { type: 'table', heading: 'Types of biomedical research',
          leftHeader: 'Type', rightHeader: 'What it asks',
          rows: [
            { left: 'Basic / fundamental', right: 'How does this system work? (mechanism)' },
            { left: 'Translational', right: 'Can we turn this mechanism into a therapy or test?' },
            { left: 'Clinical', right: 'Is it safe and effective in real patients?' },
            { left: 'Epidemiological / population', right: 'Who gets the disease, and what patterns predict it?' },
            { left: 'Computational / dry-lab', right: 'What can we learn from existing data without a wet lab?' },
          ],
        },
      ],
      takeaways: [
        'Translational research moves discoveries from the bench to the bedside through preclinical work, clinical trials, and regulatory review.',
        'Most ideas fail in preclinical or early trials — that is expected and still scientifically valuable.',
        'Checkpoint inhibitors, mRNA vaccines, and CAR-T are all immunology discoveries that completed this pipeline.',
      ],
      quiz: [
        { id: 'q1', question: 'What is the main goal of translational research?', options: ['To publish as many papers as possible', 'To move a discovery from the lab toward a real treatment or test', 'To replace clinical trials', 'To study only animal models'], correctIndex: 1, explanation: 'Translational research bridges basic discovery and clinical application — turning mechanisms into therapies, diagnostics, or vaccines.' },
        { id: 'q2', question: 'Which phase of a clinical trial primarily tests safety in a small group?', options: ['Phase I', 'Phase II', 'Phase III', 'Phase IV'], correctIndex: 0, explanation: 'Phase I trials are small and focus on safety and dosing. Efficacy is the focus of Phase II and III.' },
      ],
    },
    {
      id: 'mod6-l2', title: 'Core Lab Methods', emoji: '⚗️', duration: '9 min',
      sections: [
        { type: 'text', heading: 'The immunologist\'s toolkit',
          body: 'Research questions are answered with techniques. You do not need to master these before joining a lab — you will learn them hands-on — but recognizing what each one measures makes papers far easier to read and helps you understand what a lab actually does day to day.' },
        { type: 'terms', heading: 'Techniques you will see in almost every immunology paper',
          terms: [
            { term: 'Flow cytometry / FACS', definition: 'Passes single cells through a laser to count and sort them by surface markers tagged with fluorescent antibodies. The workhorse for "how many of which immune cell."' },
            { term: 'ELISA', definition: 'Enzyme-Linked Immunosorbent Assay — uses antibodies to measure the concentration of a specific protein (e.g., a cytokine) in a sample, read out as a color change.' },
            { term: 'PCR / qPCR', definition: 'Polymerase Chain Reaction amplifies a target DNA sequence; quantitative PCR measures how much is present. RT-qPCR does the same for RNA (gene expression).' },
            { term: 'Western blot', definition: 'Separates proteins by size and uses antibodies to detect a specific one — confirms a protein is present and roughly how much.' },
            { term: 'Cell culture', definition: 'Growing cells in a dish under controlled conditions, so you can treat them and observe responses. The foundation of most wet-lab experiments.' },
            { term: 'CRISPR-Cas9', definition: 'A gene-editing tool that cuts DNA at a chosen sequence, letting researchers knock out or alter genes to test their function.' },
            { term: 'Immunohistochemistry (IHC)', definition: 'Uses antibodies with a visible stain to show where a protein sits within a tissue slice under a microscope.' },
            { term: 'Sequencing (DNA/RNA)', definition: 'Reads the exact order of bases. RNA-seq measures which genes are active; single-cell sequencing does this one cell at a time.' },
          ],
        },
        { type: 'callout', label: 'Wet lab vs. dry lab', color: '#14B8A6',
          text: 'A "wet lab" works with physical samples — cells, blood, reagents. A "dry lab" works with data and code (bioinformatics, statistics, modeling). Many modern labs do both, and dry-lab skills are increasingly valuable — which is exactly why the Machine Learning module is part of this app.' },
      ],
      takeaways: [
        'Flow cytometry, ELISA, PCR, and Western blot are the core measurement tools of immunology.',
        'CRISPR lets researchers edit genes to test what each one does.',
        'Dry-lab (computational) skills now complement wet-lab work in most research groups.',
      ],
      quiz: [
        { id: 'q1', question: 'Which technique would you use to count how many CD8⁺ T cells are in a blood sample?', options: ['Western blot', 'Flow cytometry', 'ELISA', 'PCR'], correctIndex: 1, explanation: 'Flow cytometry identifies and counts cells by their surface markers using fluorescent antibodies — ideal for quantifying a specific immune-cell population.' },
        { id: 'q2', question: 'What does RNA-seq measure?', options: ['The amount of a single protein', 'Which genes are being expressed and how strongly', 'The number of cells in a sample', 'The 3D structure of an antibody'], correctIndex: 1, explanation: 'RNA sequencing reads the mRNA in a sample to reveal gene expression across the transcriptome.' },
      ],
    },
    {
      id: 'mod6-l3', title: 'Getting Into Research as a Student', emoji: '🚀', duration: '9 min',
      sections: [
        { type: 'text', heading: 'You can start earlier than you think',
          body: 'You do not need a degree to contribute to research. High-school and undergraduate students join labs every year — usually by being curious, reliable, and willing to learn unglamorous tasks. The hardest part is simply getting your foot in the door, and that is a process you can actually plan for.' },
        { type: 'steps', heading: 'A realistic path into a lab',
          steps: [
            { label: 'Find labs that excite you', detail: 'Look up university department websites and read faculty "research interests." Note 5–10 labs whose work connects to something you learned here — say, a lab studying checkpoint inhibitors or autoimmunity.' },
            { label: 'Read one of their recent papers', detail: 'You will not understand all of it — that is fine. Understanding the abstract and the main figure is enough to write a genuine, specific email.' },
            { label: 'Send a short, specific cold email', detail: 'Address the professor by name, say what you found interesting in their work, state that you are looking for research experience, and attach a short résumé. Keep it under 150 words. Ask for a brief meeting, not a job.' },
            { label: 'Follow up once', detail: 'Professors get many emails. A single polite follow-up after 1–2 weeks is normal and often what gets a reply.' },
            { label: 'Say yes to starter tasks', detail: 'You may begin by washing glassware, making solutions, or organizing data. Doing small things carefully is how you earn bigger responsibilities and eventually your own project.' },
          ],
        },
        { type: 'table', heading: 'Where to look for opportunities',
          leftHeader: 'Opportunity', rightHeader: 'What it is',
          rows: [
            { left: 'University labs (volunteer/intern)', right: 'Email faculty directly; the most common entry point.' },
            { left: 'Summer research programs', right: 'Structured, often-paid programs (e.g., NIH, SIMR, RSI, university REUs) with applications months ahead.' },
            { left: 'Community college / local hospitals', right: 'Smaller institutions are often very open to motivated students.' },
            { left: 'Science fairs & mentorship programs', right: 'Programs that pair students with mentors for an independent project.' },
            { left: 'Citizen science & open data', right: 'Projects like Foldit, or public datasets you can analyze from home with code.' },
          ],
        },
        { type: 'callout', label: 'What labs actually want', color: '#14B8A6',
          text: 'Not a genius — a reliable, honest, curious person who shows up, follows protocols carefully, records everything, and asks good questions. Enthusiasm and consistency beat a perfect transcript almost every time.' },
        { type: 'terms', heading: 'Things that help you stand out',
          terms: [
            { term: 'A lab notebook habit', definition: 'Recording exactly what you did and saw, every time. Reproducibility starts with good notes, and mentors notice this immediately.' },
            { term: 'Basic data skills', definition: 'Comfort with a spreadsheet, and ideally a little Python or R, makes you useful on day one — especially for dry-lab work.' },
            { term: 'Reading papers', definition: 'Being able to summarize a paper\'s question, method, and finding shows you can engage with real science.' },
            { term: 'Scientific honesty', definition: 'Reporting what actually happened — including failed experiments and surprising results — is the single most important trait a researcher can have.' },
          ],
        },
      ],
      takeaways: [
        'The main route into a lab is a short, specific cold email to a professor whose work you have actually read.',
        'Summer research programs, local hospitals, and open datasets are all valid entry points.',
        'Labs value reliability, careful note-taking, and honesty over raw talent.',
      ],
      quiz: [
        { id: 'q1', question: 'What makes a cold email to a professor most effective?', options: ['Sending the same generic email to 100 professors', 'Referencing something specific from their actual research and keeping it short', 'Demanding a paid position immediately', 'Listing every class you have ever taken'], correctIndex: 1, explanation: 'A specific, concise email that shows you read their work — and asks for a brief conversation rather than a job — gets far more replies than a generic mass email.' },
        { id: 'q2', question: 'Which trait do research mentors value most in a new student?', options: ['A perfect GPA', 'Reliability and careful, honest record-keeping', 'Already knowing every technique', 'Working alone without asking questions'], correctIndex: 1, explanation: 'Reproducible science depends on people who show up, follow protocols carefully, and report what truly happened. That reliability matters more than prior expertise.' },
      ],
    },
    {
      id: 'mod6-l4', title: 'Designing a Sound Study', emoji: '📐', duration: '8 min',
      sections: [
        { type: 'text', heading: 'A good question, tested fairly',
          body: 'Whether you are running a pipette or a Python script, the logic of a sound experiment is the same: a clear hypothesis, the right comparisons, and controls that rule out alternative explanations. Understanding this lets you spot strong vs. weak studies — and design your own.' },
        { type: 'terms', heading: 'The vocabulary of experimental design',
          terms: [
            { term: 'Hypothesis', definition: 'A specific, testable prediction — e.g., "Blocking PD-1 will increase T-cell killing of tumor cells."' },
            { term: 'Independent variable', definition: 'The thing you deliberately change (e.g., adding a PD-1 blocker or not).' },
            { term: 'Dependent variable', definition: 'The outcome you measure (e.g., number of tumor cells killed).' },
            { term: 'Control group', definition: 'An otherwise-identical group that does not receive the treatment, so you can tell the treatment caused the effect.' },
            { term: 'Positive / negative control', definition: 'A condition expected to work (positive) or to do nothing (negative) — they confirm the experiment itself is functioning.' },
            { term: 'Confounder', definition: 'A hidden variable that could explain your result instead of the treatment. Good design controls for these.' },
            { term: 'Replication', definition: 'Repeating the experiment (and having others repeat it) to confirm the result is real and not chance.' },
            { term: 'Blinding & randomization', definition: 'Hiding group assignments and assigning subjects randomly to prevent bias from creeping into results.' },
          ],
        },
        { type: 'callout', label: 'Ethics is part of the method', color: '#14B8A6',
          text: 'Research with humans or animals must be approved by an oversight board (an IRB for humans, IACUC for animals) and requires informed consent. Ethical review is not bureaucracy — it is what makes research trustworthy and protects the people it aims to help.' },
        { type: 'text', heading: 'Why reproducibility matters',
          body: 'A result that no one else can reproduce is not yet knowledge. Strong studies share their methods and data so others can check them. As you read papers, ask: was there a proper control? How many times was this repeated? Could something other than the treatment explain the result? These same questions apply with even more force to data-driven studies — which is where the Machine Learning module picks up.' },
      ],
      takeaways: [
        'A sound experiment pairs a clear hypothesis with the right controls to rule out alternative explanations.',
        'Controls, replication, blinding, and randomization are what separate strong studies from weak ones.',
        'Human and animal research requires ethical review (IRB / IACUC) and informed consent.',
      ],
      quiz: [
        { id: 'q1', question: 'Why is a control group essential in an experiment?', options: ['It makes the experiment bigger', 'It lets you attribute the observed effect to the treatment rather than chance or other factors', 'It is required for funding only', 'It replaces the need for replication'], correctIndex: 1, explanation: 'Without an otherwise-identical control group, you cannot tell whether the treatment — or something else entirely — caused the result.' },
        { id: 'q2', question: 'What is a confounder?', options: ['The main treatment being tested', 'A hidden variable that could explain the result instead of the treatment', 'The measured outcome', 'A type of control'], correctIndex: 1, explanation: 'A confounder is an uncontrolled variable correlated with both the treatment and outcome, which can create a misleading apparent effect.' },
      ],
    },
  ],
};

// ── Module 7: Machine Learning for Biomedicine ─────────────────────────────────
const mod7: Module = {
  id: 'mod7', number: 7,
  title: 'Machine Learning',
  subtitle: 'How computers learn patterns from data — and how to do it without fooling yourself',
  emoji: '🤖', color: '#6366F1',
  lessons: [
    {
      id: 'mod7-l1', title: 'What Is Machine Learning?', emoji: '🧠', duration: '8 min',
      sections: [
        { type: 'text', heading: 'Learning from examples, not rules',
          body: 'Machine learning (ML) is a branch of artificial intelligence focused on systems that learn patterns from data and use them to make predictions or decisions. Instead of a human writing every rule by hand, the model learns from examples. In biomedicine this powers tools that flag tumors on scans, predict disease flares, and find structure in single-cell data.' },
        { type: 'text', heading: 'Features and labels',
          body: 'ML usually starts with data containing input variables called features (e.g., age, lab values, gene expression) and sometimes an output variable called the target or label (e.g., disease vs. no disease). The model studies the relationship between features and target, then applies what it learned to new, unseen data.' },
        { type: 'table', heading: 'The four ways models learn',
          leftHeader: 'Learning type', rightHeader: 'How it works',
          rows: [
            { left: 'Supervised', right: 'Learns from labeled examples (inputs + correct answers). Used for classification and regression.' },
            { left: 'Unsupervised', right: 'Finds structure in data without labels — clustering, dimensionality reduction, anomaly detection.' },
            { left: 'Semi-supervised', right: 'Uses a little labeled data plus lots of unlabeled data — helpful when labels are expensive.' },
            { left: 'Reinforcement', right: 'An agent learns by taking actions and receiving rewards or penalties (robotics, games, control).' },
          ],
        },
        { type: 'callout', label: 'Everyday examples', color: '#6366F1',
          text: 'Predicting house prices from size and location (regression), classifying email as spam (classification), recommending movies from past viewing (recommendation), and flagging unusual transactions as possible fraud (anomaly detection) are all machine learning.' },
      ],
      takeaways: [
        'Machine learning systems learn patterns from examples instead of being programmed with explicit rules.',
        'Features are the inputs; the label/target is the answer the model tries to predict.',
        'Supervised learning uses labeled data; unsupervised learning finds structure without labels.',
      ],
      quiz: [
        { id: 'q1', question: 'In machine learning, what is a "feature"?', options: ['The final prediction', 'An input variable the model uses to make predictions', 'The correct answer for a training example', 'A type of model'], correctIndex: 1, explanation: 'Features are the input variables (e.g., age, lab values). The target/label is the answer; the model learns the relationship between them.' },
        { id: 'q2', question: 'Which learning type finds structure in data without any labels?', options: ['Supervised learning', 'Unsupervised learning', 'Reinforcement learning', 'Semi-supervised learning'], correctIndex: 1, explanation: 'Unsupervised learning works without labeled answers — clustering, dimensionality reduction, and anomaly detection are its common tasks.' },
      ],
    },
    {
      id: 'mod7-l2', title: 'Tasks & Models', emoji: '📈', duration: '10 min',
      sections: [
        { type: 'text', heading: 'Match the task to the model',
          body: 'The job determines the tool. Classification predicts a category (spam vs. not spam, benign vs. malignant). Regression predicts a continuous number (price, risk score, time to failure). Clustering groups similar points; anomaly detection flags rare patterns. Once you know your task, you can pick a model — and it is almost always best to start simple.' },
        { type: 'table', heading: 'Common models and where they shine',
          leftHeader: 'Model', rightHeader: 'Best for',
          rows: [
            { left: 'Linear regression', right: 'Predicting numbers when the relationship is roughly linear. Fast, interpretable baseline.' },
            { left: 'Logistic regression', right: 'Classification with interpretable probabilities; a strong baseline for medical risk.' },
            { left: 'K-nearest neighbors', right: 'Small/medium data where similar samples share labels. Sensitive to scaling.' },
            { left: 'Decision trees', right: 'Rule-based, easy to visualize, captures nonlinearity. Can overfit if unpruned.' },
            { left: 'Random forests', right: 'Many trees combined — stable and accurate on tabular data with little tuning.' },
            { left: 'Gradient boosted trees', right: 'XGBoost / LightGBM / CatBoost — often the strongest for structured/tabular data.' },
            { left: 'Support vector machines', right: 'High-dimensional data (e.g., biology, text); kernels model nonlinear patterns.' },
            { left: 'Naive Bayes', right: 'Fast text/sparse-data classification; makes a strong independence assumption.' },
            { left: 'Neural networks', right: 'Images, language, audio, large complex data; need more data and compute.' },
          ],
        },
        { type: 'callout', label: 'High-yield pattern', color: '#6366F1',
          text: 'For everyday tabular data (rows and columns, like a clinical spreadsheet), tree-based models — especially gradient boosting — are usually the strongest. Neural networks dominate for images, language, and audio. Always compare against a simple baseline first.' },
      ],
      takeaways: [
        'Classification predicts categories; regression predicts continuous numbers.',
        'For tabular data, tree-based models (especially gradient boosting) are usually strongest.',
        'Neural networks excel at images, language, and audio but need more data and compute.',
      ],
      quiz: [
        { id: 'q1', question: 'You want to predict a patient\'s continuous risk score from lab values. Which task is this?', options: ['Classification', 'Regression', 'Clustering', 'Anomaly detection'], correctIndex: 1, explanation: 'Predicting a continuous numeric value is regression. Predicting a category would be classification.' },
        { id: 'q2', question: 'For a standard tabular clinical dataset, which model family is often the strongest?', options: ['Neural networks', 'Gradient boosted trees', 'K-nearest neighbors', 'Naive Bayes'], correctIndex: 1, explanation: 'Gradient boosted trees (XGBoost, LightGBM, CatBoost) frequently outperform other models on structured/tabular data, though a simple baseline should always be compared first.' },
      ],
    },
    {
      id: 'mod7-l3', title: 'The ML Workflow & Data Prep', emoji: '🛠️', duration: '10 min',
      sections: [
        { type: 'text', heading: 'Most of the work is the data',
          body: 'Newcomers think ML is about choosing a fancy model. In practice, the quality of the data and the care of the workflow matter far more. Poor data leads to poor models, even with advanced algorithms — "garbage in, garbage out."' },
        { type: 'steps', heading: 'A typical machine learning workflow',
          steps: [
            { label: 'Define the problem & metric', detail: 'State what you are predicting and how you will measure success — chosen to match the real-world goal.' },
            { label: 'Collect & understand the data', detail: 'Explore distributions, missing values, and obvious errors before modeling.' },
            { label: 'Clean & preprocess', detail: 'Fix errors and duplicates, handle missing data, encode categories, scale features when needed. Fit preprocessing on training data only.' },
            { label: 'Split the data', detail: 'Train / validation / test, or cross-validation. Keep the test set untouched until the very end.' },
            { label: 'Baseline, then train', detail: 'Start with a simple model, then train candidate models.' },
            { label: 'Compare, tune, evaluate', detail: 'Compare with goal-matched metrics, tune hyperparameters, then evaluate once on the held-out test set.' },
            { label: 'Interpret & deploy', detail: 'Check for bias, leakage, and overfitting; then deploy, monitor, and update as data changes.' },
          ],
        },
        { type: 'terms', heading: 'Data & preparation concepts',
          terms: [
            { term: 'Numeric vs. categorical', definition: 'Numeric inputs are numbers (age, lab values). Categorical inputs are groups — ordinal (ordered, like cancer stage) or nominal (unordered, like blood type).' },
            { term: 'One-hot encoding', definition: 'Turning a categorical variable into 0/1 columns so a model can use it.' },
            { term: 'Feature scaling', definition: 'Putting numeric features on a comparable scale — important for KNN, SVMs, linear models, and neural networks.' },
            { term: 'Hyperparameters', definition: 'Settings chosen before/around training (e.g., number of trees, learning rate, tree depth) — not learned from data like model parameters are.' },
            { term: 'Feature selection', definition: 'Reducing input variables to cut noise and speed up models — but it must be done inside the training folds to avoid leakage.' },
          ],
        },
        { type: 'callout', label: 'The cardinal sin: data leakage', color: '#6366F1',
          text: 'Data leakage is when information outside the training data sneaks into preprocessing, feature selection, or tuning — for example, scaling the whole dataset before splitting, or picking features using all the labels. Leakage makes results look great but they collapse on real new data. Fit everything on training data only, and use the test set exactly once.' },
      ],
      takeaways: [
        'Data quality and a careful workflow usually matter more than the choice of model.',
        'Always start with a simple baseline before reaching for complex models.',
        'Data leakage — letting test information influence training — is the most dangerous, easy-to-miss mistake.',
      ],
      quiz: [
        { id: 'q1', question: 'Why should preprocessing (like scaling) be fit on the training data only?', options: ['It runs faster that way', 'To avoid data leakage that makes results look better than they really are', 'Because the test set has no features', 'It is not important which data you use'], correctIndex: 1, explanation: 'Fitting preprocessing on the full dataset lets test-set information leak into training, inflating performance estimates. Fit on training data, then apply to validation/test.' },
        { id: 'q2', question: 'What is a hyperparameter?', options: ['A value learned automatically during training', 'A setting chosen before/around training, like learning rate or number of trees', 'The model\'s final prediction', 'A type of input feature'], correctIndex: 1, explanation: 'Hyperparameters (e.g., tree depth, learning rate) are configured by the user or a tuning process; model parameters are what the model learns from data.' },
      ],
    },
    {
      id: 'mod7-l4', title: 'Evaluation, Validation & Trust', emoji: '✅', duration: '11 min',
      sections: [
        { type: 'text', heading: 'Did it really work?',
          body: 'A model that scores well on paper can still be useless — or dangerous — in the real world. Trustworthy ML depends on choosing the right metric, validating without leakage, and sanity-checking that the model found real signal rather than noise. This is especially true in medicine, where errors have real costs.' },
        { type: 'table', heading: 'Choosing the right metric',
          leftHeader: 'Metric', rightHeader: 'When it matters',
          rows: [
            { left: 'Accuracy', right: 'Balanced classes with similar error costs. Misleading when classes are imbalanced.' },
            { left: 'Precision', right: 'When false positives are costly (unnecessary alarms or treatment).' },
            { left: 'Recall (sensitivity)', right: 'When false negatives are costly (missing a real disease case).' },
            { left: 'F1 score', right: 'Balances precision and recall for an important, rare positive class.' },
            { left: 'PR-AUC', right: 'Imbalanced problems with a rare positive class — clearer than ROC-AUC there.' },
            { left: 'ROC-AUC', right: 'How well the model ranks positives above negatives across thresholds.' },
            { left: 'MAE / RMSE', right: 'Regression error. RMSE punishes large errors more and shares the target\'s units.' },
            { left: 'Brier score', right: 'How well predicted probabilities match reality (calibration).' },
          ],
        },
        { type: 'terms', heading: 'Validation & trust concepts',
          terms: [
            { term: 'Cross-validation', definition: 'Splitting data into folds so each fold takes a turn as validation — a more stable performance estimate than one split.' },
            { term: 'Nested cross-validation', definition: 'An outer loop estimates performance while an inner loop handles tuning and feature selection — giving a less biased estimate after tuning.' },
            { term: 'Grouped / stratified splitting', definition: 'Grouped keeps all samples from one patient on one side of the split (no leakage). Stratified preserves class ratios across folds.' },
            { term: 'Overfitting vs. underfitting', definition: 'Overfitting learns noise and fails on new data; underfitting is too simple to capture the real pattern. Both hurt generalization.' },
            { term: 'Class imbalance', definition: 'When one class is rare, accuracy is misleading — a model can "win" by always predicting the majority. Use PR-AUC, F1, and strong baselines.' },
            { term: 'Calibration', definition: 'Whether a predicted "30% risk" really happens ~30% of the time. Matters when probabilities are used as risk estimates.' },
            { term: 'SHAP analysis', definition: 'Estimates how much each feature pushed a prediction up or down — aids interpretation, but does not prove causation.' },
            { term: 'Permutation (label-shuffle) test', definition: 'Shuffle the labels and re-run; if performance stays similar, the original result may be noise, not real signal.' },
            { term: 'External validation', definition: 'Testing on an independently collected dataset — the strongest evidence that a model truly generalizes.' },
          ],
        },
        { type: 'callout', label: 'Why this module sits next to immunology', color: '#6366F1',
          text: 'Predicting something like a lupus flare from gene expression brings every one of these ideas together: imbalanced classes, repeated samples per patient (needs grouped splitting), leakage-safe pipelines, strong baselines, permutation tests, and external validation. Good ML, like good immunology, is about not fooling yourself.' },
      ],
      takeaways: [
        'Pick metrics that match the real-world goal — accuracy alone is misleading on imbalanced data.',
        'Leakage-safe validation (often nested, grouped, stratified cross-validation) gives trustworthy estimates.',
        'Permutation tests, calibration checks, and external validation confirm a model found real signal.',
      ],
      quiz: [
        { id: 'q1', question: 'A disease affects 5% of patients. A model predicts "no disease" for everyone and is 95% accurate. What is wrong?', options: ['Nothing — 95% is excellent', 'Accuracy is misleading on imbalanced data; the model catches zero real cases (recall = 0)', 'It overfit the test set', 'It needs a larger learning rate'], correctIndex: 1, explanation: 'With imbalanced classes, high accuracy can hide total failure on the rare positive class. Recall, F1, and PR-AUC reveal that the model detects no true cases.' },
        { id: 'q2', question: 'What does a permutation (label-shuffle) test check?', options: ['Whether the model trains fast enough', 'Whether performance reflects real signal rather than noise', 'Which features to scale', 'The best learning rate'], correctIndex: 1, explanation: 'If a model performs similarly after labels are randomly shuffled, its original performance likely reflects noise or leakage rather than a genuine predictive signal.' },
      ],
    },
  ],
};

export const MODULES: Module[] = [mod1, mod2, mod3, mod4, mod5, mod6, mod7];

export function getModule(id: string) { return MODULES.find(m => m.id === id); }
export function getLesson(moduleId: string, lessonId: string) {
  return getModule(moduleId)?.lessons.find(l => l.id === lessonId);
}

// Keyed by string module id (e.g. 'mod1'), matching how components consume it.
export const MODULE_COLORS: Record<string, string> = {
  mod1: '#3B82F6', mod2: '#10B981', mod3: '#EF4444', mod4: '#8B5CF6',
  mod5: '#F59E0B', mod6: '#14B8A6', mod7: '#6366F1',
};
