// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Navigation for Smaller Screens
document.querySelector('nav').appendChild(document.createElement('button')).innerHTML = '&equiv;';
document.querySelectorAll('nav button')[0].onclick = function () {
    document.querySelector('nav ul').classList.toggle('show');
};

// Button Click Effect for Hero Section
document.querySelector('#home button').addEventListener('click', function () {
     window.location.href = 'https://img.freepik.com/free-photo/glowing-sky-sphere-orbits-starry-galaxy-generated-by-ai_188544-15599.jpg';
});

// Planet/Galaxy Cards Hover and Click Effect with Redirection
document.querySelectorAll('.planet, .galaxy').forEach(card => {
    card.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
        this.style.zIndex = '1';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
        this.style.zIndex = '0';
        this.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    });
    card.addEventListener('click', function () {
        // Get the 'data-link' attribute value from the card
        var link = this.getAttribute('data-link');
        if (link) {
            // Redirect to the specified link
            window.location.href = link;
        }
    });
});
