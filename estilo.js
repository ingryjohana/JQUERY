jQuery(document).ready(function($){
	

  //reto numero 1
	$("div").click(function(){
   alert ($(this).css("background-color"));
  }); 

  //reto numero 2
  $( "p:first" ).addClass("myclass");
  $( "p:nth-child(2)" ).addClass("highlight"); 
  

  //reto numero 3
  
  $("p").click(function(event) {
  $("p").toggleClass("cambiar"); 
   });
  
  
  });

  

  







