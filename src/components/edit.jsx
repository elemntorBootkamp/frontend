import { useSelector } from "react-redux"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "./button";
import MenuItem from '@mui/material/MenuItem';
import { getValidCpu, updateWebsite } from "../api/api";
import { validateDescribtion, validateTitle, validateTypeOfDomain, validateMemory } from "./validation";
import { useEffect, useState } from "react";
import './edit.css'

export const Edit = () => {
    
    const [errorTitle, setErrorTitel] = useState({})
    const [errorDescribtion, setErrorDescribtion] = useState({})
    const [errorTypeOfDomain,setErrorTypeOfDomain] =useState({})
    const [errorMemory, setErroMemory] =useState({})
    const [helperTextTitle, setHelperTextTitel] =useState()
    const [helperTextDescribtion, setHelperTextDescribtion] =useState()
    const [helperTextTypeOfDomain, setHelperTextTypeOfDomain] =useState()
    const [helperTextMemory, setHelperTextMemory] =useState()
    const [validcpu, setvalidcpu] = useState([])
    const website = useSelector(state => state.currentWebsit)
    const [currentWebSite, setCurrentWebSite] = useState(website)

    useEffect(() => {
        async function fetchData() {
            const data = await getValidCpu();
            setvalidcpu(data);
        }
        fetchData();
    }, []);

    const handleUpdate = async () => {
        if(errorDescribtion.error||errorMemory.error||errorTitle.error ||errorTypeOfDomain.error){
            alert("The form is incorrect, it is not possible to save changes");
        }else {
            updateWebsite(currentWebSite);
        }
    };

    const setTitle = (title) => {
        let helperText = validateTitle(title)
        if (!helperText) {
            setErrorTitel({ error: false })
            setHelperTextTitel('')
            const titleObject = { ...currentWebSite}
            titleObject.title = title
            setCurrentWebSite(titleObject)
        } else {
            setErrorTitel({ error: true })
            setHelperTextTitel(helperText)
        }
    };

    const setDescribtion = (describtion) => {
        let helperText = validateDescribtion(describtion)
        if (!helperText) {
            setErrorDescribtion({ error: false })
            setHelperTextDescribtion('')
            const describtionObject = { ...currentWebSite }
            describtionObject.description = describtion
            setCurrentWebSite(describtionObject)
        } else {
            setErrorDescribtion({ error: true })
            setHelperTextDescribtion(helperText)
        }
    };

    const setTypeOfDomain = (typeOfDomain) => {
        let helperText = validateTypeOfDomain(typeOfDomain)
        if (!helperText) {
            setErrorTypeOfDomain({ error: false })
            setHelperTextTypeOfDomain('')
            const typeOfDomainObject = { ...currentWebSite }
            typeOfDomainObject.TypeOfDomain = typeOfDomain
            setCurrentWebSite(typeOfDomainObject)
        } else {
            setErrorTypeOfDomain({ error: true })
            setHelperTextTypeOfDomain(helperText)
        }

    };

    const setCpu = (cpu) => {
        const cpuObject = { ...currentWebSite }
        cpuObject.cpu = cpu
        setCurrentWebSite(cpuObject)
    };

    const setMemory = (memory) => {
        let helperText = validateMemory(memory)
        if (!helperText) {
            setErroMemory({ error: false })
            setHelperTextMemory('')
            const memoryObject = { ...currentWebSite }
            memoryObject.memory = memory
            setCurrentWebSite(memoryObject)
        } else {
            setErroMemory({ error: true })
            setHelperTextMemory(helperText)
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
            <h4 id="title">Edit</h4>
            <div>
                <TextField
                    {...errorTitle}
                    id="standard-error"
                    label="Title"
                    defaultValue={currentWebSite.title}
                    variant="standard"
                    onChange={(e) => setTitle(e.target.value)}
                    helperText={helperTextTitle}
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
                    defaultValue={currentWebSite.typeOfDomain}
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
                <div id='buttonform'>
                    <Button primary label="ok" onClick={async()=>{handleUpdate();}}></Button>
                </div>
            </div>
        </Box>
    </>
}

