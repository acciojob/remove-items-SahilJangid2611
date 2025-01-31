function removeColors() {
				// Get the select element
				const colorSelect = document.getElementById('colorSelect');
				
				// Get all selected options
				const selectedOptions = Array.from(colorSelect.selectedOptions); // Convert selectedOptions to an array

				// Loop through the selected options and remove them
				selectedOptions.forEach(option => {
					option.remove();
				});
			}