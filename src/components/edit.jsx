import { useSelector } from "react-redux"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "./Button";
import MenuItem from '@mui/material/MenuItem';
import { updateWebsite } from "../api/api";
import './edit.css'


export const Edit = () => {
    let currencies = [
        { value: 'Intel Core i3', label: 'Intel Core i3' },
        { value: 'Intel Core i5', label: 'Intel Core i5', },
        { value: 'Intel Core i7', label: 'Intel Core i7', },
        { value: 'Intel Xeon', label: 'Intel Xeon',},
        { value: 'AMD Ryzen 3', label: 'AMD Ryzen 3', },
        { value: 'AMD Ryzen 5', label: 'AMD Ryzen 5', },
        { value: 'AMD Ryzen 7', label: 'AMD Ryzen 7', },
        { value: 'ARM Cortex-A53', label: 'ARM Cortex-A53', },
        { value: 'ARM Cortex-A72', label: 'ARM Cortex-A72', },
        { value: 'ARM Cortex-A73', label: 'ARM Cortex-A73', },
    ];

    const website = useSelector(state => state.currentWebsit)
    const [currentWebSite, setcurrentWebSite] = React.useState(website)

    function setTitle(t) {
        if (t.length > 50) {
            setErrorTitel({ error: true })
            sethelperTextTitel('Maximum length 50 characters')
        }
        else if (t.length === 0) {
            setErrorTitel({ error: true })
            sethelperTextTitel('required')
        }
        else if (t.length < 3) {
            setErrorTitel({ error: true })
            sethelperTextTitel('Minimum length 3 characters')
        }
        else if (!/^[a-zA-Z\s]+$/.test(t)) {
            setErrorTitel({ error: true })
            sethelperTextTitel('Can contain English letters and spirits only')
        }

        else {
            setErrorTitel({ error: false })
            sethelperTextTitel('')
            let object = { ...currentWebSite }
            object.title = t
            setcurrentWebSite(object)
        }


    }
    function setDescribtion(d) {
        if (d.length > 100) {
            setErrorDescribtion({ error: true })
            sethelperTextDescribtion('Maximum length 100 characters')
        }
        else if (d.length === 0) {
            setErrorDescribtion({ error: true })
            sethelperTextDescribtion('required')
        }
        else if (d.length < 10) {
            setErrorDescribtion({ error: true })
            sethelperTextDescribtion('Minimum length 10 characters')
        }
        else if (!/^[a-zA-Z\s]+$/.test(d)) {
            setErrorDescribtion({ error: true })
            sethelperTextDescribtion('Can contain English letters and spirits only')
        }
        else {
            setErrorDescribtion({ error: false })
            sethelperTextDescribtion('')
            let object = { ...currentWebSite }
            object.description = d
            setcurrentWebSite(object)
        }

    }
    function setType_of_domain(t) {
        if (t.length > 63) {
            seterrorType_of_domain({ error: true })
            sethelperTextType_of_domain('Maximum length 63 characters')
        }
        else if (t.length == 0) {
            seterrorType_of_domain({ error: true })
            sethelperTextType_of_domain('required')
        }
        else if (!/^[a-zA-Z0-9-]+$/.test(t)) {
            seterrorType_of_domain({ error: true })
            sethelperTextType_of_domain('Can only contain English letters, numbers and dashes')
        }
        else if (t[t.length - 1] === '-') {
            seterrorType_of_domain({ error: true })
            sethelperTextType_of_domain('A hyphen cannot appear at the end')
        }
        else {
            seterrorType_of_domain({ error: false })
            sethelperTextType_of_domain('')
            let object = { ...currentWebSite }
            object.type_of_domain = t
            setcurrentWebSite(object)
        }

    }
    function setCpu(c) {
        let object = { ...currentWebSite }
        object.cpu = c
        setcurrentWebSite(object)
    }
    function setMemory(m) {
        if (!/^\d+$/.test(m)) {
            seterroMemory({ error: true })
            sethelperTextMemory('Can only contain numbers')
        }
        else if (parseInt(m) < 10) {
            seterroMemory({ error: true })
            sethelperTextMemory('Number must be bigger than 10')
        }
        else {
            seterroMemory({ error: false })
            sethelperTextMemory('')
            let object = { ...currentWebSite }
            object.memory = m
            setcurrentWebSite(object)
        }


    }
    function setState(s) {
        let object = { ...currentWebSite }
        object.state = s
        setcurrentWebSite(object)
    }

    function postNewWebsiteToTheServer(){
        if( errorDescribtion.error === true ||
            errorMemory.error === true ||
            errorState.error === true ||
            errorTitle.error === true ||
            errorType_of_domain.error === true)      
        return false
        return true  
   }
   
    const [errorTitle, setErrorTitel] = React.useState({})
    const [errorDescribtion, setErrorDescribtion] = React.useState({})
    const [errorType_of_domain, seterrorType_of_domain] = React.useState({})
    const [errorMemory, seterroMemory] = React.useState({})
    const [errorState, seterroState] = React.useState({})

    const [helperTextTitle, sethelperTextTitel] = React.useState()
    const [helperTextDescribtion, sethelperTextDescribtion] = React.useState()
    const [helperTextType_of_domain, sethelperTextType_of_domain] = React.useState()
    const [helperTextMemory, sethelperTextMemory] = React.useState()
    const [helperTextState, sethelperTextState] = React.useState()
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
                    variant="standard"
                    onChange={(e) => setCpu(e.target.value)}
                >
                    {currencies.map((option) => (
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

                <TextField
                    {...errorState}
                    id="standard-error"
                    label="Status"
                    defaultValue={currentWebSite.status}
                    variant="standard"
                    onChange={(e) => setState(e.target.value)}
                />
                <br></br>
                <br></br>
                <Button primary label="ok" onClick={async () =>{
                    let update=postNewWebsiteToTheServer()
                    if(!update)
                    alert("The form is incorrect, it is not possible to save changes");//לא תקין
                    else
                    {
                    console.log(currentWebSite);
                    let respons=await updateWebsite(currentWebSite)
                    console.log(respons);
                    }
                }}></Button>
                <br></br>
                <br></br>
            </div>
        </Box>
    </>
}