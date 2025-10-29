function Moodreader() {
    const moodField = document.getElementById("mood-input");
    let mood = moodField.value.trim();


    if (mood.toLowerCase() === "happy") {
        mood = "I love that you're happy, Alex!";
        document.body.style.backgroundColor = "lightyellow";
    }
    if (mood.toLowerCase() === "sad") {
        mood = "I'm here. Let it out.";
        document.body.style.backgroundColor = "lightblue";
    }
    if (mood.toLowerCase() === "angry") {
        mood = "Breathe. I’ll take the brunt of it for you.";
        document.body.style.backgroundColor = "darkred";
    }
    else if (mood === "") {
        mood = "I need more data…";
        document.body.style.backgroundColor = "gray";
    }


    const title = document.getElementById("main-title");
    // Add fade-out
    title.classList.remove("show");  // reset fade
    title.offsetHeight; // force reflow
    setTimeout(() => {
        title.textContent = `Hey girl, ${mood}`;
        title.classList.add("show");   // triggers the fade-in
        console.log("Greeting changed to:", mood);
    }, 150);

    moodField.value = ""; // This clears the input box
    localStorage.setItem("userMood", mood);
}
window.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("mood-input");

    inputField.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            Moodreader();
        }
    });
    const saveMood = localStorage.getItem("userMood");

    if (saveMood) {
        const title = document.getElementById("main-title");
        title.textContent = `You're back. ${saveMood}`;
        title.classList.add("show");
        title.classList.add("fade");
        if (saveMood === "I love that you're happy, Alex!") {
            document.body.style.backgroundColor = "lightyellow";
        } else if (saveMood === "I'm here. Let it out.") {
            document.body.style.backgroundColor = "lightblue";
        } else if (saveMood === "Breathe. I’ll take the brunt of it for you.") {
            document.body.style.backgroundColor = "darkred";
        }
    }
});
function forgetMood() {
    localStorage.removeItem("userMood");
    const title = document.getElementById("main-title");
    title.textContent = "How... are you? Today?";
}