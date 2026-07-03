// All TMS content from the 2026 Company Profile & Capability Deck.
// Single source of truth — every page pulls from here.

export const company = {
  name: 'TMS',
  long: 'Technology for Manufacturing Solutions',
  tagline: 'From metal into masterpieces.',
  founded: 2018,
  phone: '010 44242888',
  phoneIntl: '+201044242888',
  whatsapp: '201044242888',
  email: 'info@tmsmisr.com',
  web: 'tmsmisr.com',
  city: 'Cairo, Egypt',
}

export const stats = [
  { n: 7,   suffix: '+', label: 'Years of operation',    sub: 'Since 2018' },
  { n: 50,  suffix: '+', label: 'Active clients',        sub: 'Multinational & local' },
  { n: 200, suffix: '+', label: 'Completed projects',    sub: 'Food, real estate, pharma, utilities' },
  { n: 80,  suffix: '+', label: 'Engineers & technicians', sub: 'In-house team' },
]

export const values = [
  { h: 'Quality',        p: 'Highest manufacturing and installation standards, every time.' },
  { h: 'Flexibility',    p: 'Tailored to what each client needs — no off-the-shelf compromises.' },
  { h: 'Sustainability', p: 'Products engineered to last — lower lifecycle cost, less downtime.' },
]

export const edge = [
  { h: 'Owned Machinery',         p: 'Laser, CNC, lathes, press and welding — all operated by our team.' },
  { h: 'Faster Lead Times',       p: 'No external queues. We start when you approve — not when a supplier has room.' },
  { h: 'End-to-End Accountability', p: "One contract, one team. Problems don't get passed between vendors." },
  { h: 'Nationwide Coverage',     p: 'Mobilize teams and equipment to any project site across Egypt.' },
]

export const products = [
  { slug: 'tanks',           h: 'Tanks',            short: 'Stainless · Steel · Food-grade', long: 'Stainless, steel, food-grade. Potable, fire, chemical, dairy.', icon: 'Tank' },
  { slug: 'conveyors',       h: 'Conveyors',        short: 'Roller · Belt · Pallet',         long: 'Roller, belt, pallet carriers. Custom to your factory flow.',     icon: 'Conveyor' },
  { slug: 'steel-structures',h: 'Steel Structures', short: 'Hangars · Warehouses · Mezzanines', long: 'Hangars, warehouses, mezzanines. Fast-erect, long-life.',     icon: 'Structure' },
  { slug: 'industrial-doors',h: 'Industrial Doors', short: 'Manual · Motorized · Rolling',   long: 'Manual and motorized. Rolling and swing. Forklift-rated.',         icon: 'Door' },
  { slug: 'caravans',        h: 'Caravans',         short: 'Mobile Offices · Site Cabins',   long: 'Insulated mobile offices, cabins, site units — plug-and-play.',    icon: 'Caravan' },
  { slug: 'machine-chassis', h: 'Machine Chassis',  short: 'Frames · Equipment Bases',       long: 'Custom frames and bases for heavy equipment stability.',           icon: 'Chassis' },
  { slug: 'garbage-chutes',  h: 'Garbage Chutes',   short: 'Hotels · Residential · Factories', long: 'Hygienic waste-handling for hotels, residential and factories.', icon: 'Chute' },
  { slug: 'ss-fixtures',     h: 'Stainless Fixtures', short: 'Counters · Sinks · Foodservice', long: 'Counters, sinks, grease traps — foodservice & labs.',           icon: 'Fixture' },
]

// Mega-menu categories
export const productCategories = [
  { h: 'Heavy Industry', items: ['tanks','steel-structures','machine-chassis'] },
  { h: 'Material Handling', items: ['conveyors','garbage-chutes'] },
  { h: 'Site & Foodservice', items: ['industrial-doors','caravans','ss-fixtures'] },
]

export const services = [
  { n: '01', h: 'Laser Cutting, CNC Forming & Precision Welding', p: 'Laser, turning, rolling, lathe — precision to design. ARG, CO₂, electric and aluminium welding for every spec.' },
  { n: '02', h: 'Design & Engineering (2D / 3D)',                 p: 'Practical, buildable drawings — not just pretty renders. Our engineers translate client needs into executable plans.' },
  { n: '03', h: 'On-Site Erection, Retrofits & Commissioning',    p: 'We measure, fabricate, install and test. You get a finished system that works on day one — with as-built drawings and maintenance notes.' },
  { n: '04', h: 'Preventive & Factory Maintenance',               p: 'Scheduled service plus rapid emergency response for equipment, production lines, chillers and cooling towers.' },
  { n: '05', h: 'Specialised Manufacturing',                      p: 'Spare parts, gears, cassettes, compression and blowing units — built to replace imports with local precision.' },
]

export const process = [
  ['01','Discover',   'Site visit, measurements, requirements scoping.'],
  ['02','Design',     '2D/3D engineering drawings, approval sign-off.'],
  ['03','Fabricate',  'In-house cutting, forming, welding, QC testing.'],
  ['04','Install',    'On-site erection, piping, electrical, safety systems.'],
  ['05','Commission', 'Testing, handover, as-built docs, maintenance plan.'],
]

// Expanded version for the interactive ProcessSteps tab component
export const processDetailed = [
  {
    n: '01', h: 'Discover', short: 'Site visit, measurements, requirements scoping.',
    deliverables: [
      'On-site survey with dimensional measurements',
      'Operations-team requirements gathering',
      'Existing-equipment audit and integration scoping',
      'Signed project brief before any drawings begin',
    ],
    duration: '1–2 weeks typical', team: 'Engineering lead + Project manager',
  },
  {
    n: '02', h: 'Design', short: '2D/3D engineering drawings, approval sign-off.',
    deliverables: [
      'Practical 2D fabrication drawings',
      '3D visualisations for client approval',
      'Material specs, weld map, structural calcs',
      'Client sign-off before any metal is cut',
    ],
    duration: '1–3 weeks depending on complexity', team: 'Mechanical engineers + Draftsmen',
  },
  {
    n: '03', h: 'Fabricate', short: 'In-house cutting, forming, welding, QC testing.',
    deliverables: [
      'Laser cutting & CNC forming on owned machinery',
      'Precision welding (ARG/CO₂/aluminium)',
      'In-process QC at each stage',
      'Pre-delivery functional testing',
    ],
    duration: '2–10 weeks based on scope', team: 'Fabrication team + QC inspectors',
  },
  {
    n: '04', h: 'Install', short: 'On-site erection, piping, electrical, safety systems.',
    deliverables: [
      'Site mobilisation & rigging',
      'Mechanical erection and piping',
      'Electrical, instrumentation, safety systems',
      'Coordination with other site trades',
    ],
    duration: '1–4 weeks on-site typical', team: 'Site engineers + Installation crew',
  },
  {
    n: '05', h: 'Commission', short: 'Testing, handover, as-built docs, maintenance plan.',
    deliverables: [
      'Functional and performance testing',
      'Operator training and handover',
      'As-built drawings + maintenance documentation',
      'Warranty activation and service plan',
    ],
    duration: '1 week handover phase', team: 'Engineering lead + Maintenance team',
  },
]

export const sectors = [
  { slug: 'real-estate', h: 'Real Estate & Construction', icon: 'Building', p: 'Hangars, facades, stairs, garbage chutes, emergency doors.', clients: ['SODIC','Misr Italia','Al Masa'] },
  { slug: 'food-bev',    h: 'Food & Beverage',            icon: 'Food',     p: 'Conveyors, extraction hoods, stainless tanks, sorting lines.', clients: ['Pepsi','Americana','Chipsy','Dina Farms'] },
  { slug: 'pharma',      h: 'Pharma & Healthcare',        icon: 'Tank',     p: 'Hygienic stainless processing and gas-line infrastructure.', clients: ['Air Liquide Healthcare'] },
  { slug: 'heavy',       h: 'Heavy Industry & Chemicals', icon: 'Factory',  p: 'Machine chassis, production-line modifications, spare parts.', clients: ['Ezz Steel','Henkel','ECS'] },
  { slug: 'agri',        h: 'Agriculture',                icon: 'Tractor',  p: 'Fertilizer hangars, storage, handling and feed equipment.', clients: ['Cleopatra','Arco'] },
  { slug: 'utilities',   h: 'Utilities & Safety',         icon: 'Flame',    p: 'Fire tanks, cooling towers, chiller install, emergency doors.', clients: ['Angel East','Al-Qahera Contracting'] },
]

export const clients = {
  realEstate: ['SODIC','Misr Italia','Al Masa','Al-Qahera'],
  industrial: ['Pepsi','Ezz Steel','Americana','Henkel','Air Liquide','Dina Farms','Chipsy','Cleopatra','Arco','ECS'],
}

export const projects = [
  { slug: 'pepsi-conveyor',       client: 'PEPSI',         sector: 'Material Handling · Food & Beverage', h: '13m Heavy-Duty Roller Conveyor', short: 'Stainless conveyor rated for 1.5-ton pallets, built to European durability standards.', long: 'Manufactured and installed a stainless roller conveyor for palletized water gallons — rated for 1.5-ton pallets, built to European durability standards.' },
  { slug: 'dina-farms-tanks',     client: 'DINA FARMS',    sector: 'Food-Grade Tanks · Dairy',            h: 'Four Stainless Milk Storage Tanks', short: '316-grade stainless steel tanks with TIG welds, integrated agitators and CIP cleaning.', long: '316-grade stainless steel tanks with TIG welds, integrated agitators and CIP cleaning systems — engineered for dairy hygiene and processing efficiency.' },
  { slug: 'al-masa-chute',        client: 'AL MASA HOTEL', sector: 'Hospitality · Waste Systems',         h: 'Stainless Garbage Chute System', short: 'Complete waste-chute system — localised alternative to costly imports.', long: 'Designed, fabricated and installed a complete waste-chute system — a faster, localised alternative to costly imported solutions, with full safety compliance.' },
  { slug: 'americana-hoods',      client: 'AMERICANA',     sector: 'Food & Beverage',                     h: '7 Stainless Steam-Extraction Hoods', short: 'Heavy-duty extraction hoods for industrial food processing.', long: 'Seven stainless steam-extraction hoods fabricated and installed for Americana food processing facilities.' },
  { slug: 'chipsy-conveyor',      client: 'CHIPSY',        sector: 'Food & Beverage',                     h: '30m Potato-Reception Conveyor',  short: 'Long-run reception conveyor engineered for high-volume potato handling.', long: '30-metre potato-reception conveyor designed and installed to feed Chipsy production lines, built for continuous high-throughput operation.' },
  { slug: 'cleopatra-hangar',     client: 'CLEOPATRA AGRI', sector: 'Agriculture',                        h: 'Fertilizer Storage Hangar',      short: 'Large-span hangar engineered for bulk fertilizer storage.', long: 'Fertilizer storage hangar — structural steel design with weather-tight enclosure for bulk material storage and handling.' },
]

// Full real project ledger (from company records). name · client · duration(days).
export const projectLedger = [
  { name: 'Water supply/drainage connection & main-tank piping network — Palm Mall', client: 'SODIC', days: 75 },
  { name: 'Chiller cooling station & full network installation — Cleopatra Mall', client: 'ECS', days: 60 },
  { name: 'Garbage-chute fabrication & installation — Al Masa Hotel, New Administrative Capital', client: 'West Cairo Contracting', days: 180 },
  { name: 'Underground tanks, tank-body insulation & access stairs — Shefa Al-Orman Hospital, Luxor', client: 'ECS', days: 90 },
  { name: 'Industrial wastewater treatment plant rehabilitation — Pepsi Minya', client: 'Pepsi Cola', days: 60 },
  { name: 'Emergency stairs fabrication & installation — Farm Frites factory', client: 'Farm Frites (ICDA)', days: 30 },
  { name: 'Full steel-truss hangar for raw-material storage — TPS', client: 'Rehana', days: 180 },
  { name: 'Fume-extraction hoods for 7 baking ovens — Americana', client: 'Americana (ECFC)', days: 120 },
  { name: '15m × 9m platform at 4m height — Pepsi Tanta', client: 'Pepsi Cola', days: 90 },
  { name: '90m × 175m fertilizer hangar (6m) incl. civil works — Chipsy farm', client: 'Chipsy Foods', days: 120 },
  { name: 'Tank water-supply network — Lanova Mall, 5th Settlement', client: 'Misr Italia', days: 45 },
  { name: 'Stainless treatment-plant water tanks + full network — Pepsi Minya', client: 'Pepsi Cola', days: 60 },
  { name: 'Clean-system network (with Advansys) — Pepsi Minya', client: 'Pepsi Cola', days: 90 },
  { name: 'Clean-system network (with Advansys) — Dina Farms', client: 'Dina Farms', days: 90 },
  { name: 'Cooling-tower rehabilitation & network replacement — Pepsi Nasr City', client: 'Pepsi Cola', days: 75 },
  { name: 'Rehabilitation of 7 ventilation units — Chipsy', client: 'Chipsy Foods', days: 365 },
  { name: 'Landscaping, interlock flooring & pedestrian-path replanning — Pepsi Minya', client: 'Pepsi Cola', days: 45 },
  { name: 'Internal production-hangar partitioning with truss & panel dividers — Pepsi October', client: 'Pepsi Cola', days: 45 },
  { name: 'Garage flooring, reflectors, electronic gates, barriers & speed bumps — Forty West', client: 'SODIC', days: 90 },
  { name: 'Olive-reception hangar & canopy + pickling tanks', client: 'Americana (ECFC)', days: 120 },
  { name: 'Garbage chutes for 5 buildings — El Borouj Compound', client: 'Al-Futtaim Real Estate', days: 150 },
  { name: 'Efficiency upgrade + dissolving & sugar area — Pepsi Port Said', client: 'Pepsi Cola', days: 60 },
  { name: 'Water lifting/pumping station from tanks — Pepsi October', client: 'Pepsi Cola', days: 45 },
  { name: 'Main fire line along perimeter wall — Chipsy Obour', client: 'Chipsy Foods', days: 25 },
  { name: 'Main line project — Chipsy Assiut', client: 'Chipsy Foods', days: 30 },
  { name: 'Quality-lab building construction & unit layout — Chipsy Obour', client: 'Chipsy Foods', days: 90 },
  { name: 'Steel fencing for equipment & pumps area — Sheikh Zayed Water Station', client: 'Pamag Mena', days: 75 },
  { name: 'Shade canopy & external fencing for compressor area — Kafr El-Sheikh Water Station', client: 'Pamag Mena', days: 120 },
]

// Full manufacturing capabilities list (from company records).
export const capabilities = [
  'Welding works of all types',
  'Laser cutting & sheet-metal bending/forming',
  'Stainless-steel & mild-steel tank fabrication',
  'Machine-mount chassis & platforms for production lines',
  'Fume-extraction canopies & suction hoods',
  'Cooling-tower & chiller maintenance and modification',
  'Crushing & grinding machines (crushers)',
  'Metal staircases',
  'Emergency doors',
  'Product, raw-material & handling conveyors',
  'Raw-material transport & handling boxes',
  'Waste baskets',
  'Garbage-collection chutes for residential units & factories',
  'Large warehouse steel doors — electric or manual',
  'Decorative tables, consoles, dining tables & display stands',
  'Handrails',
  'Chains & gears',
  'Awnings & shade canopies',
  'Elevator-cabin support chassis — industrial or residential',
  'Steel trusses (jamalon)',
  'Caravans & portacabins',
  'Metal drainage gratings & gullies',
  'Loading ramps',
]

export const reasons = [
  ['Engineering rigor',       'Our drawings are practical and buildable — not theoretical. What we sign off on is what gets installed.'],
  ['Vertical integration',    'Laser, CNC, welding, fabrication, installation — all owned, all in-house, all accountable.'],
  ['Speed without shortcuts', "We don't queue behind subcontractors. Your project starts when you're ready."],
  ['Compliance-grade quality','Food-safety, fire, hygiene, structural — we build to the standard your regulator expects.'],
  ['Long-term partnerships',  'Multi-year relationships with Pepsi, Ezz Steel and Henkel speak louder than any brochure.'],
  ['Local cost, import quality','European-standard fabrication at Egyptian economics — we replace expensive imports, not undercut them.'],
]

export const standards = [
  { h: 'Welding',     p: 'ARG (TIG), CO₂ (MIG/MAG), electric (SMAW) and aluminium welding — full process control with documented welder qualifications.' },
  { h: 'Materials',   p: '316-grade stainless steel for food/dairy contact. Mild and structural steel grades to project spec. Imported alloys when needed.' },
  { h: 'Food safety', p: 'Food-grade stainless construction, TIG welds, integrated CIP cleaning systems — built to dairy and FMCG hygiene standards.' },
  { h: 'Fire & safety', p: 'Fire-rated systems for garbage chutes, fire tanks, emergency doors — engineered to meet fire-code requirements.' },
  { h: 'Structural',  p: 'Hangars, warehouses and mezzanines engineered to structural load standards with stamped engineering drawings.' },
  { h: 'Durability',  p: 'European durability standards — conveyors rated for multi-ton loads, tanks built for decade-plus service life.' },
]

export const faqs = [
  { q: 'What types of products and systems do you manufacture?', a: 'We manufacture stainless and steel tanks, roller and belt conveyors, steel hangars and warehouses, industrial doors, machine chassis, caravans, garbage chutes and custom foodservice stainless fixtures. Every product is custom-built to spec — no catalogue constraints.' },
  { q: 'Do you handle full project delivery or just fabrication?', a: 'Both. We offer fabrication-only when that\'s what you need, but our preferred mode is turnkey: one contract covering measurement, engineering drawings, fabrication, on-site installation and final commissioning — including as-built docs and warranty coverage.' },
  { q: 'Which industries do you serve?',                          a: 'Real estate and construction, food and beverage, pharma and healthcare, heavy industry and chemicals, agriculture, and utilities and safety. We work with multinational names (Pepsi, Henkel, Air Liquide) as well as Egypt\'s leading industrial firms (Ezz Steel, Dina Farms).' },
  { q: 'How fast can you start a project?',                       a: 'Because we own our machinery and don\'t rely on subcontractors, we can typically start fabrication within days of contract sign-off. Lead time depends on scope — small components in 1–2 weeks, full turnkey installations in 6–12 weeks.' },
  { q: 'Do you provide ongoing maintenance?',                     a: 'Yes. We offer scheduled preventive maintenance contracts for equipment, production lines, chillers and cooling towers — plus 24/7 emergency response for breakdowns and urgent repairs.' },
  { q: 'How do I request a quote?',                               a: 'Use the form on our Contact page, email info@tmsmisr.com, or call 010 44242888. Share the scope, location and timeline — our engineering team responds within one business day.' },
]

// News-style cards built from real project completions in the deck
// (no fabricated events — these are repackaged from actual TMS case studies)
export const news = [
  { date: 'Recent', tag: 'Project completion', h: 'Pepsi 13m Heavy-Duty Roller Conveyor delivered', p: 'Stainless conveyor for palletized water gallons, rated for 1.5-ton pallets — installed and commissioned to European durability standards.' },
  { date: 'Recent', tag: 'Food-Grade Tanks',  h: 'Four 316-grade stainless milk tanks at Dina Farms', p: 'TIG-welded tanks with integrated agitators and CIP cleaning systems — engineered for dairy hygiene and processing efficiency.' },
  { date: 'Recent', tag: 'Hospitality',       h: 'Al Masa Hotel stainless garbage chute system live', p: 'Complete waste-chute system designed, fabricated and installed — a localised alternative to costly imported solutions, fully fire-compliant.' },
  { date: 'Recent', tag: 'Food & Beverage',   h: '7 stainless steam-extraction hoods for Americana',  p: 'Heavy-duty extraction hoods fabricated and installed across Americana food-processing facilities.' },
  { date: 'Recent', tag: 'Agriculture',       h: 'Cleopatra Agri fertilizer storage hangar',          p: 'Large-span structural steel hangar engineered for bulk fertilizer storage and handling.' },
  { date: 'Recent', tag: 'Material Handling', h: 'Chipsy 30m potato-reception conveyor',              p: '30-metre long-run reception conveyor feeding Chipsy production lines — built for continuous high-throughput operation.' },
]
