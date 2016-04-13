
(function(){ //Angular 
 var app = angular.module("myApp", ['ngRoute']);

 	app.controller('HeroController',['$scope',function($scope){


	$scope.fontOutput = function(){

		$scope.firstText = [ { value: 'Text Box 1'}];
		$scope.secondText = [ { value: 'Text Box 2'}];

    //Lease special Template 
    $scope.percentTxt = [ { value: '50%' } ];
		$scope.ofMsrp = [ { value: 'OF MSRP' } ];
    $scope.msrpCashTxt = [ { value: 'CASH BACK' } ];
    $scope.descLeaseTxt = [ { value: 'ON MOST REMAINING 2015 CHEVY VEHICLES' } ];
    $scope.smllText = [ { value: '------------PLUS----------------' } ];
    $scope.secDescrTxt = [ { value: '2016 CRUZE LIMITED & MALIBU LIMITED' } ];
	}


	$scope.fontOutput();

 }]); //end of controller

})(); //end of anonymous function


$(document).ready(function(){
	/*--------------Drag/Resize items-----------------*/

$(function snapFunctions(){
	
	//Text/text box to resize
	$( "#draggable1" ).draggable({ snap: ".big-hero" });	
	$( "#draggable1" ).resizable({
		start:function(event,ui){ //Other images/divs when resized do not affect overall flow
            ui.element.css('position','absolute');
        }
	});
	$( "#secTextDraggable").draggable({ snap: ".big-hero" });
	$( "#secTextDraggable").resizable({
		start:function(event,ui){ //Other images/divs when resized do not affect overall flow
            ui.element.css('position','absolute');
        }
	});

  //Lease Template form
  $( ".lease-text-template").draggable({ snap: ".big-hero" });
  
  

	//Random Images Drag/Resize
	$("#random-image").change(function(){
     	$('img[name=signSelect]').attr("src",$(this).val());
     	$('#individSign').resizable({
     		containment: ".big-hero",
     		start:function(event,ui){ //Other images/divs when resized do not affect overall flow
            ui.element.css('position','absolute');
        }
     	});
     	$( "#signOutput" ).draggable({ 
     		containment: ".big-hero"
     	 });
		
   });

  });


	$(function changeVehicle(){
		//Change Vehicle Image/Resize
		$("#vehicle-image").change(function(){
	     	$('img[name=image-swap]').attr("src",$(this).val());
	     	$( "#individVehicle").resizable({
	     		containment: ".big-hero",
	     		start:function(event,ui){ //Other images/divs when resized do not affect overall flow
            ui.element.css('position','absolute');
        }
	     	});
	     	$( "#vehicleOutput" ).draggable();
   });

	});

   $(function changeFontSize(){
	  $("#input-font-size").change(function(){
	$(".first-output-text").css("font-size",$(this).val() + "px");
	})
	});

   $(function changeResizeBackgroundColor(){
   	$('#txtBackgroundColor').change(function (){
   		$('#draggable1').css('background-color', $(this).val());
   	})
   });
   $(function changeResizeFontColor(){
   	$('#fontColor').change(function (){
   		$('.first-output-text').css('color', $(this).val());
   	})
   });
   $(function changeBackground(){
   	$('#heroBackgroundImg').change(function (){
   		value = $(this).val();
   		$('#big-hero-id').css({
   			'background-image': 'url(' + value + ')',
   			'background-color': value
   		});
   	})
   	$('#heroBackgroundColor').change(function (){
   		value = $(this).val();
   		$('#big-hero-id').css({
   			'background-image': 'url(' + value + ')',
   			'background-color': value
   		});
   	})
   });

   $(function changeFontFamily(){
   	$('#input-font').change(function (){
   		$('.first-output-text').css("font-family", $(this).val());
   	});
   });


   $(function createLeaseText(){
    $('#output-lease-txt').on('click', function(){
      
    })
   });

   $(function hideLeaseForm(){
      $('#showForm').on("click", function(){
        $('.lease-text-template').toggle();
      });
   });

});



