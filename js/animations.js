// CUSTOM CURSOR
const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// GSAP INTRO
gsap.from(".hero h1", {
    y: 50,
    opacity: 0,
    duration: 1
});

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible");
    });
});

document.querySelectorAll(".feature-card").forEach(el => observer.observe(el));
