//<div id="show-winner"></div>
//variabila showWinnerDiv tine tot divul cu id = show-winner. 
//variabila showHeroesBtn tine tot butonul
let showWinnerDiv = document.getElementById("show-winner"); 
let showHeroesBtn = document.getElementById("show-heros-btn");
let showHeroesContainer = document.getElementById("heroes-container");
let startFightBtn = document.getElementById("start-fight-btn");
let restartGameBtn = document.getElementById("restart-game");


showWinnerDiv.innerHTML = epicFight0.findWinner();
showHeroesBtn.addEventListener("click", showHeroesFunc); //click pe elementul showHeroesBtn vreau sa imi apeleze functia(myFunc fara paranteze rotunde ca sa se apeleze doar la click) :
startFightBtn.addEventListener("click", startFightFunc);
restartGameBtn.addEventListener("click", restartFunction);
function showHeroesFunc() {
    showHeroesContainer.classList.add("d-flex");
    showHeroesBtn.classList.add("d-none");
    startFightBtn.classList.add("d-block");
    restartGameBtn.classList.add("d-none")
}

function startFightFunc() {
    showHeroesContainer.classList.remove("d-flex");
    startFightBtn.classList.remove("d-block");

    showWinnerDiv.classList.add("d-block");
    restartGameBtn.classList.add('d-block');
    
}

function restartFunction() {
     window.location.reload();    
}