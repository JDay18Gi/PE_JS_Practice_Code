
var oldName = "AlbERt EINstEiN";

var nameArray = oldName.split(" ");
nameArray[1] = nameArray[1].toUpperCase();
nameArray[0] = nameArray[0].toLowerCase();
var firstName = nameArray[0].slice(1);
nameArray[0] = nameArray[0].charAt(0).toUpperCase() + firstName;
finalName = nameArray.join(" ");

console.log(finalName);




if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkills);

formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkills);

formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkills);

}

//$("#header").append(HTMLworkStart);


for(job in workObject.jobs){
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer = HTMLworkEmployer.replace("%data%", workObject.jobs[job].employer);

	var formattedTitle = HTMLworkTitle.replace("%data%", workObject.jobs[job].position);

	var formattedLocation = HTMLworkLocation.replace("%data%", workObject.jobs[job].city);

	var formattedDates = HTMLworkDates.replace("%data%", workObject.jobs[job].years);

	var formattedDescription = HTMLworkDescription.replace("%data%", workObject.jobs[job].description);
	
	var formattedEmployerEntry = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

	$(".work-entry:last").append(formattedEmployerEntry);
}