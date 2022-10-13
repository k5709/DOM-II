
import './less/index.less'

// Your code goes here!
const navHover = document.querySelector('.nav')
//#1//
navHover.addEventListener("mouseover", function(event) {
    event.target.style.color = 'red';
    setTimeout(function(){
        event.target.style.color = '';
    }, 300)
}, false);
//#2//
const signupAlert = document.querySelector('.content-pick')

signupAlert.addEventListener("mouseover", function(event) {
    event.target.style.color = 'cyan';
    setTimeout(function() {
        event.target.style.color = '';
    }, 500)
}, false)
//#3//
const failureMessage = document.querySelector('.nav')

failureMessage.addEventListener("click", function(event) {
    alert('failed try again')
});
//#4//
const successMessage = document.querySelector(".destination .btn")

successMessage.addEventListener("click", function(event) {
    alert('success, you signed up!')
});
//#5//
const dragCancel = document.querySelector('.intro img')

dragCancel.addEventListener('drag', function(event) {
    alert('Y YOU DO DAT?!?');
});
//#6//
const contentColor = document.querySelector(".content-section")
contentColor.addEventListener("mouseover", function(event){
    event.target.style.color = 'red';
    setTimeout(function() {
        event.target.style.color = '';
}, 1000)
}, false)
//#7// 
const footerAnimation = document.querySelector(".footer")

footerAnimation.addEventListener("mouseover", function(event){
    event.target.style.color = "red";
    setTimeout(function(){
        event.target.style.color = "";
    }, 500)
}, false)
//#8//
const inverseAnimation = document.querySelector(".content-section.inverse-content")

inverseAnimation.addEventListener("mouseover", function(){
    event.target.style.color = 'red';
    setTimeout(() => {
        
    }, 1500);
}, false)
//#9//
const destinationAnimation = document.querySelector(".content-destination")

destinationAnimation.addEventListener("mouseover", function(){
    event.target.style.color = 'red';
    setTimeout(() => {
        
    }, 1000);
}, false)
//#10//
const introAnimation = document.querySelector(".intro p")

introAnimation.addEventListener("mouseover", function(){
    event.target.style.color = 'red';
    setTimeout(() => {
        
    }, 800);
}, false)


