const controlBtn = document.getElementById("controlBtn")
const progress = document.getElementById("progress")
const song = document.getElementById("song")
const backword = document.getElementById("backword")
const forward = document.getElementById("forword")

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function PlayPause() {
    if (controlBtn.classList.contains("fa-pause")) {
        song.pause()
        controlBtn.classList.remove("fa-pause")
        controlBtn.classList.add("fa-play")
    }
    else {
        song.play()
        controlBtn.classList.add("fa-pause")
        controlBtn.classList.remove("fa-play")
    }
}


song.addEventListener('ended', function () {
    controlBtn.classList.remove("fa-pause");
    controlBtn.classList.add("fa-play");
})

if (song.play()) {

    setInterval(() => {
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    controlBtn.classList.add("fa-pause")
    controlBtn.classList.remove("fa-play")
}


if (song.onended) {
    controlBtn.classList.remove("fa-pause")
    controlBtn.classList.add("fa-play")
}

forward.addEventListener("click", () => {
    const newTime = song.currentTime + 5;
    if (newTime < song.duration) {
        song.currentTime = newTime;
    } else {
        song.currentTime = song.duration;
    }
    if (controlBtn.classList.contains("fa-play")) {

        controlBtn.classList.add("fa-pause")
        controlBtn.classList.remove("fa-play")
    }

    song.play();
})


backword.addEventListener("click", () => {

    const newTime = song.currentTime - 5;
    if (newTime > song.duration) {
        song.currentTime = song.duration;
    }
    else {
        song.currentTime = newTime
    }
    song.play();
})


PlayPause()


