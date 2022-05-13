//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------
import { Styleable } from "generated/core/Styleable";
import View from "@smartface/native/ui/view";
import { ComponentStyleContext } from "@smartface/styling-context/lib/ComponentStyleContext";
import { extendOfViewGroup } from "@smartface/styling-context/lib/extendOfViewGroup";
import {
  styleableComponentMixin,
  styleableContainerComponentMixin,
} from "@smartface/styling-context";
import System from "@smartface/native/device/system";

import FlexLayout from "@smartface/native/ui/flexlayout";
import ImageView from "@smartface/native/ui/imageview";
import Button from "@smartface/native/ui/button";

interface $KeyboardlayoutChildren {
  flNavigation?: $Keyboardlayout$$FlNavigation;
  btnDone?: $Keyboardlayout$$BtnDone;
  [key: string]: any;
}

export default class $Keyboardlayout extends styleableContainerComponentMixin(
  FlexLayout
) {
  protected _children: $KeyboardlayoutChildren = {};
  get children(): Readonly<$KeyboardlayoutChildren> {
    return this._children;
  }
  static $$styleContext: ComponentStyleContext = {
    classNames: ".keyboardLayout",
    defaultClassNames: ".default_common .default_flexLayout",
    userProps: {},
  };
  flNavigation: $Keyboardlayout$$FlNavigation;
  imgUp: $Keyboardlayout$$FlNavigation$$ImgUp;
  imgDown: $Keyboardlayout$$FlNavigation$$ImgDown;
  btnDone: $Keyboardlayout$$BtnDone;
  constructor(props?: any) {
    super(props);

    this.addChildByName(new $Keyboardlayout$$FlNavigation(), "flNavigation");
    this.addChildByName(new $Keyboardlayout$$BtnDone(), "btnDone");
    this.flNavigation = this.children.flNavigation;
    this.imgUp = this.children.flNavigation.children.imgUp;
    this.imgDown = this.children.flNavigation.children.imgDown;
    this.btnDone = this.children.btnDone;

    this.testId = "___library___Keyboardlayout";
  }

  /**
   * @deprecated The method should not be used
   */
  addChildByName(child: View<any>, name: string) {
    this._children[name] = child;
    this.addStyleableChild(child, name);
    this.addChild(child);
  }
  addChild(
    child: View<any>,
    name?: string,
    classNames?: string,
    userProps?: { [key: string]: any },
    defaultClassNames?: string
  ): void {
    if (this["layout"]) {
      this["layout"].addChild(child);
    } else {
      super.addChild(child);
    }
    if (name) {
      this.addStyleableChild(
        child,
        name,
        classNames,
        userProps,
        defaultClassNames
      );
    }
  }

  applyTestIDs(testId: string) {
    Object.keys(this._children).forEach((child) => {
      this._children[child].testId =
        testId + "_" + child.charAt(0).toUpperCase() + child.slice(1);
      if (this._children[child].applyTestIDs) {
        this._children[child].applyTestIDs(this._children[child].testId);
      }
    });
  }
}

interface $Keyboardlayout$$FlNavigationChildren {
  imgUp?: $Keyboardlayout$$FlNavigation$$ImgUp;
  imgDown?: $Keyboardlayout$$FlNavigation$$ImgDown;
  [key: string]: any;
}

class $Keyboardlayout$$FlNavigation extends styleableContainerComponentMixin(
  FlexLayout
) {
  protected _children: $Keyboardlayout$$FlNavigationChildren = {};
  get children(): Readonly<$Keyboardlayout$$FlNavigationChildren> {
    return this._children;
  }

  static $$styleContext: ComponentStyleContext = {
    classNames: ".keyboardLayout-navigation",
    defaultClassNames: ".default_common .default_flexLayout",
    userProps: {},
  };
  constructor(props?: any) {
    super(props);

    this.addChildByName(new $Keyboardlayout$$FlNavigation$$ImgUp(), "imgUp");
    this.addChildByName(
      new $Keyboardlayout$$FlNavigation$$ImgDown(),
      "imgDown"
    );

    this.testId = "___library___Keyboardlayout_FlNavigation";
  }

  /**
   * @deprecated The method should not be used
   */

  addChildByName(child: View<any>, name: string) {
    this._children[name] = child;
    if (this["layout"]) {
      this["layout"].addChild(child);
    } else {
      this.addChild(child);
    }
  }
  applyTestIDs(testId: string) {
    Object.keys(this._children).forEach((child) => {
      this._children[child].testId =
        testId + "_" + child.charAt(0).toUpperCase() + child.slice(1);
      if (this._children[child].applyTestIDs) {
        this._children[child].applyTestIDs(this._children[child].testId);
      }
    });
  }
}

class $Keyboardlayout$$FlNavigation$$ImgUp extends styleableComponentMixin(
  ImageView
) {
  static $$styleContext: ComponentStyleContext = {
    classNames: ".keyboardLayout-image.up",
    defaultClassNames: ".default_common .default_imageView",
    userProps: {},
  };
  constructor(props?: any) {
    super(props);

    this.testId = "___library___Keyboardlayout_FlNavigation_ImgUp";
  }
}

class $Keyboardlayout$$FlNavigation$$ImgDown extends styleableComponentMixin(
  ImageView
) {
  static $$styleContext: ComponentStyleContext = {
    classNames: ".keyboardLayout-image.down",
    defaultClassNames: ".default_common .default_imageView",
    userProps: {},
  };
  constructor(props?: any) {
    super(props);

    this.testId = "___library___Keyboardlayout_FlNavigation_ImgDown";
  }
}

class $Keyboardlayout$$BtnDone extends styleableComponentMixin(Button) {
  static $$styleContext: ComponentStyleContext = {
    classNames: ".keyboardLayout-button",
    defaultClassNames: ".default_common .default_button",
    userProps: {},
  };
  constructor(props?: any) {
    super({ text: "Done" });

    this.testId = "___library___Keyboardlayout_BtnDone";
  }
}
