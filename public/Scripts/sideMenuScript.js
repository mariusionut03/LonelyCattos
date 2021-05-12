const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
	if (user)
	{
		// toggle UI elements
		loggedInLinks.forEach(item => item.style.display = 'block');
		loggedOutLinks.forEach(item => item.style.display = 'none');
	} else
	{
		// toggle UI elements
		loggedInLinks.forEach(item => item.style.display = 'none');
		loggedOutLinks.forEach(item => item.style.display = 'block');
	}
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
}

function maximizeSideNavigation()
{
	var sideMenu = document.getElementById("sideMenu");
	var sideMenuSmall = document.getElementById("sideMenuSmall");
	sideMenu.style.width = "180px";
	sideMenuSmall.style.width = "0"
}