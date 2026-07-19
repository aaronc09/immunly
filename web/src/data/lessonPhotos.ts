export interface LessonPhoto {
  url: string;
  alt: string;
  credit: string;  // "Author, License, via Wikimedia Commons"
  creditUrl: string;
  caption: string;
}

// All images verified on Wikimedia Commons — freely usable with attribution as noted
export const LESSON_PHOTOS: Record<string, LessonPhoto> = {

  'mod1-l1': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png',
    alt: 'Labelled DNA double helix structure diagram',
    credit: 'Zephyris (Richard Wheeler), CC BY-SA 3.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:DNA_Structure%2BKey%2BLabelled.pn_NoBB.png',
    caption: 'The DNA double helix, with the sugar-phosphate backbone and base pairs (A-T, G-C) labelled.',
  },

  'mod1-l2': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Animal_Cell.svg/960px-Animal_Cell.svg.png',
    alt: 'Diagram of an animal cell showing major organelles',
    credit: 'Mariana Ruiz Villarreal (LadyofHats), Public Domain, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Animal_Cell.svg',
    caption: 'Major organelles of an animal cell — the nucleus, ER, Golgi, mitochondria, and more.',
  },

  'mod1-l3': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Hematopoiesis_%28human%29_diagram.svg',
    alt: 'Hematopoiesis diagram showing blood cell lineage from hematopoietic stem cells',
    credit: 'A. Rad; SVG by Spacebirdy, CC BY-SA 3.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Hematopoiesis_(human)_diagram.svg',
    caption: 'All blood and immune cells arise from a common hematopoietic stem cell in the bone marrow.',
  },

  'mod1-l4': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Blausen_0623_LymphaticSystem_Female.png',
    alt: 'Anatomical diagram of the female lymphatic system',
    credit: 'BruceBlaus, CC BY 3.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Blausen_0623_LymphaticSystem_Female.png',
    caption: 'The lymphatic system — a network of vessels and nodes that transports immune cells and drains interstitial fluid.',
  },

  'mod2-l1': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Dendritic_cell.svg/960px-Dendritic_cell.svg.png',
    alt: 'Illustration of a dendritic cell with branching projections',
    credit: 'Wikimedia Commons, Public Domain',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Dendritic_cell.svg',
    caption: 'A dendritic cell — the bridge between innate and adaptive immunity, presenting antigens to T cells.',
  },

  'mod2-l2': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Blausen_0676_Neutrophil.png/960px-Blausen_0676_Neutrophil.png',
    alt: 'Illustration of a neutrophil',
    credit: 'BruceBlaus, CC BY 3.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Blausen_0676_Neutrophil.png',
    caption: 'A neutrophil — the most abundant circulating granulocyte and first responder to bacterial infection.',
  },

  'mod2-l3': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/db/T_cell_activation.svg',
    alt: 'Diagram of T cell activation showing TCR-MHC interaction and co-stimulation',
    credit: 'Rehua, Public Domain, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:T_cell_activation.svg',
    caption: 'T cell activation requires three signals: antigen (TCR–MHC), co-stimulation (CD28–B7), and cytokines.',
  },

  'mod2-l4': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Antibody.svg',
    alt: 'Diagram of an antibody (immunoglobulin) showing heavy and light chains',
    credit: 'Fvasconcellos, Public Domain, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Antibody.svg',
    caption: 'A Y-shaped antibody with two antigen-binding (Fab) regions and one constant (Fc) region.',
  },

  'mod3-l1': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Rheumatoid_Arthritis_Hands.jpg',
    alt: 'Photograph of hands with visible joint swelling from rheumatoid arthritis',
    credit: 'Wikimedia Commons, CC BY-SA 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Rheumatoid_Arthritis_Hands.jpg',
    caption: 'Hands showing the characteristic joint swelling and deformity of rheumatoid arthritis.',
  },

  'mod3-l2': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Allergy_degranulation_processes_01.svg',
    alt: 'Diagram of IgE-mediated mast cell degranulation in an allergic reaction',
    credit: 'Paweł Kuźniar (Jojo_1), CC BY-SA 3.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Allergy_degranulation_processes_01.svg',
    caption: 'IgE cross-linking on a mast cell triggers degranulation, releasing histamine and causing allergic symptoms.',
  },

  'mod3-l3': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/HI-virion-structure_en.svg',
    alt: 'Detailed cross-section diagram of HIV virion structure',
    credit: 'Thomas Splettstoesser (scistyle.com), CC BY-SA 4.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:HI-virion-structure_en.svg',
    caption: 'The HIV virion — gp120/gp41 surface proteins mediate entry into CD4⁺ T cells.',
  },

  'mod3-l4': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Immune_checkpoints_in_the_tumour_microenvironment.svg',
    alt: 'Diagram of immune checkpoints in the tumour microenvironment',
    credit: 'Petrova et al., CC BY 4.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Immune_checkpoints_in_the_tumour_microenvironment.svg',
    caption: 'Tumours express PD-L1 and exploit CTLA-4 to silence T cells. Checkpoint inhibitors block these signals.',
  },

  'mod4-l1': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Mechanism_of_self-amplifying_mRNA_%28saRNA%29.png',
    alt: 'Diagram of mRNA vaccine mechanism showing antigen production inside a cell',
    credit: 'Blakney AK et al., CC BY 4.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Mechanism_of_self-amplifying_mRNA_(saRNA).png',
    caption: 'Delivered mRNA is translated by ribosomes into a viral antigen, which the immune system learns to recognise.',
  },

  'mod4-l3': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Immune_checkpoints_in_the_tumour_microenvironment.svg',
    alt: 'Checkpoint pathways in the tumour microenvironment',
    credit: 'Petrova et al., CC BY 4.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Immune_checkpoints_in_the_tumour_microenvironment.svg',
    caption: 'Anti-PD-1 and anti-CTLA-4 antibodies block inhibitory signals, reawakening T cells against tumours.',
  },

  'mod5-l2': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flow_cytometry_scatterplot.png',
    alt: 'Flow cytometry FACS dot-plot scatter diagram',
    credit: 'Kwz, CC BY-SA 3.0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Flow_cytometry_scatterplot.png',
    caption: 'A FACS scatter plot: each dot is one cell. Gates isolate populations by their surface marker expression.',
  },

  'mod5-l3': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Heatmap.png/960px-Heatmap.png',
    alt: 'Gene expression heatmap from RNA sequencing data',
    credit: 'Mrmw, CC0, via Wikimedia Commons',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Heatmap.png',
    caption: 'A gene expression heatmap — each row is a gene, each column a sample. Colour shows expression level.',
  },
};
