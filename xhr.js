const requestURL = 'https://file:///C:/Users/nasty/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81/password.html.typicode.com/users'
function addPost() {
    const form = document.querySelector("form");
        let data = {
            title: form.querySelector("[placeholder=Email").value,
            body: form.querySelector("[placeholder=Пароль").value,
        };

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then ( response => {return response.json()} ).then ( response => console.log(response))
        
}