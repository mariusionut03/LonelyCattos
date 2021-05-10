var database;

document.addEventListener('DOMContentLoaded', function() {
	var modals = document.querySelectorAll('.modal');
	M.Modal.init(modals);
	//var items = document.querySelectorAll('.collapsible');
	//M.Collapsible.init(items);
});



function setup()
{
	var firebaseConfig = {
    	apiKey: "AIzaSyAuUSz4qWUPoiPrABtM7Hg5gR8b5McZfok",
    	authDomain: "lonely-cattos.firebaseapp.com",
    	databaseURL: "https://lonely-cattos-default-rtdb.europe-west1.firebasedatabase.app",
    	projectId: "lonely-cattos",
    	storageBucket: "lonely-cattos.appspot.com",
    	messagingSenderId: "34557275051",
    	appId: "1:34557275051:web:b977924371b71e45fa80ee",
    	measurementId: "G-MPQQRE7FHR"
  	};
  	// Initialize Firebase
  	firebase.initializeApp(firebaseConfig);
  	firebase.analytics();

  	database = firebase.database();
}

function openIndex()
{
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page != "index.html")
	{
		window.location.href='index.html'
	}
}

function openCatalog()
{
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page != "catalog.html")
	{
		window.location.href='catalog.html'
	}
}

function openOther()
{
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page != "other.html")
	{
		window.location.href='other.html'
	}
}

function openAbout()
{
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page != "about.html")
	{
		window.location.href='about.html'
	}
}

function openSettings()
{
	var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page != "settings.html")
	{
		window.location.href='settings.html'
	}
}

function minimizeSideNavigation()
{
	var sideMenu = document.getElementById("sideMenu");
	var sideMenuSmall = document.getElementById("sideMenuSmall");
	sideMenu.style.width = "0";
	sideMenuSmall.style.width = "70px"
	var data = {
		name: "Mariusel",
		sidenav: 0
	}

	console.log(data);
  	var ref = database.ref('settings');
  	ref.push(data);
}

function maximizeSideNavigation()
{
	var sideMenu = document.getElementById("sideMenu");
	var sideMenuSmall = document.getElementById("sideMenuSmall");
	sideMenu.style.width = "180px";
	sideMenuSmall.style.width = "0"
	var data = {
		name: "Mariusel",
		sidenav: 1
	}

	console.log(data);
  	var ref = database.ref('settings');
  	ref.push(data);
}

setup();