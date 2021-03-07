function load() {
	var mydata = JSON.parse(abundance);
	alert(mydata[0].UniProt_ID);
	alert(mydata[0].Copies_per_cell);
}