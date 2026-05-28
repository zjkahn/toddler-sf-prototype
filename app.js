const activities = [
    {
        name: "Presidio Tunnel Tops",
        type: "outdoor",
        description: "Amazing views, huge playground, and plenty of space to run around.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly", "🚧 Fenced Area"]
    },
    {
        name: "California Academy of Sciences",
        type: "indoor",
        description: "Aquarium, planetarium, and natural history museum. Great for rainy days.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Glen Canyon Park",
        type: "outdoor",
        description: "Nice trails and a great playground. Feels like nature in the city.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Partial Stroller"]
    },
    {
        name: "Randall Museum",
        type: "indoor",
        description: "Live animals, science exhibits, and train models. Very toddler friendly.",
        tags: ["🅿️ Easy Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Yerba Buena Gardens",
        type: "outdoor",
        description: "Carousel, play area, and bowling nearby. Lots of grass to roll on.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "SF Public Library - Main",
        type: "indoor",
        description: "Great children's section with story times and interactive play areas.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Koret Children's Quarter",
        type: "outdoor",
        description: "Historic carousel and a massive playground in Golden Gate Park.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Exploratorium",
        type: "indoor",
        description: "Hands-on museum of science, art and human perception. Mind-blowing for kids.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "San Francisco Zoo",
        type: "outdoor",
        description: "Animals, steam train, and a great playground. Classic family day out.",
        tags: ["🅿️ Easy Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Conservatory of Flowers",
        type: "indoor",
        description: "Beautiful greenhouse with exotic plants. Warm and humid on cold days.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Salesforce Park",
        type: "outdoor",
        description: "Rooftop park with a gondola, water feature, and children's play area.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Mission Dolores Park",
        type: "outdoor",
        description: "Great playground with a view. Very popular, good for people watching.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Julius Kahn Playground",
        type: "outdoor",
        description: "Parisian style playground in the Presidio. Great sandbox and structures.",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Mountain Lake Park",
        type: "outdoor",
        description: "Recently renovated playground next to a lake. Ducks and turtles!",
        tags: ["🅿️ Medium Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    },
    {
        name: "Ferry Building",
        type: "indoor",
        description: "Great food stalls and farmer's market on weekends. Good for walking.",
        tags: ["🅿️ Hard Parking", "🚻 Bathrooms", "🛒 Stroller Friendly"]
    }
];

let currentWeekend = [];
let activeDay = 'saturday';

const generateBtn = document.getElementById('generate-btn');
const outdoorToggle = document.getElementById('outdoor-toggle');
const itineraryContainer = document.getElementById('itinerary-container');
const satTab = document.getElementById('sat-tab');
const sunTab = document.getElementById('sun-tab');

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
        h3.textContent = activity.name;

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
