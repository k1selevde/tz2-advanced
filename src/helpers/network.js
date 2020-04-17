import {API_ROOT} from "../constants/Default";

//вынесим в функции два базовых взаимодействия по сети:

export async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',

        body: JSON.stringify(data)
    })
    return await response.json()
}

export function checkResponse(res) {
    return res.status === 'ok';
}


export async function httpGet(endPoint) {
    try {
        const response = await fetch(`${API_ROOT}/${endPoint}`)
        if (response.ok) {
            const json = await response.json()
            return json
        } else {
            throw new Error(response.status)
        }
    } catch (err) {
        console.warn('httpGet error ', err)
    }

}


