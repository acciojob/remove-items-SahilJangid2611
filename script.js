function removeColor() {
				// Get the select element
				const colorSelect = document.getElementById('colorSelect');
				
				// Get the selected option
				const selectedColor = colorSelect.value;
				
				// Loop through the options and remove the selected one
				for (let i = 0; i < colorSelect.options.length; i++) {
					if (colorSelect.options[i].value === selectedColor) {
						colorSelect.remove(i);
						break; // Exit the loop once the item is removed
					}
				}
			}