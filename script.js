function playMusic() {
    let song = document.getElementById("birthdaySong");
    song.play();
    startConfetti();
}

// 🎊 Confetti Effect 🎊
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetti = [];
const confettiCount = 200;

for (let i = 0; i < confettiCount; i++) {
    confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 2,
        d: Math.random() * 10 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`
    });
}

function startConfetti() {
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < confetti.length; i++) {
            let c = confetti[i];
            ctx.beginPath();
            ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
            ctx.fillStyle = c.color;
            ctx.fill();
            c.y += c.d;
            if (c.y > canvas.height) c.y = 0;
        }
        requestAnimationFrame(draw);
    }
    draw();
}
