function closeModal(){toggle_visibility("modal"),toggle_visibility("none"==$("#form-signup").css("display")?"form-login":"form-signup")}function toggleSignup(){toggle_visibility("modal"),toggle_visibility("form-signup")}function toggleLogin(){toggle_visibility("modal"),toggle_visibility("form-login")}function toggleMenu(){$("#menu").toggleClass("is-active")}function toggle_visibility(i){var t=document.getElementById(i);t.style.display="none"!==t.style.display?"none":"block"}function login(){$("#password-login").val()!==$("#signup-password").val()?badLogin():(goodLogin(),toggleLogin(),togglePageMode())}function signup(){firstName=$("#signup-first").val(),lastName=$("#signup-last").val(),username=$("#signup-username").val(),password=$("#signup-password").val(),toggleSignup()}function badLogin(){$("#password-login").addClass("is-active")}function goodLogin(){$("#password-login").removeClass("is-active")}function togglePageMode(){toggle_visibility("page-index"),toggle_visibility("page-mode")}function toggleInvite(){toggle_visibility("challengePlayer")}function challengePlayer(){toggle_visibility("page-mode"),toggle_visibility("page-choosetopic"),toggle_visibility("multiplayerResults"),$("#multiplayerResults").html("Congratulations, you beat "+$("#invitedUser").val()+"'s score of 14")}function toggleChooseTopic(){toggle_visibility("page-mode"),toggle_visibility("page-choosetopic")}function togglePageGame(){toggle_visibility("page-choosetopic"),toggle_visibility("page-game")}function toggleResults(){toggle_visibility("page-game"),toggle_visibility("page-results")}function toggleBiology(){toggle_visibility("questions-bio")}function toggleChemistry(){toggle_visibility("questions-chem")}function toggleRestart(){toggle_visibility("page-results"),toggle_visibility("page-mode"),numCorrectUser1=0}function createNewTopic(){toggle_visibility("page-mode"),toggle_visibility("page-newtopic")}function backToTopics(){toggle_visibility("page-newtopic"),toggle_visibility("page-mode"),toggle_visibility("chem2")}function toggleProfile(){toggle_visibility("page-profile"),$("#profile-first").html($("#signup-first").val()),$("#profile-last").html($("#signup-last").val()),$("#profile-username").html($("#signup-username").val()),$("#profile-password").html($("#signup-password").val())}function toggleSound(){"Turn Sound on"==$("#sound-state").html()?$("#sound-state").html("Turn Sound off"):$("#sound-state").html("Turn Sound on")}function addPoint(){"user1"==$("body").data("set")?(numCorrectUser1++,totalPoints1++):(numCorrectUser2++,totalPoints1++),$("#numcorrect").html(numCorrectUser1+" ✔"),$("#profile-points").html(totalPoints1)}function addQuestionIncorrect(i,t){}function changeUser(){"user1"==$("#body").data("set")?($("#body").data("set","user2"),$("#body").attr("data-set","user2")):($("#body").data("set","user1"),$("#body").attr("data-set","user1"))}function newQuestion(){toggle_visibility("newQuestion")}$(document).ready(function(){$(".hamburger").click(function(){$(this).toggleClass("is-active"),toggleMenu()}),$(".circle").click(function(){$(this).toggleClass("is-active")}),$("#submit-login").click(function(){login("form-login","password")}),$(".circle").click(function(){if($(this).hasClass("is-correct")){addPoint(),console.log(numCorrectUser1);var i=new Audio("audio/yay.mp3");i.play(),window.setTimeout(function(){i.pause()},1500)}else{addQuestionIncorrect($(this).data("set"),$(this).data("answer")),console.log("Wrong");var i=new Audio("audio/boo.mp3");i.play(),window.setTimeout(function(){i.pause()},2e3)}var t=$(this).data("set"),o=$(this).data("set").substring(0,12)+(currentQuestion+1);t.indexOf("20")>=0?(toggleBiology(),toggleResults(),console.log("Show results"),currentQuestion=1,$("#numcorrect").html("0 ✔")):(console.log(o),toggle_visibility(t),toggle_visibility(o),console.log("Next question"),currentQuestion++),$("#questiontracker").html("#"+currentQuestion+" of 20"),$("#results-message").html("You answered "+numCorrectUser1+" of 20 questions correctly.")})});