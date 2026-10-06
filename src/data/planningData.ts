import tshwaneUrbanPrecinct from '../assets/images/tshwane_urban_precinct_1790374345003.jpg';
import cadastralZoningPlans from '../assets/images/cadastral_zoning_plans_1790374356114.jpg';
import mpumalangaDevelopmentCorridor from '../assets/images/mpumalanga_development_corridor_1790374365807.jpg';
import khumbulaniThobaniPortrait from '../assets/images/khumbulani_thobani_portrait_1790377086421.jpg';

// ============================================================================
// CUSTOM MEDIA CONFIGURATION (INSERT YOUR VIDEO & IMAGE HERE IN VS CODE)
// ============================================================================
// Option A (Easiest):
//   - Place your video file in the `public/` folder named: `hero-video.mp4`
//   - Place your photo in the `public/` folder named: `planner-photo.png`
//
// Option B:
//   - Or replace the paths below with your own filename / imported asset.
// ============================================================================
export const CUSTOM_MEDIA = {
  heroVideoSrc: '/hero-video.mp4',
  heroVideoPoster: tshwaneUrbanPrecinct,
  plannerPhotoSrc: '/planner-photo.png',
  plannerPhotoFallback: khumbulaniThobaniPortrait,
};

export const ASSETS = {
  plannerPortrait: khumbulaniThobaniPortrait,
  tshwanePrecinct: tshwaneUrbanPrecinct,
  cadastralPlans: cadastralZoningPlans,
  mpumalangaCorridor: mpumalangaDevelopmentCorridor,
};

export interface PlanningService {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  overviewParagraphs: string[];
  whenRequired: string[];
  howWeAssist: string[];
}

export const PLANNING_SERVICES: PlanningService[] = [
  {
    slug: 'rezoning-applications',
    title: 'Rezoning Applications',
    shortDescription:
      'Assistance with changing the zoning or permitted land use of a property.',
    image: ASSETS.tshwanePrecinct,
    overviewParagraphs: [
      'Every property within a municipality is governed by a Land Use Scheme that assigns a specific zoning category—such as Residential, Business, Industrial, or Institutional—along with development controls including height, coverage, floor area ratio (FAR), and building lines.',
      'When a property owner or developer wishes to use land or buildings for a purpose that is not permitted under the existing zoning, a formal Rezoning (Amendment of the Land Use Scheme) application must be submitted to the local municipality. We prepare, lodge, and manage rezoning applications from initial feasibility through to final municipal decision.',
    ],
    whenRequired: [
      'Converting a single residential property into townhouses, apartments, or higher-density residential units',
      'Changing a residential stand along an activity street into business, retail, or professional office rights',
      'Increasing permitted development parameters such as coverage, height, or density for a new development project',
      'Unlocking commercial, mixed-use, or light industrial rights on underutilised land',
    ],
    howWeAssist: [
      'Reviewing the property Title Deed and current zoning certificate to identify any restrictive conditions',
      'Drafting the comprehensive Town Planning Motivational Memorandum aligned with municipal spatial policy',
      'Preparing the required statutory notices, site advertisements, and public participation documentation',
      'Liaising with municipal planning officials and engineering departments until final approval',
    ],
  },
  {
    slug: 'consent-use-applications',
    title: 'Consent Use Applications',
    shortDescription:
      'Assistance with applications for additional or alternative land uses on a property.',
    image: ASSETS.cadastralPlans,
    overviewParagraphs: [
      'A Consent Use application allows a property owner to apply to the municipality for permission to operate a secondary or alternative land use on a property without changing its primary base zoning.',
      'Municipal Land Use Schemes list specific uses that may be permitted only with the special consent of the local authority, provided the proposed activity is compatible with the surrounding neighbourhood and has adequate access and on-site parking.',
    ],
    whenRequired: [
      'Establishing a guesthouse, bed and breakfast, boarding house, or commune on a residential property',
      'Opening a crèche, day-care centre, place of instruction, or place of public worship',
      'Operating a home enterprise, neighbourhood shop, tavern, or specialised practice that exceeds automatic home-office allowances',
      'Adding a second dwelling unit or institution where special municipal consent is required by the scheme',
    ],
    howWeAssist: [
      'Confirming whether the intended activity qualifies as a Consent Use under the applicable Land Use Scheme',
      'Checking Title Deed clauses to ensure no private title restriction prohibits the proposed use',
      'Compiling the Consent Use application, motivational report, and site layout considerations',
      'Managing public notice procedures, neighbour notifications, and municipal departmental circulation',
    ],
  },
  {
    slug: 'subdivision-and-consolidation',
    title: 'Subdivision & Consolidation',
    shortDescription:
      'Planning assistance for subdividing or consolidating properties.',
    image: ASSETS.mpumalangaCorridor,
    overviewParagraphs: [
      'Subdivision involves splitting an existing registered property (erf or farm portion) into two or more separate, individually transferable portions. Consolidation is the opposite process—combining two or more adjacent properties into a single consolidated stand to enable a larger building footprint or unified development.',
      'Both processes require formal approval from the local municipality in terms of the Spatial Planning and Land Use Management Act (SPLUMA) and the relevant municipal planning by-law before new diagrams can be registered in the Deeds Office.',
    ],
    whenRequired: [
      'Splitting a large residential stand to sell off a portion or build an independent dwelling',
      'Dividing commercial or industrial land into smaller, marketable stands',
      'Merging two or more contiguous erven to meet the minimum site area required for apartments, retail, or offices',
      'Building across an internal boundary line shared by two adjacent stands owned by the same client',
    ],
    howWeAssist: [
      'Verifying minimum erf size and density regulations under the current zoning scheme',
      'Coordinating the subdivision or consolidation sketch plan with a Professional Land Surveyor',
      'Preparing and lodging the complete municipal application and planning motivation',
      'Assisting with conditions of approval and municipal clearance requirements for Deeds Office registration',
    ],
  },
  {
    slug: 'land-use-and-zoning-enquiries',
    title: 'Land Use & Zoning Enquiries',
    shortDescription:
      'Helping clients understand their property\'s zoning, development rights and land use restrictions.',
    image: ASSETS.cadastralPlans,
    overviewParagraphs: [
      'Before signing an Offer to Purchase, entering into a commercial lease, or commissioning architectural plans, it is essential to know exactly what the municipal Land Use Scheme and Title Deed allow on the property.',
      'We conduct thorough land use and zoning enquiries so property owners, buyers, and business operators have clear, reliable answers regarding their development rights and restrictions.',
    ],
    whenRequired: [
      'Conducting pre-purchase due diligence before buying a residential, commercial, or industrial property',
      'Confirming permitted primary uses, consent uses, and prohibited uses on a specific stand',
      'Determining exact development controls including Floor Area Ratio (FAR), coverage, height, building lines, and parking ratios',
      'Checking whether historical conditions in a Title Deed conflict with current zoning rights',
    ],
    howWeAssist: [
      'Obtaining and interpreting official zoning information and applicable scheme clauses',
      'Reviewing the property Title Deed for restrictive conditions of title',
      'Providing a clear, practical summary of what can be built or operated on the property',
      'Advising on the most cost-effective statutory route if additional land use rights are required',
    ],
  },
  {
    slug: 'municipal-planning-applications',
    title: 'Municipal Planning Applications',
    shortDescription:
      'Assistance with preparing and navigating municipal planning applications and requirements.',
    image: ASSETS.tshwanePrecinct,
    overviewParagraphs: [
      'Beyond standard rezonings and consent uses, municipalities require formal statutory applications for a range of property development actions—including the Removal of Restrictive Title Conditions, Building Line Relaxations, Site Development Plan (SDP) approvals, and Township Establishment.',
      'Navigating municipal submission requirements, departmental circulations, and public participation timeframes requires careful preparation. We handle the complete statutory process on behalf of property owners and project teams.',
    ],
    whenRequired: [
      'Removing or amending restrictive Title Deed conditions that prevent subdivision, commercial use, or second dwellings',
      'Applying for street, side, or rear building line relaxations to accommodate building extensions',
      'Preparing and submitting Site Development Plans (SDPs) required prior to building plan approval',
      'Following up on stalled municipal applications or responding to municipal query letters',
    ],
    howWeAssist: [
      'Auditing municipal submission checklists to ensure every required annexure and power of attorney is in order',
      'Preparing statutory motivations and coordinating inputs from architects, surveyors, and engineers',
      'Lodging applications with the relevant municipal planning department and tracking circulation progress',
      'Representing clients in correspondence with municipal case officers and planning committees',
    ],
  },
  {
    slug: 'bylaw-and-land-use-compliance',
    title: 'By-Law & Land Use Compliance',
    shortDescription:
      'Helping clients understand applicable municipal by-laws, land use schemes and planning requirements.',
    image: ASSETS.mpumalangaCorridor,
    overviewParagraphs: [
      'Using a property contrary to its approved zoning—or erecting structures that contravene scheme parameters—can result in municipal contravention notices, administrative penalties, refusal of business licences, or legal enforcement.',
      'We assist property owners and business operators in understanding municipal planning by-laws, assessing their current compliance status, and submitting formal applications to regularise existing land uses.',
    ],
    whenRequired: [
      'Responding to a land use contravention notice or compliance inspection from the municipality',
      'Regularising an existing business, workshop, guesthouse, commune, or shop operating without formal land use approval',
      'Securing zoning compliance confirmation required for municipal business licensing or liquor licence applications',
      'Verifying that proposed tenant operations comply with the property\'s approved zoning rights',
    ],
    howWeAssist: [
      'Evaluating the existing activity on site against the municipal Land Use Scheme and By-Law',
      'Advising on whether the use can be regularised through a Consent Use, Rezoning, or Permission application',
      'Preparing and lodging the necessary regularisation application with the local authority',
      'Assisting property owners with professional correspondence and compliance roadmaps',
    ],
  },
  {
    slug: 'property-development-planning',
    title: 'Property Development Planning',
    shortDescription:
      'Planning guidance for property owners and developers before starting a development or application.',
    image: ASSETS.tshwanePrecinct,
    overviewParagraphs: [
      'Successful property development begins long before construction starts. Aligning your development concept with the municipality\'s Spatial Development Framework (MSDF), local precinct plans, and engineering infrastructure capacity is critical to securing timely planning approvals.',
      'We work closely with landowners, emerging developers, and architectural teams during the concept phase to structure viable, policy-aligned development proposals.',
    ],
    whenRequired: [
      'Planning a new multi-unit residential development, student housing project, or commercial node',
      'Evaluating whether a property falls within a municipal densification zone or development corridor',
      'Coordinating town planning parameters with architects before finalising building designs',
      'Mapping out the sequence of approvals, timeframes, and professional inputs required for a project',
    ],
    howWeAssist: [
      'Assessing the site against the Municipal Spatial Development Framework (MSDF) and local spatial policies',
      'Advising on realistic density yields, parking provisions, coverage, and height parameters',
      'Identifying required specialist inputs early in the project lifecycle',
      'Structuring a clear statutory approval strategy from concept to proclamation',
    ],
  },
  {
    slug: 'planning-advice-and-assessments',
    title: 'Planning Advice & Assessments',
    shortDescription:
      'Preliminary planning advice to help determine what can be done with a property and what approvals may be required.',
    image: ASSETS.cadastralPlans,
    overviewParagraphs: [
      'Whether you are a homeowner considering a second dwelling, an entrepreneur looking for premises for a new business, or an investor evaluating a stand, getting practical town planning advice upfront saves time and prevents costly mistakes.',
      'We provide straightforward preliminary planning assessments that explain what the municipality permits on your property, what obstacles may exist, and what steps are needed to achieve your goal.',
    ],
    whenRequired: [
      'Determining whether a property is suitable for your intended business or development before committing funds',
      'Understanding the difference between primary rights, consent uses, and rezoning for your specific stand',
      'Getting clarity on municipal application procedures, statutory timeframes, and documentation requirements',
      'Reviewing a property portfolio to identify opportunities for subdivision or value enhancement',
    ],
    howWeAssist: [
      'One-on-one consultation to discuss your property objectives and practical options',
      'Preliminary desktop assessment of zoning, title conditions, and spatial policy alignment',
      'Clear written or verbal guidance on the recommended planning application route',
      'Transparent quotation outlining the scope of work and municipal submission steps',
    ],
  },
];

export interface RegionalJurisdiction {
  id: string;
  name: string;
  subtitle: string;
  municipality: string;
  province: string;
  image: string;
  overview: string;
  planningContext: string;
  servicesProvided: string[];
  areasAndSuburbs: string[];
}

export const REGIONAL_JURISDICTIONS: RegionalJurisdiction[] = [
  {
    id: 'pretoria',
    name: 'Pretoria',
    subtitle: 'City of Tshwane and surrounding areas',
    municipality: 'City of Tshwane Metropolitan Municipality',
    province: 'Gauteng',
    image: ASSETS.tshwanePrecinct,
    overview:
      'We provide comprehensive town planning and land use management assistance across Pretoria and the broader City of Tshwane Metropolitan Municipality. All applications are prepared in accordance with the City of Tshwane Land Use Management By-Law, 2016 and the Tshwane Town-Planning Scheme, 2008 (Revised 2014).',
    planningContext:
      'From suburban subdivisions and high-density residential rezonings in Pretoria East, Hatfield, and Centurion to commercial consent uses, student accommodation regularisation, and industrial land use applications across Tshwane\'s seven regions, we guide clients through every stage of the municipal planning process.',
    servicesProvided: [
      'Rezoning applications (Section 16(1) Scheme Amendments)',
      'Consent Use and Permission applications under the Tshwane Town-Planning Scheme',
      'Subdivision and consolidation of residential and commercial erven',
      'Removal of restrictive title deed conditions and building line relaxations',
      'Site Development Plan (SDP) submissions and zoning enquiries',
    ],
    areasAndSuburbs: [
      'Pretoria East, Menlyn, Lynnwood & Garsfontein',
      'Hatfield, Brooklyn, Arcadia & Pretoria Central',
      'Centurion, Irene & Highveld',
      'Pretoria North, Montana, Sinoville & Akasia',
      'Mamelodi, Atteridgeville, Soshanguve & Mabopane',
      'Silverton, Waltloo, Rosslyn & Surrounding Areas',
    ],
  },
  {
    id: 'secunda',
    name: 'Secunda',
    subtitle: 'Govan Mbeki Municipality and surrounding areas',
    municipality: 'Govan Mbeki Local Municipality',
    province: 'Mpumalanga',
    image: ASSETS.cadastralPlans,
    overview:
      'We assist property owners, developers, and businesses in Secunda and across the Govan Mbeki Local Municipality with professional town planning applications, zoning enquiries, and land use compliance in terms of the Govan Mbeki Spatial Planning and Land Use Management By-Law and Land Use Scheme.',
    planningContext:
      'As a major economic and industrial hub in Mpumalanga, Secunda experiences ongoing demand for guest accommodation, multi-unit residential housing, contractor lodging, commercial offices, and light industrial businesses. We help property owners secure the formal land use rights required to develop and operate legally.',
    servicesProvided: [
      'Rezoning of residential stands for business, office, or higher-density residential use',
      'Consent Use applications for guesthouses, crèches, boarding houses, and home enterprises',
      'Subdivision and consolidation of erven across Govan Mbeki Municipality',
      'Pre-purchase zoning verifications and development feasibility assessments',
      'Land use compliance assistance and regularisation of existing activities',
    ],
    areasAndSuburbs: [
      'Secunda Central & Residential Extensions',
      'Trichardt & Evander',
      'Kinross & Brendalan',
      'Bethal, Leandra & Charl Cilliers',
      'Surrounding Govan Mbeki agricultural & commercial nodes',
    ],
  },
  {
    id: 'embalenhle',
    name: 'eMbalenhle',
    subtitle: 'Planning and land use assistance in eMbalenhle and surrounding areas',
    municipality: 'Govan Mbeki Municipality & Surrounding Areas',
    province: 'Mpumalanga',
    image: ASSETS.mpumalangaCorridor,
    overview:
      'We offer accessible, practical town planning and land use management assistance to property owners, entrepreneurs, and community institutions in eMbalenhle and surrounding areas within Govan Mbeki Municipality.',
    planningContext:
      'Property owners and local business operators in eMbalenhle frequently require guidance on municipal zoning rules when opening retail shops, taverns, early childhood development centres (crèches), workshops, or developing rental rooms and second dwellings. We simplify the municipal process and prepare compliant applications on your behalf.',
    servicesProvided: [
      'Consent Use and rezoning applications for local businesses, shops, and taverns',
      'Planning applications for crèches, day-care facilities, and community institutions',
      'Guidance on residential rental units, second dwellings, and stand subdivisions',
      'Assistance with municipal by-law compliance and contravention notices',
      'Clear zoning advice and step-by-step support with municipal requirements',
    ],
    areasAndSuburbs: [
      'eMbalenhle Proper & All Extensions',
      'Secunda–eMbalenhle Development Corridor',
      'Lebohang, Kinross & Adjacent Settlements',
      'Surrounding Govan Mbeki Communities',
    ],
  },
];

export const PLANNER_PROFILE = {
  name: 'Khumbulani Thobani',
  role: 'Candidate Town & Regional Planner',
  sacplanNumber: 'C/10107/2025',
  almaMater: 'University of Pretoria',
  phoneDisplay: '072 251 6358',
  phoneHref: 'tel:+27722516358',
  whatsappHref: 'https://wa.me/27722516358',
  email: 'Mzansiplannersconnect@gmail.com',
  emailLower: 'mzansiplannersconnect@gmail.com',
  directoryUrl: 'https://mzansiplannersconnect.com',
  directoryLabel: 'mzansiplannersconnect.com',
  statement:
    'Providing practical town planning and land use management assistance to clients navigating municipal planning processes.',
};
