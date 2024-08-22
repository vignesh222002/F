import fetchAPI from "../utils/api"

export async function updateHtml(data, setState) {
    try {
      const response = await fetchAPI({
        method: 'POST',
        endPoint: 'text/update',
        body: {
          data,
        }
      })

      if (response) {
        fetchHtml(setState)
      }
    }
    catch (error) {
      console.log("Error ", error)
    }
}

export async function fetchHtml(setState) {
    try {
      const response = await fetchAPI({
        method: 'GET',
        endPoint: 'text/fetch'
      })

      if (response?.data) {
        setState(response?.data)
      }
    }
    catch (error) {
      console.log("Error ", error)
    }
}