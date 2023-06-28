import axios from 'axios';

export const updateWebsite = async (website) => {
    const SERVERURL = import.meta.env.VITE_SERVER_URL;
    await axios.put(`${SERVERURL}/website/update`, website)
        .then((res) => {
            return res
        })
        .catch((err) => {
            console.log(err);
        })
}

