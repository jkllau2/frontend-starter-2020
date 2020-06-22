import axios from 'axios'

async function doSomeExampleFetch(user) {
  const { peopleId } = user
  const url = `https://swapi.dev/api/people/${peopleId}/`
  const response = await axios.get(url)
  return { data: response.data }
}

export default {
  doSomeExampleFetch,
}
