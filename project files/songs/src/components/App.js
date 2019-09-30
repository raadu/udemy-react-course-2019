import React from 'react';
import SongList from './SongList';

const App = () =>
{
	return(
		<div className="ui container grid">
			<div className="row">
				<div className="eight wide column">
					<SongList/>
				</div>
			</div>
		</div>
	);
};

export default App;