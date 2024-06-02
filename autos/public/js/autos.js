var button = document.getElementById("button-addon2");

// button.addEventListener("click", buttonClick);

function processUserInput() {
	var user_input = document.getElementById("inputField").value;
	const chatContainer = document.getElementById('chat-container');
	const messageDiv = document.createElement('div');
	messageDiv.innerHTML = `<div class='font-weight-bolder text-right alert alert-dark shadow'> 'User': ${user_input} </div>`;
	chatContainer.appendChild(messageDiv);
    if (user_input.toLowerCase() == 'sales order') {
        frappe.prompt('First Name', console.log, 'Enter First Name', 'Submit');
    }
	frappe.call({
			method: 'autos.www.autos.get_chat_response',
			args: {
					'user_input': user_input
			},
			callback: function(response) {
					// const messageDiv = document.createElement('div')
					// messageDiv.textContent = `'User': ${user_input}`;
					const responseDiv = document.createElement('div');
					responseDiv.innerHTML = `<div class='font-weight-bold alert alert-light shadow bg-white rounded'> 
												'Bot': ${response.message}</div>`;
					chatContainer.appendChild(responseDiv);
					// var user_text = user_input;
					// var processed_response = response.message;		
			}
	})
}
document.addEventListener("keydown", function (event) {
	// Check if the pressed key is Enter (key code 13)
	if (event.key === "Enter") {
		// Trigger the button click function
		processUserInput();
		document.getElementById("inputField").value = "";
	}
});


   