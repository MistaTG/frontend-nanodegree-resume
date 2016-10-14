var bio = {
	"name" : "Austin Nazareth",
	"role" : "Front-End Web Dev",
	"contacts" : {
		"mobile" : "123-123-1234",
		"email" : "placeholder@email.com",
		"github" : "MistaTg",
		"location" : "Calgary, AB"
	},
	"welcomeMessage" : "Hello World",
	"skills" : ["Programming", "Forward Thinking", "Team Oriented", "Problem Solver"],
	"propic" : "images/fry.jpg"
};

bio.display = function(bio_obj, skills_obj){

	for (bios=0,x=1;bios<x;bios++){
		var formattedMobile = HTMLmobile.replace("%data%", bio_obj.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio_obj.contacts.mobile);
		var formattedGit = HTMLgithub.replace("%data%", bio_obj.contacts.github);
		var formattedLoc = HTMLlocation.replace("%data%", bio_obj.contacts.location);
		var formattedName = HTMLheaderName.replace("%data%", bio_obj.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio_obj.role);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio_obj.welcomeMessage);
		var formattedProPic = HTMLbioPic.replace("%data%", bio_obj.propic);
		var bioForm = formattedName + formattedRole + formattedWelcomeMsg + formattedProPic;
		var contactForm = formattedMobile + formattedEmail + formattedLoc + formattedGit;

		$("#header").append(bioForm);
		$("#topContacts").append(contactForm);
		$("#header").append(HTMLskillsStart);
	};

	for (skill=0,x=skills_obj.length;skill<x;skill++){
			var formskills = HTMLskills.replace("%data%", bio_obj.skills[skill]);
			$("#skills").append(formskills);
			formskills = HTMLskills.replace("%data%", bio_obj.skills[skill]);
		};
};

bio.display(bio, bio.skills);

$("#main").append(internationalizeButton);

function inName() {
	var intname = bio.name;
	var newname = intname.trim().split(" ");
	newname[1] = newname[1].toUpperCase();
	newname[0] = newname[0].slice(0,1).toUpperCase() + newname[0].slice(1).toLowerCase();
	intname = newname.join(" ");
	return intname;
};