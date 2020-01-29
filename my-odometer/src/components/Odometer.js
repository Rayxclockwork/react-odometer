import React from 'react';

class Odometer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {number: 0, show: true};
	}
	//TODO: Binding
	increment_item1 = () => {
		const oldnum = this.state.number;
		let newnum = oldnum === 9999 ? 0 : oldnum + 1
		this.setState({ number: this.state.number + 1 });
	}
	decrease_item1 = () => {
		this.setState({ number: this.state.number - 1 });
	}
	increment_item10 = () => {
		this.setState({ number: this.state.number + 10 });
	}
	decrease_item10 = () => {
		this.setState({ number: this.state.number - 10 });
	}
	increment_item100 = () => {
		this.setState({ number: this.state.number + 100 });
	}
	decrease_item100 = () => {
		this.setState({ number: this.state.number - 100 });
	}
	increment_item1000 = () => {
		this.setState({ number: this.state.number + 1000 });
	}
	decrease_item1000 = () => {
		this.setState({ number: this.state.number - 1000 });
	}
	//TODO: padding

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
				{this.state.show ? <h2>{this.state.number}</h2> : ''}
			</div>
		);
	}
}

export default Odometer;