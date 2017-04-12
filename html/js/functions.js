$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        toggleMenu();
    });
    $(".circle").click(function(){
        $(this).toggleClass("is-active");
    });
});
function closeModal() {
    toggle_visibility("modal");
    if ($("#form-signup").css("display") == "none") {
        toggle_visibility("form-login");
    } else {
        toggle_visibility("form-signup");
    }
}
function toggleSignup() {
    toggle_visibility("modal");
    toggle_visibility("form-signup");
}
function toggleLogin() {
    toggle_visibility("modal");
    toggle_visibility("form-login");
}
function toggleMenu() {
    $("#menu").toggleClass("is-active");
    // toggle_visibility("menu");
}
// Toggle display
function toggle_visibility(id) {
    var e = document.getElementById(id);
    e.style.display = ((e.style.display!=='none') ? 'none' : 'block');
}