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
	"skills" : ["Programming ", "Forward Thinking ", "Team Oriented "],
	"propic" : "images/fry.jpg"
};

if (bio.skills.length > 0) {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	var formattedProPic = HTMLbioPic.replace("%data%", bio.propic);
	var formskills = HTMLskills.replace("%data%", bio.skills[0]);
	var bioForm = formattedName + formattedRole + formattedWelcomeMsg + formattedProPic;

	$("#header:last").append(bioForm);
	// $("#header").append(formattedName);
	// $("#header").append(formattedRole);
	// $("#header").append(formattedProPic);
	// $("#header").append(formattedWelcomeMsg);
	$("#header").append(HTMLskillsStart);
	$("#skills").append(formskills);
	formskills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formskills);
	formskills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formskills);

}

$("#main").append(internationalizeButton);

function inName() {
	var intname = bio.name;
	var newname = intname.trim().split(" ");
	// console.log(newname);
	newname[1] = newname[1].toUpperCase();
	newname[0] = newname[0].slice(0,1).toUpperCase() + newname[0].slice(1).toLowerCase();
	intname = newname.join(" ");
	return intname;
}

// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
// var formattedProPic = HTMLbioPic.replace("%data%", bio.propic);

// $("#header").append(formattedProPic);
// $("#header").prepend(formattedName);
// $("#header").append(formattedRole);
// $("#header").append(HTMLskillsStart);
// $("#header").append(formattedWelcomeMsg);

// var work = {};

// work.currentJob = "Unemployed";
// work.lastJob = {
// 		"employer" : "Calgaray Stampede F&B",
// 		"years" : "2011-2016",
// 		"title" : "Catering",
// 		"city" : "Calgary, Alberta",
// 		"description" : "Worked for the Calgary Stampede Food & Beverage."
// };

// var work = {
// 	"lastJob" : {
// 		"employer" : "Calgary Stampede F&B",
// 		"years" : "2011-2016",
// 		"title" : "Catering",
// 		"city" : "Calgary, Alberta",
// 		"description" : "Worked for the Calgary Stampede Food & Beverage."
// 	},

// 	"currentJob" : "Unemployed",
// };

var work = {
  "prevjobs": [
    {
      "employer": "Calgary Stampede F&B",
      "title": "Wait Staff",
      "location": "Calgary, Alberta",
      "dates": "2011-2016",
      "description": "Catering Waitstaff for Calgary Stampede Food and Beverage"
    }
    // {
    //  "employer": "Employer2",
    //   "title": "Title2",
    //   "location": "Location2",
    //   "dates": "Dates2",
    //   "description": "Description2"
    // }
  ]
}
// work.lastJob = [
// 	"employer" = "Calgary Stampede F&B",
// 	"2011-2016",
// 	"Catering",
// 	"Calgary, Alberta",
// 	"Worked for the Calgary Stampede Food & Beverage department."
// ];
var workLocation = work.prevjobs[0].location;
console.log(workLocation);

function displaywork() {

for(job in work.prevjobs){
	$("#workExperience").append(HTMLworkStart);
	var formWorkEmp = HTMLworkEmployer.replace("%data%", work.prevjobs[job].employer);
	var formWorkTitle = HTMLworkTitle.replace("%data%", work.prevjobs[job].title);
	var formWorkLoc = HTMLworkLocation.replace("%data%", work.prevjobs[job].location);
	var formWorkDates = HTMLworkDates.replace("%data%", work.prevjobs[job].dates);
	var formWorkDesc = HTMLworkDescription.replace("%data%", work.prevjobs[job].description);
	var formWork = formWorkEmp + formWorkTitle + formWorkDates + formWorkLoc + formWorkDesc;

	$(".work-entry:last").append(formWork);
	// console.log(work.prevjobs[job].employer);
};
};

displaywork();
// var formWorkEmp = HTMLworkEmployer.replace("%data%", work.lastJob.employer);
// var formWorkTitle = HTMLworkTitle.replace("%data%", work.lastJob.title);
// var formWorkDates = HTMLworkDates.replace("%data%", work.lastJob.years);
// var formWorkLoc = HTMLworkLocation.replace("%data%", work.lastJob.city);
// var formWorkDesc = HTMLworkDescription.replace("%data%", work.lastJob.description);

// $("#workExperience").append(HTMLworkStart);
// $("#workExperience").append(formWorkEmp);
// $("#workExperience").append(formWorkTitle);
// $("#workExperience").append(formWorkDates);
// $("#workExperience").append(formWorkLoc);
// $("#workExperience").append(formWorkDesc);

// var projects = {
// 	"html" : [ 
// 	{
// 		"title" : "Mock up Site",
// 		"dates" : "September 2016",
// 		"desc" : "A reactive and responsive mock up website"
// 	},
// 	{
// 		"title" : "vacation home webssite",
// 		"dates" : "TBD",
// 		"desc" : "A website that shows you the availability of condos"
// 	} 
// 	],
// 	"Javascript" : [ {
// 		"title" : "Resume Website",
// 		"dates" : "September 2016",
// 		"desc" : "An online resume built mostly with Javascript"
// 	} ]
// }

var projects = {
	"project" : [ 
	{
		"title" : "Mock up Site",
		"dates" : "September 2016",
		"desc" : "A reactive and responsive mock up website"
	},
	{
		"title" : "vacation home webssite",
		"dates" : "TBD",
		"desc" : "A website that shows you the availability of condos"
	},
	{
		"title" : "Resume Website",
		"dates" : "September 2016",
		"desc" : "An online resume built mostly with Javascript"
	} ]
}


projects.display = function(projects_obj) {

	$("#projects").append(HTMLprojectStart);

	for(proj in projects_obj.project) {
		var projectTitle = HTMLprojectTitle.replace("%data%", projects_obj.project[proj].title);
		var projectDates = HTMLprojectDates.replace("%data%", projects_obj.project[proj].dates);
		var projectDesc = HTMLprojectDescription.replace("%data%", projects_obj.project[proj].desc);
		var projectForm = projectTitle + projectDates + projectDesc;

		$(".project-entry:last").append(projectForm);
	}
}
projects.display(projects);
// var projectTitle = HTMLprojectTitle.replace("%data%", projects.html[0].title);
// var projectDates = HTMLprojectDates.replace("%data%", projects.html[0].dates);
// var projectDesc = HTMLprojectDescription.replace("%data%", projects.html[0].desc);
// var projectTitle1 = HTMLprojectTitle.replace("%data%", projects.html[1].title);
// var projectDates1 = HTMLprojectDates.replace("%data%", projects.html[1].dates);
// var projectDesc1 = HTMLprojectDescription.replace("%data%", projects.html[1].desc);
// var projectTitle2 = HTMLprojectTitle.replace("%data%", projects.Javascript[0].title);
// var projectDates2 = HTMLprojectDates.replace("%data%", projects.Javascript[0].dates);
// var projectDesc2 = HTMLprojectDescription.replace("%data%", projects.Javascript[0].desc);


// $("#projects").append(HTMLprojectStart);
// $("#projects").append(projectTitle);
// $("#projects").append(projectDates);
// $("#projects").append(projectDesc);
// $("#projects").append(projectTitle1);
// $("#projects").append(projectDates1);
// $("#projects").append(projectDesc1);
// $("#projects").append(projectTitle2);
// $("#projects").append(projectDates2);
// $("#projects").append(projectDesc2);

// var education = {
// 	"schools" : {
// 		"school" : "Bishop O'Byrne",
// 		"years" : "2010-2013",
// 		"city" : "Calgary, Alberta",
// 		"eduactionachieved" : "High School Diploma"
// 	},

// 	"onlineSchools" : {
// 		"onSchool" : "Udacity",
// 		"class" : "Front End Web Development",
// 		"title" : "Front End Web Developer",
// 		"dates" : "August, 2016 - Current",
// 		"url" : "udacity.com"
// 	}
// }

var education = {
	"schools" : [
	{
		"school" : "Bishop O'Byrne",
		"dates" : "2010 - 2013",
		"location" : "Calgary, Alberta",
		"eduactionachieved" : "High School Diploma",
		"url" : "https://www.cssd.ab.ca/schools/bishopobyrne"
	},
	{
		"school" : "Udacity",
		"dates" : "August, 2016 - Current",
		"location" : "Calgary, Alberta",
		"eduactionachieved" : "Front End Web Developer",
		"url" : "https://www.udacity.com"
	}]
}

education.display = function(education_obj) {

	$("#education").append(HTMLschoolStart);

	for(edu in education_obj.schools) {
		var schoolName = HTMLschoolName.replace("%data%", education_obj.schools[edu].school);
		var schooLDates = HTMLschoolDates.replace("%data%", education_obj.schools[edu].dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%", education_obj.schools[edu].location);				var schoolLocation = HTMLschoolLocation.replace("%data%", education_obj.schools[edu].location);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education_obj.schools[edu].eduactionachieved);
		var schoolUrl = HTMLonlineURL.replace("%data%", education_obj.schools[edu].url);
		// var schoolForm = schoolName + schoolDegree + schooLDates + schoolLocation + schoolUrl;
		var schoolForm = schoolLocation + schoolDegree + schooLDates + schoolUrl;


		$(".education-entry:last").append(schoolName).append(schoolForm);
	}
}

education.display(education);

// $("#mapDiv").append(googleMap);

// var schoolName = HTMLschoolName.replace("%data%", education.schools.school);
// var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools.eduactionachieved);
// var schooLDates = HTMLschoolDates.replace("%data%", education.schools.years);
// var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools.city);

// var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineSchools.title);
// var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineSchools.onSchool);
// var onlineDates = HTMLonlineSchool.replace("%data%", education.onlineSchools.dates);
// var onlineURL = HTMLonlineURL.replace("%data%", education.onlineSchools.url);

// $("#education").append(HTMLschoolStart);
// $("#education").append(schoolName);
// $("#education").append(schoolDegree);
// $("#education").append(schooLDates);
// $("#education").append(schoolLocation);

// $("#onlineEd").append(HTMLonlineStart);
// $("#onlineEd").append(onlineTitle);
// $("#onlineEd").append(onlineSchool);
// $("#onlineEd").append(onlineDates);
// $("#onlineEd").append(onlineURL);


// $(document).click(function(loc) {
// 	var x = loc.pageX;
// 	var y = loc.pageY;

// 	logClicks(x,y);
// });

// var work2 = {
//   "jobs": [
//     {
//       "employer": "Udacity",
//       "title": "Course Developer",
//       "location": "Mountain View, CA",
//       "dates": "Feb 2014 - Current",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "LearnBIG",
//       "title": "Software Engineer",
//       "location": "Seattle, WA",
//       "dates": "May 2013 - Jan 2014",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "LEAD Academy Charter High School",
//       "title": "Science Teacher",
//       "location": "Nashville, TN",
//       "dates": "Jul 2012 - May 2013",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     },
//     {
//       "employer": "Stratford High School",
//       "title": "Science Teacher",
//       "location": "Nashville, TN",
//       "dates": "Jun 2009 - Jun 2012",
//       "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
//     }
//   ]
// };

// // Your code goes here! Let me help you get started

// function locationizer(work_obj) {
//     var workloc = [];
//    for (job in work_obj.jobs) {
//    	var newLocation = work_obj.jobs[job].location;
//    	workloc.push(newLocation);
//    }
//    return workloc;
// }

// // Did locationizer() work? This line will tell you!
// console.log(locationizer(work2));