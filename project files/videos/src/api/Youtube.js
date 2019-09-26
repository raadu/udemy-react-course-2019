import axios from 'axios';

const KEY = 'AIzaSyDOQGtwM9Gk2HMWhQ7phG2R3LnRpC6E0Bo';

export default axios.create(
{
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});

