// Illustrative architectural imagery, not a completed-project portfolio.
export const architecturalImages = {
  'touchless-entry': ['Hand activating a wall-mounted touchless sensor beside a glass swing door', 'Hands-free access, from the first approach.'],
  'washroom-entry': ['Commercial washroom doorway with automatic operator, touchless activation and occupancy indicator', 'Entry and privacy, planned together.'],
  'door-assessment': ['Technician reviewing an automatic commercial entrance with a tablet', 'Assess the whole opening before defining the work.'],
  'care-arrival': ['Healthcare reception with a glazed entrance and a clear circulation area', 'Care spaces, from the first arrival.'],
  'tenant-lobby': ['Sunlit office lobby with glazed doors, walnut panels and red seating', 'A welcoming route for tenants and visitors.'],
  'civic-threshold': ['Contemporary library entrance with a sheltered glass vestibule', 'Public entry with a sense of place.'],
  'commercial-approach': ['Sheltered commercial entrance with glass doors and a burgundy canopy', 'Consider the approach as well as the opening.'],
  'shared-spaces': ['Bright commercial atrium connecting several tenant entrances', 'Different destinations. One shared arrival space.'],
  'opening-survey': ['Survey clipboard and measuring tools beside a commercial doorway', 'A closer look before the scope is set.'],
  'portfolio-facilities': ['Three contemporary commercial buildings along a landscaped pathway', 'Bring individual properties into a coordinated plan.'],
  'considered-access': ['Open glass doorway with a stainless handle and a sunlit interior beyond', 'The details that shape an everyday entrance.'],
  'project-doorway': ['Complete glass swing door, frame and overhead operator in an office vestibule', 'Start by showing the complete door and frame.'],
  'planning-library': ['Door planning papers, material samples and a burgundy notebook on a desk', 'Make room for the decisions behind the hardware.'],
};

export const heroImages = {
  Services: 'commercial-approach',
  'Building applications': 'shared-spaces',
  'Our process': 'door-assessment',
  'National Accounts': 'portfolio-facilities',
  'About WaveToOpen': 'considered-access',
  'Project resources': 'planning-library',
};

export function architecturalPhoto(name, priority = false, captionVisible = true) {
  const [alt, caption] = architecturalImages[name];
  return `<figure class="architectural-image"><img src="/assets/${name}-1280.webp" srcset="/assets/${name}-640.webp 640w, /assets/${name}-1280.webp 1280w" sizes="(max-width:600px) calc(100vw - 40px), (max-width:850px) 45vw, 560px" width="1280" height="853" alt="${alt}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">${captionVisible ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;
}
