const baseSize = Math.min(window.innerWidth, window.innerHeight) * 0.8;
const centerPoint = baseSize / 2;

const getScaleFactor = () => Math.min(window.innerWidth, window.innerHeight) / 1000;

const planets = [
    { 
        name: 'Mercury', 
        color: '#A0522D', 
        baseSize: 10, 
        baseDistance: 100, 
        speed: 4.1,
        description: 'The smallest and fastest planet in our solar system.',
        distanceLabel: '57.9 million km (0.39 AU)',
        facts: {
            'Orbital Period': '88 Earth days',
            'Distance from Sun': '57.9 million km',
            'Surface Temperature': '-180°C to 430°C',
            'Diameter': '4,879 km',
            'Fun Fact': 'Despite being closest to the Sun, Mercury is not the hottest planet - Venus is!'
        },
        orbitalElements: {
            a: 0.39,    // Semi-major axis in AU
            e: 0.205,   // Eccentricity
            I: 7.0,     // Inclination in degrees
            longNode: 48.0, // Longitude of ascending node in degrees
            longPeri: 77.0, // Longitude of perihelion in degrees
            L: 252.3,   // Mean longitude in degrees
            M: 174.0    // Mean anomaly at epoch in degrees
        }
    },
    { 
        name: 'Venus', 
        color: '#DEB887', 
        baseSize: 15, 
        baseDistance: 130, 
        speed: 1.6,
        description: 'Often called Earth\'s sister planet due to similar size.',
        distanceLabel: '108.2 million km (0.72 AU)',
        facts: {
            'Orbital Period': '225 Earth days',
            'Distance from Sun': '108.2 million km',
            'Surface Temperature': '462°C',
            'Diameter': '12,104 km',
            'Fun Fact': 'Venus rotates backwards compared to most other planets!'
        },
        orbitalElements: {
            a: 0.72,    // Semi-major axis in AU
            e: 0.007,   // Eccentricity
            I: 3.4,     // Inclination in degrees
            longNode: 76.0, 
            longPeri: 131.0, 
            L: 181.5,  
            M: 50.0     
        }
    },
    { 
        name: 'Earth', 
        color: '#4169E1', 
        baseSize: 16, 
        baseDistance: 170, 
        speed: 1,
        description: 'Our home planet and the only known world to harbor life.',
        distanceLabel: '149.6 million km (1.00 AU)',
        facts: {
            'Orbital Period': '365.25 days',
            'Distance from Sun': '149.6 million km',
            'Surface Temperature': '-88°C to 58°C',
            'Diameter': '12,742 km',
            'Fun Fact': 'Earth is the only planet not named after a god or goddess!'
        },
        orbitalElements: {
            a: 1.00,    // Semi-major axis in AU
            e: 0.017,   // Eccentricity
            I: 0.0,     // Inclination in degrees
            longNode: 348.7, 
            longPeri: 102.9, 
            L: 100.4,  
            M: 357.5   
        }
    },
    { 
        name: 'Mars', 
        color: '#CD5C5C', 
        baseSize: 12, 
        baseDistance: 210, 
        speed: 0.53,
        description: 'The Red Planet, named after the Roman god of war.',
        distanceLabel: '227.9 million km (1.52 AU)',
        facts: {
            'Orbital Period': '687 Earth days',
            'Distance from Sun': '227.9 million km',
            'Surface Temperature': '-140°C to 20°C',
            'Diameter': '6,779 km',
            'Fun Fact': 'Mars has the largest volcano in the solar system - Olympus Mons!'
        },
        orbitalElements: {
            a: 1.52,    // Semi-major axis in AU
            e: 0.093,   // Eccentricity
            I: 1.85,    // Inclination in degrees
            longNode: 49.0, 
            longPeri: 336.0, 
            L: 249.2,  
            M: 19.4    
        }
    },
    { 
        name: 'Jupiter', 
        color: '#DAA520', 
        baseSize: 40, 
        baseDistance: 280, 
        speed: 0.084,
        description: 'The largest planet in our solar system.',
        distanceLabel: '778.5 million km (5.20 AU)',
        facts: {
            'Orbital Period': '11.9 Earth years',
            'Distance from Sun': '778.5 million km',
            'Surface Temperature': '-110°C',
            'Diameter': '139,820 km',
            'Fun Fact': 'Jupiter\'s Great Red Spot is a storm that has been raging for at least 400 years!'
        },
        orbitalElements: {
            a: 5.20,    // Semi-major axis in AU
            e: 0.049,   // Eccentricity
            I: 1.3,     // Inclination in degrees
            longNode: 100.0, 
            longPeri: 270.0, 
            L: 250.9,  
            M: 20.0    
        }
    },
    { 
        name: 'Saturn', 
        color: '#F4A460', 
        baseSize: 35, 
        baseDistance: 350, 
        speed: 0.034,
        description: 'Famous for its beautiful ring system.',
        distanceLabel: '1.4 billion km (9.54 AU)',
        facts: {
            'Orbital Period': '29.5 Earth years',
            'Distance from Sun': '1.4 billion km',
            'Surface Temperature': '-140°C',
            'Diameter': '116,460 km',
            'Fun Fact': 'Saturn is the only planet that could float in water (if you had a big enough bathtub)!'
        },
        orbitalElements: {
            a: 9.54,    // Semi-major axis in AU
            e: 0.056,   // Eccentricity
            I: 2.5,     // Inclination in degrees
            longNode: 113.0, 
            longPeri: 330.0, 
            L: 101.7,  
            M: 200.0    
        }
    },
    { 
        name: 'Uranus', 
        color: '#87CEEB', 
        baseSize: 25, 
        baseDistance: 420, 
        speed: 0.012,
        description: 'The ice giant that rotates on its side.',
        distanceLabel: '2.9 billion km (19.2 AU)',
        facts: {
            'Orbital Period': '84 Earth years',
            'Distance from Sun': '2.9 billion km',
            'Surface Temperature': '-224°C',
            'Diameter': '50,724 km',
            'Fun Fact': 'Uranus rotates almost completely on its side, like a rolling ball!'
        },
        orbitalElements: {
            a: 19.18,   // Semi-major axis in AU
            e: 0.046,   // Eccentricity
            I: 97.9,    // Inclination in degrees
            longNode: 74.0, 
            longPeri: 171.0, 
            L: 77.8,  
            M: 142.0    
        }
    },
    { 
        name: 'Neptune', 
        color: '#1E90FF', 
        baseSize: 24, 
        baseDistance: 490, 
        speed: 0.006,
        description: 'The windiest planet, with speeds up to 2,100 km/h.',
        distanceLabel: '4.5 billion km (30.1 AU)',
        facts: {
            'Orbital Period': '165 Earth years',
            'Distance from Sun': '4.5 billion km',
            'Surface Temperature': '-220°C',
            'Diameter': '49,244 km',
            'Fun Fact': 'Neptune has the strongest winds in the solar system!'
        },
        orbitalElements: {
            a: 30.07,   // Semi-major axis in AU
            e: 0.009,   // Eccentricity
            I: 28.3,    // Inclination in degrees
            longNode: 131.0, 
            longPeri: 88.0, 
            L: 350.9,  
            M: 257.0    
        }
    }
];

const solarSystem = document.getElementById('solar-system');
let currentYear = 0;
let isPaused = false;
let startTime = Date.now();
let pausedTime = 0;

// Create pause button
const pauseButton = document.createElement('button');
pauseButton.textContent = 'Pause';
pauseButton.className = 'control-button';
document.getElementById('controls').appendChild(pauseButton);

pauseButton.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? 'Resume' : 'Pause';
    if (!isPaused) {
        startTime = Date.now() - (pausedTime * 1000);
    }
});

// Create modal container
const modal = document.createElement('div');
modal.className = 'planet-modal';
modal.style.display = 'none';
document.body.appendChild(modal);

function updateSizes() {
    const scaleFactor = getScaleFactor();
    solarSystem.style.width = `${baseSize}px`;
    solarSystem.style.height = `${baseSize}px`;

    const sun = document.querySelector('.sun');
    const sunSize = 60 * scaleFactor;
    sun.style.width = `${sunSize}px`;
    sun.style.height = `${sunSize}px`;

    planets.forEach((planet, index) => {
        const orbit = document.querySelectorAll('.orbit')[index];
        const planetElement = document.querySelectorAll('.planet')[index];
        const distance = planet.baseDistance * scaleFactor;
        const size = planet.baseSize * scaleFactor;

        orbit.style.width = `${distance * 2}px`;
        orbit.style.height = `${distance * 2}px`;

        planetElement.style.width = `${size}px`;
        planetElement.style.height = `${size}px`;
    });
}

// Create planets and their orbits
planets.forEach(planet => {
    const scaleFactor = getScaleFactor();
    const size = planet.baseSize * scaleFactor;
    const distance = planet.baseDistance * scaleFactor;

    // Create orbit
    const orbit = document.createElement('div');
    orbit.className = 'orbit';
    orbit.style.width = `${distance * 2}px`;
    orbit.style.height = `${distance * 2}px`;

    // Add distance label
    const label = document.createElement('div');
    label.className = 'distance-label';
    label.textContent = planet.distanceLabel;
    label.style.display = 'none'; // Initially hide the label
    orbit.appendChild(label);

    solarSystem.appendChild(orbit);

    // Create planet
    const planetElement = document.createElement('div');
    planetElement.className = 'planet';
    planetElement.style.width = `${size}px`;
    planetElement.style.height = `${size}px`;
    planetElement.style.backgroundColor = planet.color;

    // Add hover events for distance label
    planetElement.addEventListener('mouseenter', () => {
        const label = orbit.querySelector('.distance-label');
        label.style.display = 'block';
    });

    planetElement.addEventListener('mouseleave', () => {
        const label = orbit.querySelector('.distance-label');
        label.style.display = 'none';
    });

    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `
        <h3>${planet.name}</h3>
        <p>${planet.description}</p>
        <p><strong>Orbital Elements:</strong></p>
        <ul>
            <li><strong>Semi-major Axis (a):</strong> ${planet.orbitalElements.a} AU</li>
            <li><strong>Eccentricity (e):</strong> ${planet.orbitalElements.e}</li>
            <li><strong>Inclination (I):</strong> ${planet.orbitalElements.I}°</li>
            <li><strong>Longitude of Ascending Node:</strong> ${planet.orbitalElements.longNode}°</li>
            <li><strong>Longitude of Perihelion:</strong> ${planet.orbitalElements.longPeri}°</li>
            <li><strong>Mean Longitude (L):</strong> ${planet.orbitalElements.L}°</li>
            <li><strong>Mean Anomaly (M):</strong> ${planet.orbitalElements.M}°</li>
        </ul>
        <p><strong>Facts:</strong></p>
        <ul>
            ${Object.entries(planet.facts).map(([key, value]) => `<li>${key}: ${value}</li>`).join('')}
        </ul>
    `;
    planetElement.appendChild(tooltip);

    // Add click handler
    planetElement.addEventListener('click', () => {
        let factsHTML = '';
        for (const [key, value] of Object.entries(planet.facts)) {
            factsHTML += `<div class="fact"><strong>${key}:</strong> ${value}</div>`;
        }

        modal.innerHTML = `
            <div class="modal-content">
                <h2>${planet.name}</h2>
                <p class="description">${planet.description}</p>
                <div class="facts-container">
                    ${factsHTML}
                </div>
                <div class="orbital-elements">
                    <h3>Orbital Elements</h3>
                    <ul>
                        <li><strong>Semi-major Axis (a):</strong> ${planet.orbitalElements.a} AU</li>
                        <li><strong>Eccentricity (e):</strong> ${planet.orbitalElements.e}</li>
                        <li><strong>Inclination (I):</strong> ${planet.orbitalElements.I}°</li>
                        <li><strong>Longitude of Ascending Node:</strong> ${planet.orbitalElements.longNode}°</li>
                        <li><strong>Longitude of Perihelion:</strong> ${planet.orbitalElements.longPeri}°</li>
                        <li><strong>Mean Longitude (L):</strong> ${planet.orbitalElements.L}°</li>
                        <li><strong>Mean Anomaly (M):</strong> ${planet.orbitalElements.M}°</li>
                    </ul>
                </div>
                <button class="close-button">Close</button>
            </div>
        `;
        modal.style.display = 'flex';

        modal.querySelector('.close-button').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });

    solarSystem.appendChild(planetElement);
});

// Animation loop (unchanged)
function animate() {
    const currentTime = Date.now();
    if (!isPaused) {
        const elapsedTime = (currentTime - startTime) / 1000;
        const planetElements = document.querySelectorAll('.planet');
        const scaleFactor = getScaleFactor();

        // Update current year based on Earth's position
        currentYear = (elapsedTime * planets[2].speed) / (2 * Math.PI);
        document.getElementById('year-display').textContent = 
            `Earth Years: ${currentYear.toFixed(2)}`;

        planetElements.forEach((planetElement, index) => {
            const planet = planets[index];
            const angle = elapsedTime * planet.speed;
            const distance = planet.baseDistance * scaleFactor;

            const x = centerPoint + distance * Math.sin(angle);
            const y = centerPoint - distance * Math.cos(angle);

            const size = planet.baseSize * scaleFactor;
            planetElement.style.left = `${x - size / 2}px`;
            planetElement.style.top = `${y - size / 2}px`;
        });
    } else {
        // Update pausedTime when paused
        pausedTime = (currentYear * 2 * Math.PI) / planets[2].speed;
    }
    requestAnimationFrame(animate);
}

// Window resize handler
window.addEventListener('resize', updateSizes);

// Year slider control
const yearSlider = document.getElementById('year-slider');
yearSlider.addEventListener('input', (e) => {
    const year = parseFloat(e.target.value);
    currentYear = year;
    // Calculate new start time based on desired year
    startTime = Date.now() - (year * 2 * Math.PI * 1000 / planets[2].speed);
});

// Close modal if clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize animation
updateSizes();
animate();
