// =============================
// T4NGO STUDIOS
// WEBSITE SCRIPT
// =============================


document.addEventListener("DOMContentLoaded", () => {

    console.log("TEMPLATE");


    // =============================
    // GALLERY
    // =============================

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


    // Only run gallery code if the
    // gallery viewer exists.

    if (
        imageViewer &&
        viewerImage &&
        viewerDescription &&
        viewerClose
    ) {

        galleryImages.forEach((image) => {

            image.addEventListener("click", () => {

                viewerImage.src =
                    image.src;

                viewerImage.alt =
                    image.alt;

                viewerDescription.textContent =
                    image.dataset.description || "";

                imageViewer.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            });

        });


        viewerClose.addEventListener(
            "click",
            () => {

                closeViewer();

            }
        );


        imageViewer.addEventListener(
            "click",
            (event) => {

                if (
                    event.target ===
                    imageViewer
                ) {

                    closeViewer();

                }

            }
        );

    }


    function closeViewer() {

        if (imageViewer) {

            imageViewer.classList.remove(
                "active"
            );

        }

        document.body.style.overflow =
            "";

    }


    // =============================
    // TIME TOGETHER
    // =============================

    const relationshipStart =
        new Date("2026-08-09T00:00:00");


    // =============================
    // FUN FACT RATES
    // =============================

    const heartbeatsPerMinute = 70;

    const breathsPerMinute = 16;

    const pizzasPerSecond = 15;

    const coffeesPerMinute = 15000;


    // =============================
    // UPDATE TIME TOGETHER
    // =============================

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

            const previousMonth =
                new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    0
                );

            days +=
                previousMonth.getDate();

        }


        if (months < 0) {

            years--;

            months += 12;

        }


        // =============================
        // TIME AFTER YEARS / MONTHS / DAYS
        // =============================

        const calendarStart =
            new Date(
                relationshipStart.getFullYear() + years,
                relationshipStart.getMonth() + months,
                relationshipStart.getDate()
            );


        let remaining =
            now - calendarStart;


        const hours =
            Math.floor(
                remaining /
                (1000 * 60 * 60)
            );


        remaining %=
            1000 * 60 * 60;


        const minutes =
            Math.floor(
                remaining /
                (1000 * 60)
            );


        remaining %=
            1000 * 60;


        const seconds =
            Math.floor(
                remaining / 1000
            );


        const milliseconds =
            remaining % 1000;


        // =============================
        // MAIN COUNTER
        // =============================

        const yearsElement =
            document.getElementById("years");

        const monthsElement =
            document.getElementById("months");

        const daysElement =
            document.getElementById("days");

        const hoursElement =
            document.getElementById("hours");

        const minutesElement =
            document.getElementById("minutes");

        const secondsElement =
            document.getElementById("seconds");

        const millisecondsElement =
            document.getElementById("milliseconds");


        if (yearsElement)
            yearsElement.textContent = years;

        if (monthsElement)
            monthsElement.textContent = months;

        if (daysElement)
            daysElement.textContent = days;

        if (hoursElement)
            hoursElement.textContent = hours;

        if (minutesElement)
            minutesElement.textContent = minutes;

        if (secondsElement)
            secondsElement.textContent = seconds;

        if (millisecondsElement) {

            millisecondsElement.textContent =
                milliseconds
                    .toString()
                    .padStart(3, "0");

        }


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

        const heartbeats =
            Math.floor(
                totalMinutes *
                heartbeatsPerMinute
            );


        const breaths =
            Math.floor(
                totalMinutes *
                breathsPerMinute
            );


        const pizzas =
            Math.floor(
                totalSeconds *
                pizzasPerSecond
            );


        const songs =
            Math.floor(
                totalSeconds / 180
            );


        const earthRotations =
            totalSeconds / 86400;


        const coffees =
            Math.floor(
                totalMinutes *
                coffeesPerMinute
            );


        // =============================
        // LOVE COUNTER
        // =============================

        const Love =
            Math.floor(
                totalSeconds * 5
            );


        // =============================
        // DISPLAY FUN FACTS
        // =============================

        const heartbeatsElement =
            document.getElementById("heartbeats");

        const breathsElement =
            document.getElementById("breaths");

        const pizzasElement =
            document.getElementById("pizzas");

        const songsElement =
            document.getElementById("songs");

        const earthRotationsElement =
            document.getElementById("earthRotations");

        const coffeesElement =
            document.getElementById("coffees");

        const LoveElement =
            document.getElementById("Love");


        if (heartbeatsElement) {

            heartbeatsElement.textContent =
                heartbeats.toLocaleString();

        }


        if (breathsElement) {

            breathsElement.textContent =
                breaths.toLocaleString();

        }


        if (pizzasElement) {

            pizzasElement.textContent =
                pizzas.toLocaleString();

        }


        if (songsElement) {

            songsElement.textContent =
                songs.toLocaleString();

        }


        if (earthRotationsElement) {

            earthRotationsElement.textContent =
                earthRotations.toFixed(3);

        }


        if (coffeesElement) {

            coffeesElement.textContent =
                coffees.toLocaleString();

        }


        if (LoveElement) {

            LoveElement.textContent =
                Love.toLocaleString();

        }

    }


 // Run immediately

updateTimeTogether();


// Keep everything constantly updating

setInterval(
    updateTimeTogether,
    50
);


// =============================
// COUPLES QUESTIONS
// =============================

const questions = [

    "What’s a small thing that means a lot to you in our relationship?",
    "What’s a memory of us that will always make you laugh?",
    "Describe the feeling you get when your partner calls you good boy/girl.",
    "What’s something we do that feels very “us”?",
    "What’s the most “me” thing I do?",
    "What’s one moment in our relationship you think about more than I probably realize?",
    "What’s a tiny tradition we have that you secretly love?",
    "What’s something about our relationship that makes you feel proud?",
    "What’s one thing our relationship has taught you?",
    "What’s something about our relationship you hope never goes away?",
    "What do you wish we did more of together?",
    "What’s one thing you think we do really well as a couple?",
    "What’s your favorite phase of our relationship so far?",
    "What’s one random thing that always makes you think of me?",
    "What’s one little way you like to show me love that I might not notice?",
    "What’s something you think we’ll still be doing together when we’re old?",

    "What’s something most people misunderstand about you?",
    "What’s one skill you’ve always wanted to learn?",
    "What is my love language?",
    "What’s your ideal way to spend a completely free weekend?",
    "Describe yourself in three words.",
    "What’s the last new thing you learned about me?",
    "What’s the most surprising thing you’ve learned about me?",
    "What celebrity could you picture me being friends with?",
    "What’s one topic I could talk for hours about?",
    "What’s something you think I get wrong about you?",
    "What’s one part of your routine that makes you feel most like yourself?",

    "If I walked into a room with every person I’ve ever met, who would I look for first? You can’t say you.",
    "What food am I most likely to sneak out of the fridge?",
    "What’s the last thing that made you laugh uncontrollably?",
    "Describe me using three emojis.",
    "If our relationship had a theme song, what would it be?",
    "If we had to pick a couple’s costume, what would it be?",
    "If we had to compete on a game show, which one are we winning?",
    "What’s your most irrational fear?",
    "What’s your weirdest talent or party trick?",
    "What’s the most ridiculous thing we’ve ever argued about?",
    "If I turned into an animal for a day, what animal would it be?",
    "What’s a food we completely disagree on?",
    "What’s a completely random moment with me that lives rent-free in your head?",
    "What’s the most unnecessary thing you’re oddly passionate about?",
    "If I were to become famous, what would it be for?",
    "What on-screen couple would you compare our relationship to?",
    "Imitate how I react when I’m excited about something.",
    "What’s a hill you’ll die on that I still don’t agree with?",
    "What scent reminds you of me and why?",

    "What’s one way I’ve grown or changed since we started dating?",
    "What’s one thing you never did before dating me but do regularly now?",
    "What’s something I said once that you still think about?",
    "What’s the funniest memory you have from our relationship?",
    "What was your first impression of our dynamic as a couple?",
    "What’s a detail about one of our first dates that you still remember clearly?",
    "What’s something small I did early in our relationship that left a lasting impression?",
    "What’s your favorite photo of us, and what do you remember about that day?",
    "What advice would you give to your past self right before we met?",
    "What’s one date of ours that didn’t go as planned but turned out better because of it?",
    "Describe your first impression of me.",
    "What was your first “I think I like them” moment with me?",
    "What is one of your favorite early memories of us?",

    "What’s one thing we can do to step out of our comfort zone this week?",
    "What’s one new thing we can do this week?",
    "What’s one thing you hope we’re both better at a year from now?",
    "What’s a new ritual or habit we could start this month?",
    "What’s a dream trip we haven’t taken yet but absolutely should?",
    "What’s a goal you’re working toward that I could support more?",
    "What’s something we could do together that would scare us in a good way?",
    "What do you imagine will matter most to us in five years?",
    "What’s a “someday” idea you’d actually love to start planning now?",
    "If we wrote a bucket list, what’s going on the top?",
    "What’s something we should say yes to more often?",
    "If we could live together in any other city, what would you choose?",

    "What do you think my favorite feature of yours is, physical and emotional?",
    "What’s one non-negotiable for you in our relationship?",
    "What’s one thing I do that makes you feel loved or appreciated?",
    "What’s your favorite date we’ve been on?",
    "What’s a question you’ve wanted to ask me but haven’t?",
    "What’s a phrase or saying of mine that’s part of your vocabulary now?",
    "What’s something you’ve caught yourself doing that you picked up from me?",
    "What’s something you hope never changes about me, even as we change?",
    "What’s one weird hill you think I’d die on?",
    "What’s one thing we completely disagree on, but have learned to live with?",
    "What’s one thing you miss about the early days of our relationship?",
    "What’s one thing that surprised you about my personality?",
    "What’s an everyday habit of mine that makes you laugh?",
    "What quality of mine do you wish you had?",
    "What’s something you’ve noticed about me that I don’t give myself enough credit for?",

    // a few more sexualish ones
    "What’s your favorite way I touch you that instantly turns you on?",
    "Describe the exact feeling you get when I whisper something dirty in your ear.",
    "What’s one thing I do in bed (or leading up to it) that makes you melt every single time?",
    "If you could request one specific kind of kiss from me right now, what would it be?",
    "What’s a soft, teasing thing I could say or do that would drive you a little crazy?",
    "When do you feel the most desired by me, and what am I usually doing in that moment?"

];


// =============================
// QUESTION POOL
// =============================

let availableQuestions =
    [...questions];


// =============================
// QUESTION HISTORY
// =============================

// Stores every question that has
// been shown during this session.

let questionHistory = [];


// Current position inside history.

let currentQuestionIndex = -1;


// Number of questions that have
// actually been drawn.

let questionsAsked = 0;


// =============================
// GET RANDOM QUESTION
// =============================

function getRandomQuestion() {

    // Refill only after every
    // question has been used.

    if (
        availableQuestions.length === 0
    ) {

        availableQuestions =
            [...questions];

    }


    const randomIndex =
        Math.floor(
            Math.random() *
            availableQuestions.length
        );


    const question =
        availableQuestions.splice(
            randomIndex,
            1
        )[0];


    return question;

}


// =============================
// QUESTION ELEMENTS
// =============================

const questionDeck =
    document.getElementById(
        "questionDeck"
    );

const questionOverlay =
    document.getElementById(
        "questionOverlay"
    );

const questionClose =
    document.getElementById(
        "questionClose"
    );

const questionCard =
    document.getElementById(
        "questionCard"
    );

const questionText =
    document.getElementById(
        "questionText"
    );

const questionNumber =
    document.getElementById(
        "questionNumber"
    );

const nextQuestion =
    document.getElementById(
        "nextQuestion"
    );

const lastQuestion =
    document.getElementById(
        "lastQuestion"
    );


// =============================
// CHECK QUESTION HTML
// =============================

if (
    questionDeck &&
    questionOverlay &&
    questionClose &&
    questionCard &&
    questionText &&
    questionNumber &&
    nextQuestion &&
    lastQuestion
) {


    // =============================
    // UPDATE LAST BUTTON
    // =============================

    function updateLastButton() {

        lastQuestion.disabled =
            currentQuestionIndex <= 0;

    }


    // =============================
    // DISPLAY QUESTION
    // =============================

    function displayQuestion(
        question,
        number
    ) {

        questionText.textContent =
            question;


        questionNumber.textContent =
            String(number)
                .padStart(2, "0");


        // Restart animation

        questionCard.classList.remove(
            "question-new"
        );


        void questionCard.offsetWidth;


        questionCard.classList.add(
            "question-new"
        );


        // Show overlay

        questionOverlay.classList.add(
            "active"
        );


        // Stop page scrolling

        document.body.style.overflow =
            "hidden";


        // Update Last Question button

        updateLastButton();

    }


    // =============================
    // SHOW NEW QUESTION
    // =============================

    function showQuestion() {

        // If we've gone backwards in
        // history, remove the "future"
        // history before adding a new one.

        if (
            currentQuestionIndex <
            questionHistory.length - 1
        ) {

            questionHistory =
                questionHistory.slice(
                    0,
                    currentQuestionIndex + 1
                );

        }


        const question =
            getRandomQuestion();


        questionHistory.push(
            question
        );


        currentQuestionIndex =
            questionHistory.length - 1;


        questionsAsked++;


        displayQuestion(
            question,
            questionsAsked
        );

    }


    // =============================
    // LAST QUESTION
    // =============================

    function showLastQuestion() {

        // Already at the beginning.

        if (
            currentQuestionIndex <= 0
        ) {

            return;

        }


        currentQuestionIndex--;


        const previousQuestion =
            questionHistory[
                currentQuestionIndex
            ];


        displayQuestion(
            previousQuestion,
            currentQuestionIndex + 1
        );

    }


    // =============================
    // OPEN DECK
    // =============================

    questionDeck.addEventListener(
        "click",
        () => {

            // First question.

            if (
                questionHistory.length === 0
            ) {

                showQuestion();

            }
            else {

                // If the user previously
                // went backwards, continue
                // forward through history.

                if (
                    currentQuestionIndex <
                    questionHistory.length - 1
                ) {

                    currentQuestionIndex++;


                    displayQuestion(
                        questionHistory[
                            currentQuestionIndex
                        ],
                        currentQuestionIndex + 1
                    );

                }
                else {

                    showQuestion();

                }

            }

        }
    );


    // =============================
    // NEXT QUESTION
    // =============================

    nextQuestion.addEventListener(
        "click",
        () => {

            // If there is already a
            // question ahead in history,
            // move forward to it.

            if (
                currentQuestionIndex <
                questionHistory.length - 1
            ) {

                currentQuestionIndex++;


                displayQuestion(
                    questionHistory[
                        currentQuestionIndex
                    ],
                    currentQuestionIndex + 1
                );

            }
            else {

                // Otherwise draw a
                // completely new question.

                showQuestion();

            }

        }
    );


    // =============================
    // LAST QUESTION BUTTON
    // =============================

    lastQuestion.addEventListener(
        "click",
        showLastQuestion
    );


    // =============================
    // CLOSE QUESTIONS
    // =============================

    function closeQuestions() {

        questionOverlay.classList.remove(
            "active"
        );


        document.body.style.overflow =
            "";

    }


    questionClose.addEventListener(
        "click",
        closeQuestions
    );


    // =============================
    // CLICK OUTSIDE CARD
    // =============================

    questionOverlay.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                questionOverlay
            ) {

                closeQuestions();

            }

        }
    );


    // =============================
    // ESCAPE
    // =============================

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                questionOverlay.classList.contains(
                    "active"
                )
            ) {

                closeQuestions();

            }

        }
    );


    // =============================
    // INITIAL BUTTON STATE
    // =============================

    updateLastButton();


    // =============================
    // DEBUG
    // =============================

    console.log(
        "Couples Questions loaded:",
        questions.length,
        "questions"
    );

}
else {

    console.warn(
        "Couples Questions HTML was not found."
    );

}

});
