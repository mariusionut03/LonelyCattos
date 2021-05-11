var database;

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

// make auth and firestore references
const auth = firebase.auth();
const db = firebase.firestore();

// update firestore settings
db.settings({ timestampsInSnapshots: true});

/*
Write data in Firebase
var data = {
		name: "Mariusel",
		sidenav: 1
	}

	console.log(data);
  	var ref = database.ref('settings');
  	ref.push(data);
*/

document.addEventListener('DOMContentLoaded', function() {
	var modals = document.querySelectorAll('.modal');
	M.Modal.init(modals);
	
	var items = document.querySelectorAll('.collapsible');
	M.Collapsible.init(items);
});