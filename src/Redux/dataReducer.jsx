/* eslint-disable no-case-declarations */
import {produce} from 'immer';

const InitialState = {
	userId: 'Sundar Pichai',
	data:[],
	

};


export const dataReducer = produce((state , action) => {
	switch (action.type) {
	case 'SET_ALL_WEBSITES':
		
	// Perform search logic and update state.data
	console.log(action.payload)
	return { ...state, data: action.payload};
	case 'FILTER':
		console.log(action.payload);
		// Perform filter logic and update state.data
		return { ...state, data: action.payload };
		
		
	
		//   case 'SORT':
		// Perform sort logic and update state.data
		// const sortedData = sortFunction(state.data, action.payload);
		// return { ...state, data: sortedData };
		
	default:
		break;
	}
	
}, InitialState);
 
// Create Redux store


