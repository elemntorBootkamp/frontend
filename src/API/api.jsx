import axios from "axios"

export const getAll = async () => {
    const port = import.meta.env.VITE_PORT || 8090
    try {
        const response = await axios.get(`http://localhost:${port}/api/getAll`)
        return response.data

    }
    catch (err) {
        return err;
    }
}

export const updateWebsite = async (website) => {
    const portWebsite = import.meta.env.VITE_PORT_WEBSITE;
    await axios.put(`${portWebsite}/website/update`, website)
        .then((res) => {
            console.log(res.data);
            return res
        })
        .catch((err) => {
            console.log(err);
            return err
        })
}

