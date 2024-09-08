function toggleStyleSheet(){
    var styleEle = document.getElementById("mainStyleSheet");
    var currentstyle = styleEle.getAttribute("href");
    var newStyle;
    if(currentstyle == "newStyle.css"){
        newStyle = "base_style.css"
    }
    else{
        newStyle = "newStyle.css"
    }
    styleEle.setAttribute("href", newStyle);
    localStorage.setItem("stylesheet", newStyle);
}
window.onload = function(){
    var savedSty = localStorage.getItem("stylesheet");
    var styleEle =  document.getElementById("mainStyleSheet")
    if(savedSty){
        styleEle.setAttribute("href", savedSty);
    }
}