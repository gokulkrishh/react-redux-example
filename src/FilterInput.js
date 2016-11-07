import React, {Component} from 'react';
import setFilter from './actions/actionCreators';
import List from './List';

class FilterInput extends Component {
	constructor(props) {
		super(props);
		this.store = props.store;
		this.state = this.store.getState();
		this.filterIt = this.filterIt.bind(this);
		console.log('state', this.state);
	}

	filterIt(event) {
		this.store.dispatch(setFilter(event.target.value));
	}

	render() {
		const {filterBy} = this.state;
		const filters = ['goku', 'vegita', 'bulma', 'mai', 'zamasu'];
		return(
			<div>
				<input type="text" onChange={this.filterIt} placeholder="Type any name" />
				<List filters={filters} filterBy={filterBy} />
			</div>
		)
	}
};

export default FilterInput;