import React, {Component} from 'react';

class List extends Component {
	render() {
		const {filters, filterBy} = this.props;
		return(
			<ul>
				{
					filters
					.filter(item => item.indexOf(filterBy) > -1)
					.map((item, i) => <li key={i}>{item}</li>)
				}
			</ul>
		)
	}
};

export default List;