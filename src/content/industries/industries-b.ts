import type { Industry } from "../catalogue-types";

// Industry pages, group B. General information only, drafted for the client’s review before publication.

const workersCompText =
  "Workers compensation insurance is generally compulsory for employers. Requirements, schemes and who counts as a worker vary by state and territory.";

export const industriesB: Industry[] = [
  {
    slug: "places-of-worship-and-community",
    name: "Places of Worship and Community",
    titleWords: ["Worship and", "Community"],
    image: "/images/photos/pexels-1128317.jpg",
    metaDescription:
      "Insurance information for Australian places of worship, community groups, charities and not for profit groups, covering property, liability and volunteers.",
    summary:
      "General information on insurance options commonly considered by places of worship, religious organisations, community groups, charities and not for profit organisations.",
    intro:
      "Places of worship and community organisations bring people together for services, gatherings, programs and outreach. Many rely on volunteers, shared buildings and donated funds, which shapes the risks they face. Kooo Insurance helps these organisations understand the insurance options that may be relevant.",
    audiences: [
      "Churches",
      "Mosques",
      "Temples",
      "Religious organisations",
      "Community groups",
      "Charities",
      "Not for profit organisations",
    ],
    risks: [
      {
        title: "Buildings and contents",
        text: "Places of worship and community halls often hold furniture, sound equipment, artworks and items of cultural or religious significance. Fire, storm, water damage, theft and vandalism can affect both the building and what is inside it.",
      },
      {
        title: "Visitors and gatherings",
        text: "Services, festivals, classes and open days bring visitors onto the premises. Slips, trips and other incidents involving members of the public can lead to injury claims.",
      },
      {
        title: "Volunteers",
        text: "Many organisations depend on volunteers for cleaning, catering, maintenance and running programs. Volunteers can be injured while helping, and they are generally not treated the same way as employees.",
      },
      {
        title: "Programs with children and vulnerable people",
        text: "Youth groups, playgroups, visits and support services may involve people who are more vulnerable. Organisations commonly have safeguarding policies in place, and insurers may ask about them.",
      },
      {
        title: "Events, fundraising and outreach",
        text: "Fetes, food stalls, markets, festivals and off-site trips each bring their own risks, including food handling, temporary structures, hired equipment and larger crowds.",
      },
      {
        title: "Governance and funds",
        text: "Committees, boards and trustees make decisions about money, property and people. Claims can arise from alleged mismanagement, employment matters or breaches of duty, and donated funds can be exposed to theft or fraud.",
      },
    ],
    insurance: [
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims by third parties alleging injury or property damage connected with services, gatherings and activities, depending on the insurer and policy wording.",
        product: "public-liability-insurance",
      },
      {
        title: "Building and contents insurance",
        text: "Cover for the building, fixtures and contents against insured events such as fire, storm and theft. Often arranged through a commercial property or business package policy.",
        product: "commercial-property-insurance",
      },
      {
        title: "Volunteer personal accident insurance",
        text: "May provide certain benefits if a volunteer is injured while carrying out approved activities. Eligibility, age limits and benefits depend on the policy wording.",
      },
      {
        title: "Management liability insurance",
        text: "May respond to certain claims against the organisation and its committee members, directors or office bearers, including some employment and statutory matters.",
        product: "management-liability-insurance",
      },
      {
        title: "Abuse liability",
        text: "Some insurers offer cover for claims arising from alleged abuse. Availability, conditions and exclusions vary widely, and insurers usually ask about safeguarding procedures.",
      },
      {
        title: "Event insurance",
        text: "May be relevant for fetes, festivals, fundraisers and other one-off events, particularly when they are held away from the usual premises.",
        product: "event-insurance",
      },
      {
        title: "Workers compensation",
        text: workersCompText + " Volunteers are usually treated differently from paid staff.",
      },
    ],
    considerations: [
      "Items of cultural, religious or heritage value can be difficult to replace. Some policies limit cover for these items, so the basis of settlement is worth checking.",
      "Heritage-listed buildings may cost more to repair or rebuild, as particular materials or methods may be required.",
      "Hiring out a hall to other groups can change the risk. Insurers may ask about regular hirers and whether they hold their own public liability insurance.",
      "Volunteer cover often has age limits, benefit limits and exclusions. The policy wording sets out who is covered and when.",
      "Buildings left empty for long periods may be subject to unoccupancy conditions in the policy.",
      "Some organisations are covered in part through a denomination, association or umbrella body. Checking that cover first can help avoid gaps or doubling up.",
    ],
    quoteInfo: [
      "Organisation name, legal structure and ABN, if any",
      "Address, construction and age of each building, including any heritage listing",
      "Estimated replacement values of buildings and contents",
      "Regular services, programs and activities, and typical attendance",
      "Number of employees and volunteers",
      "Details of hall hire, events and fundraising activities",
      "Previous insurance history and claims",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking for places of worship, community groups, charities and not for profit organisations across Australia. We take time to understand how your organisation operates, explain the options that may be relevant, approach insurers on your behalf and arrange cover. Each year we can review your activities with you and assist at renewal. If something goes wrong, we help you prepare and lodge a claim and liaise with the insurer. The insurer makes the decision on any claim.",
    faqs: [
      {
        question: "Are volunteers covered by our public liability insurance?",
        answer:
          "Public liability insurance generally responds to claims by third parties, not to injuries suffered by the organisation’s own volunteers. Volunteer personal accident insurance is the option commonly considered for volunteer injuries. How a policy treats volunteers depends on the insurer and policy wording.",
      },
      {
        question: "Does our insurance cover groups that hire our hall?",
        answer:
          "Not automatically. Some policies extend limited cover to casual hirers, while others expect hirers to hold their own public liability insurance. Many organisations ask regular hirers for a certificate of currency before confirming a booking.",
      },
      {
        question: "Can items of religious or cultural significance be insured?",
        answer:
          "Many policies can include these items as contents, though some set limits on individual items or on particular types of property. Keeping a list, photographs and any valuations can help. We can explain how a policy would value these items.",
      },
      {
        question: "Can a small volunteer-run group get insurance?",
        answer:
          "Many insurers offer policies for small, volunteer-run groups. The options depend on what the group does, where it meets, and whether it holds assets or runs events. Some groups are also covered through a peak body or association, so that is worth checking first.",
      },
    ],
    relatedIndustries: ["education", "health-and-care", "property"],
  },
  {
    slug: "accommodation",
    name: "Accommodation",
    titleWords: ["Hotels and", "Guest Stays"],
    image: "/images/photos/pexels-2290753.jpg",
    metaDescription:
      "Insurance information for Australian hotels, motels, serviced apartments and guesthouses, covering property, guest liability, staff and loss of income options.",
    summary:
      "General information on insurance options commonly considered by hotels, motels, serviced apartments, guesthouses and other accommodation businesses.",
    intro:
      "Accommodation businesses look after guests around the clock, often with buildings, food service, pools and staff on site. That mix of property, people and service creates a broad range of risks. Kooo Insurance helps accommodation operators across Australia understand the insurance options that may be relevant to their property, liability, staff and guests.",
    audiences: [
      "Hotels",
      "Motels",
      "Serviced apartments",
      "Guesthouses",
      "Other accommodation businesses",
    ],
    risks: [
      {
        title: "Guest and visitor injury",
        text: "Guests move through rooms, stairways, car parks, pools and gardens at all hours. Slips, falls and other incidents can lead to injury claims against the operator.",
      },
      {
        title: "Damage to buildings and rooms",
        text: "Fire, storm, water leaks and accidental damage can affect rooms, furnishings and shared areas. Guests can also damage rooms and contents during their stay.",
      },
      {
        title: "Loss of bookings",
        text: "If rooms cannot be used after damage, bookings may be cancelled while repairs are carried out. Fixed costs such as wages, loan repayments and rent usually continue.",
      },
      {
        title: "Guest property and vehicles",
        text: "Guests leave luggage, valuables and vehicles in the operator’s care. Claims can arise if guest property is lost, stolen or damaged on the premises.",
      },
      {
        title: "Food, drink and amenities",
        text: "Restaurants, bars, room service, pools, spas and gyms each add risks, including food safety, liquor service and equipment failure.",
      },
      {
        title: "Staff and shift work",
        text: "Housekeeping, maintenance, kitchen and front desk staff carry out physical work, often across shifts. Workplace injuries are a common concern.",
      },
    ],
    insurance: [
      {
        title: "Business insurance",
        text: "A package that can combine property, contents, theft, glass and liability sections in one policy, depending on the insurer.",
        product: "business-insurance",
      },
      {
        title: "Commercial property insurance",
        text: "Cover for the building, fit-out and furnishings against insured events such as fire and storm. Most relevant to operators who own the building.",
        product: "commercial-property-insurance",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims by guests and visitors alleging injury or property damage. Some policies include limited cover for guest property.",
        product: "public-liability-insurance",
      },
      {
        title: "Business interruption insurance",
        text: "May cover loss of income and some additional costs after insured damage interrupts trading, within the indemnity period chosen.",
        product: "business-interruption-insurance",
      },
      {
        title: "Equipment breakdown",
        text: "May cover the breakdown of lifts, air conditioning, refrigeration, pool pumps and similar equipment. Often available as an optional section of a business package.",
      },
      {
        title: "Cyber insurance",
        text: "Accommodation businesses hold booking records and payment details. Cyber insurance may respond to certain data breach and system outage events.",
        product: "cyber-insurance",
      },
      {
        title: "Workers compensation",
        text: workersCompText,
      },
    ],
    considerations: [
      "Strata-titled hotels and serviced apartments may have building insurance arranged by the owners corporation or body corporate, depending on the state. Operators and unit owners commonly check what that policy covers and what it leaves out.",
      "Some policies limit or exclude cover for guest property, particularly cash, jewellery and items not left in a safe.",
      "Insurers commonly ask about pools, spas and gyms, including signage, supervision and maintenance records.",
      "The indemnity period for business interruption cover is worth considering against how long repairs and rebuilding bookings could take.",
      "Cover for flood, storm surge and bushfire varies between insurers and locations.",
      "Licensed bars and restaurants within the property usually need to be disclosed to the insurer.",
    ],
    quoteInfo: [
      "Business name, ABN and property address",
      "Type of accommodation and number of rooms or units",
      "Building construction and age, and whether it is owned, leased or strata titled",
      "Replacement values of buildings, contents and stock",
      "Annual turnover and gross profit",
      "Facilities on site, such as restaurants, bars, pools, spas or gyms",
      "Number of employees and annual wages",
      "Previous insurance history and claims",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking for accommodation businesses across Australia. We work through how your property operates, from rooms and amenities to staff and guest services, and explain the options that may be relevant. We approach insurers on your behalf, arrange cover and assist at renewal as your business changes. If you need to make a claim, we help you prepare and lodge it and liaise with the insurer, who makes the decision on the claim.",
    faqs: [
      {
        question: "Does public liability insurance cover guest belongings?",
        answer:
          "Not always. Some policies include limited cover for guest property, while others need it added as a separate section. Limits, conditions and exclusions vary, so it is worth checking the policy wording.",
      },
      {
        question: "We run serviced apartments in a strata building. Who insures the building?",
        answer:
          "In most strata buildings, the owners corporation or body corporate insures the building and common property. Operators and unit owners commonly arrange cover for their own contents, fit-out, liability and loss of income. Terminology and requirements vary by state and territory.",
      },
      {
        question: "How is loss of income worked out after damage?",
        answer:
          "Business interruption cover generally compares trading results before and after the damage, within the indemnity period chosen. The insurer assesses the claim using financial records. Clear booking and accounting records can help if a claim is made.",
      },
    ],
    relatedIndustries: ["food-and-hospitality", "caravan-parks-and-tourism", "property"],
  },
  {
    slug: "caravan-parks-and-tourism",
    name: "Caravan Parks and Tourism",
    titleWords: ["Parks and", "Tourism"],
    image: "/images/photos/pexels-1451040.jpg",
    metaDescription:
      "Insurance information for Australian caravan parks, holiday parks, camping grounds and tourism operators, covering cabins, sites, liability and guest risks.",
    summary:
      "General information on insurance options commonly considered by caravan parks, holiday parks, camping grounds and tourism operators.",
    intro:
      "Caravan parks, holiday parks and tourism operators welcome guests to large sites, outdoor settings and organised activities. Their income is often seasonal, and their locations can bring exposure to weather and natural events. Kooo Insurance helps these businesses understand the insurance options that may be relevant to cabins, sites, liability, staff and guests.",
    audiences: ["Caravan parks", "Holiday parks", "Camping grounds", "Tourism operators"],
    risks: [
      {
        title: "Large, open sites",
        text: "Parks include roads, powered sites, amenities blocks, playgrounds and natural areas. Guests move around on foot, by car and on bikes, which can lead to injury claims.",
      },
      {
        title: "Cabins and buildings",
        text: "Cabins, amenities blocks, kiosks, offices and managers’ residences can be affected by fire, storm, flood or bushfire, depending on location.",
      },
      {
        title: "Recreational facilities",
        text: "Pools, jumping pillows, playgrounds, boat ramps and hire equipment add to the range of activities, and to the risk of injury.",
      },
      {
        title: "Tours and activities",
        text: "Tourism operators run tours, transfers and guided activities, sometimes in remote or outdoor settings. Weather, terrain and the activity itself all play a part.",
      },
      {
        title: "Seasonal income",
        text: "Many parks and tourism businesses earn much of their income in peak periods. Damage, road closures or loss of access at those times can have a large effect on the year.",
      },
      {
        title: "Residents and on-site vans",
        text: "Some parks host long-term residents and vans or homes owned by others. This can raise questions about who is responsible for which property.",
      },
    ],
    insurance: [
      {
        title: "Business insurance",
        text: "A package that may combine property, contents, theft, glass and liability sections for parks and tourism businesses, depending on the insurer.",
        product: "business-insurance",
      },
      {
        title: "Commercial property insurance",
        text: "Cover for cabins, amenities blocks, kiosks and other buildings against insured events. Terms may depend on location and natural hazard exposure.",
        product: "commercial-property-insurance",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims by guests and visitors alleging injury or property damage on the site or during activities.",
        product: "public-liability-insurance",
      },
      {
        title: "Business interruption insurance",
        text: "May cover loss of income after insured damage. Some policies offer extensions for loss of access, with their own limits.",
        product: "business-interruption-insurance",
      },
      {
        title: "Commercial motor insurance",
        text: "For park vehicles, buses and tour vehicles used in the business.",
        product: "commercial-motor-insurance",
      },
      {
        title: "Professional indemnity insurance",
        text: "May be relevant to tourism operators who plan itineraries, give advice or make bookings on behalf of clients.",
        product: "professional-indemnity-insurance",
      },
      {
        title: "Workers compensation",
        text: workersCompText,
      },
    ],
    considerations: [
      "Bushfire, flood and storm exposure can affect the availability and terms of cover, depending on location.",
      "Guests’ caravans and residents’ homes are usually insured by their owners rather than by the park.",
      "Adventure and higher-risk activities may be excluded from standard policies or need specialist cover.",
      "Insurers commonly ask about pool fencing, playground maintenance, speed limits and safety procedures.",
      "Activity waivers do not replace insurance, and their effect depends on the circumstances.",
      "When choosing an indemnity period, seasonal trading patterns are worth taking into account.",
    ],
    quoteInfo: [
      "Business name, ABN and site address",
      "Number of cabins, powered sites, unpowered sites and permanent residents",
      "Buildings on site, their construction and replacement values",
      "Facilities, such as pools, playgrounds, kiosks and hire equipment",
      "Tours and activities offered, with safety procedures",
      "Vehicles used in the business",
      "Annual turnover, wages and number of employees",
      "Previous insurance history and claims",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking for caravan parks, holiday parks, camping grounds and tourism operators across Australia. We learn how your site or business runs through the year, explain the options that may be relevant and approach insurers on your behalf. We arrange cover, assist at renewal and help you keep your insurer informed of changes. If a claim arises, we help you prepare and lodge it and liaise with the insurer, who makes the decision on the claim.",
    faqs: [
      {
        question: "Are guests’ caravans covered under the park’s insurance?",
        answer:
          "Generally, guests’ caravans and residents’ homes are insured by their owners rather than by the park. The park’s liability policy may respond if the park is legally liable for damage, depending on the policy wording.",
      },
      {
        question: "Can tour operators get cover for adventure activities?",
        answer:
          "Some insurers offer cover for adventure and outdoor activities, while others exclude them. Insurers usually ask about the activity, safety procedures, staff qualifications and equipment before offering terms.",
      },
      {
        question: "What happens if a road closure stops guests arriving?",
        answer:
          "Business interruption cover usually responds to insured damage at your premises. Some policies offer extensions for loss of access or damage nearby, each with its own limits and conditions. The policy wording sets out what applies.",
      },
    ],
    relatedIndustries: ["accommodation", "food-and-hospitality", "transport-and-logistics"],
  },
  {
    slug: "beauty-and-personal-services",
    name: "Beauty and Personal Services",
    titleWords: ["Beauty and", "Personal"],
    image: "/images/photos/pexels-1020370.jpg",
    metaDescription:
      "Insurance information for Australian hairdressers, barbers, beauty salons and personal service businesses, covering treatment, public and product liability.",
    summary:
      "General information on insurance options commonly considered by hairdressers, barbers, beauty salons and other personal service businesses.",
    intro:
      "Hair, beauty and personal service businesses work closely with clients every day. Treatments, products, equipment and a busy salon floor each bring their own risks. Kooo Insurance helps these businesses understand the insurance options that may be relevant to the services they provide.",
    audiences: ["Hairdressers", "Barbers", "Beauty salons", "Other personal service businesses"],
    risks: [
      {
        title: "Treatments and services",
        text: "Cutting, colouring, waxing, skin treatments and nail services involve direct contact with clients. Reactions, burns, cuts and other injuries can lead to claims.",
      },
      {
        title: "Products used and sold",
        text: "Salons use and sell hair, skin and beauty products. Claims may arise if a product causes an allergic reaction or injury, particularly for products sold under the salon’s own label.",
      },
      {
        title: "Clients on the premises",
        text: "Clients and visitors can slip on wet floors or hair clippings, or trip over cords and equipment.",
      },
      {
        title: "Equipment and fit-out",
        text: "Chairs, basins, dryers, treatment beds and devices are a significant investment. Fire, water damage, theft and breakdown can interrupt trading.",
      },
      {
        title: "Client records and bookings",
        text: "Online booking systems and client records hold personal information, which may be exposed in a cyber incident.",
      },
      {
        title: "Staff, apprentices and chair renters",
        text: "Many salons work with employees, apprentices and contractors renting chairs. Each arrangement affects how risk and insurance are managed.",
      },
    ],
    insurance: [
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims by clients and visitors alleging injury or property damage at the salon or while services are provided.",
        product: "public-liability-insurance",
      },
      {
        title: "Treatment liability",
        text: "May cover claims alleging injury arising from a treatment or service. It is often combined with public liability for hair and beauty businesses, depending on the insurer.",
      },
      {
        title: "Product liability insurance",
        text: "May be relevant to businesses that sell products, especially products imported or sold under their own brand.",
        product: "product-liability-insurance",
      },
      {
        title: "Business insurance",
        text: "A package that may cover fit-out, equipment, stock and loss of income after insured events, depending on the sections chosen.",
        product: "business-insurance",
      },
      {
        title: "Cyber insurance",
        text: "May respond to certain data breach and system outage events affecting booking systems and client records.",
        product: "cyber-insurance",
      },
      {
        title: "Personal accident and sickness insurance",
        text: "Commonly considered by sole traders and chair renters who rely on their own ability to work.",
        product: "personal-accident-and-sickness-insurance",
      },
      {
        title: "Workers compensation",
        text: workersCompText,
      },
    ],
    considerations: [
      "Treatments such as cosmetic injectables, laser, skin needling and peels may need specialist cover, and some insurers exclude them.",
      "Insurers often ask about qualifications, training and how consultations and patch tests are recorded.",
      "Chair renters and contractors may not be covered by the salon’s policy and often arrange their own insurance.",
      "Mobile and home-based services may need cover that applies away from a fixed salon.",
      "Some policies exclude claims about results that do not meet a client’s expectations, where there is no injury.",
      "Adding new treatments or products during the year is usually something to tell the insurer about.",
    ],
    quoteInfo: [
      "Business name, ABN and salon address, or service area for mobile work",
      "Full list of services and treatments offered",
      "Qualifications and training of staff",
      "Number of employees, apprentices and chair renters",
      "Annual turnover, including product sales",
      "Value of fit-out, equipment and stock",
      "Previous insurance history and claims",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking for hairdressers, barbers, beauty salons and personal service businesses across Australia. We go through the services you offer, explain the options that may be relevant and approach insurers on your behalf. We arrange cover and assist at renewal, including when you add new treatments. If a claim arises, we help you prepare and lodge it and liaise with the insurer, who makes the decision on the claim.",
    faqs: [
      {
        question: "What is the difference between public liability and treatment liability?",
        answer:
          "Public liability generally relates to injury or damage connected with the business, such as a client slipping on a wet floor. Treatment liability relates to injury alleged to arise from the treatment or service itself, such as a reaction to a colour. Many insurers offer the two together, depending on the policy wording.",
      },
      {
        question: "Do chair renters need their own insurance?",
        answer:
          "That depends on the arrangement and the salon’s policy. Many salon policies do not extend to independent contractors, so chair renters commonly arrange their own liability cover. Some salons ask chair renters for a certificate of currency.",
      },
      {
        question: "Is mobile or home-based work covered?",
        answer:
          "Some policies cover services provided at clients’ homes or events, while others only apply at a fixed address. It is worth telling the insurer where services are provided so the policy reflects how the business operates.",
      },
      {
        question: "Are newer cosmetic treatments covered?",
        answer:
          "It depends on the treatment and the insurer. Some cosmetic and advanced skin treatments are excluded or need specialist cover. Insurers usually ask about the treatment, equipment and qualifications before offering terms.",
      },
    ],
    relatedIndustries: ["health-and-care", "fitness-and-recreation", "grocery-and-retail"],
  },
  {
    slug: "fitness-and-recreation",
    name: "Fitness and Recreation",
    titleWords: ["Fitness and", "Recreation"],
    image: "/images/photos/pexels-6230973.jpg",
    metaDescription:
      "Insurance information for Australian gyms, fitness studios, personal trainers and sporting organisations, covering liability, equipment and instruction risks.",
    summary:
      "General information on insurance options commonly considered by gyms, fitness studios, personal trainers and sporting organisations.",
    intro:
      "Fitness and recreation businesses help people move, train and compete. Physical activity, instruction and equipment all bring a risk of injury, and many operators also run events or train outdoors. Kooo Insurance helps gyms, trainers and sporting organisations understand the insurance options that may be relevant.",
    audiences: ["Gyms", "Fitness studios", "Personal trainers", "Sporting organisations"],
    risks: [
      {
        title: "Injury during activity",
        text: "Members, clients and participants can be injured while training, playing or using facilities. Claims may allege that the premises, equipment or supervision contributed.",
      },
      {
        title: "Instruction and programming",
        text: "Trainers and coaches design programs and give guidance on technique. Claims can allege that advice or instruction caused an injury.",
      },
      {
        title: "Equipment",
        text: "Weights, machines, cardio equipment and sporting gear are costly. Breakdown, theft and damage can interrupt classes and income.",
      },
      {
        title: "Premises and extended hours",
        text: "Change rooms, wet areas and unstaffed or extended opening hours can increase the risk of incidents on site.",
      },
      {
        title: "Outdoor and off-site sessions",
        text: "Training in parks, on beaches or at hired venues brings different hazards, and councils and venue owners often set insurance requirements.",
      },
      {
        title: "Clubs, committees and volunteers",
        text: "Sporting organisations rely on committees, coaches and volunteers. Decisions about members, funds and selection can lead to disputes or claims.",
      },
    ],
    insurance: [
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims by members, participants and visitors alleging injury or property damage.",
        product: "public-liability-insurance",
      },
      {
        title: "Professional indemnity insurance",
        text: "May be relevant to trainers and coaches for claims alleging that their advice or instruction caused loss or injury.",
        product: "professional-indemnity-insurance",
      },
      {
        title: "Business insurance",
        text: "A package that may cover equipment, fit-out, theft and loss of income after insured events.",
        product: "business-insurance",
      },
      {
        title: "Management liability insurance",
        text: "May respond to certain claims against a club or organisation and its committee members, directors or office bearers.",
        product: "management-liability-insurance",
      },
      {
        title: "Personal accident and sickness insurance",
        text: "Commonly considered by self-employed trainers who rely on their own ability to work.",
        product: "personal-accident-and-sickness-insurance",
      },
      {
        title: "Event insurance",
        text: "May be relevant for competitions, carnivals, fun runs and other one-off events.",
        product: "event-insurance",
      },
      {
        title: "Workers compensation",
        text: workersCompText,
      },
    ],
    considerations: [
      "Councils and venue owners often ask to see proof of public liability insurance before sessions in parks, beaches or hired spaces.",
      "Insurers commonly ask about qualifications, registrations, first aid training and the activities offered.",
      "Unstaffed opening hours may affect terms, and insurers may ask about access controls, CCTV and emergency procedures.",
      "Contact sports, martial arts and some high-risk activities may be excluded or need specific cover.",
      "Sporting clubs may already have some cover through a state or national body. Checking that first can help avoid gaps or doubling up.",
      "Health screening and waivers support safe practice but do not replace insurance.",
    ],
    quoteInfo: [
      "Business or club name and ABN",
      "Premises address, or the areas where sessions are held",
      "Activities, classes and sports offered",
      "Qualifications and registrations of trainers and coaches",
      "Number of members, clients or participants",
      "Value of equipment and fit-out",
      "Annual turnover, wages and number of employees",
      "Previous insurance history and claims",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking for gyms, fitness studios, personal trainers and sporting organisations across Australia. We take time to understand the activities you run and where you run them, explain the options that may be relevant and approach insurers on your behalf. We arrange cover and assist at renewal as your classes or programs change. If a claim arises, we help you prepare and lodge it and liaise with the insurer, who makes the decision on the claim.",
    faqs: [
      {
        question: "Is professional indemnity relevant for personal trainers?",
        answer:
          "Professional indemnity is commonly considered by trainers alongside public liability. Public liability generally relates to injury or damage connected with the business, while professional indemnity relates to claims about advice or instruction. Many insurers offer combined policies for fitness professionals.",
      },
      {
        question: "Is cover available for training in parks and on beaches?",
        answer:
          "Many policies can apply to outdoor sessions, though some limit where activities can take place. Councils often require a certificate of currency and a minimum public liability limit before issuing a permit. Requirements vary between councils.",
      },
      {
        question: "Our club is affiliated with a state sporting body. Are we already insured?",
        answer:
          "Some state and national bodies arrange insurance for affiliated clubs, which may include public liability and personal accident cover for registered players. What is included varies widely. Reviewing that program first helps show what may still be worth considering.",
      },
    ],
    relatedIndustries: ["beauty-and-personal-services", "education", "places-of-worship-and-community"],
  },
  {
    slug: "manufacturing-and-distribution",
    name: "Manufacturing and Distribution",
    titleWords: ["Production", "Distribution"],
    image: "/images/photos/crane-truck.png",
    metaDescription:
      "Insurance information for Australian manufacturers, wholesalers, importers, exporters and warehouse operators, covering products, stock, transit and liability.",
    summary:
      "General information on insurance options commonly considered by manufacturers, wholesalers, importers, exporters and warehouse operators.",
    intro:
      "Manufacturing and distribution businesses make, store and move goods through the supply chain. Plant, stock, products and shipments can each be affected by different events. Kooo Insurance helps these businesses understand the insurance options that may be relevant at each stage.",
    audiences: ["Manufacturers", "Wholesalers", "Importers", "Exporters", "Warehouse operators"],
    risks: [
      {
        title: "Products supplied",
        text: "A product that is faulty or unsafe can cause injury or damage after it leaves the business. Importers may carry responsibility for goods made overseas, particularly when the overseas maker has no presence in Australia.",
      },
      {
        title: "Plant and machinery",
        text: "Production lines, forklifts and other equipment can break down or be damaged. A single breakdown can halt production and delay orders.",
      },
      {
        title: "Stock and premises",
        text: "Factories and warehouses often hold large amounts of stock in one place. Fire, storm, water damage and theft can affect both the building and its contents.",
      },
      {
        title: "Goods in transit and shipping",
        text: "Goods moving by road, rail, sea or air can be lost, damaged or delayed. Who bears the risk during transit depends on the sale contract.",
      },
      {
        title: "Supply chain disruption",
        text: "Damage at a supplier’s or customer’s premises, or delays at ports, can interrupt production and sales.",
      },
      {
        title: "Workplace safety",
        text: "Forklifts, machinery, manual handling and working at heights are common sources of workplace injury.",
      },
    ],
    insurance: [
      {
        title: "Product liability insurance",
        text: "Commonly considered for claims alleging injury or property damage caused by products made, imported or supplied.",
        product: "product-liability-insurance",
      },
      {
        title: "Public liability insurance",
        text: "May respond to claims by visitors, contractors and the public alleging injury or damage connected with the business.",
        product: "public-liability-insurance",
      },
      {
        title: "Commercial property insurance",
        text: "Cover for factories, warehouses, fit-out and stock against insured events such as fire and storm.",
        product: "commercial-property-insurance",
      },
      {
        title: "Business interruption insurance",
        text: "May cover loss of income and some additional costs after insured damage stops or slows production.",
        product: "business-interruption-insurance",
      },
      {
        title: "Marine cargo insurance",
        text: "For goods imported or exported by sea or air, depending on the shipping terms and policy wording.",
        product: "marine-cargo-insurance",
      },
      {
        title: "Goods in transit insurance",
        text: "For goods carried by road or rail within Australia, including deliveries to customers.",
        product: "goods-in-transit-insurance",
      },
      {
        title: "Plant and machinery insurance",
        text: "For forklifts and other mobile plant used on site or between sites.",
        product: "plant-and-machinery-insurance",
      },
      {
        title: "Workers compensation",
        text: workersCompText,
      },
    ],
    considerations: [
      "Product recall costs are often excluded from product liability policies and may need separate cover.",
      "Exports to some countries, including the United States and Canada, can affect the availability and terms of product liability cover.",
      "Shipping terms in sale contracts, such as Incoterms, help show who carries the risk of goods during transit.",
      "Stock values can change through the year, and seasonal peaks are worth considering when setting sums insured.",
      "Customer and supplier contracts may require particular insurance limits or indemnities.",
      "Fire protection, sprinklers and storage practices are commonly reviewed by insurers.",
    ],
    quoteInfo: [
      "Business name, ABN and premises addresses",
      "Description of products made, imported, exported or stored",
      "Countries products are exported to",
      "Building construction, fire protection and security",
      "Values of buildings, plant, machinery and stock",
      "Annual turnover and estimated value of goods shipped",
      "Number of employees and annual wages",
      "Previous insurance history and claims",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking for manufacturers, wholesalers, importers, exporters and warehouse operators across Australia. We work through how goods are made, stored and moved, explain the options that may be relevant and approach insurers on your behalf. We arrange cover and assist at renewal as products, markets or volumes change. If a claim arises, we help you prepare and lodge it and liaise with the insurer, who makes the decision on the claim.",
    faqs: [
      {
        question: "We import products made overseas. Can we be held responsible for them?",
        answer:
          "Importers can be treated as responsible for goods they bring into Australia, particularly when the overseas manufacturer has no local presence. Product liability insurance is commonly considered by importers for this reason. Legal questions about responsibility are best directed to a lawyer.",
      },
      {
        question: "Does product liability insurance cover a product recall?",
        answer:
          "Product liability policies usually respond to injury or property damage caused by a product, not the cost of recalling it. Product recall cover is available from some insurers as a separate policy or extension, depending on the product and the business.",
      },
      {
        question: "Who insures goods while they are being shipped?",
        answer:
          "It depends on the shipping terms agreed between the buyer and seller. Under some terms the seller carries the risk until delivery, and under others it passes to the buyer earlier. Marine cargo insurance is commonly arranged by whichever party carries that risk.",
      },
    ],
    relatedIndustries: ["transport-and-logistics", "grocery-and-retail", "agriculture-and-rural"],
  },
  {
    slug: "property",
    name: "Property",
    titleWords: ["Commercial", "Property"],
    image: "/images/photos/pexels-32570638.png",
    metaDescription:
      "Insurance information for Australian commercial property owners, landlords, property managers and real estate businesses, covering buildings and liability.",
    summary:
      "General information on insurance options commonly considered by commercial property owners, landlords, property managers and real estate businesses.",
    intro:
      "Property owners, landlords, property managers and real estate businesses look after buildings, tenants and money on behalf of others. The risks range from damage to the building to claims about advice or management. Kooo Insurance helps property businesses understand the insurance options that may be relevant to their role.",
    audiences: [
      "Commercial property owners",
      "Landlords",
      "Property managers",
      "Real estate businesses",
    ],
    risks: [
      {
        title: "Damage to buildings",
        text: "Fire, storm, water damage, impact and malicious damage can affect buildings, fixtures and common areas, leading to repair costs and lost rent.",
      },
      {
        title: "Tenants and rent",
        text: "Landlords can face rent arrears, tenants leaving without notice, or damage caused by tenants during a lease.",
      },
      {
        title: "Injury on the property",
        text: "Owners may be held responsible for injuries in car parks, foyers, stairways and other areas under their control.",
      },
      {
        title: "Vacant property",
        text: "Buildings left empty between tenants may face a higher risk of vandalism, theft and undetected damage.",
      },
      {
        title: "Advice and management",
        text: "Property managers and real estate agents give advice, manage leases and handle disputes. Claims can allege errors, omissions or negligence.",
      },
      {
        title: "Trust money and data",
        text: "Real estate businesses hold client funds and personal information. Email compromise, payment redirection fraud and data breaches are common concerns.",
      },
    ],
    insurance: [
      {
        title: "Commercial property insurance",
        text: "Cover for commercial buildings and owners’ fixtures against insured events, often with options for loss of rent and liability.",
        product: "commercial-property-insurance",
      },
      {
        title: "Landlord insurance",
        text: "For residential rental properties. Policies may include building, contents, loss of rent and liability sections, depending on the insurer.",
        product: "landlord-insurance",
      },
      {
        title: "Commercial strata insurance",
        text: "For buildings and common property in strata schemes, generally arranged by the owners corporation or body corporate.",
        product: "commercial-strata-insurance",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered by owners and managers for claims alleging injury or property damage connected with the property or their business.",
        product: "public-liability-insurance",
      },
      {
        title: "Unoccupied property insurance",
        text: "May be relevant when a building is vacant for longer than a standard policy allows.",
        product: "unoccupied-property-insurance",
      },
      {
        title: "Professional indemnity insurance",
        text: "For real estate agents and property managers, for claims alleging loss caused by their advice or services.",
        product: "professional-indemnity-insurance",
      },
      {
        title: "Cyber insurance",
        text: "May respond to certain data breach, system outage and cyber fraud events, depending on the policy wording.",
        product: "cyber-insurance",
      },
      {
        title: "Management liability insurance",
        text: "May respond to certain claims against a business and its directors and officers, including some employment and statutory matters.",
        product: "management-liability-insurance",
      },
    ],
    considerations: [
      "Leases often set out who insures the building, what limits apply and whether the landlord is noted on the tenant’s policy.",
      "Sums insured are worth reviewing regularly, as rebuilding costs change and underinsurance can reduce a claim payment.",
      "Most policies have unoccupancy conditions that apply after a set period of vacancy.",
      "In strata schemes, the owners corporation or body corporate generally insures the building. Terminology and requirements vary by state and territory.",
      "Loss of rent cover usually applies only after insured damage or specified tenant events, with limits and waiting periods.",
      "Licensing and insurance requirements for real estate agents vary by state and territory.",
    ],
    quoteInfo: [
      "Owner or business name and ABN",
      "Property address, construction, age and use",
      "Building sum insured and any recent valuation",
      "Tenants, their businesses and lease terms",
      "Annual rent and occupancy history",
      "For agencies: services offered, fee income and number of properties managed",
      "Previous insurance history and claims",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking for commercial property owners, landlords, property managers and real estate businesses across Australia. We look at the properties you own or manage and the services you provide, explain the options that may be relevant and approach insurers on your behalf. We arrange cover and assist at renewal, including when tenants change. If a claim arises, we help you prepare and lodge it and liaise with the insurer, who makes the decision on the claim.",
    faqs: [
      {
        question: "What is the difference between landlord insurance and commercial property insurance?",
        answer:
          "Landlord insurance is generally designed for residential rental properties, with options such as loss of rent and tenant damage. Commercial property insurance is generally for offices, shops, warehouses and other commercial buildings. The right fit depends on how the property is used.",
      },
      {
        question: "Who insures a building in a strata scheme?",
        answer:
          "In most strata schemes, the owners corporation or body corporate insures the building and common property. Individual owners commonly arrange cover for their own fit-out, contents and loss of rent. Terms and requirements vary by state and territory.",
      },
      {
        question: "What happens to cover when a property is vacant?",
        answer:
          "Many policies restrict or suspend some cover once a property has been vacant for a set period. It is worth telling the insurer when a property becomes vacant. Unoccupied property insurance may be an option for longer vacancies.",
      },
      {
        question: "Does professional indemnity cover trust account fraud?",
        answer:
          "Not usually on its own. Professional indemnity relates to claims about advice and services. Losses from fraud or cyber events may fall under cyber, crime or management liability cover, depending on the insurer and policy wording.",
      },
    ],
    relatedIndustries: ["accommodation", "professional-services", "trades-and-construction"],
  },
  {
    slug: "agriculture-and-rural",
    name: "Agriculture and Rural",
    titleWords: ["Agriculture", "and Rural"],
    image: "/images/photos/pexels-8961401.jpg",
    metaDescription:
      "Insurance information for Australian farms, hobby farms and rural businesses, covering farm property, machinery, livestock, liability and goods in transit.",
    summary:
      "General information on insurance options commonly considered by farms, hobby farms and rural businesses.",
    intro:
      "Farms and rural businesses combine homes, sheds, machinery, livestock and land in one operation. Weather, fire and distance from services all shape the risks they face. Kooo Insurance helps farmers and rural businesses understand the insurance options that may be relevant.",
    audiences: ["Farms", "Hobby farms", "Rural businesses"],
    risks: [
      {
        title: "Farm buildings and infrastructure",
        text: "Homes, sheds, yards, fences, water tanks and pumps can be damaged by fire, storm, flood and other events.",
      },
      {
        title: "Livestock",
        text: "Livestock can be lost or injured through fire, flood, accidents or theft. How livestock is valued affects any claim.",
      },
      {
        title: "Machinery and vehicles",
        text: "Tractors, headers, utes, quad bikes and other machinery are costly and can be damaged, stolen or break down at busy times.",
      },
      {
        title: "Visitors, neighbours and roads",
        text: "Visitors, contractors and neighbours can be injured on the property. Straying livestock and fire spreading beyond boundaries may also lead to claims.",
      },
      {
        title: "Produce and farm gate sales",
        text: "Produce sold at the farm gate, at markets or to processors can lead to claims if it causes illness or injury.",
      },
      {
        title: "Farm work",
        text: "Machinery, livestock handling, chemicals and seasonal workers are common sources of workplace injury on farms.",
      },
    ],
    insurance: [
      {
        title: "Farm and rural insurance",
        text: "A package that may combine farm buildings, contents, fencing, machinery, livestock and liability sections, depending on the insurer.",
        product: "farm-and-rural-insurance",
      },
      {
        title: "Public liability insurance",
        text: "Commonly considered for claims by third parties alleging injury or property damage connected with farm activities. Often included in a farm package.",
        product: "public-liability-insurance",
      },
      {
        title: "Plant and machinery insurance",
        text: "For tractors, headers and other mobile plant, including some breakdown options, depending on the policy.",
        product: "plant-and-machinery-insurance",
      },
      {
        title: "Commercial motor insurance",
        text: "For utes, light trucks and other vehicles used in the farm or rural business.",
        product: "commercial-motor-insurance",
      },
      {
        title: "Goods in transit insurance",
        text: "May be relevant for livestock, produce and equipment carried to markets, saleyards and customers.",
        product: "goods-in-transit-insurance",
      },
      {
        title: "Product liability insurance",
        text: "May be relevant to farms that sell produce or value-added products directly to the public or to other businesses.",
        product: "product-liability-insurance",
      },
      {
        title: "Workers compensation",
        text: workersCompText + " Seasonal and casual workers may also be included.",
      },
    ],
    considerations: [
      "Hobby farms are not always treated the same as commercial farms. Insurers may ask about land size, income and activities.",
      "Cover for fences, crops, hay and pasture is often limited or optional.",
      "Drought and gradual events are generally not covered by farm property policies.",
      "Farm stays, tourism, contracting for neighbours or on-farm processing usually need to be disclosed to the insurer.",
      "Insurers may ask about quad bike and side-by-side vehicle use, including safety equipment and training.",
      "Livestock cover often depends on the type of animal, how values are set and which events are covered.",
    ],
    quoteInfo: [
      "Owner or business name and ABN",
      "Property address and land size",
      "Farming activities, such as cropping, grazing or horticulture",
      "Buildings, their construction and replacement values",
      "Machinery, vehicles and their values",
      "Livestock types, numbers and values",
      "Annual turnover, wages and number of workers",
      "Previous insurance history and claims",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking for farms, hobby farms and rural businesses across Australia. We take time to understand your property, machinery, livestock and activities, explain the options that may be relevant and approach insurers on your behalf. We arrange cover and assist at renewal as seasons and operations change. If a claim arises, we help you prepare and lodge it and liaise with the insurer, who makes the decision on the claim.",
    faqs: [
      {
        question: "Can a hobby farm be insured under a farm policy?",
        answer:
          "Some insurers offer farm policies for hobby farms, while others suggest a home policy with rural extensions. The options depend on land size, activities and whether the farm earns income. Insurers will usually ask about these details.",
      },
      {
        question: "What if our livestock stray onto a road and cause an accident?",
        answer:
          "Farm liability policies may respond to claims arising from straying livestock, depending on the insurer and policy wording. Insurers may ask about fencing and gate practices. Whether a claim is accepted depends on the circumstances and the policy.",
      },
      {
        question: "Are farm vehicles covered under the farm policy?",
        answer:
          "Some farm packages include cover for unregistered farm machinery, while registered vehicles are usually insured under a separate motor policy. Quad bikes and side-by-side vehicles may have specific conditions. The policy wording sets out what is included.",
      },
    ],
    relatedIndustries: ["manufacturing-and-distribution", "transport-and-logistics", "caravan-parks-and-tourism"],
  },
];
