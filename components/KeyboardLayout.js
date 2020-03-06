/**
 * Provides a component for iOS that goes at the top of a keyboard when focused on a TextBox
 * Number-only keyboard on iOS does not have a ActionKey on it, therefore it is recommended to use this component for ease of usage.
 * This component is not supported on Android.
 * @module KeyboardLayout
 * @type {Class}
 * @author Furkan Arabacı <furkan.arabaci@smartface.io>
 * @copyright Smartface 2020
 */
const pushClassNames = require("@smartface/contx/lib/styling/action/pushClassNames");
const System = require("sf-core/device/system");
const Application = require("sf-core/application");
const TextBox = require("sf-core/ui/textbox");
const extend = require('js-base/core/extend');
const KeyboardLayoutDesign = require('library/KeyboardLayout');
const Screen = require("sf-core/device/screen");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const guid = require("sf-extension-utils/lib/guid");
const touch = require("sf-extension-utils/lib/touch");

/**
 * @class
 * @example
 * const KeyboardLayout = require("sf_modules/KeyboardLayout");
 * function onLoad() {
 *     const page = this;
 *     const { textBox1, textBox2, textBox3 } = page;
 *     KeyboardLayout.init([textBox1, textBox2, textBox3]);
 * }
 */
const KeyboardLayout = extend(KeyboardLayoutDesign)(
    function(_super, props = {}, pageName) {
        _super(this, props);
        this.pageName = pageName;
        this.textBox = {};
        this.toggleDisabilityofUpImage = toggleDisabilityofUpImage.bind(this);
        this.toggleVisibilityOfUpImage = toggleVisibilityOfUpImage.bind(this);
        this.toggleDisabilityofDownImage = toggleDisabilityofDownImage.bind(this);
        this.toggleVisibilityOfDownImage = toggleVisibilityOfDownImage.bind(this);
        this.toggleVisibilityOfDoneButton = toggleVisibilityOfDoneButton.bind(this);
        
        this.btnDone.text = global.lang.done;
        
        let _onUpImageClick = () => {};
        let _onDownImageClick = () => {};
        let _onDoneButtonClick = () => {};
        Object.defineProperties(this, {
            onUpImageClick: {
                set: value => {
                    if (typeof value === "function") {
                        touch.addPressEvent(this.imgUp, value);
                        _onUpImageClick = value;
                    }
                },
                get: () => _onUpImageClick
            },
            onDownImageClick: {
                set: value => {
                    if (typeof value === "function") {
                        touch.addPressEvent(this.imgDown, value);
                        _onDownImageClick = value;
                    }
                },
                get: () => _onDownImageClick
            },
            onDoneButtonClick: {
                set: value => {
                    if (typeof value === "function") {
                        touch.addPressEvent(this.btnDone, value);
                        _onDoneButtonClick = value;
                    }
                },
                get: () => _onDoneButtonClick
            }
        });
    }
);

/**
 * Initializes a keyboard layout for each given textbox or material textbox
 * When given one textBox, up and down buttons will be disabled by default.
 * @function init
 * @static
 * @param {Object[]|Object} textBoxes - Array of or single textBox instance
 * @returns {Object[]} - Keyboard layouts as an order of textboxes given initially
 * @public
 */
KeyboardLayout.init = (textBoxes = []) => {
    if (System.OS === "Android") {
        return;
    }
    const currentTextBoxes = Array.isArray(textBoxes) ? textBoxes : [textBoxes];
    const currentLayouts = [];
    currentTextBoxes.forEach((textBox) => {
        if (textBox instanceof TextBox) {
            const keyboardLayout = new KeyboardLayout();
            componentContextPatch(keyboardLayout, `keyboardLayout${guid()}`);
            keyboardLayout.dispatch({
                type: "updateUserStyle",
                userStyle: {
                    width: Screen.width
                }
            });
            keyboardLayout.textBox = textBox;
            textBox.ios.keyboardLayout = keyboardLayout;
            currentLayouts.push(keyboardLayout);
        }
    });
    setDefaultActions(currentLayouts);
    return currentLayouts;
};

/**
 * Sets disability of up image. When given true, it will gray out the layout.
 * @function toggleVisibilityofUpImage
 * @param {boolean} disabled - Pushes .disabled class to the layout, grays out by default
 * @public
 */

function toggleDisabilityofUpImage(disabled = false) {
    const component = this;
    const disabledClassText = disabled ? ".disabled" : "";
    component.imgUp.dispatch(pushClassNames(`.keyboardLayout-image.up${disabledClassText}`));
}

/**
 * Sets disability of down image. When given true, it will gray out the layout.
 * @function toggleVisibilityofDownImage
 * @param {boolean} disabled - Pushes .disabled class to the layout, grays out by default
 * @public
 */
function toggleDisabilityofDownImage(disabled = false) {
    const component = this;
    const disabledClassText = disabled ? ".disabled" : "";
    component.imgDown.dispatch(pushClassNames(`.keyboardLayout-image.down${disabledClassText}`));
}

/**
 * Sets visibility of up image
 * @function toggleVisibilityOfUpImage
 * @param {boolean} visible - Toggles visibility
 * @public
 */
function toggleVisibilityOfUpImage(visible = true) {
    const component = this;
    component.imgUp.dispatch({
        type: "updateUserStyle",
        userStyle: {
            visible
        }
    });
}

/**
 * Sets visibility of down image
 * @function toggleVisibilityOfDownImage
 * @param {boolean} visible - Toggles visibility
 * @public
 */
function toggleVisibilityOfDownImage(visible = true) {
    const component = this;
    component.imgDown.dispatch({
        type: "updateUserStyle",
        userStyle: {
            visible
        }
    });
}

/**
 * Sets visibility of done button
 * @function toggleVisibilityOfDoneButton
 * @param {boolean} visible - Toggles visibility
 * @public
 */
function toggleVisibilityOfDoneButton(visible = true) {
    const component = this;
    component.btnDone.dispatch({
        type: "updateUserStyle",
        userStyle: {
            visible
        }
    });
}

/**
 * Internal Method to define default events for every button
 * @function setDefaultActions
 * @param {Object[]|Object} textBoxes
 * @private
 */
function setDefaultActions(keyboardLayouts = []) {
    keyboardLayouts.forEach((keyboardLayout, index) => {
        keyboardLayout.onDoneButtonClick = () => {
            Application.hideKeyboard();
            keyboardLayout.textBox.removeFocus();
        };
        keyboardLayout.onUpImageClick = () => keyboardLayouts[index - 1] && keyboardLayouts[index - 1].textBox.requestFocus();
        keyboardLayout.onDownImageClick = () => keyboardLayouts[index + 1] && keyboardLayouts[index + 1].textBox.requestFocus();
        keyboardLayout.toggleDisabilityofUpImage(index === 0);
        keyboardLayout.toggleDisabilityofDownImage(index === keyboardLayouts.length - 1);
        keyboardLayout.toggleVisibilityOfDownImage(keyboardLayouts.length !== 1);
        keyboardLayout.toggleVisibilityOfUpImage(keyboardLayouts.length !== 1);
    });
}

module.exports = KeyboardLayout;
