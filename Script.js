document.getElementById('menu-toggle').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('menu-toggle');
    if (!navbar.contains(event.target) && !toggle.contains(event.target)) {
        navbar.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('navbar').classList.remove('active');
        }
    });
});