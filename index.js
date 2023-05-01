console.log("script")
document.querySelector('.arrow').style.display = "none";
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = "inline"
        document.querySelector('.arrow').style.display = "none"
    }
    else{
        document.querySelector('.ham').style.display = "none"
        setTimeout(() => {        
            document.querySelector('.arrow').style.display = "inline"
        }, 200);
    }
}

)


// >>>>>>popup javascript>>>>>>>>>>>>>>>>>>

let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}