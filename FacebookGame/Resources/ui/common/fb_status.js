//Posts a input String via textArea
function fb_status() {
	var self = Ti.UI.createWindow({
		top : '20%',
		left : '20%',
		right : '20%',
		bottom : '20%',
		backgroundColor : 'white',
		borderColor : '#000',
		borderRadius : 10,
		//borderWidth : 5,
		layout:'vertical'
	});
	statusPrompt = Ti.UI.createLabel({
		text : "Write a message to Facebook!",
		//bottom : '70%'
	});
	fbText = Ti.UI.createTextArea({
		width:Ti.UI.FILL,
		height:100,
		borderColor : 'black',
		backgroundColor : 'white',
	});
	var closeButton = Ti.UI.createButton({
		title : 'Close',
		//top : '80%'
	});
	var sendButton = Ti.UI.createButton({
		title : 'Post to FB'
	})

	self.add(statusPrompt);
	self.add(fbText);
	self.add(sendButton);
	self.add(closeButton);

	sendButton.addEventListener('click', function(e) {

		var theMessage = {
			message : fbText.getValue()
		};

		Ti.API.fb.requestWithGraphPath('me/feed', theMessage, 'POST', function(e) {
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
	})

	closeButton.addEventListener('click', function(e) {
		self.hide();
		//menuButtons.show();
	});
	Titanium.API.window.add(self);
	return self;
}

module.exports = fb_status;
