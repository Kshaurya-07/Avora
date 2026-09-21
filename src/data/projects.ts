import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'vyne',
    title: 'VYNE',
    subtitle: 'Luxury Botanical Identity & Packaging System',
    category: 'BRANDING',
    year: '2024',
    role: 'Brand Identity & Art Direction',
    deliverables: ['Visual Identity', 'Packaging System', 'Typography Architecture', 'Brand Guidelines'],
    heroImage: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1608248597359-00e932454a39?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1200&auto=format&fit=crop',
    ],
    accentColor: '#A855F7',
    featured: true,
    brief: {
      problem: 'VYNE required a luxury visual identity to break through the crowded organic fragrance and botanical space with high-end editorial gravitas.',
      objective: 'Establish a minimalist yet tactile identity system balancing rare botanical heritage with avant-garde French perfumery aesthetics.',
    },
    approach: {
      concept: 'The dialogue between organic flora contours and precision architectural grids.',
      strategy: 'We crafted a bespoke high-contrast serif wordmark paired with blind embossed tactile packaging, muted neutral palettes, and metallic holographic foil accents.',
    },
    process: [
      { step: '01 Discovery', description: 'Deconstructed 40+ historic French atelier apothecary marks and modern luxury fragrance packaging.' },
      { step: '02 Gridding', description: 'Engineered a geometric golden-ratio wordmark with delicate ligature cuts and custom punctuation.' },
      { step: '03 Materiality', description: 'Tested 18 tactile cotton papers, frosted fluted glass bottles, and deep blind deboss techniques.' },
      { step: '04 Guidelines', description: 'Delivered a 96-page comprehensive brand manual covering digital, retail, and print architecture.' }
    ],
    outcome: {
      summary: 'A unified luxury identity that elevated the brand into premier European department stores and international boutique retailers.',
      highlights: [
        'Custom bespoke serif display typography',
        'Refillable glass packaging system with 60% less environmental footprint',
        'Award-winning unboxing experience and tactile stationery kit'
      ]
    },
    liveUrl: 'https://vyne-atelier.example.com'
  },
  {
    id: 'street-theory',
    title: 'STREET THEORY',
    subtitle: 'Heavyweight Graphic Apparel & Streetwear Collection',
    category: 'APPAREL',
    year: '2024',
    role: 'Apparel Design & Creative Direction',
    deliverables: ['Garment Silhouettes', 'Screen Print Graphics', 'Woven Labels & Hangtags', 'Lookbook Direction'],
    heroImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
    ],
    accentColor: '#18181B',
    featured: true,
    brief: {
      problem: 'Standard streetwear often relies on repetitive fast-fashion tropes. STREET THEORY sought to merge underground brutalism with luxury heavyweight tailoring.',
      objective: 'Design a limited capsule collection of 480gsm French terry hoodies, boxy oversized tees, and detailed industrial silicone print graphics.',
    },
    approach: {
      concept: 'Architectural blueprints collision with anti-establishment punk collage aesthetics.',
      strategy: 'We developed asymmetrical back-print diagrams, high-density puff ink techniques, custom gunmetal eyelets, and tear-resistant tyvek internal label systems.',
    },
    process: [
      { step: '01 Fit Patterning', description: 'Developed custom boxy silhouettes with dropped shoulders and cropped hems.' },
      { step: '02 Graphic Placement', description: 'Calibrated oversized back prints, spine coordinates, and micro wrist typography.' },
      { step: '03 Technique Testing', description: 'Prototyped discharge printing, crackle inks, and reflective 3M heat transfers.' },
      { step: '04 Packaging', description: 'Engineered matte vacuum-sealed silver foil bags and custom industrial hangtags.' }
    ],
    outcome: {
      summary: 'The debut 8-piece capsule sold out within 4 minutes of launch, garnering features across prominent contemporary streetwear channels.',
      highlights: [
        '8 unique screen-printed and embroidered garments',
        'Zero-waste custom pattern engineering',
        'Custom engraved hardware and industrial woven labels'
      ]
    }
  },
  {
    id: 'musivo',
    title: 'MUSIVO',
    subtitle: 'Spatial Audio Streaming UI/UX & Web Interface',
    category: 'UI/UX',
    year: '2024',
    role: 'Product Designer & Design System Architect',
    deliverables: ['Design System', 'Mobile App (iOS/Android)', 'Desktop Player', 'Interactive Prototypes'],
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    ],
    accentColor: '#38BDF8',
    featured: true,
    brief: {
      problem: 'Conventional audio players are cluttered with algorithmic carousels that strip away the emotional intimacy of album listening.',
      objective: 'Create a spatial, visual-first digital audio player celebrating vinyl-style artwork, lossless visualizers, and tactile playback controls.',
    },
    approach: {
      concept: 'A fluid physical turntable aesthetic translated into a minimalist, refractive digital canvas.',
      strategy: 'Engineered a dynamic glass interface where album art color harmonies generate real-time atmospheric ambient lighting.',
    },
    process: [
      { step: '01 User Research', description: 'Interviewed 35 audiophiles, vinyl collectors, and studio mastering engineers.' },
      { step: '02 Information Arch', description: 'Eliminated nested menus in favor of a 2-tap discovery and queue gesture system.' },
      { step: '03 Component System', description: 'Built 140+ reactive components with fluid light/dark adaptation tokens.' },
      { step: '04 Micro-Interactions', description: 'Designed physics-based scrubbers and spatial panning controls.' }
    ],
    outcome: {
      summary: 'Redefined digital music exploration with a 94% customer delight score and an average daily listening session time increase of 48%.',
      highlights: [
        'Spatial audio canvas with real-time waveform visualization',
        'Figma Tokens integrated with React/React Native styling',
        'Sub-16ms tactile interaction feedback'
      ]
    },
    liveUrl: 'https://musivo-audio.example.com'
  },
  {
    id: 'vitbites',
    title: 'VITBITES',
    subtitle: 'Organic Superfood E-Commerce Platform & Experience',
    category: 'WEB',
    year: '2024',
    role: 'Web Design & Full-Stack Creative Frontend',
    deliverables: ['Custom E-Commerce UX', '3D Ingredient Explorer', 'React / Next.js Development', 'Micro-Interactions'],
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1200&auto=format&fit=crop',
    ],
    accentColor: '#10B981',
    featured: true,
    brief: {
      problem: 'Wellness supplement storefronts look sterile and clinical or cheap and unconvincing.',
      objective: 'Design and develop an organic, tactile e-commerce flagship with 3D nutrient exploration and lightning-fast checkout.',
    },
    approach: {
      concept: 'Sunlit earth tones meets contemporary luxury editorial layouts and silky smooth scrolling.',
      strategy: 'Built an interactive 3D particle and ingredient viewer that breaks down bio-availability visually as the user scrolls.',
    },
    process: [
      { step: '01 Wireframing', description: 'Mapped out high-converting single-page checkout flows.' },
      { step: '02 Visual Craft', description: 'Art-directed macro photography with soft warm sunlight and natural linen textures.' },
      { step: '03 Code Execution', description: 'Engineered custom headless Shopify storefront with Next.js and Three.js.' },
      { step: '04 Optimization', description: 'Achieved 99/100 Google Lighthouse performance score.' }
    ],
    outcome: {
      summary: 'A 240% increase in checkout conversions and an Awwwards Site of the Day honor.',
      highlights: [
        'Sub-second page transitions and headless architecture',
        'Interactive 3D ingredient breakdown',
        'Custom modular design system'
      ]
    },
    liveUrl: 'https://vitbites-wellness.example.com'
  },
  {
    id: 'kinesis',
    title: 'KINESIS',
    subtitle: 'Experimental Kinetic Typography & Poster Series',
    category: 'GRAPHICS',
    year: '2024',
    role: 'Graphic Designer & Visual Artist',
    deliverables: ['Poster Architecture', 'Motion Typography', 'Silkscreen Prints', 'Digital Exhibition'],
    heroImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    ],
    accentColor: '#F472B6',
    brief: {
      problem: 'Investigating the tension between static editorial poster grids and kinetic digital animation in contemporary art.',
      objective: 'Create an 18-piece series exploring physical distortion, optical refraction, and mechanical typesetting.',
    },
    approach: {
      concept: 'Deconstructed language transformed into kinetic geometry.',
      strategy: 'Combined algorithmic glitched glyphs with manual analog scanner drags and traditional silver ink silkscreening.',
    },
    process: [
      { step: '01 Typography Matrix', description: 'Designed 3 experimental variable font weights based on Swiss modernist principles.' },
      { step: '02 Analog Distortion', description: 'Scanned typography across moving flatbed sensors to capture physical motion blur.' },
      { step: '03 Vector Hybridization', description: 'Digitized distortion curves into ultra-sharp mathematical vector bezier paths.' }
    ],
    outcome: {
      summary: 'Exhibited in digital galleries across Tokyo, Berlin, and London, with limited museum-grade prints.',
      highlights: [
        '18 silkscreen and archival pigment posters',
        'Interactive WebGL kinetic typography sandbox',
        'Custom variable font family'
      ]
    }
  },
  {
    id: 'aura-studio',
    title: 'AURA STUDIO',
    subtitle: 'High-Fashion Editorial Digital Magazine & Archive',
    category: 'WEB',
    year: '2023',
    role: 'Digital Art Director & Frontend Developer',
    deliverables: ['Editorial Web Layouts', 'Curated Archive', 'Micro-Interactions', 'Custom CMS'],
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600&auto=format&fit=crop',
    secondaryImages: [
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop',
    ],
    accentColor: '#60A5FA',
    brief: {
      problem: 'High-fashion houses rarely capture the tactile sensuality of printed editorial pages in web formats.',
      objective: 'Create an editorial web experience with asymmetrical magazine pacing, continuous smooth scroll, and cursor magnetism.',
    },
    approach: {
      concept: 'The tactile elegance of Vogue Italia meets progressive digital architecture.',
      strategy: 'Large serif typography, ultra-fine 0.5px hairline borders, and subtle page transitions simulating turning matte heavyweight paper.',
    },
    process: [
      { step: '01 Editorial Art Direction', description: 'Established asymmetric typography grids and whitespace rhythms.' },
      { step: '02 Interaction Choreography', description: 'Orchestrated staggered image reveals and magnetic cursor feedback.' },
      { step: '03 Architecture', description: 'Built with React and custom CSS grid layers for responsive elegance.' }
    ],
    outcome: {
      summary: 'A digitally revered publication platform celebrated by global design communities.',
      highlights: [
        'Over 1.2M editorial page views in the first quarter',
        'Honorable Mention on Awwwards and CSS Design Awards',
        'Custom digital typography scale'
      ]
    },
    liveUrl: 'https://aura-studio.example.com'
  }
];
