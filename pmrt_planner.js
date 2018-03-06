console.log("js is working");

function applyPMRTDetails(text) {
	var details = text.split("###");

	var startDate = '"' + details[0] + '"';
	var startTime = '"' + details[1] + '"';
	var finishTime = '"' + details[2] + '"';
	var typeOfShift = '"' + details[3] + '"';
	var numberOfVehicles = '"' + details[4] + '"';
	var numberOfPersons = '"' + details[5] + '"';
	var route = '"' + details[6] + '"';
	var support = '"' + details[7] + '"';
	var description = '"' + details[8] + '"';
	var sector = '"' + details[9] + '"';

	var script =	'var ati = document.getElementsByClassName("atiAttributes")[0];' +
			'var inputArray = ati.getElementsByTagName("input");' +
			'inputArray[8].value = ' + startDate + ';' +
			'inputArray[11].value = ' + startTime + ';' +
			'inputArray[13].value = ' + finishTime + ';' +
			'inputArray[16].value = ' + typeOfShift + ';' +
			'inputArray[23].value = ' + numberOfVehicles + ';' +
			'inputArray[26].value = ' + numberOfPersons + ';' +
			'inputArray[30].value = ' + route + ';' +
			'inputArray[34].value = ' + support + ';' +
			'inputArray[37].value = ' + description + ';' +
			'inputArray[39].value = ' + sector + ';' +

	console.log(script);

	chrome.tabs.executeScript({
		code: script
	});
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById("pmrtDetailsButton").addEventListener("click", function(){
		console.log("event is working")

		var textarea = document.getElementById('pmrtDetailsFormControlTextarea');

		var text = textarea.value;

		text = text.replace(/(\r\n|\n|\r)/gm,"###");

		applyPMRTDetails(text);
	});
});



// document.getElementById("dijit_form_ValidationTextBox_4").value = "0300"

/*
3/3/2018
0000
0200
Day
4
20
Other, see descript
without LAF
EOD
WEST
*/