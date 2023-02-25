/* var HOST = 'http://127.0.0.1:8000/' */
var HOST = 'http://192.168.1.188:8000/'

export const apiRequest = async(path, method, requestBody) => {
    if (method === 'GET') {
        const res = await fetch (HOST + path, {
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
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
                'Content-Type':'application/json'
            },
            body:JSON.stringify(requestBody)
        }).then(res => res.json()).then(value => console.log("Response: ", value))
}
}
