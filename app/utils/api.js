import axios from 'axios'

export default async function fetchAPI({
    baseURL = process.env.NEXT_PUBLIC_BASE_URL,
    endPoint = '',
    method = 'GET',
    payload = {},
    body = {},
}) {
    try {
        const response = await axios({
            url: `${baseURL}/${endPoint}`,
            method,
            params: payload,
            data: body,
        })
        
        if (response?.data) {
            return response?.data
        }
        throw new Error('API fails')
    }
    catch (error) {
        console.log("Error in API call", error);
        return error;
    }
}