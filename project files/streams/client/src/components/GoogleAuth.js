import React from 'react';

class GoogleAuth extends React.Component
{
	state={isSignedIn: null};

	componentDidMount()
	{
		window.gapi.load('client:auth2', () => 
			{
				window.gapi.client.init(
				{
					clientId: '984908772305-ck1hfvlps4997a5q78ojtqt7vsdsqqoi.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => 
				{
					this.auth=window.gapi.auth2.getAuthInstance();
					this.setState({isSignedIn: this.auth.isSignedIn.get()});
				});
			});
	}

	renderAuthButton()
	{
		if(this.state.isSignedIn===null)
		{
			return(
				<div>Do not know if you are signed in</div>
			);
		}
		else if(this.state.isSignedIn) 
		{
			return(
				<div>Signed in</div>
			);
		}
		else 
		{
			return(
				<div>Not signed in</div>
			);
		}
	}

	render()
	{
		return(
			<div>{this.renderAuthButton()}</div>
		);
	}
}

export default GoogleAuth;