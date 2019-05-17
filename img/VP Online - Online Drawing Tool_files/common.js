window.evalEdition = function(member, edition) {
	window.location.assign('/rest/admin/members/eval-edition?member=' + member + '&edition=' + edition + '&r=' + encodeURIComponent(window.location.pathname + window.location.hash));
}

window.signIn = function(email) {
	window.signedIn = function(edition, endDate) {
		window.signedIn = undefined;
		window.alert("Sign in success:\nEdition: " + edition + "\nEnd Date: " + new Date(endDate).toDateString());
	}

	var w = 400, h = 200;
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	var baseUrl = window.baseUrl || '';
	window.open(baseUrl + 'sign-in-subscription.jsp?email=' + email, "signin", 'width='+w+', height='+h+', top='+top+', left='+left + ',scrollbars=no');
}