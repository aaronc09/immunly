import { Module } from '../types';

const module3: Module = {
  id: 'mod3',
  number: 3,
  title: 'When It Goes Wrong',
  subtitle: 'Autoimmunity, allergies, immunodeficiency & cancer evasion',
  emoji: '⚠️',
  color: '#DC2626',
  lessons: [
    {
      id: 'mod3-l1',
      title: 'Autoimmunity: Self-Attack',
      emoji: '🔄',
      duration: '9 min',
      sections: [
        {
          type: 'text',
          heading: 'When Tolerance Fails',
          body: 'Roughly 5% of Americans suffer from some form of autoimmune disease — over 80 distinct conditions where the immune system attacks the body\'s own tissues. The fundamental problem is a breakdown of self-tolerance: the mechanisms that normally ensure T and B cells don\'t attack self-antigens.',
        },
        {
          type: 'comparison',
          heading: 'Two Layers of Tolerance That Can Break',
          leftHeader: 'Central Tolerance',
          rightHeader: 'Peripheral Tolerance',
          rows: [
            { left: 'Occurs in primary lymphoid organs (thymus, bone marrow)', right: 'Occurs in tissues and secondary lymphoid organs' },
            { left: 'T cells: negative selection in thymus eliminates strongly self-reactive clones', right: 'CTLA-4 upregulated ~2 days after activation competes with CD28, suppressing further stimulation' },
            { left: 'B cells: self-reactive BCRs trigger receptor editing or deletion in bone marrow', right: 'PD-1 / PD-L1 pathway exhausts chronically activated T cells in tissues' },
            { left: 'Imperfect — some self-reactive cells escape', right: 'Tregs suppress escaped autoreactive cells via IL-10, TGF-β, and CTLA-4-mediated B7 stripping' },
            { left: 'AIRE protein in thymus presents peripheral antigens for deletion', right: 'AICD (activation-induced cell death) eliminates persistently stimulated T cells' },
          ],
        },
        {
          type: 'flipcard',
          heading: 'Autoimmune Disease Examples — Tap to Learn',
          instruction: 'Tap each disease to see what is attacked and why.',
          cards: [
            {
              front: 'Rheumatoid Arthritis (RA)',
              back: 'The immune system attacks synovial joints. CD4+ T cells, macrophages, and autoantibodies (rheumatoid factor, anti-CCP) drive joint inflammation and destruction. HLA-DR4 is a major genetic risk factor. Treated with TNF inhibitors.',
            },
            {
              front: 'Type 1 Diabetes (T1D)',
              back: 'CD8+ cytotoxic T cells destroy insulin-producing pancreatic β cells. Once destroyed, these cells cannot regenerate — requiring lifelong insulin therapy. Strong HLA-DR3/DR4 genetic risk.',
            },
            {
              front: 'Multiple Sclerosis (MS)',
              back: 'Autoreactive T cells and antibodies attack myelin — the insulating sheath around nerve axons. Demyelination disrupts nerve signal conduction, causing muscle weakness, vision loss, and other neurological symptoms.',
            },
            {
              front: 'Systemic Lupus Erythematosus (SLE)',
              back: 'A multi-organ disease where autoantibodies (especially anti-dsDNA, anti-Smith) target nuclear antigens. Immune complexes deposit in kidneys, joints, and skin. Overactivated pDCs producing chronic IFN-α are strongly implicated.',
            },
          ],
        },
        {
          type: 'timeline',
          heading: 'Molecular Mimicry: An Autoimmune Trigger',
          steps: [
            { label: 'Infection occurs', detail: 'A pathogen (e.g., Streptococcus bacteria) infects the body and triggers a normal immune response.' },
            { label: 'Molecular mimicry', detail: 'The pathogen carries epitopes (surface structures) that structurally resemble self-antigens (e.g., heart valve proteins in Strep mimicking cardiac myosin).' },
            { label: 'Cross-reactive response', detail: 'T cells and antibodies made against the pathogen cross-react with the similar self-antigen.' },
            { label: 'Tissue damage', detail: 'The immune system attacks the host\'s own tissue — in this case, causing rheumatic fever and heart valve damage after Strep throat infection.' },
          ],
        },
        {
          type: 'highlight',
          label: '💊 Treatment Challenge',
          text: 'Current therapies broadly suppress immunity (corticosteroids, methotrexate, anti-TNF biologics, rituximab) — reducing damage but increasing infection risk. Next-generation approaches aim for antigen-specific tolerance: re-educating the immune system to ignore the specific self-antigen without global suppression.',
          color: '#DC2626',
        },
      ],
    },
    {
      id: 'mod3-l2',
      title: 'Allergies: Type 2 Immunity',
      emoji: '🤧',
      duration: '8 min',
      sections: [
        {
          type: 'text',
          heading: 'Type 2 Immunity and Its Dark Side',
          body: 'Type 2 immunity evolved to fight parasites (helminths). It is orchestrated by Th2 cells, ILC2s, mast cells, basophils, and eosinophils, communicating via IL-4, IL-5, IL-13, and IgE. In modern environments with fewer parasites, this system sometimes misfires — treating harmless antigens (pollen, peanuts, dust mites) as threats. This is allergy.',
        },
        {
          type: 'timeline',
          heading: 'How Allergy Develops: Two Phases',
          steps: [
            { label: 'Sensitization', detail: 'First exposure to allergen: Th2 cells form and produce IL-4, which drives B cells to class switch to IgE. IgE antibodies are produced and coat mast cells and basophils via Fc-epsilon-RI receptors. No symptoms yet — the immune system is "armed."' },
            { label: 'Early Phase (seconds–minutes)', detail: 'Re-exposure: allergen cross-links IgE on mast cells → immediate degranulation. Histamine → vasodilation, itch, mucus. Prostaglandins and leukotrienes → bronchoconstriction. Rapid onset; treated with antihistamines and epinephrine.' },
            { label: 'Late Phase (4–24 hrs later)', detail: 'Cytokines released from mast cells (IL-4, IL-13, TNF-α) recruit eosinophils, Th2 cells, and basophils. IL-5 from Th2/ILC2 activates eosinophils. Eosinophil degranulation causes tissue damage. This late phase underlies chronic inflammation in asthma.' },
            { label: 'Chronic Allergy/Asthma', detail: 'Repeated allergen exposure → persistent Th2 inflammation. IL-13 → airway hyperreactivity + mucus hypersecretion. Fibrosis and airway remodeling. IL-31 causes itching in atopic dermatitis.' },
          ],
        },
        {
          type: 'comparison',
          heading: 'Key Cytokines in Type 2 Immunity',
          leftHeader: 'Cytokine (Source)',
          rightHeader: 'Effect',
          rows: [
            { left: 'IL-4 (Th2, mast cells, ILC2)', right: 'Th2 differentiation; IgE class switching; alternative macrophage activation' },
            { left: 'IL-5 (Th2, ILC2)', right: 'Eosinophil production, survival, activation, and recruitment' },
            { left: 'IL-13 (Th2, ILC2, mast cells)', right: 'Mucus production, airway hyperreactivity, goblet cell differentiation, fibrosis' },
            { left: 'IL-25 / IL-17E (epithelial cells, tuft cells)', right: 'Activates ILC2 — amplifies type 2 responses' },
            { left: 'IL-33 (epithelial, stromal cells)', right: 'Alarmin released by damage; activates ILC2, mast cells, basophils — powerful amplifier' },
            { left: 'IL-31 (Th2, mast cells)', right: 'Pruritus (itching) — major driver of atopic dermatitis symptoms' },
          ],
        },
        {
          type: 'highlight',
          label: '🆕 Modern Biologics for Allergy',
          text: 'Dupilumab (anti-IL-4Rα — blocks both IL-4 and IL-13 signaling) has revolutionized treatment of severe atopic dermatitis and asthma. Mepolizumab (anti-IL-5) treats eosinophilic asthma. Omalizumab (anti-IgE) captures free IgE before it can arm mast cells.',
          color: '#D97706',
        },
      ],
    },
    {
      id: 'mod3-l3',
      title: 'HIV & Immunodeficiency',
      emoji: '🔓',
      duration: '9 min',
      sections: [
        {
          type: 'text',
          heading: 'HIV: The Ultimate Immune Saboteur',
          body: 'HIV (Human Immunodeficiency Virus) is a retrovirus that specifically targets CD4+ helper T cells — the master coordinators of adaptive immunity. By progressively depleting CD4+ T cells, HIV dismantles the immune system from the top down, eventually leaving the body unable to fight off even normally harmless infections.',
        },
        {
          type: 'timeline',
          heading: 'How HIV Destroys Immunity',
          steps: [
            { label: 'HIV Entry', detail: 'HIV binds CD4 on helper T cells using its gp120 envelope protein. It then uses a co-receptor — CCR5 (R5-tropic) or CXCR4 (X4-tropic) — to enter the cell. CCR5 is the primary co-receptor for sexual transmission.' },
            { label: 'Reverse Transcription', detail: 'HIV\'s RNA genome is converted to DNA by reverse transcriptase — an error-prone enzyme that introduces mutations, driving viral diversity and drug resistance.' },
            { label: 'Integration', detail: 'HIV DNA integrates into the host genome as a provirus using integrase. It can remain latent for years — invisible to the immune system. This is why HIV cannot be cured by current antiretrovirals.' },
            { label: 'CD4+ T Cell Depletion', detail: 'Over years, HIV kills CD4+ T cells (during active replication and by immune clearance). Normal CD4 count: 500–1500 cells/µL. Without treatment, counts fall progressively.' },
            { label: 'AIDS', detail: 'AIDS is defined as CD4 count < 200 cells/µL or the occurrence of AIDS-defining opportunistic infections. With CD4 counts this low, patients are vulnerable to infections that healthy immune systems control effortlessly.' },
          ],
        },
        {
          type: 'flipcard',
          heading: 'Opportunistic Infections — Tap to Learn',
          instruction: 'These infections are harmless in healthy people but lethal in immunocompromised patients.',
          cards: [
            {
              front: 'Pneumocystis jirovecii Pneumonia (PCP)',
              back: 'A fungal pneumonia that is the most common AIDS-defining illness in developed countries. Rare in immunocompetent individuals. Treated with trimethoprim-sulfamethoxazole. Occurs when CD4 count < 200 cells/µL.',
            },
            {
              front: 'Toxoplasmosis',
              back: 'Toxoplasma gondii (a parasite, often from cat feces or undercooked meat) causes brain abscess in AIDS patients. In healthy people, it causes no symptoms or mild flu-like illness. Occurs when CD4 < 100 cells/µL.',
            },
            {
              front: 'Cytomegalovirus (CMV) Retinitis',
              back: 'CMV infects ~50–80% of adults worldwide but causes no symptoms in healthy people. In AIDS patients, CMV destroys the retina, causing blindness. Treated with ganciclovir. Occurs when CD4 < 50 cells/µL.',
            },
            {
              front: 'Cryptococcal Meningitis',
              back: 'Cryptococcus neoformans (environmental fungus) causes life-threatening meningitis in immunocompromised patients. The body normally controls it; without CD4 T cell help, it proliferates in the CNS.',
            },
          ],
        },
        {
          type: 'comparison',
          heading: 'Primary vs. Secondary Immunodeficiency',
          leftHeader: 'Primary (Genetic)',
          rightHeader: 'Secondary (Acquired)',
          rows: [
            { left: 'Present from birth — genetic mutation', right: 'Develops later in life' },
            { left: 'SCID: Both T and B cell development fail (X-linked SCID: IL-2Rγ mutation)', right: 'HIV/AIDS: progressive CD4+ T cell loss' },
            { left: 'DiGeorge syndrome: thymus doesn\'t develop', right: 'Malnutrition (impairs all immune cell production)' },
            { left: 'Bruton\'s agammaglobulinemia: no B cells (BTK mutation)', right: 'Chemotherapy: suppresses bone marrow' },
            { left: 'Treatment: bone marrow transplant or gene therapy', right: 'Treatment: antiretrovirals, address underlying cause' },
          ],
        },
      ],
    },
    {
      id: 'mod3-l4',
      title: 'Cancer Immune Evasion',
      emoji: '🕵️',
      duration: '8 min',
      sections: [
        {
          type: 'text',
          heading: 'How Tumors Hide From Immunity',
          body: 'The immune system can and does kill cancer cells — this is called immunosurveillance. Tumors that grow successfully have evolved multiple strategies to evade detection and disable immune responses. Understanding these evasion mechanisms has led to breakthrough immunotherapies.',
        },
        {
          type: 'flipcard',
          heading: 'Tumor Evasion Strategies — Tap to Reveal',
          instruction: 'Each mechanism is a potential target for cancer immunotherapy.',
          cards: [
            {
              front: 'PD-L1 Upregulation',
              back: 'Tumor cells upregulate PD-L1 (programmed death-ligand 1) on their surface. This binds PD-1 on tumor-infiltrating T cells → T cell exhaustion and suppressed killing. This is the target of checkpoint inhibitor drugs like pembrolizumab (anti-PD-1).',
            },
            {
              front: 'MHC I Downregulation',
              back: 'To hide from cytotoxic T cells, tumors downregulate or mutate MHC I molecules — reducing display of tumor peptides. Without MHC I display, CD8+ T cells cannot recognize and kill the tumor cell. However, this makes tumor cells vulnerable to NK cells (missing self).',
            },
            {
              front: 'Immunosuppressive Tumor Microenvironment',
              back: 'Tumors recruit Tregs and myeloid-derived suppressor cells (MDSCs) that produce IL-10 and TGF-β, suppressing all nearby immune activity. Tumor-associated macrophages often take an anti-inflammatory "M2" phenotype that promotes tumor growth rather than killing.',
            },
            {
              front: 'Antigen Loss / Editing',
              back: 'Under immune pressure, tumor cells that express neoantigens (tumor-specific peptides) are killed. Cells that mutate to lose these antigens escape. Over time, the surviving tumor population has reduced immunogenicity — "immune editing."',
            },
            {
              front: 'CTLA-4 Exploitation',
              back: 'CTLA-4 on T cells competes with CD28 for B7 binding, dampening T cell activation. Tumors can exploit this natural brake. Anti-CTLA-4 drugs (e.g., ipilimumab) block this interaction, releasing the brake on T cell activation in lymph nodes.',
            },
          ],
        },
        {
          type: 'highlight',
          label: '🏆 Why This Changed Medicine',
          text: 'Checkpoint inhibitors (anti-PD-1, anti-CTLA-4) have produced durable remissions in previously untreatable cancers like metastatic melanoma and non-small cell lung cancer. James Allison and Tasuku Honjo won the 2018 Nobel Prize in Physiology or Medicine for discovering these pathways.',
          color: '#7C3AED',
        },
        {
          type: 'timeline',
          heading: 'The Three "Es" of Cancer Immunoediting',
          steps: [
            { label: 'Elimination', detail: 'Immune system destroys nascent tumor cells bearing neoantigens. Immunosurveillance is working effectively. Most potential tumors are eliminated at this stage.' },
            { label: 'Equilibrium', detail: 'Some tumor cells evade elimination through early evasion mechanisms. The immune system and tumor are in a dynamic balance — tumor growth is controlled but not eliminated. This phase can last years.' },
            { label: 'Escape', detail: 'Tumor cells with accumulated evasion adaptations (PD-L1 up, MHC I down, Tregs recruited, antigens lost) break free from immune control and grow into a clinically detectable cancer.' },
          ],
        },
      ],
    },
  ],
  quiz: [
    {
      id: 'm3q1',
      question: 'CTLA-4 is an inhibitory receptor on T cells. How does it suppress immune responses?',
      options: [
        'It binds PD-L1 on tumor cells to directly kill them',
        'It competes with CD28 for B7 (CD80/CD86) binding on APCs, reducing costimulatory signal and — via Tregs — physically strips B7 from APCs',
        'It blocks TCR signaling by dephosphorylating CD3 chains',
        'It induces apoptosis in activated T cells by binding Fas',
      ],
      correctIndex: 1,
      explanation: 'CTLA-4 has higher affinity for B7 (CD80/CD86) than CD28. By binding B7, it outcompetes CD28 and reduces costimulation. Tregs highly express CTLA-4 and use it to physically "strip" B7 from APC surfaces, reducing their ability to activate other T cells.',
    },
    {
      id: 'm3q2',
      question: 'In IgE-mediated allergy, what triggers immediate mast cell degranulation upon re-exposure to allergen?',
      options: [
        'Complement activation by IgE immune complexes',
        'IL-5 binding to IL-5 receptors on mast cells',
        'Allergen cross-linking IgE molecules already bound to Fc-epsilon-RI on mast cells',
        'TLR activation by allergen PAMPs',
      ],
      correctIndex: 2,
      explanation: 'After sensitization, mast cells are coated with allergen-specific IgE bound to Fc-epsilon-RI. When allergen re-enters the body, it cross-links these surface IgE molecules, triggering immediate mast cell degranulation — releasing histamine, prostaglandins, and leukotrienes.',
    },
    {
      id: 'm3q3',
      question: 'Why does HIV specifically devastate adaptive immunity even though it infects relatively few cells?',
      options: [
        'HIV directly infects and destroys all bone marrow stem cells',
        'HIV infects CD4+ helper T cells — the coordinators of adaptive responses — progressively collapsing both humoral and cell-mediated immunity',
        'HIV destroys B cells, preventing antibody production',
        'HIV infects macrophages and prevents phagocytosis entirely',
      ],
      correctIndex: 1,
      explanation: 'CD4+ helper T cells are the master coordinators of adaptive immunity — they license APCs, help B cells, and support CD8 T cell responses. Their progressive depletion by HIV causes a cascading failure of both humoral and cell-mediated immunity, even though HIV infects a relatively small fraction of total immune cells.',
    },
    {
      id: 'm3q4',
      question: 'A tumor cell downregulates MHC I expression. What is the immunological consequence?',
      options: [
        'B cells produce more antibodies against the tumor',
        'NK cells become inhibited because they require MHC I to kill',
        'CD8+ T cells cannot recognize and kill the tumor, but the tumor becomes more vulnerable to NK cells via "missing self"',
        'Macrophages phagocytose the tumor more efficiently',
      ],
      correctIndex: 2,
      explanation: 'MHC I downregulation hides tumor peptides from CD8+ cytotoxic T cells. However, NK cells use inhibitory receptors (KIR, NKG2A) that detect MHC I — low MHC I removes the inhibitory signal, making the tumor vulnerable to NK cell killing. This is why both CTL and NK responses are needed.',
    },
  ],
};

export default module3;
