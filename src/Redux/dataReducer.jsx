import {produce} from 'immer';

const InitialState = {

	websiteData: null,
	userId:'Sundar Pichai',
	currentWebsite:{},
};

export const dataReducer = produce((state, action) => {
	switch (action.type) {
	case 'SET_WEBSITES':
		state.websiteData = action.payload;
		break;
	case 'SET_CURRENT_WEBSITE':
		state.currentWebsite = action.payload;
		break;	
	default:
		break;
	}
}, InitialState);