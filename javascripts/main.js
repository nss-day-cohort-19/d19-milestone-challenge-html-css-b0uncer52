
//Load Top Nav List
var nav = document.getElementById('topNav');
var navList =  [{url: "index.html", 		name: "Home"	},
				{url: "blog.html", 			name: "Blog"	},
				{url: "#",					name: "Page 3"	},
				{url: "#", 					name: "Page 4"	},
				{url: "#",					name: "Page 5"	},
				{url: "#", 					name: "Page 6"	}];
var navText = '<ul>';
var navLiWidth = 100 / navList.length;
navList.forEach(function(navLink){
	navText += '<a href=' + navLink.url + '><li style="width: '+ navLiWidth
	+ '%;">' + navLink.name + '</li></a>';});
navText += '</ul><hr>';
nav.innerHTML = navText;

// Right Bar
var rightBar = document.getElementById("rightBar");
	// Load Bio
	var bio = '<div id="bio"><img id="profile" src="images/profile.jpg" alt="My Profile Picture" />'
		+ '<h3><strong>Jason Smith</strong></h3>'
		+ '<h5>jasonlsmith52@gmail.com</h5>'
		+ '<h5>615-521-9805</h5>'
		+ '<a href="http://www.facebook.com/jason.lee.370177"><img src="images/facebook.jpg" alt="facebook" /></a>'
		+ '<a href="http://github.com/b0uncer52"><img src="images/github.jpg" alt="github" /></a>'
		+ '<a href="http://twitter.com/b0uncer52"><img src="images/twitter.jpg" alt="twitter" /></a>'
		+ '</div>';
//Populate Right Bar
rightBar.innerHTML += bio;

//Left Bar
var leftBar = document.getElementById("leftBar");
	//Load Links
	var linkList = [{url: "http://starcitygames.com/",		name: "StarCityGames"},
					{url: "http://www.epiccardgame.com/",	name: "Epic"},
					{url: "",								name: ""},
					{url: "",								name: ""},
					{url: "",								name: ""}];
	var linkText = '<ol>';
	linkList.forEach(function(link){
		linkText += '<a href=' + link.url + '><li>' + link.name + '</li></a>';});
	linkText += '</ol>';
//Populate Left Bar
leftBar.innerHTML += linkText;

//Footer
var footer = document.getElementById('footer');
footer.innerHTML = "&copy; 2017 Jason's Page";