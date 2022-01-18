const gorest = "api/"
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
            document.getElementById("getUsersResponseField").value = json
            
        })
    });
}

function handleGetPosts() {
    console.log("Get Posts called, function TODO")
}

function handleSubmit(event, form) {
    event.preventDefault()
    data = new FormData(form) // omgjør en form til et javascript-form-object
    object = Object.fromEntries(data.entries())

    // Setter opp headers
    const headers = new Headers();
    headers.append("Authorization", "Bearer " + token)
    headers.append("Content-Type", "application/json")

    fetch(form.action, {
        "method" : "POST",
        "headers": headers,
        "body": JSON.stringify(object) // et javascript-object kan vi gjøre til JSON med json-stringify
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
