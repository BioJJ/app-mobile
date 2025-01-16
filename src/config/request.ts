import axios from 'axios'

const HTTPClient = axios.create({
	// baseURL: 'http://192.168.0.23:3000'
	baseURL: 'https://test-api-y04b.onrender.com'
})

export { HTTPClient }
