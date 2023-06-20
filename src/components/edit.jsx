import { useSelector } from "react-redux"
import { useParams } from "react-router"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { object } from "prop-types";


export const Edit = () => {

    const website = useSelector(state => state.currentWebsit)
    const [currentWebSite, setcurrentWebSite] = React.useState(website)
    
    function setTitle(t) {
        let object ={...currentWebSite}
        object.title= t
        setcurrentWebSite(object)
        console.log(currentWebSite);
    }
    
    return <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="standard-error"
                    label="Title"
                    defaultValue={currentWebSite.title}
                    variant="standard"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    id="Standard-error"
                    label="Description"
                    defaultValue={currentWebSite.description}
                    variant="standard"
                />
                <TextField
                    id="standard-error"
                    label="Type of domain"
                    defaultValue={currentWebSite.type_of_domain}
                    variant="standard"
                />
                <TextField
                    id="standard-error"
                    label="Cpu"
                    defaultValue={currentWebSite.cpu}
                    variant="standard"
                />
                <TextField
                    id="standard-error"
                    label="Memory"
                    defaultValue={currentWebSite.memory}
                    variant="standard"
                />
                <TextField
                    id="standard-error"
                    label="Status"
                    defaultValue={currentWebSite.status}
                    variant="standard"
                />
                {/* <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        /> */}
            </div>
        </Box>






    </>
}