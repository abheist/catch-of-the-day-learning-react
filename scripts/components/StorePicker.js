import React from 'react';
import { Navigation } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class StorePicker extends React.Component {

    goToStore(event) {
        event.preventDefault();
        var storeId = this.refs.storeId.value;
        this.transitionTo('/store/' + storeId);
    }

    render() {
        var name = "Abhishek";
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a Store Name, {name}</h2>
                <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
                <input type="submit" />
            </form>
        )
    }
};

reactMixin.onClass(StorePicker, Navigation);

export default StorePicker;