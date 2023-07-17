
/* eslint-disable no-debugger */
// eslint-disable-next-line no-unused-vars
import { produce } from 'immer';

const InitialState = {
	currentUser: { id: 1, name: 'Rivky', email: '3254@gmail.com', phone: '0533158889' },
	currentToken: '',
	userId: ''

};




// eslint-disable-next-line no-unused-vars
export const dataReducer = produce((state, action) => {
	switch (action.type) {
	case 'SEND_TOKEN_STORE':
		state.currentToken = action.payload;			
		break;
	case 'SET_USER_ID':
		state.userId = action.payload;


	}
}, InitialState);

