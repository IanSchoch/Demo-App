//Defines the main menu which appears upon clicking the pause button.
//Contains label, table of buttons, and close button
function menuWindow() {
	var self = Ti.UI.createWindow({
		borderColor : '#000',
		borderRadius : 10,
		borderWidth : 5,
		backgroundColor : 'blue',
		top : '10%',
		bottom : '10%',
		left : '5%',
		right : '5%',
		layout : 'vertical'
	});
	var faceButt = Ti.API.fb.createLoginButton({});
	var data = [{
		title : 'Facebook Screen',
		hasChild : true,
		test : 'ui/common/fb_screen'
	}, {
		title : 'Facebook Status',
		hasChild : true,
		test : 'ui/common/fb_status'
	}, {
		title : 'View Facebook Feed',
		hasChild : true,
		test : 'ui/common/fb_feed'
	}];
	for (var i = 0; i < data.length; i++) {
		data[i].color = '#000';
		data[i].font = {
			fontSize : 24,
			font : 'Arial',
			fontWeight : 'bold'
		}
	};
	var tableview = Titanium.UI.createTableView({
		backgroundColor : 'blue',
		data : data,
		height : 150
	});

	tableview.addEventListener('click', function(e) {
		if (e.rowData.test) {
			resultWin = require(e.rowData.test);
			var win = new resultWin();
		}
	});
	menuLabel = Ti.UI.createLabel({
		text : 'Game Paused',
		font : {
			fontSize : 36,
			font : 'Arial'
		}
	});
	var resumeGame = Ti.UI.createButton({
		title : 'Resume game',
		font : {
			fontSize : 24,
			font : 'Arial'
		},
		height : 50
	});
	self.add(menuLabel);
	self.add(faceButt);
	self.add(tableview);
	self.add(resumeGame);

	resumeGame.addEventListener('click', function(e) {
		self.hide();
		//future: enable menu button
	});

	return self;
}

module.exports = menuWindow;
