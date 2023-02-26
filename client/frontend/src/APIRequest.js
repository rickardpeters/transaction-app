var HOST = 'http://127.0.0.1:8000/'


export const apiRequest = async(path, method, requestBody) => {
    if (method === 'GET') {
        const res = await fetch (HOST + path, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem("token")

            },
            body:JSON.stringify(requestBody)
        });
        const data = await res.json()
        return data
    }

    if (method === 'POST') {
        const res = await fetch (HOST + path, {
            method:'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Token ' + sessionStorage.getItem('token')
            },
            body:JSON.stringify(requestBody)
        })
        if (path === 'login') {
        const data = await res.json()
        return data.token
        }
}
}
