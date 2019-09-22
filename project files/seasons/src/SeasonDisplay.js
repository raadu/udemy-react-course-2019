import './SeasonDisplay.css';
import React from 'react';

//React component
const SeasonDisplay = (props) =>
{
	
	const season = getSeason(props.lat, new Date().getMonth());
	const{text, iconName} = seasonConfig[season]; // {text, iconName}

	return(
		<div className={`season-display ${season}` }>
			<i className={`icon-left massive ${iconName} icon`} />	
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />

		</div>
	);
};

const seasonConfig = 
{
	summer:
	{
		text:"It's summer time!",
		iconName: "sun"
	},

	winter:
	{
		text:"It's winter here",
		iconName: "snowflake"
	}
};

const getSeason = (lat, month) =>
{
	if(month>2 && month<9)
	{
		return lat>0 ? "summer" : "winner"
	}
	else 
	{
		return lat>0 ? "winter":"summer"
	}

}



export default SeasonDisplay;