export const sendTokenTNode = (token) => {
	return { type: 'SEND_TOKEN_NODE', payload: token };
};
export const sendTokenStore = (token) => {
	return { type: 'SEND_TOKEN_STORE', payload: token };
};