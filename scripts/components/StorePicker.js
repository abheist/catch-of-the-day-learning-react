import React from 'react';
import { Navigation } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class StorePicker extends React.Component {

    gotoStore(event) {
        event.preventDefault();
        var storeId = this.refs.storeId.value;
        this.transitionTo('/store/' + storeId);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.gotoStore}>
                <h2>Please enter a store</h2>
                <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
                <input type="submit" />
            </form>
        )
    }
}

reactMixin.onClass(StorePicker, Navigation);

export default StorePicker;