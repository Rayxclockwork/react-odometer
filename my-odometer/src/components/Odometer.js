import React from 'react';

class Odometer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			clicks: 0,
			show: true
		};
	}

	increment_item1 = () => {
		this.setState({ clicks: this.state.clicks + 1 });
	}
	decrease_item1 = () => {
		this.setState({ clicks: this.state.clicks - 1 });
	}
	increment_item10 = () => {
		this.setState({ clicks: this.state.clicks + 10 });
	}
	decrease_item10 = () => {
		this.setState({ clicks: this.state.clicks - 10 });
	}
	increment_item100 = () => {
		this.setState({ clicks: this.state.clicks + 100 });
	}
	decrease_item100 = () => {
		this.setState({ clicks: this.state.clicks - 100 });
	}
	increment_item1000 = () => {
		this.setState({ clicks: this.state.clicks + 1000 });
	}
	decrease_item1000 = () => {
		this.setState({ clicks: this.state.clicks - 1000 });
	}

	render() {
		return (
			<div>
				<button onClick={this.increment_item1}>Click to increment by 1</button>
				<button onClick={this.decrease_item1}>Click to decrease by 1</button>
				<button onClick={this.increment_item10}>Click to increment by 10</button>
				<button onClick={this.decrease_item10}>Click to decrease by 10</button>
				<button onClick={this.increment_item100}>Click to increment by 100</button>
				<button onClick={this.decrease_item100}>Click to decrease by 100</button>
				<button onClick={this.increment_item1000}>Click to increment by 1000</button>
				<button onClick={this.decrease_item1000}>Click to decrease by 1000</button>
				{this.state.show ? <h2>{this.state.clicks}</h2> : ''}
			</div>
		);
	}
}

export default Odometer;