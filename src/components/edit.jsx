import { useSelector } from "react-redux"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "./Button";
import MenuItem from '@mui/material/MenuItem';
import { updateWebsite } from "../api/api";
import {validateDescribtion,validateTitle,validateType_of_domain,validateMemory} from "./validation";
import './edit.css'
import axios from "axios";


export const Edit = () => {
      React.useEffect(() => {
        async function fetchData() {
            axios('http://localhost:8090/website/validcpu')
            .then((res)=>{ setvalidcpu(res.data)})
            .catch((err)=>{console.log(err);})
        }
        fetchData();  
      }, []);
    const [validcpu,setvalidcpu]=React.useState([])
    const website = useSelector(state => state.currentWebsit)
    const [currentWebSite, setcurrentWebSite] = React.useState(website)

    const handleUpdate = async () => {
        let updatedWebsite = await updateWebsite(currentWebSite);
        console.log(updatedWebsite);
      };

    function setTitle(t) {
        let helperText=validateTitle(t)
        if(helperText==='')
        {
            setErrorTitel({ error: false })
            sethelperTextTitel('')
            let object = { ...currentWebSite }
            object.title = t
            setcurrentWebSite(object)
        }
        else
        {
            setErrorTitel({error:true})
            sethelperTextTitel(helperText)
        }
    };

    function setDescribtion(d) {
        let helperText=validateDescribtion(d)
        if(helperText==='')
        {
            setErrorDescribtion({ error: false })
            sethelperTextDescribtion('')
            let object = { ...currentWebSite }
            object.description = d
            setcurrentWebSite(object)
        }
        else
        {
            setErrorDescribtion({error:true})
            sethelperTextDescribtion(helperText)
        }
    };

    function setType_of_domain(t) {
        let helperText=validateType_of_domain(t)
       
        if(helperText==='')
        {
            seterrorType_of_domain({ error: false })
            sethelperTextType_of_domain('')
            let object = { ...currentWebSite }
            object.type_of_domain = t
            setcurrentWebSite(object)
        }
        else
        {
            seterrorType_of_domain({error:true})
            sethelperTextType_of_domain(helperText)
        }
        
    };
    
    function setCpu(c) {
        let object = { ...currentWebSite }
        object.cpu = c
        setcurrentWebSite(object)
    };

    function setMemory(m) {
        let helperText=validateMemory(m)
        if(helperText==='')
        {
            seterroMemory({ error: false })
            sethelperTextMemory('')
            let object = { ...currentWebSite }
            object.memory = m
            setcurrentWebSite(object)
        }
        else
        {
            seterroMemory({error:true})
            sethelperTextMemory(helperText)
        }
    };

    function postNewWebsiteToTheServer() {
        if (errorDescribtion.error === true ||
            errorMemory.error === true ||
            errorTitle.error === true ||
            errorType_of_domain.error === true)
            return false
        return true
    }

    const [errorTitle, setErrorTitel] = React.useState({})
    const [errorDescribtion, setErrorDescribtion] = React.useState({})
    const [errorType_of_domain, seterrorType_of_domain] = React.useState({})
    const [errorMemory, seterroMemory] = React.useState({})

    const [helperTextTitle, sethelperTextTitel] = React.useState()
    const [helperTextDescribtion, sethelperTextDescribtion] = React.useState()
    const [helperTextType_of_domain, sethelperTextType_of_domain] = React.useState()
    const [helperTextMemory, sethelperTextMemory] = React.useState()
    
    return <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            id="box"
        >
            <h1>Edit</h1>
            <div>
                <TextField
                    {...errorTitle}
                    id="standard-error"
                    label="Title"
                    helperText={helperTextTitle}
                    defaultValue={currentWebSite.title}
                    variant="standard"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <br></br>

                <TextField
                    {...errorDescribtion}
                    id="Standard-error"
                    label="Description"
                    defaultValue={currentWebSite.description}
                    variant="standard"
                    onChange={(e) => setDescribtion(e.target.value)}
                    helperText={helperTextDescribtion}
                />

                <br></br>

                <TextField
                    {...errorType_of_domain}
                    id="standard-error"
                    label="Type of domain"
                    defaultValue={currentWebSite.type_of_domain}
                    variant="standard"
                    onChange={(e) => setType_of_domain(e.target.value)}
                    helperText={helperTextType_of_domain}
                />

                <br></br>

                <TextField
                    id="standard-select-currency"
                    select
                    label="Cpu"
                    defaultValue=''
                    variant="standard"
                    onChange={(e)=>setCpu(e.target.value)}
                >
                    {validcpu.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}    
                        </MenuItem>
                    ))}
                </TextField>

                <br></br>

                <TextField
                    {...errorMemory}
                    id="standard-error"
                    label="Memory"
                    defaultValue={currentWebSite.memory}
                    variant="standard"
                    onChange={(e) => setMemory(e.target.value)}
                    helperText={helperTextMemory}
                />

                <br></br>
                <br></br>
                <br></br>

                <Button primary label="ok" onClick={ async() => {
                    
                    let update = postNewWebsiteToTheServer()
                    if (!update)
                        alert("The form is incorrect, it is not possible to save changes"); 
                    else 
                        handleUpdate()         
                }}>
                </Button>

                <br></br>
                <br></br>

            </div>

        </Box>

    </>
}

