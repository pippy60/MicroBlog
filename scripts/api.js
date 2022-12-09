class API {
    constructor(baseURL = "https://microbloglite.herokuapp.com") {
        this.baseURL = baseURL
    }

    post(endpoint, data, callbackFunction = () => { }) {
        fetch(endpoint, {
            method: "POST", 
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json()).then(callbackFunction)
    }

    register(userData = { username: "", password: "", fullName: "" }, callbackFunction = () => { }) {
        this.post(this.baseURL + "/api/users", userData, callbackFunction);
    }

    login(authData = { username: "", password: "" }, callbackFunction) {
        this.post(this.baseURL + "/auth/login", authData, callbackFunction);
    }

    getPosts(token, callbackFunction) {
        // use the token we stored on the client browser disk for later use on the index.html with main.js code
        fetch(this.baseURL + "/api/posts?limit=100&offset=0", {
            method: "GET",
            headers: { 'Authorization': `Bearer ${token}` }
        }).then(response => response.json()).then(callbackFunction);
    }

    createPost(token, postData = {text:""}, callbackFunction) {
        fetch(this.baseURL + "/api/posts", {
            method: "POST", 
            body: JSON.stringify(postData),
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Content-Type': 'application/json'
            }
        }).then(response => response.json()).then(callbackFunction);
    }

}

const api = new API();
