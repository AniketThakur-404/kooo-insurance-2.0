import type { Product } from "../catalogue-types";

// Business insurance products (part A). General information only, drafted for client review.

export const productsA: Product[] = [
  // ---------------------------------------------------------------------------
  {
    slug: "business-insurance",
    name: "Business Insurance",
    titleWords: ["Business", "Insurance"],
    category: "businessinsurance",
    image: "/images/photos/pexels-933964.jpg",
    metaDescription:
      "Business Insurance in Australia, explained. How business package policies combine property, liability, theft and interruption sections, and how Kooo can help.",
    summary:
      "A business package combines several common covers, such as property, liability and business interruption, into one policy.",
    intro:
      "Most businesses have a mix of property, people and income to think about. A business package policy brings several of these covers together under one policy, with sections you can select to suit how your business operates. Kooo helps businesses across Australia understand the available sections and arrange cover through insurers.",
    overview:
      "Business insurance, often arranged as a business package policy, combines a number of separate insurance sections into a single policy. Common sections include property damage, theft, money, glass, business interruption, public and products liability, machinery breakdown, electronic equipment and goods in transit. Each section generally has its own sum insured or limit, its own excess and its own conditions and exclusions. Not every section is relevant to every business, and the sections, limits and terms available depend on the insurer and the policy wording. Packaging cover in this way can make it simpler to manage renewals and review your cover in one place, although some risks may still need a separate policy.",
    whoFor: [
      "Small and medium businesses operating from a shop, office, workshop or warehouse",
      "Retailers, cafés and hospitality operators with stock, fit-out and customers on site",
      "Service businesses with office equipment, computers and client visits",
      "Light manufacturers and wholesalers with machinery, stock and deliveries",
      "Businesses whose lease or contracts ask for property and liability cover",
      "Owners who prefer to manage several covers under a single policy",
    ],
    risks: [
      {
        title: "Damage to premises and contents",
        text: "Fire, storm, water damage, impact or accidental damage can affect buildings, fit-out, stock and equipment, and may leave a business unable to trade.",
      },
      {
        title: "Theft and break-ins",
        text: "Forced entry can lead to stolen stock, equipment or cash, as well as damage to doors, windows and locks.",
      },
      {
        title: "Customers and the public",
        text: "People visiting the premises, or affected by work done off site, may suffer injury or property damage and make a claim against the business.",
      },
      {
        title: "Equipment failure",
        text: "Sudden breakdown of machinery, refrigeration or computer equipment can cause repair costs, spoiled stock and lost trading time.",
      },
      {
        title: "Goods on the move",
        text: "Stock and equipment carried in business vehicles or sent with carriers may be lost or damaged in transit.",
      },
    ],
    options: [
      {
        title: "Property damage (fire and defined events or accidental damage)",
        text: "Cover for buildings, contents, fit-out and stock against insured events. Policies may be written on a defined events basis or a broader accidental damage basis, depending on the insurer.",
      },
      {
        title: "Theft and money",
        text: "Theft cover generally applies to contents and stock following forced or violent entry. Money cover may apply to cash and cheques on the premises, in a safe, in transit to the bank or at a private residence, with separate limits for each.",
      },
      {
        title: "Glass",
        text: "Cover for accidental breakage of glass such as shopfronts, windows and display cabinets, which may include signwriting, temporary shuttering and associated damage.",
      },
      {
        title: "Business interruption",
        text: "Cover for loss of income or gross profit and increased costs of working when the business is interrupted by insured damage, for a chosen indemnity period.",
      },
      {
        title: "Public and products liability",
        text: "Cover for legal liability to third parties for personal injury or property damage arising from business activities or products, up to the chosen limit of indemnity.",
      },
      {
        title: "Machinery breakdown and electronic equipment",
        text: "Cover for sudden breakdown of machinery and plant, and for damage to or breakdown of computers and electronic equipment. Some policies include deterioration of refrigerated stock or data restoration costs.",
      },
      {
        title: "Goods in transit",
        text: "Cover for goods carried in your own vehicles or sent by carrier, generally within Australia, against insured events such as collision, overturning, fire and theft.",
      },
    ],
    considerations: [
      "Each section has its own sum insured or limit and excess. A lower sum insured than the true value may mean a claim is reduced.",
      "Theft cover commonly requires forced or violent entry, and money cover often has conditions about how cash is stored.",
      "Flood, wear and tear, gradual deterioration and some types of water damage may be excluded or limited, depending on the policy wording.",
      "A package policy may not include professional indemnity, management liability, cyber or motor vehicle cover. These are usually arranged separately.",
      "Read the Product Disclosure Statement (PDS) or policy wording for each section you select, including exclusions and conditions.",
      "Tell your broker or insurer about changes such as new premises, new activities or higher stock levels, as these can affect your cover.",
    ],
    quoteInfo: [
      "Business name, ABN and a description of what the business does",
      "Premises address, construction type and any security or fire protection in place",
      "Values for buildings (if owned), contents, fit-out and stock",
      "Annual turnover and estimated gross profit",
      "The sections you would like quoted and preferred limits of indemnity",
      "Claims history and any insurance that has been declined or cancelled",
      "Details of any lease or contract insurance requirements",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help you understand the sections commonly available in a business package, collect the information insurers ask for, approach insurers on your behalf and arrange the cover you choose. At renewal we can review your sums insured and sections with you and remarket the policy if appropriate. If something goes wrong, we support you through the claims process by helping you prepare and lodge the claim and liaising with the insurer. The insurer assesses and decides each claim under the policy terms.",
    faqs: [
      {
        question: "Do I have to take every section of a business package?",
        answer:
          "Generally, no. Many package policies let you select the sections that are relevant to your business, although some insurers require certain sections, such as property damage or liability, to be included. Each selected section adds to the premium and has its own terms.",
      },
      {
        question: "How do I work out sums insured for my contents and stock?",
        answer:
          "Sums insured are usually based on the cost to replace contents and fit-out, and on the value of stock at its highest point during the year. If stock levels change seasonally, some policies offer a seasonal increase. Underinsuring may lead to a reduced claim payment, so it is worth reviewing values at each renewal.",
      },
      {
        question: "Is public liability included in a business package?",
        answer:
          "Public and products liability is commonly available as a section of a business package, but it is not automatic with every policy. The limit of indemnity and any exclusions are set out in the policy wording. Some businesses arrange liability as a standalone policy instead.",
      },
      {
        question: "Will a business package cover my work vehicles?",
        answer:
          "Business packages generally do not cover motor vehicles. Goods in transit may cover goods carried in a vehicle, but the vehicle itself is usually insured under a separate commercial motor or fleet policy.",
      },
    ],
    relatedProducts: [
      "public-liability-insurance",
      "commercial-property-insurance",
      "business-interruption-insurance",
      "goods-in-transit-insurance",
    ],
    relatedIndustries: ["grocery-and-retail", "food-and-hospitality", "professional-services", "manufacturing-and-distribution"],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "public-liability-insurance",
    name: "Public Liability Insurance",
    titleWords: ["Public", "Liability"],
    category: "businessinsurance",
    image: "/images/photos/pexels-2290753.jpg",
    metaDescription:
      "Public Liability Insurance for Australian businesses. What it generally covers, common exclusions, limits of indemnity and how Kooo can help you arrange cover.",
    summary:
      "Public liability insurance is designed to respond if a third party claims your business caused them injury or property damage.",
    intro:
      "Customers, suppliers and members of the public interact with businesses every day, at your premises and at theirs. Public liability insurance is designed to respond to claims that your business activities caused injury or property damage. Kooo helps businesses across Australia understand the options and arrange cover.",
    overview:
      "Public liability insurance generally covers a business’s legal liability to pay compensation to third parties for personal injury or damage to their property that happens in connection with the business’s activities, along with legal costs to defend a covered claim. It is often combined with products liability, which deals with injury or damage caused by goods the business sells, supplies or manufactures. Cover applies up to a limit of indemnity chosen when the policy is arranged. What is covered, and what is excluded, depends on the insurer and the policy wording.",
    whoFor: [
      "Retail shops, cafés and businesses with customers on the premises",
      "Tradespeople and contractors who work at clients’ homes and sites",
      "Service providers who visit clients or host clients at their office",
      "Event organisers, market stallholders and mobile businesses",
      "Businesses whose lease, council permit or contracts ask for a minimum level of cover",
    ],
    risks: [
      {
        title: "Slips, trips and falls",
        text: "A customer or visitor may be injured on wet floors, uneven surfaces or stairs at the business premises.",
      },
      {
        title: "Damage at a client’s property",
        text: "Work done at someone else’s home or site may accidentally damage their walls, floors, fixtures or belongings.",
      },
      {
        title: "Injury caused by work activities",
        text: "Tools, equipment or work practices may injure a member of the public passing by or on site.",
      },
      {
        title: "Contract and lease requirements",
        text: "Landlords, councils and head contractors often ask for evidence of cover at a specified limit before work or occupation begins.",
      },
    ],
    options: [
      {
        title: "Public liability",
        text: "Cover for legal liability for third party personal injury or property damage caused by an occurrence in connection with the business, subject to the policy terms.",
      },
      {
        title: "Products liability",
        text: "Cover for liability arising from goods sold, supplied, repaired or manufactured by the business. This is often included with public liability.",
      },
      {
        title: "Choice of limit of indemnity",
        text: "Policies are arranged with a limit for any one occurrence, and products liability usually has an aggregate limit for the policy period. The limit is chosen by the business, often with reference to contract or lease requirements.",
      },
      {
        title: "Defence costs",
        text: "Many policies pay reasonable legal costs to investigate and defend a covered claim, in addition to or within the limit, depending on the wording.",
      },
      {
        title: "Extensions",
        text: "Depending on the insurer, extensions may be available for property in your care, custody or control, principals’ liability, or work outside Australia.",
      },
    ],
    considerations: [
      "Injury to your own employees is generally excluded. This is usually addressed through workers compensation, which is compulsory for most employers and varies by state.",
      "Claims arising from professional advice or design are generally excluded and may need professional indemnity insurance.",
      "Damage to property you are working on, or that is in your care, may be limited or excluded unless an extension is arranged.",
      "Some activities, such as work at heights, hot works, asbestos or underground services, may be excluded or require disclosure.",
      "Liability you take on under a contract that goes beyond your normal legal liability may not be covered. Ask your broker to review contract clauses.",
      "Always check the PDS or policy wording for the limit, excess and exclusions that apply.",
    ],
    quoteInfo: [
      "Business name, ABN and a clear description of all business activities",
      "Annual turnover and wages, and any amounts paid to subcontractors",
      "Where work is done, such as your premises, clients’ homes or commercial sites",
      "The limit of indemnity required by leases, councils or contracts",
      "Whether you sell, import or manufacture products",
      "Claims history and any previous insurance declinature",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help you understand how public liability cover works, review the limits asked for in your leases and contracts, approach insurers on your behalf and arrange the policy you choose, including certificates of currency where needed. At renewal we check whether your activities or turnover have changed. If a third party makes a claim, we help you prepare and lodge it with the insurer and liaise with the insurer as the claim progresses. The insurer decides whether a claim is accepted under the policy.",
    faqs: [
      {
        question: "What limit of indemnity should a business choose?",
        answer:
          "The limit is a decision for the business. It is commonly influenced by lease conditions, council permits and contracts, which often specify a minimum. We can explain the limits generally available and what your documents ask for so you can make an informed choice.",
      },
      {
        question: "Does public liability cover my own injuries or my employees?",
        answer:
          "Generally, no. Public liability responds to injury or damage suffered by third parties. Injuries to employees are usually addressed through workers compensation, and cover for the business owner’s own injury may be available through personal accident and sickness insurance.",
      },
      {
        question: "What is a certificate of currency?",
        answer:
          "A certificate of currency is a document from the insurer confirming that a policy is in force, along with key details such as the limit of indemnity and policy period. Landlords and head contractors often ask for one. We can arrange a certificate once the policy is in place.",
      },
      {
        question: "Is public liability compulsory?",
        answer:
          "Public liability is not compulsory for every business, but it may be required by a lease, a contract, a council or a licensing body in some industries and states. Check any documents that apply to your business, and we can help you understand what they ask for.",
      },
    ],
    relatedProducts: [
      "product-liability-insurance",
      "professional-indemnity-insurance",
      "business-insurance",
      "tools-and-equipment-insurance",
    ],
    relatedIndustries: ["trades-and-construction", "food-and-hospitality", "grocery-and-retail", "fitness-and-recreation"],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "professional-indemnity-insurance",
    name: "Professional Indemnity Insurance",
    titleWords: ["Professional", "Indemnity"],
    category: "businessinsurance",
    image: "/images/photos/pexels-840996.jpg",
    metaDescription:
      "Professional Indemnity Insurance for Australian professionals. How claims-made cover, retroactive dates and run-off work, and how Kooo can help arrange cover.",
    summary:
      "Professional indemnity insurance is designed to respond to claims alleging a breach of professional duty in the advice or services you provide.",
    intro:
      "When clients rely on your advice, designs or services, a mistake or an allegation of one can lead to a claim for financial loss. Professional indemnity insurance is designed to respond to these claims and the costs of defending them. Kooo helps professionals and consultancies across Australia understand their options and arrange cover.",
    overview:
      "Professional indemnity (PI) insurance generally covers a business’s legal liability for claims alleging a breach of professional duty, such as negligence, errors or omissions, in the course of providing professional advice or services. It commonly includes legal defence costs. PI policies are usually written on a claims-made basis, which means the policy that responds is generally the one in force when the claim is first made and notified, rather than when the work was done. Some professions are required to hold PI insurance under their licence, registration or professional body rules. Cover, limits and exclusions vary by insurer and by profession.",
    whoFor: [
      "Accountants, bookkeepers and financial professionals",
      "Engineers, architects, designers and building consultants",
      "IT consultants, software developers and digital agencies",
      "Management consultants, project managers and advisers",
      "Health and allied health practitioners, depending on their registration requirements",
      "Real estate, property and other licensed professionals",
      "Businesses whose client contracts require PI cover at a specified limit",
    ],
    risks: [
      {
        title: "Errors in advice or calculations",
        text: "Incorrect advice, a missed deadline or a calculation error may cause a client to suffer a financial loss and seek compensation.",
      },
      {
        title: "Design and specification issues",
        text: "A design, drawing or specification that is alleged to be defective may lead to rectification costs and a claim against the professional.",
      },
      {
        title: "Project delivery disputes",
        text: "Delays, scope disagreements or work that does not meet expectations can escalate into allegations of negligence.",
      },
      {
        title: "Defending allegations",
        text: "Even when a claim has no merit, responding to it can involve significant legal costs and time.",
      },
      {
        title: "Claims arising years later",
        text: "Some claims are made long after the work was finished, including after a business has closed or a professional has retired.",
      },
    ],
    options: [
      {
        title: "Civil liability cover",
        text: "Many PI policies cover civil liability arising from professional services, which can be broader than negligence alone, depending on the wording.",
      },
      {
        title: "Defence costs",
        text: "Legal costs to defend a covered claim are commonly included, either within or in addition to the limit of indemnity.",
      },
      {
        title: "Retroactive cover",
        text: "A retroactive date sets how far back the policy reaches for work done in the past. Maintaining continuous cover can help preserve that date.",
      },
      {
        title: "Run-off cover",
        text: "When a business closes, is sold or a professional retires, run-off cover may be available for claims made after work has stopped.",
      },
      {
        title: "Optional extensions",
        text: "Depending on the insurer, extensions may include loss of documents, defamation, fidelity or cover for inquiries and disciplinary proceedings.",
      },
    ],
    considerations: [
      "Because cover is generally claims-made, a known incident or circumstance should be notified to the insurer during the policy period. Late notification can affect cover.",
      "Prior known circumstances are generally excluded from a new policy, so accurate disclosure at the start is important.",
      "Contractual liability beyond your normal legal liability, fines, penalties and guarantees of results are commonly excluded.",
      "Professional body or licence requirements set minimum terms for some professions. Check what applies to yours.",
      "PI policies are profession-specific. Make sure every service you provide is described accurately in the proposal.",
      "Read the PDS or policy wording for the limit, excess, retroactive date and exclusions.",
    ],
    quoteInfo: [
      "Business name, ABN, structure and years in operation",
      "A detailed breakdown of professional services and the percentage of fee income from each",
      "Annual fee income, including any overseas work",
      "Qualifications and professional memberships of principals and staff",
      "Largest contracts and typical contract terms",
      "Current insurer, retroactive date and limit, if insured now",
      "Claims history and any circumstances that could give rise to a claim",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help you understand how claims-made cover, retroactive dates and run-off work, help you complete the proposal accurately, approach insurers on your behalf and arrange the cover you choose. At renewal we review changes to your services and fee income. If you become aware of a claim or a circumstance, we help you notify the insurer, prepare and lodge the claim and liaise with the insurer and any appointed lawyers. The insurer assesses and decides each claim.",
    faqs: [
      {
        question: "What does claims-made mean?",
        answer:
          "A claims-made policy generally responds to claims first made against you and notified to the insurer during the policy period, even if the work was done earlier. This is why continuous cover and timely notification are important.",
      },
      {
        question: "What happens to my cover if I retire or close the business?",
        answer:
          "Claims can still be made after work stops. Run-off cover may be available to respond to claims made after the business closes or you retire, for a set number of years. Terms and availability vary between insurers.",
      },
      {
        question: "Is PI insurance compulsory for my profession?",
        answer:
          "Some professions must hold PI insurance under licensing, registration or professional body rules, and the requirements can differ by state. Other businesses are asked to hold it by their clients. Check the rules that apply to your profession, and we can help you understand them.",
      },
      {
        question: "Should I tell the insurer about a complaint that has not become a claim?",
        answer:
          "Many PI policies ask you to notify circumstances that may give rise to a claim as soon as you become aware of them. Notifying during the policy period may allow the current policy to respond if a claim follows later. We can help you prepare the notification.",
      },
    ],
    relatedProducts: [
      "public-liability-insurance",
      "management-liability-insurance",
      "cyber-insurance",
    ],
    relatedIndustries: ["professional-services", "health-and-care", "property", "trades-and-construction"],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "cyber-insurance",
    name: "Cyber Insurance",
    titleWords: ["Cyber", "Insurance"],
    category: "businessinsurance",
    image: "/images/photos/pexels-1020370.jpg",
    metaDescription:
      "Cyber Insurance for Australian businesses. How cover for data breaches, cyber attacks, recovery costs and liability may work, and how Kooo can help arrange it.",
    summary:
      "Cyber insurance is designed to help with the costs and liability that can follow a cyber attack, data breach or system outage.",
    intro:
      "Most businesses rely on email, cloud software and stored customer data. A cyber incident can interrupt trading, expose personal information and lead to recovery costs and claims. Kooo helps businesses across Australia understand cyber insurance options and arrange cover.",
    overview:
      "Cyber insurance generally combines first party cover, for costs your business incurs after a cyber incident, with third party cover, for claims made against your business by others. First party sections may include incident response, IT forensics, data restoration, business interruption and cyber extortion. Third party sections may include privacy and network security liability, media liability and costs of responding to regulators. Many policies also give access to an incident response team. The cover available, sub-limits and requirements depend on the insurer, the policy wording and the security controls in place.",
    whoFor: [
      "Businesses that store customer, patient or employee personal information",
      "Businesses that take payments online or by card",
      "Professional services firms that send invoices and payment instructions by email",
      "Retailers and operators relying on point-of-sale and booking systems",
      "Businesses that depend on cloud software or outsourced IT providers",
      "Organisations with privacy obligations to clients or regulators",
    ],
    risks: [
      {
        title: "Ransomware and malware",
        text: "Malicious software can encrypt or corrupt systems and data, halting operations until systems are restored.",
      },
      {
        title: "Data breaches",
        text: "Personal or confidential information may be accessed or disclosed without authorisation, which can trigger notification obligations and claims.",
      },
      {
        title: "Business email compromise",
        text: "A compromised email account or a convincing fake invoice may lead to funds being paid to a fraudster.",
      },
      {
        title: "System outage",
        text: "A cyber incident affecting your systems, or in some cases a provider’s systems, can stop sales, bookings and production.",
      },
      {
        title: "Lost or stolen devices",
        text: "Laptops and phones holding business data can be lost or stolen, creating a potential privacy incident.",
      },
    ],
    options: [
      {
        title: "Incident response",
        text: "Access to specialists such as IT forensic investigators, lawyers and public relations advisers after a suspected incident.",
      },
      {
        title: "Data and system restoration",
        text: "Costs to restore, recreate or recollect data and repair software affected by an insured incident.",
      },
      {
        title: "Business interruption",
        text: "Loss of profit and extra costs during a system outage caused by an insured cyber event, after a waiting period set out in the policy.",
      },
      {
        title: "Cyber extortion",
        text: "Costs of responding to an extortion threat, subject to the policy terms and to any legal restrictions on payments.",
      },
      {
        title: "Privacy and network security liability",
        text: "Cover for claims by third parties arising from a data breach or a security failure, including defence costs.",
      },
      {
        title: "Regulatory response",
        text: "Costs of responding to a regulatory investigation, and fines or penalties only where they are insurable by law.",
      },
      {
        title: "Cyber crime and social engineering",
        text: "Some insurers offer limited cover for funds lost through fraudulent payment instructions. This is often optional and sub-limited.",
      },
    ],
    considerations: [
      "Insurers commonly ask about security controls such as multi-factor authentication, backups, patching and staff training. Cover may depend on these being in place.",
      "Social engineering and funds transfer fraud are often sub-limited or need to be added as an option.",
      "Business interruption sections generally have a waiting period before cover starts and may treat outages at third party providers differently.",
      "Betterment, such as upgrading systems after an incident, and losses from war or infrastructure failure, may be excluded.",
      "Contact the insurer’s incident response line as early as possible. Policies may require this, and acting quickly can reduce the impact.",
      "Read the PDS or policy wording for sub-limits, waiting periods, excesses and exclusions.",
    ],
    quoteInfo: [
      "Business name, ABN, industry and annual revenue",
      "The type and approximate number of personal records held",
      "Use of multi-factor authentication for email and remote access",
      "Backup arrangements, including whether backups are offline or separated",
      "Antivirus or endpoint protection, patching practices and staff training",
      "Payment processes, including how changes to bank details are verified",
      "Details of any past cyber incidents or losses",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help you understand the sections of a cyber policy, work through the security questions insurers ask, approach insurers on your behalf and arrange the cover you choose. At renewal we review changes to your systems and controls. If an incident happens, we can help you contact the insurer’s response team, prepare and lodge the claim and liaise with the insurer throughout. The insurer assesses and decides each claim under the policy.",
    faqs: [
      {
        question: "Our IT is managed by an outside provider. Is cyber insurance still relevant?",
        answer:
          "Outsourcing IT does not remove the risk to your business. Your business may still hold responsibility for its data and may still lose income during an outage. How a policy treats incidents at outsourced providers varies, so it is worth checking the wording.",
      },
      {
        question: "Does cyber insurance cover funds paid to a fake invoice?",
        answer:
          "Some policies offer cover for social engineering or funds transfer fraud, but it is often optional, sub-limited and subject to verification conditions. Other policies exclude it. We can help you compare how different insurers approach this.",
      },
      {
        question: "What security measures do insurers usually ask about?",
        answer:
          "Common questions cover multi-factor authentication, backups, software updates, endpoint protection and staff awareness training. The answers can affect whether an insurer offers cover and on what terms.",
      },
      {
        question: "What should we do first if we suspect a cyber incident?",
        answer:
          "Follow the steps in your policy, which usually include contacting the insurer’s incident response line promptly. Avoid deleting evidence or paying any demand before getting advice. Let us know as well so we can help with the claim.",
      },
    ],
    relatedProducts: [
      "management-liability-insurance",
      "professional-indemnity-insurance",
      "business-interruption-insurance",
    ],
    relatedIndustries: ["professional-services", "health-and-care", "grocery-and-retail", "education"],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "commercial-property-insurance",
    name: "Commercial Property Insurance",
    titleWords: ["Commercial", "Property"],
    category: "businessinsurance",
    image: "/images/photos/industry-retail.webp",
    metaDescription:
      "Commercial Property Insurance in Australia for owners and tenants. How cover for buildings, fit-out, contents and loss of rent may work, and how Kooo can help.",
    summary:
      "Commercial property insurance is designed to cover physical loss or damage to business buildings, fit-out, contents and stock.",
    intro:
      "Business premises, fit-out and stock are often among a business’s largest assets. Commercial property insurance is designed to respond to physical loss or damage from insured events such as fire and storm. Kooo helps building owners and tenants across Australia understand their options and arrange cover.",
    overview:
      "Commercial property insurance generally covers physical loss or damage to buildings, fit-out, plant, contents and stock at the insured premises. Depending on the policy, cover may be on a defined events basis, such as fire, storm, impact and malicious damage, or on a broader accidental damage basis. Building owners may also consider loss of rent cover, and tenants may consider cover for their fit-out and contents along with business interruption. Construction materials, how the property is used, who occupies it and whether it is vacant can all affect the availability and terms of cover. The cover depends on the insurer, the policy wording and the information provided.",
    whoFor: [
      "Owners of shops, offices, warehouses and factories",
      "Commercial landlords leasing premises to one or more tenants",
      "Tenants who own their fit-out, equipment and stock",
      "Owners of mixed-use buildings with retail and residential parts",
      "Businesses operating from more than one location",
      "Owners with a property that is vacant or between tenants",
    ],
    risks: [
      {
        title: "Fire and smoke",
        text: "Fire can damage or destroy buildings, contents and stock, and smoke damage can spread through a premises.",
      },
      {
        title: "Storm and water damage",
        text: "Storms, hail and bursting pipes can damage roofs, ceilings, stock and equipment. Flood cover varies between insurers and locations.",
      },
      {
        title: "Malicious damage and break-ins",
        text: "Vandalism, graffiti and forced entry can damage the building, glass and fit-out.",
      },
      {
        title: "Tenant activities",
        text: "The type of business operating in a building, such as cooking or storage of flammable goods, can change the fire risk.",
      },
      {
        title: "Vacant periods",
        text: "Unoccupied buildings may be at greater risk of undetected damage, squatters and vandalism.",
      },
    ],
    options: [
      {
        title: "Building",
        text: "Cover for the structure, permanent fixtures and outbuildings, usually on a reinstatement and replacement basis up to the sum insured.",
      },
      {
        title: "Contents, fit-out and stock",
        text: "Cover for furniture, equipment, tenant improvements and stock owned by the business or held in trust.",
      },
      {
        title: "Accidental damage",
        text: "Some policies extend beyond defined events to sudden and unforeseen physical loss or damage, subject to exclusions.",
      },
      {
        title: "Loss of rent",
        text: "For landlords, cover for rent lost while an insured building cannot be occupied following insured damage, for a set period.",
      },
      {
        title: "Additional costs",
        text: "Many policies include costs such as removal of debris, professional fees and meeting building regulation requirements during rebuilding, often within limits.",
      },
      {
        title: "Landlord liability",
        text: "Owners may consider public liability as building owner, which is often arranged alongside the property cover.",
      },
    ],
    considerations: [
      "Insurers ask about construction materials, including any expanded polystyrene (EPS) panels or combustible cladding. These can limit the insurers willing to offer cover.",
      "Sums insured should reflect current rebuilding and replacement costs, including demolition and professional fees. Underinsurance can reduce a claim.",
      "Many policies restrict cover once a building has been unoccupied for a set number of consecutive days. The period and the restrictions vary.",
      "Flood, gradual damage, wear and tear, pests and some types of water damage are often excluded or limited.",
      "Changes in tenant or use should be disclosed to the insurer, as they can affect cover.",
      "Read the PDS or policy wording for the basis of cover, excesses, limits and conditions.",
    ],
    quoteInfo: [
      "Property address and the year it was built",
      "Construction of walls, roof and floors, and any EPS panelling or cladding",
      "Occupancy, including the business activities of each tenant",
      "Building sum insured, and contents, fit-out and stock values",
      "Annual rental income, if loss of rent is required",
      "Fire protection and security, such as sprinklers, alarms and monitoring",
      "Any vacant areas or periods of non-occupancy",
      "Claims history for the property",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help owners and tenants understand the property covers commonly available, collect the construction and occupancy details insurers ask for, approach insurers on your behalf and arrange the cover you choose. At renewal we can review sums insured, tenants and occupancy with you. If damage occurs, we help you prepare and lodge the claim and liaise with the insurer and any loss adjuster it appoints. The insurer assesses and decides the claim under the policy.",
    faqs: [
      {
        question: "Why does construction type matter?",
        answer:
          "Construction materials affect how a building behaves in a fire and how costly it is to repair. Insurers commonly ask about walls, roofing and any EPS panels or combustible cladding. Some insurers may decline or apply different terms where these materials are present.",
      },
      {
        question: "How does occupancy affect commercial property insurance?",
        answer:
          "The activities carried out in a building change its risk. A café or workshop generally presents a different fire risk to an office. Insurers ask about each occupancy, and a change of use during the policy period should be disclosed.",
      },
      {
        question: "Who insures what when a property is leased to tenants?",
        answer:
          "Often the owner insures the building and the tenant insures its own fit-out, contents and stock, but leases differ. The lease usually sets out each party’s insurance obligations. We can help you understand what the lease asks for before cover is arranged.",
      },
      {
        question: "What happens if the building becomes vacant?",
        answer:
          "Many policies limit or suspend some cover, such as theft or malicious damage, once a building has been unoccupied for a set period. Tell your broker or insurer if a property becomes vacant. Specific unoccupied property cover may also be available.",
      },
      {
        question: "Does commercial property insurance include flood?",
        answer:
          "Flood cover varies. Some policies include it, some offer it as an option and some exclude it, and availability can depend on location. Check the PDS or policy wording, and ask us to confirm how flood is treated in any quote.",
      },
    ],
    relatedProducts: [
      "business-interruption-insurance",
      "unoccupied-property-insurance",
      "commercial-strata-insurance",
      "landlord-insurance",
    ],
    relatedIndustries: ["property", "grocery-and-retail", "manufacturing-and-distribution", "accommodation"],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "management-liability-insurance",
    name: "Management Liability Insurance",
    titleWords: ["Management", "Liability"],
    category: "businessinsurance",
    image: "/images/photos/pexels-327540.jpg",
    metaDescription:
      "Management Liability Insurance for Australian companies. How D&O, employment practices, statutory liability and crime sections may work, and how Kooo can help.",
    summary:
      "Management liability insurance combines covers for directors, the company, employment claims, statutory liability and crime in one policy.",
    intro:
      "Running a company brings legal duties to employees, regulators, creditors and others. Management liability insurance packages several covers designed to respond to claims and investigations arising from how a business is managed. Kooo helps private companies, not-for-profits and associations across Australia understand their options and arrange cover.",
    overview:
      "Management liability insurance is commonly designed for private companies and not-for-profit organisations. It generally brings together directors and officers liability, company (entity) liability, employment practices liability, statutory liability, crime, and sometimes tax audit and workplace health and safety sections. Cover may include legal defence costs, investigation costs and, in some cases, fines and penalties, but only where they can lawfully be insured. Sections, limits and exclusions depend on the insurer and the policy wording.",
    whoFor: [
      "Privately owned companies and family businesses",
      "Directors and officers of small and medium companies",
      "Businesses with employees, including casual and part-time staff",
      "Not-for-profit organisations, associations and clubs",
      "Businesses that handle cash or have staff with access to bank accounts",
    ],
    risks: [
      {
        title: "Employment disputes",
        text: "Claims of unfair dismissal, discrimination, bullying or harassment can be brought against a business through Fair Work and other bodies.",
      },
      {
        title: "Regulatory investigations",
        text: "Regulators may investigate a business or its directors in relation to workplace safety, environmental, consumer or corporate law matters.",
      },
      {
        title: "Employee theft and fraud",
        text: "Staff with access to money, stock or accounts may misappropriate funds, sometimes over a long period before it is discovered.",
      },
      {
        title: "Claims against directors",
        text: "Shareholders, creditors, suppliers or liquidators may allege a director breached their duties.",
      },
      {
        title: "Tax audits",
        text: "An audit or investigation by a tax authority can involve significant accounting and professional fees.",
      },
    ],
    options: [
      {
        title: "Directors and officers liability",
        text: "Cover for directors and officers personally for claims alleging wrongful acts in managing the company, including defence costs.",
      },
      {
        title: "Company liability",
        text: "Cover for the company itself for certain claims and investigations, subject to the policy terms.",
      },
      {
        title: "Employment practices liability",
        text: "Cover for claims by employees and prospective employees, such as unfair dismissal, discrimination and harassment, including defence costs.",
      },
      {
        title: "Statutory liability",
        text: "Cover for defence costs and some fines and penalties for breaches of certain laws, where those fines and penalties are legally insurable.",
      },
      {
        title: "Crime",
        text: "Cover for direct financial loss from theft or fraud by employees and, in some policies, by third parties.",
      },
      {
        title: "Tax audit",
        text: "Cover for professional fees incurred in responding to a tax audit or investigation, generally within a sub-limit.",
      },
    ],
    considerations: [
      "Some fines and penalties cannot be insured by law, including certain work health and safety penalties in some states. Cover for penalties applies only where the law allows.",
      "Policies are generally claims-made. Claims and circumstances should be notified to the insurer during the policy period.",
      "Deliberate or fraudulent acts, prior known matters, and professional services are commonly excluded.",
      "Employment practices claims usually have a separate excess, which may be higher than other sections.",
      "Crime cover may require certain financial controls to be in place, such as dual authorisation of payments.",
      "Read the PDS or policy wording carefully, as each section has its own limits, excesses and exclusions.",
    ],
    quoteInfo: [
      "Company name, ABN, ownership structure and years in business",
      "Most recent financial statements, including total assets and any losses",
      "Number of employees, and details of any recent redundancies or restructures",
      "Financial controls, such as payment authorisation and bank reconciliation",
      "Details of any past claims, investigations or employee disputes",
      "Current insurer and policy details, if insured",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help you understand the sections in a management liability policy, gather the financial and employment information insurers ask for, approach insurers on your behalf and arrange the cover you choose. At renewal we review changes in your business and staff. If a claim, complaint or investigation arises, we help you notify the insurer, prepare and lodge the claim and liaise with the insurer and any lawyers it appoints. The insurer assesses and decides each claim.",
    faqs: [
      {
        question: "How is management liability different from D&O insurance?",
        answer:
          "Directors and officers insurance focuses on the personal liability of directors and officers. Management liability is a broader package, often for private companies, that usually includes D&O alongside employment practices, statutory liability, crime and other sections.",
      },
      {
        question: "Can management liability pay fines and penalties?",
        answer:
          "Some policies include cover for fines and penalties, but only where the law allows them to be insured. Some penalties, including certain work health and safety penalties in some states, cannot be insured. The policy wording sets out what may be covered.",
      },
      {
        question: "Does it cover unfair dismissal claims?",
        answer:
          "Employment practices liability sections commonly respond to unfair dismissal and similar claims, including defence costs, subject to the policy terms and excess. Claims for unpaid wages or entitlements are often excluded.",
      },
      {
        question: "Is management liability relevant to not-for-profits?",
        answer:
          "Not-for-profit organisations and their committee members can face many of the same claims as private companies, including employment and regulatory matters. Some insurers offer policies designed for not-for-profits and associations.",
      },
    ],
    relatedProducts: [
      "directors-and-officers-insurance",
      "professional-indemnity-insurance",
      "cyber-insurance",
    ],
    relatedIndustries: ["professional-services", "places-of-worship-and-community", "health-and-care", "manufacturing-and-distribution"],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "directors-and-officers-insurance",
    name: "Directors and Officers Insurance",
    titleWords: ["Directors", "and Officers"],
    category: "businessinsurance",
    image: "/images/photos/contact-bg.jpg",
    metaDescription:
      "Directors and Officers Insurance in Australia. How D&O cover may respond to claims against directors and senior managers, policy sides and how Kooo can help.",
    summary:
      "Directors and officers (D&O) insurance is designed to respond to claims against directors and senior managers for alleged wrongful acts in their roles.",
    intro:
      "Directors and senior managers make decisions that can be scrutinised by shareholders, regulators, creditors and others. D&O insurance is designed to respond to claims made against them personally, and to the legal costs of defending those claims. Kooo helps companies and organisations across Australia understand D&O options and arrange cover.",
    overview:
      "Directors and officers (D&O) insurance generally covers directors, officers and some senior managers for claims alleging a wrongful act, such as a breach of duty, misleading statement or error, in the course of their role. D&O policies are commonly structured in sides. Side A covers individuals where the company cannot or does not indemnify them. Side B reimburses the company where it has indemnified its directors and officers. Side C, often called entity cover, may cover the company itself for certain claims, most commonly securities claims for listed companies. D&O can be arranged as a standalone policy or as part of a management liability package. Cover depends on the insurer and the policy wording.",
    whoFor: [
      "Directors and officers of private, unlisted and listed companies",
      "Boards and committee members of not-for-profits and associations",
      "Companies raising capital from investors",
      "Businesses in regulated industries",
      "Companies with outside directors, advisory boards or investor nominees",
      "Directors who sit on the boards of other organisations",
    ],
    risks: [
      {
        title: "Regulatory action",
        text: "Directors may be investigated or prosecuted by regulators for alleged breaches of corporate, workplace safety, environmental or consumer law.",
      },
      {
        title: "Insolvency",
        text: "If a company becomes insolvent, a liquidator or creditors may pursue directors, for example for alleged insolvent trading.",
      },
      {
        title: "Shareholder and investor claims",
        text: "Shareholders or investors may allege that directors mismanaged the company or made misleading statements.",
      },
      {
        title: "Third party claims",
        text: "Suppliers, competitors, customers or employees may bring claims that name directors personally.",
      },
    ],
    options: [
      {
        title: "Side A: individual cover",
        text: "Covers directors and officers personally where the company is unable or not permitted to indemnify them, such as in insolvency.",
      },
      {
        title: "Side B: company reimbursement",
        text: "Reimburses the company for amounts it pays to indemnify its directors and officers, subject to the policy terms.",
      },
      {
        title: "Side C: entity cover",
        text: "Covers the company itself for certain claims. For listed companies this is generally limited to securities claims.",
      },
      {
        title: "Investigation and defence costs",
        text: "Covers legal costs of responding to official investigations, inquiries and claims, which can be significant even where no liability is found.",
      },
      {
        title: "Extensions",
        text: "Depending on the insurer, extensions may include outside directorships, extradition costs, public relations expenses, and cover for retired directors.",
      },
    ],
    considerations: [
      "Policies are generally claims-made. Claims and circumstances should be notified during the policy period.",
      "Dishonest, fraudulent or criminal acts, and improper personal profit, are commonly excluded once established.",
      "Some fines and penalties are not insurable by law. Cover for penalties applies only where the law allows.",
      "Insured versus insured exclusions can limit cover for claims brought by the company or its directors against other insured persons.",
      "Claims connected to insolvency, major shareholders or prior known matters may be excluded or restricted.",
      "Read the PDS or policy wording, including how the limit is shared between individuals and the company.",
    ],
    quoteInfo: [
      "Company name, ABN, structure and whether it is listed or unlisted",
      "Recent financial statements, including any going concern notes",
      "Details of directors and officers, and any outside directorships",
      "Shareholders and any plans to raise capital, merge or acquire",
      "Industry and any regulatory licences held",
      "Past claims, investigations or circumstances involving directors",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help boards and companies understand how D&O cover is structured, gather the financial and governance information insurers ask for, approach insurers on your behalf and arrange the cover you choose, either standalone or within a management liability package. At renewal we review changes to the board and company. If a claim or investigation arises, we help you notify the insurer, prepare and lodge the claim and liaise with the insurer and any lawyers it appoints. The insurer assesses and decides each claim.",
    faqs: [
      {
        question: "Does D&O insurance cover the company or just the directors?",
        answer:
          "D&O is primarily for directors and officers personally (Side A), with Side B reimbursing the company for indemnities it pays. Some policies include Side C, which covers the company itself for limited types of claims. The structure varies between policies.",
      },
      {
        question: "Can D&O respond after a company goes into liquidation?",
        answer:
          "Directors may face claims from liquidators or creditors after insolvency. Side A is designed to respond where the company cannot indemnify the directors. Policies vary, and some exclude or restrict insolvency-related claims, so the wording is important.",
      },
      {
        question: "Is D&O relevant to small private companies?",
        answer:
          "Directors of small private companies have the same legal duties as directors of larger companies. Many small companies arrange D&O as part of a management liability package, which also includes other covers relevant to private businesses.",
      },
      {
        question: "Are retired directors covered?",
        answer:
          "Many D&O policies include cover for former directors and officers for claims relating to their time in the role. Some policies also offer run-off cover if the company is sold or ceases operating. Check the policy wording for details.",
      },
    ],
    relatedProducts: [
      "management-liability-insurance",
      "professional-indemnity-insurance",
      "cyber-insurance",
    ],
    relatedIndustries: ["professional-services", "places-of-worship-and-community", "education", "health-and-care"],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "product-liability-insurance",
    name: "Product Liability Insurance",
    titleWords: ["Product", "Liability"],
    category: "businessinsurance",
    image: "/images/photos/pexels-2696064.jpg",
    metaDescription:
      "Product Liability Insurance for Australian manufacturers, importers and sellers. What it generally covers, key exclusions and how Kooo can help arrange cover.",
    summary:
      "Product liability insurance is designed to respond to claims that goods you sell, supply or manufacture caused injury or property damage.",
    intro:
      "Businesses that make, import, distribute or sell goods may be held responsible if those goods cause injury or damage. Product liability insurance is designed to respond to these claims and the costs of defending them. Kooo helps manufacturers, importers, wholesalers and retailers across Australia understand their options and arrange cover.",
    overview:
      "Product liability insurance, also called products liability, generally covers a business’s legal liability for personal injury or property damage caused by goods it has sold, supplied, manufactured, imported, repaired or installed. It commonly includes legal defence costs and is often arranged together with public liability. Under Australian consumer law, importers can be treated as manufacturers where the overseas maker has no presence in Australia, which can increase the exposure for businesses importing goods. Cover is usually subject to an aggregate limit for all product claims during the policy period. Cover depends on the insurer and the policy wording.",
    whoFor: [
      "Manufacturers and food producers",
      "Importers and distributors of goods made overseas",
      "Wholesalers and retailers, including online sellers",
      "Businesses that assemble, label or repackage products",
      "Businesses that install, service or repair goods",
      "Businesses whose retailers or distributors ask for products liability cover",
    ],
    risks: [
      {
        title: "Defective products",
        text: "A manufacturing or design defect may cause a product to fail and injure someone or damage their property.",
      },
      {
        title: "Food contamination",
        text: "Contaminated or mislabelled food may cause illness or allergic reactions.",
      },
      {
        title: "Imported goods",
        text: "Importers may be treated as the manufacturer of goods sourced from overseas, and be pursued for claims about those goods.",
      },
      {
        title: "Inadequate warnings or instructions",
        text: "Missing or unclear labels, warnings or instructions can contribute to injury or damage.",
      },
      {
        title: "Installation and repair",
        text: "Goods that are incorrectly installed or repaired may cause fire, water damage or injury.",
      },
    ],
    options: [
      {
        title: "Products liability",
        text: "Cover for legal liability for personal injury or property damage caused by your products, subject to the policy terms and aggregate limit.",
      },
      {
        title: "Combined public and products liability",
        text: "Products liability is commonly arranged together with public liability under one policy.",
      },
      {
        title: "Defence costs",
        text: "Legal costs to investigate and defend a covered claim are commonly included, depending on the wording.",
      },
      {
        title: "Export cover",
        text: "Some insurers can extend cover to products exported overseas, often excluding certain countries, such as the USA and Canada, unless specifically agreed.",
      },
      {
        title: "Product recall",
        text: "Recall costs are generally excluded from products liability. Separate product recall or contamination cover may be available from specialist insurers.",
      },
    ],
    considerations: [
      "The cost of recalling, repairing or replacing your own faulty product is generally excluded.",
      "Products exported overseas, particularly to North America, may be excluded unless declared and agreed.",
      "Financial loss without injury or property damage, and claims about a product failing to perform as promised, are commonly excluded.",
      "Insurers may ask about quality control, supplier agreements and whether the overseas manufacturer has its own cover.",
      "Product claims usually share an aggregate limit for the whole policy period.",
      "Read the PDS or policy wording for limits, excesses and exclusions, including for specific product types.",
    ],
    quoteInfo: [
      "Business name, ABN and a description of all products",
      "Annual turnover, split between locally made and imported goods",
      "Countries products are sourced from and exported to",
      "Quality control, testing and labelling processes",
      "Whether overseas suppliers hold their own product liability cover",
      "Any product recalls, complaints or claims",
      "The limit of indemnity required by retailers or contracts",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help you understand how product liability cover works, including import and export issues, approach insurers on your behalf and arrange the cover you choose. At renewal we review changes to your product range, suppliers and markets. If a claim is made, we help you prepare and lodge it with the insurer and liaise with the insurer as the claim progresses. The insurer assesses and decides each claim under the policy.",
    faqs: [
      {
        question: "We only resell products. Is product liability still relevant?",
        answer:
          "Retailers and wholesalers can be included in claims about products they sell, even if they did not make them. Importers may also be treated as the manufacturer in some situations. The level of exposure varies depending on your role in the supply chain.",
      },
      {
        question: "Does product liability cover a product recall?",
        answer:
          "Generally, no. Products liability policies usually exclude the cost of recalling, withdrawing or replacing products. Separate product recall or contamination insurance may be available.",
      },
      {
        question: "Are products sold overseas covered?",
        answer:
          "Many policies cover products sold in Australia, with exports covered only if declared and agreed by the insurer. Exports to the USA and Canada are commonly excluded or subject to special terms. Let us know where your products are sold so this can be addressed.",
      },
      {
        question: "Why do insurers ask about our overseas suppliers?",
        answer:
          "If an overseas manufacturer has no presence in Australia, the importer may be treated as the manufacturer. Insurers therefore look at supplier quality, product testing and contracts when assessing the risk.",
      },
    ],
    relatedProducts: [
      "public-liability-insurance",
      "business-insurance",
      "marine-cargo-insurance",
    ],
    relatedIndustries: ["manufacturing-and-distribution", "food-and-hospitality", "grocery-and-retail"],
  },

  // ---------------------------------------------------------------------------
  {
    slug: "business-interruption-insurance",
    name: "Business Interruption Insurance",
    titleWords: ["Business", "Interruption"],
    category: "businessinsurance",
    image: "/images/photos/pexels-1451040.jpg",
    metaDescription:
      "Business Interruption Insurance in Australia. How cover for lost gross profit and extra costs after insured damage may work, and how Kooo can help arrange it.",
    summary:
      "Business interruption insurance is designed to cover loss of income and extra costs when trading is disrupted by insured damage.",
    intro:
      "After a fire or storm, repairing the premises is only part of the problem. Lost sales and ongoing expenses can continue while the business recovers. Business interruption insurance is designed to help with that financial impact, subject to the policy terms. Kooo helps businesses across Australia understand their options and arrange cover.",
    overview:
      "Business interruption insurance generally covers loss of gross profit or revenue, and increased costs of working, when a business is interrupted by physical loss or damage that is covered under a property policy. It is usually arranged with property cover, either within a business package or alongside a commercial property policy. Cover runs for an indemnity period chosen by the business, such as 12 months or longer, which is the maximum time the policy will pay for losses after the damage. Extensions may apply to damage at suppliers’ or customers’ premises, loss of access, or failure of utilities. The cover available depends on the insurer and the policy wording.",
    whoFor: [
      "Businesses that rely on a single premises to trade",
      "Hospitality, retail and service businesses with ongoing fixed costs",
      "Manufacturers with specialised plant that may take time to replace",
      "Businesses relying on key suppliers or major customers",
      "Commercial landlords considering cover for lost rent",
      "Businesses with loan repayments, leases and wages to maintain",
    ],
    risks: [
      {
        title: "Damage to premises",
        text: "Fire, storm or other insured damage can close a business for weeks or months while repairs take place.",
      },
      {
        title: "Ongoing fixed costs",
        text: "Rent, loan repayments and some wages may continue while income stops or falls.",
      },
      {
        title: "Long rebuild times",
        text: "Approvals, trades availability and lead times for equipment can extend recovery well beyond the initial repair.",
      },
      {
        title: "Supplier or customer disruption",
        text: "Damage at a key supplier’s or customer’s premises may disrupt your business even when your own premises are not damaged.",
      },
      {
        title: "Loss of access",
        text: "Damage nearby, or restrictions imposed by authorities, may prevent customers reaching your premises.",
      },
    ],
    options: [
      {
        title: "Gross profit or revenue",
        text: "Cover for the reduction in gross profit or revenue caused by the interruption, calculated as set out in the policy.",
      },
      {
        title: "Increased costs of working",
        text: "Additional costs reasonably incurred to reduce the loss, such as temporary premises or equipment hire.",
      },
      {
        title: "Indemnity period",
        text: "The business chooses how long cover may apply after damage occurs. Longer indemnity periods may be relevant where recovery could be slow.",
      },
      {
        title: "Claims preparation costs",
        text: "Many policies contribute to accountants’ fees for preparing a business interruption claim, generally within a limit.",
      },
      {
        title: "Extensions",
        text: "Depending on the insurer, extensions may include suppliers’ and customers’ premises, prevention of access, failure of public utilities and loss of rent.",
      },
    ],
    considerations: [
      "Cover is generally triggered by insured physical damage. A slowdown in trade without damage is usually not covered.",
      "Gross profit has a specific meaning in insurance policies that may differ from your accounts. Your accountant may help estimate the sum insured.",
      "Underinsurance may reduce a claim, especially where a policy contains an average or co-insurance clause.",
      "Pandemic, infectious disease and government closure orders are commonly excluded or tightly limited.",
      "The indemnity period should allow for realistic rebuilding and recovery times.",
      "Read the PDS or policy wording for how losses are calculated, waiting periods and sub-limits for extensions.",
    ],
    quoteInfo: [
      "Business name, ABN and description of activities",
      "Recent financial statements and projected turnover",
      "Estimated gross profit, calculated on the basis the insurer uses",
      "Preferred indemnity period and reasons for it",
      "Details of key suppliers, customers and premises",
      "Rental income, if loss of rent cover is required",
      "Any business continuity plans or alternative premises arrangements",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking services. We help you understand how business interruption cover works, explain the information insurers use to set the sum insured and indemnity period, approach insurers on your behalf and arrange the cover you choose. At renewal we review your figures and indemnity period with you. After an insured event, we help you prepare and lodge the claim, gather supporting financial records and liaise with the insurer and its loss adjuster. The insurer assesses and decides the claim under the policy.",
    faqs: [
      {
        question: "Does business interruption cover a downturn in trade?",
        answer:
          "Generally, no. Business interruption cover is usually triggered by insured physical loss or damage, such as a fire or storm, that interrupts the business. A general economic downturn or loss of customers without damage is not usually covered.",
      },
      {
        question: "How long should the indemnity period be?",
        answer:
          "The indemnity period is a decision for the business. Many businesses consider how long it could take to repair or rebuild premises, replace equipment and win back customers. Recovery can take longer than expected, so it helps to think through realistic timeframes.",
      },
      {
        question: "Why is gross profit calculated differently for insurance?",
        answer:
          "Insurance policies define gross profit in their own way, often as turnover less specified working expenses such as purchases. This can differ from the gross profit in your accounts. Your accountant can help estimate the figure using the policy definition.",
      },
      {
        question: "Can I buy business interruption insurance on its own?",
        answer:
          "Business interruption is usually linked to a property policy, because cover is triggered by insured damage. It is commonly arranged as a section of a business package or alongside commercial property insurance.",
      },
    ],
    relatedProducts: [
      "commercial-property-insurance",
      "business-insurance",
      "cyber-insurance",
    ],
    relatedIndustries: ["food-and-hospitality", "manufacturing-and-distribution", "grocery-and-retail", "accommodation"],
  },
];
