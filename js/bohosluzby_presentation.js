let bohosluzba = new URLSearchParams(window.location.search).get("bohosluzba");
let vecieren_column = document.getElementById("vecieren");
let utieren_column = document.getElementById("utieren");
let vpd_column = document.getElementById("vpd");
let sluzenie;

var lits = document.querySelectorAll(".lit_option");
var spev = document.querySelectorAll(".spev");
let title = document.querySelector(".presentation .title");
let player = document.querySelector(".player");
let music = document.querySelector(".music");

let music_path = "images/bohosluzby/";
let audio_path = "audio/bohosluzby/";

let hymn_name = spev[0].getAttribute("name-value");
let hymn = spev[0].getAttribute("data-value");

(function LoadPage(){
    switch (bohosluzba) {
        case "vecieren":
            sluzenie = "Večiereň"
            vecieren_column.style.display = "inline";
            utieren_column.style.display = "none";
            vpd_column.style.display = "none";
            break;
        case "utieren":
            sluzenie = "Utiereň"
            hymn_name = "Milosť pokoja";
            hymn = "bazil_milost_pokoja";
            vecieren_column.style.display = "none";
            utieren_column.style.display = "inline";
            vpd_column.style.display = "none";
            break;
            /*
        case "vpd":
            liturgia = "Služba vopred posvätených darov"
            hymn = "vpd_amen";
            hymn_name = 'Jekténia - "Amen"'
            vecieren_column.style.display = "none";
            utieren_column.style.display = "none";
            vpd_column.style.display = "inline";
            break;*/
    }
    
    title.innerText = `${sluzenie} - ${hymn_name}`;
    music.src = `${music_path + bohosluzba}/${hymn}.png`;
    player.src = `${audio_path + bohosluzba}/${hymn}.mp3`;
})();





lits.forEach(lit => {
    lit.addEventListener("click", function (event) {
        bohosluzba = lit.getAttribute('data-value')
        switch (bohosluzba) {
            case "vecieren":
                sluzenie = "Večiereň"
                hymn_name = spev[0].getAttribute("name-value");
                hymn = spev[0].getAttribute("data-value");;
                vecieren_column.style.display = "inline";
                utieren_column.style.display = "none";
                vpd_column.style.display = "none";
                break;
            case "utieren":
                sluzenie = "Utiereň"
                hymn_name = "!!!Milosť pokoja";
                hymn = "bazil_milost_pokoja";
                vecieren_column.style.display = "none";
                utieren_column.style.display = "inline";
                vpd_column.style.display = "none";
                break;
                /*
            case "vpd":
                hymn_name = 'Jekténia - "Amen"';
                hymn = "vpd_amen";
                sluzenie = "Služba vopred posvätených darov"
                vecieren_column.style.display = "none";
                utieren_column.style.display = "none";
                vpd_column.style.display = "inline";
                break;*/
        }
        
        title.innerText = `${sluzenie} - ${hymn_name}`;
        music.src = `${music_path + bohosluzba}/${hymn}.png`;
        player.src = `${audio_path + bohosluzba}/${hymn}.mp3`;
    })
})

spev.forEach(sp => {
    sp.addEventListener("click", function (event) {
        hymn = sp.getAttribute('data-value');
        hymn_name= sp.getAttribute("name-value");;
        title.innerText = `${sluzenie} - ${hymn_name}`;
        music.src = `${music_path + bohosluzba}/${hymn}.png`;
        player.src = `${audio_path + bohosluzba}/${hymn}.mp3`;
    })
})