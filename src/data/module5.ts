import { Module } from '../types';

const module5: Module = {
  id: 'mod5',
  number: 5,
  title: 'Research Skills',
  subtitle: 'Reading papers, lab techniques & computational biology',
  emoji: '🔬',
  color: '#D97706',
  lessons: [
    {
      id: 'mod5-l1',
      title: 'How to Read a Scientific Paper',
      emoji: '📄',
      duration: '7 min',
      sections: [
        {
          type: 'text',
          heading: 'The Scientific Paper: A Roadmap',
          body: 'A scientific paper is the primary unit of scientific communication. It presents a question, the experimental approach used to answer it, the resulting data, and the authors\' interpretation. Learning to critically read papers is the most important skill for a future biomedical researcher — and it\'s a skill you can start developing right now.',
        },
        {
          type: 'comparison',
          heading: 'Anatomy of a Research Paper',
          leftHeader: 'Section',
          rightHeader: 'What to look for',
          rows: [
            { left: 'Abstract', right: 'One-paragraph summary. Read this first to decide if the paper is relevant.' },
            { left: 'Introduction', right: 'Background context and the specific question being asked. What gap in knowledge does this paper fill?' },
            { left: 'Methods', right: 'HOW the experiments were done. Crucial for reproducibility. Check: sample size, controls, statistics.' },
            { left: 'Results', right: 'Raw findings — figures and data. Read this independently BEFORE reading the Discussion. What do the figures actually show?' },
            { left: 'Discussion', right: 'Authors\' interpretation of results. Read critically — is the interpretation supported by the data or overreached?' },
            { left: 'Conclusion', right: 'Summary of findings and significance. Often the weakest writing — be skeptical of big claims.' },
            { left: 'Supplementary Data', right: 'Often contains important controls and additional experiments. Reviewers know to check here.' },
          ],
        },
        {
          type: 'timeline',
          heading: 'A Strategic Reading Approach',
          steps: [
            { label: 'Step 1: Abstract + Figures', detail: 'Read the abstract, then immediately look at every figure and its legend. Try to understand what experiment was done and what the result was, before reading the authors\' interpretation.' },
            { label: 'Step 2: Introduction', detail: 'Read the intro to understand the scientific context. What was known before this paper? What is the specific hypothesis being tested?' },
            { label: 'Step 3: Methods (skim)', detail: 'Note the major techniques used (flow cytometry, RNA-seq, mouse model, human patient cohort). Check: is the sample size adequate? Are there proper controls?' },
            { label: 'Step 4: Results carefully', detail: 'Read the results section in detail alongside the figures. The results should state facts (what the data shows), not interpretations.' },
            { label: 'Step 5: Critical Discussion', detail: 'Read the discussion and ask: do the conclusions match the data? Are there alternative explanations? What are the limitations?' },
            { label: 'Step 6: Check citations', detail: 'Key claim you\'re not sure about? Follow the citation. Good papers are built on well-validated prior work.' },
          ],
        },
        {
          type: 'flipcard',
          heading: 'Critical Reading Questions — Tap to Reveal',
          instruction: 'These questions will make you a more rigorous reader of any paper.',
          cards: [
            { front: 'Is n large enough?', back: 'Sample size determines statistical power. Mouse studies often n=3–10 per group. Human studies vary. Small n = higher risk of false positives (p-hacking). Look for power calculations in the methods.' },
            { front: 'Are there proper controls?', back: 'Every experiment needs a negative control (no treatment / vehicle only) and ideally a positive control (known to give the expected result). Missing controls should raise red flags.' },
            { front: 'Correlation vs. causation?', back: 'Two things changing together (correlation) does not mean one causes the other. Ask: did the authors use genetic knockouts, blocking antibodies, or rescue experiments to establish causality?' },
            { front: 'Mouse ≠ Human?', back: 'Mouse immune systems differ from humans in important ways (e.g., different TLR repertoire, different proportions of NK cells). Results in mice may not translate. Check if key findings have human validation.' },
            { front: 'Who funded this?', back: 'Check the funding section. Industry-funded studies may have conflicts of interest. This doesn\'t invalidate the results, but it\'s context worth knowing.' },
          ],
        },
      ],
    },
    {
      id: 'mod5-l2',
      title: 'Immunology Lab Techniques',
      emoji: '⚗️',
      duration: '10 min',
      sections: [
        {
          type: 'text',
          heading: 'The Immunologist\'s Toolkit',
          body: 'Immunology research relies on a set of core techniques to detect, measure, and characterize immune cells and molecules. Understanding these techniques helps you read papers critically and prepares you for actual lab work.',
        },
        {
          type: 'flipcard',
          heading: 'Core Lab Techniques — Tap to Learn',
          instruction: 'These are the most common techniques you\'ll encounter in immunology research papers.',
          cards: [
            {
              front: '🔵 Flow Cytometry',
              back: 'Identifies and counts thousands of individual cells per second by detecting light scattered and emitted when laser-illuminated cells pass through a detector. Cells are labeled with fluorescently tagged antibodies targeting surface markers (e.g., anti-CD4, anti-CD8). Can simultaneously measure 30+ markers per cell. Used to: count T cell subsets, measure activation markers, assess cytokine production (intracellular staining), measure cell death. FACS (fluorescence-activated cell sorting) physically separates cells for downstream analysis.',
            },
            {
              front: '🟡 ELISA\n(Enzyme-Linked Immunosorbent Assay)',
              back: 'Measures the concentration of a specific protein (e.g., a cytokine like IL-6 or IFN-γ) in a sample. How it works: (1) Capture antibody coats the plate and grabs the target protein from your sample. (2) Detection antibody (linked to an enzyme) binds the captured protein. (3) Enzyme reacts with a substrate to produce a color change proportional to protein concentration. Simple, cheap, and quantitative — a workhorse of immunology.',
            },
            {
              front: '🟠 Western Blot',
              back: 'Detects and sizes a specific protein from a mixture. How it works: (1) Cells are lysed, proteins are separated by size on a gel (SDS-PAGE). (2) Proteins are transferred to a membrane. (3) An antibody specific to your target protein detects it. Result: dark band at the molecular weight of your protein. Used to: confirm protein expression, detect phosphorylation (signaling), check antibody knockdown. Not quantitative unless carefully normalized.',
            },
            {
              front: '🟢 PCR & RT-PCR',
              back: 'PCR amplifies specific DNA sequences exponentially. RT-PCR converts mRNA → cDNA (reverse transcription) then amplifies. This detects gene expression (which genes are on/off). Quantitative PCR (qPCR) measures how much mRNA a gene makes. Used in immunology to: measure cytokine mRNA levels, detect viral RNA (e.g., SARS-CoV-2 COVID tests are RT-PCR), analyze gene expression changes in immune cells.',
            },
            {
              front: '🔴 CyTOF / Mass Cytometry',
              back: 'Like flow cytometry but uses metal isotopes instead of fluorescent dyes. No spectral overlap = can measure 40+ parameters simultaneously on millions of individual cells. Combined with high-dimensional computational analysis, CyTOF has revealed previously unrecognized immune cell subsets in cancer, autoimmunity, and infection.',
            },
            {
              front: '🟣 ELISPOT',
              back: 'Detects individual cells secreting a specific cytokine (e.g., IFN-γ-secreting T cells responding to a specific antigen). Cells sit on a capture antibody-coated plate; each secreting cell leaves a "spot." Count of spots = number of antigen-specific T cells. Gold standard for measuring T cell responses to vaccines.',
            },
          ],
        },
        {
          type: 'highlight',
          label: '🔬 In Your Research Career',
          text: 'When you encounter a paper claiming a drug increases IL-6 levels, check: was this measured by ELISA (gold standard protein detection), by qPCR (mRNA expression only — doesn\'t guarantee protein), or by a cytokine bead array? The technique used determines how confident you should be in the data.',
          color: '#D97706',
        },
      ],
    },
    {
      id: 'mod5-l3',
      title: 'Computational Immunology & RNA-seq',
      emoji: '💻',
      duration: '9 min',
      sections: [
        {
          type: 'text',
          heading: 'Biology Meets Computer Science',
          body: 'Modern immunology generates enormous datasets — millions of cells, thousands of genes, hundreds of patients. Bioinformatics and computational biology are the tools researchers use to make sense of this data. You don\'t need to be a programmer to understand the concepts, and even basic computational skills (Python, R) are now highly valued in biomedical research.',
        },
        {
          type: 'timeline',
          heading: 'How RNA-seq Works',
          steps: [
            { label: '1. Sample Collection', detail: 'Cells of interest are collected (e.g., tumor-infiltrating T cells from a cancer patient, or PBMCs from blood). The cell population can be millions of cells (bulk RNA-seq) or single cells (scRNA-seq).' },
            { label: '2. RNA Extraction & mRNA Selection', detail: 'Total RNA is extracted from cells. Poly-A selection or ribosomal RNA depletion enriches for mRNA (which encodes proteins) over ribosomal RNA (which makes up ~80% of total RNA).' },
            { label: '3. Library Preparation', detail: 'mRNA is fragmented, reverse transcribed into cDNA, and sequencing adapters are added. This creates a "library" of short cDNA fragments representing all expressed genes.' },
            { label: '4. Sequencing', detail: 'A sequencer (e.g., Illumina) reads millions of short DNA fragments (reads). Each read is ~75–150 base pairs. A typical RNA-seq experiment generates 30–100 million reads per sample.' },
            { label: '5. Alignment', detail: 'Reads are mapped back to a reference genome. The number of reads mapping to each gene reflects how much that gene was expressed. This generates a count matrix: genes × samples.' },
            { label: '6. Differential Expression Analysis', detail: 'Statistical tools (DESeq2, edgeR) identify genes that are significantly more or less expressed between conditions (e.g., treated vs. untreated, disease vs. healthy). These are "differentially expressed genes" (DEGs).' },
            { label: '7. Pathway & Functional Analysis', detail: 'DEGs are fed into pathway databases (GO, KEGG, Reactome) to identify which biological processes are up- or downregulated. This gives biological meaning to the list of differential genes.' },
          ],
        },
        {
          type: 'comparison',
          heading: 'Bulk RNA-seq vs. Single-Cell RNA-seq (scRNA-seq)',
          leftHeader: 'Bulk RNA-seq',
          rightHeader: 'Single-Cell RNA-seq (scRNA-seq)',
          rows: [
            { left: 'Average signal across thousands of cells', right: 'Profile of every individual cell separately' },
            { left: 'Higher coverage per gene — more sensitive', right: 'Reveals heterogeneity within a cell population' },
            { left: 'Cheaper (~$200–400/sample)', right: 'More expensive (~$1,000–3,000/sample)' },
            { left: '"What genes are on in these T cells on average?"', right: '"Which subtype of T cell expresses what — and how many?"' },
            { left: 'Established, reproducible, well-validated tools', right: 'Rapidly evolving; UMAP/tSNE visualization of cell clusters' },
            { left: 'Misses rare cell populations', right: 'Can identify novel rare cell types at low frequency' },
          ],
        },
        {
          type: 'flipcard',
          heading: 'Bioinformatics Concepts — Tap to Learn',
          instruction: 'These are terms you\'ll encounter in computational immunology papers.',
          cards: [
            { front: 'UMAP / tSNE', back: 'Dimensionality reduction algorithms that take high-dimensional data (thousands of genes per cell) and compress it into a 2D plot. Similar cells cluster together. Each dot = one cell. Used to visualize scRNA-seq data and identify cell types.' },
            { front: 'Differential Gene Expression', back: 'Identifies genes that are significantly up- or downregulated between two conditions. A log2 fold-change of 1 = gene is 2× more expressed. Statistical significance usually requires adjusted p-value (FDR) < 0.05.' },
            { front: 'Gene Ontology (GO) Analysis', back: 'A method to determine which biological functions (processes, pathways) are enriched among a list of differentially expressed genes. Example: "These 200 upregulated genes are enriched for T cell activation, cytokine signaling, and cell proliferation."' },
            { front: 'TCR-seq / BCR-seq', back: 'Sequences the T cell receptor or B cell receptor repertoire of a sample. Reveals: clonal expansion (one T cell clone expanded massively = antigen-specific response), diversity, and shared clonotypes across tissues. Used to study tumor-infiltrating T cells and vaccine responses.' },
            { front: 'Pseudotime Analysis', back: 'Orders cells along a "trajectory" representing a biological process (e.g., naive → memory T cell differentiation, B cell → plasma cell development) based on their gene expression profiles. Reveals intermediate cell states.' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'm5q1',
      question: 'In a scientific paper, a researcher claims "IL-6 levels were increased in patients." They measured this by Western blot of cell lysates. What is the critical flaw?',
      options: [
        'Western blot cannot detect proteins at all',
        'IL-6 is a secreted cytokine measured from supernatants or serum; Western blot of lysates measures intracellular protein, not secreted levels — ELISA is the gold standard for secreted cytokines',
        'The researcher should have used PCR instead of Western blot',
        'Western blot only works for nuclear proteins, not cytokines',
      ],
      correctIndex: 1,
      explanation: 'IL-6 is a secreted cytokine whose functional "level" refers to the amount released into the extracellular environment (measured from serum, plasma, or culture supernatants by ELISA or cytometric bead array). Western blot on cell lysates would detect intracellular stores — which don\'t reflect secretion levels. This is a classic methodological mismatch to spot in papers.',
    },
    {
      id: 'm5q2',
      question: 'A researcher uses flow cytometry to analyze tumor-infiltrating lymphocytes and finds a CD8+PD-1+TIM-3+ T cell population. What does this phenotype suggest?',
      options: [
        'These are highly activated effector killer T cells at the peak of their anti-tumor response',
        'These are naive T cells that have not yet encountered antigen',
        'These are exhausted cytotoxic T cells — co-expression of multiple inhibitory receptors is a hallmark of T cell exhaustion in chronic stimulation',
        'These are regulatory T cells (Tregs) suppressing the immune response',
      ],
      correctIndex: 2,
      explanation: 'Co-expression of multiple inhibitory receptors (PD-1, TIM-3, LAG-3, TIGIT) on CD8+ T cells is the molecular signature of T cell exhaustion — a dysfunctional state induced by chronic antigen exposure in tumors and chronic infections. These cells have impaired proliferation, cytokine production, and cytotoxic killing.',
    },
    {
      id: 'm5q3',
      question: 'In a bulk RNA-seq experiment comparing healthy vs. COVID-19 patient PBMCs, you find 500 upregulated genes. Which analysis best reveals the biological processes involved?',
      options: [
        'Western blot of all 500 proteins',
        'ELISA measurement of all 500 gene products',
        'Gene Ontology (GO) or pathway enrichment analysis to identify overrepresented biological processes among the 500 genes',
        'PCR validation of all 500 genes',
      ],
      correctIndex: 2,
      explanation: 'Pathway enrichment / GO analysis takes a large list of differentially expressed genes and determines which biological processes are statistically overrepresented. For example, it might reveal that the 500 upregulated genes are enriched for "type I interferon signaling," "innate immune response," and "neutrophil activation" — providing interpretable biological insight from raw gene lists.',
    },
    {
      id: 'm5q4',
      question: 'What key advantage does single-cell RNA-seq have over bulk RNA-seq that makes it valuable for studying the tumor immune microenvironment?',
      options: [
        'scRNA-seq is cheaper than bulk RNA-seq',
        'scRNA-seq measures protein levels directly, while bulk RNA-seq only measures mRNA',
        'scRNA-seq reveals heterogeneity within cell populations — identifying distinct subpopulations (e.g., exhausted vs. effector T cells) that are averaged away in bulk RNA-seq',
        'scRNA-seq can sequence DNA mutations in cancer cells, while bulk RNA-seq cannot',
      ],
      correctIndex: 2,
      explanation: 'Bulk RNA-seq averages gene expression across all cells in a sample. If a tumor contains 60% exhausted T cells and 40% effector T cells, bulk RNA-seq gives a blended average. scRNA-seq profiles each cell individually, allowing identification of distinct subpopulations, their proportions, and their unique gene expression programs — critical for understanding complex tissues like tumors.',
    },
  ],
};

export default module5;
