export default httpClient => ({
  register: async ({ name, email, password }) => {
    const response = await httpClient.post('/auth/register', {
      name,
      email,
      password
    })
    const errors = {}

    if (!response.data) {
      errors.status = response.request.status
      errors.statusText = response.request.statusText
    }

    return {
      data: response.data,
      errors
    }
  },
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', {
      email,
      password
    })
    const errors = {}

    if (!response.data) {
      errors.status = response.request.status
      errors.statusText = response.request.statusText
    }

    return {
      data: response.data,
      errors
    }
  }

})
