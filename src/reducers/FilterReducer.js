const initialState = {
	filterBy: ''
};

function FilterReducer(state = initialState, action) {
	switch(action.type) {
		case 'SET_FILTER':
			return {
				...state,
				filterBy: action.by
			};
		default:
			return state;
	}
}

export default FilterReducer;