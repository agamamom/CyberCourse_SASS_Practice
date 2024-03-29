
/* truncate CardTitle */
window.addEventListener('load', function () {
    truncateCardTitle();
})
function truncateCardTitle() {
    var cardList = document.getElementsByClassName("card-title")
    for (var i = 0; i < cardList.length; i++) {
        var text = cardList[i].innerHTML;
        var newText = truncateString(text, 48);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }
}

/* Sidebar Mini*/
var toggleBtn = document.querySelector('.SidebarMini__button');
var sidebarMini = document.querySelector('.SidebarMini');
var switchBtn = document.querySelector('#checkbox-button');

toggleBtn.addEventListener('click', function () {
    sidebarMini.classList.toggle('is-opened');
});

switchBtn.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('darkMode');
});