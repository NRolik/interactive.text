import {useEffect, useState} from "react";
import {CodeBox} from "./dnd/CodeBox.jsx";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import IosShareIcon from "@mui/icons-material/IosShare";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Button} from "@mui/material";

export function Codes({codeText}) {
    const [loading, setIsLoading] = useState(true);

    const [codes, setCodes] = useState([]);
    const [codeValue, setCodeValue] = useState([]);

    const [codeElements, setCodeElements] = useState([]);

    function generateCodes() {
        let temp = [];
        for (let i = 0; i < codes.length; i++) {
            temp.push(<CodeBox key={codes[i]} name={`[[${codes[i]}]]`}/>);
        }
        setCodeElements(temp);
    }

    useEffect(() => {
        if(loading) {
            let temp = codes;
            let splittedCodes = codeText.split(",");

            for (let i = 0; i < splittedCodes.length; i++) {
                if(splittedCodes[i].trim().length !== 0){
                    temp.push(splittedCodes[i]);
                }
            }

            setCodes(temp);
            setIsLoading(false);
            generateCodes();
        }
    },[loading])



    const theme = createTheme({

        palette: {
            primary: {
                main: '#e05151',
                darker: '#e05151',
            }
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <TextField
                    label="New Code"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                        setCodeValue(e.target.value);
                    }}
                    onKeyDown={(e)=>{
                        if (e.key === 'Enter') {
                            let temp = codes;
                            let notFound = true;

                            for (let i = 0; i < temp.length; i++) {
                                if (temp[i] === codeValue) {
                                    notFound = false;
                                }
                            }

                            if (notFound) {
                                temp.push(codeValue);
                                setCodes(temp);
                                generateCodes();
                            }
                        }
                    }}
                />

                <Button
                    variant="outlined"
                    onClick={() => {
                        let temp = codes;
                        let notFound = true;

                        for (let i = 0; i < temp.length; i++) {
                            if (temp[i] === codeValue) {
                                notFound = false;
                            }
                        }

                        if (notFound) {
                            temp.push(codeValue);
                            setCodes(temp);
                            generateCodes();
                        }
                    }}
                    aria-label="delete"
                >
                    Add a code
                    {/*<IosShareIcon/>*/}
                </Button>
            </ThemeProvider>


            <div style={{overflow: "hidden", clear: "both", display:"block"}}>{codeElements}</div>
        </>
    );
}
