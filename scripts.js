document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'franchisee' && password === 'password123') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials, please try again.');
        }
    });

    document.getElementById('logout').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    const sections = document.querySelectorAll('.service-section');
    sections[0].classList.add('active');
});

function viewReports() {
    alert('Viewing reports...');
}

function manageServices() {
    alert('Managing services...');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.service-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
