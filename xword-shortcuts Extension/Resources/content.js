function getPauseOrContinueButton() {
    let button = document.querySelector('[aria-label="Timer Pause Button"]');
    if (!button) {
        button = document.querySelector('[aria-label="Continue"]');
    }
    return button;
}

function getPencilButton() {
    let pencil = document.querySelector('[class="xwd__toolbar_icon--pencil-active"]');
    if (!pencil) {
        pencil = document.querySelector('[class="xwd__toolbar_icon--pencil"]');
    }
    return pencil?.parentNode;
}

window.addEventListener("keyup", function(event) {
    if (event.key === "Control") {
        // pause/unpause
        let button = getPauseOrContinueButton();
        if (button) {
            button.click();
        } else {
            console.log("No pause or continue button found")
        }
    } else if (event.key === "Alt") {
        // toggle pencil mode
        let button = getPencilButton();
        if (button) {
            button.click();
        } else {
            console.log("No pencil button found");
        }
    }
});
