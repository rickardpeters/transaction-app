/* var HOST = 'http://127.0.0.1:8000/' */
var HOST = 'http://192.168.1.188:8000/'

export const apiRequest = async(path, method, requestBody) => {
    if (method === 'GET') {
        const res = await fetch (HOST + path, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")

            },
            body:JSON.stringify(requestBody)
        });
        console.log(requestBody)
        const data = await res.json()
        return data
    }

    if (method === 'POST') {
        const res = await fetch (HOST + path, {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
            body:JSON.stringify(requestBody)
        })
        if (path === 'login') {
        console.log(sessionStorage.getItem("token"))
        const data = await res.json()
        console.log("data from apiRequest 'POST': " + data.token)
        return data.token
        }
}
}
