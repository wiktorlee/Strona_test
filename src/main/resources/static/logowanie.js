document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    })
        .then(response => {
            if (!response.ok) throw new Error('Błąd logowania');
            return response.text();
        })
        .then(data => {
            if (data.trim() === 'Siema admin!') {

                document.getElementById('secretContent').style.display = 'block';
                document.getElementById('welcomeImage').style.display = 'block';

                document.getElementById('adminTab').style.display = 'inline-block';
                document.getElementById('adminSection').style.display = 'block';

                document.body.style.backgroundColor = '#fffacd';


            } else {
                alert('Błędny login lub hasło.');
            }
        })
        .catch(error => {
            alert('Wystąpił błąd: ' + error.message);
            console.error(error);
        });
});
