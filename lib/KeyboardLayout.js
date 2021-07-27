//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const FlexLayout = require('@smartface/native/ui/flexlayout');
const ImageView = require('@smartface/native/ui/imageview');
const Button = require('@smartface/native/ui/button');

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}
KeyboardLayout.prototype = Object.create(FlexLayout.prototype);
// Constructor
function KeyboardLayout(props) {
	// Initalizes super class for this component scope
    FlexLayout.call(this, Object.assign({
        skipDefaults: true
    }, props));
	addChild.call(this, 'flNavigation', $KeyboardLayout$$FlNavigation, this);
	addChild.call(this, 'btnDone', $KeyboardLayout$$BtnDone, this);
}
KeyboardLayout.$$styleContext = {
	classNames: '.keyboardLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};

function $KeyboardLayout$$FlNavigation(pageInstance) {
    FlexLayout.call(this, {
        skipDefaults: true
    });
	pageInstance.flNavigation = this;
	addChild.call(
		this,
		'imgUp',
		$KeyboardLayout$$FlNavigation$$ImgUp,
		pageInstance
	);
	addChild.call(
		this,
		'imgDown',
		$KeyboardLayout$$FlNavigation$$ImgDown,
		pageInstance
	);
}
$KeyboardLayout$$FlNavigation.$$styleContext = {
	classNames: '.keyboardLayout-navigation',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};

$KeyboardLayout$$FlNavigation.prototype = Object.create(FlexLayout.prototype);

function $KeyboardLayout$$FlNavigation$$ImgUp(pageInstance) {
    ImageView.call(this, {
        skipDefaults: true
    });
	pageInstance.imgUp = this;
}
$KeyboardLayout$$FlNavigation$$ImgUp.$$styleContext = {
	classNames: '.keyboardLayout-image.up',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
$KeyboardLayout$$FlNavigation$$ImgUp.prototype = Object.create(ImageView.prototype);

function $KeyboardLayout$$FlNavigation$$ImgDown(pageInstance) {
    ImageView.call(this, {
        skipDefaults: true
    });
	pageInstance.imgDown = this;
}
$KeyboardLayout$$FlNavigation$$ImgDown.$$styleContext = {
	classNames: '.keyboardLayout-image.down',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
$KeyboardLayout$$FlNavigation$$ImgDown.prototype = Object.create(ImageView.prototype);

function $KeyboardLayout$$BtnDone(pageInstance) {
    Button.call(this, {
        skipDefaults: true
    });
	pageInstance.btnDone = this;
}
$KeyboardLayout$$BtnDone.$$styleContext = {
	classNames: '.keyboardLayout-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {}
};
$KeyboardLayout$$BtnDone.prototype = Object.create(Button.prototype);

module.exports = KeyboardLayout;
