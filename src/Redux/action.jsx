export const sendTokenTNode = (token) => {
	return { type: 'SEND_TOKEN_NODE', payload: token };
};
export const sendTokenStore = (token) => {
	return { type: 'SEND_TOKEN_STORE', payload: token };
};
export const UpdateCurrentUser = (user) => {
	console.log("kkkkkkkkkkkkkkkk",user)
	return { type: 'UPDATE_CURRENT_USER', payload: user };
};

export const updateKeycloak = (Keycloak) => {
	console.log("keyclok😘😘😘",Keycloak)
	return { type: 'UPDATE_KEYCLOAK', payload: Keycloak };
};