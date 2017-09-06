export async function request(endpoint, data = undefined) {
  const response = await fetch(`/${endpoint.url}`, {
    method: endpoint.method,
    credentials: 'same-origin',
    headers: {
      // "X-CSRFToken": getCookie("csrftoken"),
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

export const GET_PRODUCTS = () => ({ url: 'api/products/', method: 'GET' })
export const GET_PRODUCT = id => ({ url: `api/products/${id}/`, method: 'GET' })
export const DELETE_PRODUCT = id => ({ url: `api/products/${id}/`, method: 'DELETE' })
export const POST_PRODUCT = () => ({ url: 'api/products/', method: 'POST' })
export const PUT_PRODUCT = id => ({ url: `api/products/${id}/`, method: 'PUT' })
