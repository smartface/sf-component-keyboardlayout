//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const FlexLayout = require('sf-core/ui/flexlayout')
const ImageView = require('sf-core/ui/imageview')
const Button = require('sf-core/ui/button')

function addChild(childName, ChildClass, componentInstance) {
	this.children = this.children || {};
	this.children[childName] = new ChildClass(componentInstance);
	if (this.layout) this.layout.addChild(this.children[childName]);
	else this.addChild(this.children[childName]);
}

// Constructor
function KeyboardLayout(_super, props) {
	// Initalizes super class for this component scope

	_super(this, props);
	addChild.call(this, 'flNavigation', $KeyboardLayout$$FlNavigation_, this);
	addChild.call(this, 'btnDone', $KeyboardLayout$$BtnDone_, this);
}
KeyboardLayout.$$styleContext = {
	classNames: '.keyboardLayout',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const KeyboardLayout_ = FlexLayout(KeyboardLayout);

function $KeyboardLayout$$FlNavigation(_super, pageInstance) {
	_super(this);

	addChild.call(
		this,
		'imgUp',
		$KeyboardLayout$$FlNavigation$$ImgUp_,
		pageInstance
	);
	addChild.call(
		this,
		'imgDown',
		$KeyboardLayout$$FlNavigation$$ImgDown_,
		pageInstance
	);
}
$KeyboardLayout$$FlNavigation.$$styleContext = {
	classNames: '.keyboardLayout-navigation',
	defaultClassNames: '.default_common .default_flexLayout',
	userProps: {}
};
const $KeyboardLayout$$FlNavigation_ = FlexLayout(
	$KeyboardLayout$$FlNavigation
);
function $KeyboardLayout$$FlNavigation$$ImgUp(_super, pageInstance) {
	_super(this);

	pageInstance.imgUp = this;
}
$KeyboardLayout$$FlNavigation$$ImgUp.$$styleContext = {
	classNames: '.keyboardLayout-image.up',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
const $KeyboardLayout$$FlNavigation$$ImgUp_ = ImageView(
	$KeyboardLayout$$FlNavigation$$ImgUp
);

function $KeyboardLayout$$FlNavigation$$ImgDown(_super, pageInstance) {
	_super(this);

	pageInstance.imgDown = this;
}
$KeyboardLayout$$FlNavigation$$ImgDown.$$styleContext = {
	classNames: '.keyboardLayout-image.down',
	defaultClassNames: '.default_common .default_imageView',
	userProps: {}
};
const $KeyboardLayout$$FlNavigation$$ImgDown_ = ImageView(
	$KeyboardLayout$$FlNavigation$$ImgDown
);

function $KeyboardLayout$$BtnDone(_super, pageInstance) {
	_super(this, { text: 'Done' });

	pageInstance.btnDone = this;
}
$KeyboardLayout$$BtnDone.$$styleContext = {
	classNames: '.keyboardLayout-button',
	defaultClassNames: '.default_common .default_button',
	userProps: {}
};
const $KeyboardLayout$$BtnDone_ = Button($KeyboardLayout$$BtnDone);

module.exports = KeyboardLayout_;
