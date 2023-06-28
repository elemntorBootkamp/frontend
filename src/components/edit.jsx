import * as React from 'react';
import { useSelector } from "react-redux"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "./Button";
import MenuItem from '@mui/material/MenuItem';
import { getValidCpu, updateWebsite } from "../api/api";
import { validateDescribtion, validateTitle, validateTypeOfDomain, validateMemory } from "./validation";
import { useEffect } from "react";
import './edit.css'

export const Edit = () => {
    
    const [errorTitle, setErrorTitel] = React.useState({})
    const [errorDescribtion, setErrorDescribtion] = React.useState({})
    const [errorTypeOfDomain,seterrorTypeOfDomain] = React.useState({})
    const [errorMemory, seterroMemory] = React.useState({})
    const [helperTextTitle, sethelperTextTitel] = React.useState()
    const [helperTextDescribtion, sethelperTextDescribtion] = React.useState()
    const [helperTextTypeOfDomain, sethelperTextTypeOfDomain] = React.useState()
    const [helperTextMemory, sethelperTextMemory] = React.useState()
    const [validcpu, setvalidcpu] = React.useState([])
    const website = useSelector(state => state.currentWebsit)
    const [currentWebSite, setcurrentWebSite] = React.useState(website)
   
    useEffect(() => {
        async function fetchData() {
            let data = await getValidCpu();
            setvalidcpu(data);
        }
        fetchData();
    }, []);

    const handleUpdate = async () => {
        if(errorDescribtion.error ||
            errorMemory.error ||
            errorTitle.error ||
            errorTypeOfDomain.error)
          alert("The form is incorrect, it is not possible to save changes");
        else {
            updateWebsite(currentWebSite);
        }
    };

    const setTitle = (title) => {
        let helperText = validateTitle(title)
        if (!helperText) {
            setErrorTitel({ error: false })
            sethelperTextTitel('')
            const titleObject = { ...currentWebSite }
            titleObject.title = title
            setcurrentWebSite(titleObject)
        } else {
            setErrorTitel({ error: true })
            sethelperTextTitel(helperText)
        }
    };

    const setDescribtion = (describtion) => {
        let helperText = validateDescribtion(describtion)
        if (!helperText) {
            setErrorDescribtion({ error: false })
            sethelperTextDescribtion('')
            const describtionObject = { ...currentWebSite }
            describtionObject.description = describtion
            setcurrentWebSite(describtionObject)
        } else {
            setErrorDescribtion({ error: true })
            sethelperTextDescribtion(helperText)
        }
    };

    const setTypeOfDomain = (typeOfDomain) => {
        let helperText = validateTypeOfDomain(typeOfDomain)
        if (!helperText) {
            seterrorTypeOfDomain({ error: false })
            sethelperTextTypeOfDomain('')
            const typeOfDomainObject = { ...currentWebSite }
            typeOfDomainObject.TypeOfDomain = typeOfDomain
            setcurrentWebSite(typeOfDomainObject)
        } else {
            seterrorTypeOfDomain({ error: true })
            sethelperTextTypeOfDomain(helperText)
        }

    };

    const setCpu = (cpu) => {
        const cpuObject = { ...currentWebSite }
        cpuObject.cpu = cpu
        setcurrentWebSite(cpuObject)
    };

    const setMemory = (memory) => {
        let helperText = validateMemory(memory)
        if (!helperText) {
            seterroMemory({ error: false })
            sethelperTextMemory('')
            const memoryObject = { ...currentWebSite }
            memoryObject.memory = memory
            setcurrentWebSite(memoryObject)
        } else {
            seterroMemory({ error: true })
            sethelperTextMemory(helperText)
        }
    };
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
            <h4>Edit</h4>
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
                    {...errorTypeOfDomain}
                    id="standard-error"
                    label="Type of domain"
                    defaultValue={currentWebSite.TypeOfDomain}
                    variant="standard"
                    onChange={(e) => setTypeOfDomain(e.target.value)}
                    helperText={helperTextTypeOfDomain}
                />
                <br></br>
                <TextField
                    id="standard-select-currency"
                    select
                    label="Cpu"
                    defaultValue=''
                    variant="standard"
                    onChange={(e) => setCpu(e.target.value)}
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
                <Button primary label="ok" onClick={async () => {handleUpdate();}}></Button>
                <br></br>
            </div>
        </Box>
    </>
}

