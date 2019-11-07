	var tech = 
	    {tech4g: document.getElementById("tech4g"),
	    techMimo: document.getElementById("techMimo"),
	    techGroup: document.getElementById("techGroup"),
	    tech5g: document.getElementById("tech5g")}
	;

	var distGroup= 
	    {dist400m: document.getElementById("dist400m"),
	    dist500m: document.getElementById("dist500m"),
	    dist600m: document.getElementById("dist600m"),
	    dist750m: document.getElementById("dist750m"),
	    dist1500m: document.getElementById("dist1500m")}		
	;

	var speedGroup  = [
		{sp5mb: document.getElementById("sp5mb"),
	    sp10mb: document.getElementById("sp10mb"),
	    sp20mb: document.getElementById("sp20mb"),
	    sp50mb: document.getElementById("sp50mb"),
	    sp100mb: document.getElementById("sp100mb")}	
	];


	clearBtn.addEventListener("click", clearAll);
		function clearAll(){
			
		}

//distance
	dist400m.addEventListener("click", dista400m);
	dist500m.addEventListener("click", dista500m);
	dist600m.addEventListener("click", dista600m);
	dist750m.addEventListener("click", dista750m);
	dist1500m.addEventListener("click", dista1500m);

	function dista400m() {
		dist400m.classList.add("active-button");
		dist500m.classList.remove("active-button");
		dist600m.classList.remove("active-button");
		dist750m.classList.remove("active-button");
		dist1500m.classList.remove("active-button");
	}
	function dista500m() {
		dist400m.classList.remove("active-button");
		dist500m.classList.add("active-button");
		dist600m.classList.remove("active-button");
		dist750m.classList.remove("active-button");
		dist1500m.classList.remove("active-button");
	}
	function dista600m() {
		dist400m.classList.remove("active-button");
		dist500m.classList.remove("active-button");
		dist600m.classList.add("active-button");
		dist750m.classList.remove("active-button");
		dist1500m.classList.remove("active-button");
	}
	function dista750m() {
		dist400m.classList.remove("active-button");
		dist500m.classList.remove("active-button");
		dist600m.classList.remove("active-button");
		dist750m.classList.add("active-button");
		dist1500m.classList.remove("active-button");
	}
	function dista1500m() {
		dist400m.classList.remove("active-button");
		dist500m.classList.remove("active-button");
		dist600m.classList.remove("active-button");
		dist750m.classList.remove("active-button");
		dist1500m.classList.add("active-button");
	}

//speed
	
	sp5mb.addEventListener("click", sp5mbps);
	sp10mb.addEventListener("click", sp10mbps);
	sp20mb.addEventListener("click", sp20mbps);
	sp50mb.addEventListener("click", sp50mbps);
	sp100mb.addEventListener("click", sp100mbps);

		function sp5mbps() {
		sp5mb.classList.add("active-button");
		sp10mb.classList.remove("active-button");
		sp20mb.classList.remove("active-button");
		sp50mb.classList.remove("active-button");
		sp100mb.classList.remove("active-button");
	} 

		function sp10mbps() {
		sp5mb.classList.remove("active-button");
		sp10mb.classList.add("active-button");
		sp20mb.classList.remove("active-button");
		sp50mb.classList.remove("active-button");
		sp100mb.classList.remove("active-button");
	} 

		function sp20mbps() {
		sp5mb.classList.remove("active-button");
		sp10mb.classList.remove("active-button");
		sp20mb.classList.add("active-button");
		sp50mb.classList.remove("active-button");
		sp100mb.classList.remove("active-button");
	} 

		function sp50mbps() {
		sp5mb.classList.remove("active-button");
		sp10mb.classList.remove("active-button");
		sp20mb.classList.remove("active-button");
		sp50mb.classList.add("active-button");
		sp100mb.classList.remove("active-button");
	} 

		function sp100mbps() {
		sp5mb.classList.remove("active-button");
		sp10mb.classList.remove("active-button");
		sp20mb.classList.remove("active-button");
		sp50mb.classList.remove("active-button");
		sp100mb.classList.add("active-button");
	} 



	//technology 



	tech4g.addEventListener("click", tech4gcolor);
	function tech4gcolor() {
		tech4g.classList.add("active-button");
		techMimo.classList.remove("active-button");
		tech5g.classList.remove("active-button");
	}

	techMimo.addEventListener("click", techMimocolor);
	function techMimocolor() {
		tech4g.classList.remove("active-button");
		techMimo.classList.add("active-button");
		tech5g.classList.remove("active-button");
	}

	tech5g.addEventListener("click", tech5gcolor);
	function tech5gcolor() {
		tech4g.classList.remove("active-button");
		techMimo.classList.remove("active-button");
		tech5g.classList.add("active-button");
	}