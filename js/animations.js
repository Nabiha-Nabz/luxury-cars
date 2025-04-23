// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
// Typewriter Effect for Hero Text
const dynamicText = document.getElementById('dynamic-text');
if (dynamicText) {
    const phrases = ["ELEVATE YOUR DRIVE", "UNMATCHED PERFORMANCE", "TIMELESS DESIGN"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            dynamicText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 150);
        }
    }
    typeWriter();
}

// showroom.js

const carData = {
    ferrari: {
        image: 'images/ferrari.png',
        title: 'Ferrari SF90 Stradale',
        specs: '0-60mph: 2.5s | 986 HP Hybrid V8',
        description: "The SF90 Stradale is Ferrari's first series production PHEV, combining brutal acceleration with cutting-edge hybrid technology."
    },
    bmw: {
        image: 'images/bmw.png',
        title: 'BMW M8 Competition',
        specs: '0-60mph: 3.0s | 617 HP V8',
        description: "The M8 Competition blends aggressive styling with refined luxury and race-bred performance."
    },
    mercedes: {
        image: 'images/mercedes.png',
        title: 'Mercedes-AMG GT Black Series',
        specs: '0-60mph: 3.1s | 720 HP Twin-Turbo V8',
        description: "Track-focused yet street-legal, the Black Series is the ultimate expression of AMG engineering."
    },
    ariel: {
        image: 'images/ariel.png',
        title: 'Ariel Atom 4',
        specs: '0-60mph: 2.8s | 320 HP',
        description: "Minimalist and thrilling, the Atom 4 strips driving to its purest form with open-wheel agility."
    },
    maserati: {
        image: 'images/maserati.png',
        title: 'Maserati MC20',
        specs: '0-60mph: 2.9s | 621 HP V6',
        description: "The MC20 marks Maserati’s return to the supercar world with Italian flair and innovation."
    },
    pagani: {
        image: 'images/pagani.png',
        title: 'Pagani Huayra R',
        specs: '0-60mph: 3.0s | 850 HP V12',
        description: "A masterpiece of carbon fiber and speed, the Huayra R is a symphony of bespoke craftsmanship and performance."
    }
};

function showCar(model) {
    const car = carData[model];
    if (!car) return;

    document.getElementById('car-image').src = car.image;
    document.getElementById('car-info').innerHTML = `
        <h3>${car.title}</h3>
        <p class="specs">${car.specs}</p>
        <p class="description">${car.description}</p>
    `;

    // Update active button
    const buttons = document.querySelectorAll('.car-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = [...buttons].find(btn => btn.textContent.toLowerCase() === model);
    if (activeBtn) activeBtn.classList.add('active');
}
