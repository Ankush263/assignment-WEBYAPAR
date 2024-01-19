const url = 'http://localhost:3000/api/v1/allUser';

const fetchUsers = () => {
	const token = JSON.parse(localStorage.getItem('Token'))?.value;

	fetch(`${url}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			setUsers(data.data.data);
		})
		.catch((error) => console.error('Error:', error));
};

const fetchAccept = (userId) => {
	const token = JSON.parse(localStorage.getItem('Token'))?.value;

	fetch(`${url}/accept-user/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			window.location.reload();
		})
		.catch((error) => console.error('Error:', error));
};

const resetUser = (userId) => {
	const token = JSON.parse(localStorage.getItem('Token'))?.value;

	fetch(`${url}/reset-user/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => response.json())
		.then((data) => {
			window.location.reload();
		})
		.catch((error) => console.error('Error:', error));
};

const setUsers = (user) => {
	const table = document.getElementById('table');

	const tableELements = user.map((i) => {
		return `
      <tr>
          <th scope="row">${i.userId}</th>
          <td>${i.username === null ? '-' : i.username}</td>
          <td>${
						i.image === null
							? '<img width="70px" height="70px" src="../public/image.png" class="rounded d-block" alt="image">'
							: `<img width="70px" height="70px" src="${i.image}" class="rounded d-block" alt="image">`
					}</td>
          <td>
					${
						i.accepted
							? `
						<div class="btn-flex">
							<button type="button" class="btn btn-outline-primary" id="delete" data-user-id="${i._id}">Delete</button>
						</div>
						`
							: `
						<div class="btn-flex">
							<button type="button" class="btn btn-primary accept" id="accept" data-user-id="${i._id}">Accept</button>
							<button type="button" class="btn btn-outline-primary" id="delete" data-user-id="${i._id}">Delete</button>
						</div>
						`
					}
					</td>
        </tr>
      `;
	});

	table.innerHTML = `
    <table class="table table-striped table-bordered border-primary">
      <thead>
        <tr>
          <th scope="col">User Id</th>
          <th scope="col">Name</th>
          <th scope="col">Photo</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        ${tableELements.join('')}
      </tbody>
    </table>
      `;
};

const accept = () => {
	const table = document.getElementById('table');

	table.addEventListener('click', (event) => {
		if (event.target.id === 'accept') {
			const userId = event.target.getAttribute('data-user-id');
			fetchAccept(userId);
		}
	});
};

const reset = () => {
	const table = document.getElementById('table');

	table.addEventListener('click', (event) => {
		if (event.target.id === 'delete') {
			const userId = event.target.getAttribute('data-user-id');
			resetUser(userId);
			console.log(userId);
		}
	});
};

fetchUsers();
accept();
reset();
