export const set_current_websie = (website) => {
	return { type: 'SET_CURRENT_WEBSITE', payload: website };
};

export const set_all_website = (websites) => {
	return { type: 'SET_ALL_WEBSITES', payload: websites };
};

const searchAction = (searchTerm) => ({
	type: 'SEARCH',
	payload: searchTerm,
});
  
const filterAction = (data) => ({
	type: 'FILTER',
	payload: data,
	
});
  
const sortAction = (sortTerm) => ({
	type: 'SORT',
	payload: sortTerm,
});
export { searchAction, filterAction, sortAction };


