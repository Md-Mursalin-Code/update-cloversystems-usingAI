window.DRONES = {

  /* =========================================================
     SHYENA-S16  -  long-endurance surveillance
     ========================================================= */
  shyena: {
    key: 'shyena', name: 'SHYENA-S16', page: 'shyena-s16.html', role: 'Surveillance',
    tagline: 'Heavy-lift surveillance drone — man-portable',
    desc: 'A high-endurance surveillance platform delivering 4K imaging over long periods. At under 16 kg it stays man-portable, while its payload bay carries up to 5 kg of mission equipment.',
    photo: 'images/shyena-s16.jpg',
    chips: ['< 16 kg', '45+ min', '25 km'],
    table: { weight: '< 16 kg', payload: 'Up to 5 kg', endurance: '45+ min', range: '25 km' },
    specs: [['Weight', '< 16 kg'], ['Imaging', '4K High-Res'], ['Payload', 'Up to 5 kg'], ['Endurance', '45+ min'], ['Range', '25 km'], ['Class', 'Man-portable']],
    bars: [['Range', 100], ['Endurance', 90], ['Payload', 100], ['Portability', 60]],
    highlights: ['High-resolution 4K surveillance capability', 'Up to 5 kg payload capacity', '45+ minutes of flight time', 'Man-portable — under 16 kg', '25 km operating range'],

    missionTitle: 'The long-endurance eye in the sky',
    mission: [
      'SHYENA-S16 is the Clover Systems platform for persistent observation. It stays airborne for 45+ minutes and reaches out to 25 km, sending 4K video back to a ground station so commanders can see a wide area in real time and in fine detail.',
      'Its payload bay carries up to 5 kg of mission equipment, so one airframe can be set up for different jobs — extra sensors, a communications relay, or light supplies — without changing the aircraft.',
      'Despite this capability the whole system weighs under 16 kg. A small team can carry it, launch it from a clearing and have it flying within minutes.'
    ],
    does: ['Persistent wide-area surveillance', 'Live 4K video to a ground station', 'Route and area overwatch', 'Carries up to 5 kg of mission equipment', 'Extends communications as a relay'],

    howTitle: 'From backpack to airborne in minutes',
    how: [
      ['Carry & set up', 'The system is man-portable at under 16 kg. A small team unpacks, assembles and runs pre-flight checks at the launch point.'],
      ['Plan the mission', 'The operator sets the route and area of interest on the ground-control station, or flies manually when the situation changes.'],
      ['Launch & transit', 'It lifts off vertically — no runway needed — and flies to the target area, up to 25 km away.'],
      ['Observe & stream', 'The 4K camera sends live video to the ground station. Operators zoom in, track movement and mark points of interest.'],
      ['Return & redeploy', 'It lands at the recovery point. Batteries and payload are swapped, and the next sortie can launch quickly.']
    ],

    areasTitle: 'Where SHYENA-S16 is needed',
    areas: [
      ['🛡️', 'Border & perimeter surveillance', 'Long, remote and difficult borders are costly to patrol on foot. One 45-minute sortie covers a long stretch and shows what is happening in real time.'],
      ['🌊', 'Coastal & maritime watch', 'Bangladesh has a long coastline, river mouths and the Bay of Bengal. The 25 km reach allows monitoring of shoreline, boats and approaches.'],
      ['⛰️', 'Hill & forest terrain', 'Dense forest and steep hills hide activity from the ground and block vehicles. From above, wide areas can be checked quickly and safely.'],
      ['🌀', 'Disaster response', 'After floods and cyclones, roads are cut and maps are out of date. The drone surveys damage, finds stranded people and guides rescue teams.'],
      ['🏗️', 'Critical infrastructure', 'Inspect and watch power lines, bridges, ports, pipelines and large facilities without sending people to dangerous or hard-to-reach spots.'],
      ['🚙', 'Convoy & route overwatch', 'Scout the road ahead and the flanks of a moving column, and warn of obstacles or threats before the convoy reaches them.'],
      ['🔎', 'Search & rescue', 'Cover large search areas fast and, with the right payload, drop light supplies or relay communications to isolated teams.'],
      ['🎪', 'Large events & public safety', 'Give security teams a live overview of crowds, entrances and approach roads during major gatherings.']
    ],

    whyTitle: 'Why this drone is needed',
    why: [
      ['Large areas, few people', 'Territory is wide and personnel are limited. One drone does the observation work of many patrols.'],
      ['Real-time awareness', 'Decisions are only as good as the information behind them. Live 4K video gives commanders a current, detailed picture instead of old reports.'],
      ['Safer for personnel', 'Sending a drone into risky terrain, flooded areas or hostile zones keeps people out of harm\'s way.'],
      ['Far cheaper than manned aircraft', 'Helicopters and aircraft are costly to fly and limited in number. A man-portable drone is available whenever and wherever it is needed.'],
      ['Made and supported locally', 'Built by a Bangladeshi company, with in-country training, repair and spare parts instead of long foreign supply chains.']
    ],
    advantages: [
      ['⏱️', '45+ min endurance', 'Long time on station for persistent observation.'],
      ['📡', '25 km range', 'Reaches far beyond the operator\'s line of sight.'],
      ['🎥', '4K imaging', 'Fine detail for identification and analysis.'],
      ['📦', 'Up to 5 kg payload', 'One airframe, many mission configurations.'],
      ['🎒', 'Man-portable', 'Under 16 kg — carried and launched by a small team.']
    ]
  },

  /* =========================================================
     BAJRA-I  -  interceptor
     ========================================================= */
  bajra: {
    key: 'bajra', name: 'BAJRA-I', page: 'bajra-i.html', role: 'Interceptor',
    tagline: 'Rapid-response interceptor drone',
    desc: 'A lightweight, fast-reaction interceptor under 3 kg with a 5 km range and 1.5 kg payload. Effective against Group 1 and 2 drones, low-flying helicopters, tanks and armoured vehicles.',
    photo: 'images/bajra-i.jpg',
    chips: ['< 3 kg', '20 min', '5 km'],
    table: { weight: '< 3 kg', payload: '1.5 kg', endurance: '20 min', range: '5 km' },
    specs: [['Weight', '< 3 kg'], ['Payload', '1.5 kg'], ['Endurance', '20 min'], ['Range', '5 km'], ['Targets', 'Air & Armour'], ['Class', 'Man-portable']],
    bars: [['Range', 20], ['Payload', 30], ['Endurance', 45], ['Portability', 95]],
    highlights: ['1.5 kg payload', '20 minutes of endurance', '5 km range', 'Under 3 kg — easy to carry and launch', 'Effective against Group 1 and 2 drones', 'Effective against low-flying helicopters, tanks and armoured vehicles'],

    missionTitle: 'The rapid-response defender',
    mission: [
      'BAJRA-I is built for one purpose: to respond quickly to close-range threats. Weighing under 3 kg, it is small enough for one person to carry and ready to launch the moment a threat appears.',
      'It is designed to counter small hostile drones (Group 1 and 2), low-flying helicopters, and armoured vehicles including tanks — threats that are hard and expensive to answer with conventional systems.',
      'With a 5 km range and 20 minutes of endurance, it is a short-reach, fast-reaction layer of defence. Its sensor dome gives the operator a live view of the threat during the whole response.'
    ],
    does: ['Counters small hostile drones (Group 1 & 2)', 'Responds to low-flying helicopters', 'Answers armoured vehicles and tanks', 'Operator-guided with live sensor video', 'Carries a 1.5 kg payload'],

    howTitle: 'From alert to response in moments',
    how: [
      ['Detect & alert', 'A threat is spotted by a sentry, radar or other sensor, and the BAJRA-I team is alerted.'],
      ['Rapid launch', 'The drone is compact and light, so it launches vertically from a small area with almost no setup.'],
      ['Fast approach', 'It climbs and flies toward the threat, covering up to 5 km, with the operator guiding it by radio link.'],
      ['Track with sensors', 'The nose sensor dome sends live video so the operator can find, identify and follow the target.'],
      ['Respond under operator control', 'The operator decides and directs the response throughout — the human stays in control at every step.']
    ],

    areasTitle: 'Where BAJRA-I is needed',
    areas: [
      ['🏢', 'Base & installation defence', 'Add a close-in layer against small drones that approach camps, headquarters and key facilities.'],
      ['🛂', 'Border posts & forward positions', 'Small outposts rarely have air defence. A man-portable interceptor gives them an answer to nearby aerial and armoured threats.'],
      ['⚡', 'Critical infrastructure', 'Protect power plants, ports, airports and communications sites from unauthorised or hostile drones.'],
      ['🚙', 'Convoys & moving columns', 'Escort teams can carry the system and respond quickly if a drone or vehicle threat appears along the route.'],
      ['🎖️', 'Counter-armour roles', 'Provide small units with a light, portable option against armoured vehicles where heavier weapons are unavailable.'],
      ['🛫', 'Low-altitude airspace', 'Address low-flying helicopters and similar threats that slip beneath many radar and air-defence systems.']
    ],

    whyTitle: 'Why this drone is needed',
    why: [
      ['Small drones are everywhere', 'Cheap commercial and military drones can observe or threaten a site. Defending against them with costly missiles is neither practical nor affordable.'],
      ['Gap in low-altitude defence', 'Large air-defence systems are designed for high, fast targets. Low-flying and small threats need a different, closer and quicker answer.'],
      ['Reaction time matters', 'The time between spotting a threat and responding is short. A light drone that launches in moments closes that gap.'],
      ['Small units need options', 'Troops at the edge rarely have heavy equipment. A sub-3 kg system fits in a backpack and gives them a real defensive tool.'],
      ['Cost-effective response', 'A compact drone costs far less than the assets it is meant to protect or the systems it replaces.']
    ],
    advantages: [
      ['⚡', 'Fast reaction', 'Light and compact for immediate launch.'],
      ['🎯', 'Multi-threat capability', 'Drones, low-flying helicopters and armoured vehicles.'],
      ['👁️', 'Live sensor view', 'Operator sees the threat throughout the response.'],
      ['🎒', 'Under 3 kg', 'Easily carried by a single person.'],
      ['🧑‍✈️', 'Human in control', 'The operator guides and decides at every stage.']
    ]
  },

  /* =========================================================
     CHOKH-C5  -  compact surveillance
     ========================================================= */
  chokh: {
    key: 'chokh', name: 'CHOKH-C5', page: 'chokh-c5.html', role: 'Compact Surveillance',
    tagline: 'Compact tactical surveillance drone',
    desc: 'A sub-5 kg man-portable drone offering a 1.5 kg payload capacity and 40 minutes of endurance — versatile for tactical operations in tight, fast-moving environments.',
    photo: 'images/chokh-c5.jpg',
    chips: ['< 5 kg', '40 min', '25 km'],
    table: { weight: '< 5 kg', payload: '1.5 kg', endurance: '40 min', range: '25 km' },
    specs: [['Weight', '< 5 kg'], ['Payload', '1.5 kg'], ['Endurance', '40 min'], ['Range', '25 km'], ['Class', 'Man-portable']],
    bars: [['Range', 100], ['Endurance', 80], ['Payload', 30], ['Portability', 90]],
    highlights: ['Man-portable — under 5 kg', '1.5 kg payload capacity', '40 minutes of endurance', '25 km operating range', 'Versatile for tactical operations'],

    missionTitle: 'The eye in every team\'s backpack',
    mission: [
      'CHOKH-C5 puts aerial vision in the hands of the smallest teams. At under 5 kg it fits in a backpack, and it is ready to fly in a couple of minutes — ideal when a team needs to see what is over the next hill or around the next corner.',
      'It flies up to 25 km for 40 minutes, long enough for real reconnaissance, yet it is compact enough to launch from tight spots, vehicles and rooftops.',
      'A 1.5 kg payload capacity lets it carry a sensor or small mission item, making it a flexible tool for tactical operations rather than just a camera.'
    ],
    does: ['Tactical reconnaissance for small teams', 'Quick launch from tight spaces', 'Live video to the operator', 'Carries a 1.5 kg payload', 'Up to 40 minutes in the air'],

    howTitle: 'Pack, launch, observe',
    how: [
      ['Pack & carry', 'The whole system fits in a backpack at under 5 kg, so the team stays light and mobile.'],
      ['Set up in minutes', 'It is unpacked, powered up and checked fast — no vehicles or heavy equipment needed.'],
      ['Launch', 'It lifts off vertically from a small clearing, vehicle roof, rooftop or trench line.'],
      ['Scout & stream', 'It flies the route, up to 25 km, streaming live video so the team sees ahead before moving.'],
      ['Recover & move', 'It lands, the battery is swapped, and the team continues the mission with fresh information.']
    ],

    areasTitle: 'Where CHOKH-C5 is needed',
    areas: [
      ['🥾', 'Patrol & tactical reconnaissance', 'Check the route and surroundings before a patrol moves — spotting hazards and activity early.'],
      ['🏙️', 'Urban & built-up areas', 'See over walls and buildings and along narrow streets where ground visibility is poor.'],
      ['🌲', 'Jungle & hill terrain', 'Scout dense vegetation and steep ground that is slow and risky to cross on foot.'],
      ['🛂', 'Border & outposts', 'Small posts can add their own aerial coverage without waiting for larger assets.'],
      ['🌀', 'Rapid damage assessment', 'First responders get a quick overview after floods, fires or landslides to decide where to act first.'],
      ['🚒', 'Search & rescue support', 'A fast aerial look at a search area helps rescuers prioritise and reach people sooner.'],
      ['🏭', 'Site & infrastructure checks', 'Inspect roofs, towers and facilities quickly and without climbing or scaffolding.']
    ],

    whyTitle: 'Why this drone is needed',
    why: [
      ['Small teams need their own eyes', 'Waiting for larger aerial assets takes time. A team-level drone gives immediate awareness when it matters.'],
      ['Move with more safety', 'Looking ahead before moving reduces surprises and risk to personnel.'],
      ['Light and quick', 'Heavier systems are often left behind. Under 5 kg, the CHOKH-C5 goes wherever the team goes.'],
      ['Affordable to deploy widely', 'It is cost-effective enough to equip many teams, giving much broader coverage.'],
      ['Complements SHYENA-S16', 'Where SHYENA-S16 covers wide areas, CHOKH-C5 gives each team its own quick, local view.']
    ],
    advantages: [
      ['🎒', 'Backpack size', 'Under 5 kg for easy transport.'],
      ['⏱️', '40 min endurance', 'Enough for real reconnaissance sorties.'],
      ['📡', '25 km range', 'Far beyond line of sight.'],
      ['📦', '1.5 kg payload', 'Adds mission flexibility.'],
      ['🚀', 'Fast set-up', 'Ready to fly in minutes.']
    ]
  }
};
