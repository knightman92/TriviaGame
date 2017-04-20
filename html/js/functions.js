$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        toggleMenu();
    });
    $(".circle").click(function(){
        $(this).toggleClass("is-active");
    });
    $("#submit-login").click(function(){
        login('form-login','password');
    });
    $(".circle").click(function(){
        if ( $(this).hasClass("is-correct") ) {
            addPoint();
            console.log(numCorrectUser1);
        } else {
            addQuestionIncorrect( $(this).data("set"), $(this).data("answer") );
            console.log("Wrong");
        }

        // if last question
        var question = $(this).data("set");
        var nextQuestion = $(this).data("set").substring(0,12) + (currentQuestion+1);
        if ( question.indexOf("20") >= 0 ) {
            toggleResults();
            // show results
            console.log("Show results");
            // reset current question counter
            currentQuestion = 1;
        } else {
            // next question hide/show
            console.log(nextQuestion);
            toggle_visibility(question);
            toggle_visibility(nextQuestion);
            console.log("Next question");
            currentQuestion++;
        }
        $("#questiontracker").html("#" + currentQuestion + " of 20");
        $("#results-message").html("You answered " + numCorrectUser1 + " of 20 questions correctly.");
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


function login() {
    if ( $("#password-login").val() !== $("#signup-password").val() ) {
        badLogin();
    } else {
        goodLogin();
        // next page
        toggleLogin();
        togglePageMode();
    }
    // arguments: formId, elementName
    // document.getElementById("form-login").elements["password"].value
}
function signup() {
    firstName = $("#signup-first").val();
    lastName = $("#signup-last").val();
    username = $("#signup-username").val();
    password = $("#signup-password").val();

    toggleSignup();
}
function badLogin() {
    $("#password-login").addClass("is-active");
}
function goodLogin() {
    $("#password-login").removeClass("is-active");
}

function togglePageMode() {
    toggle_visibility("page-index");
    toggle_visibility("page-mode");
}
function toggleChooseTopic() {
    toggle_visibility("page-mode");
    toggle_visibility("page-choosetopic");
}
function togglePageGame() {
    toggle_visibility("page-choosetopic");
    toggle_visibility("page-game");
}
function toggleResults() {
    toggle_visibility("page-game");
    toggle_visibility("page-results");
}
function toggleBiology() {
    toggle_visibility("questions-bio");
}
function toggleChemistry() {
    toggle_visibility("questions-chem");
}
function toggleRestart() {
    toggle_visibility("page-results");
    toggle_visibility("page-mode");
}
function toggleProfile() {
    toggle_visibility("page-profile");
    $("#profile-first").html( $("#signup-first").val() );
    $("#profile-last").html( $("#signup-last").val() );
    $("#profile-username").html( $("#signup-username").val() );
    $("#profile-password").html( $("#signup-password").val() );
}
function toggleSound() {
    if ( $("#sound-state").html() == "Turn Sound on" ) {
        $("#sound-state").html("Turn Sound off");
    } else {
        $("#sound-state").html("Turn Sound on");
    }
}
// function hideAllPages() {
//     toggle_visibility("#page-index");
// }
// function checkAnswer(id, user) {
//     if ($(id).hasClass("correct")) {
//         addPoint(user);
//     } else {
//         addQuestionIncorrect(id);
//     }

//     // if not last question
//     //      show results
//     // else
//     //      next question hide/show
// }
function addPoint() {
    if ( $("body").data("set") == "user1" ) {
        numCorrectUser1++;
    } else {
        numCorrectUser2++;
    }
    $("#numcorrect").html(numCorrectUser1 + " ✔");
}
function addQuestionIncorrect(question, answer) {
    // console.log(question);
    // add to a list
}
function changeUser() {
    if ( $("#body").data("set") == "user1" ) {
        $("#body").data("set", "user2");
        $("#body").attr("data-set", "user2");
    } else {
        $("#body").data("set", "user1");
        $("#body").attr("data-set", "user1");
    }
}