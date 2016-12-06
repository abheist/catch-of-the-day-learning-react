var React = require('react');
var ReactDOM = require('react-dom');

var storePicker = React.createClass({
    render: function() {
        return (
            <p>Hello World</p>
        )
    }
});

ReactDOM.render(<storePicker/>, document.querySelector('#main'));