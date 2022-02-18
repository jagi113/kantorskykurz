let liturgy = new URLSearchParams(window.location.search).get("liturgy");
let jan_column = document.getElementById("jan");
let basil_column = document.getElementById("basil");
let vpd_column = document.getElementById("vpd");
let liturgia;

var lits = document.querySelectorAll(".lit_option");
var spev = document.querySelectorAll(".spev");
let title = document.querySelector(".presentation .title");
let player = document.querySelector(".player");
let music = document.querySelector(".music");

let music_path = "images/liturgie/";
let audio_path = "audio/liturgie/";

let hymn_name = spev[0].getAttribute("name-value");
let hymn = spev[0].getAttribute("data-value");

(function LoadPage(){
    switch (liturgy) {
        case "jan":
            liturgia = "Liturgia sv. Jána Zlatoústeho"
            jan_column.style.display = "inline";
            basil_column.style.display = "none";
            vpd_column.style.display = "none";
            break;
        case "basil":
            liturgia = "Liturgia sv. Bazila Veľkého"
            hymn_name = "Milosť pokoja";
            hymn = "milost_pokoja";
            jan_column.style.display = "none";
            basil_column.style.display = "inline";
            vpd_column.style.display = "none";
            break;
        case "vpd":
            liturgia = "Služba vopred posvätených darov"
            hymn = "vpd_amen";
            jan_column.style.display = "none";
            basil_column.style.display = "none";
            vpd_column.style.display = "inline";
            break;
    }
    
    title.innerText = `${liturgia} - ${hymn_name}`;
    music.src = `${music_path + hymn}.png`;
    player.src = `${audio_path + hymn}.mp3`;
})();





lits.forEach(lit => {
    lit.addEventListener("click", function (event) {
        liturgy = lit.getAttribute('data-value')
        switch (liturgy) {
            case "jan":
                liturgia = "Liturgia sv. Jána Zlatoústeho"
                hymn_name = spev[0].getAttribute("name-value");
                hymn = "amen";
                jan_column.style.display = "inline";
                basil_column.style.display = "none";
                vpd_column.style.display = "none";
                break;
            case "basil":
                liturgia = "Liturgia sv. Bazila Veľkého"
                hymn_name = "Milosť pokoja";
                hymn = "milost_pokoja";
                jan_column.style.display = "none";
                basil_column.style.display = "inline";
                vpd_column.style.display = "none";
                break;
            case "vpd":
                hymn_name = 'Jekténia - krátke a dlhé "Amen"';
                hymn = "vpd_amen";
                liturgia = "Služba vopred posvätených darov"
                jan_column.style.display = "none";
                basil_column.style.display = "none";
                vpd_column.style.display = "inline";
                break;
        }
        
        title.innerText = `${liturgia} - ${hymn_name}`;
        music.src = `${music_path + hymn}.png`;
        player.src = `${audio_path + hymn}.mp3`;
    })
})

spev.forEach(sp => {
    sp.addEventListener("click", function (event) {
        hymn = sp.getAttribute('data-value');
        hymn_name= sp.getAttribute("name-value");;
        title.innerText = `${liturgia} - ${hymn_name}`;
        music.src = `${music_path + hymn}.png`;
        player.src = `${audio_path + hymn}.mp3`;
    })
})