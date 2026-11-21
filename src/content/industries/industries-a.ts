import type { Industry } from "../catalogue-types";

// Industry pages: transport, trades, professional services, food, retail, fuel and automotive,
// education, and health and care. General information only, drafted for the client's review.

export const industriesA: Industry[] = [
  {
    slug: "transport-and-logistics",
    name: "Transport and Logistics",
    titleWords: ["Transport", "Logistics"],
    image: "/images/photos/pexels-2199293.jpg",
    metaDescription:
      "Transport and logistics insurance information for Australian truck operators, owner drivers, fleets and couriers, with general advice and broking from Kooo.",
    summary:
      "Insurance options commonly considered by truck operators, owner drivers, fleets, couriers and logistics businesses across Australia.",
    intro:
      "Transport businesses keep goods moving between depots, ports, warehouses and customers. Vehicles, loads and drivers are on the road every day, and each brings its own risks. Kooo helps operators understand the insurance options that may be relevant to the way they work.",
    audiences: ["Truck operators", "Owner drivers", "Fleet businesses", "Couriers", "Logistics businesses"],
    risks: [
      {
        title: "Vehicles on the road",
        text: "Trucks, vans and prime movers can be damaged in collisions, rollovers, fire or storms. Damage to other vehicles and property can also lead to claims against the business.",
      },
      {
        title: "Goods being carried",
        text: "Freight can be damaged, contaminated or stolen while loading, in transit or during unloading. Who bears the loss often depends on the contract with the customer.",
      },
      {
        title: "Downtime after an incident",
        text: "When a truck is off the road for repairs, income can stop while loan repayments and other costs continue.",
      },
      {
        title: "Depots, yards and loading areas",
        text: "Customers, contractors and members of the public may visit yards and loading docks. Slips, trips and forklift incidents can lead to injury claims.",
      },
      {
        title: "Drivers and staff",
        text: "Long hours, manual handling and roadside work bring a risk of injury. Owner drivers may have no income while they recover.",
      },
      {
        title: "Contract and customer requirements",
        text: "Head contractors, freight forwarders and major customers often set minimum insurance requirements before work can start.",
      },
    ],
    insurance: [
      {
        title: "Truck insurance",
        text: "Commonly considered for accidental damage, theft and liability to other people’s vehicles and property, depending on the insurer and policy wording.",
        product: "truck-insurance",
      },
      {
        title: "Fleet insurance",
        text: "May be relevant where several vehicles are insured under one policy with a single renewal date.",
        product: "fleet-insurance",
      },
      {
        title: "Commercial motor insurance",
        text: "Commonly considered for vans, utes and light commercial vehicles used for couriers and deliveries.",
        product: "commercial-motor-insurance",
      },
      {
        title: "Goods in transit insurance",
        text: "May respond to loss of or damage to goods while they are being carried, subject to the policy terms.",
        product: "goods-in-transit-insurance",
      },
      {
        title: "Carrier’s liability insurance",
        text: "May be relevant where a business carries goods owned by others and can be held responsible for their loss or damage.",
        product: "carriers-liability-insurance",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered for injury or property damage claims arising from business activities away from the vehicle, such as at depots or customer sites.",
        product: "public-liability-insurance",
      },
      {
        title: "Personal accident and sickness insurance",
        text: "May be relevant to owner drivers who want some income protection if injury or illness keeps them off the road.",
        product: "personal-accident-and-sickness-insurance",
      },
      {
        title: "Workers compensation",
        text: "Employers generally need to consider workers compensation for employees. It is a state-based scheme and requirements vary by state and territory.",
      },
    ],
    considerations: [
      "Policies differ on who is covered to drive, including age and licence conditions for drivers.",
      "Goods in transit and carrier’s liability policies often exclude certain goods or limit cover for some types of load.",
      "Compulsory third party (CTP) injury cover is generally arranged through vehicle registration and is separate from a truck policy. Arrangements vary by state and territory.",
      "Some policies limit cover for unattended vehicles, overnight parking or unsecured loads.",
      "Contract terms with customers can shift responsibility for goods onto the carrier, so it can help to review them alongside the policy.",
      "Read the Product Disclosure Statement (PDS) and policy wording to understand limits, exclusions and excesses.",
    ],
    quoteInfo: [
      "Vehicle details, including make, model, year, value and any modifications",
      "Driver details, licence types and driving history",
      "How vehicles are used, the areas travelled and typical distances",
      "Types and values of goods carried",
      "Where vehicles are garaged or parked overnight",
      "Claims and insurance history",
      "Any insurance requirements in customer or head contractor contracts",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking for transport and logistics businesses. We talk through how your vehicles and drivers operate, explain the options that may be relevant, approach insurers on your behalf and arrange cover. At renewal we review changes to your fleet or contracts. If something goes wrong, we help prepare and lodge the claim and liaise with the insurer. The insurer decides the claim under the policy terms.",
    faqs: [
      {
        question: "Can I insure one truck and a few vans together?",
        answer:
          "Many insurers offer fleet policies that can include different vehicle types. Whether a fleet policy is available usually depends on the number of vehicles and how they are used. We can explain the options when we review your vehicles.",
      },
      {
        question: "Does truck insurance cover the goods I am carrying?",
        answer:
          "Truck insurance generally relates to the vehicle and liability to others, not the load itself. Goods in transit or carrier’s liability insurance are commonly considered for freight. Check the policy wording for what each policy includes.",
      },
      {
        question: "What happens if my truck is off the road after an accident?",
        answer:
          "Some policies include limited options such as hire vehicle or downtime benefits, and others do not. The terms vary between insurers. We can explain what is available when comparing policies.",
      },
      {
        question: "My customer has asked for a certificate of currency. Can Kooo help?",
        answer:
          "Yes. Once cover is in place, we can request a certificate of currency from the insurer. It shows the policies held and their limits at a point in time.",
      },
    ],
    relatedIndustries: ["fuel-and-automotive", "manufacturing-and-distribution", "trades-and-construction"],
  },
  {
    slug: "trades-and-construction",
    name: "Trades and Construction",
    titleWords: ["Trades", "Construction"],
    image: "/images/photos/pexels-4981810.jpg",
    metaDescription:
      "Trades and construction insurance information for Australian electricians, plumbers, builders, scaffolders and contractors, with general advice from Kooo.",
    summary:
      "Insurance options commonly considered by electricians, plumbers, carpenters, builders, scaffolders and other contractors across Australia.",
    intro:
      "Tradespeople and builders work on homes, commercial sites and public spaces every day. The work involves tools, vehicles, materials and other people’s property. Kooo helps contractors understand the insurance options that may be relevant to their trade.",
    audiences: ["Electricians", "Plumbers", "Carpenters", "Builders", "Scaffolders", "Other contractors"],
    risks: [
      {
        title: "Working on client property",
        text: "Work in homes and businesses can lead to accidental damage, water leaks or fire. A client or member of the public may also be injured on site.",
      },
      {
        title: "Projects under construction",
        text: "Partly completed work and materials on site can be damaged by storms, fire, theft or vandalism before handover.",
      },
      {
        title: "Tools and equipment",
        text: "Tools left in vehicles, sheds or on site are a common target for theft. Losing them can stop work for days.",
      },
      {
        title: "Plant and machinery",
        text: "Excavators, scissor lifts and other plant can be damaged, stolen or involved in incidents that injure others.",
      },
      {
        title: "Working at heights and manual work",
        text: "Scaffolding, roofing and heavy lifting bring a risk of serious injury to workers and the people around them.",
      },
      {
        title: "Contract and licensing requirements",
        text: "Head contractors, principals and licensing bodies may require certain insurances before work starts.",
      },
    ],
    insurance: [
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims of injury to others or damage to their property arising from work, depending on the insurer and policy wording.",
        product: "public-liability-insurance",
      },
      {
        title: "Contract works insurance",
        text: "May be relevant for damage to building works and materials during a project, up to practical completion or handover.",
        product: "contract-works-insurance",
      },
      {
        title: "Tools and equipment insurance",
        text: "Commonly considered for theft of or damage to portable tools, subject to security conditions in the policy.",
        product: "tools-and-equipment-insurance",
      },
      {
        title: "Plant and machinery insurance",
        text: "May be relevant for mobile plant and machinery owned or hired by the business.",
        product: "plant-and-machinery-insurance",
      },
      {
        title: "Commercial motor insurance",
        text: "Commonly considered for utes, vans and work vehicles used to travel between jobs.",
        product: "commercial-motor-insurance",
      },
      {
        title: "Personal accident and sickness insurance",
        text: "May be relevant to sole traders and subcontractors who want some income protection if they cannot work because of injury or illness.",
        product: "personal-accident-and-sickness-insurance",
      },
      {
        title: "Home warranty insurance",
        text: "Home warranty or home building compensation cover may be required for certain residential building work. Names and requirements vary by state and territory.",
      },
      {
        title: "Workers compensation",
        text: "Employers generally need to consider workers compensation for employees. It is a state-based scheme and requirements, including how subcontractors are treated, vary by state and territory.",
      },
    ],
    considerations: [
      "Public liability policies often exclude or limit certain activities, such as work at heights, hot works or underground services. Check that the policy reflects the work you actually do.",
      "Contract works cover usually ends at practical completion or handover, as defined in the policy.",
      "Tools policies often require tools to be locked away or out of sight, and may exclude theft from unattended vehicles in some circumstances.",
      "Contracts may require specific limits, the principal to be noted on the policy, or waivers of subrogation. These details are worth checking before signing.",
      "Faulty workmanship itself is commonly excluded, even where resulting damage may be considered.",
      "Read the Product Disclosure Statement (PDS) and policy wording to understand limits, exclusions and excesses.",
    ],
    quoteInfo: [
      "Your trade or licence type and a description of the work",
      "Annual turnover and the split between residential and commercial work",
      "Number of employees and use of subcontractors",
      "Tools, equipment and plant to be insured, with approximate values",
      "Project values and durations, for contract works cover",
      "Any contract insurance requirements, such as minimum limits",
      "Claims and insurance history",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking for tradespeople, builders and contractors. We take the time to understand your trade, your projects and your contract requirements. We explain the options that may be relevant, approach insurers and arrange cover. At renewal we check whether changes to your work or turnover affect your policies. If a claim arises, we help prepare and lodge it and liaise with the insurer. The insurer decides the claim under the policy terms.",
    faqs: [
      {
        question: "A head contractor has asked for a minimum public liability limit. What does that mean?",
        answer:
          "It means the contract asks for a policy limit of at least that amount, for each claim or in total, depending on how the contract is worded. Insurers offer a range of limits. We can explain the options and check the contract wording with you.",
      },
      {
        question: "Are my tools covered if they are stolen from my ute overnight?",
        answer:
          "It depends on the policy. Many tools policies have conditions about locking vehicles, using lockboxes or keeping tools out of sight. Some exclude theft from vehicles left unattended overnight in certain circumstances.",
      },
      {
        question: "Do subcontractors need their own insurance?",
        answer:
          "Many head contractors ask subcontractors to hold their own public liability and other cover. Workers compensation rules for subcontractors vary by state and territory. Contract terms are a good place to start.",
      },
    ],
    relatedIndustries: ["property", "transport-and-logistics", "manufacturing-and-distribution"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    titleWords: ["Professional", "Services"],
    image: "/images/photos/pexels-933964.jpg",
    metaDescription:
      "Professional services insurance information for Australian consultants, engineers, accountants and IT businesses, with general advice and broking from Kooo.",
    summary:
      "Insurance options commonly considered by consultants, engineers, accountants, IT businesses and other professional services firms across Australia.",
    intro:
      "Professional services businesses are paid for their knowledge, advice and expertise. Clients rely on that work, and a mistake or a missed detail can have real consequences. Kooo helps professional firms understand the insurance options that may be relevant to their services.",
    audiences: ["Consultants", "Engineers", "Accountants", "IT businesses", "Other professional services"],
    risks: [
      {
        title: "Advice and design work",
        text: "A client may claim financial loss because of advice, a design, a report or a calculation that turned out to be wrong.",
      },
      {
        title: "Client data and systems",
        text: "Firms hold personal and financial information. Data breaches, ransomware and email fraud can disrupt work and lead to claims.",
      },
      {
        title: "Running the business",
        text: "Directors and managers make decisions about staff, contracts and compliance. Employment disputes or regulatory investigations can be costly to respond to.",
      },
      {
        title: "Offices and client meetings",
        text: "Visitors can be injured at the office. Staff may also attend client sites where accidents can happen.",
      },
      {
        title: "Office equipment and contents",
        text: "Computers, furniture and records can be damaged by fire, water or theft, which can interrupt client work.",
      },
    ],
    insurance: [
      {
        title: "Professional indemnity insurance",
        text: "Commonly considered for claims alleging a breach of professional duty, such as negligent advice or an error in a design or report.",
        product: "professional-indemnity-insurance",
      },
      {
        title: "Cyber insurance",
        text: "May be relevant for costs relating to data breaches, cyber attacks and some types of online fraud, depending on the insurer and policy wording.",
        product: "cyber-insurance",
      },
      {
        title: "Management liability insurance",
        text: "Commonly considered by private companies for exposures such as employment practices claims, statutory fines where insurable, and some investigation costs.",
        product: "management-liability-insurance",
      },
      {
        title: "Public liability insurance",
        text: "May be relevant for injury or property damage claims from clients and visitors, or from work at client premises.",
        product: "public-liability-insurance",
      },
      {
        title: "Business insurance",
        text: "A business package may combine office contents, equipment, theft and business interruption sections in one policy.",
        product: "business-insurance",
      },
      {
        title: "Directors and officers insurance",
        text: "May be relevant where directors and officers want cover for claims made against them personally in their role.",
        product: "directors-and-officers-insurance",
      },
      {
        title: "Workers compensation",
        text: "Employers generally need to consider workers compensation for employees. It is a state-based scheme and requirements vary by state and territory.",
      },
    ],
    considerations: [
      "Professional indemnity policies are usually written on a claims-made basis. The policy in force when the claim is made, and notified, is generally the one that responds.",
      "Retroactive dates can affect whether past work is covered. Keeping cover continuous may be important.",
      "Some professions have professional indemnity requirements set by a professional body or licence. These vary between professions.",
      "Contractual liability, such as indemnities given to clients beyond what the law would impose, may be excluded.",
      "Cyber policies can differ widely in what they include, such as funds transfer fraud or business interruption.",
      "Read the Product Disclosure Statement (PDS) and policy wording to understand limits, exclusions and excesses.",
    ],
    quoteInfo: [
      "A description of the professional services provided",
      "Annual fee income and the split between activities",
      "Number of principals, staff and contractors",
      "Qualifications and any professional body memberships",
      "Types of clients and the size of typical engagements",
      "Previous claims, complaints or circumstances that may lead to a claim",
      "Current cover, including retroactive dates",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking for consultants, engineers, accountants, IT businesses and other professional firms. We take the time to understand your services, your clients and any professional body or contract requirements. We explain the options that may be relevant, approach insurers and arrange cover. At renewal we help you complete proposal forms and notify changes. If a claim or complaint arises, we help prepare and lodge the notification and liaise with the insurer. The insurer decides the claim under the policy terms.",
    faqs: [
      {
        question: "What does claims-made mean?",
        answer:
          "Under a claims-made policy, cover generally depends on when the claim is made and notified, not when the work was done. This is why keeping cover in place without gaps can matter. The policy wording sets out the exact terms.",
      },
      {
        question: "Should I tell the insurer about a complaint that has not become a claim?",
        answer:
          "Many professional indemnity policies require you to notify circumstances that may lead to a claim. Late notification can affect cover. We can help you understand the notification terms in your policy.",
      },
      {
        question: "Is cyber insurance relevant to a small consultancy?",
        answer:
          "Small firms also send invoices by email, store client data and rely on their systems. Cyber insurance is commonly considered by businesses of many sizes. Whether it fits depends on your circumstances and the policy terms.",
      },
    ],
    relatedIndustries: ["property", "health-and-care", "education"],
  },
  {
    slug: "food-and-hospitality",
    name: "Food and Hospitality",
    titleWords: ["Food and", "Hospitality"],
    image: "/images/photos/pexels-2290753.jpg",
    metaDescription:
      "Food and hospitality insurance information for Australian restaurants, cafés, takeaways, food trucks and caterers, with general advice and broking from Kooo.",
    summary:
      "Insurance options commonly considered by restaurants, cafés, coffee shops, takeaway businesses, food trucks and caterers across Australia.",
    intro:
      "Food businesses serve customers every day, often with busy kitchens, hot equipment and perishable stock. A fire, a fridge failure or an injured customer can close the doors at short notice. Kooo helps hospitality operators understand the insurance options that may be relevant to their venue.",
    audiences: [
      "Restaurants",
      "Cafés",
      "Coffee shops",
      "Takeaway businesses",
      "Food trucks",
      "Catering businesses",
    ],
    risks: [
      {
        title: "Kitchens and cooking equipment",
        text: "Fryers, ovens and gas appliances bring a fire risk. Coffee machines, cool rooms and refrigeration can break down without warning.",
      },
      {
        title: "Customers on the premises",
        text: "Wet floors, steps and outdoor seating can lead to slips and falls. Hot drinks and food can cause burns.",
      },
      {
        title: "Food served and sold",
        text: "Customers may become ill or suffer an allergic reaction after eating food supplied by the business.",
      },
      {
        title: "Spoiled stock",
        text: "A power outage or refrigeration failure can spoil food and ingredients within hours.",
      },
      {
        title: "Closures and interruptions",
        text: "Damage to the premises, or to nearby property that blocks access, can stop trading while rent and wages continue.",
      },
      {
        title: "Mobile and off-site work",
        text: "Food trucks and caterers move equipment between sites and events, where vehicles, gas and generators add further risks.",
      },
    ],
    insurance: [
      {
        title: "Business insurance",
        text: "A business package may combine property, contents, stock, glass, theft, machinery breakdown and spoilage sections, depending on the insurer and policy wording.",
        product: "business-insurance",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims of injury to customers or damage to their property at the venue or an event.",
        product: "public-liability-insurance",
      },
      {
        title: "Product liability insurance",
        text: "May be relevant for claims of illness or injury caused by food or drinks supplied by the business. It is often combined with public liability.",
        product: "product-liability-insurance",
      },
      {
        title: "Business interruption insurance",
        text: "May help with loss of income and ongoing costs after insured damage stops or reduces trading.",
        product: "business-interruption-insurance",
      },
      {
        title: "Commercial property insurance",
        text: "May be relevant to businesses that own their building, or that are responsible for building items under their lease.",
        product: "commercial-property-insurance",
      },
      {
        title: "Commercial motor insurance",
        text: "Commonly considered for food trucks, delivery vehicles and catering vans. Fitted kitchen equipment may need to be declared separately.",
        product: "commercial-motor-insurance",
      },
      {
        title: "Workers compensation",
        text: "Employers generally need to consider workers compensation for employees. It is a state-based scheme and requirements vary by state and territory.",
      },
    ],
    considerations: [
      "Insurers may ask about deep fryers, exhaust canopies, duct cleaning and fire suppression. Their conditions can affect cover.",
      "Spoilage cover often has waiting periods and may not include deliberate power cuts by a supplier.",
      "Licensed venues may face additional questions about trading hours, security and the service of alcohol.",
      "Leases can make tenants responsible for glass, fit-out or other building items. Checking the lease can help set the right sums insured.",
      "Food trucks and caterers may need cover that follows equipment between locations and events.",
      "Read the Product Disclosure Statement (PDS) and policy wording to understand limits, exclusions and excesses.",
    ],
    quoteInfo: [
      "Type of venue, seating capacity and trading hours",
      "Annual turnover and number of staff",
      "Cooking methods, including deep frying, and fire protection in place",
      "Values of fit-out, equipment and stock",
      "Whether alcohol is served and the type of liquor licence",
      "Lease details and any landlord insurance requirements",
      "Claims and insurance history",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking for restaurants, cafés, takeaways, food trucks and caterers. We take the time to understand how your venue operates, explain the options that may be relevant, approach insurers and arrange cover. At renewal we review changes to your fit-out, equipment or trading. If something goes wrong, such as a fire, a breakdown or a customer injury, we help prepare and lodge the claim and liaise with the insurer. The insurer decides the claim under the policy terms.",
    faqs: [
      {
        question: "Is food spoilage covered if the power goes out?",
        answer:
          "Some business packages include a spoilage section for stock lost through refrigeration breakdown or power failure. Waiting periods, limits and exclusions often apply. The policy wording sets out when it responds.",
      },
      {
        question: "Does my food truck need different insurance from a café?",
        answer:
          "A food truck combines a vehicle, kitchen equipment and a mobile business, so it is commonly insured differently. Some insurers combine these in one policy, while others insure the vehicle and the business separately. We can explain the options.",
      },
      {
        question: "My landlord wants proof of public liability. What do I send?",
        answer:
          "Landlords usually ask for a certificate of currency showing the policy and its limit. Some leases also ask for the landlord to be noted on the policy. We can arrange both once cover is in place.",
      },
    ],
    relatedIndustries: ["grocery-and-retail", "accommodation", "caravan-parks-and-tourism"],
  },
  {
    slug: "grocery-and-retail",
    name: "Grocery and Retail",
    titleWords: ["Grocery and", "Retail"],
    image: "/images/photos/industry-retail.webp",
    metaDescription:
      "Grocery and retail insurance information for Australian grocers, supermarkets, convenience stores, shops and shopping centres, with general advice from Kooo.",
    summary:
      "Insurance options commonly considered by grocery shops, supermarkets, convenience stores, retail shops and shopping centres across Australia.",
    intro:
      "Retailers rely on their stock, their premises and steady foot traffic. Theft, a burst pipe or an injured customer can disrupt trading at short notice. Kooo helps retail businesses and centre owners understand the insurance options that may be relevant to their premises.",
    audiences: ["Grocery shops", "Supermarkets", "Convenience stores", "Retail shops", "Shopping centres"],
    risks: [
      {
        title: "Customers in store",
        text: "Spills, wet floors, trolleys and stock on shelves can lead to slips, falls and injuries.",
      },
      {
        title: "Stock and theft",
        text: "Stock can be stolen in break-ins, damaged by water or fire, or spoiled if refrigeration fails.",
      },
      {
        title: "Shopfronts and fit-out",
        text: "Glass, signage, shelving and counters can be damaged by accidents, storms or vandalism.",
      },
      {
        title: "Products sold",
        text: "A customer may claim injury or illness from a product the business sold, even if it was made by someone else.",
      },
      {
        title: "Cash and payments",
        text: "Cash on the premises and in transit to the bank can be a target. Payment systems and customer data can be affected by cyber incidents.",
      },
      {
        title: "Shared premises and common areas",
        text: "Shopping centre owners and managers are responsible for car parks, walkways and common areas used by the public every day.",
      },
    ],
    insurance: [
      {
        title: "Business insurance",
        text: "A business package may combine contents, stock, glass, theft, money and spoilage sections, depending on the insurer and policy wording.",
        product: "business-insurance",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims of injury to customers or damage to their property on the premises.",
        product: "public-liability-insurance",
      },
      {
        title: "Product liability insurance",
        text: "May be relevant for claims arising from products sold, including imported or own-brand goods.",
        product: "product-liability-insurance",
      },
      {
        title: "Business interruption insurance",
        text: "May help with loss of income and ongoing costs after insured damage stops or reduces trading.",
        product: "business-interruption-insurance",
      },
      {
        title: "Commercial property insurance",
        text: "Commonly considered by owners of shops and shopping centres for the building and its common areas.",
        product: "commercial-property-insurance",
      },
      {
        title: "Commercial strata insurance",
        text: "May be relevant where retail premises form part of a strata scheme with shared building cover.",
        product: "commercial-strata-insurance",
      },
      {
        title: "Cyber insurance",
        text: "May be relevant for businesses that take online orders, use point-of-sale systems or hold customer data.",
        product: "cyber-insurance",
      },
      {
        title: "Workers compensation",
        text: "Employers generally need to consider workers compensation for employees. It is a state-based scheme and requirements vary by state and territory.",
      },
    ],
    considerations: [
      "Theft cover often requires signs of forced entry and may have conditions about alarms, locks and security.",
      "Money sections usually have separate limits for cash on premises, in a safe and in transit.",
      "Stock levels can rise in peak seasons. Some policies include a seasonal increase, while others need the sum insured updated.",
      "Shopping centre leases often set out insurance requirements for tenants, including limits and noting the landlord.",
      "Products imported directly from overseas may be treated differently by insurers under product liability.",
      "Read the Product Disclosure Statement (PDS) and policy wording to understand limits, exclusions and excesses.",
    ],
    quoteInfo: [
      "Type of store, products sold and trading hours",
      "Annual turnover and number of staff",
      "Values of stock, contents and fit-out",
      "Security in place, such as alarms, cameras and safes",
      "Cash handling arrangements",
      "Building details and lease or strata arrangements",
      "Claims and insurance history",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking for grocers, supermarkets, convenience stores, retail shops and shopping centres. We take the time to understand your premises, stock and lease arrangements. We explain the options that may be relevant, approach insurers and arrange cover. At renewal we review stock values, fit-out and changes to your trading. If a claim arises, we help prepare and lodge it and liaise with the insurer. The insurer decides the claim under the policy terms.",
    faqs: [
      {
        question: "Is shoplifting covered under a business insurance policy?",
        answer:
          "Many theft sections only respond where there is forcible and violent entry, so everyday shoplifting is commonly excluded. The policy wording sets out the conditions. We can explain how different policies treat theft.",
      },
      {
        question: "I rent my shop. Do I insure the building?",
        answer:
          "The building is usually insured by the owner or strata scheme. Tenants commonly insure their own contents, stock and fit-out, and any items the lease makes them responsible for. The lease is a good place to check.",
      },
      {
        question: "Can stock values change during the year?",
        answer:
          "Yes. Stock often increases before busy periods. Some policies allow for a seasonal increase and others do not, so it is worth telling us about significant changes during the year.",
      },
    ],
    relatedIndustries: ["food-and-hospitality", "fuel-and-automotive", "property"],
  },
  {
    slug: "fuel-and-automotive",
    name: "Fuel and Automotive",
    titleWords: ["Fuel and", "Automotive"],
    image: "/images/photos/pexels-30821414.jpg",
    metaDescription:
      "Fuel and automotive insurance information for Australian service stations, mechanics, car dealerships and car washes, with general advice and broking from Kooo.",
    summary:
      "Insurance options commonly considered by service stations, mechanics, workshops, car dealerships, car washes and detailing businesses across Australia.",
    intro:
      "Fuel and automotive businesses handle fuel, chemicals and customers’ vehicles every day. A fire, a spill or damage to a car in your care can quickly become a costly problem. Kooo helps automotive businesses understand the insurance options that may be relevant to their operations.",
    audiences: [
      "Petrol and service stations",
      "Mechanics",
      "Automotive workshops",
      "Car dealerships",
      "Car washes",
      "Detailing businesses",
    ],
    risks: [
      {
        title: "Fuel, fire and spills",
        text: "Fuel storage and dispensing bring a risk of fire, explosion and leaks. Spills can affect soil, drains and neighbouring property.",
      },
      {
        title: "Customer vehicles in your care",
        text: "Cars left for servicing, washing or detailing can be damaged, stolen or involved in an accident during a test drive.",
      },
      {
        title: "Vehicle stock",
        text: "Dealerships and car yards hold vehicles that can be damaged by hail, storms, fire or theft.",
      },
      {
        title: "Workshop work",
        text: "A repair or part fitted incorrectly may lead to a later breakdown or accident, and a claim against the business.",
      },
      {
        title: "Customers on the forecourt and in store",
        text: "Forecourts, wash bays and showrooms are busy, often wet areas where slips and vehicle movements can cause injury.",
      },
      {
        title: "Retail, cash and after-hours trading",
        text: "Service station shops hold cash, tobacco and stock, and may trade late into the night.",
      },
    ],
    insurance: [
      {
        title: "Motor trades insurance",
        text: "Commonly considered by mechanics, dealers, car washes and detailers for customer vehicles in their care, vehicle stock and related liability, depending on the insurer and policy wording.",
        product: "motor-trades-insurance",
      },
      {
        title: "Business insurance",
        text: "A business package may combine contents, stock, glass, theft, money and machinery breakdown sections.",
        product: "business-insurance",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered for injury or property damage claims from customers and the public on the premises.",
        product: "public-liability-insurance",
      },
      {
        title: "Product liability insurance",
        text: "May be relevant for claims arising from parts supplied or fitted, and goods sold in store.",
        product: "product-liability-insurance",
      },
      {
        title: "Commercial property insurance",
        text: "May be relevant to owners of service station sites, workshops and showrooms, including fuel infrastructure where insurers offer it.",
        product: "commercial-property-insurance",
      },
      {
        title: "Business interruption insurance",
        text: "May help with loss of income and ongoing costs after insured damage stops or reduces trading.",
        product: "business-interruption-insurance",
      },
      {
        title: "Pollution and environmental liability",
        text: "Pollution is commonly excluded or limited in standard liability policies. Specific environmental cover may be available from some insurers for fuel sites.",
      },
      {
        title: "Workers compensation",
        text: "Employers generally need to consider workers compensation for employees. It is a state-based scheme and requirements vary by state and territory.",
      },
    ],
    considerations: [
      "Insurers may ask about underground tanks, their age and testing, and spill response procedures.",
      "Cover for customer vehicles often depends on who is driving, where vehicles are kept overnight and how keys are secured.",
      "Hail and storm damage to vehicle stock held outdoors may have specific conditions or excesses.",
      "Gradual pollution is commonly excluded. Sudden and accidental pollution may be treated differently, depending on the policy.",
      "Faulty workmanship itself is commonly excluded, even where resulting damage may be considered.",
      "Read the Product Disclosure Statement (PDS) and policy wording to understand limits, exclusions and excesses.",
    ],
    quoteInfo: [
      "Type of business and the services provided",
      "Annual turnover and number of staff",
      "Fuel storage details, such as tank types, ages and capacities",
      "Number and value of customer vehicles held at any one time",
      "Vehicle stock values, for dealerships",
      "Security, key storage and overnight parking arrangements",
      "Claims and insurance history",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking for service stations, workshops, dealerships, car washes and detailers. We take the time to understand your site, the vehicles in your care and your trading hours. We explain the options that may be relevant, approach insurers and arrange cover. At renewal we review stock values and changes to your site. If something goes wrong, we help prepare and lodge the claim and liaise with the insurer. The insurer decides the claim under the policy terms.",
    faqs: [
      {
        question: "Is a customer’s car covered while it is in my workshop?",
        answer:
          "Standard business policies often exclude vehicles in your care. Motor trades insurance commonly includes a section for customer vehicles, subject to conditions about driving, storage and security. Check the policy wording for the details.",
      },
      {
        question: "Does public liability cover a fuel spill?",
        answer:
          "Many liability policies exclude or limit pollution, particularly gradual leaks. Some insurers offer specific environmental cover for fuel sites. We can explain how different policies approach this.",
      },
      {
        question: "Can a mobile detailing business get cover for cars it works on?",
        answer:
          "Some insurers offer cover for mobile detailers, including damage to customer vehicles while working on them. Terms differ between insurers. We can talk through the options based on how you work.",
      },
    ],
    relatedIndustries: ["transport-and-logistics", "grocery-and-retail", "trades-and-construction"],
  },
  {
    slug: "education",
    name: "Education",
    titleWords: ["Education", "and Training"],
    image: "/images/photos/pexels-8422248.jpg",
    metaDescription:
      "Education insurance information for Australian schools, childcare centres, early learning centres and training providers, with general advice from Kooo.",
    summary:
      "Insurance options commonly considered by schools, childcare centres, early learning centres and training providers across Australia.",
    intro:
      "Education providers care for children, students and staff, often across busy buildings, playgrounds and excursions. They also carry duties to families, regulators and funding bodies. Kooo helps education providers understand the insurance options that may be relevant to their services.",
    audiences: ["Schools", "Childcare centres", "Early learning centres", "Training providers"],
    risks: [
      {
        title: "Duty of care to children and students",
        text: "Injuries in playgrounds, classrooms, sport and excursions can lead to claims from families.",
      },
      {
        title: "Abuse and misconduct allegations",
        text: "Organisations caring for children may face allegations against staff, volunteers or others. These claims are serious and can be complex.",
      },
      {
        title: "Teaching and professional services",
        text: "Training providers and schools may face claims about advice, assessment or the quality of a course.",
      },
      {
        title: "Buildings, equipment and grounds",
        text: "Classrooms, play equipment, computers and learning resources can be damaged by fire, storms or vandalism.",
      },
      {
        title: "Governance and compliance",
        text: "Boards, directors and managers oversee staff, funding and regulatory obligations. Disputes and investigations can follow.",
      },
      {
        title: "Student and family data",
        text: "Providers hold personal, medical and financial information that can be exposed through a data breach.",
      },
    ],
    insurance: [
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims of injury or property damage involving students, families and visitors.",
        product: "public-liability-insurance",
      },
      {
        title: "Abuse liability insurance",
        text: "Abuse is commonly excluded from standard liability policies. Specific cover may be available separately from some insurers, subject to underwriting and the policy wording.",
      },
      {
        title: "Professional indemnity insurance",
        text: "May be relevant for claims about teaching, assessment, advice or other professional services.",
        product: "professional-indemnity-insurance",
      },
      {
        title: "Commercial property insurance",
        text: "Commonly considered for buildings, contents, play equipment and learning resources.",
        product: "commercial-property-insurance",
      },
      {
        title: "Management liability insurance",
        text: "May be relevant for exposures facing directors, boards and managers, including employment practices claims.",
        product: "management-liability-insurance",
      },
      {
        title: "Personal accident insurance",
        text: "May be relevant for students or volunteers who are injured during activities, depending on the insurer and policy wording.",
        product: "personal-accident-and-sickness-insurance",
      },
      {
        title: "Cyber insurance",
        text: "May be relevant for costs relating to data breaches and cyber attacks affecting student or family records.",
        product: "cyber-insurance",
      },
      {
        title: "Workers compensation",
        text: "Employers generally need to consider workers compensation for employees. It is a state-based scheme and requirements vary by state and territory.",
      },
    ],
    considerations: [
      "Abuse cover is often written separately, with its own limits, conditions and underwriting questions about child safety practices.",
      "Insurers may ask about child safe policies, staff screening and supervision ratios.",
      "Excursions, camps, sport and overseas trips may need to be declared, and some activities may be excluded.",
      "Regulators, funding bodies or contracts may set insurance requirements. These vary between types of provider.",
      "Volunteers may not be covered by workers compensation. Personal accident cover is sometimes considered for them.",
      "Read the Product Disclosure Statement (PDS) and policy wording to understand limits, exclusions and excesses.",
    ],
    quoteInfo: [
      "Type of provider, ages of children or students, and enrolment numbers",
      "Number of staff and volunteers",
      "Building, contents and equipment values",
      "Activities offered, including excursions, sport and camps",
      "Child safety policies and staff screening practices",
      "Governance structure, such as company, association or not-for-profit",
      "Claims and insurance history",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking for schools, childcare centres, early learning centres and training providers. We take the time to understand your services, your students and any funding or regulatory requirements. We explain the options that may be relevant, approach insurers and arrange cover. At renewal we help with proposal forms and changes to enrolments or activities. If a claim arises, we help prepare and lodge it and liaise with the insurer. The insurer decides the claim under the policy terms.",
    faqs: [
      {
        question: "Does public liability cover abuse allegations?",
        answer:
          "Abuse is commonly excluded from standard public liability policies. Some insurers offer specific abuse cover separately, subject to underwriting. The policy wording sets out what is and is not included.",
      },
      {
        question: "Are excursions and camps covered?",
        answer:
          "Many policies extend to off-site activities, but some activities may be excluded or need to be declared. Overseas trips are often treated differently. It is worth telling us about the activities you run.",
      },
      {
        question: "Does a registered training organisation need professional indemnity?",
        answer:
          "Some training providers have insurance requirements through contracts, funding agreements or industry bodies. These vary. Professional indemnity is commonly considered where advice or assessment is part of the service.",
      },
    ],
    relatedIndustries: ["health-and-care", "places-of-worship-and-community", "fitness-and-recreation"],
  },
  {
    slug: "health-and-care",
    name: "Health and Care",
    titleWords: ["Health", "and Care"],
    image: "/images/photos/industry-healthcare.webp",
    metaDescription:
      "Health and care insurance information for Australian aged care, NDIS, disability, allied health and medical providers, with general advice and broking via Kooo.",
    summary:
      "Insurance options commonly considered by aged care providers, NDIS providers, disability services, allied health businesses and medical practices across Australia.",
    intro:
      "Health and care providers support people at important and sometimes vulnerable times. Services may be delivered in clinics, residential facilities, clients’ homes or the community. Kooo helps providers understand the insurance options that may be relevant to the care they deliver.",
    audiences: [
      "Aged care providers",
      "NDIS providers",
      "Disability services",
      "Allied health businesses",
      "Medical practices",
    ],
    risks: [
      {
        title: "Treatment and professional care",
        text: "A client may claim injury or loss arising from treatment, advice or a care decision.",
      },
      {
        title: "Care in homes and the community",
        text: "Support workers visit clients’ homes and accompany them in the community, where accidents and property damage can occur.",
      },
      {
        title: "Abuse and misconduct allegations",
        text: "Providers working with vulnerable people may face allegations against staff or others. These claims are serious and can be complex.",
      },
      {
        title: "Transporting clients",
        text: "Staff may drive clients to appointments and activities in business or personal vehicles.",
      },
      {
        title: "Health records and data",
        text: "Providers hold sensitive health and personal information that can be exposed through a data breach or cyber attack.",
      },
      {
        title: "Regulation and governance",
        text: "Boards and managers oversee compliance, staffing and funding obligations. Complaints, audits and investigations can follow.",
      },
    ],
    insurance: [
      {
        title: "Professional indemnity insurance",
        text: "Commonly considered for claims alleging negligent advice, treatment or care, depending on the insurer and policy wording.",
        product: "professional-indemnity-insurance",
      },
      {
        title: "Medical malpractice insurance",
        text: "May be relevant to medical practices and practitioners for claims arising from medical treatment. Practitioners and practice entities may hold separate cover.",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered for injury or property damage claims involving clients, visitors and the public, including in clients’ homes.",
        product: "public-liability-insurance",
      },
      {
        title: "Abuse liability insurance",
        text: "Abuse is commonly excluded from standard liability policies. Specific cover may be available separately from some insurers, subject to underwriting and the policy wording.",
      },
      {
        title: "Management liability insurance",
        text: "May be relevant for exposures facing directors and managers, including employment practices claims and some investigation costs.",
        product: "management-liability-insurance",
      },
      {
        title: "Commercial motor insurance",
        text: "Commonly considered for vehicles used to transport clients or to travel between visits.",
        product: "commercial-motor-insurance",
      },
      {
        title: "Cyber insurance",
        text: "May be relevant for costs relating to data breaches and cyber attacks affecting health records.",
        product: "cyber-insurance",
      },
      {
        title: "Workers compensation",
        text: "Employers generally need to consider workers compensation for employees. It is a state-based scheme and requirements vary by state and territory.",
      },
    ],
    considerations: [
      "Insurance requirements may apply under NDIS registration and service agreements. Providers can check the current requirements that apply to them.",
      "Professional bodies, registration boards and funding agreements may set their own insurance requirements.",
      "Professional indemnity and medical malpractice policies are usually written on a claims-made basis, so continuous cover can be important.",
      "Insurers may ask about the services delivered, client needs, staff qualifications and screening practices.",
      "Staff using personal vehicles for work may have gaps in cover under their own car insurance.",
      "Read the Product Disclosure Statement (PDS) and policy wording to understand limits, exclusions and excesses.",
    ],
    quoteInfo: [
      "Type of provider and the services delivered",
      "Where services are delivered, such as clinics, facilities or clients’ homes",
      "Annual turnover or funding and number of clients",
      "Number of staff, contractors and volunteers, and their qualifications",
      "Registration, accreditation and any contract insurance requirements",
      "Screening, incident management and complaints processes",
      "Claims and insurance history",
    ],
    howWeHelp:
      "Kooo provides general advice and insurance broking for aged care providers, NDIS providers, disability services, allied health businesses and medical practices. We take the time to understand your services, clients and any registration or contract requirements. We explain the options that may be relevant, approach insurers and arrange cover. At renewal we help with proposal forms and changes to your services. If a claim or incident arises, we help prepare and lodge it and liaise with the insurer. The insurer decides the claim under the policy terms.",
    faqs: [
      {
        question: "What insurance do NDIS providers need?",
        answer:
          "Insurance requirements may apply under NDIS registration and service agreements, and they can change over time. Providers can check the current requirements for their registration. We can then explain the insurance options that may be relevant.",
      },
      {
        question: "Are support workers covered when working in a client’s home?",
        answer:
          "Many public liability and professional indemnity policies extend to services delivered in clients’ homes. The policy wording sets out where and how cover applies. It is worth telling the insurer about all the locations you work in.",
      },
      {
        question: "Do allied health practitioners need their own professional indemnity?",
        answer:
          "Registration requirements for many health professions include professional indemnity arrangements. Some practitioners are covered under a practice or employer policy, and others arrange their own. Your registration body’s requirements are a good place to start.",
      },
      {
        question: "Is abuse cover included in a care provider’s liability policy?",
        answer:
          "Abuse is commonly excluded from standard liability policies. Some insurers offer specific abuse cover separately, subject to underwriting. We can explain how different policies approach this.",
      },
    ],
    relatedIndustries: ["education", "professional-services", "beauty-and-personal-services"],
  },
];
