import React from 'react';

class Header extends React.Component {
	
	
	render(){
		let greeting = 'Hello,';

	return <h1>{greeting} {this.props.name}</h1>
	}
}
export default Header