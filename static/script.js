function search_contact(){
	var search_bar = document.getElementById("search_bar");
	var search_string = search_bar.value.toUpperCase();
	var contacts = document.getElementsByClassName("contact");

	for(var i in contacts){
		var search_in_string = contacts[i].innerText.toUpperCase();
		//var search_in_string = pre_search_in_string.slice(pre_search_in_string.length-7,pre_search_in_string.length);
		if (search_in_string.indexOf(search_string) == -1 || search_in_string.indexOf(search_string) > search_in_string.length-(6+search_string.length)){
			contacts[i].style.display = "none";
		}
		else{
			contacts[i].style.display = "block";
		}
	}
};