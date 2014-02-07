#checkdown.js
## Custom Checkboxes and select inputs
checkdown.js does not require any other libraries. Simply include 'checkdown.js' in your head tag and all of the checkbox & select  inputs will be converted to simple html structures which you can then style using CSS.
---
###Checkbox
When checked the 'checkdown-checkbox' div has a class of 'true'. Use this class to style the different states of the checkbox
As shown with the 'checkbox' class, any classes on the checkbox input will also be added to the generated checkbox html

```html
<input type="checkbox" name="complete" class="checkbox">
```
is converted to
```html
<div class="checkdown-checkbox checkbox" data-name="complete">
	<div></div>
</div>
```

###Dropdown
When open the 'checkdown-dropdown' div has a class of 'open'. Use this class to style the different states of the dropdown.
The default text on the dropdown comes from the placeholder data attribute which you add to the select input.
As shown with the 'dropdown' class, any classes on the select input will also be added to the generated dropdown html.
```html
<select name="colour" class="dropdown" data-placeholder="Choose a colour...">
	<option value="blue">Blue</option>
	<option value="red">Red</option>
	<option value="purple">Purple</option>
	<option value="orange">Orange</option>
</select>
```
is converted to
```html
<div class='checkdown-dropdown dropdown' data-name="colour">
	<div class='dropdown-toggle'>
		<span>Choose a colour...</span>
		<i></i>
	</div>
	<ul>
		<li data-value="blue">Blue</li>
		<li data-value="red">Red</li>
		<li data-value="purple">Purple</li>
		<li data-value="orange">Orange</li>
	</ul>
</div>
```