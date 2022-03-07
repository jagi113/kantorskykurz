let day = new URLSearchParams(window.location.search).get("day");
var normal_day = document.getElementById("normal_day");
var zosnuli = document.getElementById("zosnuli");
var stvrt = document.getElementById("stvrt");
console.log(stvrt)
var streda_piatok = document.getElementById("streda_piatok");

let den;
var lits = document.querySelectorAll(".lit_option");
var spev = document.querySelectorAll(".spev");
let title = document.querySelector(".presentation .title");
let player = document.querySelector(".player");
let music = document.querySelector(".music");

let music_path = "images/tyzden/";
let audio_path = "audio/tyzden/";

let hymn_name
let hymn

function find_den(){
    switch (day) {
        case "zosnuli":
            return "Za zosnulých";
        case "pondelok":
            return "Pondelok";
        case "utorok":
            return "Utorok";
        case "streda":
            return "Streda";
        case "stvrtok":
            return "Štvrtok";
        case "piatok":
            return "Piatok";
        case "sobota":
            return "Sobota";
    }
}

(function LoadPage(){
    den = find_den()
    hymn = "tropar"
    hymn_name = "tropár"
    switch (day) {
        case "stvrtok":
            normal_day.style.display = "none";
            zosnuli.style.display = "none";
            stvrt.style.display= "inline-block";
            streda_piatok.style.display= "none";
            hymn = "tropar_apostoli";
            hymn_name = "tropár apoštolom";
            break;
        case "zosnuli":
            normal_day.style.display = "none";
            zosnuli.style.display = "inline-block";
            stvrt.style.display= "none";
            streda_piatok.style.display= "none";
            break;
        case "streda":
            normal_day.style.display = "none";
            zosnuli.style.display = "none";
            stvrt.style.display= "none";
            streda_piatok.style.display= "inline-block";
            break;
        case "piatok":
            normal_day.style.display = "none";
            zosnuli.style.display = "none";
            stvrt.style.display= "none";
            streda_piatok.style.display= "inline-block";
            break;
        default:
            normal_day.style.display = "inline-block";
            zosnuli.style.display = "none";
            stvrt.style.display= "none";
            streda_piatok.style.display= "none";
            break;
    }
    
    title.innerText = `${den} - ${hymn_name}`;
    music.src = `${music_path + day}_${hymn}.png`;
    player.src = `${audio_path + day}_${hymn}.mp3`;
})();





lits.forEach(lit => {
    lit.addEventListener("click", function (event) {
        day = lit.getAttribute('data-value')
        den = find_den()
        hymn = "tropar"
        hymn_name = "tropár"
        switch (day) {
            case "stvrtok":
                normal_day.style.display = "none";
                zosnuli.style.display = "none";
                stvrt.style.display= "inline-block";
                streda_piatok.style.display= "none";
                hymn = "tropar_apostoli"
                hymn_name = "tropár apoštolom"
                break;
            case "zosnuli":
                normal_day.style.display = "none";
                zosnuli.style.display = "inline-block";
                stvrt.style.display= "none";
                streda_piatok.style.display= "none";
                break;
            case "streda":
                normal_day.style.display = "none";
                zosnuli.style.display = "none";
                stvrt.style.display= "none";
                streda_piatok.style.display= "inline-block";
                break;
            case "piatok":
                normal_day.style.display = "none";
                zosnuli.style.display = "none";
                stvrt.style.display= "none";
                streda_piatok.style.display= "inline-block";
                break;
            default:
                normal_day.style.display = "inline-block";
                zosnuli.style.display = "none";
                stvrt.style.display= "none";
                streda_piatok.style.display= "none";
                break;
        }
        
        title.innerText = `${den} - ${hymn_name}`;
        music.src = `${music_path + day}_${hymn}.png`;
        player.src = `${audio_path + day}_${hymn}.mp3`;
    })
})

spev.forEach(sp => {
    sp.addEventListener("click", function (event) {
        hymn = sp.getAttribute('data-value');
        hymn_name= sp.getAttribute("name-value");;
        title.innerText = `${den} - ${hymn_name}`;
        music.src = `${music_path + day}_${hymn}.png`;
        player.src = `${audio_path + day}_${hymn}.mp3`;
    })
})