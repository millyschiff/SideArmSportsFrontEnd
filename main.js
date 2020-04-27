const hiddenburger = document.querySelector('.hiddenBurger i');
const container = document.querySelector('.container');
const buttonObj = document.querySelector('.collapsible');
const content = document.getElementById('content');
const sidebarList = document.getElementById('sidebarList');
const sidebar = document.getElementById('sidebar');

//function for toggling burger
function toggleBurger() {
    hiddenburger.classList.toggle('fa-bars');
    hiddenburger.classList.toggle('fa-times');
    container.classList.toggle('nav-active');
}

//function for toggling teams
function toggleTeams(){
    if(content.style.height){
        content.style.height = null;
        buttonObj.style.backgroundColor = "#036a38"
        buttonObj.style.height = "100%";
    } else {
        content.style.height = "100%";
        buttonObj.style.backgroundColor = "#f2a900"
        buttonObj.style.height = "75px";
    }
}

function toggleSidebar() {
    if(sidebarList.style.height) {
        sidebarList.style.height = null;
        sidebarList.style.width = null;
        sidebar.style.height = "50px";
    } else {
        sidebarList.style.height = "100%";
        sidebarList.style.width="100%";
        sidebar.style.height = "100%";
    }
}

//on click event function call 
hiddenburger.addEventListener('click', function() {
    toggleBurger();
});

buttonObj.addEventListener('click', function() {
    toggleTeams();
    toggleSidebar();
});