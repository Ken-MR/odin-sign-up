function validate() {
    let pass = document.getElementById('pass').value;
    let confirm = document.getElementById('confirm').value;

    if (pass !== confirm) {
        alert('Passwords must match!');
        return false;
    }

    return true;
}