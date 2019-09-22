import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component
{
	//Using a constructor function
	/*constructor(props)
	{
		super(props);

		//This is the only time we do direct assignment to a state. 
		this.state = { lat: null, errorMessage:"" };	
	}*/

	//Not using a constructor function
	state = {lat:null, errorMessage:''};

	componentDidMount()
	{
		window.navigator.geolocation.getCurrentPosition(
			//DO NOT write this.state.lat = position.cooords.latitude
			//Update the state by calling setState() function
		position => this.setState({ lat: position.coords.latitude }),
		err => this.setState({ errorMessage: err.message})
	);

	}

	renderContent()
	{
		if(this.state.errorMessage && !this.state.lat)
		{
			return <div>Error: {this.state.errorMessage}</div>
		}

		if(!this.state.errorMessage && this.state.lat)
		{
			return <SeasonDisplay lat={this.state.lat} />
		}

		return <Spinner message="Please accept location request"/>;
	}



	
	render()
	{
		return(
			<div className="border red">
			{this.renderContent()}
			</div>
		);
	} 
}

ReactDOM.render(<App/>, document.querySelector('#root'))