// Service-specific detailed content
export const serviceDetails: Record<string, {
  whyItMatters: {
    title: string;
    description: string;
    badge?: { text: string; color: string };
    points: Array<{ icon: string; title: string; description: string }>;
  };
  commonProblems: Array<{ icon: string; title: string; description: string }>;
  benefits: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
}> = {
  "balcony-restoration": {
    whyItMatters: {
      title: "Why Balcony Restoration Matters",
      description: "Balcony deterioration is not just an aesthetic issue—it's a serious safety concern. Over time, exposure to weather, water infiltration, and structural stress can compromise the integrity of your balconies, posing risks to residents and property.",
      badge: { text: "Critical Service", color: "red" },
      points: [
        { icon: "Shield", title: "Safety Compliance", description: "Ensures your balconies meet current building codes and safety standards, protecting residents and avoiding liability issues." },
        { icon: "Wrench", title: "Prevent Further Damage", description: "Early restoration prevents minor issues from becoming costly structural problems that require complete replacement." },
        { icon: "Droplets", title: "Water Damage Prevention", description: "Proper waterproofing protects the building structure from water infiltration that can damage interior spaces." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Concrete Spalling", description: "Cracking, chipping, and deterioration of concrete surfaces due to freeze-thaw cycles and water penetration." },
      { icon: "Droplets", title: "Water Leakage", description: "Water infiltration through cracks and joints causing damage to interior spaces and structural elements." },
      { icon: "Ruler", title: "Structural Deterioration", description: "Reinforcement corrosion, concrete degradation, and loss of structural integrity over time." },
      { icon: "Shield", title: "Railing Safety Issues", description: "Outdated or damaged railings that don't meet current building codes and safety requirements." },
      { icon: "FileCheck", title: "Code Violations", description: "Non-compliance with current building codes requiring updates to meet safety and accessibility standards." },
      { icon: "Wrench", title: "Drainage Problems", description: "Improper drainage systems leading to water pooling and accelerated deterioration." }
    ],
    benefits: [
      { title: "Expert Engineering Assessment", description: "Comprehensive structural evaluation by certified engineers to identify all issues and develop precise restoration plans." },
      { title: "Premium Materials & Techniques", description: "We use only the highest quality materials and proven restoration techniques that ensure long-lasting results." },
      { title: "Code Compliance Guaranteed", description: "All work meets or exceeds current building codes, ensuring your property is safe and compliant." },
      { title: "Minimal Disruption", description: "Our efficient processes minimize disruption to residents while completing restoration work quickly and safely." },
      { title: "Comprehensive Warranty", description: "We stand behind our work with comprehensive warranties, giving you peace of mind for years to come." }
    ],
    faqs: [
      { question: "How long does balcony restoration take?", answer: "The timeline depends on the extent of damage and the size of the balcony. Typically, a single balcony restoration takes 2-4 weeks, while building-wide projects may take 2-3 months. We provide detailed timelines during our initial assessment." },
      { question: "Do I need to vacate my unit during restoration?", answer: "In most cases, no. We work to minimize disruption and can often complete work without requiring you to leave. However, for extensive structural work, temporary relocation may be recommended for safety." },
      { question: "What causes balcony deterioration?", answer: "Common causes include water infiltration, freeze-thaw cycles, salt exposure, poor drainage, lack of maintenance, and age-related wear. Our assessment identifies all contributing factors." },
      { question: "How much does balcony restoration cost?", answer: "Costs vary based on the extent of damage, balcony size, materials needed, and accessibility. We provide detailed, transparent quotes after our comprehensive assessment. Many buildings find restoration more cost-effective than replacement." },
      { question: "Will the restoration match my building's aesthetic?", answer: "Absolutely. We carefully match colors, textures, and finishes to maintain your building's appearance. We can also enhance the aesthetic while improving functionality and safety." },
      { question: "What warranty do you provide?", answer: "We offer comprehensive warranties on all restoration work, typically ranging from 5-10 years depending on the scope. All warranties are detailed in writing before work begins." }
    ]
  },
  "masonry-restoration": {
    whyItMatters: {
      title: "Why Masonry Restoration Matters",
      description: "Masonry deterioration compromises both the structural integrity and aesthetic appeal of your building. Without proper restoration, water infiltration, freeze-thaw damage, and material degradation can lead to costly structural failures and safety hazards.",
      badge: { text: "Essential Service", color: "orange" },
      points: [
        { icon: "Shield", title: "Structural Integrity", description: "Preserves the load-bearing capacity and structural stability of your building's masonry elements." },
        { icon: "Wrench", title: "Prevent Costly Failures", description: "Early intervention prevents minor issues from escalating into major structural problems requiring extensive repairs." },
        { icon: "Droplets", title: "Water Protection", description: "Proper restoration and waterproofing prevent water damage that can compromise interior spaces and structural elements." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Mortar Deterioration", description: "Crumbling, cracked, or missing mortar joints that allow water infiltration and compromise structural integrity." },
      { icon: "Droplets", title: "Water Infiltration", description: "Water penetration through damaged mortar and masonry causing interior damage and accelerated deterioration." },
      { icon: "Ruler", title: "Brick & Stone Damage", description: "Cracked, spalled, or missing bricks and stones requiring replacement to maintain structural integrity." },
      { icon: "Shield", title: "Historical Preservation", description: "Maintaining historical character while ensuring modern safety and structural standards are met." },
      { icon: "FileCheck", title: "Color Matching", description: "Matching existing mortar and brick colors to maintain the building's original aesthetic appearance." },
      { icon: "Wrench", title: "Structural Movement", description: "Cracks and shifts in masonry due to foundation issues or structural stress requiring reinforcement." }
    ],
    benefits: [
      { title: "Expert Material Matching", description: "Our team specializes in matching historical materials, colors, and textures to preserve your building's character." },
      { title: "Historical Preservation", description: "We use techniques that preserve historical integrity while ensuring modern safety and structural standards." },
      { title: "Comprehensive Assessment", description: "Thorough evaluation of all masonry elements to identify issues before they become major problems." },
      { title: "Long-Lasting Results", description: "Premium materials and proven techniques ensure restoration work that stands the test of time." },
      { title: "Code Compliance", description: "All work meets current building codes while preserving historical character and architectural integrity." }
    ],
    faqs: [
      { question: "How long does masonry restoration take?", answer: "Timeline varies based on the scope of work. Small repairs may take a few days, while comprehensive building restoration can take several weeks to months. We provide detailed timelines after assessment." },
      { question: "Will you match my existing brick and mortar colors?", answer: "Yes, we specialize in material and color matching. Our team analyzes existing materials to create perfect matches that blend seamlessly with your building's original appearance." },
      { question: "Can you preserve historical features?", answer: "Absolutely. We use historical preservation techniques and work with preservation specialists when needed to maintain your building's historical character while ensuring safety." },
      { question: "What causes masonry deterioration?", answer: "Common causes include water infiltration, freeze-thaw cycles, age, poor maintenance, structural movement, and environmental exposure. Our assessment identifies all contributing factors." },
      { question: "How much does masonry restoration cost?", answer: "Costs depend on the extent of damage, materials needed, accessibility, and whether historical preservation is required. We provide detailed quotes after comprehensive assessment." },
      { question: "Do you work on historical buildings?", answer: "Yes, we have extensive experience with historical buildings and work with preservation specialists to ensure compliance with historical preservation requirements." }
    ]
  },
  "caulking-sealant-application": {
    whyItMatters: {
      title: "Why Proper Caulking & Sealant Matters",
      description: "Proper caulking and sealant application is your building's first line of defense against water damage, energy loss, and premature deterioration. Poor or missing sealants can lead to costly water damage, increased energy bills, and structural issues.",
      badge: { text: "Preventive Service", color: "blue" },
      points: [
        { icon: "Shield", title: "Water Protection", description: "Prevents water infiltration that can cause interior damage, mold growth, and structural deterioration." },
        { icon: "Wrench", title: "Energy Efficiency", description: "Proper sealing reduces air leakage, improving energy efficiency and reducing heating and cooling costs." },
        { icon: "Droplets", title: "Building Longevity", description: "Extends the life of your building envelope by protecting against weather, moisture, and environmental damage." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Failed Sealants", description: "Cracked, shrunken, or missing sealants that no longer provide protection against water and air infiltration." },
      { icon: "Droplets", title: "Water Leakage", description: "Water penetration through joints and gaps causing interior damage, mold, and structural issues." },
      { icon: "Ruler", title: "Energy Loss", description: "Air leakage through unsealed joints leading to increased energy costs and reduced comfort." },
      { icon: "Shield", title: "Improper Application", description: "Incorrect sealant selection or application techniques that fail prematurely or don't provide adequate protection." },
      { icon: "FileCheck", title: "Joint Preparation Issues", description: "Inadequate surface preparation leading to poor adhesion and premature sealant failure." },
      { icon: "Wrench", title: "Material Incompatibility", description: "Using incompatible sealants that don't work with adjacent materials or environmental conditions." }
    ],
    benefits: [
      { title: "Premium Materials", description: "We use only high-quality, weather-resistant sealants designed for long-lasting performance in your specific climate." },
      { title: "Expert Application", description: "Proper surface preparation and application techniques ensure maximum adhesion and longevity." },
      { title: "Comprehensive Inspection", description: "Thorough assessment of all joints and gaps to identify areas requiring attention." },
      { title: "Energy Savings", description: "Proper sealing reduces air leakage, significantly improving energy efficiency and reducing utility costs." },
      { title: "Long-Term Protection", description: "Quality materials and expert application provide years of protection against water and air infiltration." }
    ],
    faqs: [
      { question: "How often should sealants be replaced?", answer: "Most quality sealants last 10-20 years, but this varies based on material, exposure, and climate. We inspect and recommend replacement when signs of failure appear." },
      { question: "What types of sealants do you use?", answer: "We select sealants based on your specific needs, including silicone, polyurethane, and hybrid formulations. Material selection depends on joint type, movement, and environmental conditions." },
      { question: "Can you seal during winter?", answer: "Yes, we use cold-weather sealants and application techniques that allow work in various weather conditions, though optimal conditions provide best results." },
      { question: "How much does caulking and sealant application cost?", answer: "Costs depend on the number of joints, accessibility, and materials needed. We provide detailed quotes after assessing your building's specific requirements." },
      { question: "Will sealing improve my energy bills?", answer: "Yes, proper sealing significantly reduces air leakage, which can lower heating and cooling costs by 10-20% or more depending on current leakage." },
      { question: "How long does the application process take?", answer: "Timeline varies based on building size and number of joints. Small buildings may take 1-2 days, while larger structures may require several days to a week." }
    ]
  },
  "architectural-coating-painting": {
    whyItMatters: {
      title: "Why Architectural Coating & Painting Matters",
      description: "Quality architectural coating and painting not only enhances your building's appearance but also provides essential protection against weather, UV damage, and deterioration. Proper coating extends the life of your building envelope and reduces long-term maintenance costs.",
      badge: { text: "Protective Service", color: "amber" },
      points: [
        { icon: "Shield", title: "Weather Protection", description: "High-quality coatings protect building materials from rain, sun, wind, and temperature extremes that cause deterioration." },
        { icon: "Wrench", title: "Extended Lifespan", description: "Proper coating significantly extends the life of building materials, reducing the need for costly replacements." },
        { icon: "Droplets", title: "Aesthetic Enhancement", description: "Fresh, professional coating improves curb appeal and property value while maintaining or enhancing your building's appearance." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Peeling & Flaking", description: "Paint failure due to poor surface preparation, moisture issues, or incompatible materials requiring complete removal and reapplication." },
      { icon: "Droplets", title: "Fading & Discoloration", description: "UV damage and weathering causing color loss and uneven appearance that detracts from building aesthetics." },
      { icon: "Ruler", title: "Surface Deterioration", description: "Unprotected surfaces deteriorating due to weather exposure, requiring repair before coating application." },
      { icon: "Shield", title: "Moisture Issues", description: "Water infiltration behind coatings causing bubbling, peeling, and accelerated deterioration of underlying materials." },
      { icon: "FileCheck", title: "Color Matching", description: "Difficulty matching existing colors or achieving desired aesthetic results with standard paint formulations." },
      { icon: "Wrench", title: "Inadequate Coverage", description: "Thin or incomplete coating application that fails to provide adequate protection and requires premature reapplication." }
    ],
    benefits: [
      { title: "Premium Coatings", description: "We use high-quality, weather-resistant coatings designed for durability and long-lasting protection in your specific climate." },
      { title: "Expert Surface Preparation", description: "Thorough cleaning, repair, and priming ensure optimal adhesion and long-lasting results." },
      { title: "Color Matching Expertise", description: "Our team specializes in matching existing colors and creating custom blends to achieve your desired aesthetic." },
      { title: "Multi-Coat Systems", description: "Proper primer and multiple finish coats provide maximum protection and durability." },
      { title: "UV & Weather Resistance", description: "Coatings formulated to resist fading, chalking, and deterioration from sun and weather exposure." }
    ],
    faqs: [
      { question: "How long does a paint job last?", answer: "Quality architectural coatings typically last 7-15 years depending on material, exposure, climate, and maintenance. We use premium materials designed for longevity." },
      { question: "Do you match existing colors?", answer: "Yes, we specialize in color matching and can create custom blends to match your existing building colors or achieve new aesthetic goals." },
      { question: "What preparation is required?", answer: "We handle all preparation including cleaning, scraping, sanding, repairs, and priming. Proper preparation is essential for long-lasting results." },
      { question: "Can you paint in different weather conditions?", answer: "We schedule work during optimal weather conditions for best results. Some coatings require specific temperature and humidity ranges for proper application." },
      { question: "How much does architectural coating cost?", answer: "Costs vary based on surface area, preparation needed, number of coats, materials, and accessibility. We provide detailed quotes after assessment." },
      { question: "Will you protect surrounding areas?", answer: "Yes, we take comprehensive measures to protect landscaping, windows, doors, and other areas from paint and overspray during application." }
    ]
  },
  "underground-garage-structure-repairs": {
    whyItMatters: {
      title: "Why Underground Garage Repairs Matter",
      description: "Underground parking structures face unique challenges including water infiltration, vehicle traffic, and limited ventilation. Structural deterioration can compromise safety, reduce property value, and lead to costly emergency repairs if not addressed promptly.",
      badge: { text: "Critical Service", color: "red" },
      points: [
        { icon: "Shield", title: "Safety & Liability", description: "Ensures structural integrity and safety for vehicles and pedestrians, reducing liability and preventing accidents." },
        { icon: "Wrench", title: "Prevent Major Failures", description: "Early intervention prevents minor issues from becoming major structural failures requiring extensive and costly repairs." },
        { icon: "Droplets", title: "Water Management", description: "Proper waterproofing and drainage prevent water damage that can compromise structural elements and create hazardous conditions." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Concrete Deterioration", description: "Spalling, cracking, and degradation of concrete slabs and structural elements due to water, salt, and traffic wear." },
      { icon: "Droplets", title: "Water Infiltration", description: "Water penetration through cracks, joints, and deteriorated areas causing damage and creating hazardous conditions." },
      { icon: "Ruler", title: "Structural Cracking", description: "Cracks in slabs, columns, and beams indicating structural stress or deterioration requiring assessment and repair." },
      { icon: "Shield", title: "Expansion Joint Failure", description: "Failed or deteriorated expansion joints allowing water infiltration and failing to accommodate thermal movement." },
      { icon: "FileCheck", title: "Drainage Issues", description: "Inadequate or blocked drainage systems leading to water pooling, accelerated deterioration, and safety hazards." },
      { icon: "Wrench", title: "Reinforcement Corrosion", description: "Corroding rebar and structural reinforcement compromising load-bearing capacity and requiring immediate attention." }
    ],
    benefits: [
      { title: "Structural Engineering Expertise", description: "Comprehensive assessment by certified engineers to identify all structural issues and develop appropriate repair strategies." },
      { title: "Specialized Techniques", description: "We use techniques specifically designed for underground structures, including low-odor materials and efficient access methods." },
      { title: "Minimal Disruption", description: "Our processes minimize disruption to parking operations while ensuring thorough and complete repairs." },
      { title: "Comprehensive Waterproofing", description: "Complete waterproofing systems prevent future water infiltration and protect structural integrity." },
      { title: "Long-Term Solutions", description: "Repairs designed for durability in the challenging underground environment, reducing need for frequent maintenance." }
    ],
    faqs: [
      { question: "How long do garage repairs take?", answer: "Timeline varies significantly based on scope. Minor repairs may take days, while comprehensive structural repairs can take weeks to months. We work efficiently to minimize disruption." },
      { question: "Will I need to close the garage?", answer: "We typically work in phases to maintain parking availability. Some areas may be temporarily closed, but we coordinate to minimize impact on parking operations." },
      { question: "What causes underground garage deterioration?", answer: "Common causes include water infiltration, salt exposure from vehicles, poor drainage, lack of maintenance, traffic wear, and age-related deterioration." },
      { question: "How much do garage repairs cost?", answer: "Costs vary widely based on extent of damage, structural issues, waterproofing needs, and accessibility. We provide detailed quotes after comprehensive engineering assessment." },
      { question: "Do you provide warranties?", answer: "Yes, we provide comprehensive warranties on all repair work, typically ranging from 5-10 years depending on the scope and type of repairs performed." },
      { question: "Can you work around vehicle traffic?", answer: "Yes, we coordinate work schedules and use protective measures to work safely around vehicle traffic while maintaining parking availability where possible." }
    ]
  },
  "roof-replacement-repair": {
    whyItMatters: {
      title: "Why Roof Replacement & Repair Matters",
      description: "Your roof is your building's primary defense against the elements. A failing roof can lead to extensive water damage, energy loss, and costly interior repairs. Proper maintenance and timely replacement protect your entire building investment.",
      badge: { text: "Essential Service", color: "orange" },
      points: [
        { icon: "Shield", title: "Water Protection", description: "Prevents water infiltration that can cause extensive interior damage, mold growth, and structural deterioration." },
        { icon: "Wrench", title: "Energy Efficiency", description: "Proper insulation and ventilation reduce heating and cooling costs while improving building comfort." },
        { icon: "Droplets", title: "Property Value", description: "A well-maintained roof protects your investment and maintains or increases property value." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Leaks & Water Damage", description: "Water penetration through damaged roofing materials causing interior damage, mold, and structural issues." },
      { icon: "Droplets", title: "Material Deterioration", description: "Aging, cracked, or missing shingles, tiles, or membrane materials requiring repair or replacement." },
      { icon: "Ruler", title: "Poor Ventilation", description: "Inadequate attic or roof ventilation leading to moisture buildup, energy loss, and premature material failure." },
      { icon: "Shield", title: "Storm Damage", description: "Wind, hail, or debris damage requiring immediate repair to prevent further water infiltration." },
      { icon: "FileCheck", title: "Improper Installation", description: "Previous installation issues causing premature failure, leaks, or inadequate protection." },
      { icon: "Wrench", title: "Flashing Problems", description: "Damaged or improperly installed flashing around penetrations, edges, and transitions allowing water entry." }
    ],
    benefits: [
      { title: "All Roofing Materials", description: "Expert installation and repair of all roofing types including asphalt, metal, tile, flat roofs, and specialty materials." },
      { title: "Comprehensive Inspection", description: "Thorough assessment of roofing system, including structure, ventilation, and all components to identify all issues." },
      { title: "Proper Ventilation", description: "Ensuring adequate ventilation to prevent moisture buildup and extend roof life while improving energy efficiency." },
      { title: "Quality Installation", description: "Expert installation techniques and premium materials ensure long-lasting protection and performance." },
      { title: "Warranty Protection", description: "Comprehensive warranties on materials and workmanship provide peace of mind for years to come." }
    ],
    faqs: [
      { question: "How long does a roof replacement take?", answer: "Timeline varies by roof size and complexity. Typical residential roofs take 1-3 days, while larger commercial roofs may take 1-2 weeks. Weather can affect scheduling." },
      { question: "How do I know if I need a repair or replacement?", answer: "Our comprehensive inspection assesses roof condition, age, and extent of damage. We recommend repair when possible, replacement when more cost-effective long-term." },
      { question: "What roofing materials do you work with?", answer: "We work with all roofing materials including asphalt shingles, metal, tile, slate, flat roof systems, and specialty materials. We recommend based on your needs and budget." },
      { question: "Do you handle insurance claims?", answer: "Yes, we work with insurance companies and can help document damage, provide estimates, and coordinate repairs covered by insurance claims." },
      { question: "How much does roof replacement cost?", answer: "Costs vary significantly based on roof size, pitch, materials, accessibility, and removal requirements. We provide detailed quotes after inspection." },
      { question: "What warranty do you provide?", answer: "We provide warranties on both materials and workmanship, typically ranging from 10-25 years depending on materials and installation type." }
    ]
  },
  "stucco-installation-repair": {
    whyItMatters: {
      title: "Why Stucco Installation & Repair Matters",
      description: "Stucco provides excellent durability and weather resistance when properly installed and maintained. However, cracks, water damage, and improper installation can lead to costly repairs and interior damage. Proper stucco work protects your building and maintains its aesthetic appeal.",
      badge: { text: "Protective Service", color: "amber" },
      points: [
        { icon: "Shield", title: "Weather Resistance", description: "Proper stucco provides excellent protection against weather, moisture, and temperature extremes." },
        { icon: "Wrench", title: "Durability", description: "Quality stucco installation can last decades with minimal maintenance when properly applied and maintained." },
        { icon: "Droplets", title: "Aesthetic Appeal", description: "Stucco offers versatile textures and colors that enhance your building's appearance while providing protection." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Cracking", description: "Hairline cracks, stress cracks, or structural cracks in stucco requiring repair to prevent water infiltration." },
      { icon: "Droplets", title: "Water Damage", description: "Water penetration behind stucco causing damage to underlying materials, insulation, and interior spaces." },
      { icon: "Ruler", title: "Stucco Failure", description: "Delamination, bulging, or detachment of stucco from substrate indicating installation or moisture issues." },
      { icon: "Shield", title: "Color & Texture Matching", description: "Difficulty matching existing stucco color and texture for seamless repairs and additions." },
      { icon: "FileCheck", title: "Improper Installation", description: "Previous installation issues causing premature failure, cracking, or inadequate protection." },
      { icon: "Wrench", title: "Moisture Management", description: "Inadequate moisture barriers or drainage causing water buildup and stucco deterioration." }
    ],
    benefits: [
      { title: "Expert Application", description: "Proper multi-coat application techniques ensure durable, long-lasting stucco that performs as designed." },
      { title: "Color & Texture Matching", description: "Our team specializes in matching existing stucco colors and textures for seamless repairs and additions." },
      { title: "Moisture Management", description: "Proper moisture barriers and drainage systems prevent water damage behind stucco." },
      { title: "Comprehensive Repair", description: "We address underlying issues, not just surface problems, ensuring long-term solutions." },
      { title: "Quality Materials", description: "Premium stucco materials and proper mix ratios ensure durability and performance." }
    ],
    faqs: [
      { question: "How long does stucco last?", answer: "Quality stucco installation can last 50+ years with proper maintenance. Repairs may be needed for cracks or damage, but the base system is very durable." },
      { question: "Can you match my existing stucco?", answer: "Yes, we specialize in color and texture matching. Our team can analyze existing stucco and create perfect matches for repairs and additions." },
      { question: "What causes stucco to crack?", answer: "Common causes include settling, thermal expansion, structural movement, improper installation, or substrate issues. We identify and address root causes." },
      { question: "How much does stucco repair cost?", answer: "Costs vary based on extent of damage, accessibility, color matching needs, and underlying issues. Small repairs may be affordable, while extensive damage requires more investment." },
      { question: "Do you install new stucco?", answer: "Yes, we provide complete stucco installation services for new construction, additions, and complete re-stuccoing of existing buildings." },
      { question: "How long does stucco installation take?", answer: "Timeline depends on project size. Small repairs may take days, while complete installation can take 1-3 weeks depending on building size and weather conditions." }
    ]
  },
  "siding-installation-repair": {
    whyItMatters: {
      title: "Why Siding Installation & Repair Matters",
      description: "Quality siding protects your building from weather while enhancing its appearance. Damaged or improperly installed siding can lead to water infiltration, energy loss, and costly interior damage. Proper siding installation and maintenance protect your investment.",
      badge: { text: "Protective Service", color: "blue" },
      points: [
        { icon: "Shield", title: "Weather Protection", description: "Proper siding protects building structure from rain, wind, sun, and temperature extremes." },
        { icon: "Wrench", title: "Energy Efficiency", description: "Quality siding with proper insulation reduces energy costs and improves building comfort." },
        { icon: "Droplets", title: "Curb Appeal", description: "Well-maintained siding enhances property value and creates a positive first impression." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Damaged Siding", description: "Cracked, warped, or missing siding panels allowing water infiltration and reducing protection." },
      { icon: "Droplets", title: "Water Infiltration", description: "Water penetration behind siding causing damage to sheathing, insulation, and interior spaces." },
      { icon: "Ruler", title: "Improper Installation", description: "Previous installation issues causing gaps, misalignment, or inadequate protection requiring correction." },
      { icon: "Shield", title: "Material Deterioration", description: "Aging, fading, or deteriorating siding materials requiring repair or replacement." },
      { icon: "FileCheck", title: "Insulation Issues", description: "Missing or inadequate insulation behind siding reducing energy efficiency and comfort." },
      { icon: "Wrench", title: "Moisture Problems", description: "Moisture buildup behind siding due to inadequate ventilation or water barriers causing damage." }
    ],
    benefits: [
      { title: "All Siding Materials", description: "Expert installation and repair of vinyl, fiber cement, wood, metal, and composite siding materials." },
      { title: "Proper Installation", description: "Correct installation techniques ensure optimal performance, protection, and longevity." },
      { title: "Insulation Integration", description: "Proper integration of insulation systems maximizes energy efficiency and comfort." },
      { title: "Color Matching", description: "We match existing siding colors and styles for seamless repairs and additions." },
      { title: "Long-Lasting Results", description: "Quality materials and expert installation provide years of protection and aesthetic appeal." }
    ],
    faqs: [
      { question: "How long does siding last?", answer: "Lifespan varies by material. Quality vinyl can last 20-40 years, fiber cement 50+ years, and wood 20-40 years with proper maintenance. We recommend based on your needs." },
      { question: "Can you match my existing siding?", answer: "Yes, we can match existing siding colors, styles, and materials for seamless repairs. We may need samples for exact matching." },
      { question: "What siding materials do you recommend?", answer: "Recommendations depend on your budget, climate, maintenance preferences, and aesthetic goals. We discuss options and help you choose the best fit." },
      { question: "How much does siding replacement cost?", answer: "Costs vary significantly based on material choice, building size, accessibility, and preparation needed. We provide detailed quotes after assessment." },
      { question: "Do you install insulation with siding?", answer: "Yes, we can install or upgrade insulation during siding installation to improve energy efficiency and comfort." },
      { question: "How long does siding installation take?", answer: "Timeline depends on building size and material. Typical residential installations take 1-2 weeks, while larger buildings may take longer." }
    ]
  },
  "windows-installations": {
    whyItMatters: {
      title: "Why Professional Window Installation Matters",
      description: "Proper window installation is crucial for energy efficiency, comfort, and building protection. Poorly installed windows can lead to drafts, water leaks, energy loss, and costly damage. Professional installation ensures optimal performance and longevity.",
      badge: { text: "Energy Service", color: "cyan" },
      points: [
        { icon: "Shield", title: "Energy Efficiency", description: "Proper installation ensures windows perform as designed, significantly reducing heating and cooling costs." },
        { icon: "Wrench", title: "Water Protection", description: "Expert installation prevents water infiltration that can cause interior damage and structural issues." },
        { icon: "Droplets", title: "Comfort & Value", description: "Quality windows improve comfort, reduce noise, and increase property value while reducing energy costs." }
      ]
    },
    commonProblems: [
      { icon: "AlertTriangle", title: "Air Leakage", description: "Gaps and poor sealing around windows causing drafts, energy loss, and increased utility costs." },
      { icon: "Droplets", title: "Water Leaks", description: "Water infiltration around windows due to improper installation or sealing causing interior damage." },
      { icon: "Ruler", title: "Condensation Issues", description: "Excessive condensation indicating poor installation, inadequate insulation, or window performance problems." },
      { icon: "Shield", title: "Operational Problems", description: "Windows that don't open, close, or lock properly due to installation or alignment issues." },
      { icon: "FileCheck", title: "Energy Loss", description: "Inefficient windows or poor installation leading to high energy bills and reduced comfort." },
      { icon: "Wrench", title: "Draft Problems", description: "Air infiltration through gaps, poor sealing, or inadequate weatherstripping reducing efficiency." }
    ],
    benefits: [
      { title: "Energy-Efficient Windows", description: "We install high-performance windows designed to reduce energy costs and improve comfort." },
      { title: "Expert Installation", description: "Proper installation techniques ensure optimal performance, weatherproofing, and longevity." },
      { title: "Custom Sizing", description: "We can provide custom-sized windows for unique openings or architectural requirements." },
      { title: "Comprehensive Sealing", description: "Proper flashing, sealing, and weatherproofing prevent water and air infiltration." },
      { title: "Warranty Protection", description: "Comprehensive warranties on both windows and installation provide peace of mind." }
    ],
    faqs: [
      { question: "How much can I save on energy costs?", answer: "Energy savings vary, but quality window replacement can reduce heating and cooling costs by 15-30% depending on current windows and climate." },
      { question: "How long do windows last?", answer: "Quality windows typically last 20-30 years or more. Lifespan depends on material, climate, and maintenance. We install windows designed for longevity." },
      { question: "Do you install all window types?", answer: "Yes, we install all window types including double-hung, casement, sliding, fixed, and specialty windows in various materials." },
      { question: "How much does window replacement cost?", answer: "Costs vary based on window type, size, material, quantity, and installation complexity. We provide detailed quotes after assessment." },
      { question: "How long does installation take?", answer: "Typical residential window replacement takes 1-3 days depending on number of windows. We work efficiently to minimize disruption." },
      { question: "Will new windows reduce noise?", answer: "Yes, quality windows with proper installation significantly reduce exterior noise, improving interior comfort and quiet." }
    ]
  }
};
