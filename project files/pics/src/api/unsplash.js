import axios from 'axios';

const unsplash = axios.create(
{
	baseURL: 'https://api.unsplash.com',
	headers:
			{
				Authorization: 'Client-ID 0709f4816c9682fdbbca30a97ae4df4c6c0a431971cf3ae78e32fd0c78981c75'
			}

});

export default unsplash;