export const validateTitle=(t)=>{
    if (t.length > 50) {
        return'Maximum length 50 characters';
    }
    else if (t.length === 0) {
        return'required';
    }
    else if (t.length < 3) {
        return 'Minimum length 3 characters'
    }
    else if (!/^[a-zA-Z\s]+$/.test(t)) {
        return 'Can contain English letters and spirits only';
    }
    else {
        return '';
    }
};
export const validateDescribtion=(d)=> {
    if (d.length > 100) {
       return 'Maximum length 100 characters';
    }
    else if (d.length === 0) {
        return 'required';
    }
    else if (d.length < 10) {
       return 'Minimum length 10 characters';
    }
    else if (!/^[a-zA-Z\s]+$/.test(d)) {
        return 'Can contain English letters and spirits only';
    }
    else {
      return '';
    }
};
 export const validateType_of_domain=(t)=>{
    if (t.length > 63) {
        return 'Maximum length 63 characters';
    }
    else if (t.length == 0) {
       return 'required';
    }
    else if (!/^[a-zA-Z0-9-]+$/.test(t)) {
       return 'Can only contain English letters, numbers and dashes';
    }
    else if (t[t.length - 1] === '-' || t[0]==='-') {
        return 'A dash cannot appear at the end or at the beginning';
    }
    else {
       return '';
    }
};

export const validateMemory=(m)=>{
    if(m===''){
       return 'required';
    }
    if (!/^\d+$/.test(m)) {
        return 'Can only contain numbers';
    }
    else if (parseInt(m) < 10) {
        return'Number must be bigger than 10';
    }
    else {
       return '';
    }
};