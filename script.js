
let DataArray = [
    ["Pet And Shop System","An advanced pet system featuring full integration with data storage, GUI, and visual pet effects, all optimized for high performance. Includes a dynamic shop system where players can purchase and equip weapons seamlessly.","https://www.youtube.com/embed/OEvN-b4ja7Y"],
    ["Battlegrounds m1 and block system","This system encompasses every aspect of battleground-style combat from perfect blocking and smooth attack sequences to precise hit detection. It ensures excellent performance and protection against exploits, featuring fluid visual and rock effects, instant animation playback, and clean, readable, modular scripts.","https://www.youtube.com/embed/gBzrab_PcrQ"],
    ["Physics-Based flight system","This physics-driven flight system is modeled after real-world aircraft mechanics to provide an authentic and butter-smooth flying experience. It’s carefully optimized to ensure top-tier performance and realism.","https://www.youtube.com/embed/IDhFz7ys79s"],
    ["Datasaving Harvesting system","A lightweight harvesting system that lets players gather and sell resources, with their coin balance automatically saved and loaded through a reliable datastore system.","https://www.youtube.com/embed/JcS6U6AUQzw"],

]


function Hamburg() {
    const navbar = document.querySelector(".DropDown");
    navbar.style.transform = "translateY(0px)"; // Slide down
}

function Cancel() {
    const navbar = document.querySelector(".DropDown");
    navbar.style.transform = "translateY(-400px)"; // Slide up
}

let ProjectNum = 0

function updateProject() {
    const [title, desc, video] = DataArray[ProjectNum];
    document.getElementById("CardTitle").textContent = title;
    document.getElementById("Desc").textContent = desc;

    const videoPlayer = document.getElementById("VideoPlayer");
    if(video !== "PlaceHolder") {
        videoPlayer.src = video;
    } else {
        videoPlayer.src = "";
    }
}

function Increase() {
    if (ProjectNum == DataArray.length -1 ){
        ProjectNum = 0
    }else{
        ProjectNum +=1;
    }
    
   updateProject();
}
function Decrease() {
    if (ProjectNum == 0 ){
        ProjectNum = DataArray.length -1
    }else{
        ProjectNum -=1;
    }
    
    updateProject();
}

const Increasebutton = document.getElementById("IncreaseArrow");
const DecreaseButton = document.getElementById("DecreaseButton");
const MobileIncButton = document.getElementById("MobIncreaseArrow");
const MobileDecButton = document.getElementById("MobDecreaseButton");

Increasebutton.addEventListener("click", function() {
    Increase();
});

MobileIncButton.addEventListener("click", function() {
    Increase();
});

DecreaseButton.addEventListener("click", function() {
    Decrease();
});

MobileDecButton.addEventListener("click", function() {
    Decrease();
});




document.querySelector(".hamburg").addEventListener("click", Hamburg);
document.querySelector(".Cancel").addEventListener("click", Cancel);

updateProject();

AOS.init({ offset: 0, once: true ,mirror: false,});

function Hamburg() {
    const navbar = document.querySelector(".DropDown");
    navbar.style.transform = "translateY(0px)"; // Slide down
}

function Cancel() {
    const navbar = document.querySelector(".DropDown");
    navbar.style.transform = "translateY(-400px)"; // Slide up
}

document.querySelector(".hamburg").addEventListener("click", Hamburg);
document.querySelector(".Cancel").addEventListener("click", Cancel);

