export const validateTitle=(title)=>{
	if (title.length > 50) {
		return'Maximum length 50 characters';
	}else if (!title) {
		return'required';
	}else if (title.length < 3) {
		return 'Minimum length 3 characters';
	}else if (!/^[a-zA-Z\s]+$/.test(title)) {
		return 'Can contain English letters and spirits only';
	}else {
		return '';
	}
};

export const validateDescription=(describtion)=> {
	if (describtion.length > 100) {
		return 'Maximum length 100 characters';
	}else if (!describtion) {
		return 'required';
	}else if (describtion.length < 10) {
		return 'Minimum length 10 characters';
	}else if (!/^[a-zA-Z\s]+$/.test(describtion)) {
		return 'Can contain English letters and spirits only';
	}else {
		return '';
	}
};

export const validateTypeOfDomain=(typeOfDomain)=>{
	if (typeOfDomain.length > 63) {
		return 'Maximum length 63 characters';
	}else if (!typeOfDomain) {
		return 'required';
	}else if (!/^[a-zA-Z0-9-]+$/.test(typeOfDomain)) {
		return 'Can only contain English letters, numbers and dashes';
	}else if (typeOfDomain[typeOfDomain.length - 1] === '-' || typeOfDomain[0]==='-') {
		return 'A dash cannot appear at the end or at the beginning';
	}else {
		return '';
	}
};

export const validateMemory=(memory)=>{
	if(!memory){
		return 'required';
	}if (!/^\d+$/.test(memory)) {
		return 'Can only contain numbers';
	}else if (parseInt(memory) < 10) {
		return'Number must be bigger than 10';
	}else {
		return '';
	}
};

export const validateLogo=(logo)=>{
	if(!logo){
		return 'required';
	}
};