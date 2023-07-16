import { useSelector } from "react-redux"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "./button";
import MenuItem from '@mui/material/MenuItem';
import { addWebsite, getValidCpu, updateWebsite } from "../api/api";
import { validateDescription, validateTitle, validateTypeOfDomain, validateMemory, validateLogo, validateOwner, validateManagerId, validateDomain } from "./validation";
import { useEffect, useState } from "react";
import './edit.css'
import { useParams } from "react-router";

export const Edit = () => {

    const params = useParams();
    const state=params.state;
    const [errorTitle, setErrorTitel] = useState(state==="add"&&{error: true})
    const [errorDescription, setErrorDescription] = useState(state==="add"&&{error: true})
    const [errorTypeOfDomain,setErrorTypeOfDomain] =useState(state==="add"&&{error: true})
    const [errorMemory, setErroMemory] =useState(state==="add"&&{error: true})
    const [errorManagerId,setErrManagerId]=useState(state==="add"&&{error: true})
    const [errorOwner,setErrOwner]=useState(state==="add"&&{error: true})
    const [errorLogo,setErrLogo]=useState(state==="add"&&{error: true})    
    const [errorDomain,setErrDomain]=useState(state==="add"&&{error: true})
    const [helperTextTitle, setHelperTextTitel] =useState()
    const [helperTextLogo, setHelperTextLogo] =useState()
    const [helperTextDescription, setHelperTextDescription] =useState()
    const [helperTextTypeOfDomain, setHelperTextTypeOfDomain] =useState()
    const [helperTextMemory, setHelperTextMemory] =useState()
    const [helperManagerId, setHelperTexManagerId] =useState()
    const [helperTextOwner, setHelperTextOwner] =useState()
    const [helperTextDomain, setHelperTextDomain] =useState()
    const [validcpu, setvalidcpu] = useState([])
    const website = useSelector(state => state.currentWebsite)   
    const [arrDomain, setArrDomain] = useState(state==="edit"?[...website.domain]:['','',''])
    const [currentWebSite, setCurrentWebSite] = useState(params.state==='edit'?website:{})
    const currentCpu=website.cpu

    useEffect(() => {
        async function fetchData() {
            const data = await getValidCpu();
            setvalidcpu(data);
        }
        fetchData();
    }, []);

    const handleUpdate = async () => {
        if(errorDescription.error||errorMemory.error||errorTitle.error ||errorTypeOfDomain.error
            ||errorDomain.error||errorLogo.error||errorOwner.error||errorManagerId.error){
            alert("The form is incorrect, it is not possible to save changes");
        }else {
            const domainObject={...currentWebSite};
            domainObject.domain=arrDomain;
            setCurrentWebSite(domainObject);
            if(params.state==='edit'){
                updateWebsite(currentWebSite);
            }else{
                addWebsite(currentWebSite);
            } 
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
        let helperText = validateLogo(logo);
        if (!helperText) {
            setErrLogo({ error: false })
            setHelperTextLogo('')
            const logoObject = { ...currentWebSite }
            logoObject.websiteLogo = logo
            setCurrentWebSite(logoObject)
        } else {
            setErrLogo({ error: true })
            setHelperTextLogo(helperText)
        }
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
    const setOwner=(owner)=>{
        let helperText = validateOwner(owner);
        if (!helperText) {
            setErrOwner({ error: false })
            setHelperTextOwner('')
            const ownerObject = { ...currentWebSite }
            ownerObject.owner = owner
            setCurrentWebSite(ownerObject)
        } else {
            setErrOwner({ error: true })
            setHelperTextOwner(helperText)
        }
    };
    const setManagerId=(managerId)=>{
        let helperText = validateManagerId(managerId);
        if (!helperText) {
            setErrManagerId({ error: false })
            setHelperTexManagerId('')
            const managerIdObject = { ...currentWebSite }
            managerIdObject.managerId = managerId
            setCurrentWebSite(managerIdObject)
        } else {
            setErrManagerId({ error: true })
            setHelperTexManagerId(helperText)
        }
    }
    const setDomain=(domain,index)=>{
       let arr=[...arrDomain];
       arr[index]=domain;
    let helperText=validateDomain(arr);
    if (!helperText) {
        setErrDomain({ error: false })
        setHelperTextDomain('')
        setArrDomain([...arr]);
    } else {
        setErrDomain({ error: true })
        setHelperTextDomain(helperText)
    }
    }
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
            <h4 id="title">{params.state==="add"?"Add website":"Edit"}</h4>
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
                    {...errorManagerId}
                    id="standard-error"
                    label="Manager id"
                    defaultValue={currentWebSite.managerId}
                    variant="standard"
                    helperText={helperManagerId}
                    onChange={(e) => setManagerId(e.target.value)}
                />
                <br></br>  
                <TextField
                    {...errorOwner}
                    id="standard-error"
                    label="Owner"
                    defaultValue={currentWebSite.owner}
                    variant="standard"
                    helperText={helperTextOwner}
                    onChange={(e) => setOwner(e.target.value)}

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
                    {...errorDomain}
                    id="standard-error"
                    label="Domain"
                    variant="standard"
                    defaultValue={arrDomain[0]}
                    onBlur={(e) => setDomain(e.target.value,0)}
                    helperText={helperTextDomain}
                />            
                <br></br>
                <TextField
                    {...errorDomain}
                    id="standard-error"
                    label="Domain"
                    variant="standard"
                    defaultValue={arrDomain[1]}
                    onBlur={(e) => setDomain(e.target.value,1)}
                    helperText={helperTextDomain}
                />            
                <br></br>
                <TextField
                    {...errorDomain}
                    id="standard-error"
                    label="Domain"
                    variant="standard"
                    defaultValue={arrDomain[2]}
                    onBlur={(e) => setDomain(e.target.value,2)}
                    helperText={helperTextDomain}
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
                            {option.label === currentCpu && params.state==="edit" ?
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
                    {...errorLogo}
                    id="standard-error"
                    label="Logo"
                    defaultValue={currentWebSite.websiteLogo}
                    variant="standard"
                    onChange={(e)=>{setLogo(e.target.value)}}
                    helperText={helperTextLogo}
                />
                <br></br>
                <div id='buttonform'>
                    <Button primary label="ok" onClick={async()=>{handleUpdate();}}></Button>
                </div>
            </div>
        </Box>
    </>
}

