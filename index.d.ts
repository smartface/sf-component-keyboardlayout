import FlexLayout from '@smartface/native/ui/flexLayout';
import TextBox from '@smartface/native/ui/textbox';
import Button from '@smartface/native/ui/button';

export default class KeyboardLayout extends FlexLayout {
  static init: (textBoxes: Array<TextBox> | TextBox) => Array<KeyboardLayout>;
  btnDone: Button;
  textBox: TextBox;
  toggleDisabilityofUpImage: (disabled: boolean) => void;
  toggleVisibilityOfUpImage: (visible: boolean) => void;
  toggleDisabilityofDownImage: (disabled: boolean) => void;
  toggleVisibilityOfDownImage: (visible: boolean) => void;
  toggleVisibilityOfDoneButton: (visible: boolean) => void;
  onUpImageClick: () => void;
  onDownImageClick: () => void;
  onDoneButtonClick: () => void;
}
