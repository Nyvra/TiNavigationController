/*
 * Author: Rafael Kellermann Streit
 * Twitter: @rafaelks
 * 
 * This module was based in vuinguyen NavigationController project
 * with some differences in code/logic.
 * 
 * Based project: https://github.com/vuinguyen/Ti-Navigation-Controller/
 */

var isAndroid = (Ti.Platform.osname === "android");

var TiNavigationController = function() {
	this.windows = [];
};

TiNavigationController.prototype.open = function(win) {
	var self = this,
		windows = self.windows;

	windows.push(win);

	win.addEventListener("close", function() {
		if (windows.length > 1) {
			windows.pop();
		}
	});

	win.navBarHidden = win.navBarHidden || false;

	if (windows.length === 1) {
		if (isAndroid) {
			win.exitOnClose = true;
			win.open();
		} else {
			var winBase = Ti.UI.createWindow();

			self.nav = Ti.UI.iPhone.createNavigationGroup({
				window: win
			});
			winBase.add(self.nav);

			winBase.open();
		}
	} else {
		if (isAndroid) {
			win.open();
		} else {
			self.nav.open(win);
		}
	}
};

module.exports = TiNavigationController;