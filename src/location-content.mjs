// Canada-wide installation and repair coverage confirmed by the owner on 2026-09-12.
export const canadianRegions = ['British Columbia','Alberta','Saskatchewan','Manitoba','Ontario','Québec','New Brunswick','Nova Scotia','Prince Edward Island','Newfoundland and Labrador','Yukon','Northwest Territories','Nunavut'];

const directorySummaries = {
  toronto:'Tenant improvements, common entrances and occupied-building coordination.',
  vancouver:'Glazed entrances, vestibule approaches and touchless control upgrades.',
  calgary:'Fit-out door packages and coordinated multi-property installation.',
  edmonton:'Shared-building entrances, interior routes and access interfaces.',
  ottawa:'Public-hours operation, secured entry and facility access planning.',
  montreal:'Borough renovation context and clear washroom control functions.',
  winnipeg:'Fault histories, operator assessments and repair-versus-upgrade scope.',
  mississauga:'Multi-entrance properties and consistent records for portfolios.',
  hamilton:'Existing frames, retained finishes and accessible-route improvements.',
  'quebec-city':'Entrance design details, privacy controls and commercial alterations.',
  victoria:'Visitor approaches and work planning for occupied properties.',
  halifax:'Site-arrival details and door work within a commercial renovation.',
  saskatoon:'Phased opening upgrades and practical facilities handover.',
  regina:'Tenant changes, existing operators and coordinated fit-out decisions.'
};

export const locationProfiles = [
  {
    slug:'toronto', city:'Toronto', province:'Ontario',
    description:'Touchless door installation and automatic door repair in Toronto. Plan office entrances, tenant upgrades and accessible washroom controls with WaveToOpen.',
    intro:'WaveToOpen installs and services touchless door systems in Toronto. Bring us an office entrance, tenant improvement or accessible washroom project, with the opening and its day-to-day use at the centre of the scope.',
    sections:[
      {heading:'Coordinate the tenant and building scopes',paragraphs:['For a leased Toronto property, establish which doors belong to the tenant project and which are managed by the landlord. A suite entrance, shared lobby and common washroom can have different approval contacts even when they are in the same building.','List the property manager and the person responsible for security or electrical changes. Agree who supplies power, authorizes work on common areas and receives the completed equipment records. That separation makes competing installation proposals easier to compare.']},
      {heading:'Keep an occupied entrance usable during the work',paragraphs:['Describe the busiest arrival periods and any visitor check-in process. If more than one doorway serves the property, identify which opening is being upgraded and how occupants will be directed while it is unavailable.','An existing operator may be suitable for a wave-sensor retrofit after its condition and interfaces are checked. Where powered operation is new, include the frame, mounting space, controls and surrounding access route in the assessment.']}
    ],
    services:['wave-to-open-installation','touchless-retrofits','universal-washrooms','automatic-door-repair'], guides:['touchless-door-opener-cost','push-button-to-touchless-retrofit'],
    brief:{heading:'Name the opening, not just the building',intro:'A Toronto assessment starts faster when the enquiry identifies the actual doorway and its decision-makers.',items:['Street address, floor and suite','Tenant and property-management contacts','Operator label and both approaches','Available access or shutdown windows'],qualification:'The installation schedule accounts for the agreed door scope and the building’s access arrangements.'},
    reference:{heading:'Toronto renovation planning',context:'If the doorway work is part of an interior renovation, Toronto’s non-residential alterations guide helps the project team identify the application documents. Have the designer confirm how the guide applies to the full renovation.',label:'Toronto: non-residential interior alterations',url:'https://www.toronto.ca/services-payments/building-construction/building-permit/before-you-apply-for-a-building-permit/building-permit-application-guides/guides-for-other-buildings/interior-alterations-non-residential/'},
    related:['mississauga','hamilton','ottawa']
  },
  {
    slug:'vancouver', city:'Vancouver', province:'British Columbia',
    description:'Automatic door installation, touchless retrofits and repair in Vancouver. Assess commercial entrances, control placement and existing door equipment.',
    intro:'Vancouver businesses can arrange wave-to-open installation, operator upgrades and automatic door repairs through WaveToOpen. We connect the desired hands-free interaction with the condition of the complete entrance.',
    sections:[
      {heading:'Review the approach as well as the glazed doorway',paragraphs:['A control placed beside a glazed entrance needs to be easy to find from the path people actually use. Include photographs showing the approach, wall space and the relationship between the outer and inner doors of a vestibule.','If rain reaches the controls or mats interfere with movement, describe those observations in the enquiry. They help the project team review equipment exposure and the surrounding entrance conditions without assuming that every problem comes from the sensor.']},
      {heading:'Separate an activation upgrade from entrance replacement',paragraphs:['For a working powered door, begin by identifying the operator model and existing activation devices. Replacing a wall plate with a wave sensor is a different scope from altering glazing, changing the frame or introducing a new operator.','When the opening is being replaced as part of a Vancouver renovation, coordinate the door supplier, electrical work and finish details before the installation date. Retained equipment should be listed alongside new components so responsibilities remain clear.']}
    ],
    services:['push-to-wave-upgrades','automatic-door-operators','accessible-door-openers','automatic-door-repair'], guides:['sensor-vs-automatic-door-operator','touchless-door-opener-cost'],
    brief:{heading:'Show how visitors reach the control',intro:'Send a small set of views that explains the entrance from outside to inside.',items:['Exterior approach and shelter','Inner and outer vestibule doors','Visible equipment identification','Any changes to glazing or wall finishes'],qualification:'Equipment selection follows the actual mounting, exposure and operating conditions at your Vancouver property.'},
    reference:{heading:'Vancouver building information',context:'The City of Vancouver’s building and renovating hub connects to permit, inspection and building-plan resources. Use the appropriate project pathway when door work is included in a broader commercial renovation.',label:'Vancouver: building and renovating',url:'https://vancouver.ca/home-property-development/building-and-renovating.aspx'},
    related:['victoria','calgary']
  },
  {
    slug:'calgary', city:'Calgary', province:'Alberta',
    description:'Wave-to-open installation and commercial door repair in Calgary. Coordinate tenant improvements, operator installation and touchless entrance upgrades.',
    intro:'WaveToOpen supports Calgary commercial door projects from new powered openings to touchless upgrades and repairs. A clear fit-out scope brings the operator, controls and building work into the same conversation.',
    sections:[
      {heading:'Bring door automation into the tenant fit-out brief',paragraphs:['For a new commercial fit-out, identify which entrances will be public, which will serve staff and which will form part of an accessible route. Those uses affect the control arrangement and the parties who need to approve it.','Send the door schedule or a marked floor plan if one is available. Confirm whether the general contractor is supplying frames, electrical rough-in or security interfaces, so the door package is priced against the same assumptions as the rest of the project.']},
      {heading:'Use a pilot when upgrading several openings',paragraphs:['A Calgary portfolio can contain working operators, manual doors and washroom privacy systems in the same programme. Group comparable openings before choosing equipment; the most visible entrance is not necessarily representative of the others.','A pilot can establish a useful control layout and handover record. Document the exceptions, including different lock interfaces or door dimensions, before extending the approach to the remaining properties.']}
    ],
    services:['automatic-door-operators','wave-to-open-installation','multi-location-rollouts','access-control-integration'], guides:['touchless-door-opener-cost','sensor-vs-automatic-door-operator'],
    brief:{heading:'Give the fit-out team a shared starting point',intro:'Use the Calgary enquiry to connect the door package with the current construction programme.',items:['Door numbers from the drawings','Public and staff access requirements','Electrical and security scope owners','Fit-out milestones and pilot-site preference'],qualification:'A final work sequence is agreed around procurement, site readiness and the equipment selected for each opening.'},
    reference:{heading:'Calgary alterations guidance',context:'Calgary’s guide to changes in existing buildings covers commercial alterations and the related planning, building and trade-permit questions. Review the whole project with the responsible designer before dividing it into separate trade packages.',label:'Calgary: changes to existing buildings',url:'https://www.calgary.ca/development/commercial/alterations.html'},
    related:['edmonton','vancouver','regina']
  },
  {
    slug:'edmonton', city:'Edmonton', province:'Alberta',
    description:'Touchless entrance upgrades, automatic operators and door service in Edmonton. Plan shared-building access, privacy controls and repair work.',
    intro:'WaveToOpen provides Edmonton properties with automatic door installation, touchless activation and repair services. Shared entrances and interior routes are assessed around the people, equipment and access rules they serve.',
    sections:[
      {heading:'Distinguish common entrances from individual premises',paragraphs:['For an Edmonton building with several occupants, map the opening to the space it serves. A common entrance may need public access during the day while a tenant doorway uses a separate security controller.','Include the current hours of operation and the person who owns each access system. The work brief should explain the intended relationship between a wave request, permission to enter and the powered movement of the door.']},
      {heading:'Include interior routes in the opening inventory',paragraphs:['An entrance upgrade may reveal another manual or unreliable door farther along the route. Record that second opening separately, including its use, available wall space and whether a powered operator already exists.','For a washroom, add privacy feedback and assistance requirements to the inventory. Those functions need their own decisions; they should not be inferred from the controls selected for the building entrance.']}
    ],
    services:['access-control-integration','accessible-door-openers','universal-washrooms','automatic-door-repair'], guides:['universal-washroom-door-controls','automatic-door-not-opening'],
    brief:{heading:'Map the route through the building',intro:'Tell us which door creates difficulty and what lies before and after it.',items:['A simple route or floor-plan reference','Common-area and tenant contacts','Current access hours and control models','Separate notes for washroom functions'],qualification:'Door and security responsibilities are coordinated with the facility team before Edmonton installation work is scheduled.'},
    reference:{heading:'Edmonton changes to existing buildings',context:'Edmonton publishes a project pathway for changes to commercial, institutional and mixed-use buildings. Its application guidance can help your project team identify which parts of a proposed renovation need to be considered together.',label:'Edmonton: existing building and site changes',url:'https://www.edmonton.ca/business_economy/changes-to-existing-buildings'},
    related:['calgary','saskatoon','winnipeg']
  },
  {
    slug:'ottawa', city:'Ottawa', province:'Ontario',
    description:'Automatic door installation and touchless door repair in Ottawa. Plan public access, secured entrances and accessible washroom upgrades.',
    intro:'WaveToOpen serves Ottawa offices, managed properties and public-facing facilities with touchless door installation and repair. We help scope powered access around the opening’s public use and security requirements.',
    sections:[
      {heading:'Describe public hours and controlled entry separately',paragraphs:['An Ottawa office or institutional project may use the same entrance for visitors during the day and credentialed users after hours. Describe both operating modes rather than asking for an unrestricted opening signal.','Have the security contact identify the reader and controller without sharing codes or credentials. The door scope can then address the interfaces between authorized entry, lock release and operator activation.']},
      {heading:'Plan site access before the installation visit',paragraphs:['If contractors must check in, receive an escort or work within a defined access window, include those arrangements in the project brief. Also identify who can authorize temporary changes to the entrance during the work.','For accessible washroom upgrades, establish a separate point of contact for privacy and assistance functions. Staff handover should cover the agreed controls and response procedure as well as the equipment list.']}
    ],
    services:['access-control-integration','locking-integration','universal-washrooms','automatic-door-repair'], guides:['sensor-vs-automatic-door-operator','universal-washroom-door-controls'],
    brief:{heading:'Connect facilities and security early',intro:'An Ottawa project brief should name the people who can resolve interface and site-access questions.',items:['Visitor and after-hours operating modes','Facilities and access-control contacts','Escort or check-in arrangements','Washroom privacy and assistance objectives'],qualification:'Attendance and completion dates reflect the agreed work, equipment lead times and property access requirements.'},
    reference:{heading:'Ottawa project requirements',context:'Ottawa’s building and renovating resources provide the starting point for permit applications and Building Code Services information. Include any wider renovation scope when asking the responsible project professional about the door changes.',label:'Ottawa: building and renovating',url:'https://ottawa.ca/en/planning-development-and-construction/building-and-renovating'},
    related:['montreal','toronto']
  },
  {
    slug:'montreal', city:'Montréal', province:'Québec',
    description:'Touchless door installation and automatic door repairs in Montréal. Coordinate retrofit equipment, washroom controls and commercial renovation details.',
    intro:'WaveToOpen installs and repairs automatic and touchless door systems for Montréal commercial properties. An effective retrofit brief identifies the existing opening, the intended controls and the building’s renovation context.',
    sections:[
      {heading:'Include the borough and the wider renovation',paragraphs:['Provide the Montréal property’s full address and borough when describing the work. If an entrance upgrade is part of an interior renovation, keep the door changes visible in the overall drawings and contractor scope.','Record whether the opening is shared with other occupants, whether the frame is being retained and whether electrical or security work is already planned. This helps distinguish the door equipment package from the surrounding construction.']},
      {heading:'Make the control language part of the brief',paragraphs:['State the wording, symbols and user instructions the facility needs on its controls and indicators. For a shared washroom, the person approaching and the occupant inside may need different information about the room’s state.','Have the project team approve the selected labels and operating sequence before components are ordered. The equipment assessment should also establish how privacy, exit operation and any assistance request connect to the existing door.']}
    ],
    services:['touchless-retrofits','wave-to-lock','universal-washrooms','automatic-door-repair'], guides:['push-button-to-touchless-retrofit','universal-washroom-door-controls'],
    brief:{heading:'Describe the room and its users',intro:'For a Montréal retrofit, combine equipment information with the practical details of the space.',items:['Borough and complete property address','Retained operator and lock models','Required control wording and symbols','Renovation drawings or contractor contact'],qualification:'The selected controls and installation scope are agreed for the actual Montréal opening and facility requirements.'},
    reference:{heading:'Montréal borough renovation information',context:'Montréal’s interior-renovation service lets you select the borough for information relevant to the property. Use that location-specific guidance with the project team when the door work accompanies other changes inside the building.',label:'Montréal: renovating a building interior',url:'https://montreal.ca/en/how-to/renovate-interior-building'},
    related:['quebec-city','ottawa','toronto']
  },
  {
    slug:'winnipeg', city:'Winnipeg', province:'Manitoba',
    description:'Automatic door repair and wave-to-open upgrades in Winnipeg. Assess unreliable entrances, existing operators and commercial accessibility projects.',
    intro:'Winnipeg building teams can use WaveToOpen for automatic door repairs, touchless retrofits and powered-access projects. We start with the opening’s present behaviour before deciding what should be repaired or replaced.',
    sections:[
      {heading:'Record when an unreliable entrance changes behaviour',paragraphs:['For a Winnipeg repair request, distinguish a door that ignores the control from one that starts moving but cannot complete its cycle. Note which side is affected and whether the problem is constant or intermittent.','If staff have observed a relationship with weather, time of day or a change in building operation, include that history. Observations are useful to the service assessment; they do not establish which component has failed.']},
      {heading:'Keep repairs and modernization visible in the proposal',paragraphs:['A property may want both dependable operation and a more convenient wave control. Ask for the necessary repair and the optional activation upgrade to be identified separately, with the assumptions behind reusing the existing operator.','For several doors, use a numbered list rather than a single description of the building. Equipment age, wiring and hardware condition can differ from one entrance to the next, even when the controls look alike.']}
    ],
    services:['automatic-door-repair','push-to-wave-upgrades','automatic-door-operators','accessible-door-openers'], guides:['automatic-door-not-opening','touchless-door-opener-cost'],
    brief:{heading:'Turn observations into a service brief',intro:'Send the service history that helps distinguish a recurring fault from a new change.',items:['Opening identifier and affected side','Dates and conditions of observed faults','Visible operator identification','Previous service notes, if available'],qualification:'Repair options depend on the findings, supported replacement parts and access to the Winnipeg property.'},
    reference:{heading:'Winnipeg commercial permit resources',context:'Winnipeg’s Permits Online page connects to commercial building and trade-permit services, including alteration resources. If repair work expands into a renovation, use those resources to review the revised scope with the building team.',label:'Winnipeg: permits and commercial alterations',url:'https://www.winnipeg.ca/building-development/permits-applications/permits-online'},
    related:['regina','saskatoon','edmonton']
  },
  {
    slug:'mississauga', city:'Mississauga', province:'Ontario',
    description:'Wave-to-open installation, operator upgrades and automatic door service in Mississauga. Plan entrances for offices, managed properties and commercial sites.',
    intro:'WaveToOpen provides Mississauga properties with touchless door upgrades, new automatic operators and repair services. Clearly identifying each entrance helps turn a large-site enquiry into an actionable installation scope.',
    sections:[
      {heading:'Identify the entrance within the property',paragraphs:['A Mississauga office or commercial site may have a reception entrance, staff entry and doors serving different units. Give the affected opening a name or number and show where it sits relative to parking, reception and the site access point.','Explain whether the project is intended for visitors, employees or both. That distinction helps the team discuss where activation belongs and whether the opening needs to coordinate with an existing access-control system.']},
      {heading:'Standardize a portfolio without losing the exceptions',paragraphs:['When several properties are included, create a row for every doorway with its operator, activation method and desired change. Similar-looking push plates do not establish that the underlying equipment is interchangeable.','Use one agreed record format for the completed work: equipment supplied, retained interfaces and the facility contact receiving handover. Record exceptions before ordering a common package for the whole portfolio.']}
    ],
    services:['wave-to-open-installation','multi-location-rollouts','access-control-integration','automatic-door-repair'], guides:['push-button-to-touchless-retrofit','sensor-vs-automatic-door-operator'],
    brief:{heading:'Make each doorway easy to find',intro:'The Mississauga quote form can carry one opening or a coordinated list of sites.',items:['Building and unit numbers','Reception, staff or public use','Door inventory for multiple sites','Property-manager approval contact'],qualification:'Multi-door work is scheduled against the assessed opening list and the access arrangements for each property.'},
    reference:{heading:'Mississauga building-permit guidance',context:'Mississauga explains when a building permit is required and how other approvals relate to a project. Share the complete proposed work with the designer or building authority when the door upgrade changes more than the activation device.',label:'Mississauga: when a building permit is required',url:'https://www.mississauga.ca/services-and-programs/building-and-renovating/building-permits/when-a-building-permit-is-required/'},
    related:['toronto','hamilton']
  },
  {
    slug:'hamilton', city:'Hamilton', province:'Ontario',
    description:'Touchless door retrofits and automatic operator repairs in Hamilton. Review existing frames, accessible routes and commercial renovation scope.',
    intro:'WaveToOpen helps Hamilton businesses upgrade and repair commercial automatic doors. Existing frames, wall finishes and hardware are reviewed alongside the desired touchless interaction.',
    sections:[
      {heading:'Establish what can remain in the existing opening',paragraphs:['For a Hamilton retrofit, provide a view of the frame, header and wall around each control. Identify whether the door is manual today or already has a powered operator that the project team hopes to retain.','Where original finishes or heritage features are involved, flag them at the start. The project can then address mounting and cable routes as part of the assessed design, before equipment is ordered or surfaces are altered.']},
      {heading:'Connect the doorway to the accessible route',paragraphs:['Powered movement does not resolve every obstacle on the way into a building. Describe steps, thresholds or awkward approaches that the facility team already knows about so the door work can be considered alongside those issues.','For an interior washroom, explain how the person will enter, request privacy and leave. A coordinated project brief gives the designer and door contractor a common set of functions to work from.']}
    ],
    services:['touchless-retrofits','accessible-door-openers','universal-washrooms','automatic-door-repair'], guides:['touchless-door-opener-cost','universal-washroom-door-controls'],
    brief:{heading:'Show the existing construction',intro:'A Hamilton assessment benefits from context around the equipment as well as close-up labels.',items:['Full frame and header photographs','Finishes or features to preserve','Known approach or threshold concerns','Scope of associated renovation work'],qualification:'Retention and mounting decisions follow the assessment of the door, surrounding construction and project requirements.'},
    reference:{heading:'Hamilton small-business renovation planning',context:'Hamilton’s building-permit information for small businesses provides a local starting point when altering commercial premises. Review the planned opening changes as part of the complete renovation and confirm the applicable process with the project team.',label:'Hamilton: building permits for small businesses',url:'https://www.hamilton.ca/build-invest-grow/starting-small-business/permits-inspections/building-permits-small-businesses'},
    related:['mississauga','toronto']
  },
  {
    slug:'quebec-city', city:'Québec City', province:'Québec',
    description:'Automatic door installation and touchless access upgrades in Québec City. Coordinate commercial entrances, washroom privacy and existing building details.',
    intro:'WaveToOpen serves Québec City commercial properties with automatic door installation, wave controls and repair. The scope brings the intended user interaction together with the existing entrance and renovation plans.',
    sections:[
      {heading:'Resolve entrance appearance and operation together',paragraphs:['For a Québec City shop, office or institutional property, state whether the entrance appearance is changing or the work is limited to its operation. Show any façade, frame or finish details that the owner intends to retain.','If the property has specific design or conservation requirements, identify the responsible project contact. Those requirements can influence where controls are mounted and how associated wiring or frame work is approached.']},
      {heading:'Give washroom controls a clear operating brief',paragraphs:['Record how privacy will be requested and what information the occupant and a person outside should receive. Include the preferred wording or symbols for indicators, plus the destination of any assistance request.','A controller package should be selected for those functions and the actual lock and operator. Discuss the proposed sequence with the facility team so handover explains how the room is intended to work in everyday use.']}
    ],
    services:['wave-to-open-installation','wave-to-lock','locking-integration','automatic-door-repair'], guides:['universal-washroom-door-controls','sensor-vs-automatic-door-operator'],
    brief:{heading:'Pair the design intent with the door details',intro:'Use your Québec City enquiry to identify both retained features and the required change in operation.',items:['Entrance views and property address','Any approved renovation drawings','Desired indicator wording and functions','Operator, controller and lock labels'],qualification:'Final equipment and installation details are aligned with the opening and the property’s agreed design requirements.'},
    reference:{heading:'Québec City commercial renovation resources',context:'The city’s commercial-permit page covers renovation and construction work for businesses and institutions. Its resources help the project team locate the permit or authorization information relevant to the property and proposed work.',label:'Québec City: commercial permits (French)',url:'https://www.ville.quebec.qc.ca/gens_affaires/reglements_permis/travaux_commerce_entreprise_institution.aspx'},
    related:['montreal','ottawa']
  },
  {
    slug:'victoria', city:'Victoria', province:'British Columbia',
    description:'Wave-to-open sensors, automatic operators and door repair in Victoria. Plan commercial entries and accessible washroom improvements around daily use.',
    intro:'WaveToOpen installs and services touchless commercial door systems in Victoria. We assess entrances and washroom controls with attention to the approach, the available mounting space and the building’s normal activities.',
    sections:[
      {heading:'Plan the upgrade around a working reception area',paragraphs:['A Victoria property with a reception desk or visitor waiting area needs a clear description of how people reach the door controls. Include furniture, the usual queue position and any cart or mobility-device movement in the approach photographs.','Explain whether staff currently assist with the door and what the upgrade should change. That account helps identify the desired interaction without assuming that a new sensor location alone will solve every access difficulty.']},
      {heading:'Prepare a workable installation window',paragraphs:['Identify the entrance that must remain available and the facility contact who can direct visitors while work takes place. For accommodation, care or other continuously occupied buildings, list the operating constraints that affect access to the opening.','Include any finish repair or electrical work expected alongside the door installation. Agreeing those tasks in advance helps the property plan a coordinated visit and understand what the completed scope includes.']}
    ],
    services:['accessible-door-openers','push-to-wave-upgrades','universal-washrooms','automatic-door-repair'], guides:['push-button-to-touchless-retrofit','touchless-door-opener-cost'],
    brief:{heading:'Explain the everyday arrival',intro:'For a Victoria entrance project, describe the interaction that visitors or staff find difficult today.',items:['Reception and waiting-area layout','Usual approach to each control','Operating hours and access constraints','Associated electrical or finish work'],qualification:'The work plan is developed around the equipment scope and practical access to the occupied Victoria building.'},
    reference:{heading:'Victoria permits and development',context:'Victoria’s permits, development and construction hub links to the city’s building-project resources. Use the relevant pathway when an access upgrade forms part of a renovation or affects other elements of the property.',label:'Victoria: permits, development and construction',url:'https://www.victoria.ca/building-business/permits-development-construction'},
    related:['vancouver']
  },
  {
    slug:'halifax', city:'Halifax', province:'Nova Scotia',
    description:'Touchless door installation and automatic door repairs in Halifax. Prepare building access, equipment details and coordinated commercial project scope.',
    intro:'WaveToOpen provides Halifax commercial properties with hands-free door activation, operator installation and repair. Clear site information helps coordinate the doorway work with the people responsible for the building.',
    sections:[
      {heading:'Make the site and entrance unambiguous',paragraphs:['Provide the complete civic address and community name for a Halifax-area project. If the property has several buildings or entrances, identify where the work is located and where the installation team should report on arrival.','Include practical access details such as loading arrangements, contractor check-in and the person who can open secured areas. These belong in the planning brief alongside the equipment and door count.']},
      {heading:'Coordinate door work with the renovation drawings',paragraphs:['When a powered entrance or washroom upgrade accompanies a commercial renovation, identify the opening on the floor plan and show which adjacent walls or finishes are changing. The door equipment should follow the same layout used by the other trades.','For existing equipment, provide readable model labels and a description of the desired outcome. A repair enquiry should also say when the symptom began and whether it affects activation, movement or closing.']}
    ],
    services:['automatic-door-operators','wave-to-open-installation','universal-washrooms','automatic-door-repair'], guides:['automatic-door-not-opening','touchless-door-opener-cost'],
    brief:{heading:'Combine the equipment and arrival details',intro:'Give the Halifax project team enough information to locate the opening and understand the work.',items:['Civic address and community','Building, entrance or floor identifier','Site contact and contractor arrival process','Door photos and drawing reference'],qualification:'Travel, materials and site-access arrangements are included in planning the agreed Halifax project schedule.'},
    reference:{heading:'Halifax commercial construction guidance',context:'Halifax’s construction-permit guide includes information for renovations to commercial, industrial and institutional buildings. Review its project-document guidance with the designer when door changes are part of a larger scope.',label:'Halifax: commercial construction guide (PDF)',url:'https://cdn.halifax.ca/sites/default/files/documents/home-property/building-renovating/mici-guide-nov-2022-metric.pdf'},
    related:['quebec-city','montreal']
  },
  {
    slug:'saskatoon', city:'Saskatoon', province:'Saskatchewan',
    description:'Automatic door installation and touchless retrofits in Saskatoon. Coordinate phased upgrades, operator equipment and accessible building routes.',
    intro:'WaveToOpen supports Saskatoon commercial and institutional door projects with installation, touchless upgrades and repair. A phased opening list helps facilities plan improvements while keeping track of each door’s needs.',
    sections:[
      {heading:'Phase the work by opening and operational priority',paragraphs:['For a Saskatoon property with several entrances or interior routes, identify the door that causes the greatest day-to-day difficulty. Separate that immediate need from openings that can be upgraded during a later renovation or maintenance window.','Group doors by their existing operator and control arrangement, then note exceptions such as privacy locking or secured entry. The resulting list gives procurement a clearer basis for comparing equipment and installation scope.']},
      {heading:'Make handover useful to the facilities team',paragraphs:['Each completed opening should be identifiable in the equipment record, with the supplied controls and retained interfaces documented. Name the staff contact who will receive the information and explain the door’s intended use.','If the upgrade includes an assistance function, record the destination and facility response procedure as a separate item. A consistent document format helps staff distinguish those functions from ordinary activation or service faults.']}
    ],
    services:['multi-location-rollouts','accessible-door-openers','touchless-retrofits','automatic-door-repair'], guides:['sensor-vs-automatic-door-operator','universal-washroom-door-controls'],
    brief:{heading:'Start with the priority doorway',intro:'Your Saskatoon enquiry can outline an initial phase and the openings planned for later work.',items:['Opening list and priority order','Current operators and activation methods','Separate access or privacy exceptions','Facilities handover contact'],qualification:'Phasing is agreed around the assessed door conditions, equipment availability and the facility’s operating needs.'},
    reference:{heading:'Saskatoon commercial building resources',context:'Saskatoon’s commercial and institutional building-permit programme provides resources for professional consultants and contractors. Use its project guides with the building team when an upgrade is included in a broader alteration.',label:'Saskatoon: commercial and institutional permits',url:'https://www.saskatoon.ca/business-development/building-development-construction/industrial-commercial-institutional-multi-storey-building-permit'},
    related:['regina','edmonton','winnipeg']
  },
  {
    slug:'regina', city:'Regina', province:'Saskatchewan',
    description:'Touchless entrance installation and automatic door service in Regina. Plan tenant improvements, existing operator upgrades and accessible washroom controls.',
    intro:'WaveToOpen serves Regina businesses with wave-to-open installation, automatic operators and door repair. For a tenant improvement or a change in how a space is used, the door brief should reflect the intended operation.',
    sections:[
      {heading:'Describe the new use before selecting the controls',paragraphs:['If a Regina commercial unit is changing occupants or activities, explain who will use each doorway and how the space will operate. A control arrangement retained from the previous business may not match the new reception, staff access or washroom layout.','Provide the current plans and identify any doors being added, removed or altered. Equipment decisions should follow that scope so powered movement, mounting and security interfaces are coordinated with the rest of the fit-out.']},
      {heading:'Compare a retained operator with a new installation',paragraphs:['A working operator can be assessed for reuse, but include its model and the condition of the door and frame. Ask the proposal to identify what remains, what changes and which assumptions require site confirmation.','Where an accessible washroom is involved, include privacy indication and assistance needs in the same brief. Those decisions affect more than the choice between a push plate and a wave sensor.']}
    ],
    services:['automatic-door-operators','push-to-wave-upgrades','universal-washrooms','automatic-door-repair'], guides:['touchless-door-opener-cost','push-button-to-touchless-retrofit'],
    brief:{heading:'Connect the door to the fit-out',intro:'Explain the intended Regina premises and the equipment already installed there.',items:['Current and proposed use of the space','Relevant layout or door schedule','Retained operator and control labels','Tenant fit-out contact and target timing'],qualification:'The final door scope reflects the site assessment and the approved requirements of the wider Regina project.'},
    reference:{heading:'Regina tenant-improvement guidance',context:'Regina publishes guidance for alterations, conversions and tenant improvements, including opportunities to discuss a project before application. Use it when planning how a new commercial use and the proposed door changes fit together.',label:'Regina: alterations and tenant improvements',url:'https://www.regina.ca/bylaws-permits-licences/building-demolition/building-demo-permits/commercial/alterations-conversions-and-tenant-improvements/index.html'},
    related:['saskatoon','winnipeg','calgary']
  }
].map(profile => ({...profile, directorySummary:directorySummaries[profile.slug], modified:'2026-09-12'}));
