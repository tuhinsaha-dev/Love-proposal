const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const subText = document.getElementById("subText");
const mainImage = document.getElementById("mainImage");

let noCount = 0;


/* =========================
   VIDEO SEQUENCE
========================= */

const videos = [
    "GIF1.mp4",
    "GIF2.mp4",
    "GIF3.mp4",
    "GIF4.mp4",
    "GIF5.mp4"
];

window.addEventListener("DOMContentLoaded", () => {
    mainImage.src = "./GIF1.mp4";
    mainImage.load();
    mainImage.play().catch(() => {});

    question.textContent = "DO you love me? 🤗";
    subText.textContent = "From Someone Special 💌";
});


/* =========================
   NO BUTTON
========================= */

function noClicked() {

    noCount++;


    /* =========================
       NEXT VIDEO
    ========================= */

    const videoIndex =
        Math.min(noCount, videos.length - 1);

    mainImage.src = videos[videoIndex];

    mainImage.load();

    mainImage.play().catch(() => {});


    /* =========================
       TEXT SEQUENCE
    ========================= */

    const messages = [

        {
            title: "DO you love me? 🤗",
            sub: "From Someone Special 💌"
        },

        {
            title: "Please think again! 🙄",
            sub: "Ek baar aur soch lo 🥺"
        },

        {
            title: "Please maan jao na 😣",
            sub: "Kyu aisa kar rahi ho 😣"
        },

        {
            title: "Baby pleaseee 🥺",
            sub: "Itna bhav mat khao 🥺"
        },

        {
            title: "Ab toh Yes bol do na ❤️",
            sub: "No option hi nahi hai 🥺❤️"
        }

    ];


    const messageIndex =
        Math.min(noCount, messages.length - 1);


    question.textContent =
        messages[messageIndex].title;

    subText.textContent =
        messages[messageIndex].sub;


    /* =========================
       NO BUTTON MOVES
    ========================= */

    noBtn.style.position = "fixed";

    const padding = 20;

    const maxX =
        window.innerWidth -
        noBtn.offsetWidth -
        padding;

    const maxY =
        window.innerHeight -
        noBtn.offsetHeight -
        padding;

    const randomX =
        Math.max(
            padding,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            padding,
            Math.random() * maxY
        );

    noBtn.style.left =
        `${randomX}px`;

    noBtn.style.top =
        `${randomY}px`;


    /* =========================
       YES BUTTON GETS BIGGER
    ========================= */

    const scale =
        1 + noCount * 0.15;

    yesBtn.style.transform =
        `scale(${scale})`;


    /* =========================
       LAST STEP
    ========================= */

    if (noCount >= videos.length - 1) {

        noBtn.style.display = "none";

        question.textContent =
            "Ab toh Yes bol do na ❤️";

        subText.textContent =
            "No option hi nahi hai 🥺❤️";
    }
}


/* =========================
   YES BUTTON
========================= */

function yesClicked() {

    /* Show GIF5 */
    mainImage.src = "GIF5.mp4";

    mainImage.load();

    mainImage.play().catch(() => {});


    /* Final message */
    question.textContent =
        "Yayyyy! ❤️🥺";

    subText.textContent =
        "I knew you would say Yes! 🥰❤️";


    /* Hide buttons */
    yesBtn.style.display = "none";
    noBtn.style.display = "none";


    /* Hearts */
    createHearts();
}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            "-30px";

        heart.style.fontSize =
            (18 + Math.random() * 22) + "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "1000";

        heart.style.animation =
            `heartFloat ${2 + Math.random() * 2}s ease-out forwards`;

        document.body.appendChild(heart);


        setTimeout(() => {
            heart.remove();
        }, 4500);
    }
}