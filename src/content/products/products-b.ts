import type { Product } from "../catalogue-types";

// Truck & fleet, marine cargo, motor trades and contract works product pages.
// General information only. Drafted for the client's review before publication.

export const productsB: Product[] = [
  {
    slug: "truck-insurance",
    name: "Truck Insurance",
    titleWords: ["Truck", "Insurance"],
    category: "truckfleetinsurance",
    image: "/images/photos/pexels-2199293.jpg",
    metaDescription:
      "Truck insurance in Australia for prime movers, rigids, tippers, tankers and trailers. Kooo Insurance helps owner drivers and transport operators arrange cover.",
    summary:
      "Insurance options for prime movers, rigid trucks, tippers, tankers and trailers, from owner drivers through to transport operators across Australia.",
    intro:
      "Trucks are working assets, and an incident can affect more than the vehicle itself. Truck insurance can help protect prime movers, rigids, tippers, tankers and trailers against accidental damage, theft and liability to others. Kooo Insurance works with owner drivers and transport operators across Australia to arrange cover based on how their trucks are used.",
    overview:
      "Truck insurance is a form of commercial motor insurance for heavy vehicles. Depending on the insurer and the policy wording, it may include cover for accidental damage to the truck, fire and theft, and legal liability for damage the truck causes to other people’s property. Some policies also offer optional sections, such as cover for trailers, equipment fitted to the vehicle, goods carried, towing and recovery costs, and hire of a replacement vehicle. Compulsory Third Party (CTP) insurance for personal injury is separate and is arranged through the relevant state or territory scheme, usually with registration. What is included, and the limits and excesses that apply, vary between policies and are set out in the Product Disclosure Statement (PDS) and policy wording.",
    whoFor: [
      "Owner drivers running a single prime mover or rigid",
      "Transport and logistics operators with several heavy vehicles",
      "Tipper and earthmoving operators working on construction sites",
      "Tanker operators carrying fuel, liquids or bulk materials",
      "Businesses that use their own trucks to deliver their products",
      "Operators who hire out trucks or trailers",
    ],
    risks: [
      {
        title: "Collisions and road accidents",
        text: "Long hours, heavy loads and changing road conditions can lead to accidents that damage the truck, the trailer and other vehicles or property.",
      },
      {
        title: "Theft and vandalism",
        text: "Trucks, trailers and fitted equipment left at depots, roadside stops or job sites may be targeted for theft or malicious damage.",
      },
      {
        title: "Damage to other people’s property",
        text: "A heavy vehicle can cause significant damage to other vehicles, buildings, fences or roadside infrastructure in a single incident.",
      },
      {
        title: "Downtime after an incident",
        text: "When a truck is off the road for repairs, contracts and deliveries can be affected and income can fall.",
      },
      {
        title: "Fitted equipment and loads",
        text: "Cranes, tipping bodies, tanks and refrigeration units can be damaged along with the vehicle, and loads can shift or spill.",
      },
      {
        title: "Fire and weather",
        text: "Fire, hail, storm and flood can damage vehicles on the road or while they are parked.",
      },
    ],
    options: [
      {
        title: "Comprehensive cover",
        text: "Cover for accidental damage to the truck, fire and theft, together with liability for damage to other people’s property, subject to the policy terms.",
      },
      {
        title: "Third party property, fire and theft",
        text: "A more limited option that generally covers liability to others plus fire and theft of the truck, but not accidental damage to it.",
      },
      {
        title: "Third party property only",
        text: "Cover limited to legal liability for damage the truck causes to other people’s property.",
      },
      {
        title: "Trailers",
        text: "Trailers may be listed on the same policy as the prime mover or insured separately, depending on the insurer.",
      },
      {
        title: "Goods carried",
        text: "Optional cover for goods on the truck, either your own goods under goods in transit cover, or customers’ goods under carriers liability cover.",
      },
      {
        title: "Optional extras",
        text: "Depending on the policy, extras may include towing and recovery, hire vehicle costs, windscreen cover and cover for fitted equipment.",
      },
      {
        title: "Downtime cover",
        text: "Some insurers offer cover for lost income or extra costs while an insured truck is off the road after an insured event.",
      },
    ],
    considerations: [
      "Agreed value is a set amount agreed with the insurer, while market value is generally what the vehicle was worth just before the loss. Check which basis applies and keep the sum insured up to date.",
      "Policies commonly set conditions on who may drive, such as licence class, age and driving history. Drivers outside these conditions may be excluded or attract an extra excess.",
      "Radius of operation, the type of goods carried and any dangerous goods can affect cover and premium. Tell the insurer if these change.",
      "Excesses, limits and exclusions apply. Many policies exclude mechanical breakdown and wear and tear.",
      "CTP is separate and is arranged through the state or territory scheme, usually with registration. It is not part of a truck insurance policy.",
      "Read the PDS and policy wording, and ask us if anything is unclear.",
    ],
    quoteInfo: [
      "Business name, ABN and contact details",
      "Make, model, year and registration of each truck and trailer",
      "Gross vehicle mass and any fitted equipment, such as cranes, tipping bodies or tanks",
      "How the vehicles are used, including the goods carried and radius of operation",
      "Driver details, including licence class, age and driving history",
      "Insurance and claims history for recent years",
      "Where the vehicles are garaged or parked overnight",
      "The value of each vehicle and whether agreed or market value is preferred",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking services to owner drivers and transport operators across Australia. We can help you understand the options available for your trucks and trailers, approach insurers on your behalf and arrange cover. At renewal, we can go through any changes to your vehicles, drivers or operations with you. If something goes wrong, we can help you prepare and lodge a claim and liaise with the insurer while it is assessed. The insurer decides each claim under the terms of the policy.",
    faqs: [
      {
        question: "Is CTP included in truck insurance?",
        answer:
          "No. Compulsory Third Party (CTP) insurance relates to injury to people and is arranged through the relevant state or territory scheme, usually as part of registration. Truck insurance generally deals with damage to vehicles and property. The two sit alongside each other.",
      },
      {
        question: "Can trailers go on the same policy as the truck?",
        answer:
          "Many insurers allow trailers to be listed on the same policy as the prime mover or rigid, while others insure them separately. Cover for a trailer when it is detached, or towed by a vehicle not on the policy, varies. Check the policy wording for how trailers are treated.",
      },
      {
        question: "Does truck insurance cover the goods on the truck?",
        answer:
          "Not usually by default. Goods may be covered under an optional section, a separate goods in transit policy, or carriers liability insurance where you carry goods for others. Which option may be relevant depends on whose goods they are and the terms of your contracts with customers.",
      },
      {
        question: "What should happen after one of our trucks is in an accident?",
        answer:
          "Report the incident to us or the insurer as soon as practical, and keep photos, details of other parties and any police event numbers. We can help you prepare and lodge the claim and keep in contact with the insurer. Whether the claim is accepted depends on the policy terms, including any driver conditions.",
      },
    ],
    relatedProducts: [
      "fleet-insurance",
      "goods-in-transit-insurance",
      "carriers-liability-insurance",
      "public-liability-insurance",
    ],
    relatedIndustries: [
      "transport-and-logistics",
      "trades-and-construction",
      "agriculture-and-rural",
      "manufacturing-and-distribution",
    ],
  },
  {
    slug: "fleet-insurance",
    name: "Fleet Insurance",
    titleWords: ["Fleet", "Insurance"],
    category: "truckfleetinsurance",
    image: "/images/photos/crane-truck.png",
    metaDescription:
      "Fleet insurance in Australia for businesses with several trucks, vans, utes or cars. Kooo Insurance helps you compare options and arrange cover in one policy.",
    summary:
      "One policy for multiple business vehicles, from cars and utes to vans and trucks, making cover easier to manage for Australian businesses.",
    intro:
      "When a business runs several vehicles, insuring each one separately can become hard to manage. Fleet insurance brings trucks, vans, utes and company cars together under one policy with one renewal date. Kooo Insurance helps businesses across Australia understand fleet options and arrange cover.",
    overview:
      "Fleet insurance is a commercial motor policy that covers a number of vehicles together. The minimum number of vehicles for a fleet policy varies between insurers. Depending on the policy wording, a fleet policy may provide comprehensive cover, third party property, fire and theft, or third party property only, and the level of cover can sometimes differ from vehicle to vehicle. Many fleet policies cover newly acquired vehicles automatically for a set period, provided the insurer is told. Premiums are generally assessed across the fleet as a whole, taking into account the vehicle types, how they are used, the drivers and the claims history. CTP is separate and is arranged through each state or territory scheme. The PDS and policy wording set out what is and is not covered.",
    whoFor: [
      "Businesses running several vehicles of mixed types",
      "Transport and logistics operators with trucks and trailers",
      "Trades and service businesses with utes and vans",
      "Companies that provide cars to staff",
      "Delivery and courier businesses",
      "Businesses with vehicles based in more than one location or state",
    ],
    risks: [
      {
        title: "More drivers, more variables",
        text: "A larger fleet usually means more drivers, with different levels of experience and different driving records.",
      },
      {
        title: "Accidents and third party damage",
        text: "Every vehicle on the road is a potential source of collision damage and liability for damage to other people’s property.",
      },
      {
        title: "Theft and break-ins",
        text: "Vehicles parked at depots, job sites or employees’ homes can be stolen or broken into, along with tools and equipment inside.",
      },
      {
        title: "Gaps between policies",
        text: "Separate policies with different renewal dates make it easier for a vehicle to be missed or for cover to lapse.",
      },
      {
        title: "Vehicles off the road",
        text: "Accidents and repairs can take vehicles out of service, affecting jobs, deliveries and staff rosters.",
      },
    ],
    options: [
      {
        title: "Comprehensive fleet cover",
        text: "Cover for accidental damage, fire and theft of fleet vehicles, together with liability for damage to other people’s property, subject to the policy terms.",
      },
      {
        title: "Third party property, fire and theft",
        text: "A more limited level of cover that some businesses consider for older or lower value vehicles in the fleet.",
      },
      {
        title: "Automatic additions",
        text: "Cover for newly acquired vehicles for a set period, provided the insurer is told within the timeframe in the policy.",
      },
      {
        title: "Authorised drivers",
        text: "Many fleet policies cover any driver authorised by the business, subject to licence and other conditions in the policy.",
      },
      {
        title: "Optional extras",
        text: "Depending on the insurer, options may include hire vehicle costs, windscreen cover, towing, and cover for fitted equipment, signage or tools.",
      },
      {
        title: "Goods carried",
        text: "Goods in transit or carriers liability cover can sometimes be added to a fleet policy, or arranged separately.",
      },
    ],
    considerations: [
      "Fleet policies usually rely on an up-to-date vehicle schedule. Tell the insurer when vehicles are added, sold or change use.",
      "Driver conditions, such as age, licence type and driving history, still apply. Some insurers apply extra excesses for young or inexperienced drivers.",
      "The claims history of the whole fleet can affect premiums and terms at renewal.",
      "Excesses may differ by vehicle type, and some vehicles, such as heavy trucks, may be underwritten separately.",
      "CTP is separate and is arranged through state and territory schemes.",
      "Read the PDS and policy wording, including exclusions for wear and tear, mechanical breakdown and unlicensed drivers.",
    ],
    quoteInfo: [
      "Business name, ABN and the nature of the business",
      "A vehicle schedule listing make, model, year, registration and value",
      "How each vehicle is used and where it is garaged",
      "Driver details or the business’s driver policy, including minimum ages and licence checks",
      "Claims history for the fleet over recent years",
      "Current insurance details and renewal dates",
      "Any driver training, telematics or vehicle security measures in place",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking services to businesses with vehicle fleets across Australia. We can help you understand how fleet policies work, approach insurers on your behalf and arrange cover. During the year and at renewal, we can help you keep the vehicle schedule current and talk through any changes to your fleet or drivers. If a vehicle is involved in an incident, we can help you prepare and lodge the claim and liaise with the insurer. The insurer decides each claim under the terms of the policy.",
    faqs: [
      {
        question: "How many vehicles make a fleet?",
        answer:
          "It depends on the insurer. Some offer fleet policies from a small number of vehicles, while others set a higher minimum. We can let you know what is available for the number and type of vehicles you run.",
      },
      {
        question: "Can different vehicles have different levels of cover?",
        answer:
          "Often, yes. Some fleet policies allow older vehicles to be insured for third party property only while newer vehicles have comprehensive cover. This depends on the insurer and the policy wording.",
      },
      {
        question: "What happens when we buy or sell a vehicle?",
        answer:
          "Most fleet policies require changes to be notified to the insurer, often within a set period. Some include automatic cover for new vehicles for a limited time. Keeping the vehicle schedule current helps avoid gaps in cover.",
      },
      {
        question: "Does a fleet policy cover employees’ own cars used for work?",
        answer:
          "Generally, a fleet policy covers the vehicles listed on it, not privately owned cars. Some business policies offer limited cover for employees’ vehicles used on business, depending on the insurer. Check the policy wording or ask us.",
      },
    ],
    relatedProducts: [
      "commercial-motor-insurance",
      "truck-insurance",
      "goods-in-transit-insurance",
      "business-insurance",
    ],
    relatedIndustries: [
      "transport-and-logistics",
      "trades-and-construction",
      "manufacturing-and-distribution",
      "professional-services",
    ],
  },
  {
    slug: "commercial-motor-insurance",
    name: "Commercial Motor Insurance",
    titleWords: ["Commercial", "Motor"],
    category: "truckfleetinsurance",
    image: "/images/photos/pexels-585419.jpg",
    metaDescription:
      "Commercial motor insurance in Australia for utes, vans, light commercial vehicles and business cars. Kooo Insurance helps you understand and arrange cover.",
    summary:
      "Insurance for utes, vans, light commercial vehicles and business cars used for work across Australia.",
    intro:
      "Business vehicles carry tools, stock and staff, and they are often central to getting the job done. Commercial motor insurance can help protect utes, vans, light commercial vehicles and business cars against accidental damage, theft and liability to others. Kooo Insurance helps sole traders and businesses across Australia arrange cover for their work vehicles.",
    overview:
      "Commercial motor insurance covers vehicles owned or used by a business. It is commonly arranged for utes, vans, light trucks and cars used for work, whether by a sole trader or a company with a handful of vehicles. Depending on the insurer and the policy wording, cover may include accidental damage, fire and theft, and legal liability for damage to other people’s property. Optional extras may be available for signage, racking and fit-outs, tools left in the vehicle, hire vehicles and windscreens. A private car policy may limit or exclude business use, so how the vehicle is used is an important part of the information an insurer considers. Heavier vehicles such as prime movers are usually insured under a truck policy. CTP is separate and is arranged through the relevant state or territory scheme.",
    whoFor: [
      "Tradies and contractors with utes and vans",
      "Sole traders who use a vehicle for work",
      "Small businesses with one or a few work vehicles",
      "Mobile service businesses, such as cleaners, detailers and technicians",
      "Businesses that provide cars to staff",
      "Delivery businesses using vans or light trucks",
    ],
    risks: [
      {
        title: "Accidents on the road",
        text: "Work vehicles spend a lot of time on the road, often in traffic and to tight schedules, which can increase the chance of a collision.",
      },
      {
        title: "Theft of the vehicle and contents",
        text: "Utes and vans can be targeted for the tools and equipment inside, as well as for the vehicle itself.",
      },
      {
        title: "Damage on job sites",
        text: "Vehicles parked or driven on construction and work sites can be damaged by machinery, falling objects or rough ground.",
      },
      {
        title: "Fit-outs and accessories",
        text: "Toolboxes, racks, canopies, signage and shelving add value to a vehicle and can be damaged or stolen.",
      },
      {
        title: "Vehicle off the road",
        text: "A work vehicle in for repairs can mean missed jobs and the cost of finding another way to get to work.",
      },
    ],
    options: [
      {
        title: "Comprehensive cover",
        text: "Cover for accidental damage, fire and theft of the vehicle, plus liability for damage to other people’s property, subject to the policy terms.",
      },
      {
        title: "Third party property, fire and theft",
        text: "A more limited option that generally covers liability to others plus fire and theft of the vehicle, but not accidental damage to it.",
      },
      {
        title: "Third party property only",
        text: "Cover limited to legal liability for damage your vehicle causes to other people’s property.",
      },
      {
        title: "Tools and contents",
        text: "Some policies offer optional cover for tools and equipment in the vehicle, usually with limits and security conditions.",
      },
      {
        title: "Fit-outs and signage",
        text: "Racking, canopies, signwriting and other accessories may be covered if they are declared to the insurer.",
      },
      {
        title: "Hire vehicle and windscreen",
        text: "Depending on the insurer, extras may include a hire vehicle after an insured event and windscreen or glass cover.",
      },
    ],
    considerations: [
      "Tell the insurer how the vehicle is used. A vehicle used for work but insured under a private policy may not be covered for business use.",
      "Tools in a vehicle are often not covered unless a specific option or a separate tools policy is in place. Theft from an unattended vehicle may require signs of forced entry.",
      "Modifications, accessories and fit-outs may need to be declared for cover to apply.",
      "Driver conditions, excesses and exclusions apply, including for young or inexperienced drivers in some policies.",
      "CTP is separate and is arranged through the relevant state or territory scheme.",
      "Read the PDS and policy wording, and ask us if anything is unclear.",
    ],
    quoteInfo: [
      "Business name, ABN and the nature of the business",
      "Make, model, year and registration of each vehicle",
      "Any modifications, accessories, fit-outs or signage",
      "How the vehicle is used for work, including any goods or tools carried",
      "The address or postcode where the vehicle is kept overnight",
      "Driver details, including age, licence and driving history",
      "Insurance and claims history for recent years",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking services to sole traders and businesses across Australia. We can help you understand the differences between levels of cover and optional extras, approach insurers on your behalf and arrange cover for your work vehicles. At renewal, we can check in about changes to your vehicles, fit-outs or drivers. If you have an accident or a theft, we can help you prepare and lodge the claim and liaise with the insurer. The insurer decides each claim under the terms of the policy.",
    faqs: [
      {
        question: "What is the difference between commercial motor and private car insurance?",
        answer:
          "Commercial motor insurance is designed for vehicles used for business, and it is assessed on how the vehicle is used for work. A private policy may limit or exclude business use. If a vehicle is used for work, it is important that the insurer knows.",
      },
      {
        question: "Are tools in a ute or van covered?",
        answer:
          "Not always. Some commercial motor policies offer an optional section for tools and contents, often with limits and security conditions. Otherwise, tools may be insured under a separate tools and equipment policy. Check the PDS or ask us about the options.",
      },
      {
        question: "Does commercial motor insurance cover trucks?",
        answer:
          "Light trucks are often included. Heavier vehicles, such as prime movers, rigids and tippers, are usually insured under a truck or heavy vehicle policy designed for how they operate. Businesses with several vehicles may also look at a fleet policy.",
      },
      {
        question: "Who can drive a vehicle insured under a commercial motor policy?",
        answer:
          "It depends on the policy. Some cover any licensed driver authorised by the business, while others name specific drivers or apply extra excesses for drivers under a certain age. The PDS sets out the driver conditions that apply.",
      },
    ],
    relatedProducts: [
      "fleet-insurance",
      "truck-insurance",
      "tools-and-equipment-insurance",
      "public-liability-insurance",
    ],
    relatedIndustries: [
      "trades-and-construction",
      "transport-and-logistics",
      "professional-services",
      "health-and-care",
    ],
  },
  {
    slug: "goods-in-transit-insurance",
    name: "Goods in Transit Insurance",
    titleWords: ["Goods in", "Transit"],
    category: "truckfleetinsurance",
    image: "/images/photos/pexels-1020370.jpg",
    metaDescription:
      "Goods in transit insurance in Australia for stock, materials and equipment moved by your vehicles or a carrier. Learn how cover works and what insurers ask for.",
    summary:
      "Cover for your own stock, materials and equipment while they are being transported across Australia, in your vehicles or with a carrier.",
    intro:
      "Goods are exposed to accidents, theft and damage every time they leave the warehouse. Goods in transit insurance can help protect your own stock, materials and equipment while they are moved in your vehicles or by a carrier you engage. It is different from carriers liability insurance, which relates to goods you carry for other people.",
    overview:
      "Goods in transit insurance covers loss of or damage to goods owned by the business, or that it is responsible for under the policy terms, while they are being transported. Cover is commonly arranged for goods carried in the business’s own vehicles across Australia, and some policies extend to goods sent with carriers or couriers. Depending on the insurer and the policy wording, cover may respond to events such as collision or overturning of the vehicle, fire, theft, and in some cases accidental damage during loading and unloading. Policies are usually written with a limit per vehicle or per consignment, and can be arranged annually or for a single trip. Imports and exports are generally insured under a marine cargo policy instead. The PDS and policy wording set out the events covered, the limits and the exclusions.",
    whoFor: [
      "Wholesalers and distributors delivering their own stock",
      "Manufacturers moving products to customers or between sites",
      "Tradies and builders carrying materials and equipment to jobs",
      "Retailers delivering goods to customers",
      "Farmers and producers moving produce to market",
      "Businesses that send goods with couriers or carriers",
    ],
    risks: [
      {
        title: "Vehicle accidents",
        text: "A collision or overturn can damage or destroy a whole load in one incident.",
      },
      {
        title: "Theft",
        text: "Loads can be stolen from vehicles at stops, overnight or during unattended deliveries.",
      },
      {
        title: "Loading and unloading",
        text: "Goods can be dropped or damaged while being loaded, unloaded or moved by forklift.",
      },
      {
        title: "Fire and weather",
        text: "Fire, storm and flood can damage goods on the road or in a parked vehicle.",
      },
      {
        title: "Limited carrier liability",
        text: "When goods are sent with a carrier, the carrier’s liability may be limited by its terms and conditions, leaving the owner of the goods to bear part of the loss.",
      },
    ],
    options: [
      {
        title: "Own vehicle cover",
        text: "Cover for goods carried in vehicles owned or operated by the business, usually with a limit per vehicle.",
      },
      {
        title: "Goods sent by carrier",
        text: "Cover for goods sent with couriers, freight companies or other carriers, depending on the policy.",
      },
      {
        title: "Annual policy",
        text: "Covers transits throughout the policy period, often based on the estimated annual value of goods moved.",
      },
      {
        title: "Single transit",
        text: "Cover for a one-off trip, such as relocating equipment or a single large delivery.",
      },
      {
        title: "Accidental damage",
        text: "Some policies offer broader cover for accidental damage, rather than a list of specified events only.",
      },
      {
        title: "Refrigerated goods",
        text: "Cover for spoilage caused by refrigeration breakdown may be available as an option, often with conditions.",
      },
    ],
    considerations: [
      "Some policies cover specified events only, such as fire, collision and theft, rather than all accidental damage. Check which basis applies.",
      "Limits usually apply per vehicle or per consignment. Consider whether the limit reflects the value of your largest load.",
      "Theft from unattended vehicles often carries conditions, such as the vehicle being locked or the goods being out of sight.",
      "Some goods may be excluded or need the insurer’s approval, such as cash, jewellery, livestock, dangerous goods and fragile items.",
      "Inadequate packing, wear and tear and gradual deterioration are common exclusions.",
      "Imports and exports are generally insured under marine cargo insurance rather than goods in transit cover.",
    ],
    quoteInfo: [
      "Business name, ABN and the nature of the business",
      "The types of goods transported and how they are packed",
      "The maximum value of goods in any one vehicle or consignment",
      "The estimated value of goods transported each year",
      "Whether goods are carried in your own vehicles, by carriers, or both",
      "The areas and routes travelled, and any overnight storage",
      "Insurance and claims history for recent years",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking services to businesses across Australia that move goods. We can help you understand how goods in transit cover works alongside your motor and business policies, approach insurers on your behalf and arrange cover. At renewal, we can review changes to the goods you carry, load values and the way you transport them. If goods are lost or damaged, we can help you prepare and lodge the claim and liaise with the insurer. The insurer decides each claim under the terms of the policy.",
    faqs: [
      {
        question: "What is the difference between goods in transit and carriers liability insurance?",
        answer:
          "Goods in transit insurance generally covers your own goods while they are being moved. Carriers liability insurance relates to your legal liability for other people’s goods that you carry for reward. Some transport operators consider both, depending on what they carry and their contracts.",
      },
      {
        question: "Are goods covered while they are left in a vehicle overnight?",
        answer:
          "It depends on the policy. Some policies cover goods temporarily left in a vehicle, often with conditions such as the vehicle being locked, garaged or in a secure yard. Check the PDS for any limits on overnight or temporary storage.",
      },
      {
        question: "Does the carrier’s insurance cover my goods?",
        answer:
          "Not necessarily. A carrier’s liability to you is usually governed by its terms and conditions, which may limit or exclude liability. A goods in transit policy in your own name may respond whether or not the carrier is at fault, depending on the wording.",
      },
      {
        question: "Can goods in transit cover be added to a motor or business policy?",
        answer:
          "Some insurers offer goods in transit as an optional section on a truck, commercial motor, fleet or business package policy. Others offer it as a standalone policy. We can explain the options available.",
      },
    ],
    relatedProducts: [
      "carriers-liability-insurance",
      "marine-cargo-insurance",
      "truck-insurance",
      "business-insurance",
    ],
    relatedIndustries: [
      "transport-and-logistics",
      "manufacturing-and-distribution",
      "grocery-and-retail",
      "agriculture-and-rural",
    ],
  },
  {
    slug: "carriers-liability-insurance",
    name: "Carriers Liability Insurance",
    titleWords: ["Carriers", "Liability"],
    category: "truckfleetinsurance",
    image: "/images/photos/pexels-327540.jpg",
    metaDescription:
      "Carriers liability insurance in Australia for transport operators responsible for customers’ goods in their care. Kooo Insurance helps carriers arrange cover.",
    summary:
      "Cover for a carrier’s legal liability for loss of or damage to customers’ goods while they are in its care, custody or control.",
    intro:
      "When you carry goods for others, you take on responsibility for them. Carriers liability insurance can help protect transport operators against their legal liability if customers’ goods are lost or damaged in transit or while in their care. It differs from goods in transit insurance, which generally relates to your own goods.",
    overview:
      "Carriers liability insurance covers a carrier’s legal liability to its customers for loss of or damage to goods it transports or holds for reward. Whether a carrier is liable depends on the circumstances of the loss and on the contract or consignment terms agreed with the customer, so the insurer will generally look at those terms when assessing a claim. Depending on the policy wording, cover may extend to goods during loading and unloading and while held temporarily at a depot. Some policies respond only where the carrier is legally liable, while others can be arranged to cover customers’ goods regardless of liability, which some contracts ask for. Limits, excesses and exclusions apply and are set out in the PDS and policy wording.",
    whoFor: [
      "Owner drivers carrying freight for customers",
      "Freight and logistics companies",
      "Couriers and parcel delivery businesses",
      "Removalists",
      "Subcontractors carrying loads for larger transport companies",
      "Operators who store goods at a depot between legs of a journey",
    ],
    risks: [
      {
        title: "Damage in transit",
        text: "Accidents, load shift and rough roads can damage customers’ goods on the way to their destination.",
      },
      {
        title: "Theft of freight",
        text: "Loaded trucks and trailers can be targeted at rest stops, depots and delivery points.",
      },
      {
        title: "Loading and handling",
        text: "Goods can be dropped, crushed or damaged during loading, unloading and transfers between vehicles.",
      },
      {
        title: "Contract requirements",
        text: "Customers and head contractors may require carriers to accept liability for goods up to a set value and to hold insurance.",
      },
      {
        title: "Temperature-controlled freight",
        text: "A refrigeration failure can spoil perishable goods and lead to claims from customers.",
      },
      {
        title: "Temporary storage",
        text: "Goods held at a depot or cross-dock overnight are exposed to fire, theft and water damage.",
      },
    ],
    options: [
      {
        title: "Legal liability cover",
        text: "Cover for the carrier’s legal liability for loss of or damage to customers’ goods, subject to the policy terms.",
      },
      {
        title: "Cover regardless of liability",
        text: "Some insurers offer cover for customers’ goods whether or not the carrier is legally liable, which may be relevant where contracts require it.",
      },
      {
        title: "Loading and unloading",
        text: "Extensions for goods while they are being loaded or unloaded, depending on the policy.",
      },
      {
        title: "Depot and temporary storage",
        text: "Cover for customers’ goods held at a depot for a limited time during transit.",
      },
      {
        title: "Refrigeration breakdown",
        text: "Optional cover for spoilage of perishable goods caused by refrigeration failure, usually with conditions.",
      },
      {
        title: "Combined with motor cover",
        text: "Carriers liability can sometimes be added to a truck or fleet policy, or arranged as a standalone policy.",
      },
    ],
    considerations: [
      "Your terms and conditions of carriage can affect your liability and how a policy responds. Keep them current and use them consistently.",
      "Check what customer and head contractor agreements require, including limits and whether cover must apply regardless of liability.",
      "Limits usually apply per vehicle or per consignment. High value loads may need to be declared to the insurer in advance.",
      "Some goods may be excluded or restricted, such as cash, jewellery, livestock, dangerous goods and high-theft items.",
      "Theft from unattended vehicles often carries security conditions.",
      "Read the PDS and policy wording, and ask us if anything is unclear.",
    ],
    quoteInfo: [
      "Business name, ABN and the nature of the transport operation",
      "The types of freight carried for customers",
      "The maximum value of goods in any one vehicle or consignment",
      "Annual freight revenue or the estimated value of goods carried",
      "A copy of your terms and conditions of carriage and key customer contract requirements",
      "Vehicles used and whether subcontractors carry goods on your behalf",
      "Routes, depots and any storage arrangements",
      "Insurance and claims history for recent years",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking services to carriers and transport operators across Australia. We can help you understand how carriers liability cover works, including how it interacts with your terms of carriage and customer contracts, approach insurers on your behalf and arrange cover. We can request certificates of currency when customers ask for them and review your cover at renewal. If a customer’s goods are lost or damaged, we can help you prepare and lodge the claim and liaise with the insurer. The insurer decides each claim under the terms of the policy.",
    faqs: [
      {
        question: "Is carriers liability the same as goods in transit insurance?",
        answer:
          "No. Carriers liability insurance relates to your legal liability for customers’ goods in your care. Goods in transit insurance generally covers goods that you own. Some operators carry both their own goods and goods for others, and consider both types of cover.",
      },
      {
        question: "Can customers be given proof of insurance?",
        answer:
          "Many customers and head contractors ask carriers for evidence of insurance before work starts. Once a policy is in place, we can request a certificate of currency from the insurer for you to provide.",
      },
      {
        question: "Does carriers liability cover goods carried by subcontractors?",
        answer:
          "It depends on the policy. Some policies extend to goods carried by subcontractors on your behalf, while others do not. Check the policy wording and tell the insurer if you use subcontractors.",
      },
      {
        question: "What are terms and conditions of carriage?",
        answer:
          "They are the terms on which a carrier agrees to transport goods. They can set out the carrier’s liability, limits and timeframes for notifying claims. Insurers may consider them when assessing a claim, and a legal adviser can help with drafting them.",
      },
    ],
    relatedProducts: [
      "goods-in-transit-insurance",
      "truck-insurance",
      "fleet-insurance",
      "public-liability-insurance",
    ],
    relatedIndustries: [
      "transport-and-logistics",
      "manufacturing-and-distribution",
      "grocery-and-retail",
    ],
  },
  {
    slug: "marine-cargo-insurance",
    name: "Marine Cargo Insurance",
    titleWords: ["Marine", "Cargo"],
    category: "businessinsurance",
    image: "/images/photos/pexels-840996.jpg",
    metaDescription:
      "Marine cargo insurance for Australian importers and exporters, covering goods sent by sea, air, road and rail, with annual or single transit options available.",
    summary:
      "Insurance for goods imported into or exported from Australia, and for domestic transits, by sea, air, road and rail.",
    intro:
      "Goods moving through ports, airports and distribution networks pass through many hands. Marine cargo insurance can help protect importers and exporters against loss of or damage to goods in transit by sea, air, road and rail, across Australia and internationally. Cover can be arranged for a single shipment or on an annual basis.",
    overview:
      "Despite its name, marine cargo insurance is not limited to goods at sea. It generally covers goods in transit by sea, air, road and rail, including international imports and exports and, depending on the policy, domestic transits within Australia. Many policies are based on the Institute Cargo Clauses, which range from broad cover for physical loss or damage from external causes to more limited cover for specified events. When cover starts and ends depends on the policy and on the sale terms agreed between buyer and seller, often expressed as Incoterms. Policies commonly respond to general average contributions, a maritime principle under which cargo owners can be asked to share costs incurred to save a voyage. Cover can be arranged as a single transit policy or as an annual policy for regular shipments. Limits, excesses and exclusions apply and are set out in the PDS and policy wording.",
    whoFor: [
      "Importers bringing goods into Australia",
      "Exporters sending products overseas",
      "Wholesalers and distributors with regular international shipments",
      "Online retailers sourcing stock from overseas suppliers",
      "Manufacturers importing raw materials, parts or machinery",
      "Businesses making one-off shipments of high value goods",
    ],
    risks: [
      {
        title: "Damage at sea or in the air",
        text: "Heavy weather, rough handling and container movement can damage goods during the main voyage or flight.",
      },
      {
        title: "Theft and non-delivery",
        text: "Goods can go missing at ports, depots or in transit, in part or as a whole consignment.",
      },
      {
        title: "Handling at ports and depots",
        text: "Goods are loaded, unloaded and transferred several times on an international journey, and each move is a chance for damage.",
      },
      {
        title: "General average",
        text: "If extraordinary costs are incurred to save a ship and its cargo, cargo owners may be asked to contribute before their goods are released.",
      },
      {
        title: "Water and contamination",
        text: "Moisture, condensation and contamination inside containers can spoil goods.",
      },
      {
        title: "Limited carrier liability",
        text: "Shipping lines, airlines and freight forwarders often limit their liability under their own terms and international conventions.",
      },
    ],
    options: [
      {
        title: "Annual policy",
        text: "Covers shipments during the policy period, usually with a limit per transit and declarations of shipments or turnover.",
      },
      {
        title: "Single transit policy",
        text: "Cover for one shipment, which may be relevant for occasional or one-off imports and exports.",
      },
      {
        title: "Broad cover",
        text: "Cover for physical loss or damage from external causes, subject to the exclusions in the policy.",
      },
      {
        title: "Restricted cover",
        text: "More limited cover for specified events, such as fire, sinking, collision or overturning.",
      },
      {
        title: "Domestic transits",
        text: "Some marine cargo policies can also cover goods moved within Australia.",
      },
      {
        title: "Storage during transit",
        text: "Some policies extend to goods held in storage for a limited time as part of the journey.",
      },
      {
        title: "War and strikes",
        text: "These risks are commonly excluded from standard cover and may be added back by some insurers, subject to terms.",
      },
    ],
    considerations: [
      "Check your sale and purchase terms. Incoterms affect when risk passes between buyer and seller, and when cover may start or end.",
      "Inadequate packing, inherent vice (the natural characteristics of the goods), delay and gradual deterioration are common exclusions.",
      "Annual policies usually have a limit per transit. Shipments above that limit may need to be declared to the insurer in advance.",
      "Confirm the basis of valuation with the insurer, which is often linked to the invoice value plus freight and other costs.",
      "Claims usually require prompt notice and supporting documents, such as the bill of lading or air waybill, invoice, packing list and survey reports.",
      "Read the PDS and policy wording, and ask us if anything is unclear.",
    ],
    quoteInfo: [
      "Business name, ABN and the nature of the business",
      "The types of goods shipped and how they are packed",
      "Countries of origin and destination, and the main routes",
      "Modes of transport used, such as sea, air, road and rail",
      "The annual value of imports and exports, and the maximum value of any one shipment",
      "The Incoterms usually used in your contracts",
      "Any storage before, during or after transit",
      "Insurance and claims history for recent years",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking services to importers and exporters across Australia. We can help you understand how marine cargo cover works with your sale terms and shipping arrangements, approach insurers on your behalf and arrange annual or single transit cover. At renewal, we can review changes to your trade volumes, routes and goods. If a shipment arrives damaged or goes missing, we can help you gather documents, prepare and lodge the claim and liaise with the insurer. The insurer decides each claim under the terms of the policy.",
    faqs: [
      {
        question: "Does marine cargo insurance only cover goods on ships?",
        answer:
          "No. Despite the name, it can cover goods sent by sea, air, road and rail, including the inland legs of an international journey. Domestic transits within Australia may also be included, depending on the policy.",
      },
      {
        question: "What is the difference between annual and single transit cover?",
        answer:
          "An annual policy covers shipments made during the policy period, usually up to a limit per transit. A single transit policy covers one shipment. Businesses that ship regularly often look at annual cover, while those with occasional shipments may consider single transit cover.",
      },
      {
        question: "Doesn’t the shipping line or freight forwarder insure the goods?",
        answer:
          "Carriers and forwarders generally have liability under their own terms and applicable conventions, which often limit the amount payable and the situations in which they are liable. That liability is not the same as cargo insurance. Some forwarders offer to arrange cargo cover, so it is worth checking what is in place.",
      },
      {
        question: "What is general average?",
        answer:
          "General average is a maritime principle where, if sacrifices or expenses are made to save a ship and its cargo, everyone with an interest in the voyage shares the cost. Cargo owners may be asked for a contribution or security before their goods are released, even if their own goods were not damaged. Many cargo policies respond to general average contributions, subject to the policy terms.",
      },
    ],
    relatedProducts: [
      "goods-in-transit-insurance",
      "carriers-liability-insurance",
      "business-insurance",
      "product-liability-insurance",
    ],
    relatedIndustries: [
      "manufacturing-and-distribution",
      "grocery-and-retail",
      "transport-and-logistics",
      "agriculture-and-rural",
    ],
  },
  {
    slug: "motor-trades-insurance",
    name: "Motor Trades Insurance",
    titleWords: ["Motor", "Trades"],
    category: "industryinsurance",
    image: "/images/photos/pexels-32570638.png",
    metaDescription:
      "Motor trades insurance in Australia for car dealers, mechanics, workshops and detailers, including customer vehicles in care, vehicle stock and test drives.",
    summary:
      "Insurance for car dealers, mechanics, workshops and detailers, including customer vehicles in care, vehicle stock and test drives.",
    intro:
      "Motor trade businesses look after vehicles that can be worth more than the premises they sit in. Motor trades insurance brings together cover for customer vehicles in your care, vehicle stock, your premises and liability to others. Kooo Insurance helps dealers, mechanics, workshops and detailers across Australia understand their options.",
    overview:
      "Motor trades insurance is a package of covers designed for businesses that buy, sell, repair, service or clean vehicles. Depending on the insurer and the policy wording, it may include cover for customers’ vehicles while they are in your care, custody or control, vehicle stock held for sale, road use and test drives, buildings and contents, tools and equipment, public and products liability, and business interruption. Each section usually has its own limits, excesses and conditions, such as security requirements for keys and for vehicles kept overnight. Some policies cover vehicles driven on public roads by staff or customers, while others limit cover to the premises. The PDS and policy wording set out how each section applies.",
    whoFor: [
      "New and used car dealers and car yards",
      "Mechanics and automotive repair workshops",
      "Panel beaters and spray painters",
      "Car detailers and car wash operators, including mobile detailers",
      "Tyre, auto electrical and other specialist service businesses",
      "Motorcycle, caravan and trailer dealers",
    ],
    risks: [
      {
        title: "Customer vehicles in care",
        text: "Vehicles left for repair, servicing or detailing can be damaged, stolen or involved in an accident while in your custody.",
      },
      {
        title: "Test drives and road use",
        text: "Customers and staff driving vehicles on public roads can be involved in accidents.",
      },
      {
        title: "Theft of stock and keys",
        text: "Vehicle stock and keys are attractive to thieves, especially overnight and on open lots.",
      },
      {
        title: "Claims arising from work",
        text: "A repair or service that is later alleged to be faulty may lead to claims for resulting injury or property damage.",
      },
      {
        title: "Fire, storm and hail",
        text: "Workshops hold fuel, chemicals and vehicles close together, and outdoor stock is exposed to hail and storms.",
      },
      {
        title: "Visitors on site",
        text: "Customers walking through yards and workshops can be injured by vehicles, equipment or slippery floors.",
      },
    ],
    options: [
      {
        title: "Customer vehicles in care",
        text: "Cover for loss of or damage to customers’ vehicles while they are in your care, custody or control, subject to limits and conditions.",
      },
      {
        title: "Vehicle stock",
        text: "Cover for vehicles held for sale on your premises, with limits that may be fixed or adjusted for seasonal stock levels.",
      },
      {
        title: "Road risk and test drives",
        text: "Cover for vehicles driven on public roads by staff or customers, including on trade plates, depending on the policy.",
      },
      {
        title: "Premises and contents",
        text: "Cover for buildings, fixtures, fittings and office contents against events such as fire, storm and theft.",
      },
      {
        title: "Public and products liability",
        text: "Cover for legal liability for injury or property damage to third parties arising from your business activities or the products you sell.",
      },
      {
        title: "Tools and equipment",
        text: "Cover for hoists, diagnostic equipment and hand tools, on site or, for mobile businesses, away from the premises.",
      },
      {
        title: "Business interruption",
        text: "Cover for lost income or extra costs if the business is disrupted by an insured event, such as a fire at the workshop.",
      },
    ],
    considerations: [
      "Security conditions are common, such as key storage, locked premises and alarms. Not meeting them may affect a claim.",
      "Test drive conditions may apply, such as sighting the driver’s licence or accompanying the driver.",
      "The cost of redoing faulty work, as distinct from the damage it causes, is a common exclusion.",
      "Stock limits may be fixed or vary across the year. Tell the insurer if stock levels change.",
      "Mobile businesses should check how cover applies at customers’ premises and while travelling between jobs.",
      "Read the PDS and policy wording for each section, and ask us if anything is unclear.",
    ],
    quoteInfo: [
      "Business name, ABN and the services you provide",
      "Premises address, construction and security measures",
      "The maximum value of customer vehicles on site at any one time",
      "The average and peak value of vehicle stock",
      "Number of staff and who drives vehicles on public roads",
      "Whether test drives or trade plates are used",
      "Annual turnover",
      "Insurance and claims history for recent years",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking services to motor trade businesses across Australia. We can help you understand how the different sections of a motor trades policy fit together, approach insurers on your behalf and arrange cover. At renewal, we can go through changes to your stock levels, services and premises. If a customer’s vehicle is damaged or stock is stolen, we can help you prepare and lodge the claim and liaise with the insurer. The insurer decides each claim under the terms of the policy.",
    faqs: [
      {
        question: "Are customers’ cars covered while they are at the workshop?",
        answer:
          "Many motor trades policies include a section for customer vehicles in your care, custody or control, subject to limits and conditions. Whether a claim is covered usually depends on how the damage happened and whether security conditions were met. Check the PDS for the limit per vehicle and in total.",
      },
      {
        question: "Are test drives covered?",
        answer:
          "Some policies include road risk cover for test drives by customers or staff, often with conditions such as sighting a licence or accompanying the driver. Others limit cover to the premises. The policy wording sets out what applies.",
      },
      {
        question: "Can mobile mechanics and detailers get motor trades insurance?",
        answer:
          "Some insurers offer cover designed for mobile operators. Cover for customer vehicles, tools and liability while working at customers’ premises varies, so it is worth checking how a policy applies away from a fixed workshop.",
      },
      {
        question: "Does motor trades insurance cover the quality of my work?",
        answer:
          "Liability sections are generally designed to respond to injury or property damage caused by your work, not the cost of redoing the work itself. Disputes about the quality of a repair or service are generally excluded. The PDS explains how this applies.",
      },
    ],
    relatedProducts: [
      "public-liability-insurance",
      "product-liability-insurance",
      "commercial-property-insurance",
      "tools-and-equipment-insurance",
    ],
    relatedIndustries: [
      "fuel-and-automotive",
      "transport-and-logistics",
      "grocery-and-retail",
    ],
  },
  {
    slug: "contract-works-insurance",
    name: "Contract Works Insurance",
    titleWords: ["Contract", "Works"],
    category: "tradesconstructioninsurance",
    image: "/images/photos/pexels-8961401.jpg",
    metaDescription:
      "Contract works insurance in Australia for builders, contractors, developers and owner builders, covering projects against damage, theft or loss during building.",
    summary:
      "Cover for building and construction projects against damage, theft or loss during construction, with options for public liability.",
    intro:
      "Until a project is handed over, the works on site are exposed to fire, storms, theft and accidents. Contract works insurance can help protect the project itself, along with materials on site, during construction. It is commonly arranged by builders, contractors, developers and owner builders across Australia.",
    overview:
      "Contract works insurance, sometimes called construction or contractors all risks insurance, covers physical loss of or damage to the works under construction. Depending on the insurer and the policy wording, cover may include materials on site, temporary works, and costs such as removing debris and professional fees for rebuilding. Many policies can be combined with public liability insurance for injury or property damage to third parties arising from the works. Cover can be arranged for a single project, or on an annual basis for builders who carry out many projects, usually with a maximum contract value per project. Building contracts often set out which party must insure the works and on what terms, so the contract is an important starting point. Limits, excesses and exclusions apply and are set out in the PDS and policy wording.",
    whoFor: [
      "Residential builders",
      "Commercial builders and head contractors",
      "Property developers",
      "Owner builders",
      "Renovation and extension builders",
      "Trade contractors responsible for insuring part of a project",
    ],
    risks: [
      {
        title: "Storm and water damage",
        text: "Partly built structures are exposed to wind, rain and flooding before they are weathertight.",
      },
      {
        title: "Fire",
        text: "Hot works, electrical faults and stored materials can lead to fires that damage or destroy the works.",
      },
      {
        title: "Theft and vandalism",
        text: "Materials, fixtures and appliances on site can be stolen, and unfinished buildings can be targeted by vandals.",
      },
      {
        title: "Accidental damage",
        text: "Works can be damaged by machinery, collapse or mistakes during construction.",
      },
      {
        title: "Injury or damage to others",
        text: "Building work can injure members of the public or damage neighbouring property.",
      },
      {
        title: "Contract requirements",
        text: "Principals and financiers may require insurance in joint names, with set limits, before work can start.",
      },
    ],
    options: [
      {
        title: "Single project policy",
        text: "Cover for one project for the construction period, which may be relevant to developers, owner builders and one-off projects.",
      },
      {
        title: "Annual policy",
        text: "Covers projects started during the policy period, up to a maximum contract value per project.",
      },
      {
        title: "Public liability",
        text: "Cover for legal liability for injury or property damage to third parties arising from the works, often arranged with contract works cover.",
      },
      {
        title: "Existing structures",
        text: "Some policies can extend to existing buildings being renovated or extended, subject to limits.",
      },
      {
        title: "Materials in transit and off site",
        text: "Extensions for materials while they are being delivered or stored away from the site, depending on the policy.",
      },
      {
        title: "Plant and equipment",
        text: "Contractors’ plant and tools may be covered by an extension or under a separate plant and machinery policy.",
      },
      {
        title: "Interested parties",
        text: "Principals, owners or financiers can often be noted on the policy where a contract requires it.",
      },
    ],
    considerations: [
      "Check the building contract for insurance obligations, including who insures the works, the limits required and whether cover must be in joint names.",
      "Faulty design, workmanship or materials are usually excluded, although some policies cover resulting damage to other parts of the works.",
      "Contract value, project duration and the type of work, including demolition, height and work near water, can affect cover and premium.",
      "Cover usually ends at practical completion or handover, with some policies offering a limited period for defects work.",
      "Home warranty insurance, which applies in some states for certain residential work, is a separate product and is not part of contract works cover.",
      "Read the PDS and policy wording, and ask us if anything is unclear.",
    ],
    quoteInfo: [
      "Business name, ABN and builder’s licence details",
      "Project address and a description of the works",
      "Contract value and expected start and finish dates",
      "Type of construction and any demolition, excavation or work at height",
      "Details of any existing structures being renovated or extended",
      "Names of any principal, owner or financier to be noted on the policy",
      "The public liability limit required by the contract",
      "Annual turnover and claims history, for annual policies",
    ],
    howWeHelp:
      "Kooo Insurance provides general advice and insurance broking services to builders, contractors, developers and owner builders across Australia. We can help you understand the insurance requirements in your contract and the cover options available, approach insurers on your behalf and arrange project or annual cover. We can also request certificates of currency for principals and financiers, and review your cover at renewal. If the works are damaged, we can help you prepare and lodge the claim and liaise with the insurer. The insurer decides each claim under the terms of the policy.",
    faqs: [
      {
        question: "Who usually arranges contract works insurance?",
        answer:
          "It depends on the building contract. Many contracts require the builder to insure the works, while some leave it to the owner or principal. The contract terms are the starting point.",
      },
      {
        question: "Is contract works insurance the same as home warranty insurance?",
        answer:
          "No. Contract works insurance covers damage to the works during construction. Home warranty insurance, which applies in some states for certain residential building work, is designed to protect owners if a builder cannot complete or fix defective work in specified circumstances. They are separate products.",
      },
      {
        question: "Can owner builders get contract works insurance?",
        answer:
          "Some insurers offer contract works and liability cover for owner builders. The insurer will usually consider the owner builder’s experience, the type of construction and the project value.",
      },
      {
        question: "Does contract works insurance cover tools and machinery?",
        answer:
          "Tools and plant are often excluded or covered only by an extension. Many builders and tradies insure them under a separate tools and equipment or plant and machinery policy.",
      },
      {
        question: "When does cover end?",
        answer:
          "Cover usually ends at practical completion, handover, or when the project is occupied or used, depending on the policy. Some policies provide a limited period of cover after completion for defects work. Check the PDS for the exact wording.",
      },
    ],
    relatedProducts: [
      "public-liability-insurance",
      "plant-and-machinery-insurance",
      "tools-and-equipment-insurance",
      "commercial-property-insurance",
    ],
    relatedIndustries: ["trades-and-construction", "property"],
  },
];
