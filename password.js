
function validate() {
    let password1 = document.getElementById('pass1').value;
    let password2 = document.getElementById('pass2').value;

    if (password1.length < 8)
        alert("Your password must be at least 8 characters long");
    else { 
        if (password1 === password2)
            alert("Success!");
        else
            alert("Your passwords must match exactly");
    }
}