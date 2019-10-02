import {combineReducers} from 'redux';

const songsReducer = () =>
{
	return(
		[
		{title: 'No SCrubs', duration: '4:05'},
		{title: 'Macarena', duration: '2:30'},
		{title: 'All Stars', duration: '3:15'},
		{title: 'I want it that way', duration: '1:05'}
		]
		
	);
};

const selectedSongReducer = (selectedSong=null, action) =>
{
	if(action.type==='SONG_SELECTED')
	{
		return action.payload;
	}
	else
	{
		return selectedSong;
	}
};

export default combineReducers(
{
	songs: songsReducer,
	selectedSong: selectedSongReducer
});