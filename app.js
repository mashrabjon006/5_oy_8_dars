document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET'
    })
    .then(response => {
        if (response.status === 200) {
            return response.json();
        }
    })
    .then(data => {
        if (data.length > 0) {
            data.forEach(user => {
                const card = createCard(user);
                document.getElementById('wrapper').innerHTML += card;
            });
        }
    })
    .catch(error => {
        console.error(error);
    });

    function createCard(user) {
        return `
            <div class="user-card">
                <h3>${user.name} (${user.username})</h3>
                <p>Email: ${user.email}</p>
                <p>Telefon: ${user.phone}</p>
                <p>Websayt: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            </div>
        `;
    }
});