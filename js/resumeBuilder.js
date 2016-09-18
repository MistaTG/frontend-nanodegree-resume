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

var projects = {
	"html" : [ 
	{
		"title" : "Mock up Site",
		"dates" : "September 2016",
		"desc" : "A reactive and responsive mock up website"
	},
	{
		"title" : "vacation home webssite",
		"dates" : "TBD",
		"desc" : "A website that shows you the availability of condos"
	} 
	],
	"Javascript" : [ {
		"title" : "Resume Website",
		"dates" : "September 2016",
		"desc" : "An online resume built mostly with Javascript"
	} ]
}

var projectTitle = HTMLprojectTitle.replace("%data%", projects.html[0].title);
var projectDates = HTMLprojectDates.replace("%data%", projects.html[0].dates);
var projectDesc = HTMLprojectDescription.replace("%data%", projects.html[0].desc);
var projectTitle1 = HTMLprojectTitle.replace("%data%", projects.html[1].title);
var projectDates1 = HTMLprojectDates.replace("%data%", projects.html[1].dates);
var projectDesc1 = HTMLprojectDescription.replace("%data%", projects.html[1].desc);
var projectTitle2 = HTMLprojectTitle.replace("%data%", projects.Javascript[0].title);
var projectDates2 = HTMLprojectDates.replace("%data%", projects.Javascript[0].dates);
var projectDesc2 = HTMLprojectDescription.replace("%data%", projects.Javascript[0].desc);


$("#projects").append(HTMLprojectStart);
$("#projects").append(projectTitle);
$("#projects").append(projectDates);
$("#projects").append(projectDesc);
$("#projects").append(projectTitle1);
$("#projects").append(projectDates1);
$("#projects").append(projectDesc1);
$("#projects").append(projectTitle2);
$("#projects").append(projectDates2);
$("#projects").append(projectDesc2);

var education = {
	"schools" : {
		"school" : "Bishop O'Byrne",
		"years" : "2010-2013",
		"city" : "Calgary, Alberta",
		"eduactionachieved" : "High School Diploma"
	},

	"onlineSchools" : {
		"onSchool" : "Udacity",
		"class" : "Front End Web Development",
		"title" : "Front End Web Developer",
		"dates" : "August, 2016 - Current",
		"url" : "udacity.com"
	}
}


var schoolName = HTMLschoolName.replace("%data%", education.schools.school);
var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools.eduactionachieved);
var schooLDates = HTMLschoolDates.replace("%data%", education.schools.years);
var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools.city);

var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineSchools.title);
var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools.onSchool);
var onlineDates = HTMLonlineSchool.replace("%data%", education.onlineSchools.dates);
var onlineURL = HTMLonlineURL.replace("%data%", education.onlineSchools.url);

$("#education").append(HTMLschoolStart);
$("#education").append(schoolName);
$("#education").append(schoolDegree);
$("#education").append(schooLDates);
$("#education").append(schoolLocation);

$("#onlineEd").append(HTMLonlineStart);
$("#onlineEd").append(onlineTitle);
$("#onlineEd").append(onlineSchool);
$("#onlineEd").append(onlineDates);
$("#onlineEd").append(onlineURL);
