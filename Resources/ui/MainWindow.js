var MainWindow = function(nav) {
	var self = Ti.UI.createWindow({
		title: "Window " + nav.windows.length,
		backgroundColor: "#FFFFFF"
	});
	
	var button = Ti.UI.createButton({
		title: "Open Window (" + (nav.windows.length + 1) + ")",
		left: 10,
		right: 10,
		height: 50
	});
	self.add(button);
	
	button.addEventListener("click", function() {
		nav.open( new MainWindow(nav) );
	});
	
	return self;
};

module.exports = MainWindow;
