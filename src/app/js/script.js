document.addEventListener("DOMContentLoaded", () => {
    const nameEl = document.getElementById("name");
    const jobEl = document.getElementById("job");

    if (!nameEl || !jobEl) {
        console.error("Elements #name або #job не знайдено!");
        return;
    }

    nameEl.textContent = "NOEL TAYLOR";
    jobEl.textContent = "GRAPHIC & WEB DESIGNER";

    const toggle = document.querySelector(".about-toggle");
    const content = document.querySelector(".about-content");
    const arrow = document.querySelector(".arrow-icon");

    if (!toggle || !content || !arrow) {
        console.error("Елементи для ABOUT ME не знайдено!");
        return;
    }

    toggle.addEventListener("click", () => {
        content.classList.toggle("open");
        arrow.classList.toggle("rotate");
    });

    const wrapper = document.getElementById("skills-wrapper");

    if (!wrapper) {
        console.error("Елемент #skills-wrapper не знайдено!");
        return;
    }

    const skillsLeft = [
        { name: "Adobe Photoshop", rating: 4, padClass: "pad" },
        { name: "Microsoft Word", rating: 4, padClass: "pad-2" },
        { name: "HTML-5/CSS-3", rating: 4, padClass: "pad-3" }
    ];

    const skillsRight = [
        { name: "Adobe Illustrator", rating: 4, padClass: "pad-4" },
        { name: "Microsoft Powerpoint", rating: 4, padClass: "pad" }
    ];

    function createRating(item) {
        const div = document.createElement("div");
        div.classList.add("rating");

        const title = document.createElement("span");
        title.classList.add("text-8");
        title.textContent = item.name;

        const pad = document.createElement("span");
        pad.classList.add(item.padClass);

        div.appendChild(title);
        div.appendChild(pad);

        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.classList.add("star");

            if (i <= item.rating) {
                star.classList.add("filled");
            }

            div.appendChild(star);
        }

        return div;
    }

    const colLeft = document.createElement("div");
    colLeft.classList.add("col-5", "px-0");

    skillsLeft.forEach(skill => {
        colLeft.appendChild(createRating(skill));
    });

    const colRight = document.createElement("div");
    colRight.classList.add("col-6", "px-0");

    skillsRight.forEach(skill => {
        colRight.appendChild(createRating(skill));
    });

    wrapper.appendChild(colLeft);
    wrapper.appendChild(colRight);
});