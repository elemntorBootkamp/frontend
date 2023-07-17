export const sendTokenStore = (token) => {
	return { type: 'SEND_TOKEN_STORE', payload: token };
};
export const setUserId = (userId) => {
	return { type: 'SET_USER_ID', payload: userId };
};