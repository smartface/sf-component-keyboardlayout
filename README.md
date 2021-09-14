# Smartface KeyboardLayout Component

[![NPM](https://img.shields.io/npm/v/@smartface/component-keyboardlayout?style=flat-square)](https://www.npmjs.com/package/@smartface/component-keyboardlayout)

## Installation
Execute the command on the scripts directory
```shell
yarn i @smartface/component-keyboardlayout
```

<a name="module_KeyboardLayout"></a>

## KeyboardLayout : <code>Class</code>
Provides a component for iOS that goes at the top of a keyboard when focused on a TextBox
Number-only keyboard on iOS does not have a ActionKey on it, therefore it is recommended to use this component for ease of usage.
This component is not supported on Android.

**Author**: Furkan Arabacı <furkan.arabaci@smartface.io>  
**Copyright**: Smartface 2019  

* [KeyboardLayout](#module_KeyboardLayout) : <code>Class</code>
    * _static_
        * [.init(textBoxes)](#module_KeyboardLayout.init) ⇒ <code>Array.&lt;Object&gt;</code>
    * _inner_
        * [~KeyboardLayout](#module_KeyboardLayout..KeyboardLayout)
        * [~toggleVisibilityofUpImage(disabled)](#module_KeyboardLayout..toggleVisibilityofUpImage)
        * [~toggleVisibilityofDownImage(disabled)](#module_KeyboardLayout..toggleVisibilityofDownImage)
        * [~toggleVisibilityOfUpImage(visible)](#module_KeyboardLayout..toggleVisibilityOfUpImage)
        * [~toggleVisibilityOfDownImage(visible)](#module_KeyboardLayout..toggleVisibilityOfDownImage)
        * [~toggleVisibilityOfDoneButton(visible)](#module_KeyboardLayout..toggleVisibilityOfDoneButton)

<a name="module_KeyboardLayout.init"></a>

### KeyboardLayout.init(textBoxes) ⇒ <code>Array.&lt;Object&gt;</code>
Initializes a keyboard layout for each given textbox or material textbox
When given one textBox, up and down buttons will be disabled by default.

**Kind**: static method of [<code>KeyboardLayout</code>](#module_KeyboardLayout)  
**Returns**: <code>Array.&lt;Object&gt;</code> - - Keyboard layouts as an order of textboxes given initially  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| textBoxes | <code>Array.&lt;Object&gt;</code> \| <code>Object</code> | Array of or single textBox instance |

<a name="module_KeyboardLayout..KeyboardLayout"></a>

### KeyboardLayout~KeyboardLayout
**Kind**: inner class of [<code>KeyboardLayout</code>](#module_KeyboardLayout)  
<a name="module_KeyboardLayout..toggleVisibilityofUpImage"></a>

### KeyboardLayout~toggleVisibilityofUpImage(disabled)
Sets disability of up image. When given true, it will gray out the layout.

**Kind**: inner method of [<code>KeyboardLayout</code>](#module_KeyboardLayout)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| disabled | <code>boolean</code> | Pushes .disabled class to the layout, grays out by default |

<a name="module_KeyboardLayout..toggleVisibilityofDownImage"></a>

### KeyboardLayout~toggleVisibilityofDownImage(disabled)
Sets disability of down image. When given true, it will gray out the layout.

**Kind**: inner method of [<code>KeyboardLayout</code>](#module_KeyboardLayout)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| disabled | <code>boolean</code> | Pushes .disabled class to the layout, grays out by default |

<a name="module_KeyboardLayout..toggleVisibilityOfUpImage"></a>

### KeyboardLayout~toggleVisibilityOfUpImage(visible)
Sets visibility of up image

**Kind**: inner method of [<code>KeyboardLayout</code>](#module_KeyboardLayout)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| visible | <code>boolean</code> | Toggles visibility |

<a name="module_KeyboardLayout..toggleVisibilityOfDownImage"></a>

### KeyboardLayout~toggleVisibilityOfDownImage(visible)
Sets visibility of down image

**Kind**: inner method of [<code>KeyboardLayout</code>](#module_KeyboardLayout)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| visible | <code>boolean</code> | Toggles visibility |

<a name="module_KeyboardLayout..toggleVisibilityOfDoneButton"></a>

### KeyboardLayout~toggleVisibilityOfDoneButton(visible)
Sets visibility of done button

**Kind**: inner method of [<code>KeyboardLayout</code>](#module_KeyboardLayout)  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| visible | <code>boolean</code> | Toggles visibility |

