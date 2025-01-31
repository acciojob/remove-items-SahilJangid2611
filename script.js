function removeColors() {
				// Get the select element
				const colorSelect = document.getElementById('colorSelect');
				
				// Loop through the selected options and remove them
				for (let i = colorSelect.options.length - 1; i >= 0; i--) {  // Loop backwards to avoid skipping options
					if (colorSelect.options[i].selected) {
						colorSelect.options[i].remove();
					}
				}
			}