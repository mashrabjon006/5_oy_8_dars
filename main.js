document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('wrapper');

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
            data.forEach(element => {
                let card = createCard(element);
                wrapper.innerHTML += card;
            });
        }
    })
    .catch(error => {
        console.error(error);
        wrapper.innerHTML = '<p>Ma\'lumotni yuklashda xato yuz berdi.</p>';
    });
});

function createCard(user) {
    return `
        <div class="card">
            <h3>${user.name}</h3>
            <p><strong>Foydalanuvchi nomi:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Telefon:</strong> ${user.phone}</p>
            <p><strong>Manzil:</strong> ${user.address.street}, ${user.address.city}</p>
            <p><strong>Kompaniya:</strong> ${user.company.name}</p>
        </div>
    `;
}