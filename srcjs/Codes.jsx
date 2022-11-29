import { useState } from "react";
import { CodeBox } from "./dnd/CodeBox.jsx";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import IosShareIcon from "@mui/icons-material/IosShare";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function Codes() {
  const [codes, setCodes] = useState([]);
  const [codeValue, setCodeValue] = useState([]);

  const [codeElements, setCodeElements] = useState([]);

  function generateCodes() {
    let temp = [];
    for (let i = 0; i < codes.length; i++) {
      temp.push(<CodeBox key={codes[i]} name={`[[${codes[i]}]]`} />);
    }
    setCodeElements(temp);
  }


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
        />

        <IconButton
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
          <IosShareIcon />
        </IconButton>
      </ThemeProvider>


      <div style={{ overflow: "hidden", clear: "both" }}>{codeElements}</div>
    </>
  );
}
