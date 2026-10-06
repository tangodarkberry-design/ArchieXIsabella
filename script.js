// TEMPLATE
// This file is intentionally mostly empty for now.
// We'll add interactive features here as the site develops.


document.addEventListener("DOMContentLoaded", () => {

    console.log("TEMPLATE");

});

const galleryImages =
    document.querySelectorAll(".photo img");

const imageViewer =
    document.getElementById("imageViewer");

const viewerImage =
    document.getElementById("viewerImage");

const viewerDescription =
    document.getElementById("viewerDescription");

const viewerClose =
    document.getElementById("viewerClose");


galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        viewerImage.src = image.src;

        viewerImage.alt = image.alt;

        viewerDescription.textContent =
            image.dataset.description;

        imageViewer.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


viewerClose.addEventListener("click", () => {

    closeViewer();

});


imageViewer.addEventListener("click", (event) => {

    if (event.target === imageViewer) {

        closeViewer();

    }

});


document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        imageViewer.classList.contains("active")
    ) {

        closeViewer();

    }

});


function closeViewer() {

    imageViewer.classList.remove("active");

    document.body.style.overflow = "";

}


// =============================
// TIME TOGETHER
// =============================

const relationshipStart =
    new Date("2026-08-09T00:00:00");


// Fun-fact rates
// These are estimates for the website's fun facts.

const heartbeatsPerMinute = 70;
const breathsPerMinute = 16;
const pizzasPerSecond = 15;
const coffeesPerMinute = 15000;


function updateTimeTogether() {

    const now = new Date();

    // =============================
    // CALENDAR TIME
    // =============================

    let years =
        now.getFullYear() -
        relationshipStart.getFullYear();

    let months =
        now.getMonth() -
        relationshipStart.getMonth();

    let days =
        now.getDate() -
        relationshipStart.getDate();


    if (days < 0) {

        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();

    }


    if (months < 0) {

        years--;

        months += 12;

    }


    // =============================
    // TIME AFTER YEARS / MONTHS / DAYS
    // =============================

    const calendarStart = new Date(
        relationshipStart.getFullYear() + years,
        relationshipStart.getMonth() + months,
        relationshipStart.getDate()
    );


    let remaining =
        now - calendarStart;


    const hours = Math.floor(
        remaining / (1000 * 60 * 60)
    );

    remaining %= 1000 * 60 * 60;


    const minutes = Math.floor(
        remaining / (1000 * 60)
    );

    remaining %= 1000 * 60;


    const seconds = Math.floor(
        remaining / 1000
    );


    const milliseconds =
        remaining % 1000;


    // =============================
    // MAIN COUNTER
    // =============================

    document.getElementById("years").textContent =
        years;

    document.getElementById("months").textContent =
        months;

    document.getElementById("days").textContent =
        days;

    document.getElementById("hours").textContent =
        hours;

    document.getElementById("minutes").textContent =
        minutes;

    document.getElementById("seconds").textContent =
        seconds;

    document.getElementById("milliseconds").textContent =
        milliseconds
            .toString()
            .padStart(3, "0");


    // =============================
    // TOTAL TIME
    // =============================

    const totalMilliseconds =
        now - relationshipStart;

    const totalSeconds =
        totalMilliseconds / 1000;

    const totalMinutes =
        totalSeconds / 60;


    // =============================
    // FUN FACTS
    // =============================

    // Estimated heartbeats

    const heartbeats = Math.floor(
        totalMinutes *
        heartbeatsPerMinute
    );


    // Estimated breaths

    const breaths = Math.floor(
        totalMinutes *
        breathsPerMinute
    );


    // Estimated pizzas made worldwide

    const pizzas = Math.floor(
        totalSeconds *
        pizzasPerSecond
    );


    // How many 3-minute songs
    // could have played

    const songs = Math.floor(
        totalSeconds / 180
    );


    // Approximate Earth rotations

    const earthRotations =
        totalSeconds / 86400;


    // Estimated cups of coffee

    const coffees = Math.floor(
        totalMinutes *
        coffeesPerMinute
    );


    // =============================
    // LOVE COUNTER
    // =============================

    // 5 thoughts per second
    // since the relationship began

    const Love = Math.floor(
        totalSeconds * 5
    );


    // =============================
    // DISPLAY FACTS
    // =============================

    document.getElementById("heartbeats").textContent =
        heartbeats.toLocaleString();


    document.getElementById("breaths").textContent =
        breaths.toLocaleString();


    document.getElementById("pizzas").textContent =
        pizzas.toLocaleString();


    document.getElementById("songs").textContent =
        songs.toLocaleString();


    document.getElementById("earthRotations").textContent =
        earthRotations.toFixed(3);


    document.getElementById("coffees").textContent =
        coffees.toLocaleString();


    // Display Love counter

    document.getElementById("Love").textContent =
        Love.toLocaleString();

}


// Run immediately

updateTimeTogether();


// Keep everything constantly updating

setInterval(updateTimeTogether, 50);