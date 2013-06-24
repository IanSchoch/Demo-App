//View in the main window
//Defines the menuButton
function FirstView() {
	var menuWindow = require('ui/common/menuWindow');
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml

	var menuButton = Ti.UI.createButton({
		title : 'Menu',
		borderColor : '#000',
		borderRadius : 10,
		borderWidth : 5,
		color : 'red',
		backgroundColor : 'blue',
		width : Ti.UI.FILL,
		top : '85%',
		bottom : 0
	});
	
	self.add(menuButton)
	
	
	var menuW = new menuWindow();
	self.add(menuW);
	menuW.hide();
	menuButton.addEventListener('click', function(e) {
		//future: disable menu button
		menuW.show();
	});

	return self;
}

module.exports = FirstView;
