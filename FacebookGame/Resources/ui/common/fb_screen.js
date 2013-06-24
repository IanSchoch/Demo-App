//Takes a screenshot and posts to Facebook
function fb_screen() {
	self = Ti.UI.createWindow();
	Ti.Media.takeScreenshot(function(e) {
		var thePhoto = {
			message : 'I am having a blast using the Demo App',
			picture : e.media
		};
		Titanium.API.fb.requestWithGraphPath('me/photos', thePhoto, 'POST', function(e) {
			if (e.success) {
				alert("Success!  From FB: " + e.result);
			} else {
				if (e.error) {
					alert(e.error);
				} else {
					alert("Unkown result");
				}
			}
		});
	});
	return self;
}
module.exports = fb_screen;

