const smileBtn = document.getElementById("smileBtn");
const options = document.getElementById("options");
const sadBtn = document.getElementById("sadBtn");
const happyBtn = document.getElementById("happyBtn");
const output = document.getElementById("output");
const bgMusic = document.getElementById("bgMusic");

const shayaris = [
    "Tere bina adhura sa lagta hai sab kuch ❤️",
    "Dil ki baat kehne ka mauka de do 🥰",
    "Teri yaadon me kho jaata hoon 💕",
    "Tujhe har pal apne saath chahta hoon 😘"
];

const emojis = ["😊", "🥺", "💖", "😍", "💌"];

const loveMessages = [
    "Tum meri zindagi ki sabse khoobsurat wajah ho ❤️",
    "Mujhe tumse aur sirf tumse pyar hai 💘",
    "Ek secret: Tumhare bina sab suna suna lagta hai 😍"
];

smileBtn.addEventListener("click", function() {
    bgMusic.play();
    smileBtn.style.display = "none";
    options.classList.remove("hidden");
});

sadBtn.addEventListener("click", function() {
    const randomShayari = shayaris[Math.floor(Math.random() * shayaris.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    output.innerHTML = `${randomShayari} ${randomEmoji}`;
});

happyBtn.addEventListener("click", function() {
    const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    output.innerHTML = `🎁🍫 ${randomMessage} 🍫🎁`;
});