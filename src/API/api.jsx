import axios from 'axios';

//פונקציית GET כרגע לסתם שרת!!
//מקבלת משתמש מחפשת אותו ומחזירה את כל הפרטים שלו
//יכול להיות שבמבנה צריך לקבל גם את שם הפונקציה בתור משתנה
export const getAll = async () => {
  try {
    const response = await axios.get(`${process.env.port}/`);
    return response.data;
  } catch (err) {
    return err;
  }
};
