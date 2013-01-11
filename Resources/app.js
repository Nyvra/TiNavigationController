var TiNavigationController = require("/lib/TiNavigationController"),
	MainWindow = require("/ui/MainWindow");
	
var nav = new TiNavigationController();
nav.open( new MainWindow(nav) );