// CHECKDOWN.JS
// THOMAS CULLEN
// V 0.1
// MIT

function ready(fn) {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'interactive')
        fn();
    });
  }
}

function forEach(array, fn) {
  for (i = 0; i < array.length; i++)
    fn(array[i], i);
}

function addEventListener(el, eventName, handler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, handler);
  } else {
    el.attachEvent('on' + eventName, handler);
  }
}

ready(function(){
	// select all checkboxes
	var checkboxes = document.querySelectorAll('input[type="checkbox"]');
	// iterate through the checkboxes
	forEach(checkboxes, function(checkbox, i){
		// get input name
		var name = checkbox.getAttribute('name');
		// if is checked
		if ( checkbox.checked === true ){
			HTMLCheckbox = "<div class='checkdown-checkbox true "+checkbox.classList+"' data-name="+name+"><div></div></div>";
		}else{
			HTMLCheckbox = "<div class='checkdown-checkbox "+checkbox.classList+"' data-name="+name+"><div></div></div>";
		}
		// Insert HTML elements
		checkbox.insertAdjacentHTML('beforebegin', HTMLCheckbox);
		// Hide the checkbox
		checkbox.style.display = 'none';
	});

	// select all newly generated checkboxes
	var HTMLcheckboxes = document.querySelectorAll('.checkdown-checkbox');
	// iterate through generated checkboxes
	forEach(HTMLcheckboxes, function(checkbox, i){
		// click event
		addEventListener(checkbox, 'click', function(){
			// get the name of the input
			var name = checkbox.getAttribute('data-name');
			// select the hidden input
			input = document.getElementsByName(name)[0];
			// if checkbox is checked
			if ( checkbox.classList.contains('true') ){
				// remove true class
				checkbox.classList.remove('true');
				input.checked = false;
			}else{
				// add true class
				checkbox.classList.add('true');
				input.checked = true;
			}
		});
	});

	// DROPDOWNS

	// for each dropdown
	var dropdowns = document.querySelectorAll('select');
	forEach(dropdowns, function(dropdown, i){
		// get name attr
		var name = dropdown.getAttribute('name');
		// Get options
		var options = dropdown.querySelectorAll('option');
		// Set toggle text
		var toggleText = dropdown.getAttribute('data-placeholder');

		// build html string
		var HTMLDropdown = "<div class='checkdown-dropdown "+dropdown.classList+"' data-name="+name+"><div class='dropdown-toggle'><span>"+toggleText+"</span><i></i></div><ul>";
		forEach(options, function(option, i){
			HTMLDropdown += "<li data-value="+option.getAttribute('value')+">"+option.textContent+"</li>";
		});
		HTMLDropdown += "</ul></div>";

		// Insert HTML elements
		dropdown.insertAdjacentHTML('beforebegin', HTMLDropdown);

		dropdown.style.display = "none";
	});

	// for each generated html dropdown
	var HTMLDropdowns = document.querySelectorAll('.checkdown-dropdown');
	forEach(HTMLDropdowns, function(dropdown, i){
		var dropdownToggle = dropdown.querySelectorAll('.dropdown-toggle')[0];
		// click event event
		addEventListener(dropdownToggle, 'click', function(e){
			e.stopPropagation();
			if ( dropdown.classList.contains('open') ){
				dropdown.classList.remove('open');
			}else{
				dropdown.classList.add('open');
			}
		});

		var name = dropdown.getAttribute('data-name');
		var selectInput = document.getElementsByName(name)[0];

		// Click event for an option
		var options = dropdown.querySelectorAll('li');
		forEach(options, function(option, i){

			addEventListener(option, 'click', function(e){
				e.stopPropagation();
				dropdownToggle.querySelectorAll('span')[0].textContent = option.textContent;
				dropdown.classList.remove('open');
				selectInput.value = option.getAttribute('data-value');

			});
		});
	});

	addEventListener(document, 'click', function(){
		var HTMLDropdowns = document.querySelectorAll('.checkdown-dropdown');
		forEach(HTMLDropdowns, function(dropdown, i){
			dropdown.classList.remove('open');
		});
	});

});