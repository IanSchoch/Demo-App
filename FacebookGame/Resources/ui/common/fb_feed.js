//Posts latest 10 Facebook posts
function fb_feed() {
	var feed;
	Ti.API.fb.requestWithGraphPath('me/home', {}, 'Get', function(e) {
		if (e.success) {
			alert("Success!  From FB: ");
			var end = JSON.parse(e.result);
			var data = [];
			for (var i = 0; i < 10; i++) {
				data[i] = {
					properties : {
						font : {
							fontSize : 12,
							font : 'Arial'
						},
						title : end.data[i].from.name + ": " + end.data[i].message,
						subtitle : end.data[i].message,
						allowsSelection : true,
					}
				}

			}
			close = Ti.UI.createButton({
				title : 'Close Window',
				bottom : 0,
				top : '90%',
				width : Ti.UI.FILL
			})
			close.addEventListener('click', function(e) {
				Ti.API.window.remove(listView)
				Ti.API.window.remove(close);
			});
			var listSection = Titanium.UI.createListSection({
				headerTitle : "Your FaceBook Feed",
				items : data
			});

			var listView = Titanium.UI.createListView({
				sections : [listSection],
				scrollable : true,
				bottom : '10%'
			});

			Ti.API.window.add(listView);
			Ti.API.window.add(close);

		} else {
			if (e.error) {
				alert(e.error);
			} else {
				alert("Unkown result");
			}
		}
	});
}

module.exports = fb_feed;
