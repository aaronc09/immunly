// Immunology Reference Data — the memorization-heavy material (cytokines, ligands, receptors).
// Adapted from the Immunology Summary reference section. Designed for searchable tables.

export interface RefEntry {
  name: string;          // primary name / abbreviation
  aka?: string;          // alternate names
  fn: string;            // main function
  source?: string;       // mainly secreted / displayed by
  receptor?: string;     // main receptor (for ligands) or ligand (for receptors)
}

export interface RefTable {
  id: string;
  title: string;
  blurb: string;
  cols: { key: keyof RefEntry; header: string }[];
  rows: RefEntry[];
}

const LIGAND_COLS = [
  { key: 'name' as const, header: 'Name' },
  { key: 'fn' as const, header: 'Main function' },
  { key: 'source' as const, header: 'Mainly from' },
  { key: 'receptor' as const, header: 'Receptor' },
];

const RECEPTOR_COLS = [
  { key: 'name' as const, header: 'Receptor' },
  { key: 'fn' as const, header: 'Main function' },
  { key: 'receptor' as const, header: 'Ligand / recognizes' },
  { key: 'source' as const, header: 'Found on' },
];

export const REFERENCE_TABLES: RefTable[] = [
  {
    id: 'interleukins',
    title: 'Interleukins',
    blurb: 'Cytokines that signal between leukocytes. The classic high-yield memorization set.',
    cols: LIGAND_COLS,
    rows: [
      { name: 'IL-1α / IL-1β', fn: 'Initiates inflammation, activates endothelium, promotes fever, supports leukocyte recruitment.', source: 'Macrophages, monocytes, DCs, epithelial & endothelial cells, stressed cells', receptor: 'IL-1 receptor' },
      { name: 'IL-2', fn: 'T-cell proliferation & clonal expansion, Treg maintenance, NK & cytotoxic T-cell support.', source: 'Activated T cells (esp. CD4)', receptor: 'IL-2R (CD25 high-affinity on Tregs)' },
      { name: 'IL-4', fn: 'Th2 differentiation, IgE class switching, type 2 immunity, alternative macrophage activation.', source: 'Th2, mast cells, basophils, ILC2', receptor: 'IL-4 receptor' },
      { name: 'IL-5', fn: 'Eosinophil growth, survival, recruitment & activation.', source: 'Th2, ILC2, mast cells', receptor: 'IL-5 receptor' },
      { name: 'IL-6', fn: 'Acute-phase response, fever, inflammation, early Th17 support, Tfh/plasma-cell support.', source: 'Macrophages, DCs, fibroblasts, endothelial/epithelial cells, T cells', receptor: 'IL-6R with gp130' },
      { name: 'IL-7', fn: 'T-cell development, naive & memory T-cell survival, lymphocyte homeostasis.', source: 'Stromal cells in marrow, thymus, lymphoid tissue', receptor: 'IL-7 receptor' },
      { name: 'IL-10', fn: 'Suppresses APC activation, limits inflammation, maintains tolerance.', source: 'Tregs, Tr1, macrophages, DCs, Bregs', receptor: 'IL-10 receptor' },
      { name: 'IL-12', fn: 'Drives Th1 differentiation, supports IFN-γ production, activates NK cells.', source: 'DCs, macrophages, monocytes', receptor: 'IL-12 receptor' },
      { name: 'IL-13', fn: 'Mucus production, airway hyperreactivity, type 2 tissue responses, fibrosis/remodeling.', source: 'Th2, ILC2, mast cells, basophils', receptor: 'IL-13 receptor' },
      { name: 'IL-15', fn: 'NK-cell survival, memory CD8 T-cell maintenance, cytotoxic lymphocyte support.', source: 'DCs, macrophages, monocytes, epithelial & stromal cells', receptor: 'IL-15R (often trans-presented via IL-15Rα)' },
      { name: 'IL-17A / IL-17F', fn: 'Neutrophil recruitment, barrier defense vs. extracellular bacteria/fungi, inflammation amplification.', source: 'Th17, ILC3, γδ T cells', receptor: 'IL-17 receptor family' },
      { name: 'IL-18', fn: 'Supports IFN-γ production, works with IL-12, supports Th1/NK responses.', source: 'Macrophages, DCs, epithelial cells', receptor: 'IL-18 receptor' },
      { name: 'IL-21', fn: 'Germinal center support, B-cell help, class switching, plasma-cell differentiation, Th17 reinforcement.', source: 'Tfh, Th17, activated CD4 T cells', receptor: 'IL-21 receptor' },
      { name: 'IL-22', fn: 'Epithelial barrier repair, antimicrobial peptide production, mucosal defense.', source: 'Th17, Th22, ILC3, γδ T cells', receptor: 'IL-22R on epithelial/stromal cells' },
      { name: 'IL-23', fn: 'Maintains & expands pathogenic Th17 responses; supports chronic inflammation.', source: 'DCs, macrophages, monocytes', receptor: 'IL-23 receptor' },
      { name: 'IL-25 / IL-17E', fn: 'Activates ILC2, amplifies type 2 immunity, supports helminth defense/allergy.', source: 'Epithelial cells, tuft cells, Th2, mast cells', receptor: 'IL-17RB complex' },
      { name: 'IL-27', fn: 'Supports early Th1, suppresses Th17, promotes regulatory IL-10 responses.', source: 'DCs, macrophages, monocytes', receptor: 'IL-27 receptor' },
      { name: 'IL-31', fn: 'Itching/pruritus and allergic skin inflammation.', source: 'Th2, mast cells, activated T cells', receptor: 'IL-31 receptor' },
      { name: 'IL-33', fn: 'Alarmin for tissue damage; activates ILC2, mast cells, basophils, eosinophils, Th2.', source: 'Epithelial/endothelial cells, fibroblasts, stromal cells (on injury)', receptor: 'ST2 / IL-33 receptor' },
      { name: 'IL-35', fn: 'Immune suppression and tolerance.', source: 'Tregs, regulatory B cells, tolerogenic APCs', receptor: 'IL-35 receptor complexes' },
    ],
  },
  {
    id: 'other-cytokines',
    title: 'Other Cytokines (TGF-β, TNF, Interferons)',
    blurb: 'Regulatory, TNF-family, and interferon cytokines.',
    cols: LIGAND_COLS,
    rows: [
      { name: 'TGF-β', aka: 'Transforming growth factor beta', fn: 'Immune suppression, Treg formation, IgA switching, tissue repair, fibrosis; supports Th17 with IL-6/IL-21.', source: 'Tregs, macrophages, DCs, platelets, stromal & epithelial cells', receptor: 'TGF-β receptors' },
      { name: 'TNF-α', aka: 'Tumor necrosis factor alpha', fn: 'Endothelial activation, fever, inflammation, leukocyte recruitment, granuloma support; septic shock if excessive.', source: 'Macrophages, monocytes, DCs, NK & T cells, mast cells', receptor: 'TNFR1 and TNFR2' },
      { name: 'IFN-α / IFN-β', aka: 'Type I interferons', fn: 'Antiviral state, increased MHC I, NK-cell activation, antigen-presentation support.', source: 'Virus-infected cells, pDCs, many nucleated cells', receptor: 'Type I IFN receptor (IFNAR)' },
      { name: 'IFN-γ', aka: 'Type II interferon', fn: 'Macrophage activation, Th1 immunity, intracellular pathogen defense, ↑ MHC I & II.', source: 'NK cells, Th1, CD8 T cells, NKT cells', receptor: 'IFN-γ receptor' },
      { name: 'IFN-λ', aka: 'Type III interferons', fn: 'Mucosal antiviral defense, especially at epithelial barriers.', source: 'Epithelial cells, DCs, infected mucosal cells', receptor: 'IFN-λ receptor' },
    ],
  },
  {
    id: 'chemokines',
    title: 'Chemokines',
    blurb: 'Cytokines that direct immune-cell migration. Receptor names follow the CXCR/CCR pattern.',
    cols: LIGAND_COLS,
    rows: [
      { name: 'CXCL8 / IL-8', fn: 'Neutrophil recruitment and activation.', source: 'Macrophages, monocytes, epithelial/endothelial cells, fibroblasts', receptor: 'CXCR1, CXCR2' },
      { name: 'CCL2 / MCP-1', fn: 'Monocyte recruitment into inflamed tissues.', source: 'Macrophages, endothelial cells, fibroblasts, epithelial cells', receptor: 'CCR2' },
      { name: 'CCL3/4 (MIP-1α/β)', fn: 'Recruitment of monocytes, T cells, NK cells, inflammatory leukocytes.', source: 'Macrophages, DCs, T & NK cells', receptor: 'CCR5 (context-dependent)' },
      { name: 'CCL5 / RANTES', fn: 'Recruitment of T cells, eosinophils, basophils, monocytes, NK cells.', source: 'T cells, platelets, epithelial cells, macrophages', receptor: 'CCR5 and related' },
      { name: 'CCL11 / Eotaxin', fn: 'Eosinophil recruitment.', source: 'Epithelial/endothelial cells, fibroblasts', receptor: 'CCR3' },
      { name: 'CCL19 & CCL21', fn: 'Guide naive T cells and DCs to T-cell zones.', source: 'Stromal cells, HEVs, lymphatic endothelium', receptor: 'CCR7' },
      { name: 'CXCL9/10/11', fn: 'Recruit Th1, CD8 T cells & NK cells during IFN-γ-driven inflammation.', source: 'Macrophages, endothelial/epithelial cells, fibroblasts (after IFN-γ)', receptor: 'CXCR3' },
      { name: 'CXCL12 / SDF-1', fn: 'Bone marrow homing, stem-cell retention, lymphocyte trafficking, plasma-cell niche.', source: 'Stromal cells, marrow niche cells, endothelium', receptor: 'CXCR4' },
      { name: 'CXCL13', fn: 'Attracts B cells and Tfh cells into follicles.', source: 'Follicular DCs & stromal cells in B-cell follicles', receptor: 'CXCR5' },
      { name: 'CX3CL1 / Fractalkine', fn: 'Adhesion & migration of monocytes, NK cells, some T cells.', source: 'Endothelial cells, neurons, epithelial cells, inflamed tissue', receptor: 'CX3CR1' },
      { name: 'XCL1 / Lymphotactin', fn: 'Recruits XCR1⁺ cDC1 populations; supports cross-presentation.', source: 'NK cells, CD8 & activated T cells', receptor: 'XCR1' },
    ],
  },
  {
    id: 'growth-ligands',
    title: 'Growth & Survival Ligands',
    blurb: 'Colony-stimulating factors and survival signals for hematopoiesis and immune-cell maintenance.',
    cols: LIGAND_COLS,
    rows: [
      { name: 'G-CSF', fn: 'Neutrophil production, maturation, release, survival.', source: 'Macrophages, endothelial cells, fibroblasts, stromal cells', receptor: 'G-CSF receptor' },
      { name: 'M-CSF / CSF-1', fn: 'Monocyte/macrophage development and survival.', source: 'Stromal cells, fibroblasts, endothelial cells, macrophages', receptor: 'CSF-1 receptor' },
      { name: 'GM-CSF', fn: 'Granulocyte & macrophage production; myeloid activation; DC support.', source: 'T cells, macrophages, epithelial/endothelial cells, fibroblasts', receptor: 'GM-CSF receptor' },
      { name: 'SCF / KIT ligand', fn: 'Hematopoietic stem/progenitor support; mast-cell development & survival.', source: 'Stromal cells, endothelial cells, fibroblasts', receptor: 'KIT / CD117' },
      { name: 'FLT3 ligand', fn: 'Dendritic-cell development and hematopoietic progenitor support.', source: 'Stromal cells, T cells, marrow microenvironment', receptor: 'FLT3 / CD135' },
      { name: 'VEGF', fn: 'Angiogenesis, vascular permeability, wound healing, tumor vessel formation.', source: 'Macrophages, endothelial cells, fibroblasts, tumor & hypoxic cells', receptor: 'VEGF receptors' },
      { name: 'BAFF / BLyS', fn: 'Mature B-cell survival & maintenance; excess supports autoimmunity.', source: 'Myeloid cells, DCs, monocytes, macrophages, neutrophils, stroma', receptor: 'BAFF-R, TACI, BCMA' },
      { name: 'APRIL', fn: 'Plasma-cell survival, long-lived antibody responses, IgA support.', source: 'Myeloid cells, stromal & epithelial cells', receptor: 'TACI, BCMA' },
    ],
  },
  {
    id: 'contact-ligands',
    title: 'Membrane-Bound Contact Ligands',
    blurb: 'Cell-surface ligands that deliver costimulation, inhibition, or death signals during cell-cell contact.',
    cols: LIGAND_COLS,
    rows: [
      { name: 'MHC I–peptide', fn: 'Displays intracellular peptides to CD8 T cells.', source: 'Nearly all nucleated cells', receptor: 'TCR + CD8 coreceptor' },
      { name: 'MHC II–peptide', fn: 'Displays extracellular-derived peptides to CD4 T cells.', source: 'DCs, macrophages, B cells, activated epithelium', receptor: 'TCR + CD4 coreceptor' },
      { name: 'CD40L / CD154', fn: 'Essential help for B-cell class switching, germinal centers, memory & plasma cells; activates macrophages/DCs.', source: 'Activated CD4 T cells (esp. Tfh), some platelets', receptor: 'CD40' },
      { name: 'B7-1/B7-2 (CD80/86)', fn: 'Costimulates T cells via CD28; can inhibit via CTLA-4.', source: 'DCs, macrophages, B cells, activated APCs', receptor: 'CD28 and CTLA-4' },
      { name: 'ICOSL', fn: 'Supports Tfh differentiation, maintenance, germinal-center help.', source: 'B cells, DCs, macrophages, stromal/endothelial cells', receptor: 'ICOS' },
      { name: 'PD-L1 / PD-L2', fn: 'Inhibits T-cell activation, limits tissue damage; tolerance/exhaustion pathway.', source: 'APCs, tissue cells, tumor cells (PD-L2 mainly DCs/macrophages)', receptor: 'PD-1' },
      { name: 'FasL / CD95L', fn: 'Triggers apoptosis in Fas-expressing target cells.', source: 'Activated T cells, NK cells, immune-privileged tissues', receptor: 'Fas / CD95' },
      { name: 'OX40L', fn: 'Supports T-cell survival, expansion, memory formation.', source: 'Activated APCs (DCs, B cells, macrophages)', receptor: 'OX40 / CD134' },
      { name: '4-1BBL / CD137L', fn: 'Supports CD8 T- & NK-cell survival, proliferation, cytotoxicity.', source: 'Activated APCs, macrophages, DCs, B cells', receptor: '4-1BB / CD137' },
      { name: 'CD70', fn: 'Supports T- & B-cell activation, survival, differentiation.', source: 'Activated DCs, B cells, T cells', receptor: 'CD27' },
      { name: 'TRAIL', fn: 'Triggers apoptosis in susceptible (abnormal/stressed) cells.', source: 'NK cells, cytotoxic T cells, DCs, monocytes, some tissue cells', receptor: 'DR4 / DR5' },
    ],
  },
  {
    id: 'complement',
    title: 'Complement Fragments',
    blurb: 'Complement cleavage products acting as opsonins, anaphylatoxins, and B-cell coreceptor ligands.',
    cols: LIGAND_COLS,
    rows: [
      { name: 'C3b', fn: 'Opsonization, phagocytosis, complement amplification.', source: 'Complement activation in plasma/tissue', receptor: 'CR1 (CD35); breakdown → CR3/CR4' },
      { name: 'C4b', fn: 'Opsonization; classical/lectin C3 convertase formation.', source: 'Classical & lectin pathway activation', receptor: 'CR1 (CD35)' },
      { name: 'iC3b', fn: 'Opsonization and phagocyte binding.', source: 'Cleavage/inactivation of C3b on surfaces', receptor: 'CR3 and CR4' },
      { name: 'C3d', fn: 'B-cell coreceptor activation — lowers activation threshold.', source: 'Further breakdown of C3b/iC3b on antigen', receptor: 'CR2 / CD21' },
      { name: 'C3a', fn: 'Anaphylatoxin — inflammation, mast-cell activation, leukocyte effects.', source: 'Complement activation', receptor: 'C3a receptor' },
      { name: 'C5a', fn: 'Strong anaphylatoxin & chemoattractant; neutrophil activation/recruitment.', source: 'Complement activation', receptor: 'C5a receptor' },
    ],
  },
  {
    id: 'adhesion-ligands',
    title: 'Adhesion & Homing Ligands',
    blurb: 'Endothelial and stromal ligands that control leukocyte rolling, adhesion, and tissue homing.',
    cols: LIGAND_COLS,
    rows: [
      { name: 'ICAM-1', fn: 'Firm adhesion of leukocytes to endothelium or APCs.', source: 'Endothelial cells, APCs, inflamed tissue', receptor: 'LFA-1' },
      { name: 'VCAM-1', fn: 'Leukocyte adhesion and tissue entry during inflammation.', source: 'Activated endothelial & stromal cells', receptor: 'VLA-4' },
      { name: 'E-/P-selectin', fn: 'Leukocyte rolling on activated endothelium.', source: 'Activated endothelium; P-selectin also platelets', receptor: 'PSGL-1 and selectin ligands' },
      { name: 'PNAd', fn: 'Supports lymphocyte entry into peripheral lymph nodes.', source: 'High endothelial venules in lymph nodes', receptor: 'L-selectin / CD62L' },
      { name: 'MAdCAM-1', fn: 'Gut-associated lymphocyte homing.', source: 'Mucosal endothelium (gut-associated lymphoid tissue)', receptor: 'α4β7 integrin' },
      { name: 'S1P', fn: 'Guides lymphocyte exit from lymph nodes into lymph & blood.', source: 'Blood, lymph, endothelium (S1P gradients)', receptor: 'S1PR1' },
    ],
  },
  {
    id: 'recognition-receptors',
    title: 'Recognition Receptors (PRRs, TCR/BCR, NK)',
    blurb: 'Pattern-recognition receptors plus the antigen-specific TCR/BCR and NK recognition receptors.',
    cols: RECEPTOR_COLS,
    rows: [
      { name: 'TLRs (1–10)', fn: 'Detect microbial products; rapidly induce inflammation/cytokines. Surface TLRs sense membrane structures; endosomal TLRs (3/7/8/9) sense nucleic acids.', receptor: 'PAMPs (LPS→TLR4, flagellin→TLR5, dsRNA→TLR3, CpG→TLR9)', source: 'Innate cells, epithelium (surface or endosomes)' },
      { name: 'C-type lectin receptors (CLRs)', fn: 'Detect carbohydrate-rich microbial structures — fungi, mycobacteria, parasites.', receptor: 'Dectin-1/2, Mannose receptor, DC-SIGN, Mincle, Langerin', source: 'Cell surface of innate cells' },
      { name: 'NOD-like receptors (NLRs)', fn: 'Cytoplasmic sensors of infection/stress; inflammasome-forming NLRs (NLRP3) → caspase-1 → IL-1β, IL-18, pyroptosis. NOD1/2 sense peptidoglycan.', receptor: 'Microbial products, ATP, ROS, crystals, peptidoglycan', source: 'Cytoplasm' },
      { name: 'RIG-I-like receptors (RLRs)', fn: 'Cytoplasmic viral-RNA sensors signaling via MAVS → type I interferons.', receptor: 'Viral RNA (RIG-I, MDA5)', source: 'Cytoplasm' },
      { name: 'Cytosolic DNA sensors', fn: 'AIM2 forms an inflammasome; cGAS–STING produces cGAMP → type I IFN.', receptor: 'Cytoplasmic dsDNA', source: 'Cytoplasm / ER (STING)' },
      { name: 'Scavenger receptors', fn: 'Clearance, phagocytosis, some inflammatory signaling.', receptor: 'Modified lipids/microbial surfaces (CD36, SR-A, MARCO)', source: 'Cell surface of phagocytes' },
      { name: 'TCR', fn: 'Specific antigen recognition by T cells (signals via CD3).', receptor: 'Peptide–MHC (coreceptor CD4 or CD8)', source: 'T cells' },
      { name: 'BCR', fn: 'Specific native-antigen recognition by B cells (signals via Igα/Igβ).', receptor: 'Native/intact antigen (coreceptor CD19/CD21/CD81)', source: 'B cells' },
      { name: 'NKG2D', fn: 'Activating NK receptor — detects stress ligands, promotes killing.', receptor: 'Stress-induced ligands', source: 'NK cells, some T cells' },
      { name: 'Natural cytotoxicity receptors', fn: 'Activating — promote NK recognition & killing of abnormal cells.', receptor: 'Ligands on stressed/abnormal cells (NKp30/44/46)', source: 'NK cells' },
      { name: 'KIRs', fn: 'Mainly inhibitory — recognize MHC I to prevent killing of healthy cells.', receptor: 'MHC I', source: 'NK cells' },
      { name: 'NKG2A', fn: 'Inhibitory NK receptor supporting tolerance to healthy cells.', receptor: 'MHC-related ligands (HLA-E)', source: 'NK cells' },
    ],
  },
  {
    id: 'fc-complement-receptors',
    title: 'Fc & Complement Receptors',
    blurb: 'Receptors that bind antibody Fc regions and complement-coated targets.',
    cols: RECEPTOR_COLS,
    rows: [
      { name: 'Fcγ receptors', fn: 'Phagocytosis, ADCC, activation/inhibition by subtype.', receptor: 'IgG', source: 'Macrophages, neutrophils, NK cells' },
      { name: 'FcγRIII / CD16', fn: 'NK-cell antibody-dependent cellular cytotoxicity (ADCC).', receptor: 'IgG on antibody-coated targets', source: 'NK cells, some myeloid cells' },
      { name: 'FcεRI', fn: 'Mast-cell & basophil activation; allergy, anaphylaxis, parasite defense.', receptor: 'IgE', source: 'Mast cells, basophils' },
      { name: 'FcεRII / CD23', fn: 'Low-affinity IgE receptor — IgE regulation & allergic responses.', receptor: 'IgE', source: 'B cells, other immune cells' },
      { name: 'FcαR', fn: 'Mucosal immune responses and phagocyte activation.', receptor: 'IgA', source: 'Phagocytes, mucosal cells' },
      { name: 'FcRn', fn: 'IgG recycling, prolonged half-life, placental IgG transfer.', receptor: 'IgG', source: 'Endothelium, epithelium, placenta' },
      { name: 'CR1 / CD35', fn: 'Immune-complex clearance and complement regulation.', receptor: 'C3b, C4b', source: 'Phagocytes, RBCs, B cells' },
      { name: 'CR2 / CD21', fn: 'B-cell coreceptor that enhances B-cell activation.', receptor: 'C3d', source: 'B cells' },
      { name: 'CR3 / CR4', fn: 'Phagocytosis and leukocyte adhesion to complement-coated targets.', receptor: 'iC3b', source: 'Myeloid cells' },
    ],
  },
  {
    id: 'costim-inhibitory-receptors',
    title: 'Costimulatory & Inhibitory Receptors',
    blurb: 'The "second signal" and checkpoint receptors — central to immunotherapy.',
    cols: RECEPTOR_COLS,
    rows: [
      { name: 'CD28', fn: 'Primary T-cell costimulation (signal 2).', receptor: 'CD80 / CD86', source: 'T cells' },
      { name: 'ICOS', fn: 'Tfh differentiation, maintenance, germinal-center help.', receptor: 'ICOSL', source: 'Activated T cells' },
      { name: 'CD40', fn: 'B-cell class switching, germinal centers, memory & plasma cells; activates macrophages/DCs.', receptor: 'CD40L / CD154', source: 'B cells, macrophages, DCs' },
      { name: 'OX40 / CD134', fn: 'T-cell survival, expansion, memory formation.', receptor: 'OX40L', source: 'Activated T cells' },
      { name: '4-1BB / CD137', fn: 'CD8 T- & NK-cell survival, proliferation, cytotoxicity.', receptor: '4-1BBL / CD137L', source: 'Activated T & NK cells' },
      { name: 'CD27', fn: 'T- & B-cell activation, survival, differentiation.', receptor: 'CD70', source: 'T & B cells' },
      { name: 'CTLA-4', fn: 'Inhibits early T-cell activation by outcompeting CD28; strips B7 from APCs. Checkpoint target.', receptor: 'CD80 / CD86', source: 'Tregs, activated T cells' },
      { name: 'PD-1', fn: 'Suppresses proliferation, cytokines & effector function; exhaustion marker. Checkpoint target.', receptor: 'PD-L1 / PD-L2', source: 'Activated/exhausted T cells' },
      { name: 'LAG-3', fn: 'Inhibitory checkpoint involved in T-cell regulation/exhaustion.', receptor: 'MHC II and others', source: 'T cells' },
      { name: 'TIM-3', fn: 'Inhibitory/exhaustion-associated receptor in chronic stimulation.', receptor: 'Galectin-9, others', source: 'T cells, myeloid cells' },
      { name: 'TIGIT', fn: 'Inhibitory receptor restraining T cells and NK cells.', receptor: 'CD155/CD112', source: 'T & NK cells' },
    ],
  },
  {
    id: 'migration-receptors',
    title: 'Chemokine & Homing Receptors',
    blurb: 'Receptors that read chemokine and adhesion gradients to position immune cells. Includes the two HIV coreceptors.',
    cols: RECEPTOR_COLS,
    rows: [
      { name: 'CXCR1 / CXCR2', fn: 'Neutrophil recruitment.', receptor: 'CXCL8 / IL-8', source: 'Neutrophils' },
      { name: 'CCR7', fn: 'Lymph-node homing and movement to T-cell zones.', receptor: 'CCL19, CCL21', source: 'Naive T cells, DCs' },
      { name: 'CXCR5', fn: 'B-cell follicle migration and Tfh localization.', receptor: 'CXCL13', source: 'B cells, Tfh' },
      { name: 'CXCR4', fn: 'Bone-marrow homing and hematopoiesis. HIV coreceptor (X4 strains).', receptor: 'CXCL12 / SDF-1', source: 'Broad — lymphocytes, progenitors' },
      { name: 'CCR5', fn: 'Inflammatory trafficking & Th1 recruitment. HIV coreceptor (R5 strains).', receptor: 'CCL3/4/5', source: 'T cells, macrophages' },
      { name: 'CCR3', fn: 'Eosinophil recruitment.', receptor: 'CCL11 / eotaxin', source: 'Eosinophils' },
      { name: 'CX3CR1', fn: 'Monocyte/NK/T-cell adhesion & migration in vascular inflammation.', receptor: 'CX3CL1 / fractalkine', source: 'Monocytes, NK, some T cells' },
      { name: 'XCR1', fn: 'cDC1 positioning and cross-presentation coordination.', receptor: 'XCL1 / lymphotactin', source: 'cDC1 dendritic cells' },
      { name: 'CCR4', fn: 'Th2/Treg trafficking, esp. allergic & skin inflammation.', receptor: 'CCL17, CCL22', source: 'Th2, Treg' },
      { name: 'CCR6', fn: 'Th17 and mucosal/barrier immune trafficking.', receptor: 'CCL20', source: 'Th17, mucosal cells' },
      { name: 'CCR9', fn: 'Small-intestine homing.', receptor: 'CCL25', source: 'Gut-homing lymphocytes' },
      { name: 'CCR10', fn: 'Skin and mucosal homing.', receptor: 'CCL27, CCL28', source: 'Skin/mucosal lymphocytes' },
      { name: 'L-selectin / CD62L', fn: 'Lymph-node entry through high endothelial venules.', receptor: 'PNAd', source: 'Naive lymphocytes' },
      { name: 'LFA-1', fn: 'Firm adhesion to endothelium/APCs and migration.', receptor: 'ICAMs', source: 'Most leukocytes' },
      { name: 'VLA-4', fn: 'Endothelial adhesion and tissue migration.', receptor: 'VCAM-1', source: 'Lymphocytes, monocytes' },
      { name: 'α4β7 integrin', fn: 'Gut homing of lymphocytes.', receptor: 'MAdCAM-1', source: 'Gut-homing lymphocytes' },
      { name: 'S1PR1', fn: 'Lymphocyte exit from lymph nodes into lymph & blood.', receptor: 'S1P', source: 'Lymphocytes' },
    ],
  },
];
