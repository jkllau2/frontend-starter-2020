export function request(type, body) {
  return {
    type,
    body
  }
}

export function success(type, response) {
  return {
    type,
    response
  }
}

export function failure(type, error) {
  return {
    type,
    error
  }
}
