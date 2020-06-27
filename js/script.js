let btn = document.getElementById('downloadData');

const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(response => response.json())
        .then(data => {

            let getId = document.createElement('p');
            let getUserId = document.createElement('p');
            let getTitle = document.createElement('p');
            let getBody = document.createElement('p');

            getId.innerText = `Post ID: ${data.id}`;
            getUserId.innerText = `User ID: ${data.userId}`;
            getTitle.innerText = `Title: ${data.title}`;
            getBody.innerText = `Body: ${data.body}`;

            document.body.appendChild(getId);
            document.body.appendChild(getUserId);
            document.body.appendChild(getTitle);
            document.body.appendChild(getBody);
        })
        .catch(error => {
            console.error(error);
        })
}

btn.addEventListener('click', getData);