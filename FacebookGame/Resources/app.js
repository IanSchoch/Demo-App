//Ian Schoch Demo App
//June 24th

//bootstrap and check dependencies
if (Ti.version < 1.8) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}
//create global window and fb variables
Titanium.API.window = Ti.UI.createWindow({
	title : "Demo App",
	backgroundColor : 'green'
});

//Log in to facebook using Titanium Studio Module.
Titanium.API.fb = require('facebook');
Titanium.API.fb.appid = 547700735290827;
Titanium.API.fb.permissions = ['publish_stream'];
Titanium.API.fb.authorize();
Titanium.API.fb.forceDialogAuth = false;

Titanium.API.fb.addEventListener('login', function(e) {
	if (e.success) {
		alert('You are logged in to Facebook');
	} else if (e.error) {
		alert(e.error);
	} else if (e.cancelled) {
		alert("Cancelled");
	}
});
// This is a single context application with multiple windows in a stack
(function() {
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname, version = Ti.Platform.version, height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;

	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));

	var FirstView = require('ui/common/FirstView');
	var firstView = new FirstView();
	Titanium.API.window.add(firstView);
	Titanium.API.window.open();
})();
