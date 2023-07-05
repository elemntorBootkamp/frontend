import { useSelector } from "react-redux"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "./button";
import MenuItem from '@mui/material/MenuItem';
import { getValidCpu, updateWebsite } from "../api/api";
import { validateDescription, validateTitle, validateTypeOfDomain, validateMemory } from "./validation";
import { useEffect, useState } from "react";
import './edit.css'

export const Edit = () => {
    
    const [errorTitle, setErrorTitel] = useState({})
    const [errorDescription, setErrorDescription] = useState({})
    const [errorTypeOfDomain,setErrorTypeOfDomain] =useState({})
    const [errorMemory, setErroMemory] =useState({})
    const [helperTextTitle, setHelperTextTitel] =useState()
    const [helperTextDescription, setHelperTextDescription] =useState()
    const [helperTextTypeOfDomain, setHelperTextTypeOfDomain] =useState()
    const [helperTextMemory, setHelperTextMemory] =useState()
    const [validcpu, setvalidcpu] = useState([])
    const website = useSelector(state => state.currentWebsite)
    const [currentWebSite, setCurrentWebSite] = useState(website)
    const currentCpu=website.cpu

    useEffect(() => {
        async function fetchData() {
            const data = await getValidCpu();
            setvalidcpu(data);
        }
        fetchData();
    }, []);

    const handleUpdate = async () => {
        if(errorDescription.error||errorMemory.error||errorTitle.error ||errorTypeOfDomain.error){
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

    const setDescription = (description) => {
        let helperText = validateDescription(description)
        if (!helperText) {
            setErrorDescription({ error: false })
            setHelperTextDescription('')
            const descriptionObject = { ...currentWebSite }
            descriptionObject.description = description
            setCurrentWebSite(descriptionObject)
        } else {
            setErrorDescription({ error: true })
            setHelperTextDescription(helperText)
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

    const setLogo = (logo) => {
        console.log(cpu1);
        const logoObject = { ...currentWebSite }
        logoObject.logo = logo
        setCurrentWebSite(logoObject)
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
                    {...errorDescription}
                    id="Standard-error"
                    label="Description"
                    defaultValue={currentWebSite.description}
                    variant="standard"
                    onChange={(e) => setDescription(e.target.value)}
                    helperText={helperTextDescription}
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
                            {option.label === currentCpu ?
                                <b>{option.label}</b> :
                                 <>{option.label}</>
                            }
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

                <TextField
                    id="standard-error"
                    label="Logo"
                    defaultValue={currentWebSite.logo}
                    variant="standard"
                    onChange={(e)=>{setLogo(e.target.value)}}
                />
                <br></br>
                <div id='buttonform'>
                    <Button primary label="ok" onClick={async()=>{handleUpdate();}}></Button>
                </div>
            </div>
        </Box>
    </>
}

