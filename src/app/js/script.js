document.addEventListener("DOMContentLoaded", () => {
    fetch("json/data.json")
        .then(response => response.json())
        .then(data => {
            const nameEl = document.getElementById("name");
            const jobEl = document.getElementById("job");

            if (nameEl) nameEl.textContent = data.name;
            if (jobEl) jobEl.textContent = data.job;

            const toggle = document.querySelector(".about-toggle");
            const content = document.querySelector(".about-content");
            const arrow = document.querySelector(".arrow-icon");

            if (toggle && content && arrow) {
                toggle.addEventListener("click", () => {
                    content.classList.toggle("open");
                    arrow.classList.toggle("rotate");
                });
            }

            const wrapper = document.getElementById("skills-wrapper");
            if (!wrapper) return;

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
                    if (i <= item.rating) star.classList.add("filled");
                    div.appendChild(star);
                }

                return div;
            }

            const colLeft = document.createElement("div");
            colLeft.classList.add("col-5", "px-0");

            data.skillsLeft.forEach(skill => {
                colLeft.appendChild(createRating(skill));
            });

            const colRight = document.createElement("div");
            colRight.classList.add("col-6", "px-0");

            data.skillsRight.forEach(skill => {
                colRight.appendChild(createRating(skill));
            });

            wrapper.appendChild(colLeft);
            wrapper.appendChild(colRight);
        })
        .catch(err => console.error("Помилка завантаження JSON:", err));
});