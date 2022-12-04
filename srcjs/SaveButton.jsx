import {createTheme, ThemeProvider} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export function SaveButton({id,saveData}) {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#e05151",
                darker: "#e05151",
            },
        },
    });

    return <>
        <ThemeProvider theme={theme}>
            <IconButton
                id={id}
                onClick={saveData}
            >
                Save Data
            </IconButton>
        </ThemeProvider>
    </>
}
