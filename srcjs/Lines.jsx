import {useEffect, useState} from "react";
import {LineBox} from "./dnd/LineBox.jsx";
import TextField from "@mui/material/TextField";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Button} from "@mui/material";

export function Lines({lineText}) {
    const [loading, setIsLoading] = useState(true);

    const [lines, setLines] = useState([]);
    const [codeValue, setCodeValue] = useState([]);

    const [codeElements, setCodeElements] = useState([]);

    function generateCodes() {
        let temp = [];
        for (let i = 0; i < lines.length; i++) {
            temp.push(<LineBox key={lines[i]} name={`---<<${lines[i]}>>---`}/>);
        }
        setCodeElements(temp);
    }


    useEffect(() => {
        if (loading) {
            let temp = lines;
            let splittedLines = lineText.split(",");

            for (let i = 0; i < splittedLines.length; i++) {
                if (splittedLines[i].trim().length !== 0) {
                    temp.push(splittedLines[i]);
                }
            }

            setLines(temp);
            setIsLoading(false);
            generateCodes();
        }
    }, [loading])

    const theme = createTheme({
        palette: {
            primary: {
                main: "#e05151",
                darker: "#e05151",
            },
        },
    });

    return (
        <>
            <ThemeProvider theme={theme}>
                <TextField
                    label="New Line"
                    variant="outlined"
                    size="small"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            let temp = lines;
                            let notFound = true;

                            for (let i = 0; i < temp.length; i++) {
                                if (temp[i] === codeValue) {
                                    notFound = false;
                                }
                            }

                            if (notFound) {
                                temp.push(codeValue);
                                setLines(temp);
                                generateCodes();
                            }
                        }
                    }}
                    onChange={(e) => {
                        setCodeValue(e.target.value);
                    }}
                />

                <Button
                    variant="outlined"
                    onClick={() => {
                        let temp = lines;
                        let notFound = true;

                        for (let i = 0; i < temp.length; i++) {
                            if (temp[i] === codeValue) {
                                notFound = false;
                            }
                        }

                        if (notFound) {
                            temp.push(codeValue);
                            setLines(temp);
                            generateCodes();
                        }
                    }}
                    aria-label="delete"
                >
                    Add a break
                    {/*<IosShareIcon/>*/}
                </Button>

                <div style={{overflow: "hidden", clear: "both", display: "block"}}>{codeElements}</div>
            </ThemeProvider>
        </>
    );
}
