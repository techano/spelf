alert("G Sign in script loaded");

function onSignIn(googleuser) {
  var profile = auth2.currentUser.get().getBasicProfile();
  alert("successful login,");
}
