alert("G Sign in script v2.1 loaded");

function onSignIn(googleuser) {
  var profile = auth2.currentUser.get().getBasicProfile();
  alert("successful login,");
}

function SignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function () {
          alert("User signed out.");
          });
}