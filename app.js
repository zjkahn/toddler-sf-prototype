const activities = [
    {
        name: "Presidio Tunnel Tops",
        type: "outdoor",
        description: "Amazing views, huge playground, and plenty of space to run around.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly", "🚧 Fenced Area"],
        lat: 37.804,
        lng: -122.459,
        category: "park"
    },
    {
        name: "California Academy of Sciences",
        type: "indoor",
        description: "Aquarium, planetarium, and natural history museum. Great for rainy days.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.769,
        lng: -122.466,
        category: "museum"
    },
    {
        name: "Glen Canyon Park",
        type: "outdoor",
        description: "Nice trails and a great playground. Feels like nature in the city.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Partial Stroller"],
        lat: 37.738,
        lng: -122.443,
        category: "park"
    },
    {
        name: "Randall Museum",
        type: "indoor",
        description: "Live animals, science exhibits, and train models. Very toddler friendly.",
        tags: ["🅿️ Easy Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.764,
        lng: -122.437,
        category: "museum"
    },
    {
        name: "Yerba Buena Gardens",
        type: "outdoor",
        description: "Carousel, play area, and bowling nearby. Lots of grass to roll on.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.785,
        lng: -122.403,
        category: "garden"
    },
    {
        name: "SF Public Library - Main",
        type: "indoor",
        description: "Great children's section with story times and interactive play areas.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.779,
        lng: -122.416,
        category: "library"
    },
    {
        name: "Koret Children's Quarter",
        type: "outdoor",
        description: "Historic carousel and a massive playground in Golden Gate Park.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.767,
        lng: -122.456,
        category: "park"
    },
    {
        name: "Exploratorium",
        type: "indoor",
        description: "Hands-on museum of science, art and human perception. Mind-blowing for kids.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.801,
        lng: -122.397,
        category: "museum"
    },
    {
        name: "San Francisco Zoo",
        type: "outdoor",
        description: "Animals, steam train, and a great playground. Classic family day out.",
        tags: ["🅿️ Easy Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.732,
        lng: -122.503,
        category: "zoo"
    },
    {
        name: "Conservatory of Flowers",
        type: "indoor",
        description: "Beautiful greenhouse with exotic plants. Warm and humid on cold days.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.772,
        lng: -122.460,
        category: "garden"
    },
    {
        name: "Salesforce Park",
        type: "outdoor",
        description: "Rooftop park with a gondola, water feature, and children's play area.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.789,
        lng: -122.396,
        category: "park"
    },
    {
        name: "Mission Dolores Park",
        type: "outdoor",
        description: "Great playground with a view. Very popular, good for people watching.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.759,
        lng: -122.426,
        category: "park"
    },
    {
        name: "Julius Kahn Playground",
        type: "outdoor",
        description: "Parisian style playground in the Presidio. Great sandbox and structures.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.792,
        lng: -122.453,
        category: "park"
    },
    {
        name: "Mountain Lake Park",
        type: "outdoor",
        description: "Recently renovated playground next to a lake. Ducks and turtles!",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.787,
        lng: -122.470,
        category: "park"
    },
    {
        name: "Ferry Building",
        type: "indoor",
        description: "Great food stalls and farmer's market on weekends. Good for walking.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.795,
        lng: -122.393,
        category: "market"
    },
    {
        name: "Walt Disney Family Museum",
        type: "indoor",
        description: "Animation history and interactive exhibits. Good for older toddlers.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.801,
        lng: -122.458,
        category: "museum"
    },
    {
        name: "SF Botanical Garden",
        type: "outdoor",
        description: "Huge garden with plants from around the world. Great for walking.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.767,
        lng: -122.469,
        category: "garden"
    },
    {
        name: "Japanese Tea Garden",
        type: "outdoor",
        description: "Peaceful garden with pagodas and koi ponds. Watch the high steps.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Partial Stroller"],
        lat: 37.770,
        lng: -122.467,
        category: "garden"
    },
    {
        name: "Sutro Heights Park",
        type: "outdoor",
        description: "Ruins of an old estate with ocean views. Great for exploring.",
        tags: ["🅿️ Easy Parking", "🚻 No Bathrooms", "🛒 Partial Stroller"],
        lat: 37.777,
        lng: -122.512,
        category: "park"
    },
    {
        name: "Ocean Beach",
        type: "outdoor",
        description: "Play in the sand and watch the waves. Bring warm layers!",
        tags: ["🅿️ Easy Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.769,
        lng: -122.511,
        category: "park"
    },
    {
        name: "Baker Beach",
        type: "outdoor",
        description: "Iconic views of the Golden Gate Bridge. Good for sand play.",
        tags: ["🅿️ Easy Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.793,
        lng: -122.483,
        category: "park"
    },
    {
        name: "Crissy Field",
        type: "outdoor",
        description: "Flat, wide trails along the bay. Great for strollers and bikes.",
        tags: ["🅿️ Easy Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.803,
        lng: -122.466,
        category: "park"
    },
    {
        name: "Palace of Fine Arts",
        type: "outdoor",
        description: "Walk around the lagoon and see the swans. Very scenic.",
        tags: ["🅿️ Medium Parking", "🚻 No Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.802,
        lng: -122.448,
        category: "park"
    },
    {
        name: "Children's Creativity Museum",
        type: "indoor",
        description: "Hands-on art and technology museum for kids. Very interactive.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.784,
        lng: -122.402,
        category: "museum"
    },
    {
        name: "Lafayette Park",
        type: "outdoor",
        description: "Great playground at the top of the hill. Nice views.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.791,
        lng: -122.429,
        category: "park"
    },
    {
        name: "Alta Plaza Park",
        type: "outdoor",
        description: "Playground with multi-tiered levels and great city views.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"],
        lat: 37.791,
        lng: -122.437,
        category: "park"
    }
];

const categoryEmojis = {
    park: "🌳",
    museum: "🏛️",
    library: "📚",
    zoo: "🦁",
    garden: "🌸",
    market: "🛒"
};

let currentWeekend = [];
let activeDay = 'saturday';

const generateBtn = document.getElementById('generate-btn');
const outdoorToggle = document.getElementById('outdoor-toggle');
const itineraryContainer = document.getElementById('itinerary-container');
const satTab = document.getElementById('sat-tab');
const sunTab = document.getElementById('sun-tab');
const shareBtn = document.getElementById('share-btn');
const mapToggleBtn = document.getElementById('map-toggle-btn');
const mapContainer = document.getElementById('map-container');

let map = null;
let markers = [];

generateBtn.addEventListener('click', () => {
    generateWeekend();
});

satTab.addEventListener('click', () => {
    activeDay = 'saturday';
    satTab.classList.add('active');
    sunTab.classList.remove('active');
    renderItinerary();
});

sunTab.addEventListener('click', () => {
    activeDay = 'sunday';
    sunTab.classList.add('active');
    satTab.classList.remove('active');
    renderItinerary();
});

shareBtn.addEventListener('click', () => {
    shareItinerary();
});

mapToggleBtn.addEventListener('click', () => {
    toggleMap();
});

function generateWeekend() {
    const outdoorOnly = outdoorToggle.checked;
    
    let filteredActivities = activities;
    if (outdoorOnly) {
        filteredActivities = activities.filter(a => a.type === 'outdoor');
    }

    // Simple random selection for prototype
    const selected = [];
    const available = [...filteredActivities];
    
    for (let i = 0; i < Math.min(4, available.length); i++) {
        const randomIndex = Math.floor(Math.random() * available.length);
        selected.push(available.splice(randomIndex, 1)[0]);
    }

    currentWeekend = selected;
    renderItinerary();
    updateMap();
}

function renderItinerary() {
    itineraryContainer.replaceChildren(); // Clear previous content securely

    if (currentWeekend.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'empty-state';
        const p = document.createElement('p');
        p.textContent = "Click the button above to generate a plan!";
        emptyMsg.appendChild(p);
        itineraryContainer.appendChild(emptyMsg);
        return;
    }

    // Filter activities for the active day
    const activitiesToShow = activeDay === 'saturday' 
        ? currentWeekend.slice(0, 2) 
        : currentWeekend.slice(2, 4);

    if (activitiesToShow.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'empty-state';
        const p = document.createElement('p');
        p.textContent = "No activities generated for this day. Try generating again.";
        emptyMsg.appendChild(p);
        itineraryContainer.appendChild(emptyMsg);
        return;
    }

    const times = ["Morning", "Afternoon"];

    activitiesToShow.forEach((activity, index) => {
        const card = document.createElement('div');
        card.className = 'card';



        const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';

        const dayTag = document.createElement('span');
        dayTag.className = 'day-tag';
        dayTag.textContent = times[index] || "Bonus Option";
        
        const timeTag = document.createElement('span');
        timeTag.className = 'time-tag';
        timeTag.textContent = activity.type === 'outdoor' ? '☀️ Outdoor' : '🏠 Indoor';

        cardHeader.appendChild(dayTag);
        cardHeader.appendChild(timeTag);

        const h3 = document.createElement('h3');
        const emoji = categoryEmojis[activity.category] || "📍";
        h3.textContent = `${emoji} ${activity.name}`;

        const desc = document.createElement('p');
        desc.className = 'description';
        desc.textContent = activity.description;

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tags';

        activity.tags.forEach(tagText => {
            const tag = document.createElement('span');
            tag.className = 'tag';
            tag.textContent = tagText;
            tagsContainer.appendChild(tag);
        });

        card.appendChild(cardHeader);
        card.appendChild(h3);
        card.appendChild(desc);
        card.appendChild(tagsContainer);

        itineraryContainer.appendChild(card);
    });
}

function shareItinerary() {
    if (currentWeekend.length === 0) return;

    const text = `Here is our SF Toddler Weekend plan!
    
Saturday:
- Morning: ${currentWeekend[0].name}
- Afternoon: ${currentWeekend[1].name}

Sunday:
- Morning: ${currentWeekend[2].name}
- Afternoon: ${currentWeekend[3].name}`;

    if (navigator.share) {
        navigator.share({
            title: 'SF Toddler Weekend Plan',
            text: text,
        })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            const originalText = shareBtn.textContent;
            shareBtn.textContent = "📋 Copied!";
            setTimeout(() => {
                shareBtn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    }
}

function toggleMap() {
    mapContainer.classList.toggle('hidden');
    if (!mapContainer.classList.contains('hidden')) {
        initMap();
        // Trigger relayout if map already exists
        if (map) {
            setTimeout(() => map.invalidateSize(), 100);
        }
    }
}

function initMap() {
    if (map !== null) return; // Already initialized

    // SF coordinates
    map = L.map('map').setView([37.7749, -122.4194], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    updateMap();
}

function updateMap() {
    if (map === null || currentWeekend.length === 0) return;

    // Clear old markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    // Add new markers
    currentWeekend.forEach((activity, index) => {
        if (activity.lat && activity.lng) {
            const day = index < 2 ? 'Sat' : 'Sun';
            const time = index % 2 === 0 ? 'AM' : 'PM';
            
            const marker = L.marker([activity.lat, activity.lng])
                .addTo(map)
                .bindPopup(`<b>${day} ${time}</b>: ${activity.name}`);
            
            markers.push(marker);
        }
    });

    // Fit bounds to markers if we have any
    if (markers.length > 0) {
        const group = new L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}
