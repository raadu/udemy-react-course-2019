import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const PageOne = () =>
{
	return(
		<div>
			Page One
			<Link to="/pageTwo">Page Two</Link>
		</div>
	);
};

const PageTwo = () =>
{
	return(
		<div>
			<button>Click</button>	
		</div>
		
	);
};

const App = () => 
{
	return(
		<div>
			<BrowserRouter>
				<div>
					<Route path="/" exact component={PageOne}/>
					<Route path="/pageTwo" component={PageTwo}/> 
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;