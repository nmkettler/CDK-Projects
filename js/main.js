
(function(){ //Angular 
 var app = angular.module("myApp", ['ngRoute']);

 	app.controller('HeroController',['$scope',function($scope){


	$scope.fontOutput = function(){

		$scope.list = [ { value: 'Drag to Resize'}, { value: ''}, { value: ''}];

	}


	$scope.fontOutput();

 }]); //end of controller

})(); //end of anonymous function


$(document).ready(function(){

$(function snapFunctions(){
	$( "#draggable1" ).draggable({ snap: ".big-hero" });
	
	$( "#draggable1" ).resizable();
	

	//Change Background Image
	$("#bckrnd-image").change(function(){
     $("img[name=image-swap]").attr("src",$(this).val());
     $( "#dragVehicle" ).draggable({ snap: ".big-hero" });
		$( "#yukon" ).resizable();
   });
	$("#random-image").change(function(){
     $("img[name=random-image]").attr("src",$(this).val());
     $( "#dollar-signs" ).draggable({ snap: ".big-hero" });
		$( "#dollar-sign" ).resizable();
   });
  });

	$(function vehiclePhoto(){
		
	});
   $(function changeFontSize(){
	  $("#input-font-size").change(function(){
	$(".output-text").css("font-size",$(this).val() + "px");
	})
	});

   $(function changeResizeBackgroundColor(){
   	$('#txtBackgroundColor').change(function (){
   		$('#draggable1').css('background-color', $(this).val());
   	})
   });
   $(function changeResizeBackgroundColor(){
   	$('#fontColor').change(function (){
   		$('.output-text').css('color', $(this).val());
   	})
   });

   $(function changeFontFamily(){
   	$('#input-font').change(function (){
   		$('.output-text').css('fontFamily', $(this).val());
   	});
   });

});


