



jQuery(document).ready(function(){
         
            jQuery('button.technology').click(function() {
               jQuery('button.active-button2').removeClass('active-button2');
               jQuery(this).removeClass("active-button2");
                jQuery(this).addClass("active-button2");
            });
            
         });

jQuery(document).ready(function(){
         
            jQuery('button.speed').click(function() {
               jQuery('button.active-button3').removeClass('active-button3');
               jQuery(this).removeClass("active-button3");
                jQuery(this).addClass("active-button3");
            });
            
         });

function block4g() {
  
  sp20mb.classList.add("disable");
  sp50mb.classList.add("disable");
  sp100mb.classList.add("disable");
  dist500m.classList.add("disable");
  dist750m.classList.add("disable");
  document.getElementById("dist750m").disabled = true;
  document.getElementById("dist500m").disabled = true;
  document.getElementById("sp20mb").disabled = true;
  document.getElementById("sp50mb").disabled = true;
  document.getElementById("sp100mb").disabled = true;
}


function clearBtn(){

  sp5mb.classList.remove("disable");
  sp10mb.classList.remove("disable");
  sp20mb.classList.remove("disable");
  sp50mb.classList.remove("disable");
  sp100mb.classList.remove("disable");


  dist400m.classList.remove("disable");
  dist500m.classList.remove("disable");
  dist600m.classList.remove("disable");
  dist750m.classList.remove("disable");
  dist1500m.classList.remove("disable");

  document.getElementById("dist750m").disabled = false;
  document.getElementById("dist500m").disabled = false;
  document.getElementById("dist400m").disabled = false;
  document.getElementById("dist1500m").disabled = false;
  document.getElementById("dist600m").disabled = false;

  document.getElementById("sp5mb").disabled =false;
  document.getElementById("sp10mb").disabled =false;
  document.getElementById("sp20mb").disabled =false;
  document.getElementById("sp50mb").disabled = false;
  document.getElementById("sp100mb").disabled = false;
}