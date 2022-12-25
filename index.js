
console.log(window.innerWidth);
console.log("This is screen width: " + screen.width);

let infoIcons = document.querySelectorAll("nav span");
let flexTop = document.querySelector(".flex-top");
let isIconClicked = false;

let maxNewSnowCount = 70;
const newSnowConstants = {
    className: "new-snow",
    borderRadius: "50%",
    backgroundColor: "#fff",
    heightWidth: "10px",
    position: "absolute"
};

infoIcons.forEach(function(eachSpan){
    eachSpan.addEventListener("click", function(){
        isIconClicked = true;

        if (this.classList[1] === "refresh-icon"){
            //To clear all children of specific node. Both below mentioned methods works.
            //document.querySelector(".snow-divs").innerHTML = "";
            document.querySelector(".snow-divs").replaceChildren();
        }

    //Turn isIconClicked back to false after 500ms delay
    setTimeout(function(){
        isIconClicked = false;
    }, 500)
        

    });
    
});

flexTop.addEventListener("click", function(e){
    console.log("position X: " + e.clientX + " position Y: " + e.clientY);
    
    if (! isIconClicked){
        snow(e.clientX, e.clientY);
    }
    
    
    //Remove old snow div from document if total new-snow div exceeds maxNewSnowCount 
    if (currentNewSnowCount() > maxNewSnowCount) {
        document.querySelector(".new-snow").remove();
    }
});


function snow(xValue, yValue){
    let newSnowDiv = document.createElement("div");
    newSnowDiv.className = newSnowConstants.className;
    newSnowDiv.style.borderRadius = newSnowConstants.borderRadius;
    newSnowDiv.style.backgroundColor = newSnowConstants.backgroundColor;
    newSnowDiv.style.height = newSnowConstants.heightWidth;
    newSnowDiv.style.width = newSnowConstants.heightWidth;
    newSnowDiv.style.position = newSnowConstants.position;
    //xValue is horizontal, yValue is vertical co-ordinate of the mouse
    newSnowDiv.style.top = yValue + "px";
    newSnowDiv.style.left = xValue + "px";

    // newSnowDiv.style.zIndex = "10";

    document.querySelector(".flex-top .snow-divs").appendChild(newSnowDiv);
}

//Return count of .new-snow div's
function currentNewSnowCount() {
    return document.querySelectorAll(".new-snow").length;
}



function checkAndSetDayBackground() {
    let newCurrentHour = new Date().getHours();

    if (newCurrentHour >= 6 && newCurrentHour < 18) {  
        document.querySelector(".flex-top").style.background = "linear-gradient(to bottom, #7bb3c6, #dcece8)";
        document.querySelector(".flex-bottom").style.background = "linear-gradient(to top, #fff, #dcece8)";
    }
}

checkAndSetDayBackground();


setInterval(checkAndSetDayBackground(), 1000*60*60);