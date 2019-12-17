const extend = require('js-base/core/extend');
const KeyboardLayoutDesign = require('library/KeyboardLayout');
const Screen = require("sf-core/device/screen");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const guid = require("sf-extension-utils/lib/guid");

const KeyboardLayout = extend(KeyboardLayoutDesign)(
	function(_super, props = {}, pageName) {
		_super(this, props);
		this.pageName = pageName;
		this.init = init.bind(this);
		this.textBoxes = [];
	}
);

/**
 * Initializes a keyboard layout for each given textbox or material textbox
 * When given one textBox, up and down buttons will be disabled by default.
 * @function init
 * @param {Object[]|Object} textBoxes
 * @public
 * @example
 * const KeyboardLayout = require("sf-modules/KeyboardLayout");
 * const keyboardLayout = new KeyboardLayout();
 * keyboardLayout.init([
 *     textBox1,
 *	   textBox2
 * ]);
 */
function init(textBoxes = []) {
	const component = this;
	componentContextPatch(component, `keyboardLayout${guid()}`);
	component.dispatch({
		type: "updateUserStyle",
		userStyle: {
			width: Screen.width
		}
	});
	if (Array.isArray(textBoxes)) {
		component.textBoxes = textBoxes;
		
	}
	else {
		component.textBoxes = [textBoxes];
	}
}

function toggleVisibilityofUpButton(visible) {}
function toggleUpButton() {}

/**
 * Internal Method to use for toggling visiblity of layouts.
 * @function
 * @param {Object} layout - The layout to dispatch of. Check if it is added to context
 * @param {boolean} visible - Visibility to be toggled of.
 * @private
 * 
 */
function setVisibility(layout, visible) {
	layout.dispatch && layout.dispatch({
		type: "updateUserStyle",
		userStyle: {
			visible
		}
	});
}

module.exports = KeyboardLayout;
