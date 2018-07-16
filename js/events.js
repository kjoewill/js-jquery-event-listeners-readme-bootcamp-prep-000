//define functions here

function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  });
}

function frameIt() {
  
  $('.tasty').on('load', function(){
  //actions you want to happen
  alert("Hey!")
});
  
  
}




$(document).ready(function(){

// call functions here
getIt()

});
