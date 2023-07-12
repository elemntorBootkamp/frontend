/* eslint-disable no-debugger */
// eslint-disable-next-line no-unused-vars
import { produce } from 'immer';

const InitialState = {
	currentUser:{firstName:"guest"},

	currentToken:''
};

export const dataReducer = produce((state, action) => {
	switch (action.type) {
	  case 'SEND_TOKEN_NODE': {
		debugger;
		state.currentToken = action.payload;
		console.log(state.currentToken + 'hhhhhhhhhhh');}
		break;
	  
	  case 'UPDATE_CURRENT_USER': {
		debugger;
		state.currentUser = {...action.payload};
		console.log(state.currentUser+ 'helo user');}
		break;
	  
		case 'UPDATE_KEYCLOAK': {
			debugger;
			state.currentToken = {...action.payload};
			console.log(JSON.stringify(state.currentToken) + ' hello!!! 😊😊😊😊😊😊😊😊'); }
			break;
	}



  }, InitialState);






