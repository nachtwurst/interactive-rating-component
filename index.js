var clickedButton = null;
var chosenScore = null;

function getClickedButton(button) {
    if (clickedButton) {
        clickedButton.style.backgroundColor = '#2b323a';
        clickedButton.style.color = '#959eac';
    }
    button.style.backgroundColor = '#7C8798';
    button.style.color = 'white';

    clickedButton = button;
    chosenScore = button.textContent;
}

function ratingSubmit() {
    if (!clickedButton) {
        alert('Please choose a rating!');
        return;
    }
    document.getElementById('rating_component').style.display = "none";
    document.getElementById('sub_screen').style.display = "flex";
    document.getElementById('rate_num').textContent = 'You selected ' + chosenScore + ' out of 5';
}