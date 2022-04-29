//Creare variabili per richiamare gli elementi interessati (icona menu, nav e icona X)
const openMenu = document.getElementById(`open-menu`);
const menu = document.getElementById(`hamburger_menu`);
const closeMenu = document.getElementById(`close-menu`);
console.log(openMenu);
console.log(menu);
console.log(closeMenu);

//Al cliccare sull'icona del menù, verrà visualizzata la nav
openMenu.addEventListener(`click`,
    function() {
        menu.classList.add(`active`);
    }
);

// Al cliccare sull'icona della X, la nav scompare
closeMenu.addEventListener(`click`,
    function() {
        menu.classList.remove(`active`)
    }
);