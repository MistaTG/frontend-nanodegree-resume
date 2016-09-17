// $("#main").append(["Austin Nazareth"]);

// var awesomeThoughts = "I am Austin and I am Awesome";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("Awesome", "Fun");
// console.log(funThoughts);

// var myname = "Austin Nazareth";
// var myrole = "Front-End Web Dev";
// var contactInfo = ["nazanator@hotmail.com", "403-919-9187"];
// var skills = ["Programming", "Forward Thinking", "Team Oriented"];
// var welcomeMsg = "Hello World";
// var profilePic = "images/fry.jpg";

var bio = {
	"name" : "Austin Nazareth",
	"role" : "Front-End Web Dev",
	"contactInfo" : {
		"email" : "nazanator@hotmail.com",
		"mobile" : "403-919-9187"
	},
	"welcomeMsg" : "Hello World",
	"skills" : ["Programming", "Forward Thinking", "Team Oriented"],
	"propic" : "images/fry.jpg"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedProPic = HTMLbioPic.replace("%data%", bio.propic);

$("#header").append(formattedProPic);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedWelcomeMsg);

var work = {};

work.currentJob = "Unemployed";
work.lastJob = {
		"employer" : "Calgaray Stampede F&B",
		"years" : "2011-2016",
		"title" : "Catering",
		"city" : "Calgary, Alberta",
		"description" : "Worked for the Calgary Stampede Food & Beverage."
};

var formWorkEmp = HTMLworkEmployer.replace("%data%", work.lastJob.employer);
var formWorkTitle = HTMLworkTitle.replace("%data%", work.lastJob.title);
var formWorkDates = HTMLworkDates.replace("%data%", work.lastJob.years);
var formWorkLoc = HTMLworkLocation.replace("%data%", work.lastJob.city);
var formWorkDesc = HTMLworkDescription.replace("%data%", work.lastJob.description);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formWorkEmp);
$("#workExperience").append(formWorkTitle);
$("#workExperience").append(formWorkDates);
$("#workExperience").append(formWorkLoc);
$("#workExperience").append(formWorkDesc);


var education = {};

education["lastEd"] = {
	"school" : "Bishop O'Byrne",
	"years" : "2010-2013",
	"city" : "Calgary",
	"eduactionachieved" : "High School Diploma"
};

var schoolName = HTMLschoolName.replace("%data%", education.lastEd.school);
var schoolDegree = HTMLschoolDegree.replace("%data%", education.lastEd.eduactionachieved);
var schooLDates = HTMLschoolDates.replace("%data%", education.lastEd.years);
var schoolLocation = HTMLschoolLocation.replace("%data%", education.lastEd.city);

$("#education").append(HTMLschoolStart);
$("#education").append(schoolName);
$("#education").append(schoolDegree);
$("#education").append(schooLDates);
$("#education").append(schoolLocation);

