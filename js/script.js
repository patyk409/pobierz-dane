const btn = document.querySelector('.getData');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(response => response.json())
        .then(data => {
            let userId = document.createElement('p');
            let id = document.createElement('p');
            let title = document.createElement('p');
            let body = document.createElement('p');

            userId.innerText = `user ID: ${data.userId}`;
            id.innerText = `ID: ${data.id}`;
            title.innerText = `title: ${data.title}`;
            body.innerText = `body: ${data.body}`;

            document.body.appendChild(userId);
            document.body.appendChild(id);
            document.body.appendChild(title);
            document.body.appendChild(body);
        })

        .catch(error => {
            console.error(error);
        });
};

btn.addEventListener('click', getData);