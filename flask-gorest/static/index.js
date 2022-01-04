const gorest = "https://gorest.co.in/public/v1/"
const gorestUsers = gorest + "users"

const token = "PASTE TOKEN HER"

function handleGetUsers() {
    console.log("Get Users Called");

    fetch(gorestUsers, {
        "method" : "GET"
    }).then(function(response) {
        // Håndterer responsen

        // Vi henter ut json-bodyen i responsen med .json()
        response.json().then(function(json) {
            console.log(json)
        })
    });
}

function handleGetPosts() {
    console.log("Get Posts called, function TODO")
}

function handleCreateUser() {
    form = document.getElementById("createUserForm")

    // Setter opp headers
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token)

    fetch(gorestUsers, {
        "method" : "POST",
        "headers": headers,
        "body": new FormData(form)
    }).then(function(response) {
        // Håndterer responsen

        // Vi henter ut json-bodyen i responsen med .json()
        response.json().then(function(json) {
            console.log(json)
        })
    });
}

function handleCreatePost() {
    console.log("Create Post called, function TODO")
}
