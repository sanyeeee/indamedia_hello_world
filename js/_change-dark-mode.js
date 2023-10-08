
/**
 * Change between dark and light theme
 */
function changeThemeDarkMode() {
    let darkMode = localStorage.getItem('darkMode');

    if (!darkMode) {
        setDarkMode();
    } else {
        setLightMode();
    }
}

function setDarkMode() {
    $('#light_mode_btn').show();
    $('#dark_mode_btn').hide();
    $('.html-body').addClass('dark');

    localStorage.setItem('darkMode', 'dark');
}

function setLightMode() {
    $('#light_mode_btn').hide();
    $('#dark_mode_btn').show();
    $('.html-body').removeClass('dark');

    localStorage.removeItem('darkMode');
}

/**
 * Set theme on init
 */
$(document).ready(() => {
    let darkMode = localStorage.getItem('darkMode', 'dark');

    if (darkMode && darkMode === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
});
