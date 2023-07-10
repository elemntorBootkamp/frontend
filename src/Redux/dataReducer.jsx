import {produce} from 'immer';

const InitialState = {
	manager:'Sundar Pichai', //'Sundar Pichai Andy Jassy'
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
		{ idUsers: 1, name: 'רחלי', typeUser: [2], basket: [] },
		{ idUsers: 2, name: 'יעל', typeUser: [2, 4], basket: [] },
		{ idUsers: 3, name: 'שושי', typeUser: [1, 4], basket: [] },
		{ idUsers: 3, name: 'שירה', typeUser: [3], basket: [] },
	]
};



// eslint-disable-next-line no-unused-vars
export const dataReducer = produce((state, action) => {
    
}, InitialState);






