import { useState } from "react";
import { LineBox } from "./dnd/LineBox.jsx";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import IosShareIcon from "@mui/icons-material/IosShare";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export function Lines() {
  const [lines, setLines] = useState([]);
  const [codeValue, setCodeValue] = useState([]);

  const [codeElements, setCodeElements] = useState([]);

  function generateCodes() {
    let temp = [];
    for (let i = 0; i < lines.length; i++) {
      temp.push(<LineBox key={lines[i]} name={`<<<<<<${lines[i]}>>>>>>`} />);
    }
    setCodeElements(temp);
  }

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
          onChange={(e) => {
            setCodeValue(e.target.value);
          }}
        />

        <IconButton
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
          <IosShareIcon />
        </IconButton>

        <div style={{ overflow: "hidden", clear: "both" }}>{codeElements}</div>
      </ThemeProvider>
    </>
  );
}
