//  get data
db.collection('Catalog-Projects').get().then(snapshot => {
    var path = window.location.pathname;
	var page = path.split("/").pop();
	if(page == "catalog.html")
	{
        setupGuides(snapshot.docs);
	}
});


// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log('user logged in: ', user);
        setupUI(user);
    } else {
        setupUI();
        console.log('user logged out');
    }
});

//singup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    
    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    }); 
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});
const logoutSmall = document.querySelector('#logoutSmall');
logoutSmall.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        //close the login modal and reset the form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});