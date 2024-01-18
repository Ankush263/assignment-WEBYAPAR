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
			console.log(data.data.data);
			setUsers(data.data.data);
		})
		.catch((error) => console.error('Error:', error));
};

const getAllUsers = () => {
	fetchUsers();
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
							? '<img src="../public/image.png" class="rounded d-block" alt="image">'
							: `<img src=${i.image} class="rounded d-block" alt="image">`
					}</td>
          <td>${i.accepted}</td>
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

getAllUsers();

// setUsers();
