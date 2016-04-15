
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

    //Disclaimer Template
    $scope.disclaimTxt = [ { value: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' } ];

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
  
  //Disclaimer Template
  $(".disclaimerTxt").draggable({ snap: ".big-hero" });
  $(".disclaimerTxt").resizable({ 
    start:function(event,ui){
      ui.element.css('position', 'absolute');
    }
   });

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
    $("#input-font-size-2").change(function(){
      $(".sec-output-text").css("font-size",$(this).val() + "px");
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
    $('#fontColor-2').change(function(){
      $('.sec-output-text').css('color', $(this).val());
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

$(function adjustHeroSlide(){
$('#heroSize').change(function (){
  value = $(this).val();

})

});

   $(function changeFontFamily(){
   	$('#input-font').change(function (){
   		$('.first-output-text').css("font-family", $(this).val());
   	});
   });

   $(function showEditableText(){
    var check1 = $( "input[name='firstItem']" );
    var check2 = $( "input[name='secondItem']" );
    $(check1).click(function(){
      if (this.checked){
        $("#draggable1").toggle();
      }
    })
    $(check2).click(function(){
      if (this.checked){
        $('#secTextDraggable').toggle();
      }
    })

   });

   $(function showTemplates(){
      $('#showForm').on("click", function(){
        $('.lease-text-template').toggle();
      });
      $('#showDisclaim').on("click", function(){
        $('.disclaimerTxt').toggle();
      });
   });


$(function dnldDiv(){
  //Append to a canvas in order to download div as an img
  
  var element = $("#big-hero-id"); // global variable
  var getCanvas; // global variable
   
      $("#btn-Preview-Image").on('click', function () {
           html2canvas(element, {
           onrendered: function (canvas) {
                  $("#previewImage").append(canvas);
                  getCanvas = canvas;
               }
           });
      });

    //Download to image
    $("#btn-Convert-Html2Image").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);
});
})

});





