const roles = ['DevOps', 'SysAdmin'];
let index = 0;
let charIndex = 0;

const roleElement = document.getElementById('role');

function typeRole() {
    if (charIndex < roles[index].length) {
        roleElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(() => {
            roleElement.textContent = '';
            charIndex = 0;
            index = (index + 1) % roles.length;
            typeRole();
        }, 1000);
    }
}

setTimeout(typeRole, 1000);

const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateStars() {
    stars.forEach(star => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx = -star.dx;
        if (star.y < 0 || star.y > canvas.height) star.dy = -star.dy;
    });
}

function animate() {
    drawStars();
    updateStars();
    requestAnimationFrame(animate);
}

animate();
