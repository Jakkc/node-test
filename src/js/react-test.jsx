const React = require('react');
const ReactDOM = require('react-dom');
const output = document.getElementById('app');

const Buttonify = React.createClass({
	render: function() {
		return (
			<div>
				<button className="btn" type={ this.props.behaviour }>{ this.props.children }</button>
			</div>
		)
	}
})

ReactDOM.render(
	<div>
		<Buttonify behaviour="Submit">I am a button</Buttonify>
	</div>,
	output
);