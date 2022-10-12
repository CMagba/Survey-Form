// display selection prompt if user chose yes on endwalker question
function selectDisplay() {
    // set userSelect var as 'yes' radio button
    let userSelect = document.getElementById('yes');
    
    // if userSelect is chosen
    if(userSelect.checked) {
        // display selection prompt to user
        document.getElementById('expansion-label').style.display = 'block';
    }
    // otherwise, keep prompt hidden
    else {
        document.getElementById('expansion-label').style.display = 'none';
    }
}


// display explanation prompt if user chose expansion in selection question
function textboxDisplay(selected) {
    // if the user chose an answer that is not 'None' or 'Unsure'
    if(selected.options[selected.selectedIndex].value != 'None' && selected.options[selected.selectedIndex].value != 'Unsure' ) {
        // display explanation prompt to user
        document.getElementById('expansion-desc-label').style.display = 'block';
    }
    // otherwise, keep prompt hidden
    else {
        document.getElementById('expansion-desc-label').style.display = 'none';
    }
}