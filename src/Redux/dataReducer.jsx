import {produce} from 'immer';

const InitialState = {

	websiteData: null,
	userId:'Sundar Pichai',

	userNameManager: 'Manager',
	userNamePassword: '😂🤣🤣',
	wishes: ['שנה וטבה', 'כתיבה וחתימה טובה', 'שנת בריאות ושמחות'],
	categories: [
		{ id: 1, name: ' לקוחות קבועים' },
		{ id: 2, name: ' לקוחות חדשים' },
		{ id: 3, name: ' לקוחות זמניים' },
		{ id: 4, name: ' לקוחות חברי מועדי' }
	],

	users: [
		{ idUsers: 1,name: 'רחלי',typeUser: [2],basket: [] },
		{ idUsers: 2,name: 'יעל',typeUser: [2,4],basket: [] },
		{ idUsers: 3,name: 'שושי',typeUser: [1,4],basket: [] },
		{ idUsers: 3,name: 'שירה',typeUser: [3],basket: [] },
	],
	currentWebsite:{},
	allWebsites:[]
};
export const dataReducer = produce((state, action) => {
	switch (action.type) {
	case 'GET_WEBSITE':
	case 'SEARCH_WEBSITE':
	case 'FILTER_WEBSITE':
	case 'SORT_WEBSITE':
		state.websiteData = action.payload;
		break;
	case 'SET_CURRENT_WEBSITE':
		state.currentWebsite = action.payload;
		break;
	case 'SET_ALL_WEBSITES':
		state.allWebsites ={...action.payload};
		break;
	default:
		break;
	}
}, InitialState);
