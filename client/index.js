const url = 'http://localhost:3000/api/v1/allUser';

export function login(postData) {
	fetch(`${url}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(postData),
	})
		.then((response) => response.json())
		.then((data) => {
			const expire = new Date().getTime() + 1296000000;
			typeof data.token !== 'undefined' &&
				localStorage.setItem(
					'Token',
					JSON.stringify({ value: `${data.token}`, expires: expire })
				);
		})
		.catch((error) => console.error('Error:', error));
}
