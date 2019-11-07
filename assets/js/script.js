
var tech4g = document.querySelectorAll(".tech4g");
var techMimo = document.querySelectorAll(".techMimo");
var tech5g = document.querySelectorAll(".tech5g");
var btns = document.querySelectorAll("button")


var dist4g = [tech4g[0].value, tech4g[1].value, tech4g[2].value];
var spds4g = [tech4g[3].value, tech4g[4].value];


var distOut= null;
var dist4gLength = dist4g.length;

var techVal = null;
var distVal =null;
var spdsVal = null;

whatTech=null;

			$(".distVal").on("click", function(){
			return distVal = +this.innerHTML;
			});

			$(".spdsVal").on("click", function(){
			return spdsVal = +this.innerHTML;
			});
			
			$("#checkBtn").on("click", function(){
      console.log(techVal);
			console.log(distVal);
			console.log(spdsVal);
        for (var i = 0; i < dist4gLength; i++) {                          
              if (dist4g[i] == distVal) {
              distOut = dist4g[i];  
              console.log(distOut);
                break;
              }
                }         
            if (techVal == "4G") {
            validate4G();
          }       

			});




      $(".dist4004G").on("click", function(){
      $('#sp10mb').prop('disabled', false);
      });

      $(".dist400Mimo").on("click", function(){
      $('#sp20mb').prop('disabled', false);
      });

      $("#dist1500").on("click", function(){
      $('#sp10mb').attr("disabled", true);    
      });

      $("#dist600").on("click", function(){
      $('#sp20mb').attr("disabled", true);    
      });

      $("#dist750").on("click", function(){
      $('#sp20mb').attr("disabled", true);    
      });



function techChecker(elmt) {
			 jQuery('button.active-techs').removeClass('active-techs');
             jQuery('button.active-spds').removeClass('active-spds');
             jQuery('button.active-dists').removeClass('active-dists');
            if (elmt.value === "4G") {
              enableBtn();
            	disable4gBtn();
            	techVal = "4G"

            }
            else if (elmt.value === "MIMO"){
            	disableMimoBtn()
            	techVal = "MIMO"
            }
            else if(elmt.value === "5G"){
            	disable5gBtn()	
            	techVal = "5G"
            }

}

function noVal(){
	techVal = null;
	distVal =null;
	spdsVal = null;	
	distOut = null;
}

function disable4gBtn() {
	enableBtn()
	$(tech5g).attr("disabled", true);
	$(techMimo).attr("disabled", true);
	$(tech4g).removeAttr("disabled");

}
function disableMimoBtn() {
	enableBtn()
	$(tech4g).attr("disabled", true);
	$(tech5g).attr("disabled", true);
	$(techMimo).removeAttr("disabled");

}

function distMimo() {
  enableBtn()
  $(spdMimo).attr("disabled", true);

}

function disable5gBtn() {
	enableBtn()
	$(tech4g).attr("disabled", true);
	$(techMimo).attr("disabled", true);
	$(tech5g).removeAttr("disabled");

}


function enableBtn() {
	$(".steps-progressbar > ul > li").removeClass("active-go");
	$(".steps-progressbar > ul > li").removeClass("active-stop");
	$('button').prop('disabled', false);
	noVal();

}

function disBtn(){
	$('tech5g').prop('disabled', true);
	$('tech4g').prop('disabled', true);
	$('techMimo').prop('disabled', true);
}





jQuery(document).ready(function(){
         
            jQuery('button.dists').click(function() {
               jQuery('button.active-dists').removeClass('active-dists');
               jQuery(this).removeClass("active-dists");
                jQuery(this).addClass("active-dists");
            });
            
         });


jQuery(document).ready(function(){
         
            jQuery('button.spds').click(function() {
               jQuery('button.active-spds').removeClass('active-spds');
               jQuery(this).removeClass("active-spds");
                jQuery(this).addClass("active-spds");
            });
            
         });


jQuery(document).ready(function(){
         
            jQuery('button.techs').click(function() {
               jQuery('button.active-techs').removeClass('active-techs');
               jQuery(this).removeClass("active-techs");
                jQuery(this).addClass("active-techs");
            });
            
         });

jQuery(document).ready(function(){
         
            jQuery('button.btnClr' ).click(function() {
               jQuery('button.active-techs').removeClass('active-techs');
               jQuery('button.active-spds').removeClass('active-spds');
               jQuery('button.active-dists').removeClass('active-dists');
               jQuery(this).removeClass("active-techs");
                jQuery(this).addClass("btn-primary");
            });
            
         });




function validate4G(){
    if (distOut != dist4g[0] && distOut != dist4g[1] && distOut != dist4g[2]){
      alert("Please select Distance!")
    }
    else if  (distOut == dist4g[0]){
      alert("Distance is " +  dist4g[0]);
      
    }
    else if  (distOut == dist4g[1]){
       alert("Distance is " +  dist4g[1]);
    }
    else if  (distOut == dist4g[2]){
       alert("Distance is " +  dist4g[2]);
    }

}