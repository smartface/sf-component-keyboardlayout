import Application from "@smartface/native/application";
import Screen from "@smartface/native/device/screen";
import System from "@smartface/native/device/system";
import TextBox from "@smartface/native/ui/textbox";
import KeyboardLayoutDesign from "../generated/KeyboardLayout";
import FlexLayout from "@smartface/native/ui/flexlayout";
import { ThemeService } from "@smartface/styling-context/lib/ThemeService";
import createPageContext from "@smartface/styling-context/lib/pageContext";

export default class KeyboardLayout extends KeyboardLayoutDesign {
	textBox?: TextBox;
	private _onUpImageClick: any;
	private _onDownImageClick: any;
	private _onDoneButtonClick: any;
	private _doneText = "DONE";

	constructor(props?: ConstructorParameters<typeof FlexLayout>, pageName?: string) {
		super(props);
		this.btnDone.text = this._doneText;
	}

	get doneText(): string {
		return this._doneText;
	}

	set doneText(value: string) {
		this._doneText = value;
		this.btnDone.text = this._doneText;
	}

	get onUpImageClick() {
		return this._onUpImageClick;
	}

	set onUpImageClick(value: () => void) {
		this.imgUp.on("touchEnded", value);
		this._onUpImageClick = value;
	}

	get onDownImageClick() {
		return this._onDownImageClick;
	}

	set onDownImageClick(value: () => void) {
		this.imgDown.on("touchEnded", value);
		this._onDownImageClick = value;
	}

	get onDoneImageClick() {
		return this._onDoneButtonClick;
	}

	set onDoneButtonClick(value: () => void) {
		this.btnDone.on("press", value);
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
		component.imgUp.dispatch?.({
			type: "pushClassNames",
			classNames: [`.keyboardLayout-image.up${disabledClassText}`],
		});
	};

	/**
	 * Sets disability of down image. When given true, it will gray out the layout.
	 * @function toggleVisibilityofDownImage
	 * @param {boolean} disabled - Pushes .disabled class to the layout, grays out by default
	 * @public
	 */
	toggleDisabilityofDownImage = (disabled = false) => {
		const component = this;
		const disabledClassText = disabled ? ".disabled" : "";

		component.imgDown.dispatch?.({
			type: "pushClassNames",
			classNames: [`.keyboardLayout-image.down${disabledClassText}`],
		});
	};

	/**
	 * Sets visibility of up image
	 * @function toggleVisibilityOfUpImage
	 * @param {boolean} visible - Toggles visibility
	 * @public
	 */
	toggleVisibilityOfUpImage = (visible = true) => {
		const component = this;
		component.imgUp.dispatch?.({
			type: "updateUserStyle",
			userStyle: {
				visible,
			},
		});
	};

	/**
	 * Sets visibility of down image
	 * @function toggleVisibilityOfDownImage
	 * @param {boolean} visible - Toggles visibility
	 * @public
	 */
	toggleVisibilityOfDownImage = (visible = true) => {
		const component = this;
		component.imgDown.dispatch?.({
			type: "updateUserStyle",
			userStyle: {
				visible,
			},
		});
	};

	/**
	 * Sets visibility of done button
	 * @function toggleVisibilityOfDoneButton
	 * @param {boolean} visible - Toggles visibility
	 * @public
	 */
	toggleVisibilityOfDoneButton = (visible = true) => {
		const component = this;
		component.btnDone.dispatch?.({
			type: "updateUserStyle",
			userStyle: {
				visible,
			},
		});
	};

	static init(textBoxes: Array<TextBox> | TextBox = [], doneText?: string) {
		const currentTextBoxes = Array.isArray(textBoxes) ? textBoxes : [textBoxes];
		const currentLayouts: Array<KeyboardLayout> = [];
		currentTextBoxes.forEach((textBox, index) => {
			if (textBox instanceof TextBox) {
				const keyboardLayout = new KeyboardLayout();
				keyboardLayout.doneText = doneText;
				ThemeService.instance.addPage(createPageContext(keyboardLayout, `keyboardLayout${index}`), `keyboardLayout${index}`);
				keyboardLayout.dispatch?.({
					type: "updateUserStyle",
					userStyle: {
						width: Screen.width,
					},
				});

				////#region Workaround for styles not being applied
				keyboardLayout.dispatch?.({
					type: "pushClassNames",
					classNames: [".keyboardLayout"],
				});
				keyboardLayout.flNavigation.dispatch?.({
					type: "pushClassNames",
					classNames: [".keyboardLayout-navigation"],
				});
				keyboardLayout.imgDown.dispatch?.({
					type: "pushClassNames",
					classNames: [".keyboardLayout-image.down"],
				});
				keyboardLayout.imgUp.dispatch?.({
					type: "pushClassNames",
					classNames: [".keyboardLayout-image.up"],
				});
				keyboardLayout.btnDone.dispatch?.({
					type: "pushClassNames",
					classNames: [".keyboardLayout-button"],
				});
				////#endregionEnd of workaround

				keyboardLayout.textBox = textBox;
				if (System.OS === System.OSType.IOS) {
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
	keyboardLayouts.forEach((keyboardLayout, index) => {
		keyboardLayout.onDoneButtonClick = () => {
			Application.hideKeyboard();
			keyboardLayout.textBox?.removeFocus();
		};
		keyboardLayout.onUpImageClick = () => keyboardLayouts[index - 1] && keyboardLayouts[index - 1].textBox?.requestFocus();
		keyboardLayout.onDownImageClick = () => keyboardLayouts[index + 1] && keyboardLayouts[index + 1].textBox?.requestFocus();
		keyboardLayout.toggleDisabilityofUpImage(index === 0);
		keyboardLayout.toggleDisabilityofDownImage(index === keyboardLayouts.length - 1);
		keyboardLayout.toggleVisibilityOfDownImage(keyboardLayouts.length !== 1);
		keyboardLayout.toggleVisibilityOfUpImage(keyboardLayouts.length !== 1);
	});
}
