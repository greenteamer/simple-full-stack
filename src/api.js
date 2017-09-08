export async function request(endpoint, data = undefined) {
  const response = await fetch(`/${endpoint.url}`, {
    method: endpoint.method,
    credentials: 'same-origin',
    headers: {
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : undefined
  })
  const responseData = response.status === 204 ? null : await response.json()
  if (!response.ok) {
    throw responseData
  }
  return responseData
}

export async function uploadFile(file) {
  console.log('upload start')
  const body = new FormData()
  body.append('file', file)
  const response = await fetch(`/api/upload`, {
    method: 'POST',
    body
  })

  if (!response.ok) {
    console.log(response)
    response.json().then(error => console.log('error: ', error))
    throw new Error('There is a problem with uploading the photo')
  }

  const responseData = await response.json()
  console.log('file upload response : ', responseData)
  return responseData
}

export const GET_PRODUCTS = () => ({ url: 'api/product/', method: 'GET' })
export const GET_PRODUCT = id => ({ url: `api/product/${id}/`, method: 'GET' })
export const POST_PRODUCT = id => ({ url: `api/product/${id}/`, method: 'POST' })
