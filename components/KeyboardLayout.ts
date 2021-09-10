import pushClassNames from "@smartface/contx/lib/styling/action/pushClassNames";
import Application from "@smartface/native/application";
import Screen from "@smartface/native/device/screen";
import System from "@smartface/native/device/system";
import TextBox from "@smartface/native/ui/textbox";
import componentContextPatch from "@smartface/contx/lib/smartface/componentContextPatch";
import touch from "@smartface/extension-utils/lib/touch";
import KeyboardLayoutDesign from "../lib/KeyboardLayout";
import FlexLayout from "@smartface/native/ui/flexlayout";
import Button from "@smartface/native/ui/button";

export default class KeyboardLayout extends KeyboardLayoutDesign {
    btnDone: Button;
    textBox: TextBox;
    private _onUpImageClick: any;
    private _onDownImageClick: any;
    private _onDoneButtonClick: any;

    constructor(props?: ConstructorParameters<typeof FlexLayout>, pageName?: string) {
        super(props);
        this.btnDone.text = global.lang.done;
    }

    get onUpImageClick() {
        return this._onUpImageClick;
    }

    set onUpImageClick(value: () => void) {
        touch.addPressEvent(this.imgUp, value);
        this._onUpImageClick = value;
    }

    get onDownImageClick() {
        return this._onDownImageClick;
    }

    set onDownImageClick(value: () => void) {
        touch.addPressEvent(this.imgDown, value);
        this._onDownImageClick = value;
    }

    get onDoneImageClick() {
        return this._onDoneButtonClick;
    }

    set onDoneButtonClick(value: () => void) {
        touch.addPressEvent(this.btnDone, value);
        this._onDoneButtonClick = value;
    }

    /**
     * Sets disability of up image. When given true, it will gray out the layout.
     * @function toggleVisibilityofUpImage
     * @param {boolean} disabled - Pushes .disabled class to the layout, grays out by default
     * @public
     */
    toggleDisabilityofUpImage = (disabled = false) => {
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
    toggleDisabilityofDownImage = (disabled = false) => {
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
    toggleVisibilityOfUpImage = (visible = true) => {
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
    toggleVisibilityOfDownImage = (visible = true) => {
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
    toggleVisibilityOfDoneButton = (visible = true) => {
        const component = this;
        component.btnDone.dispatch({
            type: "updateUserStyle",
            userStyle: {
                visible
            }
        });
    }

    static init(textBoxes: Array<TextBox> | TextBox = []) {
        const currentTextBoxes = Array.isArray(textBoxes) ? textBoxes : [textBoxes];
        const currentLayouts: Array<KeyboardLayout> = [];
        currentTextBoxes.forEach((textBox, index) => {
            if (textBox instanceof TextBox) {
                const keyboardLayout = new KeyboardLayout();
                componentContextPatch(keyboardLayout, `keyboardLayout${index}`);
                keyboardLayout.dispatch({
                    type: "updateUserStyle",
                    userStyle: {
                        width: Screen.width
                    }
                });
                // Workaround for styles not being applied
                keyboardLayout.dispatch(pushClassNames([".keyboardLayout"]));
                keyboardLayout.flNavigation.dispatch(pushClassNames([".keyboardLayout-navigation"]));
                keyboardLayout.imgDown.dispatch(pushClassNames([".keyboardLayout-image.down"]));
                keyboardLayout.imgUp.dispatch(pushClassNames([".keyboardLayout-image.up"]));
                keyboardLayout.btnDone.dispatch(pushClassNames([".keyboardLayout-button"]));
                // End of workaround
    
                keyboardLayout.textBox = textBox;
                if (System.OS === "iOS") {
                    textBox.ios.keyboardLayout = keyboardLayout;
                }
                currentLayouts.push(keyboardLayout);
            }
        });
        setDefaultActions(currentLayouts);
        return currentLayouts;
    }

}

function setDefaultActions(keyboardLayouts: Array<KeyboardLayout> = []) {
    //@ts-ignore
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