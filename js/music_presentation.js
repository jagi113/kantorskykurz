var hlas = document.querySelectorAll(".hlas");
var spev = document.querySelectorAll(".spev");
let title = document.querySelector(".presentation .title");
let player = document.querySelector(".player")
let music = document.querySelector(".music")
let hl
let hymn = "tropar"
let music_path = "images/oktoich/music/"
let audio_path = "audio/hlasy/"
let name = "tropár"
let hlnum = new URLSearchParams(window.location.search).get("hlnum");

(function LoadPage(){
    console.log(hlnum)
    title.innerText = `${hlnum}. hlas - ${name}`;
    music.src = `${music_path + hlnum}_${hymn}.png`;
    player.src = `${audio_path + hlnum}_${hymn}.mp3`;
})();

hlas.forEach(hl => {
    hl.addEventListener("click", function (event) {
        hlnum = hl.getAttribute('data-value')
        title.innerText = `${hlnum}. hlas - ${name}`
        music.src = `${music_path + hlnum}_${hymn}.png`
        player.src = `${audio_path + hlnum}_${hymn}.mp3`
    })
})

spev.forEach(tone => {
    tone.addEventListener("click", function (event) {
        hymn = tone.getAttribute('data-value')
        music.src = `${music_path + hlnum}_${hymn}.png`
        player.src = `${audio_path + hlnum}_${hymn}.mp3`
        switch (hymn) {
            case "tropar":
                name = "tropár"
                break;
            case "kondak":
                name = "kondák"
                break;
            case "bohorodicnik":
                name = "bohorodičník"
                break;
            case "slava":
                name = "sláva i teraz"
                break;
            case "prokimen":
                name = "prokimen"
                break;
            case "dostojne":
                name = "Dôstojné"
                break;
            case "otcenas":
                name = "Otče náš"
                break;
            case "samohlas":
                name = "samohlas"
                break;
            case "ut_prokimen":
                name = "utierňový prokimen"
                break;
        }
        title.innerText = `${hlnum}. hlas - ${name}`
    })
})