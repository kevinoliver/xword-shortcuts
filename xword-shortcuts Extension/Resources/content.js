function findButtonByPattern(patterns) {
    const normalizedPatterns = patterns.map(pattern => pattern.toLowerCase());
    const buttons = Array.from(document.querySelectorAll('button, [role="button"]'));
    return buttons.find(button => {
        const label = (
            button.getAttribute('aria-label') ||
            button.getAttribute('title') ||
            button.textContent ||
            ''
        ).toLowerCase();
        return normalizedPatterns.some(pattern => label.includes(pattern));
    });
}

function getPauseOrContinueButton() {
    const directSelector =
        'button[aria-label="Timer Pause Button"], button[aria-label="Pause"], button[aria-label="Resume"], button[aria-label="Continue"], button[aria-label*="Pause"], button[aria-label*="Resume"], button[aria-label*="Continue"]';
    return document.querySelector(directSelector) || findButtonByPattern(['pause', 'resume', 'continue']);
}

function getPencilButton() {
    const directSelector =
        'button[aria-label="Pencil"], button[title="Pencil"], button[aria-label*="Pencil"], button[title*="Pencil"], [role="button"][aria-label*="Pencil"], [role="button"][title*="Pencil"], button[class*="pencil"], [class*="pencil"]';
    return document.querySelector(directSelector) || findButtonByPattern(['pencil']);
}

window.addEventListener('keyup', function(event) {
    if (event.key === 'Control') {
        // pause/unpause
        const button = getPauseOrContinueButton();
        if (button) {
            button.click();
        } else {
            console.log('No pause or continue button found');
        }
    } else if (event.key === 'Alt') {
        // toggle pencil mode
        const button = getPencilButton();
        if (button) {
            button.click();
        } else {
            console.log('No pencil button found');
        }
    }
});
