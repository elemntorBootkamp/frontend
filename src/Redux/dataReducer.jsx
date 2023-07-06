/* eslint-disable no-debugger */
// eslint-disable-next-line no-unused-vars
import { produce } from 'immer';

const InitialState = {
	currentUser: { id: 1, name: 'Rivky', email: '3254@gmail.com', phone: '0533158889' },
	currentToken:''
};



// eslint-disable-next-line no-unused-vars
export const dataReducer = produce((state, action) => {
	switch (action.type) {

	case 'SEND_TOKEN_NODE':
		debugger;
		state.currentToken=action.payload;
		console.log(state.currentToken+'hhhhhhhhhhh');
		break;
	}
	// case 'SEND_TOKEN_STORE':
	// 	debugger;
	// 	state.currentToken.push(action.payload);
	// 	console.log(state.currentToken+'hhhhhhhhhhh');
	// 	break;
	// }
}, InitialState);






