function submitAction() {
	
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(response) {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	      debugger;
			window.request = response;
	    }
	};  
	xhttp.open("POST", "submitValue", true);
	xhttp.send();
}