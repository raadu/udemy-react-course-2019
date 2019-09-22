import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Card from './Card';

const App = () => 
{
	return (
	<div className="ui container comments">
		<Card>
			<h2>Warning!</h2>
		</Card>

		<ApprovalCard>
		<CommentDetail author="Alex" timeAgo="Today at 4.20PM" commentText="Hello guys!" avatar={faker.image.avatar()}/>
		</ApprovalCard>

		<ApprovalCard>
		<CommentDetail author="Momin" timeAgo="Today at 2.20AM" commentText="Whasssuupp!" avatar={faker.image.avatar()}/>
		</ApprovalCard>
		
		<ApprovalCard>
		<CommentDetail author="Ronald" timeAgo="Today at 12.20AM" commentText="yo brada!" avatar={faker.image.avatar()}/>
		</ApprovalCard>
	</div>
	);

};

ReactDOM.render(<App/>, document.querySelector('#root')) 