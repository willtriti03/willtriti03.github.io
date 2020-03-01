var check = false;

function btnClicked() {
    if (!check) {
        check = true;
    } else {
        check = false;
        window.history.back();
        
    }
}
