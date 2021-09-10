//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------
import { Styleable } from 'generated/core/Styleable';
import View = require('@smartface/native/ui/view');
import { ComponentStyleContext } from 'generated/core/ComponentStyleContext';
import System = require('@smartface/native/device/system');

import FlexLayout = require('@smartface/native/ui/flexlayout');
import ImageView = require('@smartface/native/ui/imageview');
import Button = require('@smartface/native/ui/button');

export default class Keyboardlayout extends FlexLayout implements Styleable {
	dispatch: (action: { [key: string]: any }) => void;
	children: { [key: string]: any } = {};
	static $$styleContext: ComponentStyleContext = {
		classNames: '.keyboardLayout',
		defaultClassNames: '.default_common .default_flexLayout',
		userProps: { testId: '___library___Keyboardlayout' }
	};
	imgUp: StyleContextComponentType<$Keyboardlayout$$FlNavigation$$ImgUp>;
	imgDown: StyleContextComponentType<$Keyboardlayout$$FlNavigation$$ImgDown>;
	btnDone: StyleContextComponentType<$Keyboardlayout$$BtnDone>;
	constructor(props?: ConstructorParameters<typeof FlexLayout>) {
		super();

		this.addChildByName(new $Keyboardlayout$$FlNavigation(), 'flNavigation');
		this.addChildByName(new $Keyboardlayout$$BtnDone(), 'btnDone');
		this.imgUp = this.children.flNavigation.children.imgUp;
		this.imgDown = this.children.flNavigation.children.imgDown;
		this.btnDone = this.children.btnDone;
	}
	addChildByName(child: View, name: string) {
		this.children[name] = child;
		this.addChild(child);
	}
	addChild(child: View, name?: string, classNames?: string, userProps?: { [key: string]: any }, defaultClassNames?: string): void {
		if (this['layout']) {
			this['layout'].addChild(child);
		} else {
			super.addChild(child);
		}
	}
}

class $Keyboardlayout$$FlNavigation extends FlexLayout implements Styleable {
	dispatch: (action: { [key: string]: any }) => void;
	children: { [key: string]: any } = {};
	static $$styleContext: ComponentStyleContext = {
		classNames: '.keyboardLayout-navigation',
		defaultClassNames: '.default_common .default_flexLayout',
		userProps: { testId: '___library___Keyboardlayout_FlNavigation' }
	};
	constructor() {
		super();

		this.addChildByName(new $Keyboardlayout$$FlNavigation$$ImgUp(), 'imgUp');
		this.addChildByName(new $Keyboardlayout$$FlNavigation$$ImgDown(), 'imgDown');
	}
	addChildByName(child: View, name: string) {
		this.children[name] = child;
		if (this['layout']) {
			this['layout'].addChild(child);
		} else {
			this.addChild(child);
		}
	}
}
class $Keyboardlayout$$FlNavigation$$ImgUp extends ImageView implements Styleable {
	dispatch: (action: { [key: string]: any }) => void;
	static $$styleContext: ComponentStyleContext = {
		classNames: '.keyboardLayout-image.up',
		defaultClassNames: '.default_common .default_imageView',
		userProps: { testId: '___library___Keyboardlayout_FlNavigation_ImgUp' }
	};
	constructor() {
		super();
	}
}

class $Keyboardlayout$$FlNavigation$$ImgDown extends ImageView implements Styleable {
	dispatch: (action: { [key: string]: any }) => void;
	static $$styleContext: ComponentStyleContext = {
		classNames: '.keyboardLayout-image.down',
		defaultClassNames: '.default_common .default_imageView',
		userProps: { testId: '___library___Keyboardlayout_FlNavigation_ImgDown' }
	};
	constructor() {
		super();
	}
}

class $Keyboardlayout$$BtnDone extends Button implements Styleable {
	dispatch: (action: { [key: string]: any }) => void;
	static $$styleContext: ComponentStyleContext = {
		classNames: '.keyboardLayout-button',
		defaultClassNames: '.default_common .default_button',
		userProps: { testId: '___library___Keyboardlayout_BtnDone' }
	};
	constructor() {
		super({ text: 'Done' });
	}
}
