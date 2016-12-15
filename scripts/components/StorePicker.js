import React from 'react';

import { Navigation } from 'react-router';
import h from '../helpers';

var StorePicker = React.createClass({
    mixins: [Navigation],
    goToStore: function (event) {
        event.preventDefault();
        var storeId = this.refs.storeId.value;
        this.history.pushState(null, '/store/' + storeId);
    },
    render: function () {
        var name = "Abhishek";
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a Store Name, {name}</h2>
                <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
                <input type="submit" />
            </form>
        )
    }
});

export default StorePicker;