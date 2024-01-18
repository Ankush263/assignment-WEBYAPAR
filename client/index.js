document.addEventListener('DOMContentLoaded', function () {
	const loginForm = document.getElementById('login-btn');

	loginForm.addEventListener('click', function (event) {
		event.preventDefault();

		const userId = document.getElementById('formGroupExampleInput').value;
		const password = document.getElementById('formGroupExampleInput2').value;

		console.log('User ID:', userId);
		console.log('Password:', password);
	});
});
