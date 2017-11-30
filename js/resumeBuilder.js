/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
*/

var bio = {	
		"name": "Yatindra Jain",
		"role": "Web Designer",
		"welcomeMessage":"Hi, Nice to see you here, please go through my Resume",
		"biopic":"images/image1.jpg",
		"contacts" : {
			"mobile": "+91 9856325181",
			"email": "test@resume.com",
			"github":"www.github.com",
			"twitter": "www.twitter.com",
			"location": "Bangalore"
		},	
		"skills":["harworking","talented","logical thinker"],
		//"display": function;
};

var education = {
	"schools" : [
	{
		"name": "VJGP",
		"location": "KTG",
		"degree":"SSC",
		"majors":["Physics","Chemistry","Maths"],
		"dates":"15-08-1985",
		"url":"www.google.com"
	},
	{
		"name": "VJGP",
		"location": "KTG",
		"degree":"SSC",
		"majors":["Physics","Chemistry","Maths"],
		"dates":"15-08-1985",
		"url":"www.google.com"
	}				 
	],	
	"onlineCourses" : [
	{
		"title": "Javascript",
		"school": "BNG",
		"dates":"September - 2017",
		"subjects":["html","css","js"],
		"url":"Udacity"
	}	
	]	
};

var work = {
	"jobs" : [
	{
		"employer": "CDAC",
		"title": "Software Developer",
		"location":"pune",
		"dates":"Apr 2003 to Mar 2006",		
		"description":"I worked with a tool called webMethods to convert various of the partnered companies' XML " +
			"schemas to another companies' format based on EDI standards when they are sending or requesting orders " +
			"from one place to another. Another is I created Excel reports to keep track of the companies' booking and order " +
"confirmations for manager to keep track of whether or not they have received that order or not."
	},
	{
		"employer": "AT&T",
		"title": "International delivery manager",
		"location":"bangalore",
		"dates":"Sep 2009 - till date",		
		"description":"I worked on many different applications in different organizations at AT&T from small to large " +
				"scale of teams. The languages and frameworks that I've used are Java, HTML, CSS, Javascript, UNIX, MySQL, " +
				"AngularJS, Bootstrap, Spring, and Hibernate. Most of my work are mainly full-stack work where I develop" +
				"features and improvements on both front-end and backend as well as some database work. Another is" +
			"I've been involved with several leadership activities such as providing guidance for submitting employee referrals " +
			"for purchasing AT&T products and the Service Ambassador program to engage and establish relationships with small to " +
"mid-sized businesses."
	}	
	]
};

var projects = {
	"projects" : [
	{
		"title": "Messanger TV",
		"dates": "Apr 2009",
		"description":"This Project was for Messanger TV",
		"images":["images/image1.jpg","images/image2.jpg","images/image3.jpg"]		
	},
	{
		"title": "Flash based Web Solutions",
		"dates": "Sep 2011",
		"description":"This Project was for Flash based web Solutions",
		"images":["images/image1.jpg","images/image2.jpg","images/image3.jpg"]		
	}
	]
	//"display": function;
};

bio.display = function ()
{
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);	
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);	
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);	
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);	
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	
	var formattedContact = []; // store the contact info in array, so that the same can be used in footers also
	formattedContact.push(formattedMobile);
	formattedContact.push(formattedEmail);
	formattedContact.push(formattedGithub);
	formattedContact.push(formattedTwitter);
	formattedContact.push(formattedLocation);
	
	for(var i=0; i< formattedContact.length;i++){
		$("#topContacts").append(formattedContact[i]);
		$("#footerContacts").append(formattedContact[i]);
	}
	
	/* another alternative to use for in loop
	for(contact in formattedContact){
		$("#topContacts").append(formattedContact[contact]);
		$("#footerContacts").append(formattedContact[contact]);
	}
	*/
	
	if(bio.skills.length > 0){	
		$("#header").append(HTMLskillsStart);		
		for(skill in bio.skills){
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}		
	}	
}
bio.display();

work.display = function()
{
	if(work.jobs.length >0) {
		$("#workExperience").append(HTMLworkStart);
		for (job in work.jobs)
		{			
			var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);			
		}
	}
}
work.display();

projects.display = function ()
{
	if(projects.projects.length > 0){
		
		$("#projects").append(HTMLprojectStart);
		for (project in projects.projects)
		{			
			var formattedTitle = HTMLprojectTitle.replace("%data%" , projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			
			if(projects.projects[project].images.length > 0)
			{
				for (image in projects.projects[project].images)
				{
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
}
projects.display();

education.display = function ()
{
	if(education.schools.length > 0 || education.onlineCourses.length > 0)
	{
		$("#education").append(HTMLschoolStart);
		if(education.schools.length > 0)
		{
			for (school in education.schools)
			{
				var formattedName = HTMLschoolName.replace("%data%" , education.schools[school].name);
				$(".education-entry:last").append(formattedName);
				var formattedLocation = HTMLschoolLocation.replace("%data%" , education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);
				var formattedDegree = HTMLschoolDegree.replace("%data%" , education.schools[school].degree);
				$(".education-entry:last").append(formattedDegree);
				var formattedDates = HTMLschoolDates.replace("%data%" , education.schools[school].dates);
				$(".education-entry:last").append(formattedDates);
				
				if(education.schools[school].majors.length > 0)
				{
					for (major in education.schools[school].majors)
					{
						var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
						$(".education-entry:last").append(formattedMajor);
					}
				}			
			}
		}
		if(education.onlineCourses.length > 0)
		{
			$(".education-entry").append(HTMLonlineClasses);
			for (course in education.onlineCourses)
			{
				var formattedTitle = HTMLonlineTitle.replace("%data%" , education.onlineCourses[course].title);
				$(".education-entry:last").append(formattedTitle);
				var formattedSchool = HTMLonlineSchool.replace("%data%" , education.onlineCourses[course].school);
				$(".education-entry:last").append(formattedSchool);
				var formattedUrl = HTMLonlineURL.replace("%data%" , education.onlineCourses[course].url);
				$(".education-entry:last").append(formattedUrl);
				var formattedCourseDate = HTMLonlineDates.replace("%data%" , education.onlineCourses[course].dates);
				$(".education-entry:last").append(formattedCourseDate);
												
				if(education.onlineCourses[course].subjects.length > 0)
				{
					for (subject in education.onlineCourses[course].subjects)
					{
						var formattedSubject = HTMLonlineSubject.replace("%data%", education.onlineCourses[course].subjects[subject]);
						$(".education-entry:last").append(formattedSubject);
					}
				}	
				
			}
		}
	}	
}
education.display();

$("#mapDiv").append(googleMap);

/*
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
*/
