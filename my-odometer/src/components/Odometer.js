import React from 'react';

class Odometer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {number: 0, show: true};
		this.increment_item1 = this.increment_item1.bind(this)
		this.decrease_item1 = this.decrease_item1.bind(this)
		this.increment_item10 = this.increment_item10.bind(this)
		this.decrease_item10 = this.decrease_item10.bind(this)
		this.increment_item100 = this.increment_item100.bind(this)
		this.decrease_item100 = this.decrease_item100.bind(this)
		this.increment_item1000 = this.increment_item1000.bind(this)
		this.decrease_item1000 = this.decrease_item1000.bind(this)
	}
	
	increment_item1 = () => {
		this.setState({ number: this.state.number + 1 });
	}
	decrease_item1 = () => {
		let number = this.state.number - 1
		if (number < 0)
			number = 0
		this.setState({ number: number });
	}
	increment_item10 = () => {
		this.setState({ number: this.state.number + 10 });
	}
	decrease_item10 = () => {
		let number = this.state.number - 10
		if (number < 0)
			number = 0
		this.setState({ number: number });
	}
	increment_item100 = () => {
		this.setState({ number: this.state.number + 100 });
	}
	decrease_item100 = () => {
		let number = this.state.number - 100
		if (number < 0)
			number = 0
		this.setState({ number: number });
	}
	increment_item1000 = () => {
		this.setState({ number: this.state.number + 1000 });
	}
	decrease_item1000 = () => {
		let number = this.state.number - 1000
		if (number < 0)
			number = 0
		this.setState({ number: number});
	}

	prependZero(number) {
        number = number%10000
        if (number < 0)
            return "0000" 
        if (number < 10)
            return "000"+number;
        if (number < 100)
            return "00"+number;
        if (number < 1000)
            return "0"+number;
        if (number < 10000)
            return number;
        else 
            return (number - 9999)

    };

	render() {
		let number = this.prependZero(this.state.number)
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
				{this.state.show ? <h2>{number}</h2> : ''}
			</div>
		);
	}
}

export default Odometer;