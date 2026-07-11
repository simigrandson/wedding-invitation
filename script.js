// ============================
// Premium Wedding Invitation
// script.js
// ============================

// Hide Loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// ============================
// Wedding Countdown
// ============================

const weddingDate = new Date("August 31, 2026 11:00:00").getTime();

const countdown = setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        clearInterval(countdown);

        document.querySelector(".timer").innerHTML = `
            <h2 style="grid-column:1/-1;color:#d4af37;">
                🎉 Today is Our Wedding Day! 🎉
            </h2>
        `;

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}, 1000);

// ============================
// Floating Petals
// ============================

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-50px";

    petal.style.fontSize =
        (18 + Math.random() * 20) + "px";

    petal.style.opacity = Math.random();

    petal.style.pointerEvents = "none";

    petal.style.zIndex = "999";

    petal.style.transition = "transform linear";

    document.body.appendChild(petal);

    const duration = 8000 + Math.random() * 6000;

    petal.animate([
        {
            transform: "translateY(-50px) rotate(0deg)"
        },
        {
            transform:
                `translate(${Math.random()*200-100}px,110vh) rotate(720deg)`
        }
    ], {
        duration: duration,
        easing: "linear"
    });

    setTimeout(() => {

        petal.remove();

    }, duration);

}

setInterval(createPetal, 700);

// ============================
// Scroll Reveal
// ============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.animate([
                {
                    opacity: 0,
                    transform: "translateY(60px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ], {
                duration: 900,
                fill: "forwards"
            });

        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => observer.observe(section));

// ============================
// RSVP
// ============================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector("input").value;

    if (name.trim() === "") {

        alert("Please enter your name.");

        return;

    }

    alert(
`Thank you ${name}!

Sneha ❤️ Robin

look forward to celebrating with you.

God Bless You!`
    );

    form.reset();

});

// ============================
// Smooth Button Animation
// ============================

const button = document.querySelector(".btn");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.08)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

});

// ============================
// Sparkle Effect
// ============================

function sparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * innerWidth + "px";

    star.style.top = Math.random() * innerHeight + "px";

    star.style.fontSize = "16px";

    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    star.animate([
        {opacity:0, transform:"scale(.2)"},
        {opacity:1, transform:"scale(1.5)"},
        {opacity:0, transform:"scale(.2)"}
    ],{
        duration:2500
    });

    setTimeout(()=>{

        star.remove();

    },2500);

}

setInterval(sparkle,1200);